import at from '../constants/actionType'

const redirectReducer = (link = '', action) => {
    switch (action.type) {
    case (at.REDIRECT):
	return action.link;
    case(at.RSREDIRECT):
	return '';
    default:
	return link;
    }
}

export default redirectReducer;
