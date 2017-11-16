import Vue from 'vue'
import axios from 'axios'

import { API_URL } from '../../config'

const state = {
  pubList: null
}

const getters = {
  getPubList: () => {
    return state.pubList
  }
}

const mutations = {
  'RETRIEVE_PUB_LIST' (state, results) {
    Vue.set(state, 'pubList', results)
  }
}

const actions = {
  retrievePubList: ({ commit }) => {
    axios.get(`${API_URL}/pub`).then(results => {
      if (results && results.data && results.data.results) {
        commit('RETRIEVE_PUB_LIST', results.data.results)
        return true
      }
      throw new Error('Retrieve Error!')
    }).catch(error => {
      console.log(error)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
