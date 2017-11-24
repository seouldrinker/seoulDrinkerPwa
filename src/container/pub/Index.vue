<template>
  <div id="pubListContainer">
    <app-layout>
      <header slot="header">
        <div class="header__text">
          <span class="title noBack">Pub</span>
        </div>
      </header>
      <main slot="contents" v-if="getPubList">
        <ul>
          <li v-for="(pub, index) in getPubList" :key="index">
            <app-list-item
              :isBeer="false"
              :data="pub"
              :image="pub.brewery.logo_image || pub.brewery.brand_image"
            />
          </li>
        </ul>
      </main>
    </app-layout>
    <app-navigator :isFeed="false" :isPub="true" :isBeer="false" :isNews="false"/>
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
#pubListContainer {
  margin: 0 0 50px 0;
}
</style>
