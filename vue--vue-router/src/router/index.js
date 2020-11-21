import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


// 路由懒加载
// const Foo = () => import('./Foo.vue')
// 把组件按组分块
// const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
// const Bar = () => import(/* webpackChunkName: "group-foo" */ './Bar.vue')
// const Baz = () => import(/* webpackChunkName: "group-foo" */ './Baz.vue')

const InitCom = () => import(/* webpackChunkName: "group-init" */ '@/components/InitCom.vue')
const User = () => import(/* webpackChunkName: "group-user" */ '@/components/User.vue')
const UserProfile = () => import(/* webpackChunkName: "group-user" */ '@/components/UserProfile.vue')
const UserPosts = () => import(/* webpackChunkName: "group-user" */ '@/components/UserPosts.vue')


// const initCom = {
//   template: `
//     <div class="initCom">
//       <h2>initCom</h2>
//     </div>
//   `
// }
// const User = {
//   template: `
//     <div class="user">
//       <h2>User {{ $route.params.id }}</h2>
//       <router-view></router-view>
//     </div>
//   `
// }
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

// 命名试图

// 有时候想同时 (同级) 展示多个视图，而不是嵌套展示，例如创建一个布局，有 sidebar (侧导航) 和 main (主内容) 两个视图，
// 这个时候命名视图就派上用场了。你可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。
// 如果 router-view 没有设置名字，那么默认为 default。

// <router-view class="view one"></router-view>
// <router-view class="view two" name="a"></router-view>
// <router-view class="view three" name="b"></router-view>

// const router = new VueRouter({
//   routes: [
//     {
//       path: '/',
//       components: {
//         default: Foo,
//         a: Bar,
//         b: Baz
//       }
//     }
//   ]
// })




// 在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。

// 使用 props 将组件和路由解耦：

// 与 $route 的耦合
// const User = {
//   template: '<div>User {{ $route.params.id }}</div>'
// }
// const router = new VueRouter({
//   routes: [
//     { path: '/user/:id', component: User }
//   ]
// })

// 通过 props 解耦
// 布尔模式
// const User = {
//   props: ['id'],
//   template: '<div>User {{ id }}</div>'
// }
// const router = new VueRouter({
//   routes: [
//     { path: '/user/:id', component: User, props: true },

//     // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
//     {
//       path: '/user/:id',
//       components: { default: User, sidebar: Sidebar },
//       props: { default: true, sidebar: false }
//     }
//   ]
// })
// 对象模式
// const router = new VueRouter({
//   routes: [
//     { path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }
//   ]
// })
// 函数模式
// const router = new VueRouter({
//   routes: [
//     { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
//   ]
// })
// URL /search?q=vue 会将 {query: 'vue'} 作为属性传递给 SearchUser 组件。



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

router.beforeEach((to, from, next) => {
  var isAuthenticated = true // 根据实际情况判断
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next() // 确保一定要调用 next()
  } else {
    next() // 确保一定要调用 next()
  }
})

// 组件内的守卫
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}



// 完整的导航解析流程
// 1.导航被触发。
// 2.在失活的组件里调用 beforeRouteLeave 守卫。
// 3.调用全局的 beforeEach 守卫。
// 4.在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
// 5.在路由配置里调用 beforeEnter。
// 6.解析异步路由组件。
// 7.在被激活的组件里调用 beforeRouteEnter。
// 8.调用全局的 beforeResolve 守卫 (2.5+)。
// 9.导航被确认。
// 10.调用全局的 afterEach 钩子。
// 11.触发 DOM 更新。
// 12.用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。


export default router