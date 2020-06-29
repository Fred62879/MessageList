import at from '../constants/actionType'
import React from 'react';
import MIL from '../components/presentation/MessageItemListing';


var initialState =  {
    messes: [],
    item: {},
    itemloading: true,
    input: '',
}

const storeReducer = (contents = initialState, action) => {
    let updated = Object.assign({}, contents);
    
    switch (action.type) {
	
    case at.INI_RECEIVE:
	updated['messes'] = action.messes;
	return updated;

    case at.ITEM_RECEIVE:
	updated['item'] = action.messitem;
	// updated['itemloading'] = false;
	return updated;

    case at.ITEM_LOADING:
	// updated['itemloading'] = true;
	
    case at.MESS_ADD:
	const newm = { id: action.id, mess: action.newmess, username: action.username };
	updated['messes'] = [...contents.messes, newm];
	return updated;
	
    case at.MESS_CLEAR:
	updated['messes'] = action.messes;
	updated['item'] = action.messitem;	
	return updated;

    case at.MESS_INPUT:
	updated['input'] = action.input;
	return updated;
    default:
	return contents;
    }
};

export default storeReducer;
