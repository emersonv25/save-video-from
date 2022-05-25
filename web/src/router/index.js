import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Termos from '../views/Termos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'Home',
    component: Home
  },
  {
    path: '/termos',
    name: 'Termos',
    component: Termos
  },
]

const router = new VueRouter({
  routes,
})

export default router
