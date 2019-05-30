import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMessage extends Component {
    state = {
        message: '',
    };

    handleSend = event => {
        event.preventDefault();
        this.props.onMessage(this.state.message);
    }


};

// Add Prop-types
AddMessage.propTypes = {
    onMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
};

export default AddMessage;
