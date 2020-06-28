import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MessageItemDetail extends Component {
    render(){
        return (
            <div>
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.body}</p>
            </div>
        )
    }
}

MessageItemDetail.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })
};

export default MessageItemDetail;
