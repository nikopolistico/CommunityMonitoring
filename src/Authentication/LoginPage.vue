<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600"
  >
    <div class="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
      <!-- Header with Police Badge Icon -->
      <div class="text-center mb-6">
        <div
          class="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4"
        >
          <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-gray-800">Barangay Monitoring</h2>
        <p class="text-gray-600 mt-2">Police Officer Portal</p>
        <p class="text-sm text-blue-600 font-semibold">28 Barangays Network</p>
      </div>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 font-semibold mb-2" for="email">
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
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Enter your email or badge ID"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 font-semibold mb-2" for="password">
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Password
            </span>
          </label>
          <input
            v-model="password"
            id="password"
            type="password"
            required
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Login to Dashboard
        </button>
      </form>

      <div class="mt-6 pt-6 border-t border-gray-200">
        <p class="text-center text-sm text-gray-600">
          <a href="#" class="text-blue-600 hover:underline font-semibold">Forgot Password?</a>
        </p>
        <p class="text-center text-xs text-gray-500 mt-4">🔒 Secure Police Officer Access Only</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

function handleLogin() {
  // Add your login logic here for police officer authentication
  console.log(`Badge ID/Email: ${email.value}`)
  console.log('Attempting login to Barangay Monitoring System...')
  alert(`Welcome Officer!\nAccessing 28 Barangays Monitoring Dashboard...`)
}
</script>
