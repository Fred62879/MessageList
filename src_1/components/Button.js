import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions';

class Button extends React.Component {
    render() {
	return (<div>
		<h1>The number is: { this.props.count }</h1>
		<button onClick={() => this.props.increment(5)}>
		Click Me!
		</button>
		</div>);
    }
}

// state has entire state of app
const mapStateToProps = (state) => {
    return { count: state.count }; // now it appears as props
}

export default connect(mapStateToProps)(Button)
