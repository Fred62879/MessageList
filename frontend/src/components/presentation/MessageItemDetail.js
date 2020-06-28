import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MessageItemDetail extends Component {
    render(){
        return (
            <div>
                <div><Link to={`/messages/${this.props.id}`}><b>{this.props.title}</b></Link></div>
		<div>{this.props.teaser}</div>
            </div>
        )
    }
}

export default MessageItemDetail
