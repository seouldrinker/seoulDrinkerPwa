<template>
  <div class="feedContents">

  </div>
  <!--
    <router-link :to="`/scheduler/${index}`" tag="div">
    </router-link>
  -->
</template>

<script>
export default {
  props: ['beers', 'pub', 'feedContext'],
  data () {
    return {
      isActive: false
    }
  }
}
</script>

<style scoped>
</style>
