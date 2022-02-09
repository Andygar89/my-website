import { Module } from 'vuex';
import axios from 'axios';

const itemsModule: Module<any, any> = {
  state: {
    item: null,
  },

  getters: {
    item: (state) => {
      return state.item;
    },
  },

  mutations: {
    SET_ITEM(state, payload) {
      state.item = payload;
    },
  },

  actions: {
    async fetchItem({ commit }, id) {
      const { data } = await axios.get(`items/${id}/attributes`);

      commit('SET_ITEM', data.data);
    },
  },
};

export default itemsModule;
