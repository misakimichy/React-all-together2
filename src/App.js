import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

class App extends Component {
  users = [{ username: 'Coop' }, { username: 'Piroshki' }];
  state = {
    messages: [{
        username: 'Coop',
        text: 'Hey bro'
      }
    ],
  };

  onMessage = (username, message) => {
    const newMessage = {
      ['username']: username,
      ['text']: message,
    };
    this.setState(currentState => ({
      messages: [currentState.messages.concat([newMessage])],
    }));
  };

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {this.users.map(user => (
            <ChatWindow 
            key={user.username}
            user={user}
            messages={messages}
            onMessage={this.onMessage}
          />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
