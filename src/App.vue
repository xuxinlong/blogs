<template>
  <div id="app">
    <div class="header">
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  ul, li {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }
  a {
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }
</style>
