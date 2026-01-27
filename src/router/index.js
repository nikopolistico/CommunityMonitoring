import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/Authentication/LoginPage.vue'
import Dashboard from '@/Pages/DashBoard.vue'
import CommunityView from '@/Pages/CommunityView.vue'
import LandingPage from '@/Authentication/LandingPage.vue'
import Calendar from '@/Pages/CalendarView.vue'
import Intropage from '@/Authentication/Intropage.vue'

import Schools from '@/Components/Schools.vue'
import Churches from '@/Components/Churches.vue'
import Establishments from '@/Components/Establishments.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'login', path: '/login', component: LoginPage },
    { name: 'dashboard', path: '/dashboard', component: Dashboard },
    { name: 'CommunityView', path: '/community/:barangayName', component: CommunityView },
    { name: 'schools', path: '/community/:barangayName/schools', component: Schools },
    { name: 'churches', path: '/community/:barangayName/churches', component: Churches },
    {
      name: 'establishments',
      path: '/community/:barangayName/establishments',
      component: Establishments,
    },
    { name: 'landing', path: '/landing', component: LandingPage },
    { name: 'intropage', path: '/', component: Intropage },
    { name: 'calendar', path: '/calendar', component: Calendar },
  ],
})

export default router
