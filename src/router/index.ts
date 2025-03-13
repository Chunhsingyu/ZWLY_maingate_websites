// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/LandingPage.vue'),
      meta: { transition: 'fade' }
    },
    {
      path: '/dashboard',
      component: () => import('@/views/Dashboard.vue'),
      children: [
        {
          path: 'analytics',
          component: () => import('@/components/AnalyticsPanel.vue')
        }
      ]
    }
  ]
})