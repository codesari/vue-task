import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Todos from '../views/Todos.vue'
import Posts from '../views/Posts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/todos',
      name: 'todos',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Todos
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts
    }
  ]
})

export default router
