import at from '../constants/actionType';

export const load = txt => {
    return {
        type: at.MESS_INPUT,
        input: txt
    };
}

export const store = (tp, messes, item, id, txt, un) => {
    return {
        type: tp, // 'INI_RECEIVE', 'ITEM_RECEIVE', 'ITEM_LOADING', 'MESS_ADD', 'MESS_CLEAR'
	messes: messes,
	messitem: item,
	id: id,
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

export function fetchMessages() {
    console.log("fetch");
    return dispatch => {
	return fetch('http://localhost:3001/messages')
	    .then((response) => {
		return response.json();
	    }).then((res) => {
		console.log(res.data);
		dispatch(store(at.INI_RECEIVE, res.data, {}, "", "", ""));
		return res.data;
	    }).catch((err) => {
		console.log(err);
	    });
    }
}

export function fetchMessItem(id) {
    return dispatch => {
        return fetch(`http://localhost:3001/messages/${id}`).then((response) => {
	    return response.json();
	}).then((data) => {
	    dispatch(store(at.ITEM_RECEIVE, [], data, "", "", ""));
	}).catch((e) => {
	    console.log(e)
	});
    }
}

export function messItemLoading() {
    return {
        type: at.ITEM_LOADING
    }
}
