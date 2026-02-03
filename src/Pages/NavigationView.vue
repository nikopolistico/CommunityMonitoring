
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
            class="w-30 h-30 bg-linear-to-br from-[#004595] to-[#00397a] rounded-full flex items-center justify-center mb-3 shadow-lg ring-4 ring-white/20 transition-transform hover:scale-105 overflow-hidden"
          >
            <img
              v-if="adminProfile.profile_picture"
              :src="adminProfile.profile_picture"
              alt="Admin Profile"
              class="w-full h-full object-cover"
            />
            <svg v-else class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="font-bold text-xl text-white">{{ adminProfile.fullname || 'Loading...' }}</h3>
          <p class="text-[#e0e7ff] text-sm mt-1 font-medium">Badge #{{ adminProfile.badge_number || 'N/A' }}</p>
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
              @click.prevent="setActiveView('records')"
              :class="[
                'group flex items-center p-3 rounded-xl transition-all duration-300 transform hover:translate-x-1',
                activeView === 'records' 
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
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="font-semibold">Records</span>
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
          @click="showLogoutModal = true"
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

    <!-- Logout Confirmation Modal -->
    <Transition name="modal-fade">
      <div v-if="showLogoutModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-modal-slide">
          <!-- Icon -->
          <div class="flex justify-center mb-4">
            <div class="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
              <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
            </div>
          </div>
          
          <!-- Message -->
          <div class="text-center mb-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Confirm Logout</h3>
            <p class="text-gray-600">Are you sure you want to log out?</p>
          </div>
          
          <!-- Buttons -->
          <div class="flex gap-3">
            <button
              @click="showLogoutModal = false"
              class="flex-1 px-4 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-xl transition-all duration-300"
            >
              Cancel
            </button>
            <button
              @click="confirmLogout"
              class="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Transition>

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
      
      <!-- Records View -->
      <RecordsView v-else-if="activeView === 'records'" />
      
      <!-- Settings View -->
      <SettingsView v-else-if="activeView === 'settings'" />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import DashBoard from './DashBoard.vue'
import CalendarView from './CalendarView.vue'
import RecordsView from './RecordsView.vue'
import SettingsView from './SettingsView.vue'

const router = useRouter()
const sidebarOpen = ref(false)
const activeView = ref('dashboard')
const showLogoutModal = ref(false)

const adminProfile = ref({
  fullname: '',
  profile_picture: '',
  badge_number: ''
})

// Fetch admin profile data
const fetchAdminProfile = async () => {
  try {
    const { data, error } = await supabase
      .from('Administrator')
      .select('fullname, profile_picture, badge_number')
      .single()

    if (error) throw error

    if (data) {
      adminProfile.value = {
        fullname: data.fullname || '',
        profile_picture: data.profile_picture || '',
        badge_number: data.badge_number || ''
      }
    }
  } catch (error) {
    console.error('Error fetching admin profile:', error)
  }
}

const setActiveView = (view) => {
  activeView.value = view
  sidebarOpen.value = false // Close sidebar on mobile after selection
}

const confirmLogout = async () => {
  showLogoutModal.value = false
  
  try {
    console.log('🚪 Logging out...')
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('❌ Logout error:', error)
      alert('Error logging out. Please try again.')
      return
    }
    
    console.log('✅ Logout successful')
    // Redirect to login page
    router.push({ name: 'login' })
  } catch (err) {
    console.error('💥 Unexpected logout error:', err)
    alert('An unexpected error occurred. Please try again.')
  }
}

onMounted(() => {
  fetchAdminProfile()
})
</script>

<style scoped>
/* Modal Fade Animation */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Modal Slide Animation */
@keyframes modal-slide {
  from {
    transform: scale(0.95) translateY(-20px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

.animate-modal-slide {
  animation: modal-slide 0.3s ease-out;
}
</style>
