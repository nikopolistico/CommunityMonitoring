import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '@/Authentication/LandingPage.vue'
import LoginPage from '@/Authentication/LoginPage.vue'
import Dashboard from '@/Pages/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/home', name: 'home', component: Dashboard },

  ],
})

export default router
