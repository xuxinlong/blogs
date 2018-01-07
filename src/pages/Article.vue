<template>
  <div class="">
    <div>作者</div>
    <mavon-editor :value="value" :toolbarsFlag="toolbarsFlag" :subfield="subfield" :editable="editable" :default_open="default_open" :ishljs="true"></mavon-editor>
  </div>
</template>

<script>
  import {mavonEditor} from 'mavon-editor';
  export default {
    components: {
      mavonEditor,
    },
    data() {
      return {
        value: 'ceshi',
        default_open: 'preview',
        editable: false,
        subfield: false,
        toolbarsFlag: false,
      };
    },
    created() {
    },
  };
</script>

<style lang="less">

</style>
