import axios from 'axios';

export const ApiService = axios.create({
  baseURL: 'https://ediaristas-workshop.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});
