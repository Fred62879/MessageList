import React from 'react';
import Messform from '../presentation/Messform.js';
import Messarea from '../presentation/Messarea.js';

class Home extends React.Component {
    render() {
	return (
		<div>
		<Messform/>
		<Messarea/>
		</div>
	);
    }
}

export default Home;
