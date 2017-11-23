<template>
  <div id="beerListContainer">
    <app-layout>
      <header slot="header">
        <div class="header__text">
          <router-link class="logo" :to="`/`" tag="span">
            <img src="../../assets/common/back.png" alt="back">
          </router-link>
          <span class="title">Beer</span>
        </div>
      </header>
      <main slot="contents">
        <ul>
          <li v-for="(beer, index) in getBeerList" :key="index">
            <app-list-item
              :isBeer="true"
              :data="beer"
              :image="beer.image"
            />
          </li>
        </ul>
      </main>
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
      'getBeerList'
    ])
  },
  data () {
    return {
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
