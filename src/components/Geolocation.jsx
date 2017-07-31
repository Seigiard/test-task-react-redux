import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as markerActions from '../actions/MarkerActions'
import * as geolocationActions from '../actions/GeolocationActions.js'

class Geolocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      message: 'Detecting your location.'
    }

    this.setGeolocation = this.props.geolocationActions.setGeolocation;
    this.resetGeolocation = this.props.geolocationActions.resetGeolocation;
    this.setMarker = this.props.markerActions.setMarker;
  }

  getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject.bind(null, 'User did not allow Geolocation.'));
      } else {
        reject('Your browser does not support Geolocation.');
      }
    });
  }

  setGeolocationOnMap(x) {
    const {latitude, longitude} = x.coords
    const point = {latitude, longitude};

    this.setState({message: 'Congratulation! We found you!'});

    this.setGeolocation(point);
    this.setMarker(point);
  }

  resetGeolocationOnMap(reason) {
    this.setState({message: reason});
    this.resetGeolocation();
  }

  render() {
    this.getLocation().then(this.setGeolocationOnMap.bind(this), this.resetGeolocationOnMap.bind(this));
    return (
      <p>{this.state.message}</p>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    markerActions: bindActionCreators(markerActions, dispatch),
    geolocationActions: bindActionCreators(geolocationActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Geolocation)
