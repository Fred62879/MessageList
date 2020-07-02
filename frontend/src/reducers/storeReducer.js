import at from '../constants/actionType';

var initialState =  {
    messes: [],
    item: {},
    itemloading: true
}

const storeReducer = (contents = initialState, action) => {
    let updated = Object.assign({}, contents);
    switch (action.type) {
	
    case at.INI_RECEIVE:
	updated['messes'] = action.messes;
	// updated['itemloading'] = true;
	return updated;

    case at.ITEM_RECEIVE:
	console.log(action.messitem);
	updated['item'] = action.messitem;
	updated['itemloading'] = false;
	return updated;

    case at.ITEM_LOADING:
	updated['itemloading'] = true;
	return updated;
	
    case at.MESS_ADD:
	const newm = { id: action.id, mess: action.newmess, username: action.username };
	// updated['itemloading'] = true;
	updated['messes'] = [...contents.messes, newm];
	return updated;
	
    case at.MESS_CLEAR:
	updated['messes'] = action.messes;
	// updated['itemloading'] = true;
	updated['item'] = action.messitem;	
	return updated;
	
    default:
	return contents;
    }
};

export default storeReducer;
