import at from '../constants/actionType';


const updateReducer = (newmess = {}, action) => {    
    switch (action.type) {
	
    case at.MESS_UPDATE:
	return action.newmess;
	
    default:
	return newmess;
    }
};

export default updateReducer;
