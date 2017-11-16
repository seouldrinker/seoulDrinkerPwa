<template>
  <div id="pubContainer">
    <ul>
      <li v-for="(pub, index) in getPubList" :key="index">
        <div href="#">{{ pub.eng_name }}</div>
        <div href="#">{{ pub.kor_name }}</div>
        <div href="#">{{ pub.location }}</div>
        <div href="#">{{ pub.phone }}</div>
        <div href="#">{{ pub.udt_dt }}</div>
        <div href="#">{{ pub.brewery }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { STATIC_URL } from '../../config'

export default {
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
