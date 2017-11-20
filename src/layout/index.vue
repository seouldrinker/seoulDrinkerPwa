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
  height: 56px;
  padding: 0 18px;
  background-color: #eea51b;
  color: #ffffff;
  box-shadow: 0 0 10px #4a5156;
  div {
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
    &.header__logo {
      width: 156px;
      padding-top: 12px;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
}

main {
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
