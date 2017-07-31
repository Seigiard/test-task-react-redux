import axios from './axios';

export default {
  loadMarkers() {
    return axios.get('http://localhost:3000/markers')
      .then((res) => {
        if( res.data.status === false ) {
          throw 'Something happened with server.';
        }

        return res.data;
      });
  },

  saveMarkers(markers) {
    return axios.post('http://localhost:3000/markers', {markers});
  }
}
