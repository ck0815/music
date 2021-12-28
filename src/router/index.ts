import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: { title: '我的' },
    component: () => import('@/views/Home.vue')
  },

  {
    path: '/recommend',
    name: 'recommend',
    meta: { title: '推荐' },
    component: () => import('@/views/recommend/Index.vue'),
    // children?: RouteRecordRaw[]
    children:[
      {
        path: '/recommend/',
        name: 'recommend_frontPpage',
        meta: { title: '首页' },
        component: () => import('@/views/recommend/Index.vue')
      },
      {
        path: '/recommend/collection',
        name: 'recommend_collection',
        meta: { title: '精选集' },
        component: () => import('@/views/recommend/Index.vue')
      },
      {
        path: '/recommend/leaderboard',
        name: 'recommend_leaderboard',
        meta: { title: '排行榜' },
        component: () => import('@/views/recommend/Index.vue')
      },
      {
        path: '/recommend/radioStation',
        name: 'recommend_radioStation',
        meta: { title: '电台' },
        component: () => import('@/views/recommend/Index.vue')
      },
      {
        path: '/recommend/mv',
        name: 'recommend_mv',
        meta: { title: 'MV' },
        component: () => import('@/views/recommend/Index.vue')
      }
    ]
  },

  {
    path: '/find',
    name: 'find',
    meta: { title: '发现' },
    component: () => import('@/views/Find.vue')
  }
  // {
  //   path: '*',
  //   redirect: {
  //     name: 'Home'
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 路由拦截
 router.beforeEach((to,from)=>{
  console.log('to :>> ', to, from);
})
console.log(router);

export default router
