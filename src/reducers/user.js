import { LOGIN_REJECT, LOGIN_SUCCESS, START_LOGIN_REQUEST, END_LOGIN_REQUEST, LOGIN_ERROR } from '../constants/User.js'

const initialState = {
  username: false,
  isFetchingAuth: false,
  authMessage: false
};

export default function page(state = initialState, action) {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, username: action.payload, authMessage: false};

    case LOGIN_REJECT:
      return {...state, username: false };

    case START_LOGIN_REQUEST:
      return {...state, isFetchingAuth: true};

    case END_LOGIN_REQUEST:
      return {...state, isFetchingAuth: false };

    case LOGIN_ERROR:
      return {...state, authMessage: action.payload};

    default:
      return state;
  }

}
