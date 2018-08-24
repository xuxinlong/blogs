<template>
  <div class="article-edit">
    <div class="article-edit-area">
      <div class="edit-header">
        <span class="save-btn" @click="save">{{btn_text}}</span>
        <input id="test" type="text" v-model="title"/>
      </div>
      <mavon-editor class="edit-area" v-model="value" :toolbarsFlag="toolbarsFlag" :subfield="subfield" :editable="editable" :default_open="default_open" :ishljs="true"></mavon-editor>
    </div>
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
        value: 'ceshi',
        title: '',
        btn_text: '',
        default_open: 'preview',
        subfield: true,
        toolbarsFlag: true,
        editable: true,
      };
    },
    created() {
      _hmt.push(['_trackPageview', '/ArticleEdit']);
      document.body.className = 'fullScreen';
      if (this.$route.query.id) {
        api.getArticleDetail({id: this.$route.query.id}).then((res) => {
          const data = res.data.data;
          this.title = data.detail.title;
          this.value = data.detail.text;
          this.btn_text = (data.detail.type === 1) ? '保存文章' : '保存随记';
        });
      } else {
        this.title = (this.$route.query.type === '1') ? '新建文章' : '新建随记';
        this.btn_text = (this.$route.query.type === '1') ? '保存文章' : '保存随记';
      }
    },
    beforeDestroy() {
      document.body.className = '';
    },
    methods: {
      save() {
        const params = {
          type: this.$route.query.type || 2,
          title: this.title,
          text: this.value,
          user_id: 1,
          time: new Date().getTime()
        };
        if (this.$route.query.id) {
          params.blog_id = this.$route.query.id;
          api.updateArticle(params).then((res) => {
            console.log(res);
            this.$router.push({name: 'articleDetail', params: {id: res.data.data}});
          });
        } else {
          api.addArticle(params).then((res) => {
            console.log(res.data);
            this.$router.push({name: 'articleDetail', params: {id: res.data.data}});
          }); 
        }
      },
    },
  };
</script>

<style lang="scss">
  @import "mavon-editor/dist/css/index.css";
  .article-edit {
    height: 100%;

    .article-edit-area {
      position: relative;
      height: 100%;
      .edit-header {
        width: 100%;
        height: 44px;
        position: absolute;
        z-index: 9999;
        top: 0;
        left: 0;
        padding-top: 20px;
        .save-btn {
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
          background-color: #ea6f5a;
        }
        input {
          width: calc(100% - 120px);
          border-width: 0px;
          padding: 0 80px 10px 40px;
          border: none;
          font-size: 30px;
          font-weight: 400;
          height: 34px;
          line-height: 34px;
          color: #595959;
          background-color: transparent;
          outline: none;
          border-radius: 0;
          overflow: hidden;
          text-align: center;
        }
      }
      .edit-area {
        height: calc(100% - 65px);
        padding-top: 65px;
      }
    }
    .save-btn {
      cursor: pointer;
    }
  }
</style>
