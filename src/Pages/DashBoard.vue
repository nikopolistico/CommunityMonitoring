<template>
  <div class="flex-1 flex flex-col bg-[#f3f1ee]">
    <!-- Top Header -->
      <header class="relative shadow-2xl overflow-hidden h-48">
        <div
          class="absolute inset-0 bg-cover bg-center" 
          :style="{ backgroundImage: `url(${headbk})` }"
        ></div>
        <div class="absolute inset-0 bg-linear-to-r from-[#002147]/80 to-[#004595]/70"></div>

        <div class="relative z-10 p-4 lg:p-6">
          <div class="max-w-6xl mx-auto">
            <div class="flex items-start justify-between gap-4">
              <div class="mt-8">
                <div class="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
                  <h1
                    class="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-lg"
                  >
                    Butuan City Police Station 1
                  </h1>
                </div>

                <div>
                  <p class="text-xs sm:text-sm text-[#e0e7ff] mb-1 ms-9 font-medium">
                    Community monitoring across 28 barangays
                  </p>
                </div>
              </div>

              <div class="flex items-center gap-2 mt-8">
                <!-- Notification Bell -->
                <div class="relative">
                  <button 
                    @click="toggleNotifications"
                    class="relative p-2.5 rounded-full bg-white/20 backdrop-blur-md shadow-lg border border-white/30 hover:bg-white/30 transition-all duration-300 group"
                  >
                    <svg class="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                    </svg>
                    <!-- Notification Badge -->
                    <span v-if="unreadNotifications > 0" class="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold border border-white shadow-md animate-pulse">
                      {{ unreadNotifications }}
                    </span>
                  </button>
                  
                  <!-- Notification Dropdown -->
                  <div v-if="showNotifications" class="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-[#004595]/20 overflow-hidden z-[100]">
                    <div class="bg-gradient-to-r from-[#002147] to-[#004595] px-3 py-2.5">
                      <h3 class="text-white font-semibold text-sm">Notifications</h3>
                    </div>
                    <div class="max-h-80 overflow-y-auto">
                      <div v-if="notifications.length === 0" class="p-6 text-center text-gray-500">
                        <svg class="w-10 h-10 mx-auto mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                        </svg>
                        <p class="font-medium text-sm">No notifications</p>
                      </div>
                      <div v-else>
                        <div 
                          v-for="(notification, index) in notifications" 
                          :key="index"
                          class="px-3 py-2.5 border-b border-gray-100 hover:bg-[#f3f1ee] transition-colors cursor-pointer"
                          :class="{ 'bg-blue-50': !notification.read }"
                          @click="markAsRead(index)"
                        >
                          <div class="flex items-start gap-2.5">
                            <div class="p-1.5 rounded-full flex-shrink-0" :class="getNotificationIconBg(notification.type)">
                              <svg class="w-3.5 h-3.5" :class="getNotificationIconColor(notification.type)" fill="currentColor" viewBox="0 0 20 20">
                                <path v-if="notification.type === 'info'" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                                <path v-else-if="notification.type === 'warning'" fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                                <path v-else fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                              </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-xs font-semibold text-gray-800">{{ notification.title }}</p>
                              <p class="text-xs text-gray-600 mt-0.5 line-clamp-2">{{ notification.message }}</p>
                              <p class="text-xs text-gray-400 mt-0.5">{{ notification.time }}</p>
                            </div>
                            <span v-if="!notification.read" class="w-1.5 h-1.5 bg-[#004595] rounded-full flex-shrink-0 mt-1"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-[#f3f1ee] px-3 py-2 text-center border-t border-gray-100">
                      <button @click="clearAllNotifications" class="text-xs text-[#004595] font-semibold hover:text-[#002147] transition-colors">
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Date and Time -->
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-white/25 to-white/10 backdrop-blur-md shadow-lg border border-white/40 hover:shadow-xl transition-all duration-300">
                  <span class="p-1.5 rounded-full bg-white/30">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V5a.75.75 0 10-1.5 0v4.5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06l-2.78-2.72z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <p class="text-sm sm:text-base lg:text-lg text-white font-bold tracking-wide drop-shadow-md">
                    {{ currentTimestamp }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Summary Cards -->
      <div class="p-2 sm:p-4 lg:p-6 space-y-4">
        <!-- Stats Grid with Weather -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <!-- Left Side Stats (2x2 Grid) -->
          <div class="lg:col-span-2 grid grid-cols-2 gap-4">
            <!-- Total Barangays Card -->
            <div class="bg-gradient-to-br from-white to-[#f3f1ee] rounded-xl shadow-lg p-6 border-2 border-[#004595]/20 hover:border-[#004595] hover:shadow-2xl transition-all duration-300 group">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-4xl font-bold text-[#004595] mb-2 group-hover:scale-110 transition-transform">{{ totalBarangays }}</h3>
                  <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">TOTAL BARANGAYS</p>
                </div>
                <div class="p-3 bg-gradient-to-br from-[#004595]/10 to-[#004595]/5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-12 h-12 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Schools Card -->
            <div class="bg-gradient-to-br from-white to-[#f3f1ee] rounded-xl shadow-lg p-6 border-2 border-[#00397a]/20 hover:border-[#00397a] hover:shadow-2xl transition-all duration-300 group">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-4xl font-bold text-[#00397a] mb-2 group-hover:scale-110 transition-transform">{{ totalSchools }}</h3>
                  <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">TOTAL SCHOOLS</p>
                </div>
                <div class="p-3 bg-gradient-to-br from-[#00397a]/10 to-[#00397a]/5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-12 h-12 text-[#00397a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Church Card -->
            <div class="bg-gradient-to-br from-white to-[#f3f1ee] rounded-xl shadow-lg p-6 border-2 border-[#002147]/20 hover:border-[#002147] hover:shadow-2xl transition-all duration-300 group">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-4xl font-bold text-[#002147] mb-2 group-hover:scale-110 transition-transform">{{ totalChurches }}</h3>
                  <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">TOTAL CHURCH</p>
                </div>
                <div class="p-3 bg-gradient-to-br from-[#002147]/10 to-[#002147]/5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-12 h-12 text-[#002147]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Establishment Card -->
            <div class="bg-gradient-to-br from-white to-[#f3f1ee] rounded-xl shadow-lg p-6 border-2 border-[#004595]/20 hover:border-[#004595] hover:shadow-2xl transition-all duration-300 group">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-4xl font-bold text-[#004595] mb-2 group-hover:scale-110 transition-transform">{{ totalEstablishments }}</h3>
                  <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">TOTAL ESTABLISHMENT</p>
                </div>
                <div class="p-3 bg-gradient-to-br from-[#004595]/10 to-[#004595]/5 rounded-lg group-hover:scale-110 transition-transform">
                  <svg class="w-12 h-12 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side Weather Card -->
          <div class="bg-gradient-to-br from-white to-[#f3f1ee] rounded-xl shadow-lg p-6 border-2 border-[#004595]/20 flex flex-col items-center justify-center hover:border-[#004595] hover:shadow-2xl transition-all duration-300 group">
            <h2 class="text-3xl font-bold text-[#002147] mb-4 group-hover:scale-105 transition-transform">Weather</h2>
            <div class="flex items-center justify-center mb-4">
              <!-- Sunny -->
              <svg v-if="weatherIcon === 'sunny'" class="w-20 h-20 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
              </svg>
              <!-- Cloudy -->
              <svg v-else-if="weatherIcon === 'cloudy'" class="w-20 h-20 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
              </svg>
              <!-- Rainy -->
              <svg v-else-if="weatherIcon === 'rainy'" class="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                <path d="M7 17v2m3-2v2m3-2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
              <!-- Stormy -->
              <svg v-else-if="weatherIcon === 'stormy'" class="w-20 h-20 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                <path d="M10 17l-2 3h1.5l-2 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <!-- Snowy -->
              <svg v-else-if="weatherIcon === 'snowy'" class="w-20 h-20 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                <circle cx="7" cy="18" r="0.5"/>
                <circle cx="10" cy="18" r="0.5"/>
                <circle cx="13" cy="18" r="0.5"/>
              </svg>
              <!-- Default Partly Cloudy -->
              <svg v-else class="w-20 h-20 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1z"/>
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" opacity="0.7"/>
              </svg>
            </div>
            <p class="text-2xl font-semibold text-[#004595] group-hover:scale-110 transition-transform">{{ currentTemperature }}°C</p>
            <p class="text-[#00397a] mt-2 font-medium">{{ weatherCondition }}</p>
          </div>
        </div>

        <!-- Barangay List -->
        <div class="bg-gradient-to-br from-white to-[#f3f1ee] rounded-xl shadow-lg p-6 border-2 border-[#004595]/20">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-gradient-to-br from-[#004595] to-[#00397a] rounded-lg shadow-md">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#002147]">List of Barangays</h3>
            </div>
            
            <!-- Search Bar -->
            <div class="relative w-full sm:w-80">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search barangay..."
                class="w-full pl-10 pr-4 py-2 border-2 border-[#004595]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004595] focus:border-[#004595] transition-all bg-white"
              />
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-64 overflow-y-auto">
            <div
              v-for="option in filteredBarangays"
              :key="option.value"
              class="relative p-4 bg-gradient-to-br from-white to-[#f3f1ee] rounded-lg border-2 border-[#004595]/20 hover:border-[#004595] hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
              @click="navigateToBarangay(option.value)"
            >
              <div class="relative z-10 text-center">
                <span class="text-sm font-semibold text-[#002147] group-hover:text-white transition-colors block">{{ option.label }}</span>
              </div>
              
              <!-- View More Overlay -->
              <div class="absolute inset-0 bg-gradient-to-br from-[#004595] to-[#00397a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div class="text-center">
                  <svg class="w-6 h-6 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p class="text-white font-semibold text-xs">View Community</p>
                </div>
              </div>
              
              <div
                class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#004595]/10 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"
              ></div>
            </div>
          </div>
          
          <div v-if="filteredBarangays.length === 0" class="text-center py-8 text-gray-500">
            <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="font-medium">No barangay found</p>
            <p class="text-sm">Try searching with a different keyword</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import headbk from '@/assets/landing.jpg'
import { supabase } from '@/lib/supabase'

const router = useRouter()

const barangayOptions = ref([])
const loading = ref(false)
const searchQuery = ref('')
const currentTemperature = ref('--')
const weatherCondition = ref('Loading...')
const weatherCode = ref(0)
const currentTimestamp = ref('')
let timestampInterval = null

// Notification state
const showNotifications = ref(false)
const notifications = ref([
  {
    type: 'info',
    title: 'System Update',
    message: 'Community monitoring dashboard has been updated',
    time: '5 minutes ago',
    read: false
  },
  {
    type: 'success',
    title: 'Data Synchronized',
    message: 'All barangay data has been successfully synchronized',
    time: '1 hour ago',
    read: false
  },
  {
    type: 'warning',
    title: 'Weather Alert',
    message: 'Rainy weather expected in the area',
    time: '2 hours ago',
    read: true
  }
])

const unreadNotifications = computed(() => {
  return notifications.value.filter(n => !n.read).length
})

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
}

const markAsRead = (index) => {
  notifications.value[index].read = true
}

const clearAllNotifications = () => {
  notifications.value = []
  showNotifications.value = false
}

const getNotificationIconBg = (type) => {
  if (type === 'info') return 'bg-blue-100'
  if (type === 'success') return 'bg-green-100'
  if (type === 'warning') return 'bg-yellow-100'
  return 'bg-gray-100'
}

const getNotificationIconColor = (type) => {
  if (type === 'info') return 'text-blue-600'
  if (type === 'success') return 'text-green-600'
  if (type === 'warning') return 'text-yellow-600'
  return 'text-gray-600'
}

const updateTimestamp = () => {
  const now = new Date()
  const formatter = new Intl.DateTimeFormat('en-PH', {
    dateStyle: 'full',
    timeStyle: 'medium'
  })
  currentTimestamp.value = formatter.format(now)
}

// Fetch weather data from Open-Meteo (free, no API key needed)
const fetchWeather = async () => {
  try {
    // Butuan City coordinates
    const latitude = 8.9475
    const longitude = 125.5406
    
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    )
    
    if (!response.ok) throw new Error('Failed to fetch weather data')
    
    const data = await response.json()
    currentTemperature.value = Math.round(data.current_weather.temperature)
    weatherCode.value = data.current_weather.weathercode
    
    // Map weather code to condition text
    weatherCondition.value = getWeatherCondition(weatherCode.value)
  } catch (error) {
    console.error('Error fetching weather:', error)
    currentTemperature.value = '28'
    weatherCondition.value = 'Sunny'
    weatherCode.value = 0
  }
}

// Convert weather code to readable condition
const getWeatherCondition = (code) => {
  if (code === 0) return 'Clear'
  if (code <= 3) return 'Partly Cloudy'
  if (code <= 48) return 'Cloudy'
  if (code <= 67) return 'Rainy'
  if (code <= 77) return 'Snowy'
  if (code <= 99) return 'Stormy'
  return 'Clear'
}

// Computed property for weather icon
const weatherIcon = computed(() => {
  const code = weatherCode.value
  if (code === 0) return 'sunny'
  if (code <= 3) return 'cloudy'
  if (code <= 48) return 'cloudy'
  if (code <= 67) return 'rainy'
  if (code <= 77) return 'snowy'
  if (code <= 99) return 'stormy'
  return 'sunny'
})

// Fetch barangays from Supabase
const fetchBarangays = async () => {
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('Barangays')
      .select('brgyname')
      .order('brgyname', { ascending: true })
    
    if (error) throw error
    
    if (data) {
      barangayOptions.value = data.map(item => {
        // Convert brgyname to kebab-case for value
        const value = item.brgyname
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '')
        
        return {
          value: value,
          label: item.brgyname
        }
      })
    }
  } catch (error) {
    console.error('Error fetching barangays:', error)
    alert('Failed to load barangays. Please refresh the page.')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBarangays()
  fetchWeather()
  updateTimestamp()
  timestampInterval = setInterval(updateTimestamp, 1000)
})

onUnmounted(() => {
  if (timestampInterval) {
    clearInterval(timestampInterval)
    timestampInterval = null
  }
})

// Computed totals
const totalBarangays = computed(() => barangayOptions.value.length)

const totalChurches = computed(() => {
  // 3 churches per barangay based on communityData structure
  return totalBarangays.value * 3
})

const totalSchools = computed(() => {
  // 3 schools per barangay based on communityData structure
  return totalBarangays.value * 3
})

const totalEstablishments = computed(() => {
  // 3 establishments per barangay based on communityData structure
  return totalBarangays.value * 3
})

// Filter barangays based on search query
const filteredBarangays = computed(() => {
  if (!searchQuery.value.trim()) {
    return barangayOptions.value
  }
  const query = searchQuery.value.toLowerCase().trim()
  return barangayOptions.value.filter(option => 
    option.label.toLowerCase().includes(query)
  )
})

// Navigate to community view for selected barangay
const navigateToBarangay = (barangayValue) => {
  router.push({
    name: 'community',
    params: { barangayName: barangayValue }
  })
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}

/* Ensure dropdown options are visible with proper styling */
select option {
  background-color: #002147;
  color: white;
  padding: 8px;
}

select option:hover {
  background-color: #004595;
}

select option:checked {
  background-color: #004595;
  font-weight: bold;
}

/* Line clamp utility */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
