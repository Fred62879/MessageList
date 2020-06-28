import at from '../constants/actionType';
import storeReducer from '../reducers/storeReducer';
import { connect } from 'react-redux';

const clearReducer = (clearCho = 0, action) => {
    if (action.type === at.MESS_CLEAR)
	if (action.clear === 1) return [];
    return jcontents;
}

const mapStateToProps = (state) => {
    return { page: state.contents };
}

export default connect(mapStateToProps, { toggle })(App);

export default clearReducer;
