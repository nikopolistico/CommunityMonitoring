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
    {
      name: 'navigation',
      path: '/navigation',
      component: NavigationView,
      meta: { requiresAuth: true },
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      component: NavigationView,
      meta: { requiresAuth: true },
    },
    {
      name: 'calendar',
      path: '/calendar',
      component: NavigationView,
      meta: { requiresAuth: true },
    },
    {
      name: 'records',
      path: '/records',
      component: NavigationView,
      meta: { requiresAuth: true },
    },
    {
      name: 'settings',
      path: '/settings',
      component: NavigationView,
      meta: { requiresAuth: true },
    },
    {
      name: 'community',
      path: '/community/:barangayName',
      component: CommunityView,
      meta: { requiresAuth: true },
    },
    {
      name: 'schools',
      path: '/community/:barangayName/schools',
      component: Schools,
      meta: { requiresAuth: true },
    },
    {
      name: 'churches',
      path: '/community/:barangayName/churches',
      component: Churches,
      meta: { requiresAuth: true },
    },
    {
      name: 'establishments',
      path: '/community/:barangayName/establishments',
      component: Establishments,
      meta: { requiresAuth: true },
    },
  ],
})

router.beforeEach(async (to, from) => {
  console.log('🔒 Route Guard Check:', to.name)

  // Check if user has a valid session
  const { data, error } = await supabase.auth.getSession()
  const hasSession = !error && data?.session

  // If user is logged in and trying to access public pages (login, landing, intro)
  // Redirect them to dashboard
  if (hasSession && to.meta?.requiresAuth === false) {
    console.log('⚠️ Already logged in, redirecting to dashboard')
    return { name: 'dashboard' }
  }

  // If route is public and user is not logged in, allow access
  if (to.meta?.requiresAuth === false) {
    console.log('✅ Public route, access granted')
    return true
  }

  // For protected routes, check if user has a valid session
  if (error) {
    console.error('❌ Session check error:', error)
    return { name: 'login' }
  }

  if (!data?.session) {
    console.log('❌ No active session, redirecting to login')
    return { name: 'intropage' }
  }

  console.log('✅ Valid session, access granted')
  return true
})

export default router
