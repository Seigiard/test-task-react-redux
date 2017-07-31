import { RESET_GEOLOCATION, SET_GEOLOCATION } from '../constants/Geolocation';

const primaryGeolocation = {
  latitude: 46.46774873,
  longitude: 30.74051857
};

const initialState = {
  latitude: primaryGeolocation.latitude,
  longitude: primaryGeolocation.longitude
};

export default function geolocationState(state = initialState, action) {
  switch (action.type) {
    case SET_GEOLOCATION:
      return {...state, latitude: action.payload.latitude, longitude: action.payload.longitude};
    case RESET_GEOLOCATION:
      return {...state, latitude: primaryGeolocation.latitude, longitude: primaryGeolocation.longitude};
    default:
      return state;
  }

  return state;
}
