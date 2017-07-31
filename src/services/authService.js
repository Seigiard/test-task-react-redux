import axios from './axios';

export default {
  isAuthenticated: false,

  login(username, password) {

    const authPair = {
      username,
      password
    };

    return axios.get('http://localhost:3000/auth', {
      auth: authPair
    })
      .then(
        () => {
          this.isAuthenticated = true;
          axios.defaults.auth = authPair;
        },
        () => {
          this.isAuthenticated = false;
          delete axios.defaults.auth;
        }
      );
  },

  logout() {
    this.isAuthenticated = false;
  }
}
