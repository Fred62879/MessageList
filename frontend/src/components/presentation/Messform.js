import React from 'react';
import { uuid } from 'uuidv4';
import at from '../../constants/actionType';
import { connect } from 'react-redux';
import { load, store } from '../../actions/messAction';
// import { load, store, postMessItem } from '../../actions/messAction';

class Messform extends React.Component {

    _onChange = (event) => {
	this.props.load(event.target.value);
	// this.props.store(at.MESS_INPUT, [], {}, '', '', '', event.target.value);
	console.log(event.target.value);
	// console.log(this.props.contents.input);
    }

    _onSubmit = (event) => {
        event.preventDefault();
        this.props.store('MESS_ADD', [], {}, uuid(), this.props.input, 'Anonymous');
	// this.props.dispatch(postMessItem(this.props.contents.input, "Anynoumous"));
    }

    render() {
        return(
                <form id="messform">
                <h4>Your input is: {this.props.contents.input}</h4>
	        <textarea id="newmess" onChange={this._onChange} placeholder="Your message comes here!"></textarea>
	        <br></br>
	        <button id="submit" onClick={this._onSubmit}>Submit</button>
		<input type="reset" defaultValue="Reset" />
                </form>)
    }
}

const mapStateToProps = (state) => {
    return { contents: state.contents, input: state.input };
}

const mapDispatchToProps = dispatch => ({
    load,
    store,
    // postMessItem,
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Messform);
