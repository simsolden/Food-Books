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
    console.log(err.response.status);
    throw new HttpException(err.response.status, err.response.data.message);
  }
);

let interceptor: any;

export const attachToken = (token: string) => {
  interceptor = instance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${token}`;
    return config;
  });
};

export const removeToken = () => {
  console.log(interceptor);
  instance.interceptors.request.eject(interceptor);
};
