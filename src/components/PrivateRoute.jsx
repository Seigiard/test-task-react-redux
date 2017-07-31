import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authService from '../services/authService.js';

export default ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={props => (
      authService.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/auth',
          state: {from: props.location}
        }}/>
      )
    )}/>
  )
}
