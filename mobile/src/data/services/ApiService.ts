import axios from 'axios';

// const url = 'https://ediaristas-workshop.herokuapp.com';

const baseURL = 'http://192.168.0.121:8000';

export const ApiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
