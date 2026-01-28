import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/Authentication/LoginPage.vue'
import NavigationView from '@/Pages/NavigationView.vue'
import CommunityView from '@/Pages/CommunityView.vue'
import LandingPage from '@/Authentication/LandingPage.vue'
import Intropage from '@/Authentication/Intropage.vue'

import Schools from '@/Components/Schools.vue'
import Churches from '@/Components/Churches.vue'
import Establishments from '@/Components/Establishments.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'login', path: '/login', component: LoginPage },
    { name: 'navigation', path: '/navigation', component: NavigationView },
    { name: 'dashboard', path: '/dashboard', component: NavigationView },
    { name: 'calendar', path: '/calendar', component: NavigationView },
    { name: 'settings', path: '/settings', component: NavigationView },
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
  ],
})

export default router