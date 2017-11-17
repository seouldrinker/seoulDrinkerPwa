<template>
  <div id="pubContainer">
    <app-layout>
      <div slot="header">Pub</div>
      <ul slot="contents">
        <li v-for="(pub, index) in getPubList" :key="index">
          <div href="#">{{ pub.eng_name }}</div>
          <div href="#">{{ pub.kor_name }}</div>
          <div href="#">{{ pub.location }}</div>
          <div href="#">{{ pub.phone }}</div>
          <div href="#">{{ pub.udt_dt }}</div>
          <div href="#">{{ pub.brewery }}</div>
        </li>
      </ul>
    </app-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Layout from '../../layout/index'

import { STATIC_URL } from '../../config'

export default {
  components: {
    appLayout: Layout
  },
  computed: {
    ...mapGetters([
      'getPubList'
    ])
  },
  data () {
    return {
      static_url: STATIC_URL
    }
  },
  methods: {
    ...mapActions([
      'retrievePubList'
    ])
  },
  created () {
    this.retrievePubList()
  }
}
</script>

<style lang="scss">

</style>
