<template>
  <div id="beerDetailInfo">

  </div>
</template>

<script>
import { STATIC_URL } from '@/config'

export default {
  props: ['beerFeature', 'beerStyle', 'beerRelease', 'beerAbv'],
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
