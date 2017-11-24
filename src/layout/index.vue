<template>
  <div id="commonLayout">
    <slot name="header">
      <header>
        <div class="header__logo">
          <img src="../assets/common/logo.png" alt="SeoulDrinker">
        </div>
      </header>
    </slot>
    <slot name="contents">
      <main>
        <div>no data</div>
      </main>
    </slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
#commonLayout {
  header {
    margin: 0;
    height: 45px;
    padding: 0 18px;
    background-color: #eea51b;
    color: #ffffff;
    box-shadow: 0 0 10px #4a5156;
    &.invisible {
      background-color: rgba(0,0,0,0);
      box-shadow: none;
    }
    & > .header__logo {
      position: relative;
      width: 120px;
      padding: 10px 0 0 0;
      margin: 0 auto;
      font-size: 20px;
      line-height: 1;
      letter-spacing: .02em;
      font-weight: 400;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
    & > .header__text {
      padding: 10px 0 0 0;
      & > span {
        display: inline-block;
        vertical-align: top;
        &.logo {
          width: 24px;
          height: 24px;
          &:hover {
            cursor: pointer;
          }
          & > img {
            width: 100%;
            height: 100%;
          }
        }
        &.title {
          margin: 2px 0 0 6px;
          &.noBack {
            margin: 2px 0 0 34px;
          }
          font-size: 15px;
          font-weight: 800;
        }
        &.rank {
          float: right;
          &:hover {
            cursor: pointer;
          }
          &:after {
            content: '';
            display: table;
            clear: both;
          }
        }
      }
    }
  }

  main {
    &.detailHeight {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: -1;
    }
    ul {
      li {
        div {
          word-wrap: break-word;
        }
      }
    }
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
