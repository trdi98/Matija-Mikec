import React, { Component } from 'react';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import './App.css';

class App extends Component {
  state = {
    username: '',
    user: null,
    repos: []
  };

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username } = this.state;
    if (username) {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        const user = await userResponse.json();
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposResponse.json();
        this.setState({ user, repos });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  handleReset = () => {
    this.setState({ username: '', user: null, repos: [] });
  };

  render() {
    const { username, user, repos } = this.state;
    return (
      <div className="App">
        {!user ? (
          <UserForm
            username={username}
            onInputChange={this.handleInputChange}
            onFormSubmit={this.handleFormSubmit}
          />
        ) : (
          <UserDetails user={user} repos={repos} onReset={this.handleReset} />
        )}
      </div>
    );
  }
}

export default App;
