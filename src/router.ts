import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import test from './views/test'
import Hot from './views/Hot.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/hot',
    },
    {
      path: '/hot',
      component: Hot,
      name: 'Hot',
    },
    {
      path: '/test',
      component: test,
      name: 'Test',
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
})
