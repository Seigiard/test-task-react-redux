import React from 'react';
import Map from './Map.jsx';
import Geolocation from './Geolocation.jsx';
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
