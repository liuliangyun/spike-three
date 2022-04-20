import Vue from 'vue'
import router from './router.js'
import App from './app.vue'
import './styles/_reset.scss'


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
