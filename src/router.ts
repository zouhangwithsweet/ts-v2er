import Vue from 'vue'
import Router from 'vue-router'
import Hot from './views/Hot.vue'
import Now from './views/Now.vue'
import Detail from './views/Detail.vue'

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
      path: '/now',
      component: Now,
      name: 'Now',
    },
    {
      path: '/detail/:id',
      component: Detail,
      name: 'Detail',
    },
  ],
})
