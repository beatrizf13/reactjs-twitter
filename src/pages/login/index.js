import React, { Component } from 'react';

import Logo from '../../assets/twitter.svg';
import { Container } from './styles';

export default class login extends Component {
  state = {
    username: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem('@Twitter: username', username);

    this.props.history.push('/timeline');
  };

  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <Container>
        <img src={Logo} alt="Logo" />
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            onChange={this.handleInputChange}
            placeholder="Username"
          />
          <button type="submit">Login</button>
        </form>
      </Container>
    );
  }
}
