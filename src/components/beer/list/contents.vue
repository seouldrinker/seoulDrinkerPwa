<template>
  <div class="beerPubOtherInfo">
    <div class="style" v-if="data.style">Style : {{ data.style }}</div>
    <div class="abv" v-if="data.abv">ABV : {{ data.abv }}</div>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="scss">
  .beerPubOtherInfo {
    & > .style, .abv {
      display: inline-block;
    }
  }
</style>
