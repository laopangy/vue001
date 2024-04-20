import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    hidden:true
  },{
    path: '/',
    name: 'home',
    component: Home,
    hidden:true
  }
]

const router = new VueRouter({
  routes
})

export default router
