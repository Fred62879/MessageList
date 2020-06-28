import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../../actions';
import { Link } from 'react-router-dom';
import '../../App.css';

class Layout extends React.Component {
    
    render() {
        return (
		<div class="container">
		<ul class="nav">
	        <li><Link class="link" to={'/'}>Message</Link></li>
	        <li><Link class="link" to={'/about'}>About</Link></li>
                </ul>
		<div>{ this.props.children }</div>
		</div>
	)
    }
}

/*
const mapStateToProps = (state) => {
    return { page: state.page };
}

export default connect(mapStateToProps, { toggle })(Layout);
*/

export default Layout;
