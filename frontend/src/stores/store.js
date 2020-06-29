import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import inputReducer from '../reducers/inputReducer';
import storeReducer from '../reducers/storeReducer';
import displayReducer from '../reducers/displayReducer';
// import clearReducer from '../reducers/clearReducer';
// import detailReducer from '../reducers/detailReducer';
import loginReducer from '../reducers/loginReducer';

const store = createStore(
    combineReducers({
	input: inputReducer,
	contents: storeReducer,
	displayCho: displayReducer,
	// clearCho: clearReducer,
	// detail: detailReducer,
	username: loginReducer
    }), applyMiddleware(thunk)
);

export default store;
