<template>
  <div class="beerPubHeader">
    <span class="image">
      <img :src="image" alt="SeoulDrinker">
    </span>
    <span class="beerPubInfo">
      <div class="engName">
        {{ data.eng_name }}
      </div>
      <div class="korName">
        {{ data.kor_name }}
      </div>
      <app-beer-item-contents v-if="isBeer"
        :data="data"
      />
      <app-pub-item-contents v-else
        :data="data"
      />
    </span>
  </div>
</template>

<script>
import PubItemContents from '../../pub/list/contents'
import BeerItemContents from '../../beer/list/contents'

export default {
  components: {
    appPubItemContents: PubItemContents,
    appBeerItemContents: BeerItemContents
  },
  props: ['isBeer', 'data', 'image', 'contents'],
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
  .beerPubHeader {

  }
</style>
