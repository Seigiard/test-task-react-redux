import {
  CLEAR_MARKERS,
  END_REQUEST_MARKERS,
  LOAD_MARKERS,
  REQUEST_MARKERS_ERROR,
  SAVE_MARKERS,
  SET_MARKER,
  SET_SAVED_MARKERS_AMOUNT,
  START_REQUEST_MARKERS
} from '../constants/Marker'
import markerService from '../services/markerService'

export function setMarker(coordinates) {
  return {
    type: SET_MARKER,
    payload: coordinates
  }
}

export function clearMarkers() {
  return {
    type: CLEAR_MARKERS
  }
}

export function saveMarkers() {
  return (dispatch, getState) => {
    dispatch({
      type: START_REQUEST_MARKERS
    });

    markerService
      .saveMarkers(getState().markers.markers)
      .then(
        (result) => {
          dispatch({
            type: END_REQUEST_MARKERS
          });
          dispatch({
            type: SET_SAVED_MARKERS_AMOUNT,
            payload: result.data.length
          });
          dispatch({
            type: SAVE_MARKERS
          });
        },
        (error) => {
          console.log(error);
          dispatch({
            type: END_REQUEST_MARKERS
          });
          dispatch({
            type: REQUEST_MARKERS_ERROR,
            payload: error
          });
        }
      );
  }
}

export function loadMarkers(username, password) {
  return (dispatch) => {
    dispatch({
      type: START_REQUEST_MARKERS
    });

    markerService
      .loadMarkers()
      .then(
        (markers) => {
          dispatch({
            type: END_REQUEST_MARKERS
          });
          dispatch({
            type: SET_SAVED_MARKERS_AMOUNT,
            payload: 0
          });
          dispatch({
            type: LOAD_MARKERS,
            payload: markers
          });
        },
        (error) => {
          dispatch({
            type: REQUEST_MARKERS_ERROR,
            payload: error || 'Something happened with server.'
          });
        }
      );
  }
}
