import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'drawingCube',
      path: '/',
      component: () => import('../pages/drawingCube'),
    },
    {
      name: 'drawingLines',
      path: '/lines',
      component: () => import('../pages/drawingLines'),
    },
  ]
})

export default router
