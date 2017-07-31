import { combineReducers } from 'redux'
import geolocation from './geolocation'
import markers from './markers'
import user from './user'

export default combineReducers({
  geolocation,
  markers,
  user
})