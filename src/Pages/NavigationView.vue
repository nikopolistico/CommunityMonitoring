
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
          :disabled="isLoggingOut"
          class="w-full flex items-center justify-center p-3.5 rounded-xl bg-white hover:bg-[#f3f1ee] text-[#002147] border-2 border-white/30 hover:border-white transition-all duration-300 font-bold shadow-lg hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
        >
          <!-- Shimmer Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#004595]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          
          <!-- Loading Spinner -->
          <svg v-if="isLoggingOut" class="animate-spin w-5 h-5 mr-2.5 relative z-10 text-[#004595]" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          
          <!-- Logout Icon -->
          <svg v-else class="w-5 h-5 mr-2.5 relative z-10 transition-all duration-300 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            />
          </svg>
          
          <span class="relative z-10 tracking-wide text-sm font-bold">{{ isLoggingOut ? 'Signing Out...' : 'Sign Out' }}</span>
        </button>
      </div>
    </aside>

    <!-- Logout Success Modal -->
    <Transition name="modal-fade">
      <div v-if="showLogoutSuccess" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-[#002147]/80 via-[#00397a]/70 to-[#004595]/80 backdrop-blur-md">
        <div class="success-modal bg-gradient-to-br from-[#f3f1ee] to-white rounded-2xl shadow-2xl max-w-lg w-full p-10 transform animate-modal-slide border-2 border-[#004595]/20">
          <!-- Success Icon -->
          <div class="flex justify-center mb-8">
            <div class="success-checkmark">
              <div class="check-icon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
              </div>
            </div>
          </div>
          
          <!-- Success Message -->
          <div class="text-center space-y-5">
            <div class="space-y-2">
              <h3 class="text-3xl font-extrabold text-[#002147] tracking-tight">Successfully Signed Out</h3>
              <div class="w-24 h-1 bg-gradient-to-r from-transparent via-[#004595] to-transparent rounded-full mx-auto"></div>
            </div>
            
            <div class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-[#004595]/10 shadow-sm">
              <p class="text-[#00397a] text-lg font-semibold mb-2">
                Session Ended
              </p>
              <div class="flex items-center justify-center gap-2 text-[#00397a]/70 text-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span class="font-medium">Your session has been securely ended</span>
              </div>
            </div>
            
            <!-- Loading Bar -->
            <div class="pt-2">
              <div class="relative w-full h-3 bg-[#002147]/10 rounded-full overflow-hidden shadow-inner border border-[#004595]/20">
                <div class="loading-bar absolute top-0 left-0 h-full bg-gradient-to-r from-[#004595] via-[#00397a] to-[#004595] rounded-full shadow-lg animate-pulse"></div>
                <div class="loading-shimmer absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              </div>
              <p class="text-[#00397a]/70 text-xs mt-3 font-semibold tracking-wide">
                Redirecting to login page...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Logout Confirmation Modal -->
    <Transition name="modal-fade">
      <div v-if="showLogoutModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-[#002147]/80 via-[#00397a]/70 to-[#004595]/80 backdrop-blur-md">
        <div class="bg-gradient-to-br from-[#f3f1ee] to-white rounded-3xl shadow-2xl max-w-md w-full p-10 transform animate-modal-slide border-2 border-[#004595]/20 relative overflow-hidden">
          
          <!-- Decorative Background Elements -->
          <div class="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#004595]/10 to-transparent rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#00397a]/10 to-transparent rounded-full blur-2xl"></div>
          
          <!-- Icon -->
          <div class="flex justify-center mb-6 relative z-10">
            <div class="w-24 h-24 rounded-full bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center ring-4 ring-[#004595]/20 shadow-2xl relative overflow-hidden group">
              <!-- Icon Glow Effect -->
              <div class="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>
              <svg class="w-12 h-12 text-white relative z-10 transform transition-transform group-hover:scale-110 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
              </svg>
            </div>
          </div>
          
          <!-- Message -->
          <div class="text-center mb-8 relative z-10">
            <h3 class="text-3xl font-bold bg-gradient-to-r from-[#002147] via-[#00397a] to-[#004595] bg-clip-text text-transparent mb-3">Sign Out</h3>
            <p class="text-[#002147]/70 text-base leading-relaxed">Are you sure you want to end your session?</p>
          </div>
          
          <!-- Buttons -->
          <div class="flex gap-4 relative z-10">
            <button
              @click="showLogoutModal = false"
              :disabled="isLoggingOut"
              class="flex-1 px-6 py-3.5 bg-gradient-to-br from-white to-[#f3f1ee] hover:from-[#f3f1ee] hover:to-white text-[#002147] font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border-2 border-[#004595]/20 hover:border-[#004595]/40 relative overflow-hidden group"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-[#004595]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span class="relative z-10">Cancel</span>
            </button>
            <button
              @click="confirmLogout"
              :disabled="isLoggingOut"
              class="flex-1 px-6 py-3.5 bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] hover:from-[#00397a] hover:via-[#004595] hover:to-[#002147] text-white font-bold rounded-xl transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2.5 relative overflow-hidden group"
            >
              <!-- Button Shimmer -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <svg v-if="isLoggingOut" class="animate-spin w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span class="relative z-10">{{ isLoggingOut ? 'Signing Out...' : 'Confirm' }}</span>
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
const isLoggingOut = ref(false)
const showLogoutSuccess = ref(false)

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
  isLoggingOut.value = true
  
  try {
    console.log('🚪 Logging out...')
    
    // Add a small delay for smooth visual feedback
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('❌ Logout error:', error)
      isLoggingOut.value = false
      alert('Error logging out. Please try again.')
      return
    }
    
    console.log('✅ Logout successful')
    
    // Show success modal
    isLoggingOut.value = false
    showLogoutSuccess.value = true
    
    // Redirect to login page after showing success modal
    setTimeout(() => {
      router.push({ name: 'login' })
    }, 2000)
    
  } catch (err) {
    console.error('💥 Unexpected logout error:', err)
    isLoggingOut.value = false
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

/* Success Checkmark Animation */
.success-checkmark {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.success-checkmark .check-icon {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #4ade80;
  background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%);
}

.success-checkmark .check-icon::before {
  top: 3px;
  left: -2px;
  width: 30px;
  transform-origin: 100% 50%;
  border-radius: 100px 0 0 100px;
}

.success-checkmark .check-icon::after {
  top: 0;
  left: 30px;
  width: 60px;
  transform-origin: 0 50%;
  border-radius: 0 100px 100px 0;
  animation: rotate-circle 4.25s ease-in;
}

.success-checkmark .check-icon::before,
.success-checkmark .check-icon::after {
  content: '';
  height: 100px;
  position: absolute;
  background: linear-gradient(135deg, #f3f1ee 0%, #ffffff 100%);
  transform: rotate(-45deg);
}

.success-checkmark .check-icon .icon-line {
  height: 5px;
  background-color: #4ade80;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
}

.success-checkmark .check-icon .icon-line.line-tip {
  top: 46px;
  left: 14px;
  width: 25px;
  transform: rotate(45deg);
  animation: icon-line-tip 0.75s;
}

.success-checkmark .check-icon .icon-line.line-long {
  top: 38px;
  right: 8px;
  width: 47px;
  transform: rotate(-45deg);
  animation: icon-line-long 0.75s;
}

.success-checkmark .check-icon .icon-circle {
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(74, 222, 128, 0.5);
}

.success-checkmark .check-icon .icon-fix {
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background: linear-gradient(135deg, #f3f1ee 0%, #ffffff 100%);
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}

/* Loading Bar Animation */
@keyframes loading {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.loading-bar {
  animation: loading 2s ease-in-out forwards;
}

/* Loading Shimmer Animation */
@keyframes loading-shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.loading-shimmer {
  animation: loading-shimmer 1s ease-in-out infinite;
}
</style>
