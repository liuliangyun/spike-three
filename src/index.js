import Vue from 'vue'
import router from '@/router'
import App from './app'
import './styles/_reset.scss'


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
