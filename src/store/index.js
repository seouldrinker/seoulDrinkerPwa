import Vue from 'vue'
import Vuex from 'vuex'

import feed from './modules/feed'
import pub from './modules/pub'
import beer from './modules/beer'
import news from './modules/news'

Vue.use(Vuex)

/* eslint-disable no-new */
export default new Vuex.Store({
  modules: {
    feed,
    pub,
    beer,
    news
  }
})
