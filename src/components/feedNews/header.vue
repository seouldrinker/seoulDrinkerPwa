<template>
  <div class="feedNewsHeader">
    <span class="profileImage">
      <img :src="getFilteredImage()" alt="SeoulDrinker">
    </span>
    <span class="feedNewsInfo">
      <div class="userName">
        {{ userName }}
      </div>
      <div class="feedNewsDate">
        {{ getFilteredDate() }}
      </div>
    </span>
  </div>
</template>

<script>
import { STATIC_URL } from '../../config'

export default {
  props: ['userImage', 'userName', 'feedNewsDate'],
  data () {
    return {
    }
  },
  methods: {
    getFilteredDate () {
      var generatedDate = new Date(this.feedNewsDate)
      var hour = generatedDate.getHours() > 12
        ? '오후 ' + (generatedDate.getHours() - 12)
        : '오전 ' + generatedDate.getHours()

      return (generatedDate.getMonth() + 1) + '월 ' +
        generatedDate.getDate() + '일 ' +
        hour + ':' + generatedDate.getMinutes()
    },
    getFilteredImage () {
      if (this.userImage) {
        if (this.userImage.includes('news_default_profile')) {
          return require('@/assets/news/admin.png')
        }
        return `${STATIC_URL}/${this.userImage}`
      }
      return require('@/assets/feed/default_profile.png')
    }
  }
}
</script>

<style lang="scss">
  .feedNewsHeader {
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
      &.feedNewsInfo {
        margin: 0 0 0 10px;
        & > .userName {
          font-size: 15px;
          font-weight: 800;
        }
        & > .feedNewsDate {
          margin: 2px 0 0 0;
          font-size: 12px;
          font-weight: 600;
          color: #B5B5B5;
        }
      }
    }
  }
</style>
