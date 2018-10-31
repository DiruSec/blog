import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/blog/',
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  },
    {
      path: '/page/:page',
      name: 'page',
      component: Index
    },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/About.vue')
  },
    {
      path: '/article/:path',
      name: 'articleview',
      component: () => import ('./views/Article.vue')
    },
    {
      path: '/tag',
      name: 'taglist',
      component: () => import ('./views/TagList.vue')
    },
    {
      path: '/tag/:tagname',
      name: 'tagname',
      component: () => import ('./views/Tag.vue')
    },
    {
      path: '/archive',
      name: 'archive',
      component: () => import ('./views/Archive.vue')
    },
    {
      path: '*',
      name: 'notfound',
      component: () => import ('./views/NotFound.vue')
    }
  ]
})
