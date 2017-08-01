import {
  CLEAR_VISIBLE_MARKERS,
  CLEAR_SAVED_MARKERS,
  END_REQUEST_MARKERS,
  REQUEST_MARKERS_ERROR,
  SET_MARKER,
  SET_SERVER_MARKERS_AMOUNT,
  SET_SAVED_MARKERS,
  SET_VISIBLE_MARKERS,
  START_REQUEST_MARKERS
} from '../constants/Marker';

const initialState = {
  visibleMarkers: [],
  savedMarkers: [],
  savedServerMarkersAmount: 0,
  isFetchingMarkers: false,
  requestError: null,
};

export default function markersState(state = initialState, action) {
  switch (action.type) {
    case SET_MARKER:
      return {...state, visibleMarkers: [...state.visibleMarkers, action.payload]};

    case SET_VISIBLE_MARKERS:
      return {...state, visibleMarkers: action.payload};

    case SET_SAVED_MARKERS:
      return {...state, savedMarkers: action.payload};

    case CLEAR_VISIBLE_MARKERS:
      return {...state, visibleMarkers: []};

    case CLEAR_SAVED_MARKERS:
      return {...state, savedMarkers: []};

    case SET_SERVER_MARKERS_AMOUNT:
      return {...state, savedServerMarkersAmount: action.payload};

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
