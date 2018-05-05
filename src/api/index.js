import axios from 'axios';
import { getCookie } from '../lib/cookie';

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers['x-access-token'] = getCookie('blog_token');

const http = function (url, type, params) {
  return axios[type.toLocaleLowerCase()](url, params ? params : {});
};

export default {
  getArticle(params) {
    return http('/blog/article/list', 'get', params);
  },
  addArticle(params) {
    return http('/blog/article/add', 'post', params);
  },
  updateArticle(params) {
    return http('/blog/article/update', 'post', params);
  },
  getArticleDetail(params) {
    return http('/blog/article/detail', 'post', params);
  },
  deleteArticle(params) {
    return http('/blog/article/delete', 'post', params);
  },
  login(params) {
    return http('/user/user/login', 'post', params);
  }
};
