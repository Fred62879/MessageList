import at from '../constants/actionType'


const inputReducer = (input = 'Your message comes here!', action) => {
    if (action.type === at.MESS_INPUT) {
        return action.input;
    }
    return input;
};

export default inputReducer;
