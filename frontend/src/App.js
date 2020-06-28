import './App.css';
import store from './stores/store';
import React, { component } from 'react';
import { Provider, connect } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/layouts/Layout.js';
import Home from './components/layouts/Home.js';
import About from './components/layouts/About.js';
import MessArticle from './components/containers/MessArticle';


class App extends React.Component {

    render() {
	return (
		<Provider store={store}>
		<BrowserRouter>
		<Layout>
		<Route exact path="/" component = {Home} />
		<Route path="/about" component = {About} />
		<Route path="/messages/:id" component = {MessArticle} />
		</Layout>
		</BrowserRouter>
		</Provider>
	);
    }
}

export default App;
