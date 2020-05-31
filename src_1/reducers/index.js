import { combineReducers } from 'redux';

const counterReducer = (count = 0, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
	// return count + 1;
	return count + action.increment;
    }
    return count;
};

export default combineReducers({
    count: counterReducer
});
