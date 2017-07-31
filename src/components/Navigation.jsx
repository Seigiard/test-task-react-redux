import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userActions from '../actions/UserActions.js'

const Navigation = (props) => {
  return (
    <nav>
      <ul className="nav navbar-nav">
        {props.username ? '' : <li><NavLink to="/auth" replace>Auth</NavLink></li>}
        <li><NavLink to="/" replace>Main Page</NavLink></li>
        <li><NavLink to="/about" replace>About</NavLink></li>
      </ul>
    </nav>
  );
}

function mapStateToProps(state) {
  return {
    username: state.user.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
