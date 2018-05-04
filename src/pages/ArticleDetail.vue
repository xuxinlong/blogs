<template>
  <div class="article-detail">
    <div class="article-header">
      <div class="article-title">{{title}}</div>
      <div class="article-info">
        <img src=""/>
        <div class="info">
          <span>{{author}}</span>
          <div><span>{{detail.time | parseDate('yyyy.MM.dd hh:mm')}}</span></div>
        </div>
        <div class="edit-btn" @click="toEdit">编辑</div>
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
        value: 'test',
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
          this.title = data.title;
          this.value = data.text;
          this.subfield = false;
          this.detail = data;
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
