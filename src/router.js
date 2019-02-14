import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
var Home = () => import('@/views/Home')
var Page1 = () => import('@/views/Page1')
var Page2 = () => import('@/views/Page2')
var Page3 = () => import('@/views/Page3')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'home/page1',
          components: {
            right: Page1,
          }
        }, {
          path: 'home/page2',
          components: {
            right: Page2,
          }
        }, {
          path: 'home/page3',
          components: {
            right: Page3,
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
