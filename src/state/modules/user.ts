import { Module } from 'vuex';
import axios from 'axios';

const userModule: Module<any, any> = {
  state: {
    userNfts: [],
  },

  getters: {
    userNfts: (state) => {
      return state.userNfts;
    },
  },

  mutations: {
    SET_NFTS(state, payload) {
      state.userNfts = payload;
    },
  },

  actions: {
    getUser(commit) {
      let cute = axios.get('/users').then(({ data }) => {
        console.log(data);
      });
      // commit('GET_USER')
    },
    async getUserNfts({ commit }, userId) {
      await axios.get(`/users/${userId}/items`).then(({ data }) => {
        commit('SET_NFTS', data.data);
      });
    },
  },
};

export default userModule;
