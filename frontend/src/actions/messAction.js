import at from '../constants/actionType';

export const load = txt => {
    return {
        type: 'MESS_INPUT',
        input: "dummy"
    };
}

export const store = (tp, messes, item, id, txt, un, input) => {
    return {
        type: tp, // 'INI_RECEIVE', 'ITEM_RECEIVE', 'ITEM_LOADING', 'MESS_ADD', 'MESS_CLEAR', 'MESS_INPUT'
	messes: messes,
	messitem: item,
	id: id,
        newmess: txt,
	username: un,
	input: input
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
		newmess: mess,
		username: un
	    })
	}).then((response) => {
	    if (!response.ok) {
		throw Error(response.statusText);
	    } else {
		console.log("post fetch pre");
		fetchMessages();
		console.log("post fetch post");
		// dispatch(store(username, data.body))
	    }
	}).catch( (e) => console.log(e) );
    }
}
