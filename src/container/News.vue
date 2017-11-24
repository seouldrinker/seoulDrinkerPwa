<template>
  <div id="newsContainer">
    <app-layout>
      <header slot="header">
        <div class="header__text">
          <span class="title noBack">News</span>
        </div>
      </header>
      <main slot="contents" v-if="getNewsList">
        <ul>
          <li v-for="(news, index) in getNewsList" :key="index">
            <app-feed-header
              :userImage="`news_default_profile`"
              :userName="`서울 드링커`"
              :feedNewsDate="news.udt_dt"
            />
            <app-feed-image
              :feedNewsImage="news.image"
            />
            <app-news-contents
              :newsContext="news.context"
            />
          </li>
        </ul>
      </main>
    </app-layout>
    <app-navigator :isFeed="false" :isPub="false" :isBeer="false" :isNews="true"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '@/components/feedNews/header'
import Image from '@/components/feedNews/image'
import Contents from '@/components/news/contents'

import Layout from '@/layout/index'
import Navigator from '@/layout/navigator'

import { STATIC_URL } from '@/config'

export default {
  components: {
    appLayout: Layout,
    appNavigator: Navigator,
    appFeedHeader: Header,
    appFeedImage: Image,
    appNewsContents: Contents
  },
  computed: {
    ...mapGetters([
      'getNewsList'
    ])
  },
  data () {
    return {
      static_url: STATIC_URL
    }
  },
  methods: {
    ...mapActions([
      'retrieveNewsList'
    ])
  },
  created () {
    this.retrieveNewsList()
  }
}
</script>

<style lang="scss">
#newsContainer {
  margin: 0 0 50px 0;
}
</style>
