import React from 'react';
import { uuid } from 'uuidv4';
import { connect } from 'react-redux';
import { load, store } from '../../actions/messAction';

class Messform extends React.Component {

    _onChange = (event) => {
        this.props.load(event.target.value);
    }

    _onSubmit = (event) => {
        event.preventDefault();
	
        this.props.store('MESS_ADD', [], {}, uuid(), this.props.input, 'Anonymous');
    }

    render() {
        return(
                <form id="messform">
                <h4>Your input is: {this.props.input}</h4>
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

export default connect(mapStateToProps, { load, store })(Messform);
