<template>
  <div id="feedContainer">
    <app-layout>
      <ul slot="contents">
        <li v-for="(feed, index) in getFeedList" :key="index">
          <app-feed-header
            :userImage="feed.user.picture"
            :userName="feed.user.name"
            :feedDate="feed.udt_dt"
          />
          <app-feed-image
            :feedImage="feed.image"
          />
          <app-feed-contents
            :beers="feed.beers"
            :pub="feed.pub"
            :feedContext="feed.context"
          />
        </li>
      </ul>
    </app-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from '../components/feed/header'
import Image from '../components/feed/image'
import Contents from '../components/feed/contents'
import Layout from '../layout/index'

import { STATIC_URL } from '../config'

export default {
  components: {
    appLayout: Layout,
    appFeedHeader: Header,
    appFeedImage: Image,
    appFeedContents: Contents
  },
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
