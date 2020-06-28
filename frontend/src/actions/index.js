import at from '../constants/actionType';

export const load = txt => {
    return {
        type: at.MESS_INPUT,
        input: txt
    };
}

export const store = (tp, messes, item, txt, un) => {
    return {
        type: tp, // 'INI_RECEIVE', 'ITEM_RECEIVE', 'MESS_ADD', 'MESS_CLEAR'
	messes: messes,
	messitem: item,
        newmess: txt,
	username: un
    };
}

export const display = cho => {
    return {
        type: at.MESS_DISPLAY,
        displayCho: cho
    };
}

export const login = username => {
    return {
	type: at.LOGIN,
	username: username
    };
}

export const detail = messdetail => {
    return {
	type: at.DETAIL_VIEW,
	content: messdetail
    }
}

export function fetchMessages(messages) {
    /*
    console.log("fetch");
    return dispatch => {
	return fetch('http://localhost:3001/messages')
	    .then((response) => {
		console.log(response);
	    });
    }
    */
    return dispatch => {
        dispatch(store(at.INI_RECEIVE, messages, {}, "", ""));
    }
}

export function fetchMessItem(messitem){
    return dispatch => {
        dispatch(store(at.ITEM_RECEIVE, [], messitem, "", ""));
    }
}
