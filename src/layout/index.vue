<template>
  <div id="commonLayout">
    <header>
      <slot name="header">
        <div class="header__logo">
          <img src="../assets/common/logo.png" alt="SeoulDrinker">
        </div>
      </slot>
    </header>
    <main>
      <slot name="contents">
        <div>no data</div>
      </slot>
    </main>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
header {
  margin: 0;
  height: 45px;
  padding: 0 24px;
  background-color: #eea51b;
  color: #ffffff;
  div {
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    padding-top: 12px;
    &.header__logo {
      width: 120px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
}

main {
  text-align: center;
  margin-top: 40px;
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

</style>
