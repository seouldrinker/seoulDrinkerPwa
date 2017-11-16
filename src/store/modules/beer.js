import Vue from 'vue'
import axios from 'axios'

import { API_URL } from '../../config'

const state = {
  beerList: null
}

const getters = {
  getBeerList: () => {
    return state.beerList
  }
}

const mutations = {
  'RETRIEVE_BEER_LIST' (state, results) {
    Vue.set(state, 'beerList', results)
  }
}

const actions = {
  retrieveBeerList: ({ commit }) => {
    axios.get(`${API_URL}/beer`).then(results => {
      if (results && results.data && results.data.results) {
        commit('RETRIEVE_BEER_LIST', results.data.results)
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
