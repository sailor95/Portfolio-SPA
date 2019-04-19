import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import mockReducer from './mock/mockReducer';

const rootReducer = combineReducers({
  mock: mockReducer,
  form: formReducer,
});

export default rootReducer;