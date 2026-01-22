<template>
  <div class="h-screen w-screen flex items-center justify-center relative overflow-hidden">

    <!-- Background Image with Blur -->
    <div
      class="absolute inset-0 bg-cover bg-center filter blur-sm"
      :style="{ backgroundImage: `url(${landingBg})` }"
    ></div>

    <!-- Dark Overlay -->
    <div class="absolute inset-0" style="background-color: rgba(0, 33, 71, 0.85);"></div>

    <!-- Login Card -->
    <div class="relative backdrop-blur-md p-6 rounded-xl shadow-2xl w-11/12 max-w-sm z-10 border-2 mx-4" style="background-color: #f3f1ee; border-color: #004595;">

      <!-- Header with PNG Logo -->
      <div class="text-center mb-5">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-3 shadow-lg" style="background: linear-gradient(135deg, #004595 0%, #00397a 100%);">
          <img :src="logo" alt="BCPS Logo" class="w-12 h-12 object-contain" />
        </div>
        <h2 class="text-xl font-bold mb-1" style="color: #002147;">Barangay Monitoring</h2>
        <p class="text-sm font-medium" style="color: #00397a;">Police Officer Portal</p>
        <p class="text-xs font-semibold" style="color: #004595;">28 Barangays Network</p>
      </div>

      <!-- Login Form -->
      <form @submit.prevent="handleLogin" class="space-y-3">

        <!-- Email Field -->
        <div>
          <label class="block font-semibold mb-1 text-xs" for="email" style="color: #002147;">
            <span class="flex items-center">
              <svg class="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
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
            class="w-full px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all text-sm"
            style="border-color: #004595; background-color: #ffffff; color: #002147;"
          />
        </div>

        <!-- Password Field with Eye Toggle -->
        <div class="relative">
          <label class="block font-semibold mb-1 text-xs" for="password" style="color: #002147;">
            <span class="flex items-center">
              <svg class="w-3.5 h-3.5 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
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
            class="w-full pr-10 px-3 py-2 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all text-sm"
            style="border-color: #004595; background-color: #ffffff; color: #002147;"
          />
          <button
            type="button"
            @click="showPassword = !showPassword"
            class="absolute right-3 bottom-2 transition-colors"
            style="color: #00397a;"
          >
            <svg v-if="!showPassword" class="w-4 h-4 hover:opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <svg v-else class="w-4 h-4 hover:opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3l18 18" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.223 6.223a9.956 9.956 0 0111.554 0M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>

        <!-- Login Button -->
        <button
          type="submit"
          class="w-full text-white py-2 rounded-lg transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm"
          style="background: linear-gradient(135deg, #004595 0%, #00397a 100%);"
        >
          Login to Dashboard
        </button>
      </form>

      <!-- Footer Info -->
      <div class="mt-4 pt-4 border-t-2" style="border-color: #004595;">
        <p class="text-center text-xs">
          <a href="#" class="font-semibold hover:underline transition-colors" style="color: #004595;">Forgot Password?</a>
        </p>
        <p class="text-center text-xs mt-2" style="color: #00397a;">🔒 Secure Police Officer Access Only</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import landingBg from '@/assets/landing.jpg'
import logo from '@/assets/BCPO 1 LOGO.png'


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
