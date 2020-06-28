import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../../App.css';

const unstyle = {
    'font-size': '1em',
    float: 'left',
    margin: '0 1em',
    'text-decoration': 'none',
}

const listyle = {
    'font-size': '1em',
    float: 'left',
    margin: '0 0',
    'text-decoration': 'none',
};


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
    // id: PropTypes.string.isRequired,
    mess: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
};

export default MessageItemListing;
