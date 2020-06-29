import at from '../constants/actionType'


const inputReducer = (input = '', action) => {
    return action.type;
    /*
    if (action.type === 'MESS_INPUT') {
        return action.input;
    }
    return input;
    */
};

export default inputReducer;
