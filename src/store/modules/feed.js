import Vue from 'vue'
import axios from 'axios'

import { API_URL } from '../../config'

const state = {
  feedList: null
}

const getters = {
  getFeedList: () => {
    return state.feedList
  }
}

const mutations = {
  'RETRIEVE_FEED_LIST' (state, results) {
    Vue.set(state, 'feedList', results.feedList)
  }
}

const actions = {
  retrieveFeedList: ({ commit }) => {
    axios.get(`${API_URL}/feed?type=all`).then(results => {
      if (results && results.data && results.data.results) {
        commit('RETRIEVE_FEED_LIST', results.data.results)
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
