import Vue from 'vue'
import axios from 'axios'

import { API_URL } from '../../config'

const state = {
  pubList: null,
  pubDetail: null
}

const getters = {
  getPubList: () => {
    return state.pubList
  },
  getPubDetail: () => {
    return state.pubDetail
  }
}

const mutations = {
  'RETRIEVE_PUB_LIST' (state, results) {
    Vue.set(state, 'pubList', results)
  },
  'RETRIEVE_PUB_DETAIL' (state, results) {
    Vue.set(state, 'pubDetail', results)
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
  },
  retrievePubDetail: ({ commit }, _id) => {
    axios.get(`${API_URL}/pub/${_id}`).then(results => {
      if (results && results.data && results.data.results) {
        commit('RETRIEVE_PUB_DETAIL', results.data.results)
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
