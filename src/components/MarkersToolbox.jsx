import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { loadMarkersLocal, saveMarkersLocal, loadMarkersFromServer, saveMarkersOnServer } from '../actions/MarkerActions'

const MarkersToolbox = (props) => {
  const {
    loadMarkersLocal,
    saveMarkersLocal,
    loadMarkersFromServer,
    saveMarkersOnServer,
    visibleMarkers,
    savedLocalMarkersAmount,
    savedServerMarkersAmount,
    isFetchingMarkers,
    requestError
  } = props;

  return (
    <footer>
      <fieldset>
        <legend>Local Storage</legend>
        <button disabled={!visibleMarkers.length || isFetchingMarkers} onClick={saveMarkersLocal}>Save Markers to Local Storage</button>
        <button disabled={!savedLocalMarkersAmount || isFetchingMarkers} onClick={loadMarkersLocal}>Load Markers from Local Storage</button>
      </fieldset>
      <fieldset>
        <legend>Server Storage</legend>
        <button disabled={!visibleMarkers.length || isFetchingMarkers} onClick={saveMarkersOnServer}>Save Markers to Server</button>
        <button disabled={!savedServerMarkersAmount || isFetchingMarkers} onClick={loadMarkersFromServer}>Load Markers from Server</button>
      </fieldset>
      {requestError ? <p>{requestError}</p> : ''}
    </footer>
  );
};

function mapStateToProps(state) {
  return {
    savedLocalMarkersAmount: state.markers.savedMarkers.length,
    savedServerMarkersAmount: state.markers.savedServerMarkersAmount,
    isFetchingMarkers: state.markers.isFetchingMarkers,
    visibleMarkers: state.markers.visibleMarkers,
    requestError: state.markers.requestError
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    saveMarkersLocal: saveMarkersLocal,
    loadMarkersLocal: loadMarkersLocal,
    saveMarkersOnServer: saveMarkersOnServer,
    loadMarkersFromServer: loadMarkersFromServer
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkersToolbox)
