import Vue from 'vue'
import axios from 'axios'

import { API_URL } from '../../config'

const state = {
  newsList: null
}

const getters = {
  getNewsList: () => {
    return state.newsList
  }
}

const mutations = {
  'RETRIEVE_NEWS_LIST' (state, results) {
    Vue.set(state, 'newsList', results)
  }
}

const actions = {
  retrieveNewsList: ({ commit }) => {
    axios.get(`${API_URL}/news`).then(results => {
      if (results && results.data && results.data.results) {
        commit('RETRIEVE_NEWS_LIST', results.data.results)
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
