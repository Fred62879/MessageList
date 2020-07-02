import './App.css';
import store from './stores/store';
import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/layouts/Layout.js';
import Home from './components/layouts/Home.js';
import About from './components/layouts/About.js';
import MessArticle from './components/containers/MessArticle';
import MessUpdate from './components/containers/MessUpdate';


class App extends React.Component {

    render() {
	return (
		<Provider store={store}>
		<BrowserRouter>
		<Layout>
		<Route exact path="/" component = {Home} />
		<Route path="/about" component = {About} />
		<Route path="/messages/detail/:id" component = {MessArticle} />
		<Route path="/messages/update/:id" component = {MessUpdate} />
		</Layout>
		</BrowserRouter>
		</Provider>
	);
    }
}

export default App;
