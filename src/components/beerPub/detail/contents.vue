<template>
  <div id="beerPubDetailContents">

  </div>
</template>

<script>
import { STATIC_URL } from '@/config'

export default {
  props: ['about', 'breweryEngName', 'breweryKorName',
    'breweryLocation', 'breweryPhone', 'feedList', 'rank'],
  data () {
    return {
      static_url: STATIC_URL
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
