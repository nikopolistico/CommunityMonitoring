import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/Authentication/LoginPage.vue'
import Dashboard from '@/Pages/DashBoard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'login', path: '/', component: LoginPage },
    { name: 'home', path: '/home', component: Dashboard}
  ],
})

export default router
