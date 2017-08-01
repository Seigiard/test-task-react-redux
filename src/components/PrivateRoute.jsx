import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({component: Component, isAuthenticated: isAuthenticated, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/auth',
          state: {from: props.location}
        }}/>
      )
    )}/>
  )
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
}

export default connect(mapStateToProps)(PrivateRoute)
