import axios from 'axios';
import { getCookie } from '../lib/cookie';

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['x-access-token'] = getCookie('blog_token');

const http = function (url, type, params) {
  return axios[type.toLocaleLowerCase()](url, params ? params : {});
};

export default {
  getArticle(params) {
    var parmStr = params.type ? '?type=' + params.type : '';
    // 判断是否登录，请求不同接口
    if (getCookie('blog_token')) {
      return http('/blog/article/list' + parmStr, 'get');
    } else {
      return http('/blog/article/list_public' + parmStr, 'get');
    }
  },
  addArticle(params) {
    return http('/blog/article/add', 'post', params);
  },
  updateArticle(params) {
    return http('/blog/article/update', 'post', params);
  },
  getArticleDetail(params) {
    // 判断是否登录，请求不同接口
    if (getCookie('blog_token')) {
      return http('/blog/article/detail', 'post', params);
    } else {
      return http('/blog/article/detail_public', 'post', params);
    }
  },
  deleteArticle(params) {
    return http('/blog/article/delete', 'post', params);
  },
  login(params) {
    return http('/user/user/login', 'post', params);
  },
  getUserInfo() {
    return http('/user/user/info', 'get');
  }
};
