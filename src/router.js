import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router);

export default new Router({
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
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
    }
  ]
})
