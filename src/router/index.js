import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/Authentication/LoginPage.vue'
import Dashboard from '@/Pages/DashBoard.vue'
import CommunityView from '@/Pages/CommunityView.vue'
import LandingPage from '@/Pages/LandingPage.vue'
import Schools from '@/Components/Schools.vue'
import Churches from '@/Components/Churches.vue'
import Establishments from '@/Components/Establishments.vue'
import Calendar from '@/Pages/CalendarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'login', path: '/login', component: LoginPage },
    { name: 'dashboard', path: '/dashboard', component: Dashboard },
    { name: 'CommunityView', path: '/community/:barangayId', component: CommunityView },
    { name: 'schools', path: '/community/:barangayId/schools', component: Schools },
    { name: 'churches', path: '/community/:barangayId/churches', component: Churches },
    {
      name: 'establishments',
      path: '/community/:barangayId/establishments',
      component: Establishments,
    },
    { name: 'calendar', path: '/calendar', component: Calendar },
    { name: 'landing', path: '/', component: LandingPage },
  ],
})

export default router
