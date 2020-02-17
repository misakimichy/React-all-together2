import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ChatWindow from './ChatWindow'

class App extends Component {
  users = [{ username: 'User 1' }, { username: 'User 2' }]
  state = {
    messages: [{
        username: 'User 1',
        text: 'Hey bro'
      }
    ],
  }

  // Manage the central app state
  handleMessage = (username, message) => {
    const newMessage = {
      ['username']: username,
      ['text']: message,
    }
    this.setState(currentState => ({
      messages: currentState.messages.concat([newMessage]),
    }))
  }

  render() {
    const { messages } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React State Practice</h1>
        </header>
        <div className="container">
          {this.users.map(user => (
            <ChatWindow 
            key={user.username}
            user={user}
            messages={messages}
            onMessage={this.handleMessage}
          />
          ))}
        </div>
      </div>
    )
  }
}

export default App
