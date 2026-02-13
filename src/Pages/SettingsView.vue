<template>
  <div class="min-h-screen bg-gradient-to-br from-[#004595]/5 via-[#ffffff] to-[#00397a]/5 font-['Poppins']">
    <div class="mx-auto max-w-7xl px-8 py-10">
      <!-- Header Banner -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002147] via-[#004595] to-[#00397a] p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01] mb-8">
        <div class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mb-32"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div class="relative z-10">
          <div class="flex items-center gap-4 mb-3">
            <div class="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h1 class="text-4xl font-bold text-white tracking-tight">Settings</h1>
              <p class="text-blue-100 text-base mt-1">Manage your account and application preferences</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Settings Sections -->
      <div class="space-y-6">
        <!-- Administrator Profile Section -->
        <div class="bg-white rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10">
          <div class="bg-gradient-to-r from-[#004595] to-[#00397a] px-6 py-4">
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white">Administrator Profile</h2>
                <p class="text-blue-100 text-sm">Your personal information</p>
              </div>
            </div>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-[#f3f1ee]/30 to-white">
            <!-- Profile Picture -->
            <div class="flex items-center gap-6 mb-6 p-5 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 rounded-xl border border-[#004595]/10">
              <div class="relative group flex-shrink-0">
                <div class="w-24 h-24 bg-gradient-to-br from-[#004595] to-[#00397a] rounded-full flex items-center justify-center shadow-lg overflow-hidden transition-all duration-300">
                  <img
                    v-if="adminProfile.profile_picture"
                    :src="adminProfile.profile_picture"
                    alt="Admin Profile"
                    class="w-full h-full object-cover"
                  />
                  <svg v-else class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <button
                  @click="triggerFileUpload"
                  class="absolute bottom-0 right-0 p-2 bg-gradient-to-r from-[#004595] to-[#002147] rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg"
                  title="Change Profile Picture"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
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
              <div class="flex-1 min-w-0">
                <h3 class="text-xl font-bold text-[#002147] mb-1 truncate">{{ adminProfile.username || 'Administrator' }}</h3>
                <p class="text-gray-600 text-sm mb-2">System Administrator</p>
                <div class="flex items-center gap-2 text-xs text-gray-500">
                  <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                  Last updated: Today
                </div>
              </div>
            </div>

            <!-- Admin Info Cards -->
            <div class="grid md:grid-cols-2 gap-4">
              <!-- Email Card -->
              <div class="p-4 bg-gradient-to-br from-white to-blue-50/30 rounded-xl border border-[#004595]/10 hover:border-[#004595]/20 hover:shadow-md transition-all duration-300">
                <div class="flex items-center gap-2.5 mb-2">
                  <div class="p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Email Address</p>
                </div>
                <p class="text-sm font-semibold text-[#002147] break-all">{{ adminProfile.email || 'Not set' }}</p>
              </div>

              <!-- Badge Card -->
              <div class="p-4 bg-gradient-to-br from-white to-purple-50/30 rounded-xl border border-[#004595]/10 hover:border-purple-300/50 hover:shadow-md transition-all duration-300">
                <div class="flex items-center gap-2.5 mb-2">
                  <div class="p-2 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Badge Number</p>
                </div>
                <p class="text-sm font-semibold text-[#002147]">{{ adminProfile.badge_number || 'Not set' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Account Settings -->
        <div class="bg-white rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10">
          <div class="bg-gradient-to-r from-[#004595] to-[#00397a] px-6 py-4">
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white">Account Security</h2>
                <p class="text-blue-100 text-sm">Update your password</p>
              </div>
            </div>
          </div>
          
          <div class="p-6 bg-gradient-to-br from-[#f3f1ee]/30 to-white">
            <div class="p-5 bg-gradient-to-br from-green-50/50 to-emerald-50/50 rounded-xl border border-green-200/50">
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/>
                  </svg>
                  New Password
                </label>
                <input
                  v-model="settings.password"
                  type="password"
                  class="w-full px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all duration-200 text-sm"
                  placeholder="Enter new password (leave blank to keep current)"
                />
              </div>
              
              <!-- Save Button -->
              <div class="flex justify-end">
                <button
                  @click="saveSettings"
                  :disabled="!settings.password"
                  class="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#004595] to-[#002147] text-white text-sm font-semibold hover:from-[#00397a] hover:to-[#001935] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center gap-2"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Save Password
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Notification Settings -->
        <div class="bg-white rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10">
          <div class="bg-gradient-to-r from-[#004595] to-[#00397a] px-6 py-4">
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white">Notifications</h2>
                <p class="text-blue-100 text-sm">Manage your notification preferences</p>
              </div>
            </div>
          </div>

          <div class="p-6 bg-gradient-to-br from-[#f3f1ee]/30 to-white space-y-3">
            <div class="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50/50 to-cyan-50/50 rounded-xl border border-blue-100/50 hover:border-blue-300/50 hover:shadow-sm transition-all duration-300">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-[#002147] text-sm">Push Notifications</h3>
                  <p class="text-xs text-gray-600">Receive push notifications</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="settings.pushNotifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-cyan-600 shadow-sm"></div>
              </label>
            </div>
          </div>
        </div>

        <!-- Appearance Settings -->
        <div class="bg-white rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10">
          <div class="bg-gradient-to-r from-[#004595] to-[#00397a] px-6 py-4">
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-white/10 backdrop-blur-sm rounded-xl">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white">Appearance</h2>
                <p class="text-blue-100 text-sm">Customize your interface</p>
              </div>
            </div>
          </div>

          <div class="p-6 bg-gradient-to-br from-[#f3f1ee]/30 to-white">
            <div class="grid md:grid-cols-2 gap-4">
              <div class="p-4 bg-gradient-to-br from-orange-50/50 to-amber-50/50 rounded-xl border border-orange-100/50 hover:border-orange-300/50 hover:shadow-sm transition-all duration-300">
                <label class="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg class="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                  </svg>
                  Theme
                </label>
                <select
                  v-model="settings.theme"
                  class="w-full px-3 py-2.5 rounded-lg border-2 border-orange-200 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all duration-200 text-sm cursor-pointer"
                >
                  <option value="light">☀️ Light</option>
                  <option value="dark">🌙 Dark</option>
                  <option value="auto">🔄 Auto</option>
                </select>
              </div>

              <div class="p-4 bg-gradient-to-br from-amber-50/50 to-yellow-50/50 rounded-xl border border-amber-100/50 hover:border-amber-300/50 hover:shadow-sm transition-all duration-300">
                <label class="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg class="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd"/>
                  </svg>
                  Language
                </label>
                <select
                  v-model="settings.language"
                  class="w-full px-3 py-2.5 rounded-lg border-2 border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-100 transition-all duration-200 text-sm cursor-pointer"
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

    <!-- Toast Notification -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-[-100%]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-100%]"
    >
      <div
        v-if="toast.show"
        class="fixed top-6 left-1/2 -translate-x-1/2 z-[100000] max-w-md w-full px-4"
      >
        <div
          :class="[
            'rounded-2xl shadow-2xl border-2 overflow-hidden transform transition-all',
            toast.type === 'success' ? 'bg-gradient-to-r from-green-500 to-emerald-600 border-green-400' :
            toast.type === 'error' ? 'bg-gradient-to-r from-red-500 to-rose-600 border-red-400' :
            'bg-gradient-to-r from-amber-500 to-orange-600 border-amber-400'
          ]"
        >
          <div class="p-4">
            <div class="flex items-start gap-3">
              <!-- Icon -->
              <div class="flex-shrink-0 mt-0.5">
                <svg v-if="toast.type === 'success'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <svg v-else-if="toast.type === 'error'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                </svg>
                <svg v-else class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Content -->
              <div class="flex-1 min-w-0">
                <h3 class="text-base font-bold text-white">{{ toast.message }}</h3>
                <p v-if="toast.description" class="text-sm text-white/90 mt-0.5">{{ toast.description }}</p>
              </div>
              
              <!-- Close Button -->
              <button
                @click="hideToast"
                class="flex-shrink-0 text-white/80 hover:text-white transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Progress Bar -->
          <div class="h-1 bg-white/20">
            <div
              class="h-full bg-white transition-all duration-100 ease-linear"
              :style="{ width: `${toast.progress}%` }"
            ></div>
          </div>
        </div>
      </div>
    </Transition>
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
  pushNotifications: true,
  theme: 'light',
  language: 'en',
})

const editingField = ref(null)
const fileInput = ref(null)
const originalValue = ref('')

// Toast notification state
const toast = ref({
  show: false,
  message: '',
  description: '',
  type: 'success', // 'success', 'error', 'warning'
  progress: 100
})

let toastTimer = null
let progressTimer = null

// Toast helper functions
const showToast = (message, type = 'success', description = '', duration = 4000) => {
  // Clear existing timers
  if (toastTimer) clearTimeout(toastTimer)
  if (progressTimer) clearInterval(progressTimer)
  
  toast.value = {
    show: true,
    message,
    description,
    type,
    progress: 100
  }

  // Progress bar animation
  const startTime = Date.now()
  progressTimer = setInterval(() => {
    const elapsed = Date.now() - startTime
    const remaining = Math.max(0, 100 - (elapsed / duration) * 100)
    toast.value.progress = remaining
    
    if (remaining <= 0) {
      clearInterval(progressTimer)
    }
  }, 50)

  // Auto hide
  toastTimer = setTimeout(() => {
    hideToast()
  }, duration)
}

const hideToast = () => {
  toast.value.show = false
  if (toastTimer) clearTimeout(toastTimer)
  if (progressTimer) clearInterval(progressTimer)
}

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
    showToast('Cannot Update', 'error', 'Admin profile not loaded')
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

    showToast('Success!', 'success', `${field.replace('_', ' ')} updated successfully!`)
    editingField.value = null
  } catch (error) {
    console.error(`Error updating ${field}:`, error)
    showToast('Update Failed', 'error', `Failed to update ${field}`)
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

  // Validate file type
  if (!file.type.startsWith('image/')) {
    showToast('Invalid File Type', 'warning', 'Please select an image file')
    return
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    showToast('File Too Large', 'warning', 'Image size should be less than 5MB')
    return
  }

  try {
    const fileExt = file.name.split('.').pop()
    const fileName = `admin_${adminProfile.value.id}_${Date.now()}.${fileExt}`
    const filePath = fileName

    console.log('Uploading to bucket: administrator, path:', filePath)

    // Upload image to Supabase Storage (using 'administrator' bucket)
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('administrator')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (uploadError) {
      console.error('Upload error:', uploadError)
      throw uploadError
    }

    console.log('Upload successful:', uploadData)

    // Get public URL
    const { data: urlData } = supabase.storage
      .from('administrator')
      .getPublicUrl(filePath)

    const imageUrl = urlData.publicUrl
    console.log('Image URL:', imageUrl)

    // Update database
    const { error: updateError } = await supabase
      .from('Administrator')
      .update({ profile_picture: imageUrl })
      .eq('id', adminProfile.value.id)

    if (updateError) {
      console.error('Database update error:', updateError)
      throw updateError
    }

    adminProfile.value.profile_picture = imageUrl
    showToast('Success!', 'success', 'Profile picture updated successfully!')
  } catch (error) {
    console.error('Error uploading image:', error)
    showToast('Upload Failed', 'error', `Failed to upload profile picture: ${error.message}`)
  }
}

const saveSettings = async () => {
  if (!adminProfile.value.id) {
    showToast('Cannot Update', 'error', 'Admin profile not loaded')
    return
  }

  if (!settings.value.password) {
    showToast('Password Required', 'warning', 'Please enter a new password')
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

    showToast('Success!', 'success', 'Password updated successfully!')
    settings.value.password = '' // Clear password field
  } catch (error) {
    console.error('Error saving password:', error)
    showToast('Update Failed', 'error', 'Failed to update password')
  }
}

const resetSettings = () => {
  if (confirm('Are you sure you want to reset account settings?')) {
    settings.value = {
      username: adminProfile.value.username,
      password: '',
      pushNotifications: true,
      theme: 'light',
      language: 'en',
    }
    showToast('Settings Reset', 'success', 'All settings have been reset to default')
  }
}

const changePassword = () => {
  showToast('Password Change', 'warning', 'Use the Account Settings section to change your password')
}

const enableTwoFactor = () => {
  showToast('Coming Soon', 'warning', 'Two-factor authentication setup will be available soon')
}

onMounted(() => {
  fetchAdminData()
})
</script>
