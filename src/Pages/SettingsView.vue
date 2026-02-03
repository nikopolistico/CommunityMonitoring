<template>
  <div class="flex-1 bg-gradient-to-br from-[#f0f4f8] via-[#e8ecf0] to-[#f3f1ee] p-4 lg:p-8 overflow-auto min-h-screen">
    <div class="max-w-6xl mx-auto">
      <!-- Header with animated gradient -->
      <div class="relative bg-gradient-to-r from-[#002147] via-[#003a75] to-[#004595] rounded-3xl p-10 shadow-2xl mb-8 overflow-hidden group hover:shadow-3xl transition-all duration-500">
        <!-- Animated background elements -->
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-700"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl -ml-40 -mb-40 group-hover:scale-110 transition-transform duration-700"></div>
        
        <div class="relative z-10">
          <div class="flex items-center gap-4 mb-3">
            <div class="p-4 bg-white/10 backdrop-blur-sm rounded-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
              <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 class="text-5xl font-black text-white tracking-tight">Settings</h1>
              <div class="flex items-center gap-2 mt-2">
                <div class="h-1 w-16 bg-blue-300 rounded-full"></div>
                <div class="h-1 w-8 bg-blue-300/60 rounded-full"></div>
              </div>
            </div>
          </div>
          <p class="text-blue-100 text-lg font-medium ml-20">Manage your account and application preferences</p>
        </div>
      </div>

      <!-- Settings Sections -->
      <div class="space-y-6">
        <!-- Administrator Profile Section -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 border-2 border-blue-50 hover:border-blue-100 transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
          <div class="flex items-center gap-3 mb-8">
            <div class="p-3 bg-gradient-to-br from-[#004595] to-[#002147] rounded-xl">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-black text-[#002147]">Administrator Profile</h2>
              <p class="text-gray-500 text-sm mt-1">Your personal information</p>
            </div>
          </div>
          
          <!-- Profile Picture with enhanced styling -->
          <div class="flex items-center gap-8 mb-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
            <div class="relative group">
              <div class="w-32 h-32 bg-gradient-to-br from-[#004595] to-[#00397a] rounded-full flex items-center justify-center shadow-2xl ring-4 ring-blue-100 overflow-hidden group-hover:ring-8 group-hover:ring-blue-200 transition-all duration-300">
                <img
                  v-if="adminProfile.profile_picture"
                  :src="adminProfile.profile_picture"
                  alt="Admin Profile"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <svg v-else class="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <button
                @click="triggerFileUpload"
                class="absolute bottom-0 right-0 p-3 bg-gradient-to-r from-[#004595] to-[#002147] rounded-full text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-xl"
                title="Change Profile Picture"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
              </button>
              <input
                ref="fileInput"
                type="file"
                accept="image/*"
                @change="handleImageUpload"
                class="hidden"
              />
            </div>
            <div class="flex-1">
              <h3 class="text-2xl font-bold text-[#002147] mb-1">{{ adminProfile.username || 'Administrator' }}</h3>
              <p class="text-gray-600 font-medium mb-2">System Administrator</p>
              <div class="flex items-center gap-2 text-sm text-gray-500">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                Last updated: Today
              </div>
            </div>
          </div>

          <!-- Admin Info Cards -->
          <div class="grid md:grid-cols-2 gap-6">
            <!-- Email Card -->
            <div class="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-3 mb-3">
                <div class="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Email Address</p>
                </div>
              </div>
              <p class="text-lg font-bold text-[#002147] break-all">{{ adminProfile.email || 'Not set' }}</p>
            </div>

            <!-- Badge Card -->
            <div class="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-3 mb-3">
                <div class="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p class="text-sm font-semibold text-gray-500 uppercase tracking-wide">Badge Number</p>
                </div>
              </div>
              <p class="text-lg font-bold text-[#002147]">{{ adminProfile.badge_number || 'Not set' }}</p>
            </div>
          </div>
        </div>

        <!-- Account Settings -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 border-2 border-blue-50 hover:border-blue-100 transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-black text-[#002147]">Account Settings</h2>
              <p class="text-gray-500 text-sm mt-1">Update your password</p>
            </div>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-100">
            <div class="relative">
              <label class="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/>
                </svg>
                Change Password
              </label>
              <input
                v-model="settings.password"
                type="password"
                class="w-full px-5 py-4 rounded-xl border-2 border-green-200 focus:border-green-500 focus:outline-none focus:ring-4 focus:ring-green-100 transition-all duration-300 font-medium"
                placeholder="Enter new password (leave blank to keep current)"
              />
            </div>
            
            <!-- Save Button -->
            <div class="flex justify-end mt-6">
              <button
                @click="saveSettings"
                :disabled="!settings.password"
                class="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#004595] to-[#002147] text-white font-bold hover:from-[#00397a] hover:to-[#001935] transition-all duration-300 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center gap-2"
              >
                <svg class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Save Changes
              </button>
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 border-2 border-blue-50 hover:border-blue-100 transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-black text-[#002147]">Notifications</h2>
              <p class="text-gray-500 text-sm mt-1">Manage your notification preferences</p>
            </div>
          </div>

          <div class="space-y-4">
            <div class="group flex items-center justify-between p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-[#002147] text-lg">Email Notifications</h3>
                  <p class="text-sm text-gray-600">Receive notifications via email</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="settings.emailNotifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-purple-600 shadow-inner"></div>
              </label>
            </div>

            <div class="group flex items-center justify-between p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-[#002147] text-lg">Push Notifications</h3>
                  <p class="text-sm text-gray-600">Receive push notifications</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="settings.pushNotifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-cyan-600 shadow-inner"></div>
              </label>
            </div>

            <div class="group flex items-center justify-between p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl border-2 border-pink-100 hover:border-pink-300 hover:shadow-lg transition-all duration-300">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-[#002147] text-lg">SMS Notifications</h3>
                  <p class="text-sm text-gray-600">Receive notifications via SMS</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="settings.smsNotifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-pink-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-pink-500 peer-checked:to-rose-600 shadow-inner"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Appearance Settings -->
        <div class="bg-white rounded-3xl shadow-2xl p-8 border-2 border-blue-50 hover:border-blue-100 transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 bg-linear-to-br from-orange-500 to-amber-600 rounded-xl">
              <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div>
              <h2 class="text-3xl font-black text-[#002147]">Appearance</h2>
              <p class="text-gray-500 text-sm mt-1">Customize your interface</p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="group p-6 bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300">
              <label class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                <svg class="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                </svg>
                Theme
              </label>
              <select
                v-model="settings.theme"
                class="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-100 transition-all duration-300 font-medium cursor-pointer"
              >
                <option value="light">☀️ Light</option>
                <option value="dark">🌙 Dark</option>
                <option value="auto">🔄 Auto</option>
              </select>
            </div>

            <div class="group p-6 bg-linear-to-br from-amber-50 to-yellow-50 rounded-2xl border-2 border-amber-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
              <label class="flex text-sm font-bold text-gray-700 mb-3 items-center gap-2">
                <svg class="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd"/>
                </svg>
                Language
              </label>
              <select
                v-model="settings.language"
                class="w-full px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100 transition-all duration-300 font-medium cursor-pointer"
              >
                <option value="en">🇺🇸 English</option>
                <option value="fil">🇵🇭 Filipino</option>
                <option value="ceb">🌴 Cebuano</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

const adminProfile = ref({
  id: null,
  name: '',
  username: '',
  email: '',
  badge_number: '',
  profile_picture: ''
})

const settings = ref({
  username: '',
  password: '',
  emailNotifications: true,
  pushNotifications: true,
  smsNotifications: false,
  theme: 'light',
  language: 'en',
})

const editingField = ref(null)
const fileInput = ref(null)
const originalValue = ref('')

// Fetch admin data from Supabase
const fetchAdminData = async () => {
  try {
    const { data, error } = await supabase
      .from('Administrator')
      .select('*')
      .single()

    if (error) throw error

    if (data) {
      adminProfile.value = {
        id: data.id,
        name: data.name || '',
        username: data.username || '',
        email: data.email || '',
        badge_number: data.badge_number || '',
        profile_picture: data.profile_picture || ''
      }
      settings.value.username = data.username || ''
    }
  } catch (error) {
    console.error('Error fetching admin data:', error)
  }
}

// Edit field
const editField = (field) => {
  originalValue.value = adminProfile.value[field]
  editingField.value = field
}

// Save individual field
const saveField = async (field) => {
  if (!adminProfile.value.id) {
    alert('Admin profile not loaded')
    return
  }

  try {
    const updates = {}
    updates[field] = adminProfile.value[field]

    const { error } = await supabase
      .from('Administrator')
      .update(updates)
      .eq('id', adminProfile.value.id)

    if (error) throw error

    alert(`${field.replace('_', ' ')} updated successfully!`)
    editingField.value = null
  } catch (error) {
    console.error(`Error updating ${field}:`, error)
    alert(`Failed to update ${field}`)
    // Restore original value on error
    adminProfile.value[field] = originalValue.value
  }
}

// Trigger file upload
const triggerFileUpload = () => {
  fileInput.value?.click()
}

// Handle image upload
const handleImageUpload = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `${adminProfile.value.id}-${Date.now()}.${fileExt}`
    const filePath = `admin-profiles/${fileName}`

    // Upload image to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from('profiles')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('profiles')
      .getPublicUrl(filePath)

    const imageUrl = urlData.publicUrl

    // Update database
    const { error: updateError } = await supabase
      .from('Administrator')
      .update({ profile_picture: imageUrl })
      .eq('id', adminProfile.value.id)

    if (updateError) throw updateError

    adminProfile.value.profile_picture = imageUrl
    alert('Profile picture updated successfully!')
  } catch (error) {
    console.error('Error uploading image:', error)
    alert('Failed to upload profile picture')
  }
}

const saveSettings = async () => {
  if (!adminProfile.value.id) {
    alert('Admin profile not loaded')
    return
  }

  if (!settings.value.password) {
    alert('Please enter a new password')
    return
  }

  try {
    const updates = {
      password: settings.value.password
    }

    const { error } = await supabase
      .from('Administrator')
      .update(updates)
      .eq('id', adminProfile.value.id)

    if (error) throw error

    alert('Password updated successfully!')
    settings.value.password = '' // Clear password field
  } catch (error) {
    console.error('Error saving password:', error)
    alert('Failed to update password')
  }
}

const resetSettings = () => {
  if (confirm('Are you sure you want to reset account settings?')) {
    settings.value = {
      username: adminProfile.value.username,
      password: '',
      emailNotifications: true,
      pushNotifications: true,
      smsNotifications: false,
      theme: 'light',
      language: 'en',
    }
    alert('Settings reset')
  }
}

const changePassword = () => {
  alert('Use the Account Settings section to change your password')
}

const enableTwoFactor = () => {
  alert('Two-factor authentication setup - to be implemented')
}

onMounted(() => {
  fetchAdminData()
})
</script>
