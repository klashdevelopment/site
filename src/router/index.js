import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../pageview/Homepage.vue'
import Products from '../pageview/Products.vue'
import NotFound from '../pageview/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})

export default router