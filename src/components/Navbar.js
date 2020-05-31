import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../actions';
import '../App.css';

class Navbar extends React.Component {

    _onHome = (event) => {
	this.props.toggle(0);
    }

    _onAbout = (event) => {
	this.props.toggle(1);
    }
    
    render() {
        return (<ul class="nav">
	        <li onClick={this._onHome}>Message</li>
	        <li onClick={this._onAbout}>About</li>
                </ul>)
    }
}

const mapStateToProps = (state) => {
    return { page: state.page };
}

export default connect(mapStateToProps, { toggle })(Navbar);
