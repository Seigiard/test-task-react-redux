import authService from '../services/authService';
import { LOGIN_REJECT, LOGIN_SUCCESS } from '../constants/User.js';

export function login(username, password) {
  return (dispatch) => {
    authService.login(username, password)
      .then(
        () => {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: username
          })
        },
        () => {
          dispatch({
            type: LOGIN_REJECT
          })
        }
      );
  }
}
