import at from '../constants/actionType'

const loginReducer = (username = 'fred', action) => {
    if (action.type === at.Login)
	return action.username; // change in future
    return username;
}

export default loginReducer;
