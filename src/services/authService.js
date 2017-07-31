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
        (result) => {
          this.isAuthenticated = true;
          axios.defaults.auth = authPair;

          return true;
        },
        () => {
          this.isAuthenticated = false;
          delete axios.defaults.auth;

          throw false;
        }
      );
  },

  logout() {
    this.isAuthenticated = false;
  }
}
