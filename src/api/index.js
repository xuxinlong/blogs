import axios from 'axios';

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';

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
};
