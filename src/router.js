import Vue from 'vue'
import Router from 'vue-router'

import myindex from "./components/common/index.vue"
import gallery from './components/gallery/gallery.vue'
import community from "./components/community/index.vue"
import fabu from './components/common/fabu.vue'
import notice from './components/notice/index.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: myindex
    },
    {
      path:'/gallery',
      name:'gallery',
      component:gallery
    },
    {
      path: '/community',
      name: 'community',
      component: community
    },
    {
      path: '/publish',
      name: 'fabu',
      component: fabu
    },
    {
      path:'/notice',
      name:'notice',
      component: notice
    }
  ],
  mode: 'history'
})
