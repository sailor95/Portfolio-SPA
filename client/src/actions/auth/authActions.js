import spaServer from '../../api/spa-server/spaServer';
import { authConstants } from '../../constants/actionTypes';
import history from '../../history';
import setAuthToken from '../../components/functional/auth/setAuthToken';

export const login = (loginViewModel) => async dispatch => {
  const response = await spaServer.post('/auth/login', loginViewModel);

  if (response.data.hasOwnProperty('token')) {
    localStorage.setItem('jwtToken', response.data.token);
    setAuthToken(response.data.token);
    dispatch({ type: authConstants.LOG_IN, payload: true });
    history.push('/dashboard');
  } else {
    setAuthToken(null);
    dispatch({ type: authConstants.LOG_IN, payload: false });
  }
};

export const logout = () => {
  localStorage.removeItem('jwtToken');
  setAuthToken(null);
  return { type: authConstants.LOG_OUT, payload: false };
}