import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import ArticleEdit from '@/pages/ArticleEdit.vue'
import ArticleList from '@/pages/ArticleList.vue'
import ArticleDetail from '@/pages/ArticleDetail.vue'
import Login from '@/pages/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/article/edit',
      name: 'articleEdit',
      component: ArticleEdit
    },
    {
      path: '/article/list',
      name: 'articleList',
      component: ArticleList
    },
    {
      path: '/article/detail/:id',
      name: 'articleDetail',
      component: ArticleDetail
    },
    {
      path: '/user/login',
      name: 'login',
      component: Login
    }
  ]
})
