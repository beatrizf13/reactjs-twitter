import React, { Component } from 'react';
import socket from 'socket.io-client';
import api from '../../services/api';

import Logo from '../../assets/twitter.svg';
import { Container } from './styles';
import Tweet from '../../components/tweet';

export default class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: '',
  };

  async componentDidMount() {
    this.subscribeToEvents();
    const response = await api.get('/tweets');

    this.setState({ tweets: response.data });
  }

  subscribeToEvents = () => {
    const io = socket('http://localhost:3000');

    io.on('tweet', (data) => {
      this.setState({ tweets: [data, ...this.state.tweets] });
    });
    io.on('like', (data) => {
      this.setState({
        tweets: this.state.tweets.map(tweet => (tweet._id === data._id ? data : tweet)),
      });
    });
  };

  handleNewTweet = async (e) => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@Twitter: username');

    await api.post('/tweets', { content, author });

    this.setState({ newTweet: '' });
  };

  handleInputChange = (e) => {
    this.setState({ newTweet: e.target.value });
  };

  render() {
    return (
      <Container>
        <img height={24} src={Logo} alt="Logo" />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="What's happening?"
          />
        </form>

        <ul>
          {this.state.tweets.map(tweet => (
            <li>
              <Tweet key={tweet._id} tweet={tweet} />
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}
