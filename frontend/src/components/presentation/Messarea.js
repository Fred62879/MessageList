import React from 'react';
import { connect } from 'react-redux';
import { display, store, detail } from '../../actions';
import Messages from '../containers/Messages';

class Messarea extends React.Component {
    
    _onShow = (event) => {
	this.props.display(1);
    }
    
    _onClear = (event) => {
	this.props.store('MESS_CLEAR', '');
    }

    render() {
	let allmess = [];
	if (this.props.dc === 1)
	    allmess = this.props.contents;
	
	return(<div id="messarea">
	       <h4>All your messages</h4>
	       <button onClick={this._onShow}>Show</button>
	       <button onClick={this._onClear}>Clear</button>
	       <Messages />
               </div>);
    }
}

const mapStateToProps = (state) => {
    return { dc: state.displayCho, contents: state.contents };
}

export default connect(mapStateToProps, { display, store, detail })(Messarea);
