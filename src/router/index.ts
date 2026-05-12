import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue'),
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user/index.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/user/login.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/product/index.vue'),
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('../views/order/index.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('../views/order/checkout.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/pages/contact.vue'),
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../views/pages/faq.vue'),
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: () => import('../views/pages/wishlist.vue'),
    }
  ],
})

export default router
