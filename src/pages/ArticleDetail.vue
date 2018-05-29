<template>
  <div class="article-detail">
    <div class="article-header">
      <div class="article-title">{{title}}</div>
      <div class="article-info">
        <img src=""/>
        <div class="info">
          <span>{{author}}</span>
          <div><span>{{detail.time | parseDate('yyyy.MM.dd hh:mm')}}</span> <span> 字数:{{value.length}}</span></div>
        </div>
        <div v-if="detail.isAuther" class="edit-btn" @click="toEdit">编辑</div>
      </div>
    </div>
    <mavon-editor class="edit-area" v-model="value" :toolbarsFlag="toolbarsFlag" :subfield="subfield"  :default_open="default_open" :ishljs="true"></mavon-editor>
  </div>
</template>

<script>
  import api from '../api';
  import {mavonEditor} from 'mavon-editor';
  export default {
    components: {
      mavonEditor,
    },
    data() {
      return {
        title: '无标题',
        author: '作者',
        subfield: true,
        default_open: 'preview',
        toolbarsFlag: false,
        editable: false,
        value: '',
        user_info: {},
        detail: {}
      };
    },
    created() {
      this.getArticleDetail();
    },
    methods: {
      getArticleDetail() {
        api.getArticleDetail({id: this.$route.params.id}).then((res) => {
          const data = res.data.data;
          this.title = data.detail.title;
          this.value = data.detail.text;
          this.subfield = false;
          this.author = data.user_info.name;

          this.detail = data.detail;
          this.user_info = data.user_info;
        });
      },
      toEdit() {
        this.$router.push({ name: 'articleEdit', params: {id: this.$route.params.id}});
      }
    },
  };
</script>

<style lang="scss">
  .article-detail {
    .article-title {
      font-size: 34px;
      font-weight: 700;
    }
    .article-info {
      position: relative;
    }
    .edit-btn {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      border-radius: 20px;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
      background-color: #ea6f5a;
    }
  }
</style>
