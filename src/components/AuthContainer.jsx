import React from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as userActions from '../actions/UserActions.js'

import AuthForm from './AuthForm.jsx'

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: 'admin',
      password: 'password'
    };

    this.loginAction = this.props.userActions.login;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.loginAction(this.state.login, this.state.password);
  }

  render() {
    const { login, password } = this.state;
    const { isFormDisabled, authMessage, isAuthenticated } = this.props;

    if (isAuthenticated) {
      return <Redirect to="/"/>
    }
    return (
      <div>
        <h1>Auth </h1>
        <AuthForm disabled={isFormDisabled} login={login} password={password}
                  onSubmit={this.onFormSubmit}
                  onInputChange={this.handleInputChange}/>
        <p>{authMessage}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
    authMessage: state.user.authMessage,
    isFormDisabled: state.user.isFetchingAuth,
    isAuthenticated: state.user.isAuthenticated
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
