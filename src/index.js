import Vue from 'vue'
import router from '@/router'
import App from './app'
import './styles/_reset.scss'
import vue3dLoader from 'vue-3d-loader'

import 'element-theme-dark'

Vue.use(vue3dLoader)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
