import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home'
import Posts from '@/pages/Posts'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Posts',
    name: 'Posts',
    component: Posts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
