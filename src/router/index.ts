import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import RentView from '../views/RentView.vue'
import IntranteView from '../views/IntranetView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta:{
        showHeader: true,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta:{
        showHeader: true,
      }
    },
    {
      path: '/rent',
      name: 'rent',
      component: RentView,
      meta:{
        showHeader: true,
      }
    },
    {
      path: '/intranet',
      name: 'intranet',
      component: IntranteView,
      meta:{
        showHeader: false,
      }
    },
  ]
})

export default router
