import React from 'react';
import { connect } from 'react-redux';
import { load, store } from '../actions';

class Messform extends React.Component {

    _onChange = (event) => {
        this.props.load(event.target.value);
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.props.store('MESS_ADD', this.props.input);
    }

    _onClear = (event) => {
	event.preventDefault();
        this.props.load('Your message comes here!');
    }

    render() {
        return(
                <form id="messform">
                <h4>Your input is: {this.props.input}</h4>
	        <textarea id="newmess" onChange={this._onChange} placeholder="Your message comes here!"></textarea>
	        <br></br>
	        <button id="submit" onClick={this._onSubmit}>Submit</button>
		<input type="reset" defaultValue="Reset" />  
	        <button id="clear" onClick={this._onClear}>Clear</button>
                </form>)
    }
}

const mapStateToProps = (state) => {
    return { contents: state.contents, input: state.input };
}

export default connect(mapStateToProps, { load, store })(Messform);
