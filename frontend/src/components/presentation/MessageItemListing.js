import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

class MessageItemListing extends Component {
    render() {
        return (
	    <div>
		<li id="message">
	  	{this.props.mess}
		<i>({this.props.username})</i>
		</li>
		<br></br>
            </div>
        )
    }
}

MessageItemListing.propTypes = {
    id: PropTypes.string.isRequired,
    mess: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

export default MessageItemListing;
