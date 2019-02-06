import React, { Component } from 'react';
import { Container } from './styles';

import like from '../../assets/like.svg';

export default class Tweet extends Component {
  render() {
    const { tweet } = this.props;

    return (
      <Container>
        <li>
          <strong>{tweet.author}</strong>
          <p>{tweet.content}</p>
          <button>
            <img src={like} alt="Like" />
            {tweet.likes}
          </button>
        </li>
      </Container>
    );
  }
}
