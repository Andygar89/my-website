import { Module } from 'vuex';
import axios from 'axios';

const collectionsModule: Module<any, any> = {
  state: {
    publishedCollections: [],
    popularCollections: [],
    collection: null,
  },

  getters: {
    publishedCollections: (state) => {
      return state.publishedCollections;
    },
    popularCollections: (state) => {
      return state.popularCollections;
    },
    collection: (state) => {
      return state.collection;
    },
    comingSoon: (state) => {
      return state.comingSoon;
    },
  },

  mutations: {
    SET_PUBLISHED_COLLECTIONS(state, payload) {
      state.publishedCollections = payload;
    },
    SET_POPULAR_COLLECTIONS(state, payload) {
      state.popularCollections = payload;
    },
    SET_COLLECTION(state, payload) {
      state.collection = payload;
    },
  },

  actions: {
    async fetchPublishedCollections({ commit }, params) {
      const { data } = await axios.get('/collections', { params });

      commit('SET_PUBLISHED_COLLECTIONS', data.data);
    },

    async checkIfMinting({ commit }, slug) {
      const { data } = await axios.get(`/collections/mint/${slug}`);

      commit('SET_COLLECTION', data.data);
    },

    async fetchPopularCollections({ commit }) {
      // TODO: this needs to be the proper call
      const { data } = await axios.get('/collections/coming-soon');

      commit('SET_POPULAR_COLLECTIONS', data.data);
    },

    async fetchCollectionItems({ commit }, slug) {
      const { data } = await axios.get(`/collections/${slug}/items`);

      commit('SET_COLLECTION', data.data);
    },
  },
};

export default collectionsModule;
