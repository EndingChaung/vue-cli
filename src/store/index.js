import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import * as types from './mutationTypes';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    userToken: '57SIYRK0tyJwehS98vHOBn',
    companyToken: '4mQ9Nt2qskE8heoi61eZjA',
    userInfo: {},
  },
  mutations: {
    [types.SET_USER](state, userToken) {
      state.userToken = userToken;
    },
    [types.SET_COMPANY](state, userToken) {
      state.userToken = userToken;
    },
    [types.SET_USERINFO](state, payload) {
      state.userInfo = payload;
    },
    [types.SET_LOADING](state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    setUser({ commit }, payload) {
      commit(types.SET_USER, payload);
    },
    setCompany({ commit }, payload) {
      commit(types.SET_COMPANY, payload);
    },
    setUserInfo({ commit }, payload) {
      commit(types.SET_USERINFO, payload);
    },
  },
  getters: {
    httpUserHeader(state) {
      return {
        Accept: 'application/json',
        'User-Token': state.userToken,
      };
    },
    httpCompanyHeader(state) {
      return {
        Accept: 'application/json',
        'User-Token': state.companyToken,
      };
    },
  },
  plugins: [
    createPersistedState({
      paths: ['userToken', 'companyToken', 'userInfo'],
    }),
  ],
});
