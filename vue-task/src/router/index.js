import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Todos from '../views/Todos.vue'
import Posts from '../views/Posts.vue'
import Albums from '../views/Albums.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/todos/:id',
      name: 'todos-detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Todos
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/posts/:id',
      name: 'posts-detail',
      component: Posts
    },
    {
      path: '/albums/:id',
      name: 'albums-detail',
      component: Albums
    }
  ]
})

export default router
