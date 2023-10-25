import axios from 'axios';
import api from './clients';

const BASE_URL = "http://[::1]:32500"

const Backend = {
  Root: {
    getRoot: () => {
      return axios.get(`${BASE_URL}/home`);
    }
  },

  Projects: {
    getAllProject: () => {
      return axios.get(`${BASE_URL}/backoffice/projects/`);
    },
    getbyId: (id) => {
      console.log(id);
      return axios.get(`${BASE_URL}/backoffice/projects/${id}`);
    },
    createProject: (data) => {
      return axios.post(`${BASE_URL}/backoffice/projects/create`, data);
    },
  },
  Airdrops: {
    getAllAirdrops: () => {
      return axios.get(`${BASE_URL}/backoffice/projects/airdrop/`);
    },
    getbyId: (id) => {
      return axios.get(`${BASE_URL}/backoffice/projects/airdrop/${id}`);
    },
    createAirdrop: (data) => {
      return axios.post(`${BASE_URL}/backoffice/projects/airdrop/create`, data);
    },
    updateAirdrop: (id, data) => {
      return axios.post(`${BASE_URL}/backoffice/projects/airdrop/update/${id}`, data);
    },
  },
  Venture: {
    getAllVenture: () => {
      return axios.get(`${BASE_URL}/backoffice/venture/`);
    },
    getbyId: (id) => {
      return axios.get(`${BASE_URL}/backoffice/venture/${id}`);
    },
    createVenture: (data) => {
      return axios.post(`${BASE_URL}/backoffice/venture/create`, data);
    },
    updateVenture: (id, data) => {
      return axios.post(`${BASE_URL}/backoffice/venture/update/${id}`, data);
    },
  },
};

export default Backend;
