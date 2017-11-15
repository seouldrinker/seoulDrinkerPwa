import Vue from 'vue'
import Router from 'vue-router'

import Feed from '@/container/Feed'
import Pub from '@/container/Pub'
import PubDetail from '@/container/PubDetail'
import PubRank from '@/container/PubRank'
import Beer from '@/container/Beer'
import BeerDetail from '@/container/BeerDetail'
import BeerRank from '@/container/BeerRank'
import News from '@/container/News'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/pub',
      name: 'Pub',
      component: Pub
    },
    {
      path: '/pub/:id',
      name: 'PubDetail',
      component: PubDetail
    },
    {
      path: '/pub/rank',
      name: 'PubRank',
      component: PubRank
    },
    {
      path: '/beer',
      name: 'Beer',
      component: Beer
    },
    {
      path: '/beer/:id',
      name: 'BeerDetail',
      component: BeerDetail
    },
    {
      path: '/',
      name: 'BeerRank',
      component: BeerRank
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {
      x: 0,
      y: 0
    }
  }
})
