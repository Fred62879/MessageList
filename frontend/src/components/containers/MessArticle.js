import React, { Component} from 'react';
import MessageItemDetail from '../presentation/MessageItemDetail';
import { connect } from 'react-redux'
// import { messItemLoading, fetchMessItem } from '../../actions/messAction'


class MessArticle extends Component {
    
    componentDidMount() {
	console.log(this.props.match.params.id);
        // this.props.dispatch(fetchMessItem(this.props.match.params.id));
    }

    render(){
        let { messItem } = this.props;
	// console.log(this.props.itemLoading);

        return (
            <div>
                <ul>
		{ !this.props.itemLoading ? <MessageItemDetail data={messItem} /> : <div>Loading</div>}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messItem: state.contents.item,
	itemLoading: state.contents.itemLoading
    }
}

export default connect(mapStateToProps)(MessArticle)
