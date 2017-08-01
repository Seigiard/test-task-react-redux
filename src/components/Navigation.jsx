import React from 'react';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logout } from '../actions/UserActions';

const Navigation = ({isAuthenticated, logout}) => {
  return (
    <nav>
      <ul className="nav navbar-nav">
        {isAuthenticated ? <li><a onClick={logout}>Logout</a></li> :
          <li><NavLink to="/auth" replace>Auth</NavLink></li>}
        <li><NavLink to="/" replace>Main Page</NavLink></li>
        <li><NavLink to="/about" replace>About</NavLink></li>
      </ul>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout: logout
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
