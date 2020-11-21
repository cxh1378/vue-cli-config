import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import InitCom from '@/components/InitCom.vue'
import User from '@/components/User.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPosts from '@/components/UserPosts.vue'


const routes = [
  {
    path: "/",
    component: InitCom
  },
  {
    path: "/user/:id",
    name: 'user',
    // <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
    // router.push({ name: 'user', params: { userId: 123 }})
    // redirect: '/b',
    // redirect: { name: 'foo' },
    component: User,
    beforeEnter: (to, from, next) => {
      // ...
      next()
    },
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        path: "profile",
        component: UserProfile,
        meta: { requiresAuth: true }
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        path: "posts",
        component: UserPosts,
      },
    ],
  },
];


const router = new VueRouter({
  mode: 'history',
  routes,
  // 注意: 这个功能只在支持 history.pushState 的浏览器中可用。
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    } else {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  }
})

// router.beforeEach((to, from, next) => {
//   var isAuthenticated = true // 根据实际情况判断
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
//     else next() // 确保一定要调用 next()
//   } else {
//     next() // 确保一定要调用 next()
//   }
// })


export default router