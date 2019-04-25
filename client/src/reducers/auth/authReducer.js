import { authConstants } from '../../constants/actionTypes';

export default (state = (localStorage.getItem('jwtToken') !== null), action) => {
    switch (action.type) {
        case authConstants.LOG_IN:
            return action.payload;
        case authConstants.LOG_OUT:
            return action.payload;
        default:
            return state;
    }
}