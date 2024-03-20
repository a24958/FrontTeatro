import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import RentView from '../views/RentView.vue'
import IntranetView from '../views/IntranetView.vue'
import IPlaysView from '../views/IPlaysView.vue'
import ISesionsView from '../views/ISesionsView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PlaysView from '../views/PlaysView.vue'
import SessionsView from '../views/PlaysView.vue'

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
      component: IntranetView,
      meta:{
        requiresAuth: true,
        showHeader: false,
      }
    },
    {
      path: '/intranet/sesions',
      name: 'i-sesions',
      component: ISesionsView,
      meta:{
        requiresAuth: true,
        showHeader: false,
      }
    },
    {
      path: '/intranet/plays',
      name: 'i-plays',
      component: IPlaysView,
      meta:{
        requiresAuth: true,
        showHeader: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta:{
        showHeader: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta:{
        showHeader: true,
      }
    },
    {
      path: '/plays',
      name: 'plays',
      component: PlaysView,
      meta:{
        showHeader: true,
      }
    },
    {
      path: '/sessions',
      name: 'sessions',
      component: SessionsView,
      meta:{
        showHeader: true,
      }
    },
  ]
})

export default router
