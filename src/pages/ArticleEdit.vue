<template>
  <div class="article-edit">
    <div class="article-edit-area">
      <div class="edit-header">
        <span class="save-btn" @click="save">保存</span>
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
        title: '无标题',
        default_open: 'preview',
        subfield: true,
        toolbarsFlag: true,
        editable: true,
      };
    },
    created() {
      api.getArticle({user_id: 1}).then(function (res) {
      });
    },
    methods: {
      save() {
        const params = {
          title: this.title || '无标题',
          text: this.value,
          user_id: 1,
          time: new Date().getTime()
        };
        api.addArticle(params).then(function () {

        });
      },
    },
  };
</script>

<style lang="less">
  @import "~mavon-editor/dist/css/index.css";
  html, body, #app, .container{
    width: 100%;
    height: 100%;
    margin: 0px;
  }
  .article-edit {
    height: 100%;

    .article-edit-area {
      position: relative;
      // margin-left: 300px;
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
          width: calc(~"100% - 120px");
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
        height: calc(~"100% - 65px");
        padding-top: 65px;
      }
    }
    .left-bar {
      width: 160px;
      height: 100%;
      float: left;
      background-color: #404040;
      color: #FFF;
      .back-home {
        padding: 30px 18px 5px;
        text-align: center;
        a {
          display: block;
          font-size: 15px;
          padding: 9px 0;
          color: #ec7259;
          border: 1px solid rgba(236,114,89,.8);
          border-radius: 20px;
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
        border-left: 3px solid #ec7259;
        padding-left: 12px;
        background-color: #666;
      }
    }
    .right-cont {
      margin-left: 160px;
      height: 100%;
      .article-bar {
        width: 300px;
        height: 100%;
        float: left;
        overflow-y: auto;
        border-right: 1px solid #d9d9d9;
        .create-btn,
        .create-affter-btn {
          padding: 20px 10px 20px 25px;
          cursor: pointer;
        }
        .create-btn {
          border-bottom: 1px solid #d9d9d9;
        }
        li {
          cursor: pointer;
          height: 60px;
          padding: 15px 10px 15px 25px;
          border-bottom: 1px solid #d9d9d9;
        }
        li.active,
        li:hover {
          border-bottom: 1px solid #d9d9d9;
          border-left: 5px solid #ec7259;
          background-color: #e6e6e6;
        }
      }
    }
    .save-btn {
      cursor: pointer;
    }
  }
</style>
