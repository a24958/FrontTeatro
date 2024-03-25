import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import RentView from '../views/RentView.vue'
import IntranteView from '../views/IntranetView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import PlaysView from '../views/PlaysView.vue'
import SessionsView from '../views/SessionView.vue'
import SeatSelectorView from '../views/SeatSelectorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        showHeader: true,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        showHeader: true,
      }
    },
    {
      path: '/rent',
      name: 'rent',
      component: RentView,
      meta: {
        showHeader: true,
      }
    },
    {
      path: '/intranet',
      name: 'intranet',
      component: IntranteView,
      meta: {
        requiresAuth: true,
        showHeader: false,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        showHeader: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        showHeader: true,
      }
    },
    {
      path: '/plays',
      name: 'plays',
      component: PlaysView,
      props: true,
      meta: {
        showHeader: true,
      }
    },
    {
      path: '/play/:obraId',
      name: 'play',
      component: SessionsView,
      props: true,
      meta: {
        showHeader: true,
        requiresFetch: true
      }
    },
    {
      path: '/session/:sesionId',
      name: 'session',
      component: SeatSelectorView,
      props: true,
      meta: {
        showHeader: true,
      }
    },
  ]
})

export default router
