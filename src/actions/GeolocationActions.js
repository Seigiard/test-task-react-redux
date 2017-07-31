import { RESET_GEOLOCATION, SET_GEOLOCATION } from '../constants/Geolocation';

export function setGeolocation(coordinates) {
  return {
    type: SET_GEOLOCATION,
    payload: coordinates
  }
}

export function resetGeolocation() {
  return {
    type: RESET_GEOLOCATION
  }
}
