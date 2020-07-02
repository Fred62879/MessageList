import React, { Component} from 'react';
import { connect } from 'react-redux';
import Home from '../layouts/Home.js';
import { uload, fetchMessItem, updateMessItem } from '../../actions/messAction';


class MessUpdate extends Component {

    componentDidMount() {
	this.props.fetchMessItem(this.props.match.params.id);
    }

    _onChange = (event) => {
        this.props.uload(event.target.value);
    }

    _onSubmit = (event) => {
        event.preventDefault();
	this.props.updateMessItem(this.props.uinput, this.props.match.params.id);
	this.props.uload('');
    }

    render() {
        let { messItem } = this.props;
        return (
		<div>
		<p>Your original message is {messItem.mess}</p>
                <form id="updateform">
                <h4>Your input is: {this.props.uinput}</h4>
	        <textarea id="newmess" onChange={this._onChange} placeholder="Your can input your new message here!"></textarea>
	        <br></br>
	        <button id="submit" onClick={this._onSubmit}>Submit</button>
		<input type="reset" defaultValue="Reset" />
                </form>
		</div>
	)
    }
}

const mapStateToProps = state => {
    return {
        messItem: state.contents.item,
	uinput: state.uinput
    }
}

export default connect(mapStateToProps, { uload, fetchMessItem, updateMessItem })(MessUpdate);
// export default connect(mapStateToProps)(MessUpdate)