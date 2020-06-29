import React, {Component} from 'react';
import { connect } from 'react-redux';
import MIL from '../presentation/MessageItemListing';
import { display, store, detail, fetchMessages } from '../../actions/messAction';

class Messages extends Component {

    componentDidMount(){
        this.props.dispatch(fetchMessages());
    }
    
    render() {
	let allmess = [];
	if (this.props.dc === 1)
	    allmess = this.props.contents.messes;
	const messItems = allmess.map((message) =><MIL id={message.id} mess={message.mess} username={message.username} />);
        return (<div><ul id="messages">{ messItems }</ul></div>
        )
    }
}

const mapStateToProps = (state) => {
    return { dc: state.displayCho, contents: state.contents };
}

const mapDispatchToProps = dispatch => ({
    display,
    store,
    detail,
    fetchMessages,
    dispatch
})

// export default connect(mapStateToProps, { display, store, detail })(Messages);
export default connect(mapStateToProps, mapDispatchToProps)(Messages);
