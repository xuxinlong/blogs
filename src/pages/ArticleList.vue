<template>
  <div class="article-list">
    <div class="left-bar">
      <div class="logo">
        <a>龍</a>
      </div>
      <ul>
        <li class="active">日记本</li>
        <li>随记</li>
      </ul>
    </div>
    <div class="right-cont">
      <div class="cont-oprate">
        <input class="search" type="text" />
        <a class="create-btn" @click="toEdit">创建文章</a>
      </div>
      <ul>
        <li v-for="item in articles">
          <div class="art-title"><a @click="toDetail(item.id)">{{item.title}}</a></div>
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
        articles: [],
      };
    },
    created() {
      this.getArticles();
    },
    methods: {
      getArticles() {
        api.getArticle().then((res) => {
          this.articles = res.data.data;
        });
      },
      toEdit() {
        this.$router.push({ name: 'articleEdit' });
      },
      toDetail(id) {
        this.$router.push({ name: 'articleDetail', params: {id: id}});
      },
      deleteArticle(id) {
        api.deleteArticle({'blog_id': id}).then((res) => {
          this.$router.go(0);
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
      width: 260px;
      height: 100%;
      float: left;
      padding-top: 30px;
      .logo {
        text-align: center;
        margin-bottom: 10px;
        a {
          display: block;
          width: 160px;
          height: 160px;
          line-height: 160px;
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
        background-color: #e6e6e6;
      }
    }
    .right-cont {
      height: 100%;
      padding-top: 30px;
      margin-left: 280px;
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
        .art-title {
          color: #0366d6;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
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
