import React, {Component} from 'react';
import { connect } from 'react-redux';
import { display, store, detail } from '../../actions';
import MIL from '../presentation/MessageItemListing';

class Messages extends Component {
    getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement; 
    }
    
    _onView = (event) => {
	var target = this.getEventTarget(event);
	// alert(target.innerHTML);
	this.props.detail(target.innerHTML);
    }
    
    render() {
	let allmess = [];
	if (this.props.dc === 1)
	    allmess = this.props.contents;

        return (
		<div>
		<ul id="messages" onClick={this._onView}>{ allmess.map((message) =><MIL mess={message.mess} username={message.username} />) }</ul>
		</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { dc: state.displayCho, contents: state.contents };
}

export default connect(mapStateToProps, { display, store, detail })(Messages);
// export default Messages;
