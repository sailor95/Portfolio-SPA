import spaServer from '../../api/spa-server/spaServer';

import { authConstants } from '../../constants/actionTypes';
import history from '../../history';

export const login = (loginViewModel) => async dispatch => {
  const response = await spaServer.post('/login', loginViewModel);
  dispatch({ type: authConstants.GET_AUTH_DATA, payload: response });
  history.push('/dashboard');
};