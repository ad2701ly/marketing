import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loading: true
}

const mutations = {
  LOADING_SYNC (state, payload) {
    state.loading = payload
  }
}

export default new Vuex.Store({
  state,
  mutations
})
