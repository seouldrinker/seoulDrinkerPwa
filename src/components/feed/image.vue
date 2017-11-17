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

<style scoped>
</style>
