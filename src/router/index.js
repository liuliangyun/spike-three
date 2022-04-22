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
    {
      name: '3dModel',
      path: '/3dModel',
      component: () => import('../pages/3DModel'),
    },
  ]
})

export default router
