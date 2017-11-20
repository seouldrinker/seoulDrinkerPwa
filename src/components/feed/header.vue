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
        {{ getFilteredDate() }}
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
  },
  methods: {
    getFilteredDate () {
      var generatedDate = new Date(this.feedDate)
      var hour = generatedDate.getHours() > 12
        ? ('오후 ' + generatedDate.getHours() - 12)
        : ('오전 ' + generatedDate.getHours())

      return (generatedDate.getMonth() + 1) + '월 ' +
        generatedDate.getDate() + '일 ' +
        hour + ':' + generatedDate.getMinutes()
    }
  }
}
</script>

<style lang="scss">
  .feedHeader {
    height: 65px;
    padding: 10px 0 0 16px;
    box-sizing: border-box;
    span {
      display: inline-block;
      vertical-align: middle;
      &.profileImage {
        width: 46px;
        height: 46px;
        & > img {
          width: 100%;
          height: 100%;
          border-radius: 48px;
        }
      }
      &.feedInfo {
        margin: 0 0 0 10px;
        & > .userName {
          font-size: 15px;
          font-weight: 800;
        }
        & > .feedDate {
          margin: 2px 0 0 0;
          font-size: 12px;
          font-weight: 600;
          color: #B5B5B5;
        }
      }
    }
  }
</style>
