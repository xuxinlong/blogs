<template>
  <div class="article-list">
    <div class="left-bar">
      <div class="logo">
        <a>{{(userInfo && userInfo.name) ? userInfo.name : 'name'}}</a>
      </div>
      <ul>
        <li :class="{active: barActive === 0}" class="all" @click="getArticles()">全部</li>
        <li :class="{active: barActive === 1}"  class="article" @click="getArticles(1)">文章</li>
        <li :class="{active: barActive === 2}"  class="random" @click="getArticles(2)">随记</li>
      </ul>
    </div>
    <div class="right-cont">
      <div class="cont-oprate">
        <input class="search" type="text" />
        <a class="create-btn" @click="toEdit(1)">创建文章</a>
        <a class="create-btn" @click="toEdit(2)">创建随记</a>
      </div>
      <ul>
        <li v-for="item in articles">
          <span class="type">{{ item.type === 1 ? '文' : '记' }}</span>
          <div class="art-title"><a target="_blank" :href="item.id ? 'index.html#/article/detail/' + item.id : 'javascript: void(0);'">{{item.title}}</a></div>
          <div class="art-text">{{item.text}}</div>
          <div class="art-delete-btn" v-if="item.isAuther" @click="deleteArticle(item.id)">删除</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import api from '../api';
  export default {
    components: {
    },
    data() {
      return {
        userInfo: {},
        articles: [],
        barActive: 0
      };
    },
    created() {
      console.log(this.userInfo.name);
      this.getUserInfo();
      this.getArticles();
    },
    methods: {
      getArticles(type) {
        var params = {};
        if (type) {
          params = {'type': type};
          this.barActive = type;
        } else {
          this.barActive = 0;
        }
        api.getArticle(params).then((res) => {
          this.articles = res.data.data;
        });
      },
      toEdit(type) {
        this.$router.push({ name: 'articleEdit', params: {type: type} });
      },
      toDetail(id) {
        this.$router.push({ name: 'articleDetail', params: {id: id}});
      },
      deleteArticle(id) {
        api.deleteArticle({'blog_id': id}).then((res) => {
          this.$router.go(0);
        });
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
    },
  };
</script>

<style lang="scss">
  // @import "mavon-editor/dist/css/index.css";
  .article-list {
    height: 100%;
    .left-bar {
      width: 200px;
      height: 100%;
      float: left;
      padding-top: 30px;
      .logo {
        text-align: center;
        margin-bottom: 10px;
        a {
          display: block;
          width: 140px;
          height: 140px;
          line-height: 140px;
          margin: auto;
          font-size: 50px;
          color: #ec7259;
          border: 1px solid rgba(236, 114, 89, 0.8);
          border-radius: 5px;
        }
      }
      li {
        cursor: pointer;
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
      }
      li.active,
      li:hover {
        background-color: rgba(236,97,73,0.6);
        color: #FFF;
      }
    }
    .right-cont {
      height: 100%;
      padding-top: 30px;
      margin-left: 220px;
      .cont-oprate {
        padding: 15px 0px;
        border-bottom: 1px solid #d9d9d9;
        input.search {
          display: inline-block;
          width: 400px;
          height: 34px;
          line-height: 34px;
          padding: 0px 10px;
          border-radius: 3px;
          border: 1px solid #d9d9d9;
        }
        a.create-btn {
          display: inline-block;
          height: 34px;
          line-height: 34px;
          padding: 0px 10px;
          margin-left: 10px;
          font-weight: 700;
          color: #FFF;
          background-color: #28a745;
          border: 1px solid #28a745;
          border-radius: 3px;
        }
      }
      li {
        position: relative;
        height: 60px;
        padding: 15px 10px 15px 25px;
        border-bottom: 1px solid #d9d9d9;

        .type {
          position: absolute;
          top: 15px;
          left: 0px;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          color: #ec7259;
          border: 1px solid rgba(236, 97, 73, 0.7);
          border-radius: 15px;
        }
        .art-title {
          color: #0366d6;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
        }
        .art-title a {
          color: #0366d6;
        }
        .art-text {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .art-delete-btn {
          position: absolute;
          top: 15px;
          right: 10px;
          padding: 2px 5px;
          color: #ec7259;
          cursor: pointer;
          border: 1px solid rgba(236, 97, 73, 0.7);
          border-radius: 15px;
        }
      }
    }
  }
</style>
