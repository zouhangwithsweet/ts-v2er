import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// import { Iitem } from '@/interface'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPost: null,
  },
  getters: {
    currentPost: state => state.currentPost,
  },
  mutations: {
    saveCurrentPost(state, payload) {
      state.currentPost = payload
    },
  },
  actions: {
    upDateCurrentPost({ commit }, payload) {
      commit('saveCurrentPost', payload)
    },
  },
  plugins: [createPersistedState()],
})
