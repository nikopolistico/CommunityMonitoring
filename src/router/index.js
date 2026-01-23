import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/Authentication/LoginPage.vue'
import Dashboard from '@/Pages/DashBoard.vue'
import CommunityView from '@/Pages/CommunityView.vue'
import LandingPage from '@/Pages/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'login', path: '/login', component: LoginPage },
    { name: 'dashboard', path: '/dashboard', component: Dashboard },
    { name: 'CommunityView', path: '/community/:barangayId', component: CommunityView },
    { name: 'landing', path: '/', component: LandingPage}
  ],
})

export default router