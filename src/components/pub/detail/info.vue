<template>
  <div id="pubDetailInfo">

  </div>
</template>

<script>
import { STATIC_URL } from '@/config'

export default {
  props: ['pubLocation', 'pubPhone', 'pubHomepage', 'pubEst', 'pubFacebook', 'pubInstagram'],
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
