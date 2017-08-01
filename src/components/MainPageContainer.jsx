import React from 'react';
import Map from './MapContainer.jsx';
import Geolocation from './GeolocationContainer.jsx';
import MarkersToolbox from './MarkersToolbox.jsx';

export default () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Geolocation/>
      <Map/>
      <MarkersToolbox/>
    </div>
  );
}
