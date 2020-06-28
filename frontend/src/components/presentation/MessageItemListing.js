import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../../App.css';

class MessageItemListing extends Component {

    getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement; 
    }
    
    _onView = (event) => {
	// var target = this.getEventTarget(event);
	// this.props.detail(target.innerHTML);
	
    }
    
    render() {
	let id = this.props.id;
	console.log("***");
	console.log(id);
	console.log("***");
        return (
	    <div>
		<li id="message">
	  	  {this.props.mess}
		  <i>({this.props.username})</i>
		  <Link class="link" to={`/messages/${id}`}>More Detail</Link>
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
