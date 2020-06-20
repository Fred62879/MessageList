import React from 'react';
import { connect } from 'react-redux';
// import mongoose from 'mongoose';
import Navbar from './Navbar';
import Messform from './Messform';
import Messarea from './Messarea';
import About from './About';
import View from './View';
import { toggle } from '../actions';
import '../App.css';


// const App = () => {
class App extends React.Component {

    render() {
	let page;
	if (this.props.page === 0)
	    page = <div><Messform/><Messarea/><View/></div>;
	else
	    page = <About/>;
	return (
		<div class="container">
		<Navbar/>
		{page}
            </div>
	);
    }
}

const mapStateToProps = (state) => {
    return { page: state.page };
}

export default connect(mapStateToProps, { toggle })(App);
// export default App;
