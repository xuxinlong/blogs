<template>
  <div class="article-lists">
    <ul>
      <li v-for="item in articles">
          <span class="type">{{ item.type === 1 ? '文' : '记' }}</span>
          <div class="art-title"><a target="_blank" :href="item.id ? 'index.html#/article/detail/' + item.id : 'javascript: void(0);'">{{item.title}}</a></div>
          <div class="art-text">{{item.text}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
  import api from '../api';
  export default {
    components: {
    },
    data() {
      return {
        articles: []
      };
    },
    created() {
      this.getPublicArticle();
    },
    methods: {
      getPublicArticle(type) {
        var params = {'type': 1};
        api.getPublicArticle(params).then((res) => {
          this.articles = res.data.data;
        });
      },
      toEdit(type) {
        this.$router.push({ name: 'articleEdit', params: {type: type} });
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
  .article-lists {
    height: 100%;
    padding-top: 30px;
    margin-right: 220px;

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
</style>
