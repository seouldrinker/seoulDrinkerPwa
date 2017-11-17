<template>
  <div id="beerContainer">
    <app-layout>
      <div slot="header">Beer</div>
      <ul slot="contents">
        <li v-for="(beer, index) in getBeerList" :key="index">
          <div href="#">{{ beer.eng_name }}</div>
          <div href="#">{{ beer.kor_name }}</div>
          <div href="#">{{ beer.about }}</div>
          <div href="#">{{ beer.feature }}</div>
          <div href="#">{{ beer.style }}</div>
          <div href="#">{{ beer.abv }}</div>
          <div href="#">{{ beer.release }}</div>
          <div href="#">{{ static_url }}/{{ beer.image }}</div>
          <div href="#">{{ beer.udt_dt }}</div>
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
      'getBeerList'
    ])
  },
  data () {
    return {
      static_url: STATIC_URL
    }
  },
  methods: {
    ...mapActions([
      'retrieveBeerList'
    ])
  },
  created () {
    this.retrieveBeerList()
  }
}
</script>

<style lang="scss">

</style>
