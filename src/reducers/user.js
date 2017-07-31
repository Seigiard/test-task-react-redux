import { LOGIN_REJECT, LOGIN_SUCCESS } from '../constants/User.js'

const initialState = {
  username: false
};

export default function page(state = initialState, action) {

  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, username: action.payload};

    case LOGIN_REJECT:
      return {...state, username: false,};

    default:
      return state;
  }

}
