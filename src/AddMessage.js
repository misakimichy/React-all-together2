import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
    state = {
        message: '',
    };

    // Update state
    handleInputChange = event => {
        const { value } = event.target;
        this.setState(() => ({
            message: value,
        }));
    };

    handleSend = event => {
        event.preventDefault();
        // Invoke the callback function
        this.props.onMessage(this.state.message);
    };

    isDisabled = () => {
        const { message } = this.state;
        return message === '';
    };

    render() {
        const { message } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSend} className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your message..."
                        value={message}
                        onChange={this.handleInputChange}
                    />
                    <div className="input-group-append">
                        <button 
                            className="btn submit-button" 
                            disabled={this.isDisabled()}
                        >
                            SEND
                        </button>
                    </div>
                </form>
            </div> 
        )
    }
};

// Add Prop-types
AddMessage.propTypes = {
    onMessage: PropTypes.func.isRequired,
};

export default AddMessage;
