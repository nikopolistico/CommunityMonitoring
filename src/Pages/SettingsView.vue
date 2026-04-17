<template>
  <div class="min-h-screen bg-linear-to-br from-[#004595]/5 via-[#ffffff] to-[#00397a]/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-['Poppins']">
    <div class="mx-auto max-w-7xl px-8 py-10">
      <!-- Header Banner -->
      <div class="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#002147] via-[#004595] to-[#00397a] p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01] mb-8">
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
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 dark:shadow-black/20 overflow-hidden border border-[#004595]/10 dark:border-gray-700">
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-4">
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
          
          <div class="p-6 bg-linear-to-br dark:to-gray-900">
            <!-- Profile Picture -->
            <div class="flex items-center gap-6 mb-6 p-5 bg-linear-to-br  dark:to-gray-800 rounded-xl border border-[#004595]/10 dark:border-gray-600">
              <div class="relative group shrink-0">
                <div class="w-24 h-24 bg-linear-to-br from-[#004595] to-[#00397a] rounded-full flex items-center justify-center shadow-lg overflow-hidden transition-all duration-300">
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
                  class="absolute bottom-0 right-0 p-2 bg-linear-to-r from-[#004595] to-[#002147] rounded-full text-white hover:scale-110 transition-all duration-300 shadow-lg"
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
                <h3 class="text-xl font-bold text-[#002147] dark:text-white mb-1 truncate">{{ adminProfile.username || 'Administrator' }}</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-2">System Administrator</p>
                <div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
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
              <div class="p-4 bg-linear-to-br  dark:to-gray-800 rounded-xl border border-[#004595]/10 dark:border-gray-600 hover:border-[#004595]/20 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 cursor-pointer group" @click="openEditModal('email')">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2.5">
                    <div class="p-2 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email Address</p>
                  </div>
                  <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </div>
                <p class="text-sm font-semibold text-[#002147] dark:text-white break-all">{{ adminProfile.email || 'Not set' }}</p>
              </div>

              <!-- Badge Card -->
              <div class="p-4 bg-linear-to-br  dark:to-gray-800 rounded-xl border border-[#004595]/10 dark:border-gray-600 hover:border-purple-300/50 dark:hover:border-gray-500 hover:shadow-md transition-all duration-300 cursor-pointer group" @click="openEditModal('badge_number')">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-2.5">
                    <div class="p-2 bg-linear-to-br from-indigo-500 to-purple-600 rounded-lg">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Badge Number</p>
                  </div>
                  <svg class="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-purple-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                </div>
                <p class="text-sm font-semibold text-[#002147] dark:text-white">{{ adminProfile.badge_number || 'Not set' }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Account Settings -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 dark:shadow-black/20 overflow-hidden border border-[#004595]/10 dark:border-gray-700">
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-4">
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
          
          <div class="p-6 bg-linear-to-br dark:to-gray-900">
            <div class="p-5 bg-linear-to-br dark:to-gray-800 rounded-xl border border-green-200/50 dark:border-gray-600">
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/>
                  </svg>
                  New Password
                </label>
                <div class="relative">
                  <input
                    v-model="settings.password"
                    :type="showPassword ? 'text' : 'password'"
                    class="w-full px-4 py-3 pr-12 rounded-lg border-2 border-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100 transition-all duration-200 text-sm"
                    placeholder="Enter new password"
                    @input="validatePassword"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    title="Toggle password visibility"
                  >
                    <svg v-if="showPassword" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.41l2.61 2.61L2 9c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.59 22 21 20.59 3.41 3 2 4.41zM7.38 8.38L8.77 9.77C8.32 11.13 9.26 12.36 10.61 12.69L12 14.08c-1.66 0-3-1.34-3-3 0-1.46 1.16-2.63 2.38-2.7zM11.06 5.02l3.03 3.03c.01-.05.02-.1.02-.15 0-1.66-1.34-3-3-3-.05 0-.1.01-.15.02z"/>
                    </svg>
                  </button>
                </div>
                
                <!-- Password Requirements -->
                <div v-if="settings.password" class="mt-3 space-y-2 p-3 bg-white/70 dark:bg-gray-800/70 rounded-lg border border-green-200/50 dark:border-gray-600/50">
                  <p class="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-2">Password Requirements:</p>
                  <div class="space-y-1.5">
                    <div class="flex items-center gap-2 text-xs">
                      <svg :class="passwordValidation.minLength ? 'text-green-600' : 'text-gray-400'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span :class="passwordValidation.minLength ? 'text-green-700 font-semibold' : 'text-gray-600 dark:text-gray-400'">
                        At least 8 characters
                      </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                      <svg :class="passwordValidation.hasUpperCase ? 'text-green-600' : 'text-gray-400'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span :class="passwordValidation.hasUpperCase ? 'text-green-700 font-semibold' : 'text-gray-600 dark:text-gray-400'">
                        One uppercase letter (A-Z)
                      </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                      <svg :class="passwordValidation.hasLowerCase ? 'text-green-600' : 'text-gray-400'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span :class="passwordValidation.hasLowerCase ? 'text-green-700 font-semibold' : 'text-gray-600 dark:text-gray-400'">
                        One lowercase letter (a-z)
                      </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                      <svg :class="passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-400'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span :class="passwordValidation.hasNumber ? 'text-green-700 font-semibold' : 'text-gray-600 dark:text-gray-400'">
                        One number (0-9)
                      </span>
                    </div>
                    <div class="flex items-center gap-2 text-xs">
                      <svg :class="passwordValidation.hasSpecial ? 'text-green-600' : 'text-gray-400'" class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span :class="passwordValidation.hasSpecial ? 'text-green-700 font-semibold' : 'text-gray-600 dark:text-gray-400'">
                        One special character (!@#$%^&*)
                      </span>
                    </div>
                  </div>
                  
                  <!-- Password Strength Indicator -->
                  <div class="mt-3 pt-3 border-t border-green-200/50 dark:border-gray-600/50">
                    <div class="flex items-center justify-between mb-1.5">
                      <span class="text-xs font-semibold text-gray-700 dark:text-gray-200">Password Strength:</span>
                      <span :class="[
                        'text-xs font-bold',
                        passwordStrength === 'Weak' ? 'text-red-600' :
                        passwordStrength === 'Medium' ? 'text-yellow-600' :
                        passwordStrength === 'Strong' ? 'text-green-600' : 'text-gray-500'
                      ]">{{ passwordStrength }}</span>
                    </div>
                    <div class="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        :class="[
                          'h-full transition-all duration-300',
                          passwordStrength === 'Weak' ? 'bg-red-500 w-1/3' :
                          passwordStrength === 'Medium' ? 'bg-yellow-500 w-2/3' :
                          passwordStrength === 'Strong' ? 'bg-green-500 w-full' : 'bg-gray-300 w-0'
                        ]"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Confirm Password Field -->
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 flex items-center gap-2">
                  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clip-rule="evenodd"/>
                  </svg>
                  Confirm Password
                </label>
                <div class="relative">
                  <input
                    v-model="settings.confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    class="w-full px-4 py-3 pr-12 rounded-lg border-2 transition-all duration-200 text-sm"
                    :class="[
                      settings.confirmPassword ? (
                        passwordsMatch ? 'border-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100' : 
                        'border-red-300 dark:border-red-600 dark:bg-gray-700 dark:text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100'
                      ) : 'border-green-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-100'
                    ]"
                    placeholder="Confirm your password"
                    @input="validatePassword"
                  />
                  <button
                    type="button"
                    @click="showConfirmPassword = !showConfirmPassword"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                    title="Toggle password visibility"
                  >
                    <svg v-if="showConfirmPassword" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                    </svg>
                    <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.41l2.61 2.61L2 9c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.59 22 21 20.59 3.41 3 2 4.41zM7.38 8.38L8.77 9.77C8.32 11.13 9.26 12.36 10.61 12.69L12 14.08c-1.66 0-3-1.34-3-3 0-1.46 1.16-2.63 2.38-2.7zM11.06 5.02l3.03 3.03c.01-.05.02-.1.02-.15 0-1.66-1.34-3-3-3-.05 0-.1.01-.15.02z"/>
                    </svg>
                  </button>
                </div>
                <!-- Password Match Indicator -->
                <div v-if="settings.confirmPassword" class="mt-2 flex items-center gap-2">
                  <svg v-if="passwordsMatch" class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <svg v-else class="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                  <p :class="passwordsMatch ? 'text-green-700 font-semibold text-sm' : 'text-red-700 font-semibold text-sm'">
                    {{ passwordsMatch ? 'Passwords match' : 'Passwords do not match' }}
                  </p>
                </div>
              </div>
              
              <!-- Save Button -->
              <div class="flex justify-end">
                <button
                  @click="saveSettings"
                  :disabled="!isPasswordValid"
                  class="px-6 py-2.5 rounded-lg bg-linear-to-r from-[#004595] to-[#002147] text-white text-sm font-semibold hover:from-[#00397a] hover:to-[#001935] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 flex items-center gap-2"
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
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 dark:shadow-black/20 overflow-hidden border border-[#004595]/10 dark:border-gray-700">
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-4">
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

          <div class="p-6 bg-linear-to-br  dark:to-gray-900 space-y-3">
            <div class="flex items-center justify-between p-4 bg-linear-to-br dark:to-gray-800 rounded-xl border border-blue-100/50 dark:border-gray-600 hover:border-blue-300/50 dark:hover:border-gray-500 hover:shadow-sm transition-all duration-300">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-linear-to-br  rounded-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                  </svg>
                </div>
                <div class="dark:bg-gray-800">
                  <h3 class="font-semibold text-gray-700 dark:text-gray-200 text-sm">Push Notifications</h3>
                  <p class="text-xs text-white">Receive push notifications</p>
                </div>
              </div>
              <label class="relative inline-flex items-center cursor-pointer">
                <input
                  v-model="settings.pushNotifications"
                  type="checkbox"
                  class="sr-only peer"
                />
                <div class="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-linear-to-r peer-checked:from-blue-500 peer-checked:to-cyan-600 shadow-sm"></div>
              </label>
            </div>
          </div>
        </div>


      </div>
    </div>

    <!-- Edit Modal -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="editModal.show"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-90000 flex items-center justify-center p-4"
        @click.self="closeEditModal"
      >
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="editModal.show"
            class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            @click.stop
          >
            <!-- Modal Header -->
            <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="p-2 bg-white/10 backdrop-blur-sm rounded-lg">
                    <svg v-if="editModal.field === 'email'" class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <svg v-else class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-white">
                    Edit {{ editModal.field === 'email' ? 'Email Address' : 'Badge Number' }}
                  </h3>
                </div>
                <button
                  @click="closeEditModal"
                  class="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Modal Body -->
            <div class="p-6">
              <div class="mb-4">
                <label class="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2 block">
                  {{ editModal.field === 'email' ? 'Email Address' : 'Badge Number' }}
                </label>
                <input
                  v-model="editModal.value"
                  :type="editModal.field === 'email' ? 'email' : 'text'"
                  :placeholder="editModal.field === 'email' ? 'Enter email address' : 'Enter badge number'"
                  class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all duration-200 text-sm"
                  @keyup.enter="saveEditModal"
                  @keyup.escape="closeEditModal"
                  ref="editModalInput"
                />
              </div>

              <!-- Action Buttons -->
              <div class="flex gap-3 justify-end">
                <button
                  @click="closeEditModal"
                  class="px-4 py-2.5 rounded-lg border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 dark:bg-gray-700 font-semibold hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200 text-sm"
                >
                  Cancel
                </button>
                <button
                  @click="saveEditModal"
                  class="px-4 py-2.5 rounded-lg bg-linear-to-r from-[#004595] to-[#00397a] text-white font-semibold hover:from-[#00397a] hover:to-[#002147] transition-all duration-200 shadow-md hover:shadow-lg text-sm flex items-center gap-2"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

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
        class="fixed top-6 left-1/2 -translate-x-1/2 z-100000 max-w-md w-full px-4"
      >
        <div
          :class="[
            'rounded-2xl shadow-2xl border-2 overflow-hidden transform transition-all',
            toast.type === 'success' ? 'bg-linear-to-r from-green-500 to-emerald-600 border-green-400' :
            toast.type === 'error' ? 'bg-linear-to-r from-red-500 to-rose-600 border-red-400' :
            'bg-linear-to-r from-amber-500 to-orange-600 border-amber-400'
          ]"
        >
          <div class="p-4">
            <div class="flex items-start gap-3">
              <!-- Icon -->
              <div class="shrink-0 mt-0.5">
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
                class="shrink-0 text-white/80 hover:text-white transition-colors"
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
import { ref, onMounted, watch } from 'vue'
import { supabase } from '@/lib/supabase'
import { useSettings } from '@/composables/useSettings'
import { useTranslation } from '@/composables/useTranslation'

const { saveSettings: saveSettingsToDb, pushNotifications: currentPushNotifications } = useSettings()
const { t } = useTranslation()

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
  confirmPassword: '',
  pushNotifications: true,
})

const showPassword = ref(false)
const showConfirmPassword = ref(false)

const editingField = ref(null)
const fileInput = ref(null)
const originalValue = ref('')
const editModalInput = ref(null)

// Edit modal state
const editModal = ref({
  show: false,
  field: '',
  value: ''
})

// Password validation state
const passwordValidation = ref({
  minLength: false,
  hasUpperCase: false,
  hasLowerCase: false,
  hasNumber: false,
  hasSpecial: false
})

const passwordStrength = ref('')
const isPasswordValid = ref(false)
const passwordsMatch = ref(false)

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
  }, 100)

  // Auto hide after duration
  toastTimer = setTimeout(() => {
    hideToast()
  }, duration)
}

const hideToast = () => {
  toast.value.show = false
  if (toastTimer) clearTimeout(toastTimer)
  if (progressTimer) clearInterval(progressTimer)
}

// Password validation function
const validatePassword = () => {
  const password = settings.value.password
  const confirmPassword = settings.value.confirmPassword
  
  // Check each requirement
  passwordValidation.value = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
  }
  
  // Check if passwords match
  passwordsMatch.value = password.length > 0 && password === confirmPassword
  
  // Calculate password strength
  const validCount = Object.values(passwordValidation.value).filter(v => v).length
  
  if (validCount === 5) {
    passwordStrength.value = 'Strong'
    isPasswordValid.value = passwordsMatch.value && validCount === 5
  } else if (validCount >= 3) {
    passwordStrength.value = 'Medium'
    isPasswordValid.value = false
  } else if (validCount >= 1) {
    passwordStrength.value = 'Weak'
    isPasswordValid.value = false
  } else {
    passwordStrength.value = ''
    isPasswordValid.value = false
  }
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
      
      // Sync settings from database
      settings.value.pushNotifications = data.push_notifications !== false
    }
  } catch (error) {
    console.error('Error fetching admin data:', error)
  }
}

// Watch for push notification changes
watch(() => settings.value.pushNotifications, async (newValue) => {
  const result = await saveSettingsToDb({ pushNotifications: newValue })
  if (result.success) {
    showToast(t('success'), 'success', t('settingsUpdated'))
  } else {
    showToast(t('updateFailed'), 'error', result.error)
  }
})

// Edit modal functions
const openEditModal = (field) => {
  editModal.value = {
    show: true,
    field: field,
    value: adminProfile.value[field] || ''
  }
  
  // Focus input after modal opens
  setTimeout(() => {
    editModalInput.value?.focus()
  }, 100)
}

const closeEditModal = () => {
  editModal.value = {
    show: false,
    field: '',
    value: ''
  }
}

const saveEditModal = async () => {
  if (!adminProfile.value.id) {
    showToast('Cannot Update', 'error', 'Admin profile not loaded')
    return
  }

  // Validate email format if editing email
  if (editModal.value.field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(editModal.value.value)) {
      showToast('Invalid Email', 'warning', 'Please enter a valid email address')
      return
    }
  }

  // Validate badge number is not empty
  if (editModal.value.field === 'badge_number' && !editModal.value.value.trim()) {
    showToast('Invalid Badge Number', 'warning', 'Badge number cannot be empty')
    return
  }

  try {
    const updates = {}
    updates[editModal.value.field] = editModal.value.value

    const { error } = await supabase
      .from('Administrator')
      .update(updates)
      .eq('id', adminProfile.value.id)

    if (error) throw error

    // Update local state
    adminProfile.value[editModal.value.field] = editModal.value.value
    
    showToast(t('success'), 'success', `${fieldName} ${t('settingsUpdated').toLowerCase()}`)
    closeEditModal()
  } catch (error) {
    console.error(`Error updating ${editModal.value.field}:`, error)
    showToast('Update Failed', 'error', `Failed to update ${editModal.value.field === 'email' ? 'email address' : 'badge number'}`)
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

    // Get the public URL of the uploaded image
    const { data: { publicUrl } } = supabase.storage
      .from('administrator')
      .getPublicUrl(filePath)

    // Update profile picture URL in database
    const { error: updateError } = await supabase
      .from('Administrator')
      .update({ profile_picture: publicUrl })
      .eq('id', adminProfile.value.id)

    if (updateError) {
      console.error('Update error:', updateError)
      throw updateError
    }

    // Update local state
    adminProfile.value.profile_picture = publicUrl
    showToast(t('success'), 'success', t('profilePictureUpdated'))
  } catch (error) {
    console.error('Error uploading image:', error)
    showToast(t('updateFailed'), 'error', 'Failed to upload profile picture')
  } finally {
    // Clear the file input
    if (fileInput.value) {
      fileInput.value.value = ''
    }
  }
}

// Save settings (password update)
const saveSettings = async () => {
  if (!adminProfile.value.id) {
    showToast('Cannot Update', 'error', 'Admin profile not loaded')
    return
  }

  if (!settings.value.password) {
    showToast('Password Required', 'warning', 'Please enter a new password')
    return
  }

  // Validate all password requirements
  if (!isPasswordValid.value) {
    showToast('Invalid Password', 'error', 'Password must meet all requirements')
    return
  }

  try {
    // Update password using Supabase Auth (this is the correct way)
    const { data, error } = await supabase.auth.updateUser({
      password: settings.value.password
    })

    if (error) throw error

    showToast(t('success'), 'success', t('passwordUpdated'))
    settings.value.password = '' // Clear password field
    
    // Reset validation state
    passwordValidation.value = {
      minLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      hasSpecial: false
    }
    passwordStrength.value = ''
    isPasswordValid.value = false
  } catch (error) {
    console.error('Error saving password:', error)
    
    // Handle specific error cases
    if (error.message?.includes('New password should be different')) {
      showToast('Same Password', 'warning', 'Please choose a different password')
    } else if (error.message?.includes('Password should be at least')) {
      showToast(t('invalidPassword'), 'warning', error.message)
    } else {
      showToast(t('updateFailed'), 'error', 'Failed to update password. Please try again.')
    }
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
