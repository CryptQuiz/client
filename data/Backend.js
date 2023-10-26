import axios from 'axios';
import api from './clients';

const BASE_URL = "http://[::1]:32500/"


const sendRequest = async (method, endpoint, data) => {
  try {
    const response = await axios({
      method,
      url: `${BASE_URL}${endpoint}`,
      data,
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

const Backend = {
  Root: {
    getRoot: async () => {
      return await sendRequest('GET', 'home');
    },
  },
  Profile: {
    getAllUser: async (id) => {
      return await sendRequest('GET', `user/`);
    }
  }
  ,
  Quiz: {
    getAllQuiz: async () => {
      return await sendRequest('GET', `quiz/`);
    },


  }

};

export default Backend;
