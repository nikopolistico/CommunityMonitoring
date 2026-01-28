import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '@/lib/supabase'
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
    { name: 'login', path: '/login', component: LoginPage, meta: { requiresAuth: false } },
    { name: 'landing', path: '/landing', component: LandingPage, meta: { requiresAuth: false } },
    { name: 'intropage', path: '/', component: Intropage, meta: { requiresAuth: false } },
    { name: 'navigation', path: '/navigation', component: NavigationView, meta: { requiresAuth: true } },
    { name: 'dashboard', path: '/dashboard', component: NavigationView, meta: { requiresAuth: true } },
    { name: 'calendar', path: '/calendar', component: NavigationView, meta: { requiresAuth: true } },
    { name: 'settings', path: '/settings', component: NavigationView, meta: { requiresAuth: true } },
    { name: 'CommunityView', path: '/community/:barangayName', component: CommunityView, meta: { requiresAuth: true } },
    { name: 'schools', path: '/community/:barangayName/schools', component: Schools, meta: { requiresAuth: true } },
    { name: 'churches', path: '/community/:barangayName/churches', component: Churches, meta: { requiresAuth: true } },
    {
      name: 'establishments',
      path: '/community/:barangayName/establishments',
      component: Establishments,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to) => {
  if (to.meta?.requiresAuth === false) return true

  const { data, error } = await supabase.auth.getSession()
  if (error || !data?.session) {
    return { name: 'login' }
  }

  return true
})

export default router