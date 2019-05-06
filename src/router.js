import Vue from 'vue'
import Router from 'vue-router'

import myindex from "./components/common/index.vue"
import fabu from './components/common/fabu.vue'
import others from './components/common/others.vue'
import upload from './components/common/upload.vue'

import gallery from './components/gallery/gallery.vue'
import search from './components/gallery/search.vue'

import community from "./components/community/index.vue"
import mycommunity from './components/community/myshequ.vue'
import recommend from './components/community/tuijian.vue'
import myfollow from './components/community/guanzhu.vue'
import mywork from './components/community/mywork.vue'
import mylike from './components/community/like.vue'
import collection from './components/community/collection.vue'
import myalbum from './components/community/album.vue'
import follows from './components/community/follows.vue'
import fans from './components/community/fans.vue'
import albumdetail from './components/community/albumdetail.vue'

import notice from './components/notice/index.vue'
import message from './components/notice/message.vue'
import inform from './components/notice/notice.vue'

import user from './components/user/user.vue'
import profile from './components/user/profile.vue'
import account from './components/user/account.vue'
import setting from './components/user/setting.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: myindex,
    },
    {
      path: '/upload',
      component: upload,
    },
    {
      path: '/gallery',
      component: gallery
    },
    {
      path:'/gallery/search',
      component:search
    },
    {
      path:'/community/others',
      component:others,
      children:[{
        path: '/',
        component: mywork,
      },
      {
        path: 'work',
        component: mywork,
      },
      {
        path: 'like',
        component: mylike,
      },
      {
        path: 'collection',
        component: collection,
      },
      {
        path: 'album',
        component: myalbum
      },
      {
        path: 'album/detail',
        component: albumdetail
      }
    ]
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
              path: 'mycollection',
              component: collection,
            },
            {
              path: 'myalbum',
              name:'myalbum',
              component: myalbum
            },
            {
              path: 'myalbum/detail',
              component: albumdetail
            },
            {
              path: 'follows',
              component: follows,
            },
            {
              path: 'fans',
              component: fans,
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
      component: notice,
      children:[
        {
          path:'/',
          component:inform
        },
        {
          path:'message',
          name:'message',
          component:message
        },
        {
          path:'inform',
          name:'inform',
          component:inform
        }
      ]
    },
    {
      path:'/user',
      component: user,
      children:[
        {
          path:'profile',
          name:'profile',
          component:profile
        },
        {
          path:'account',
          name:'account',
          component:account
        },
        {
          path:'setting',
          name:'setting',
          component:setting
        }
      ]
    }
  ],
  mode: 'history'
})