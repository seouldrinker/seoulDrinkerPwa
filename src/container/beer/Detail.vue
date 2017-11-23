<template>
  <div id="beerDetailContainer">
    <app-layout>
      <header slot="header" class="invisible">
        <div class="header__text">
          <span class="logo" @click="goAnyWhere(-1)">
            <img src="../../assets/common/back.png" alt="back">
          </span>
          <span class="title">Beer</span>
        </div>
      </header>
      <div slot="contents" v-if="getBeerDetail">
        <app-detail-header
          :brandImage="getBeerDetail.brewery.brand_image"
          :titleImage="getBeerDetail.brewery.logo_image"
          :engName="getBeerDetail.eng_name"
          :korName="getBeerDetail.kor_name"
        />
        <app-detail-info
          :beerFeature="getBeerDetail.feature"
          :beerStyle="getBeerDetail.style"
          :beerRelease="getBeerDetail.release"
          :beerAbv="getBeerDetail.abv"
        />
        <app-detail-contents
          :about="getBeerDetail.brewery.about"
          :breweryEngName="getBeerDetail.brewery.eng_name"
          :breweryKorName="getBeerDetail.brewery.kor_name"
          :breweryLocation="getBeerDetail.brewery.location"
          :breweryPhone="getBeerDetail.brewery.phone"
          :feedList="getBeerDetail._feedList"
          :rank="getRank()"
        />
      </div>
    </app-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BeerPubDetailHeader from '@/components/beerPub/detail/header'
import BeerPubDetailContents from '@/components/beerPub/detail/contents'
import BeerDetailInfo from '@/components/beer/detail/info'
import Layout from '@/layout/index'

import { STATIC_URL } from '@/config'

export default {
  components: {
    appLayout: Layout,
    appDetailHeader: BeerPubDetailHeader,
    appDetailInfo: BeerDetailInfo,
    appDetailContents: BeerPubDetailContents
  },
  computed: {
    ...mapGetters([
      'getBeerDetail',
      'getBeerRank'
    ])
  },
  data () {
    return {
      static_url: STATIC_URL
    }
  },
  methods: {
    ...mapActions([
      'retrieveBeerDetail'
    ]),
    getRank () {
      if (this.getBeerRank) {
        const index = this.getBeerRank.findIndex((v, k) => {
          return v.beer._id === this.$route.params.id
        })
        return index > -1 ? this.getBeerRank[index].rank : '-'
      }
      return '-'
    },
    goAnyWhere (n) {
      return this.$router.go(n)
    }
  },
  created () {
    this.retrieveBeerDetail(this.$route.params.id)
  }
}
</script>

<style lang="scss">

</style>
