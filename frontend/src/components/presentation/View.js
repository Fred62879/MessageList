import React from 'react';
import { connect } from 'react-redux';
import { detail } from '../../actions/messAction';

class View extends React.Component {

    render() {
	return(<div id="detailarea">
	       <h3>The message you selected is:</h3>
	       <p>{this.props.dt}</p>
               </div>);
    }
}

const mapStateToProps = (state) => {
    return { dc: state.displayCho, dt: state.messdetail };
}

export default connect(mapStateToProps, { detail })(View);
