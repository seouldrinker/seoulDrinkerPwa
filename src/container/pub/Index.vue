<template>
  <div id="pubListContainer">
    <app-layout>
      <div slot="header" class="header__text">
        <router-link class="logo" :to="`/`" tag="span">
          <img src="../../assets/common/back.png" alt="back">
        </router-link>
        <span class="title">Pub</span>
      </div>
      <ul slot="contents">
        <li v-for="(pub, index) in getPubList" :key="index">
          <app-list-item
            :isBeer="false"
            :data="pub"
            :image="pub.brewery.logo_image || pub.brewery.brand_image"
          />
        </li>
      </ul>
    </app-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BeerPubListItem from '@/components/beerPub/list/index'
import Layout from '@/layout/index'

export default {
  components: {
    appLayout: Layout,
    appListItem: BeerPubListItem
  },
  computed: {
    ...mapGetters([
      'getPubList'
    ])
  },
  data () {
    return {
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
