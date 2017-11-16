<template>
  <div id="newsContainer">
    <ul>
      <li v-for="(news, index) in getNewsList" :key="index">
        <a href="#">{{ news.context }}</a>
        <a href="#">SeoulDrinker</a>
        <a href="#">../assets/news/admin.png</a>
        <a href="#">{{ news.context }}</a>
        <a href="#">{{ static_url }}/{{ news.image }}</a>
        <a href="#">{{ news.udt_dt }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { STATIC_URL } from '../config'

export default {
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
