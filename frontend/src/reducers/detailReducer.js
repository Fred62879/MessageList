import at from '../constants/actionType'

const detailReducer = (messdetail = '', action) => {
    if (action.type === at.DETAIL_VIEW)
	return action.content;
    return messdetail;
}

export default detailReducer;
