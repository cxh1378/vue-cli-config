import Vue from 'vue'
import VueRouter from 'vue-router'
import user from '@/views/user'
import test01 from '@/views/test01'
import test02 from '@/views/test02'
import test03 from '@/views/test03'
import test04 from '@/views/test04'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    component: user
  },
  {
    path: '/test01',
    component: test01
  },
  {
    path: '/test02',
    component: test02
  },
  {
    path: '/test03',
    component: test03
  },
  {
    path: '/test04',
    component: test04
  }
]

const router = new VueRouter({
  routes
})

export default router;