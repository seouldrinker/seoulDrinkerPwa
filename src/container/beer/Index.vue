<template>
  <div id="beerListContainer">
    <app-layout>
      <header slot="header">
        <div class="header__text">
          <span class="title noBack">Beer</span>
          <router-link :to="`/beer/rank`" tag="span" class="rank">
            <img src="../../assets/common/rank.png" alt="rank">
          </router-link>
        </div>
      </header>
      <main slot="contents" v-if="getBeerList">
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
    <app-navigator :isFeed="false" :isPub="false" :isBeer="true" :isNews="false"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BeerPubListItem from '@/components/beerPub/list/index'
import Layout from '@/layout/index'
import Navigator from '@/layout/navigator'

export default {
  components: {
    appLayout: Layout,
    appNavigator: Navigator,
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
#beerListContainer {
  margin: 0 0 50px 0;
}
</style>
