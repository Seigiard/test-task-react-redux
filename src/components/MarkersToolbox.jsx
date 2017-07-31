import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as markerActions from '../actions/MarkerActions'

const MarkersToolbox = (props) => {
  const {saveMarkers, loadMarkers} = props.markerActions;

  return (
    <footer>
      <button disabled={!props.markers.length || props.fetchingMarkers} onClick={saveMarkers}>Save Markers</button>
      <button disabled={!props.savedMarkersAmount || props.fetchingMarkers} onClick={loadMarkers}>Load Markers</button>
      { props.requestError ? <p>{requestError}</p> : '' }
    </footer>
  );
}

function mapStateToProps(state) {
  return {
    savedMarkersAmount: state.markers.savedMarkersAmount,
    fetchingMarkers: state.markers.fetchingMarkers,
    markers: state.markers.markers,
    requestError: state.markers.requestError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    markerActions: bindActionCreators(markerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkersToolbox)
