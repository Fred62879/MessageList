import at from '../constants/actionType'


const inputUpdateReducer = (uinput = 'Your can input your new message here!', action) => {
    if (action.type === at.MESS_UPDATE_INPUT) {
        return action.input;
    }
    return uinput;
};

export default inputUpdateReducer;
