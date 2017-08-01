import authService from '../services/authService';
import { END_LOGIN_REQUEST, LOGIN_ERROR, LOGIN_REJECT, LOGIN_SUCCESS, START_LOGIN_REQUEST } from '../constants/User.js';

export function login(username, password) {
  return (dispatch) => {
    dispatch({
      type: START_LOGIN_REQUEST
    });

    authService.login(username, password)
      .then(
        (result) => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: username
          });
          dispatch({
            type: END_LOGIN_REQUEST
          });
        },
        () => {
          dispatch({
            type: LOGIN_REJECT
          });
          dispatch({
            type: LOGIN_ERROR,
            payload: 'Invalid username or password'
          });
          dispatch({
            type: END_LOGIN_REQUEST
          });
        }
      );
  }
}

export function logout() {
  return {
    type: LOGIN_REJECT
  }
}
