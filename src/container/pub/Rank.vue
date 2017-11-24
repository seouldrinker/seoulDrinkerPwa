<template>
  <div id="pubRankContainer">
    <app-layout>
      <header slot="header">
        <div class="header__text">
          <span class="logo" @click="goAnyWhere(-1)">
            <img src="../../assets/common/back.png" alt="back">
          </span>
          <span class="title">Pub</span>
        </div>
      </header>
      <main slot="contents" v-if="getPubRank">
        <ul>
          <router-link v-for="(data, index) in getPubRank"
            :key="index" :to="`/pub/${data.pub._id}`" tag="li">
            <app-rank
              :image="data.pub.brewery.brand_image || data.pub.brewery.logo_image"
              :name="data.pub.kor_name || data.pub.eng_name"
              :count="data.pub._feedCount"
              :location="data.pub.location"
              :rank="data.rank"
              :isBeer="false"
            />
          </router-link>
        </ul>
      </main>
    </app-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BeerPubRank from '@/components/beerPub/rank/index'
import Layout from '@/layout/index'

export default {
  components: {
    appLayout: Layout,
    appRank: BeerPubRank
  },
  computed: {
    ...mapGetters([
      'getPubRank'
    ])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'retrievePubRank'
    ]),
    goAnyWhere (n) {
      return this.$router.go(n)
    }
  },
  created () {
    if (!this.getPubRank) {
      this.retrievePubRank()
    }
  }
}
</script>

<style lang="scss">
#pubRankContainer {
  ul:hover {
    cursor: pointer;
  }
}
</style>
