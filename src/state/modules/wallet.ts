import { Module } from 'vuex';
import axios, { AxiosRequestConfig } from 'axios';

const walletModule: Module<any, any> = {
  state: {
    walletKey: '',
  },

  getters: {
    walletKey: (state) => state.walletKey,
  },

  mutations: {
    SET_WALLET_KEY(state, payload: String) {
      state.walletKey = payload;
    },
  },

  actions: {
    async saveUser({ commit }, payload: String) {
      await axios.post(`/login`, { walletId: payload });

      commit('SET_WALLET_KEY', payload);
    },

    removeWalletKey({ commit }) {
      commit('SET_WALLET_KEY', '');
    },

    setWalletKey({ commit }, walletKey: String) {
      commit('SET_WALLET_KEY', walletKey);
    },
  },
};

export default walletModule;
