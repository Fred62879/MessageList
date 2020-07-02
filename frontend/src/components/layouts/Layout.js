import React from 'react';
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

export default Layout;
