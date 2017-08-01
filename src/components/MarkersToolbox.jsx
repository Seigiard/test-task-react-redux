import React from 'react';
import { connect } from 'react-redux'

import {saveMarkers, loadMarkers} from '../actions/MarkerActions'

const MarkersToolbox = (props) => {
  const {
    saveMarkers,
    loadMarkers,
    markers,
    savedMarkersAmount,
    isFetchingMarkers,
    requestError
  } = props;

  return (
    <footer>
      <button disabled={!markers.length || isFetchingMarkers} onClick={saveMarkers}>Save Markers</button>
      <button disabled={!savedMarkersAmount || isFetchingMarkers} onClick={loadMarkers}>Load Markers</button>
      { requestError ? <p>{requestError}</p> : '' }
    </footer>
  );
};

function mapStateToProps(state) {
  return {
    savedMarkersAmount: state.markers.savedMarkersAmount,
    isFetchingMarkers: state.markers.isFetchingMarkers,
    markers: state.markers.markers,
    requestError: state.markers.requestError
  };
}

function mapDispatchToProps() {
  return {
    saveMarkers: saveMarkers,
    loadMarkers: loadMarkers
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkersToolbox)
