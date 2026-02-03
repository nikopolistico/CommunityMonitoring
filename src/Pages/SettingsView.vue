<template>
  <div class="flex-1 bg-[#f3f1ee] p-4 lg:p-8 overflow-auto">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="bg-linear-to-r from-[#002147] to-[#004595] rounded-2xl p-8 shadow-2xl mb-6">
        <div class="flex items-center gap-3">
          <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            />
          </svg>
          <h1 class="text-4xl font-extrabold text-white">Settings</h1>
        </div>
        <p class="text-[#e0e7ff] mt-2">Manage your account and application preferences</p>
      </div>

      <!-- Settings Sections -->
      <div class="space-y-6">
        <!-- Account Settings -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border-2 border-white/50">
          <h2 class="text-2xl font-bold text-[#002147] mb-4 flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
            Account Settings
          </h2>
          
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Username</label>
              <input
                v-model="settings.username"
                type="text"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                v-model="settings.email"
                type="email"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
                placeholder="Enter email"
              />
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Badge Number</label>
              <input
                v-model="settings.badgeNumber"
                type="text"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
                placeholder="Enter badge number"
              />
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border-2 border-white/50">
          <h2 class="text-2xl font-bold text-[#002147] mb-4 flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
            </svg>
            Notifications
          </h2>

          <div class="space-y-4">
            <div class="flex items-center justify-between p-4 bg-[#f3f1ee] rounded-lg">
              <div>
                <h3 class="font-semibold text-[#002147]">Email Notifications</h3>
                <p class="text-sm text-gray-600">Receive notifications via email</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="settings.emailNotifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#004595]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004595]"></div>
              </label>
            </div>

            <div class="flex items-center justify-between p-4 bg-[#f3f1ee] rounded-lg">
              <div>
                <h3 class="font-semibold text-[#002147]">Push Notifications</h3>
                <p class="text-sm text-gray-600">Receive push notifications</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="settings.pushNotifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#004595]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004595]"></div>
              </label>
            </div>

            <div class="flex items-center justify-between p-4 bg-[#f3f1ee] rounded-lg">
              <div>
                <h3 class="font-semibold text-[#002147]">SMS Notifications</h3>
                <p class="text-sm text-gray-600">Receive notifications via SMS</p>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="settings.smsNotifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#004595]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#004595]"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Appearance Settings -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border-2 border-white/50">
          <h2 class="text-2xl font-bold text-[#002147] mb-4 flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"/>
            </svg>
            Appearance
          </h2>

          <div class="space-y-4">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Theme</label>
              <select
                v-model="settings.theme"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="auto">Auto</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Language</label>
              <select
                v-model="settings.language"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
              >
                <option value="en">English</option>
                <option value="fil">Filipino</option>
                <option value="ceb">Cebuano</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Security Settings -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border-2 border-white/50">
          <h2 class="text-2xl font-bold text-[#002147] mb-4 flex items-center gap-2">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
            </svg>
            Security
          </h2>

          <div class="space-y-4">
            <button
              @click="changePassword"
              class="w-full flex items-center justify-between p-4 bg-[#f3f1ee] rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span class="font-semibold text-[#002147]">Change Password</span>
              <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>

            <button
              @click="enableTwoFactor"
              class="w-full flex items-center justify-between p-4 bg-[#f3f1ee] rounded-lg hover:bg-gray-200 transition-colors"
            >
              <span class="font-semibold text-[#002147]">Two-Factor Authentication</span>
              <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Save Button -->
        <div class="flex justify-end gap-4">
          <button
            @click="resetSettings"
            class="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Reset
          </button>
          <button
            @click="saveSettings"
            class="px-6 py-3 rounded-lg bg-[#004595] text-white font-semibold hover:bg-[#00397a] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const settings = ref({
  username: 'Officer Name',
  email: 'officer@barangay.gov.ph',
  badgeNumber: '12345',
  emailNotifications: true,
  pushNotifications: true,
  smsNotifications: false,
  theme: 'light',
  language: 'en',
})

const saveSettings = () => {
  alert('Settings saved successfully!')
  console.log('Saved settings:', settings.value)
}

const resetSettings = () => {
  if (confirm('Are you sure you want to reset all settings?')) {
    settings.value = {
      username: 'Officer Name',
      email: 'officer@barangay.gov.ph',
      badgeNumber: '12345',
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      theme: 'light',
      language: 'en',
    }
    alert('Settings reset to default')
  }
}

const changePassword = () => {
  alert('Change password functionality - to be implemented')
}

const enableTwoFactor = () => {
  alert('Two-factor authentication setup - to be implemented')
}
</script>