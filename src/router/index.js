import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Article from '@/pages/ArticleEdit.vue'
import ArticleList from '@/pages/ArticleList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/edit',
      name: 'article',
      component: Article
    },
    {
      path: '/article/list',
      name: 'articleList',
      component: ArticleList
    }
  ]
})
