<template>
  <div id="beerRankContainer">
    <app-layout>
      <header slot="header">
        <div class="header__text">
          <span class="logo" @click="goAnyWhere(-1)">
            <img src="../../assets/common/back.png" alt="back">
          </span>
          <span class="title">Beer</span>
        </div>
      </header>
      <main slot="contents" v-if="getBeerRank">
        <ul>
          <router-link v-for="(data, index) in getBeerRank"
            :key="index" :to="`/beer/${data.beer._id}`" tag="li">
            <app-rank
              :image="data.beer.image"
              :name="data.beer.kor_name || data.beer.eng_name"
              :count="data.beer._feedCount"
              :rank="data.rank"
              :isBeer="true"
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
      'getBeerRank'
    ])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'retrieveBeerRank'
    ]),
    goAnyWhere (n) {
      return this.$router.go(n)
    }
  },
  created () {
    if (!this.getBeerRank) {
      this.retrieveBeerRank()
    }
  }
}
</script>

<style lang="scss">
#beerRankContainer {
  ul:hover {
    cursor: pointer;
  }
}
</style>
