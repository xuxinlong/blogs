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

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color: #FFF;
  }
  body.fullScreen .container {
    width: 100%;
  }
  input {
    padding: 0px;
  }
  input:focus {
    outline: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .container {
    width: 960px;
    height: auto;
    margin: 0 auto;
    // padding-top: 48px;
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
  .header {
    width: 100%;
    height: 48px;
    line-height: 48px;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.15);
  }
</style>
