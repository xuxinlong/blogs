<template>
  <div id="app">
    <div class="header">
      <a target="_blank" v-if="userInfo.github_url" :href="userInfo.github_url" class="github_url">Github</a>
      <span class="title">博客</span>
      <span v-if="userInfo.name" @click="toMe" class="login-nav">{{userInfo.name}}</span>
      <span v-else class="login-nav" @click="toLogin">登录</span>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import api from './api';

  export default {
    name: 'app',
    data() {
      return {
        userInfo: {},
      };
    },
    created() {
      this.getUserInfo();
    },
    watch: {
      $route(to, from) {
        window._hmt && window._hmt.push(['_trackPageview', '/#' + to.fullPath]);  
      },
    },
    methods: {
      toLogin() {
        this.$router.push({ name: 'login' });
      },
      toMe() {
        this.$router.push({ name: 'articleList' });
      },
      getUserInfo() {
        api.getUserInfo().then((res) => {
          if (res.status === 200) {
            if (res.data.code === 0) {
              this.userInfo = res.data.data;
            }
          }
        });
      }
    }
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
    margin-top: 1px;
    padding-bottom: 40px;
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
    text-align: center;
    width: 100%;
    height: 48px;
    line-height: 48px;
    box-shadow: 0 0 1px 0px rgba(0,0,0,0.15);

    .github_url {
      float: left;
      text-align: center;
      color: #EC7259;
      font-size: 24px;
      height: 36px;
      line-height: 36px;
      margin: 6px 0 0 10px;
      padding: 0px 6px;
      border-radius: 36px;
    }
    .github_url:hover {
      background-color: #EC7259;
      color: #fff;
    }
    .title {
      color: #EC7259;
      font-size: 24px;
      font-weight: 500;
    }
    .login-nav {
      float: right;
      width: 60px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      margin: 9px 5px 0 15px;
      color: #EC7259;
      border: 1px solid rgba(236,97,73,.7);
      border-radius: 15px;
      cursor: pointer;
    }
  }
</style>
