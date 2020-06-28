import React, { Component} from 'react';
import MessageItemDetail from '../presentation/MessageItemDetail';
import { connect } from 'react-redux'
import { fetchMessItem } from '../../actions/index'

class MessArticle extends Component {

    componentDidMount(){

        var fakeMessItem = {
            id: '1',
            title: 'Mad owl chases car',
            teaser: 'Mad owl seen tormenting drivers in Morecambe',
            body: `Morecambe - Tuesday 8th August 2017

            Yesterday evening motorists were left running for their lives as a mad owl began a campaign of terror on rush traffic. 
            Eye Witness, Eric Barnes said "When I heard it Squawk in the sky above me, I thought I was done for"`
        };
        
        this.props.dispatch(fetchMessItem(fakeMessItem));
    }

    render(){
        let { messItem } = this.props; 

        return (
            <div>
                <h2>News Story</h2>
                <ul>
                    { messItem ? <MessageItemDetail data={messItem} /> : null}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messItem: state.contents.item
    }
}

export default connect(mapStateToProps)(MessArticle)
