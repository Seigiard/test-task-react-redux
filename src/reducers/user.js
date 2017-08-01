import { END_LOGIN_REQUEST, LOGIN_ERROR, LOGIN_REJECT, LOGIN_SUCCESS, START_LOGIN_REQUEST } from '../constants/User.js'

const initialState = {
  username: false,
  isAuthenticated: false,
  isFetchingAuth: false,
  authMessage: false
};

export default function page(state = initialState, action) {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, username: action.payload, isAuthenticated: true, authMessage: false};

    case LOGIN_REJECT:
      return {...state, username: false, isAuthenticated: false };

    case START_LOGIN_REQUEST:
      return {...state, isFetchingAuth: true};

    case END_LOGIN_REQUEST:
      return {...state, isFetchingAuth: false};

    case LOGIN_ERROR:
      return {...state, authMessage: action.payload};

    default:
      return state;
  }

}
