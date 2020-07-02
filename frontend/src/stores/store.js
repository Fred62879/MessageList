import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import inputReducer from '../reducers/inputReducer';
import inputUpdateReducer from '../reducers/inputUpdateReducer';
import storeReducer from '../reducers/storeReducer';
import displayReducer from '../reducers/displayReducer';
import detailReducer from '../reducers/detailReducer';
import loginReducer from '../reducers/loginReducer';

const store = createStore(
    combineReducers({
	input: inputReducer,
	uinput: inputUpdateReducer,
	contents: storeReducer,
	displayCho: displayReducer,
	detail: detailReducer,
	username: loginReducer
    }), applyMiddleware(thunk)
);

export default store;
