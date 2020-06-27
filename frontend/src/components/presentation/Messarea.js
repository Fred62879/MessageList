import React from 'react';
import { connect } from 'react-redux';
import { display, store, zoom } from '../actions';

class Messarea extends React.Component {
    
    _onShow = (event) => {
	this.props.display(1);
    }
    
    _onClear = (event) => {
	this.props.store('MESS_CLEAR', '');
    }

    getEventTarget(e) {
	e = e || window.event;
	return e.target || e.srcElement; 
    }

    _onView = (event) => {
	var target = this.getEventTarget(event);
	// alert(target.innerHTML);
	this.props.zoom(target.innerHTML);
    }

    render() {
	let allmess = [];
	if (this.props.dc === 1)
	    allmess = this.props.contents;
	
	return(<div id="messarea">
	       <h4>All your messages</h4>
	       <button onClick={this._onShow}>Show</button>
	       <button onClick={this._onClear}>Clear</button>
	       <ul id="messages" onClick={this._onView}>{allmess}</ul>
               </div>);
    }
}

const mapStateToProps = (state) => {
    return { dc: state.displayCho, contents: state.contents };
}

export default connect(mapStateToProps, { display, store, zoom })(Messarea);
