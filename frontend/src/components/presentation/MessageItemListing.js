import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../App.css';

class MessageItemListing extends Component {
    
    render() {
	let id = this.props.id;
        return (
	    <div>
		<li class="messageli">
		  <div class="item1">
	  	    {this.props.mess}
	          </div>
		  <div class="item1">
		    <i>({this.props.username})</i>
		  </div>
		  <div class="item2">
		    <Link class="link" to={`/messages/detail/${id}`}>More Detail</Link>
		  </div>
	 	  <div class="item2">
		    <Link class="link" to={`/messages/update/${id}`}>Editing</Link>
		  </div>
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
