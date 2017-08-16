import axios from 'axios';
import store from '@/store';

const instance = axios.create({
  baseURL: process.env.DOMAIN,
});

function errorStatusHandler(status) {
  if (status === 401 && location.pathname !== '/signUp') {
    store.commit('SET_USER', '');
    window.location.href = `/signUp?redirect_path=${location.pathname}`;
  }
}

// Add a request interceptor
instance.interceptors.request.use((config) => {
  store.commit('SET_LOADING', true);
  // inject admin-token to http config
  return {
    ...config,
    headers: store.getters.httpUserHeader,
  };
}, (error) => {
  store.commit('SET_LOADING', false);
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use((response) => {
  store.commit('SET_LOADING', false);
  return response;
}, (error) => {
  store.commit('SET_LOADING', false);
  errorStatusHandler(error.response.status);
  return Promise.reject(error);
});

export default instance;
