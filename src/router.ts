import Vue from 'vue'
import Router from 'vue-router'
const Hot = () => import('./views/Hot.vue')
const Now = () => import('./views/Now.vue')
const Nodes = () => import('./views/Nodes.vue')
const Detail = () => import('./views/Detail.vue')
const Node = () => import('./views/Node.vue')

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
      path: '/nodes',
      component: Nodes,
      name: 'Nodes',
      children: [
        {
          path: ':node',
          name: 'Node',
          component: Node,
        },
      ],
    },
    {
      path: '/detail/:id',
      component: Detail,
      name: 'Detail',
    },
  ],
})
