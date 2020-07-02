import React, { Component} from 'react';
import MessageItemDetail from '../presentation/MessageItemDetail';
import { connect } from 'react-redux'
import { fetchMessItem } from '../../actions/messAction'


class MessArticle extends Component {
    
    componentDidMount() {
	console.log("MESSARTICLE");
        this.props.dispatch(fetchMessItem(this.props.match.params.id));
    }

    render() {
        let { messItem } = this.props;
	let loading = this.props.itemLoading;
	
        return (
            <div>
                <ul>
		{ !loading? <MessageItemDetail data={messItem} /> : <div>Loading</div>}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messItem: state.contents.item,
	itemLoading: state.contents.itemloading
    }
}

export default connect(mapStateToProps)(MessArticle)
