import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('../pages/Home'),
    },
    {
      name: 'drawingCube',
      path: '/cube',
      component: () => import('../pages/drawingCube'),
    },
    {
      name: 'drawingLines',
      path: '/lines',
      component: () => import('../pages/drawingLines'),
    },
    {
      name: '3dModel',
      path: '/3d-model',
      component: () => import('../pages/3DModel'),
    },
    {
      name: 'vue3dModel',
      path: '/vue-3d-model',
      component: () => import('../pages/vue3DModel'),
    },
    {
      name: 'vue3dLoader',
      path: '/vue-3d-loader',
      component: () => import('../pages/vue3DLoader'),
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: () => import('../pages/Dashboard'),
      redirect: '/dashboard/factory',
      children: [
        {
          path: 'factory',
          component: () => import('../pages/3DModel'),
        },
      ]
    },
  ]
})

export default router
