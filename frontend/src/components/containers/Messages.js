import React, {Component} from 'react';
import { connect } from 'react-redux';
import { display, store, detail } from '../../actions';
import MIL from '../presentation/MessageItemListing';
import { fetchMessages } from '../../actions/index';

class Messages extends Component {
    getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement; 
    }
    
    _onView = (event) => {
	var target = this.getEventTarget(event);
	this.props.detail(target.innerHTML);
    }

    componentDidMount(){

         const fakeMess = [
	     {
		 "id": "1",
		 "mess": "Hello",
		 "username": "Frank",
	     },
	     {
		 "id": "2",
		 "mess": "Hola",
		 "username": "Eric"
	     }
	 ];
        
        this.props.dispatch(fetchMessages(fakeMess));
    }
    
    render() {
	let allmess = [];
	if (this.props.dc === 1)
	    allmess = this.props.contents.messes;
	const messItems = allmess.map((message) =><MIL mess={message.mess} username={message.username} />);

        return (
		<div>
		<ul id="messages" onClick={this._onView}>{ messItems }</ul>
		</div>
        )
    }
}

const mapStateToProps = (state) => {
    return { dc: state.displayCho, contents: state.contents };
}

const mapDispatchToProps = dispatch => ({
    display,
    store,
    detail,
    dispatch
})

// export default connect(mapStateToProps, { display, store, detail })(Messages);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
