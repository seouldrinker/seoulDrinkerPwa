<template>
  <div id="newsContainer">
    <app-layout>
      <div slot="header" class="header__text">
        <router-link class="logo" :to="`/`" tag="span"><img src="../assets/common/back.png" alt="back"></router-link>
        <span class="title">News</span>
      </div>
      <ul slot="contents">
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
    </app-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../components/feedNews/header'
import Image from '../components/feedNews/image'
import Contents from '../components/news/contents'

import Layout from '../layout/index'

import { STATIC_URL } from '../config'

export default {
  components: {
    appLayout: Layout,
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
  .header__text {
    padding: 15px 0 0 0;
    & span {
      display: inline-block;
      vertical-align: top;
      &.logo {
        width: 30px;
        height: 30px;
        &:hover {
          cursor: pointer;
        }
        & > img {
          width: 100%;
          height: 100%;
        }
      }
      &.title {
        margin: 5px 0 0 6px;
        font-weight: 800;
      }
    }
  }
</style>
