<template>
  <div id="newsContainer">
    <app-layout>
      <div slot="header">News</div>
      <ul slot="contents">
        <li v-for="(news, index) in getNewsList" :key="index">
          <a href="#">{{ news.context }}</a>
          <a href="#">SeoulDrinker</a>
          <a href="#">../assets/news/admin.png</a>
          <a href="#">{{ news.context }}</a>
          <a href="#">{{ static_url }}/{{ news.image }}</a>
          <a href="#">{{ news.udt_dt }}</a>
        </li>
      </ul>
    </app-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Layout from '../layout/index'

import { STATIC_URL } from '../config'

export default {
  components: {
    appLayout: Layout
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

</style>
