import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
    onMessage = message => {
        this.props.onPostMessage(this.props.user.username, message);
    };

    render() {
        // console.log('Props', this.props);
        const { user, messages } = this.props;
        return (
            <div className="chat-window">
                <h2>Super Awesome Chat</h2>
                <div className="name sender">{user.username}</div>
                <MessageHistory />
                <AddMessage />
            </div>
        );
    }
}

// Add Prop-types
ChatWindow.propTypes = {
    user: PropTypes.object.isRequired,
    messages: PropTypes.array.isRequired,
    onMessage: PropTypes.func.isRequired,
}

export default ChatWindow;
