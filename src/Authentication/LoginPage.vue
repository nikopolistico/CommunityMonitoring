<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#002147] to-[#00397a]">
    <!-- Success Modal -->
    <Transition name="modal-fade">
      <div v-if="showSuccessModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div class="success-modal bg-linear-to-br from-[#f3f1ee] to-white rounded-2xl shadow-2xl max-w-lg w-full p-10 transform animate-modal-slide border-2 border-[#004595]/20">
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
              <h3 class="text-3xl font-extrabold text-[#002147] tracking-tight">Welcome Back!</h3>
              <div class="w-24 h-1 bg-linear-to-r from-transparent via-[#004595] to-transparent rounded-full mx-auto"></div>
            </div>
            
            <div class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-[#004595]/10 shadow-sm">
              <p class="text-[#00397a] text-lg font-semibold mb-2">
                Police Officer Authentication
              </p>
              <div class="flex items-center justify-center gap-2 text-[#00397a]/70 text-sm">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span class="font-medium">{{ userEmail }}</span>
              </div>
            </div>
            
            <!-- Loading Bar -->
            <div class="pt-2">
              <div class="relative w-full h-2.5 bg-[#002147]/10 rounded-full overflow-hidden shadow-inner">
                <div class="loading-bar absolute top-0 left-0 h-full bg-linear-to-r from-[#004595] via-[#00397a] to-[#004595] rounded-full shadow-lg"></div>
              </div>
              <p class="text-[#00397a]/70 text-xs mt-3 font-semibold tracking-wide">
                Accessing 28 Barangays Monitoring Dashboard...
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Error Modal -->
    <Transition name="modal-fade">
      <div v-if="showErrorModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div class="error-modal bg-linear-to-br from-[#f3f1ee] to-white rounded-2xl shadow-2xl max-w-lg w-full p-10 transform animate-modal-slide border-2 border-red-500/20">
          <!-- Error Icon -->
          <div class="flex justify-center mb-8">
            <div class="error-icon-wrapper">
              <div class="relative">
                <div class="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center border-4 border-red-500 shadow-lg">
                  <svg class="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Error Message -->
          <div class="text-center space-y-5">
            <div class="space-y-2">
              <h3 class="text-3xl font-extrabold text-red-600 tracking-tight">Access Denied</h3>
              <div class="w-24 h-1 bg-linear-to-r from-transparent via-red-500 to-transparent rounded-full mx-auto"></div>
            </div>
            
            <div class="bg-white/70 backdrop-blur-sm rounded-xl p-5 border border-red-500/10 shadow-sm">
              <p class="text-[#002147] font-medium leading-relaxed">{{ errorMessage }}</p>
            </div>
            
            <!-- Close Button -->
            <button
              @click="closeErrorModal"
              class="mt-4 w-full bg-linear-to-r from-red-500 to-red-600 text-white py-3.5 px-6 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 tracking-wide"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
              Try Again
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Large Static Police Badge Star Background - BOTTOM POSITIONED -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 opacity-[0.08] pointer-events-none">
      <svg class="w-[1400px] h-[1400px]" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    </div>

    <!-- Police Siren Light Animation -->
    <div class="absolute top-[20%] right-[10%] w-[100px] h-[100px] rounded-full blur-[40px] opacity-0 animate-siren-red"></div>
    <div class="absolute bottom-[25%] left-[12%] w-[100px] h-[100px] rounded-full blur-[40px] opacity-0 animate-siren-blue"></div>

    <!-- Animated Grid Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="grid-pattern"></div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 w-full max-w-5xl mx-auto px-4 flex items-center justify-center lg:justify-between gap-8">
      
      <!-- Left Side - Branding Section -->
      <div class="hidden lg:flex flex-col flex-1 max-w-md animate-fade-in-left">
        <div class="space-y-6">
          <!-- Triple Logo Display -->
          <div class="flex items-center justify-start gap-16 mb-4 mt-[-6rem]">
            <div class="relative inline-block">
              <img :src="bcpoLogo" alt="BCPO Logo" class="w-40 h-40 object-contain" />
            </div>
            
            <div class="relative inline-block">
              <img :src="pnpLogo" alt="PNP Logo" class="w-28 h-28 object-contain" />
            </div>
            
            <div class="relative inline-block -ml-8">
              <img :src="pnpbutuanLogo" alt="PNP Butuan Logo" class="w-80 h-80 object-contain" style="margin-left: -1rem;" />
            </div>
          </div>
          
          <!-- Welcome Text with Enhanced Typography -->
          <div class="space-y-4 mt-[-5rem]">
            <div class="space-y-1">
              <p class="text-[#f3f1ee]/90 text-sm font-semibold tracking-wider uppercase">Welcome to</p>
              <h1 class="text-4xl font-extrabold text-white leading-tight tracking-tight">
                Community
                <span class="block text-transparent bg-clip-text bg-linear-to-r from-[#f3f1ee] via-white to-[#f3f1ee] animate-linear">
                  Monitoring System
                </span>
              </h1>
            </div>
            <div class="w-16 h-1 bg-linear-to-r from-[#f3f1ee] to-transparent rounded-full"></div>
            <p class="text-base text-[#f3f1ee]/80 leading-relaxed font-light">
              Secure access to the <span class="font-semibold text-white">28 Barangays</span> monitoring dashboard. Track, manage, and protect your community.
            </p>
          </div>

          <!-- Feature Pills -->
          <div class="flex flex-wrap gap-2 mt-4">
            <div class="feature-pill">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Secure Access</span>
            </div>
            <div class="feature-pill">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span>Community Data</span>
            </div>
            <div class="feature-pill">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
              </svg>
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Login Card -->
      <div class="w-full max-w-md animate-fade-in-right">
        <div class="login-card bg-white/95 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-200/60 relative overflow-hidden">
          
          <!-- Elegant Top Border Accent -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#004595]/40 via-[#00397a]/30 to-[#004595]/40"></div>
          
          <!-- Subtle Corner Decorations -->
          <div class="absolute top-0 left-0 w-16 h-16 bg-linear-to-br from-gray-100/80 to-transparent rounded-br-3xl"></div>
          <div class="absolute bottom-0 right-0 w-20 h-20 bg-linear-to-tl from-gray-100/60 to-transparent rounded-tl-3xl"></div>
          
          <!-- Mobile Logo -->
          <div class="lg:hidden text-center mb-5 relative z-10">
            <div class="flex items-center justify-center gap-5 mb-4">
              <div class="transform hover:scale-110 transition-transform duration-300">
                <img :src="bcpoLogo" alt="BCPO Logo" class="w-24 h-24 object-contain drop-shadow-lg" />
              </div>
              
              <div class="w-px h-20 bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
              
              <div class="transform hover:scale-110 transition-transform duration-300">
                <img :src="pnpLogo" alt="PNP Logo" class="w-24 h-24 object-contain drop-shadow-lg" />
              </div>
              
              <div class="w-px h-20 bg-linear-to-b from-transparent via-gray-300 to-transparent"></div>
              
              <div class="transform hover:scale-110 transition-transform duration-300">
                <img :src="pnpbutuanLogo" alt="PNP Butuan Logo" class="w-24 h-24 object-contain drop-shadow-lg" />
              </div>
            </div>
            
            <div class="space-y-1.5">
              <h2 class="text-xl font-bold text-gray-800 tracking-tight">Officer Login</h2>
              <div class="w-12 h-0.5 bg-linear-to-r from-transparent via-gray-400 to-transparent rounded-full mx-auto"></div>
              <p class="text-gray-600 text-xs font-medium">Community Monitoring System</p>
            </div>
          </div>

          <!-- Desktop Header -->
          <div class="hidden lg:block mb-5 relative z-10">
            <div class="flex items-center gap-3 mb-2">
              <div class="w-10 h-10 rounded-xl bg-linear-to-br from-[#002147] to-[#003875] flex items-center justify-center shadow-md transform hover:scale-105 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-gray-800 tracking-tight">Officer Login</h2>
                <div class="w-16 h-0.5 bg-linear-to-r from-[#004595]/60 via-gray-400 to-transparent rounded-full"></div>
              </div>
            </div>
            <p class="text-gray-600 font-medium text-xs">Enter your credentials to access the dashboard</p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-4 relative z-10">
            
            <!-- Email Field -->
            <div class="form-group">
              <label class="block text-gray-700 font-semibold mb-1.5 text-xs tracking-wide flex items-center gap-1.5" for="email">
                <svg class="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Address
              </label>
              <div class="relative input-wrapper group">
                <input
                  v-model="email"
                  id="email"
                  type="email"
                  required
                  placeholder="officer@bcpo.gov.ph"
                  class="input-field w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004595]/60 focus:ring-2 focus:ring-[#004595]/10 bg-white text-gray-800 placeholder-gray-400 transition-all duration-300 text-sm font-medium hover:border-gray-400"
                />
                <div class="absolute inset-0 rounded-lg bg-linear-to-r from-[#004595]/3 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            <!-- Password Field -->
            <div class="form-group">
              <label class="block text-gray-700 font-semibold mb-1.5 text-xs tracking-wide flex items-center gap-1.5" for="password">
                <svg class="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
                Password
              </label>
              <div class="relative input-wrapper group">
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  required
                  placeholder="Enter your password"
                  class="input-field w-full px-3.5 py-2.5 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#004595]/60 focus:ring-2 focus:ring-[#004595]/10 bg-white text-gray-800 placeholder-gray-400 transition-all duration-300 text-sm font-medium hover:border-gray-400"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#004595]/70 transition-all z-10 hover:scale-110 p-0.5 rounded-lg hover:bg-gray-100"
                >
                  <svg v-if="showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
                  </svg>
                </button>
                <div class="absolute inset-0 rounded-lg bg-linear-to-r from-[#004595]/3 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="flex items-center justify-between text-xs">
              <label class="flex items-center cursor-pointer group">
                <input 
                  v-model="rememberMe"
                  type="checkbox" 
                  class="w-3.5 h-3.5 rounded border border-gray-300 text-[#004595]/70 focus:ring-2 focus:ring-[#004595]/15 cursor-pointer transition-all">
                <span class="ml-2 text-gray-600 group-hover:text-gray-800 transition-colors font-medium">
                  Remember me
                </span>
              </label>
              <a href="#" class="text-[#004595]/80 hover:text-[#004595] font-semibold transition-colors hover:underline">
                Forgot password?
              </a>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="login-button w-full bg-linear-to-r from-[#002147] via-[#003875] to-[#002147] text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group tracking-wide text-sm mt-1"
            >
              <div class="absolute inset-0 bg-linear-to-r from-[#003875] via-[#002147] to-[#003875] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span class="relative z-10 flex items-center justify-center gap-2">
                <svg v-if="isLoading" class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <svg v-if="!isLoading" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
                <span class="font-bold">{{ isLoading ? 'Logging in...' : 'Access Dashboard' }}</span>
                <svg v-if="!isLoading" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
              <div class="button-shine"></div>
            </button>
          </form>

          <!-- Footer -->
          <div class="mt-5 pt-4 border-t border-gray-200 relative z-10">
            <div class="flex items-center justify-center gap-2 text-[10px] text-gray-600 font-semibold bg-gray-50 py-2 rounded-lg border border-gray-200">
              <svg class="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span>Secure Police Officer Access</span>
            </div>
            <p class="text-center text-[9px] text-gray-500 mt-2 font-medium tracking-wide">BCPO Community Monitoring System © {{ new Date().getFullYear() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import bcpoLogo from '@/assets/BCPO 1 LOGO.png'
import pnpLogo from '@/assets/pnplogo.png'
import pnpbutuanLogo from '@/assets/pnpbutuan.png'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)
const isLoading = ref(false)
const showSuccessModal = ref(false)
const showErrorModal = ref(false)
const errorMessage = ref('')
const userEmail = ref('')

// Load saved credentials on component mount
onMounted(() => {
  console.log('🔍 Checking for saved credentials...')
  const savedEmail = localStorage.getItem('rememberedEmail')
  const savedPassword = localStorage.getItem('rememberedPassword')
  
  console.log('📧 Saved Email:', savedEmail)
  console.log('🔑 Saved Password exists:', !!savedPassword)
  
  if (savedEmail && savedPassword) {
    email.value = savedEmail
    password.value = savedPassword
    rememberMe.value = true
    console.log('✅ Credentials loaded and form filled')
  } else {
    console.log('❌ No saved credentials found')
  }
})

async function createProfile() {
  // 1. Kunin muna ang kasalukuyang user
  const { data: { user } } = await supabase.auth.getUser()

  console.log('👤 Current User:', user)

}

createProfile()

function closeErrorModal() {
  showErrorModal.value = false
  errorMessage.value = ''
}

async function handleLogin() {
  if (!email.value || !password.value) {
    alert('Please fill in all fields.')
    return
  }
  
  console.log('🔐 Starting login process...')
  console.log('📧 Email:', email.value)
  console.log('🔌 Supabase URL:', import.meta.env.VITE_SUPABASE_URL)
  console.log('🔑 Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)
  
  isLoading.value = true
  
  try {
    // Attempt to sign in with Supabase
    console.log('📤 Sending login request to Supabase...')
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    
    console.log('📥 Response received:', { data, error })
    
    // CRITICAL: Check if there was an error during login
    if (error) {
      console.error('❌ Login error:', error)
      console.error('Error message:', error.message)
      console.error('Error status:', error.status)
      isLoading.value = false
      
      // Show error modal instead of alert
      if (error.message.includes('Invalid login credentials')) {
        errorMessage.value = 'Invalid email or password. Please check your credentials and try again.'
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage.value = 'Please verify your email address before logging in.'
      } else if (error.message.includes('User not found')) {
        errorMessage.value = 'No account exists with this email address. Please contact your administrator.'
      } else {
        errorMessage.value = error.message
      }
      
      showErrorModal.value = true
      return
    }
    
    // CRITICAL: Verify user data exists
    if (!data || !data.user) {
      console.error('❌ No user data returned')
      errorMessage.value = 'No account exists with this email address. Please contact your administrator.'
      showErrorModal.value = true
      isLoading.value = false
      return
    }
    
    console.log('✅ User authenticated successfully!')
    console.log('👤 User:', data.user)
    
    // Handle Remember Me functionality
    console.log('💾 Remember Me Status:', rememberMe.value)
    if (rememberMe.value) {
      // Save credentials to localStorage
      console.log('💾 Saving credentials to localStorage...')
      localStorage.setItem('rememberedEmail', email.value)
      localStorage.setItem('rememberedPassword', password.value)
      console.log('✅ Credentials saved!')
      console.log('📧 Saved Email:', localStorage.getItem('rememberedEmail'))
      console.log('🔑 Saved Password exists:', !!localStorage.getItem('rememberedPassword'))
    } else {
      // Clear saved credentials if remember me is unchecked
      console.log('🗑️ Clearing saved credentials...')
      localStorage.removeItem('rememberedEmail')
      localStorage.removeItem('rememberedPassword')
      console.log('✅ Credentials cleared!')
    }
    
    // All checks passed - Login successful
    console.log('🎉 Login successful!')
    
    // Show success modal
    userEmail.value = data.user.email
    showSuccessModal.value = true
    isLoading.value = false
    
    // Navigate to dashboard after 2 seconds
    setTimeout(() => {
      router.push({ name: 'dashboard' })
    }, 2000)
    
  } catch (err) {
    console.error('💥 Unexpected login error:', err)
    errorMessage.value = `System Error: ${err.message}`
    showErrorModal.value = true
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Tailwind-based Animations */

/* Siren Light Animations using Tailwind */
@keyframes siren-red {
  0%, 100% {
    opacity: 0;
    transform: scale(0.8);
    background: radial-linear(circle, rgba(220, 38, 38, 0.4), transparent);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
    background: radial-linear(circle, rgba(220, 38, 38, 0.6), transparent);
  }
}

@keyframes siren-blue {
  0%, 100% {
    opacity: 0;
    transform: scale(0.8);
    background: radial-linear(circle, rgba(59, 130, 246, 0.4), transparent);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
    background: radial-linear(circle, rgba(59, 130, 246, 0.6), transparent);
  }
}

.animate-siren-red {
  animation: siren-red 2s infinite ease-in-out;
}

.animate-siren-blue {
  animation: siren-blue 2s infinite ease-in-out 1s;
}

/* Float Animation for Logos */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 3s ease-in-out infinite 0.3s;
}

/* Glow Pulse Animation */
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 
      0 0 40px rgba(255, 255, 255, 0.2),
      0 0 70px rgba(255, 255, 255, 0.1),
      inset 0 0 20px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow: 
      0 0 60px rgba(255, 255, 255, 0.3),
      0 0 100px rgba(255, 255, 255, 0.15),
      inset 0 0 25px rgba(255, 255, 255, 0.12);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 3s ease-in-out infinite;
}

/* Subtle Glow Pulse for Mobile Logos */
@keyframes glow-pulse-subtle {
  0%, 100% {
    box-shadow: 0 4px 15px rgba(0, 69, 149, 0.3);
  }
  50% {
    box-shadow: 0 4px 25px rgba(0, 69, 149, 0.5);
  }
}

.animate-glow-pulse-subtle {
  animation: glow-pulse-subtle 2s ease-in-out infinite;
}

/* Pulse Border Animation */
@keyframes pulse-border {
  0%, 100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse-border {
  animation: pulse-border 2s ease-in-out infinite;
}

/* Input Field Decorations */
.input-wrapper {
  position: relative;
}

.input-corner-accent {
  position: absolute;
  pointer-events: none;
}

.input-corner-accent::before,
.input-corner-accent::after {
  content: '';
  position: absolute;
  background: linear-linear(135deg, #004595 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-corner-accent::before {
  top: 0;
  left: 0;
  width: 15px;
  height: 2px;
  border-top-left-radius: 8px;
}

.input-corner-accent::after {
  top: 0;
  left: 0;
  width: 2px;
  height: 15px;
  border-top-left-radius: 8px;
}

.input-wrapper:focus-within .input-corner-accent::before,
.input-wrapper:focus-within .input-corner-accent::after {
  opacity: 1;
}

/* Additional corner accents */
.input-wrapper::before,
.input-wrapper::after {
  content: '';
  position: absolute;
  background: linear-linear(135deg, transparent 0%, #004595 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.input-wrapper::before {
  bottom: 0;
  right: 0;
  width: 15px;
  height: 2px;
  border-bottom-right-radius: 8px;
}

.input-wrapper::after {
  bottom: 0;
  right: 0;
  width: 2px;
  height: 15px;
  border-bottom-right-radius: 8px;
}

.input-wrapper:focus-within::before,
.input-wrapper:focus-within::after {
  opacity: 1;
}

/* Floating Shapes Animation - REMOVED, replaced with police badges */
/* Floating Shapes Animation - REMOVED, replaced with police badges */

/* Grid Pattern */
.grid-pattern {
  width: 100%;
  height: 100%;
  background-image: 
    linear-linear(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-linear(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Animated Gradient Text */
@keyframes linear {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-linear {
  background-size: 200% auto;
  animation: linear 4s ease infinite;
}

/* Feature Pills */
.feature-pill {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 9999px;
  color: #f3f1ee;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.feature-pill:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Login Card Animation */
.login-card {
  animation: card-appear 0.6s ease-out;
  transition: all 0.3s ease;
}

@keyframes card-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Input Focus Animation */
.input-field {
  transition: all 0.3s ease;
}

.input-field:focus {
  transform: translateY(-2px);
}

/* Form Group Animation */
.form-group {
  animation: slide-up 0.4s ease-out;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button Shine Effect */
.login-button {
  position: relative;
  overflow: hidden;
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-linear(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.login-button:hover .button-shine {
  left: 100%;
}

/* Fade In Animations */
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .floating-shape {
    opacity: 0.5;
  }
}

/* Modal Animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes modal-slide {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-modal-slide {
  animation: modal-slide 0.4s ease-out;
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
  background: linear-linear(135deg, #dcfce7 0%, #bbf7d0 100%);
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
  background: linear-linear(135deg, #f3f1ee 0%, #ffffff 100%);
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
  background: linear-linear(135deg, #f3f1ee 0%, #ffffff 100%);
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
  animation: loading 2s ease-in-out;
}

/* Error Icon Animation */
.error-icon-wrapper {
  animation: error-shake 0.5s ease-in-out;
}

@keyframes error-shake {
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  75% {
    transform: translateX(10px);
  }
}
</style>	