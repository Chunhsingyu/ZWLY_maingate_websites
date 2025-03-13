import { createRouter, createWebHistory } from 'vue-router';
import TemplatePage from '@/views/TemplatePage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/template',
      component: TemplatePage
    },
    
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
});

export default router;