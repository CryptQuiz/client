import axios from 'axios';
import api from './clients';

const BASE_URL = "http://[::1]:32500"


const sendRequest = async (method, url, data) => {
  const request = await fetch(url, method, data)

  if (request.status === 200) {
    return request.json()
  }

  throw request
}

const Backend = {
  Root: {
    getRoot: async () => {
      return await sendRequest('GET', BASE_URL + '/home')
    },
  },

};

export default Backend;
