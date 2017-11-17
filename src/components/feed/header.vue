<template>
  <div class="feedHeader">
    <span class="profileImage">
      <img :src="filteredUserImage" alt="SeoulDrinker">
    </span>
    <span class="feedInfo">
      <div class="userName">
        {{ userName }}
      </div>
      <div class="feedDate">
        {{ feedDate }}
      </div>
    </span>
  </div>
</template>

<script>
import { STATIC_URL } from '../../config'

export default {
  props: ['userImage', 'userName', 'feedDate'],
  data () {
    return {
      filteredUserImage: this.userImage
        ? `${STATIC_URL}/${this.userImage}`
        : require('@/assets/feed/default_profile.png')
    }
  }
}
</script>

<style lang="scss">
  .feedHeader {
    & > .profileImage {
      & > img {
        width: 48px;
        height: 48px;
        border-radius: 48px;
      }
    }
  }
</style>
