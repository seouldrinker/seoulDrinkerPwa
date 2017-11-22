<template>
  <div id="beerPubDetailHeader">
    
  </div>
</template>

<script>
import { STATIC_URL } from '@/config'

export default {
  props: ['brandImage', 'titleImage', 'engName', 'korName'],
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
