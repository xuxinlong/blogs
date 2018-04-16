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
    },
  };
</script>

<style lang="scss">
  .article-detail {
    .article-title {
      font-size: 34px;
      font-weight: 700;
    }
  }
</style>
