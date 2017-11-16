<template>
  <div id="feedContainer">
    <ul>
      <li v-for="(feed, index) in getFeedList" :key="index">
        <div href="#">{{ feed.context }}</div>
        <div href="#">{{ feed.user.name }}</div>
        <div href="#">{{static_url}}/{{ feed.user.picture }}</div>
        <div href="#">{{ static_url }}/{{ feed.image }}</div>
        <div href="#">{{ feed.udt_dt }}</div>
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
      'getFeedList'
    ])
  },
  data () {
    return {
      static_url: STATIC_URL
    }
  },
  methods: {
    ...mapActions([
      'retrieveFeedList'
    ])
  },
  created () {
    this.retrieveFeedList()
  }
}
</script>

<style lang="scss">

</style>
