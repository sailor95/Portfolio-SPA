import spaServer from '../../api/spa-server/spaServer';
import { authConstants } from '../../constants/actionTypes';
import history from '../../history';
import setAuthToken from '../../components/functional/auth/setAuthToken';

export const login = (loginViewModel) => async dispatch => {
  const response = await spaServer.post('/auth/login', loginViewModel);

  const token = response.data.token;
  localStorage.setItem('jwtToken', token);

  setAuthToken(token);

  dispatch({ type: authConstants.GET_AUTH_DATA, payload: response });
  history.push('/dashboard');
};