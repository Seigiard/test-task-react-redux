import React from 'react';
import { Map, Marker } from '2gis-maps-react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as markerActions from '../actions/MarkerActions'


const MapWrapper = (props) => {
  const setMarker = (e) => {
    props.markerActions.setMarker({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng,
    });
  }

  return (
    <Map
      onClick={setMarker}
      style={{width: '100%', height: '500px'}}
      center={[props.geolocation.latitude, props.geolocation.longitude]}
      zoom={13}
      fullscreenControl={false}
    >
      {props.markers.map((marker, i) => <Marker key={i} pos={[marker.latitude, marker.longitude]}/>)}
    </Map>
  )
}

function mapStateToProps(state) {
  return {
    geolocation: state.geolocation,
    markers: state.markers.markers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    markerActions: bindActionCreators(markerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapWrapper)
