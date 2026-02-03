<template>
  <div class="flex h-screen bg-[#eeeff3]">
    <!-- Left Sidebar Navigation -->
    <aside
      :class="[
        'w-64 bg-linear-to-b from-[#002147] to-[#00397a] text-white flex flex-col shadow-2xl transition-transform duration-300 z-40',
        'lg:relative lg:translate-x-0',
        sidebarOpen
          ? 'fixed inset-y-0 left-0 translate-x-0'
          : 'fixed inset-y-0 left-0 -translate-x-full lg:translate-x-0',
      ]"
    >
      <!-- Officer Profile Section -->
      <div class="p-6 border-b border-white/10">
        <div class="flex flex-col items-center">
          <div
            class="w-24 h-24 bg-linear-to-br from-[#004595] to-[#00397a] rounded-full flex items-center justify-center mb-3 shadow-lg ring-4 ring-white/20 transition-transform hover:scale-105"
          >
            <img
              v-if="profileImageUrl"
              :src="profileImageUrl"
              :alt="displayEmail"
              class="w-full h-full object-cover object-center rounded-full"
            />
            <svg v-else class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="font-bold text-lg text-white break-all text-center">{{ displayEmail }}</h3>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 p-4">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              @click.prevent="setActiveView('dashboard')"
              :class="[
                'group flex items-center p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1',
                activeView === 'dashboard' 
                  ? 'bg-white/10 border-l-4 border-[#004595]' 
                  : 'hover:bg-white/10'
              ]"
            >
              <div
                class="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-white/20 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
              </div>
              <span class="font-semibold">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="setActiveView('calendar')"
              :class="[
                'group flex items-center p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1',
                activeView === 'calendar' 
                  ? 'bg-white/10 border-l-4 border-[#004595]' 
                  : 'hover:bg-white/10'
              ]"
            >
              <div
                class="p-2 bg-transparent rounded-lg mr-3 group-hover:bg-white/10 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="font-semibold">Calendar</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              @click.prevent="setActiveView('settings')"
              :class="[
                'group flex items-center p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1',
                activeView === 'settings' 
                  ? 'bg-white/10 border-l-4 border-[#004595]' 
                  : 'hover:bg-white/10'
              ]"
            >
              <div
                class="p-2 bg-transparent rounded-lg mr-3 group-hover:bg-white/10 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="font-semibold">Settings</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Logout Button -->
      <div class="p-4 border-t border-white/10">
        <button
          @click="handleLogout"
          class="w-full flex items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white hover:text-[#002147] text-white border-2 border-white/30 hover:border-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            />
          </svg>
          Logout
        </button>
      </div>
    </aside>

    <!-- Mobile Menu Button -->
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#004595] text-white rounded-lg shadow-lg"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          v-if="!sidebarOpen"
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
        <path
          v-else
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Overlay for mobile -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="lg:hidden fixed inset-0 bg-black/50 z-30"
    ></div>

    <!-- Main Content Area -->
    <main class="flex-1 overflow-auto">
      <!-- Dashboard View -->
      <DashBoard v-if="activeView === 'dashboard'" />
      
      <!-- Calendar View -->
      <CalendarView v-else-if="activeView === 'calendar'" />
      
      <!-- Settings View -->
      <SettingsView v-else-if="activeView === 'settings'" />
    </main>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import DashBoard from './DashBoard.vue'
import CalendarView from './CalendarView.vue'
import SettingsView from './SettingsView.vue'

const ADMIN_TABLE = 'Administrator'
const ADMIN_BUCKET = 'administrator'

const router = useRouter()
const sidebarOpen = ref(false)
const activeView = ref('dashboard')
const displayEmail = ref('Officer')
const profileImageUrl = ref('')

const normalizeEmail = (email) => (email || '').trim().toLowerCase()

const resolveProfileImageUrl = async (value) => {
  if (!value) return ''
  if (value.startsWith('http')) return `${value}${value.includes('?') ? '&' : '?'}t=${Date.now()}`

  const { data, error } = await supabase.storage
    .from(ADMIN_BUCKET)
    .createSignedUrl(value, 60 * 60)

  if (error) return ''
  const signedUrl = data?.signedUrl || ''
  return signedUrl ? `${signedUrl}${signedUrl.includes('?') ? '&' : '?'}t=${Date.now()}` : ''
}

const getLatestBucketImage = async () => {
  const { data, error } = await supabase.storage
    .from(ADMIN_BUCKET)
    .list('', { limit: 100, offset: 0, sortBy: { column: 'created_at', order: 'desc' } })

  if (error) {
    console.warn('Failed to list bucket images:', error.message)
    return ''
  }

  const files = (data || []).filter((item) => item?.name && !item?.name.endsWith('/'))
  if (files.length === 0) return ''

  const sorted = files.sort((a, b) => {
    const aTime = Date.parse(a.created_at || a.updated_at || '') || 0
    const bTime = Date.parse(b.created_at || b.updated_at || '') || 0
    return bTime - aTime
  })

  return resolveProfileImageUrl(sorted[0].name)
}

const setActiveView = (view) => {
  activeView.value = view
  sidebarOpen.value = false // Close sidebar on mobile after selection
}

const handleLogout = async () => {
  await supabase.auth.signOut()
  router.replace({ name: 'login' })
}

const loadAdministrator = async () => {
  const { data: authData } = await supabase.auth.getUser()
  const user = authData?.user

  if (!user) return

  const email = normalizeEmail(user.email)
  if (!email) return

  const { data: adminRows, error: adminError } = await supabase
    .from(ADMIN_TABLE)
    .select('email, badge_number, profile_picture')
    .ilike('email', email)
    .limit(1)

  if (adminError) {
    console.warn('Failed to load admin profile:', adminError.message)
  }

  let admin = adminRows?.[0] || null

  if (!admin) {
    const { data: fuzzyRows, error: fuzzyError } = await supabase
      .from(ADMIN_TABLE)
      .select('email, badge_number, profile_picture')
      .ilike('email', `%${email}%`)
      .limit(1)

    if (fuzzyError) {
      console.warn('Failed to load admin profile (fuzzy):', fuzzyError.message)
    }

    admin = fuzzyRows?.[0] || null
  }

  displayEmail.value = admin?.email || user.email || 'Officer'
  profileImageUrl.value =
    (await getLatestBucketImage()) ||
    'https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/administrator/admin_1769598078434.jpg'
}

onMounted(() => {
  loadAdministrator()
})
</script>