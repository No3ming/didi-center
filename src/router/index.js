import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '../views/NotFound.vue'
import Center from '../views/Center.vue'

Vue.use(Router)

const routes = [
  {
    path: '/center',
    name: 'center',
    component: Center
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
