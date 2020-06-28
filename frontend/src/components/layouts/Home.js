import React from 'react';
import Messform from '../presentation/Messform.js';
import Messarea from '../presentation/Messarea.js';
import View from '../presentation/View.js';

class Home extends React.Component {
    render() {
	return (
		<div>
		<Messform/>
		<Messarea/>
		<View/>
		</div>
	);
    }
}

export default Home;
