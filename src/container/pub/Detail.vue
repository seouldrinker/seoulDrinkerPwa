<template>
  <div id="pubDetailContainer">
    <app-layout>
      <header slot="header" class="invisible">
        <div class="header__text">
          <span class="logo" @click="goAnyWhere(-1)">
            <img src="../../assets/common/back.png" alt="back">
          </span>
          <span class="title">Pub</span>
        </div>
      </header>
      <main slot="contents" class="detailHeight" v-if="getPubDetail">
        <app-detail-header
          :brandImage="getPubDetail.brewery.brand_image"
          :titleImage="getPubDetail.brewery.logo_image"
          :engName="getPubDetail.eng_name"
          :korName="getPubDetail.kor_name"
        />
        <app-detail-info
          :pubLocation="getPubDetail.location"
          :pubPhone="getPubDetail.phone"
          :pubHomepage="getPubDetail.brewery.homepage"
          :pubEst="getPubDetail.brewery.est"
          :pubFacebook="getPubDetail.brewery.facebook"
          :pubInstagram="getPubDetail.brewery.instagram"
        />
        <app-detail-contents
          :about="getPubDetail.brewery.about"
          :breweryImage="getPubDetail.brewery.brand_image"
          :breweryEngName="getPubDetail.brewery.eng_name"
          :breweryKorName="getPubDetail.brewery.kor_name"
          :breweryLocation="getPubDetail.brewery.location"
          :breweryPhone="getPubDetail.brewery.phone"
          :feedList="getPubDetail._feedList"
          :rank="getRank()"
        />
      </main>
    </app-layout>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import BeerPubDetailHeader from '@/components/beerPub/detail/header'
import BeerPubDetailContents from '@/components/beerPub/detail/contents'
import PubDetailInfo from '@/components/pub/detail/info'
import Layout from '@/layout/index'

export default {
  components: {
    appLayout: Layout,
    appDetailHeader: BeerPubDetailHeader,
    appDetailInfo: PubDetailInfo,
    appDetailContents: BeerPubDetailContents
  },
  computed: {
    ...mapGetters([
      'getPubDetail',
      'getPubRank'
    ])
  },
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'retrievePubDetail'
    ]),
    getRank () {
      if (this.getPubRank) {
        const index = this.getPubRank.findIndex((v, k) => {
          return v.pub._id === this.$route.params.id
        })
        return index > -1 ? this.getPubRank[index].rank : '-'
      }
      return '-'
    },
    goAnyWhere (n) {
      return this.$router.go(n)
    }
  },
  created () {
    this.retrievePubDetail(this.$route.params.id)
  }
}
</script>

<style lang="scss">

</style>
