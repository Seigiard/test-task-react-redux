import React from 'react';
import { Map, Marker } from '2gis-maps-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMarker } from '../actions/MarkerActions';

const MapContainer = ({setMarker, geolocation, visibleMarkers}) => {
  const setMapMarker = (e) => {
    setMarker({
      latitude: e.latlng.lat,
      longitude: e.latlng.lng,
    });
  };

  const mapStyle = {width: '100%', height: '500px'};

  return (
    <Map
      onClick={setMapMarker}
      style={mapStyle}
      center={[geolocation.latitude, geolocation.longitude]}
      zoom={13}
      fullscreenControl={false}
    >
      {visibleMarkers.map((marker, i) => <Marker key={i} pos={[marker.latitude, marker.longitude]}/>)}
    </Map>
  )
};

function mapStateToProps(state) {
  return {
    geolocation: state.geolocation,
    visibleMarkers: state.markers.visibleMarkers,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setMarker: setMarker
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
