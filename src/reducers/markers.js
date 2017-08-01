import {
  END_REQUEST_MARKERS,
  LOAD_MARKERS,
  REQUEST_MARKERS_ERROR,
  SAVE_MARKERS,
  SET_MARKER,
  SET_SAVED_MARKERS_AMOUNT,
  START_REQUEST_MARKERS
} from '../constants/Marker';

const initialState = {
  markers: [],
  savedMarkersAmount: 0,
  isFetchingMarkers: false,
  requestError: null,
};

export default function markersState(state = initialState, action) {
  switch (action.type) {
    case SET_MARKER:
      return {...state, markers: [...state.markers, action.payload]};

    case LOAD_MARKERS:
      return {...state, markers: action.payload};

    case SAVE_MARKERS:
      return {...state, markers: []};

    case SET_SAVED_MARKERS_AMOUNT:
      return {...state, savedMarkersAmount: action.payload};

    case START_REQUEST_MARKERS:
      return {...state, isFetchingMarkers: true};

    case END_REQUEST_MARKERS:
      return {...state, isFetchingMarkers: false};

    case REQUEST_MARKERS_ERROR:
      return {...state, requestError: action.payload};

    default:
      return state;
  }
}
