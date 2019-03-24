import Vue from 'vue'
import Router from 'vue-router'

import myindex from "./components/common/index.vue"

import gallery from './components/gallery/gallery.vue'

import community from "./components/community/index.vue"
import mycommunity from './components/community/myshequ.vue'
import recommend from './components/community/tuijian.vue'
import myfollow from './components/community/guanzhu.vue'
import mywork from './components/community/mywork.vue'
import mylike from './components/community/like.vue'
import myalbum from './components/community/album.vue'
import focus from './components/community/focus.vue'
import follows from './components/community/follows.vue'
import albumdetail from './components/community/albumdetail.vue'

import fabu from './components/common/fabu.vue'
import notice from './components/notice/index.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: myindex,
    },
    {
      path: '/gallery',
      component: gallery
    },
    {
      path: '/community',
      component: community,
      children: [{
          path: '/',
          component: recommend
        },
        {
          path: 'recommend',
          component: recommend
        },
        {
          path: 'myfollow',
          component: myfollow
        },
        {
          path: 'mycommunity',
          component: mycommunity,
          children: [{
              path: '/',
              component: mywork,
            },
            {
              path: 'mywork',
              component: mywork,
            },
            {
              path: 'mylike',
              component: mylike,
            },
            {
              path: 'myalbum',
              component: myalbum
            },
            {
              path: 'detail',
              name: 'detail',
              component: albumdetail
            },
            {
              path: 'focus',
              component: focus,
            },
            {
              path: 'follows',
              component: follows,
            }
          ]
        },

      ]
    },
    {
      path: '/publish',
      component: fabu
    },
    {
      path: '/notice',
      component: notice
    }

  ],
  mode: 'history'
})