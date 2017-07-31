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
    if (this.props.username) {
      return <Redirect to="/"/>
    }
    return (
      <div>
        <h1>Auth</h1>
        <AuthForm disabled={this.props.isFormDisabled} login={this.state.login} password={this.state.password}
                  onSubmit={this.onFormSubmit.bind(this)}
                  onInputChange={this.handleInputChange.bind(this)}/>
        <p>{this.props.authMessage}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    username: state.user.username,
    authMessage: state.user.authMessage,
    isFormDisabled: state.user.isFetchingAuth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
