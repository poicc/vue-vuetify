import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Github from '../views/github/Github.vue'
import Following from '../views/github/Following.vue'
import Follows from '../views/github/Followers.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'Github',
    component: Github
  },
  {
    path: '/following',
    name: 'Following',
    component: Following
  },
  {
    path: '/follows',
    name: 'Follows',
    component: Follows
  },
  {
    path: '/todo',
    name: 'TodoList',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoList.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
