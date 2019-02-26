import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueI18n from 'vue-i18n'
import './assets/js/responsive'
import 'modern-normalize/modern-normalize.css'

// 引入Icon图库
import 'vue-awesome/icons'

import Loading from '@/components/loading'
const Icon = require('vue-awesome/components/Icon').default
Vue.component('icon', Icon)
Vue.use(Loading)
// Vue.use(VueI18n)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
