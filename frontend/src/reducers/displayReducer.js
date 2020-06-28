import at from '../constants/actionType'

const displayReducer = (displayCho = 0, action) => {
    if (action.type === at.MESS_DISPLAY)
	return action.displayCho;
    return displayCho
};

export default displayReducer;
