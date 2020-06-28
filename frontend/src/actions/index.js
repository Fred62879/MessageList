import at from '../constants/actionType';

export const load = txt => {
    return {
        type: at.MESS_INPUT,
        input: txt
    };
}

export const store = (tp, txt, un) => {
    return {
        type: tp, // 'MESS_ADD', 'MESS_CLEAR'
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

/*
export const clear = cho => {
    return {
	type: at.MESS_CLEAR,
	clearCho: cho
    };
}
*/

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
