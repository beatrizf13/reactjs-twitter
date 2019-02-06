import React, { Component } from 'react';
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
    const response = await api.get('/tweets');

    this.setState({ tweets: response.data });
  }

  handleNewTweet = async (e) => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const auhtor = localStorage.getItem('@Twitter: username');

    await api.post('/tweets', { content, auhtor });

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
            <Tweet key={tweet._id} tweet={tweet} />
          ))}
        </ul>
      </Container>
    );
  }
}
