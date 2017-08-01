import {
  END_REQUEST_MARKERS,
  SET_VISIBLE_MARKERS,
  SET_SAVED_MARKERS,
  REQUEST_MARKERS_ERROR,
  CLEAR_VISIBLE_MARKERS,
  CLEAR_SAVED_MARKERS,
  SET_MARKER,
  SET_SERVER_MARKERS_AMOUNT,
  START_REQUEST_MARKERS
} from '../constants/Marker';
import markerService from '../services/markerService';

export function setMarker(coordinates) {
  return {
    type: SET_MARKER,
    payload: coordinates
  }
}

export function saveMarkersLocal() {
  return (dispatch, getState) => {
    dispatch({
      type: SET_SAVED_MARKERS,
      payload: getState().markers.visibleMarkers
    });
    dispatch({
      type: CLEAR_VISIBLE_MARKERS
    });
  }
}

export function loadMarkersLocal() {
  return (dispatch, getState) => {
    dispatch({
      type: SET_VISIBLE_MARKERS,
      payload: getState().markers.savedMarkers
    });
    dispatch({
      type: CLEAR_SAVED_MARKERS
    });
  }
}

export function saveMarkersOnServer() {
  return (dispatch, getState) => {
    dispatch({
      type: START_REQUEST_MARKERS
    });

    markerService
      .saveMarkers(getState().markers.visibleMarkers)
      .then(
        (result) => {
          dispatch({
            type: END_REQUEST_MARKERS
          });
          dispatch({
            type: SET_SERVER_MARKERS_AMOUNT,
            payload: result.data.length
          });
          dispatch({
            type: CLEAR_VISIBLE_MARKERS
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

export function loadMarkersFromServer() {
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
            type: SET_SERVER_MARKERS_AMOUNT,
            payload: 0
          });
          dispatch({
            type: SET_VISIBLE_MARKERS,
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
