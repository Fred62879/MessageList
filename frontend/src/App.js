import React, { component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
// import mongoose from 'mongoose';
import './App.css';
import { Provider } from 'react-redux';
import store from './stores/store';

import Layout from './components/layouts/Layout.js';
import Home from './components/layouts/Home.js';
import About from './components/layouts/About.js';
import MessageItemDetail from './components/presentation/MessageItemDetail';


// const App = () => {
class App extends React.Component {

    render() {
	return (
		<Provider store={store}>
		<BrowserRouter>
		<Layout>
		<Route exact path="/" component = {Home} />
		<Route path="/about" component = {About} />
		<Route path="/messages/:id" component = {MessageItemDetail} />
		</Layout>
		</BrowserRouter>
		</Provider>
	);
    }
}

/*
const mapStateToProps = (state) => {
    return { page: state.page };
}

export default connect(mapStateToProps, { toggle })(App);
*/

export default App;
