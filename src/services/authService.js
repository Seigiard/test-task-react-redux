import axios from './axios';

export default {
  login(username, password) {
    const authPair = {
      username,
      password
    };
    return axios.get('/auth', {
      auth: authPair
    })
      .then(
        (result) => {
          axios.defaults.auth = authPair;
          return true;
        },
        () => {
          delete axios.defaults.auth;
          throw false;
        }
      );
  },

  logout() {
    this.isAuthenticated = false;
  }
}
