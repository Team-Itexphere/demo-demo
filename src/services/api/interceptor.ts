import axios from 'axios';
import {getAccessToken} from '../../shared/config/accessToken';
import {BASE_URL} from '../urls';
import {errorHandler} from './errorHandler';
import {responseHandler} from './responseHandler';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    config.headers = {
      Authorization: (await getAccessToken())
        ? `Bearer ${await getAccessToken()}`
        : '',
      //'content-Type': (await getAccessToken()) ? 'application/json' : '',
      'content-Type':
        config.url === 'token'
          ? 'application/x-www-form-urlencoded'
          : 'application/json',
    };
    console.log('value+++ ', config);
    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: any) => {
    console.log(response);
    return responseHandler(response);
  },
  (error: any) => {
    console.log(error);
    return Promise.reject(errorHandler(error));
  },
);

export default axiosInstance;
