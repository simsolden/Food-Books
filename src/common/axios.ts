import axios from 'axios';
import { API_SOURCE } from './config';
import HttpException from './HttpException';

export const instance = axios.create({
  baseURL: API_SOURCE,
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (!err.response) {
      throw new HttpException(500, 'problème de communication avec les serveurs');
    }
    throw new HttpException(err.response.status, err.response.data.message);
  }
);

export const attachToken = () => {
  instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('user-token')}`;
    return config;
  });
};
