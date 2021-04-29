import axios from 'axios';
import * as actions from './authActions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {

  axios.defaults.headers['Authorization'] = token;
};

export const register = credentials => async dispatch => {
  dispatch(actions.createUserRequest());


  await axios
    .post('/users/signup', credentials)

    .then(({ data }) => {
      dispatch(actions.createUserSuccess(data));
      setToken(data.token);
    })
    .catch(error => dispatch(actions.createUserFailure(error.message)));
};

export const login = payload => async dispatch => {
  dispatch(actions.loginRequest());

  await axios
    .post('/users/login', payload)

    .then(({ data }) => {
      dispatch(actions.loginSuccess(data));
      setToken(data.token);
    })

    .catch(error => dispatch(actions.loginFailure(error.message)));
};

export const logOut = () => async dispatch => {
  dispatch(actions.logoutRequest());

  await axios
    .post('/users/logout')
    .then(() => dispatch(actions.logoutSuccess()))
    .then(() => setToken(''))
    .catch(error => dispatch(actions.logoutRequest(error.message)));
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    login: { token: persistedToken }
  } = getState()
  if (!persistedToken) {
    return
  } setToken(persistedToken)
  dispatch(actions.getCarrentUserRequest());
  await axios
    .get('/users/current')
    .then(({ data }) =>
      dispatch(actions.getCarrentUserSuccess(data))
    )
    .catch(error => dispatch(actions.getCarrentUserFailure(error.message)));
};
