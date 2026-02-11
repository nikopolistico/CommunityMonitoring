<template>
  <div class="flex-1 flex flex-col bg-[#f3f1ee]">
    <!-- Top Header -->
      <header class="relative shadow-2xl overflow-hidden h-48">
        <div
          class="absolute inset-0 bg-cover bg-center" 
          :style="{ backgroundImage: `url(${headbk})` }"
        ></div>
        <div class="absolute inset-0 bg-gradient-to-r from-[#002147]/40 to-[#004595]/30"></div>

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
                </div>

                <!-- Date and Time -->
                <div class="flex flex-col gap-1 px-5 py-2.5 rounded-xl bg-white/15 backdrop-blur-md shadow-lg border border-white/25 hover:bg-white/20 transition-all duration-300">
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                    </svg>
                    <p class="text-xs font-semibold text-white/90 tracking-wide">
                      {{ currentDate }}
                    </p>
                  </div>
                  <div class="flex items-center gap-2">
                    <svg class="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V5a.75.75 0 10-1.5 0v4.5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06l-2.78-2.72z" clip-rule="evenodd"/>
                    </svg>
                    <p class="text-sm font-bold text-white tracking-wider">
                      {{ currentTime }}
                    </p>
                  </div>
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
            <div class="relative bg-white rounded-xl shadow-lg p-6 border border-[#004595]/10 hover:border-[#004595]/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[#004595]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-[#00397a]/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="relative z-10 flex items-start justify-between">
                <div>
                  <h3 class="text-5xl font-extrabold text-[#002147] mb-2 group-hover:scale-105 transition-transform">{{ totalBarangays }}</h3>
                  <p class="text-sm text-[#00397a] font-semibold uppercase tracking-wide">Total Barangays</p>
                </div>
                <div class="flex items-center justify-center w-14 h-14 bg-[#004595]/10 rounded-lg group-hover:bg-[#004595]/20 transition-all duration-300">
                  <svg class="w-7 h-7 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Schools Card -->
            <div class="relative bg-white rounded-xl shadow-lg p-6 border border-[#004595]/10 hover:border-[#004595]/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[#00397a]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-[#004595]/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="relative z-10 flex items-start justify-between">
                <div>
                  <h3 class="text-5xl font-extrabold text-[#002147] mb-2 group-hover:scale-105 transition-transform">{{ totalSchools }}</h3>
                  <p class="text-sm text-[#00397a] font-semibold uppercase tracking-wide">Total Schools</p>
                </div>
                <div class="flex items-center justify-center w-14 h-14 bg-[#00397a]/10 rounded-lg group-hover:bg-[#00397a]/20 transition-all duration-300">
                  <svg class="w-7 h-7 text-[#00397a]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Church Card -->
            <div class="relative bg-white rounded-xl shadow-lg p-6 border border-[#004595]/10 hover:border-[#004595]/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[#002147]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-[#004595]/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="relative z-10 flex items-start justify-between">
                <div>
                  <h3 class="text-5xl font-extrabold text-[#002147] mb-2 group-hover:scale-105 transition-transform">{{ totalChurches }}</h3>
                  <p class="text-sm text-[#00397a] font-semibold uppercase tracking-wide">Total Churches</p>
                </div>
                <div class="flex items-center justify-center w-14 h-14 bg-[#002147]/10 rounded-lg group-hover:bg-[#002147]/20 transition-all duration-300">
                  <svg class="w-7 h-7 text-[#002147]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Establishment Card -->
            <div class="relative bg-white rounded-xl shadow-lg p-6 border border-[#004595]/10 hover:border-[#004595]/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <div class="absolute top-0 right-0 w-32 h-32 bg-[#004595]/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="absolute bottom-0 left-0 w-24 h-24 bg-[#002147]/5 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"></div>
              <div class="relative z-10 flex items-start justify-between">
                <div>
                  <h3 class="text-5xl font-extrabold text-[#002147] mb-2 group-hover:scale-105 transition-transform">{{ totalEstablishments }}</h3>
                  <p class="text-sm text-[#00397a] font-semibold uppercase tracking-wide">Total Establishments</p>
                </div>
                <div class="flex items-center justify-center w-14 h-14 bg-[#004595]/10 rounded-lg group-hover:bg-[#004595]/20 transition-all duration-300">
                  <svg class="w-7 h-7 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side Weather Card -->
          <div class="relative bg-white rounded-xl shadow-lg p-6 border border-[#004595]/10 flex flex-col items-center justify-center hover:border-[#004595]/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
            <div class="absolute top-0 right-0 w-40 h-40 bg-[#004595]/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="absolute bottom-0 left-0 w-32 h-32 bg-[#00397a]/5 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500"></div>
            <div class="relative z-10 w-full">
              <h2 class="text-3xl font-bold text-[#002147] mb-4 text-center group-hover:scale-105 transition-transform">Weather</h2>
              <div class="flex items-center justify-center mb-4">
                <!-- Sunny -->
                <div v-if="weatherIcon === 'sunny'" class="relative">
                  <svg class="w-20 h-20 text-yellow-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <!-- Cloudy -->
                <svg v-else-if="weatherIcon === 'cloudy'" class="w-20 h-20 text-gray-400 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                </svg>
                <!-- Rainy -->
                <div v-else-if="weatherIcon === 'rainy'" class="relative">
                  <svg class="w-20 h-20 text-blue-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                    <path d="M7 17v2m3-2v2m3-2v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </div>
                <!-- Stormy -->
                <svg v-else-if="weatherIcon === 'stormy'" class="w-20 h-20 text-[#002147] drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                  <path d="M10 17l-2 3h1.5l-2 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <!-- Snowy -->
                <svg v-else-if="weatherIcon === 'snowy'" class="w-20 h-20 text-cyan-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                  <circle cx="7" cy="18" r="0.5"/>
                  <circle cx="10" cy="18" r="0.5"/>
                  <circle cx="13" cy="18" r="0.5"/>
                </svg>
                <!-- Default Partly Cloudy -->
                <svg v-else class="w-20 h-20 text-gray-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1z"/>
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" opacity="0.7"/>
                </svg>
              </div>
              <div class="text-center">
                <p class="text-4xl font-extrabold text-[#002147] group-hover:scale-105 transition-transform mb-2">{{ currentTemperature }}°C</p>
                <p class="text-[#00397a] font-semibold text-base">{{ weatherCondition }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Barangay List -->
        <div class="relative bg-white rounded-xl shadow-lg p-6 border border-[#004595]/10 overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-[#004595]/5 rounded-full -mr-32 -mt-32"></div>
          <div class="absolute bottom-0 left-0 w-48 h-48 bg-[#00397a]/5 rounded-full -ml-24 -mb-24"></div>
          
          <div class="relative z-10">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
              <div class="flex items-center gap-3">
                <div class="flex items-center justify-center w-12 h-12 bg-[#004595]/10 rounded-lg">
                  <svg class="w-6 h-6 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                    <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-[#002147]">List of Barangays</h3>
              </div>
              
              <!-- Search Bar -->
              <div class="relative w-full sm:w-96">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-[#00397a]/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search barangay..."
                  class="w-full pl-10 pr-4 py-2.5 border border-[#004595]/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004595]/30 focus:border-[#004595] transition-all bg-[#f3f1ee]/30 text-[#002147] placeholder-[#00397a]/50"
                />
              </div>
            </div>
            
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 max-h-80 overflow-y-auto pr-2">
              <div
                v-for="option in filteredBarangays"
                :key="option.value"
                class="relative group"
                @click="navigateToBarangay(option.value)"
              >
                <div class="relative p-4 bg-gradient-to-br from-white to-[#f3f1ee] rounded-lg border border-[#004595]/10 hover:border-[#004595] hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col items-center justify-center min-h-[100px]">
                  <!-- Decorative Circle -->
                  <div class="absolute top-0 right-0 w-16 h-16 bg-[#004595]/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 group-hover:bg-[#004595]/10 transition-all duration-500"></div>
                  
                  <!-- Icon -->
                  <div class="relative z-10 mb-2">
                    <div class="flex items-center justify-center w-10 h-10 bg-[#004595]/10 rounded-lg group-hover:bg-[#004595] group-hover:scale-110 transition-all duration-300">
                      <svg class="w-5 h-5 text-[#004595] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  
                  <!-- Text -->
                  <div class="relative z-10 text-center">
                    <span class="text-xs font-semibold text-[#002147] group-hover:text-[#004595] transition-colors duration-300 block leading-tight">{{ option.label }}</span>
                  </div>
                  
                  <!-- Hover Indicator -->
                  <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#004595] via-[#00397a] to-[#002147] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-lg"></div>
                </div>
              </div>
            </div>
            
            <div v-if="filteredBarangays.length === 0" class="text-center py-12">
              <div class="inline-flex items-center justify-center w-16 h-16 bg-[#004595]/10 rounded-full mb-4">
                <svg class="w-8 h-8 text-[#00397a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <p class="font-semibold text-[#002147]">No barangay found</p>
              <p class="text-sm text-[#00397a] mt-1">Try searching with a different keyword</p>
            </div>
          </div>
        </div>
      </div>

    <!-- Full Screen Notification Modal -->
    <transition name="modal-fade">
      <div 
        v-if="showNotifications" 
        class="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click="closeNotificationModal"
      >
        <div 
          class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden transform transition-all animate-modal-slide"
          @click.stop
        >
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-5 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-white/20 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-xl font-bold text-white">Notifications</h2>
                <p class="text-xs text-white/80">Fiestas, Events & Reminders</p>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <span class="bg-white/20 px-3 py-1.5 rounded-full text-white text-sm font-bold">
                {{ notifications.length }} Total
              </span>
              <button 
                @click="closeNotificationModal"
                class="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="overflow-y-auto max-h-[calc(85vh-180px)] p-6">
            <!-- Empty State -->
            <div v-if="notifications.length === 0" class="text-center py-16">
              <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#004595]/10 to-[#002147]/10 rounded-full mb-6">
                <svg class="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-800 mb-2">No Notifications</h3>
              <p class="text-gray-500">You're all caught up! No fiestas or events scheduled.</p>
            </div>

            <!-- Notifications Grid -->
            <div v-else class="space-y-4">
              <div 
                v-for="(notification, index) in notifications" 
                :key="index"
                class="notification-card bg-gradient-to-br from-white to-[#f3f1ee] rounded-xl p-5 border-2 transition-all duration-300 cursor-pointer hover:shadow-xl"
                :class="[
                  !notification.read ? 'border-[#004595] shadow-lg' : 'border-gray-200 hover:border-[#004595]',
                  getNotificationCardClass(notification.type)
                ]"
                @click="markAsRead(index)"
              >
                <div class="flex items-start gap-4">
                  <!-- Icon -->
                  <div class="flex-shrink-0">
                    <div class="p-3 rounded-xl" :class="getNotificationIconBg(notification.type)">
                      <svg class="w-7 h-7" :class="getNotificationIconColor(notification.type)" fill="currentColor" viewBox="0 0 20 20">
                        <path v-if="notification.type === 'fiesta'" d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"/>
                        <path v-else-if="notification.type === 'info'" fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                        <path v-else-if="notification.type === 'success'" fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        <path v-else-if="notification.type === 'warning'" fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                        <path v-else fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-3 mb-2">
                      <h3 class="text-lg font-bold text-gray-800">{{ notification.title }}</h3>
                      <span v-if="!notification.read" class="flex-shrink-0">
                        <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#004595] text-white animate-pulse">
                          NEW
                        </span>
                      </span>
                    </div>
                    <p class="text-base text-gray-700 mb-3 leading-relaxed">{{ notification.message }}</p>
                    
                    <!-- Additional Details -->
                    <div v-if="notification.data" class="bg-white/60 rounded-lg p-3 mb-3 border border-gray-200">
                      <div v-if="notification.type === 'fiesta'" class="space-y-2">
                        <div class="flex items-center gap-2 text-sm">
                          <svg class="w-4 h-4 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                          </svg>
                          <span class="font-semibold text-gray-700">Barangay:</span>
                          <span class="text-gray-600">{{ notification.data.brgyname }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                          <svg class="w-4 h-4 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"/>
                          </svg>
                          <span class="font-semibold text-gray-700">Patron Saint:</span>
                          <span class="text-gray-600">{{ notification.data.patron }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                          <svg class="w-4 h-4 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                          </svg>
                          <span class="font-semibold text-gray-700">Date:</span>
                          <span class="text-gray-600">{{ notification.data.date }}</span>
                        </div>
                      </div>
                      <div v-else-if="notification.type === 'success'" class="space-y-2">
                        <div class="flex items-center gap-2 text-sm">
                          <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                          </svg>
                          <span class="font-semibold text-gray-700">Event:</span>
                          <span class="text-gray-600">{{ notification.data.title || notification.data.description }}</span>
                        </div>
                        <div v-if="notification.data.event_time" class="flex items-center gap-2 text-sm">
                          <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V5a.75.75 0 10-1.5 0v4.5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06l-2.78-2.72z" clip-rule="evenodd"/>
                          </svg>
                          <span class="font-semibold text-gray-700">Time:</span>
                          <span class="text-gray-600">{{ notification.data.event_time }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Time Badge -->
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V5a.75.75 0 10-1.5 0v4.5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06l-2.78-2.72z" clip-rule="evenodd"/>
                      </svg>
                      <span class="font-medium">{{ notification.time }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="bg-gradient-to-r from-[#f3f1ee] to-white px-6 py-4 border-t-2 border-gray-200 flex items-center justify-between">
            <p class="text-sm text-gray-600">
              <span class="font-semibold">{{ unreadNotifications }}</span> unread notifications
            </p>
            <div class="flex gap-3">
              <button 
                @click="clearAllNotifications" 
                class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
              >
                Clear All
              </button>
              <button 
                @click="closeNotificationModal" 
                class="px-5 py-2 bg-gradient-to-r from-[#004595] to-[#002147] hover:from-[#00397a] hover:to-[#004595] text-white rounded-lg font-semibold transition-all shadow-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
const currentDate = ref('')
const currentTime = ref('')
let timestampInterval = null

// Notification state
const showNotifications = ref(false)
const notifications = ref([])
const eventsData = ref([])
const fiestaData = ref([])

const unreadNotifications = computed(() => {
  return notifications.value.filter(n => !n.read).length
})

// Generate notifications from real events and fiestas
const generateNotifications = () => {
  const newNotifications = []
  const today = new Date()
  const todayStr = formatLocalDate(today)
  
  // Get today's events
  const todayEvents = eventsData.value.filter(event => {
    const eventDate = normalizeDateStr(event.event_date)
    return eventDate === todayStr && !event.status
  })
  
  // Get today's fiestas
  const todayFiestas = fiestaData.value.filter(fiesta => {
    const fiestaDate = convertTextDateToISO(fiesta.date)
    return fiestaDate === todayStr
  })
  
  // Get upcoming fiestas (within next 7 days)
  const upcomingFiestas = fiestaData.value.filter(fiesta => {
    const fiestaDate = convertTextDateToISO(fiesta.date)
    if (!fiestaDate) return false
    
    const fDate = new Date(fiestaDate)
    const diffDays = Math.ceil((fDate - today) / (1000 * 60 * 60 * 24))
    return diffDays > 0 && diffDays <= 7
  })
  
  // Add fiesta notifications (today)
  todayFiestas.forEach(fiesta => {
    newNotifications.push({
      type: 'fiesta',
      title: `🎉 Barangay Fiesta Today!`,
      message: `${fiesta.brgyname} - Celebrating ${fiesta.patron}`,
      time: 'Today',
      read: false,
      data: fiesta
    })
  })
  
  // Add upcoming fiesta notifications
  upcomingFiestas.forEach(fiesta => {
    const fiestaDate = new Date(convertTextDateToISO(fiesta.date))
    const diffDays = Math.ceil((fiestaDate - today) / (1000 * 60 * 60 * 24))
    
    newNotifications.push({
      type: 'info',
      title: `📅 Upcoming Fiesta`,
      message: `${fiesta.brgyname} - ${fiesta.patron} in ${diffDays} day${diffDays > 1 ? 's' : ''}`,
      time: `${diffDays} day${diffDays > 1 ? 's' : ''} from now`,
      read: false,
      data: fiesta
    })
  })
  
  // Add event notifications (today)
  todayEvents.forEach(event => {
    const brgyName = getBarangayLabel(event.brgy_id)
    const timeStr = event.event_time ? ` at ${event.event_time}` : ''
    
    newNotifications.push({
      type: 'success',
      title: `📌 Event Today${timeStr}`,
      message: `${brgyName} - ${event.title || event.description}`,
      time: event.event_time || 'Today',
      read: false,
      data: event
    })
  })
  
  // Sort by priority (today's fiestas first, then today's events, then upcoming fiestas)
  newNotifications.sort((a, b) => {
    if (a.type === 'fiesta' && b.type !== 'fiesta') return -1
    if (a.type !== 'fiesta' && b.type === 'fiesta') return 1
    if (a.type === 'success' && b.type === 'info') return -1
    if (a.type === 'info' && b.type === 'success') return 1
    return 0
  })
  
  notifications.value = newNotifications
}

// Format date helper functions
const formatLocalDate = (date) => {
  if (!(date instanceof Date)) return ''
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const normalizeDateStr = (value) => {
  if (!value) return ''
  if (typeof value === 'string') return value.split('T')[0]
  try {
    return formatLocalDate(new Date(value))
  } catch {
    return ''
  }
}

const convertTextDateToISO = (textDate) => {
  if (!textDate) return ''
  try {
    const currentYear = new Date().getFullYear()
    const dateStr = `${textDate} ${currentYear}`
    const date = new Date(dateStr)
    
    if (isNaN(date.getTime())) return ''
    
    return formatLocalDate(date)
  } catch {
    return ''
  }
}

const getBarangayLabel = (brgyId) => {
  const match = barangayOptions.value.find((item) => item.id === brgyId)
  return match ? match.label : 'Unknown Barangay'
}

const toggleNotifications = () => {
  showNotifications.value = !showNotifications.value
}

const closeNotificationModal = () => {
  showNotifications.value = false
}

const markAsRead = (index) => {
  notifications.value[index].read = true
}

const clearAllNotifications = () => {
  notifications.value = []
  showNotifications.value = false
}

const getNotificationCardClass = (type) => {
  if (type === 'fiesta') return 'notification-fiesta'
  if (type === 'success') return 'notification-event'
  if (type === 'info') return 'notification-info'
  return ''
}

const getNotificationIconBg = (type) => {
  if (type === 'fiesta') return 'bg-[#004595]/10'
  if (type === 'info') return 'bg-blue-100'
  if (type === 'success') return 'bg-green-100'
  if (type === 'warning') return 'bg-yellow-100'
  return 'bg-gray-100'
}

const getNotificationIconColor = (type) => {
  if (type === 'fiesta') return 'text-[#004595]'
  if (type === 'info') return 'text-blue-600'
  if (type === 'success') return 'text-green-600'
  if (type === 'warning') return 'text-yellow-600'
  return 'text-gray-600'
}

const updateTimestamp = () => {
  const now = new Date()
  
  // Format date
  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
  currentDate.value = dateFormatter.format(now)
  
  // Format time
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
  currentTime.value = timeFormatter.format(now)
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
      .select('id, brgyname')
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
          id: item.id,
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

// Fetch events from Supabase
const fetchEvents = async () => {
  try {
    const { data, error } = await supabase
      .from('BrgyEvents')
      .select('id, brgy_id, title, description, event_date, event_time, status')
      .order('event_date', { ascending: true })
    
    if (error) throw error
    eventsData.value = data || []
    generateNotifications()
  } catch (error) {
    console.error('Error fetching events:', error)
  }
}

// Fetch fiestas from Supabase
const fetchFiestas = async () => {
  try {
    const { data, error } = await supabase
      .rpc('brgyfiesta')
    
    if (error) throw error
    fiestaData.value = data || []
    generateNotifications()
  } catch (error) {
    console.error('Error fetching fiestas:', error)
  }
}

onMounted(() => {
  fetchBarangays()
  fetchEvents()
  fetchFiestas()
  fetchWeather()
  updateTimestamp()
  timestampInterval = setInterval(updateTimestamp, 1000)
  
  // Refresh notifications every 5 minutes
  setInterval(() => {
    fetchEvents()
    fetchFiestas()
  }, 300000)
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
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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
    transform: translateY(-30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-modal-slide {
  animation: modal-slide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Notification Card Styles */
.notification-card {
  position: relative;
  overflow: hidden;
}

.notification-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.notification-card:hover::before {
  left: 100%;
}

.notification-fiesta {
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
}

.notification-event {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
}

.notification-info {
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
}

/* Scrollbar Styling */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f3f1ee;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #004595, #00397a);
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #00397a, #002147);
}

/* Clean Card Hover */
.group:hover {
  transform: translateY(-2px);
}
</style>
