import { Module } from 'vuex';
import axios, { AxiosRequestConfig } from 'axios';

const transactionModule: Module<any, any> = {
  state: {
    itemTransactions: [],
  },

  getters: {
    itemTransactions: (state) => state.itemTransactions,
  },

  mutations: {
    SET_ITEM_TRANSACTIONS(state, payload) {
      state.itemTransactions = payload;
    },
  },

  actions: {
    async fetchItemTransactions({ commit }, itemId: Number) {
      const { data } = await axios.get(`/items/${itemId}/transactions`);

      commit('SET_ITEM_TRANSACTIONS', data.data);

      return data.data;
    },

    async storeBuyTransaction({ commit }, payload: Object) {
      await axios.post(`/items/buy`, payload);

      commit('SET_WALLET_KEY', payload);
    },

    async storeListTransaction({ commit }, payload: Object) {
      await axios.post(`/items/list`, payload);
    },

    async storeMintTransaction({ commit }, payload: Object) {
      await axios.post(`/mint`, payload);
    },
  },
};

export default transactionModule;
