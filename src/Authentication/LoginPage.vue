<template>
  <div class="min-h-screen flex items-center justify-center relative">

    <!-- Background Image with Blur -->
    <div
      class="absolute inset-0 bg-cover bg-center filter blur-sm"
      :style="{ backgroundImage: `url(${landingBg})` }"
    ></div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0 bg-black/60"></div>

    <!-- Login Card -->
    <div class="relative bg-white/20 backdrop-blur-md p-6 rounded-lg shadow-2xl w-full max-w-sm z-10 border border-white/20">

      <!-- Header with PNG Logo -->
      <div class="text-center mb-6">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 bg-white/20 border border-white/30">
          <img :src="logo" alt="BCPS Logo" class="w-16 h-16 object-contain" />
        </div>
        <h2 class="text-2xl font-bold text-gray-100">Barangay Monitoring</h2>
        <p class="text-gray-200 mt-1 text-sm">Police Officer Portal</p>
        <p class="text-xs text-blue-200 font-semibold mt-1">28 Barangays Network</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-4">

        <!-- Email Field -->
        <div>
          <label class="block text-gray-100 font-semibold mb-1" for="email">
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email / Badge ID
            </span>
          </label>
          <input
            v-model="email"
            id="email"
            type="text"
            required
            placeholder="Enter your email or badge ID"
            class="w-full px-3 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 text-white placeholder-white/70 text-sm"
          />
        </div>

        <!-- Password Field with Eye Toggle -->
        <div class="relative">
          <label class="block text-gray-100 font-semibold mb-1" for="password">
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
              Password
            </span>
          </label>
          <input
            v-model="password"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            required
            placeholder="Enter your password"
            class="w-full pr-10 px-3 py-2 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent bg-white/20 text-white placeholder-white/70 text-sm"
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <svg v-if="!showPassword" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.223 6.223a9.956 9.956 0 0111.554 0M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full bg-blue-600/80 text-white py-2.5 rounded-lg hover:bg-blue-700/80 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
        >
          Login to Dashboard
        </button>
      </form>

      <!-- Footer Info -->
      <div class="mt-5 pt-5 border-t border-white/20">
        <p class="text-center text-sm text-white/70">
          <a href="#" class="text-blue-200 hover:underline font-semibold">Forgot Password?</a>
        </p>
        <p class="text-center text-xs text-white/50 mt-2">🔒 Secure Police Officer Access Only</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import landingBg from '@/img/landing.jpg'
import logo from '@/img/bcps1logo.png'

const email = ref('')
const password = ref('')
const showPassword = ref(false)

function handleLogin() {
  if (!email.value || !password.value) return alert('Please fill in all fields.')
  console.log(`Badge ID/Email: ${email.value}`)
  console.log('Attempting login to Barangay Monitoring System...')
  alert(`Welcome Officer!\nAccessing 28 Barangays Monitoring Dashboard...`)
}
</script>

<style scoped>
.filter.blur-sm {
  filter: blur(6px);
  transform: scale(1.05);
}
</style>
