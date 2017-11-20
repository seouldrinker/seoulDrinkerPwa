<template>
  <div class="feedImage">
    <img :src="`${static_url}/${feedImage}`" alt="SeoulDrinker">
  </div>
</template>

<script>
import { STATIC_URL } from '../../config'

export default {
  props: ['feedImage'],
  data () {
    return {
      static_url: STATIC_URL
    }
  }
}
</script>

<style lang="scss">
  .feedImage {
    font-size: 0;
    img {
      width: 100%;
    }
  }
</style>
