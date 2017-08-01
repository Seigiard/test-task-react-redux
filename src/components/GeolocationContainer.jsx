import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setMarker } from '../actions/MarkerActions.js'
import { resetGeolocation, setGeolocation } from '../actions/GeolocationActions.js'

class Geolocation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMounted: false,
      message: 'Detecting your location.'
    };

    this.setGeolocation = this.props.setGeolocation;
    this.resetGeolocation = this.props.resetGeolocation;
    this.setMarker = this.props.setMarker;

    this.setDetectedGeolocationCenterOnMap = this.setDetectedGeolocationCenterOnMap.bind(this);
    this.setDefaultGeolocationCenterOnMap = this.setDefaultGeolocationCenterOnMap.bind(this);
  }

  getWebApiGeolocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, (e) => reject(e.message || 'User did not allow Geolocation.'));
      } else {
        reject('Your browser does not support Geolocation.');
      }
    });
  }

  setDetectedGeolocationCenterOnMap(x) {
    const {latitude, longitude} = x.coords;
    const point = {latitude, longitude};

    this.setState({message: 'Congratulation! We found you!'});

    this.setGeolocation(point);
    this.setMarker(point);
  }

  setDefaultGeolocationCenterOnMap(failReason) {
    this.setState({message: failReason});
    this.resetGeolocation();
  }

  componentDidMount() {
    this.getWebApiGeolocation().then(this.setDetectedGeolocationCenterOnMap, this.setDefaultGeolocationCenterOnMap);
  }

  render() {
    return (
      <p>{this.state.message}</p>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    setMarker: setMarker,
    setGeolocation: setGeolocation,
    resetGeolocation: resetGeolocation
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Geolocation)
