import React from 'react';
import { connect } from 'react-redux';
import { load, store, postMessItem } from '../../actions/messAction';

class Messform extends React.Component {
    
    _onChange = (event) => {
        this.props.load(event.target.value);
    }

    _onSubmit = (event) => {
        event.preventDefault();
	// this.props.dispatch(this.props.postMessItem(this.props.input, "Anynoumous"));
	this.props.postMessItem(this.props.input, "Anynoumous");
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

/*
const mapDispatchToProps = dispatch => ({
    load,
    store,
    postMessItem,
    dispatch
})
*/
/*
function mapDispatchToProps(dispatch) {
    let actions = bindActionCreators({ load, store, postMessItem });
    return { ...actions, dispatch };
}
*/

export default connect(mapStateToProps, { load, store, postMessItem })(Messform);
// export default connect(mapStateToProps, mapDispatchToProps)(Messform);
