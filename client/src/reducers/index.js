import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// My reducers
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
});

export default rootReducer;