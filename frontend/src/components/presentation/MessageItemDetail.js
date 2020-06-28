import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MessageItemDetail extends Component {
    render(){
        return (
            <div>
                <h2>Message Detail</h2>
		<p>Hi there, the message stored is {this.props.data.mess}</p>
                <p>It is written by {this.props.data.username}</p>
            </div>
        )
    }
}

MessageItemDetail.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        mess: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    })
};

export default MessageItemDetail;
