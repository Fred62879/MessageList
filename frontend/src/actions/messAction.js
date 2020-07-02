import at from '../constants/actionType';

export const load = txt => {
    return {
        type: at.MESS_INPUT,
        input: txt
    };
}

export const uload = txt => {
    return {
        type: at.MESS_UPDATE_INPUT,
        input: txt
    };
}

export const update = newmess => {
    return {
	type: at.MESS_UPDATE,
	newmess: newmess
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
    return dispatch => {
	return fetch('http://localhost:3001/messages')
	    .then((response) => {
		return response.json();
	    }).then((res) => {
		dispatch(store(at.INI_RECEIVE, res.data, {}, "", "", ""));
		return res.data;
	    }).catch((err) => {
		console.log(err);
	    });
    }
}

export function fetchMessItem(id) {
    return dispatch => {
        return fetch(`http://localhost:3001/messages/detail/${id}`)
	    .then((response) => {
		return response.json();
	    }).then((res) => {
		console.log("fetch");
		console.log(res);
		dispatch(store(at.ITEM_RECEIVE, [], res.data, "", "", ""));
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

export function postMessItem(mess, un) {
    return dispatch => {
	return fetch(`http://localhost:3001/messages`, {
	    method: 'POST',
	    headers: {
    		'Accept': 'application/json',
    		'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
		id: "",
		mess: mess,
		username: un
	    })
	}).then((response) => {
	    if (!response.ok) {
		throw Error(response.statusText);
	    } else {
		return response.json();
	    }
	}).then((res) => {
	    dispatch(store(at.MESS_ADD, [], {}, res.data.id, res.data.mess, res.data.username));
	}).catch( (e) => console.log(e) );
    }
}

export function updateMessItem(newmess, id) {
    return dispatch => {
	return fetch(`http://localhost:3001/messages/update/${id}`, {
	    method: 'PUT',
	    headers: {
		'Accept': 'application/json',
    		'Content-Type': 'application/json',
	    },
	    body: JSON.stringify({
		mess: newmess
	    })
	}).then((response) => {
	    if (!response.ok) {
		throw Error(response.statusText);
	    } else {
		return response.json();
	    }
	}).then((res) => {
	    fetchMessages();
	}).catch( (e) => console.log(e) );
    }
}
