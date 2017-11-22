import Vue from 'vue'
import axios from 'axios'

import { API_URL } from '../../config'

const state = {
  pubRank: null,
  beerRank: null
}

const getters = {
  getPubRank: () => {
    return state.pubRank
  },
  getBeerRank: () => {
    return state.beerRank
  }
}

const mutations = {
  'RETRIEVE_PUB_RANK' (state, results) {
    Vue.set(state, 'pubRank', results)
  },
  'RETRIEVE_BEER_RANK' (state, results) {
    Vue.set(state, 'beerRank', results)
  }
}

const actions = {
  retrievePubRank: ({ commit }) => {
    axios.get(`${API_URL}/pub/rank`).then(results => {
      if (results && results.data && results.data.results) {
        commit('RETRIEVE_PUB_RANK', results.data.results)
        return true
      }
      throw new Error('Retrieve Error!')
    }).catch(error => {
      console.log(error)
    })
  },
  retrieveBeerRank: ({ commit }, _id) => {
    axios.get(`${API_URL}/beer/rank`).then(results => {
      if (results && results.data && results.data.results) {
        commit('RETRIEVE_BEER_RANK', results.data.results)
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
