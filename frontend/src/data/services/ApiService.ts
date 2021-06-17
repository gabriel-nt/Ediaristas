import axios from 'axios';

// const url = 'https://ediaristas-workshop.herokuapp.com';

const baseURL = 'http://localhost:8000';

export const ApiService = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
