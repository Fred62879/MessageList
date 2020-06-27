import React from 'react';
import { connect } from 'react-redux';
import { zoom } from '../actions';

class View extends React.Component {

    render() {
	return(<div id="detailarea">
	       <h3>The message you selected is:</h3>
	       <p>{this.props.detail}</p>
               </div>);
    }
}

const mapStateToProps = (state) => {
    return { dc: state.displayCho, detail: state.detail };
}

export default connect(mapStateToProps, { zoom })(View);
