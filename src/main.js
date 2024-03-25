import { createApp } from 'vue'
import App from './App.vue'
import PageHome from '@/components/PageHome.vue'
// import * as VueRouter from 'vue-router'
// import { createRouter, createWebHashHistory } from 'vue-router'
// import *as VueRouter from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import PageThreadShow from '@/components/PageThreadShow.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: PageHome
  },
  {
    path: '/thread',
    name: 'ThreadShow',
    component: PageThreadShow
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const forumApp = createApp(App)
forumApp.use(router) // tells our app to use router
forumApp.mount('#app')
