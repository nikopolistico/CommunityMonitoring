<template>
<<<<<<< HEAD
  <div class="flex h-screen bg-[#f3f1ee] relative">
    <!-- Mobile Menu Button -->
    <button
      @click="sidebarOpen = !sidebarOpen"
      class="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#004595] text-white rounded-lg shadow-lg"
    >
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path
          v-if="!sidebarOpen"
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
        <path
          v-else
          fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Overlay for mobile -->
    <div
      v-if="sidebarOpen"
      @click="sidebarOpen = false"
      class="lg:hidden fixed inset-0 bg-black/50 z-30"
    ></div>

    <!-- Left Sidebar -->
    <aside
      :class="[
        'w-64 bg-linear-to-b from-[#002147] to-[#00397a] text-white flex flex-col shadow-2xl transition-transform duration-300 z-40',
        'lg:relative lg:translate-x-0',
        sidebarOpen
          ? 'fixed inset-y-0 left-0 translate-x-0'
          : 'fixed inset-y-0 left-0 -translate-x-full lg:translate-x-0',
      ]"
    >
      <!-- Officer Profile Section -->
      <div class="p-6 border-b border-white/10">
        <div class="flex flex-col items-center">
          <div
            class="w-24 h-24 bg-linear-to-br from-[#004595] to-[#00397a] rounded-full flex items-center justify-center mb-3 shadow-lg ring-4 ring-white/20 transition-transform hover:scale-105"
          >
            <svg class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="font-bold text-xl text-white">Officer Name</h3>
          <p class="text-[#e0e7ff] text-sm mt-1 font-medium">Badge #12345</p>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 p-4">
        <ul class="space-y-2">
          <li>
            <button
              @click="settingsOpen = false"
              :class="[
                'w-full group flex items-center p-3 rounded-xl transform hover:translate-x-1',
                !settingsOpen 
                  ? 'bg-white/10 hover:bg-white/20 border-l-4 border-[#004595] transition-all duration-300' 
                  : 'transition-none'
              ]"
            >
              <div
                :class="[
                  'p-2 rounded-lg mr-3',
                  !settingsOpen 
                    ? 'bg-white/10 group-hover:bg-white/20 transition-colors duration-300' 
                    : 'transition-none'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
              </div>
              <span class="font-semibold">Dashboard</span>
            </button>
          </li>
          <li>
            <router-link
              to="/calendar"
              @click="settingsOpen = false"
              :class="[
                'group flex items-center p-3 rounded-xl transform hover:translate-x-1',
                settingsOpen 
                  ? 'transition-none' 
                  : 'transition-all duration-300 router-link-active:bg-white/10 router-link-active:hover:bg-white/20 router-link-active:border-l-4 router-link-active:border-[#004595]'
              ]"
            >
              <div
                :class="[
                  'p-2 rounded-lg mr-3',
                  settingsOpen 
                    ? 'transition-none' 
                    : 'transition-colors duration-300 router-link-active:bg-white/10'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="font-semibold">Calendar</span>
            </router-link>
          </li>
          <li>
            <button
              @click="settingsOpen = true"
              :class="[
                'w-full group flex items-center p-3 rounded-xl transform hover:translate-x-1',
                settingsOpen 
                  ? 'bg-white/10 hover:bg-white/20 border-l-4 border-[#004595] transition-all duration-300' 
                  : 'transition-none'
              ]"
            >
              <div
                :class="[
                  'p-2 rounded-lg mr-3',
                  settingsOpen 
                    ? 'bg-white/10 group-hover:bg-white/20 transition-colors duration-300' 
                    : 'transition-none'
                ]"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="font-semibold">Settings</span>
            </button>
          </li>
        </ul>
      </nav>

      <!-- Logout Button -->
      <div class="p-4 border-t border-white/10">
        <button
          @click="showLogoutModal = true"
          class="w-full flex items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-white hover:text-[#002147] text-white border-2 border-white/30 hover:border-white transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clip-rule="evenodd"
            />
          </svg>
          Logout
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col">
      <!-- Top Header -->
=======
  <div class="flex-1 flex flex-col bg-[#f3f1ee]">
    <!-- Top Header -->
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd
      <header class="relative shadow-2xl overflow-hidden h-48">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${headbk})` }"
        ></div>
        <div class="absolute inset-0 bg-linear-to-r from-[#002147]/80 to-[#004595]/70"></div>

        <div class="relative z-10 p-4 lg:p-6">
          <div class="max-w-6xl mx-auto">
            <div class="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
              <div class="p-1.5 lg:p-2 bg-white/20 backdrop-blur-sm rounded-lg shrink-0">
                <svg
                  class="w-5 h-5 lg:w-8 lg:h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
              </div>
              <h1
                class="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight drop-shadow-lg"
              >
                Butuan City Police Station 1 Monitoring Dashboard
              </h1>
            </div>

            <p class="text-xs sm:text-sm text-[#e0e7ff] mb-2 lg:mb-3 lg:ml-14 font-medium">
              Community monitoring across 28 barangays
            </p>
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
            <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-[#004595] transition-all duration-300">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-4xl font-bold text-[#004595] mb-2">{{ totalBarangays }}</h3>
                  <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">TOTAL BARANGAYS</p>
                </div>
                <div class="p-3 bg-[#004595]/10 rounded-lg">
                  <svg class="w-12 h-12 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Schools Card -->
            <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-blue-500 transition-all duration-300">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-4xl font-bold text-blue-600 mb-2">{{ totalSchools }}</h3>
                  <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">TOTAL SCHOOLS</p>
                </div>
                <div class="p-3 bg-blue-100 rounded-lg">
                  <svg class="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Church Card -->
            <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-red-500 transition-all duration-300">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-4xl font-bold text-red-600 mb-2">{{ totalChurches }}</h3>
                  <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">TOTAL CHURCH</p>
                </div>
                <div class="p-3 bg-red-100 rounded-lg">
                  <svg class="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            <!-- Total Establishment Card -->
            <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 hover:border-green-500 transition-all duration-300">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="text-4xl font-bold text-green-600 mb-2">{{ totalEstablishments }}</h3>
                  <p class="text-sm text-gray-600 font-semibold uppercase tracking-wide">TOTAL ESTABLISHMENT</p>
                </div>
                <div class="p-3 bg-green-100 rounded-lg">
                  <svg class="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side Weather Card -->
          <div class="dashboard-card bg-white rounded-xl shadow-lg p-6 border-2 border-gray-100 flex flex-col items-center justify-center hover:border-rose-500 transition-all duration-300">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Weather</h2>
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
            <p class="text-2xl font-semibold text-gray-700">{{ currentTemperature }}°C</p>
            <p class="text-gray-500 mt-2">{{ weatherCondition }}</p>
          </div>
        </div>

        <!-- Barangay List -->
        <div class="dashboard-card bg-white rounded-xl shadow-lg p-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-linear-to-br from-[#004595] to-[#00397a] rounded-lg">
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
                class="w-full pl-10 pr-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004595] focus:border-transparent transition-all"
              />
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-64 overflow-y-auto">
            <div
              v-for="option in filteredBarangays"
              :key="option.value"
              class="p-3 bg-linear-to-r from-[#f3f1ee] to-gray-100 rounded-lg border-2 border-[#004595]/20 hover:border-[#004595] hover:shadow-md transition-all duration-200 cursor-pointer group"
              @click="navigateToBarangay(option.value)"
            >
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-[#004595] rounded-full group-hover:scale-125 transition-transform"></div>
                <span class="text-sm font-semibold text-gray-700 group-hover:text-[#004595]">{{ option.label }}</span>
              </div>
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
<<<<<<< HEAD
    </main>

    <!-- Settings Modal -->kua
    <div
      v-if="settingsOpen"
      @click.self="settingsOpen = false"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col"
      >
        <!-- Modal Header -->
        <div class="bg-gradient-to-r from-[#002147] to-[#004595] p-6 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white">Settings</h2>
          </div>
          <button
            @click="settingsOpen = false"
            class="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <!-- Modal Content -->
        <div class="flex-1 overflow-y-auto p-6">
          <!-- Tabs -->
          <div class="flex gap-2 mb-6 border-b-2 border-gray-200">
            <button
              @click="activeTab = 'faqs'"
              :class="[
                'px-6 py-3 font-semibold rounded-t-lg transition-all',
                activeTab === 'faqs'
                  ? 'bg-[#004595] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              ]"
            >
              FAQs
            </button>
            <button
              @click="activeTab = 'terms'"
              :class="[
                'px-6 py-3 font-semibold rounded-t-lg transition-all',
                activeTab === 'terms'
                  ? 'bg-[#004595] text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              ]"
            >
              Terms & Conditions
            </button>
          </div>

          <!-- FAQs Tab -->
          <div v-if="activeTab === 'faqs'" class="space-y-4">
            <h3 class="text-xl font-bold text-[#002147] mb-4">Frequently Asked Questions</h3>
            
            <div class="space-y-3">
              <div class="bg-[#f3f1ee] rounded-lg p-4">
                <h4 class="font-bold text-[#004595] mb-2">What is the Community Monitoring System?</h4>
                <p class="text-gray-700">
                  The Community Monitoring System is a comprehensive platform designed to help officers track and monitor community establishments, schools, churches, and other important locations across the 28 barangays of Butuan City.
                </p>
              </div>

              <div class="bg-[#f3f1ee] rounded-lg p-4">
                <h4 class="font-bold text-[#004595] mb-2">How do I select a barangay?</h4>
                <p class="text-gray-700">
                  Use the dropdown menu in the header section to select a barangay. Once selected, the map will display all monitored locations within that barangay.
                </p>
              </div>

              <div class="bg-[#f3f1ee] rounded-lg p-4">
                <h4 class="font-bold text-[#004595] mb-2">How do I view community information?</h4>
                <p class="text-gray-700">
                  Click on any marker on the map to see a preview. Then click the "View Community Info" button to see detailed information about that location including establishments, schools, and churches.
                </p>
              </div>

              <div class="bg-[#f3f1ee] rounded-lg p-4">
                <h4 class="font-bold text-[#004595] mb-2">Can I access the calendar view?</h4>
                <p class="text-gray-700">
                  Yes! Click on the "Calendar" option in the sidebar to view scheduled events and activities for community monitoring.
                </p>
              </div>

              <div class="bg-[#f3f1ee] rounded-lg p-4">
                <h4 class="font-bold text-[#004595] mb-2">Is my data secure?</h4>
                <p class="text-gray-700">
                  Yes, all data is securely stored and protected. Only authorized officers with valid credentials can access the system.
                </p>
              </div>

              <div class="bg-[#f3f1ee] rounded-lg p-4">
                <h4 class="font-bold text-[#004595] mb-2">What browsers are supported?</h4>
                <p class="text-gray-700">
                  The system works best on modern browsers including Google Chrome, Mozilla Firefox, Microsoft Edge, and Safari. Please ensure your browser is up to date.
                </p>
              </div>
            </div>
          </div>

          <!-- Terms Tab -->
          <div v-if="activeTab === 'terms'" class="space-y-4">
            <h3 class="text-xl font-bold text-[#002147] mb-4">Terms and Conditions</h3>
            
            <div class="space-y-4 text-gray-700">
              <div>
                <h4 class="font-bold text-[#004595] mb-2">1. Acceptance of Terms</h4>
                <p>
                  By accessing and using the Butuan City Community Monitoring System, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">2. User Responsibilities</h4>
                <p>
                  Users are responsible for maintaining the confidentiality of their login credentials. Officers must ensure that all information entered into the system is accurate and up-to-date. Unauthorized access or misuse of the system is strictly prohibited.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">3. Data Privacy</h4>
                <p>
                  We are committed to protecting your privacy. All personal and community data collected through this system will be handled in accordance with the Data Privacy Act of 2012 (Republic Act No. 10173). Information will only be used for official monitoring and reporting purposes.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">4. Authorized Use</h4>
                <p>
                  This system is exclusively for authorized officers of Butuan City. Access is granted solely for official community monitoring purposes. Any attempt to use the system for personal gain or unauthorized purposes will result in immediate account suspension and possible legal action.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">5. Data Accuracy</h4>
                <p>
                  While we strive to maintain accurate and current information, the system administrators do not guarantee the absolute accuracy of all data. Officers should verify critical information through official channels when necessary.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">6. System Availability</h4>
                <p>
                  We aim to provide continuous access to the system. However, we reserve the right to suspend or terminate access for maintenance, updates, or security reasons. Users will be notified of scheduled maintenance when possible.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">7. Prohibited Activities</h4>
                <p>
                  Users must not: (a) attempt to gain unauthorized access to the system, (b) interfere with the proper functioning of the system, (c) share login credentials with unauthorized individuals, (d) use the system for any illegal purpose, or (e) extract or copy data for unauthorized distribution.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">8. Modifications to Terms</h4>
                <p>
                  These terms and conditions may be updated from time to time. Users will be notified of any significant changes. Continued use of the system after modifications constitutes acceptance of the updated terms.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">9. Limitation of Liability</h4>
                <p>
                  The Butuan City government and system administrators shall not be held liable for any direct or indirect damages resulting from the use or inability to use this system, including but not limited to data loss, system errors, or service interruptions.
                </p>
              </div>

              <div>
                <h4 class="font-bold text-[#004595] mb-2">10. Contact Information</h4>
                <p>
                  For questions, concerns, or technical support regarding these terms or the system, please contact the Butuan City Community Monitoring Office through official channels.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal Footer -->
        <div class="border-t border-gray-200 p-6 bg-gray-50">
          <button
            @click="settingsOpen = false"
            class="w-full bg-[#004595] hover:bg-[#00397a] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Logout Confirmation Modal -->
    <Transition name="modal-fade">
      <div
        v-if="showLogoutModal"
        @click.self="showLogoutModal = false"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <Transition name="modal-scale">
          <div
            v-if="showLogoutModal"
            class="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden relative"
          >
            <!-- Modal Header with Icon -->
            <div class="bg-gradient-to-br from-[#002147] to-[#004595] p-6 text-center relative">
              <!-- Decorative circles -->
              <div class="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10"></div>
              <div class="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full -ml-8 -mb-8"></div>
              
              <div class="relative">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-3 animate-pulse">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <h2 class="text-xl font-bold text-white mb-1">Logout Confirmation</h2>
                <p class="text-white/80 text-sm">End your session?</p>
              </div>
            </div>

            <!-- Modal Content -->
            <div class="p-6">
              <!-- Loading State Overlay -->
              <div
                v-if="isLoggingOut"
                class="absolute inset-0 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center z-10 rounded-2xl"
              >
                <div class="text-center">
                  <!-- Animated Spinner -->
                  <div class="relative w-16 h-16 mx-auto mb-4">
                    <div class="absolute inset-0 border-4 border-[#f3f1ee] rounded-full"></div>
                    <div class="absolute inset-0 border-4 border-[#004595] rounded-full border-t-transparent animate-spin"></div>
                  </div>
                  
                  <!-- Loading Text with Animation -->
                  <p class="text-[#002147] font-semibold text-lg mb-1 animate-pulse">
                    Logging out
                  </p>
                  <p class="text-gray-500 text-sm">
                    Please wait...
                  </p>
                </div>
              </div>

              <p class="text-center text-gray-600 text-sm mb-6">
                You're about to logout from your account. You'll need to sign in again to access the dashboard.
              </p>

              <!-- Action Buttons -->
              <div class="flex gap-3">
                <button
                  @click="showLogoutModal = false"
                  :disabled="isLoggingOut"
                  class="flex-1 px-4 py-2.5 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Cancel
                </button>
                <button
                  @click="handleLogout"
                  :disabled="isLoggingOut"
                  class="flex-1 px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#002147] to-[#004595] text-white font-semibold hover:from-[#00397a] hover:to-[#002147] transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:opacity-90 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
=======
    </div>
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import headbk from '@/assets/landing.jpg'
import { supabase } from '@/lib/supabase'

const router = useRouter()
<<<<<<< HEAD
const googleApiKey = 'AIzaSyDqcnq11WukBkYCzu13zloxQi_YjUpsA14'
const defaultCenter = { lat: 8.9475, lng: 125.5279 }
const sidebarOpen = ref(false)
const settingsOpen = ref(false)
const activeTab = ref('faqs')
const showLogoutModal = ref(false)
const isLoggingOut = ref(false)
=======
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd

const barangayOptions = ref([])
const loading = ref(false)
const searchQuery = ref('')
const currentTemperature = ref('--')
const weatherCondition = ref('Loading...')
const weatherCode = ref(0)

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
})

<<<<<<< HEAD
const handleLogout = async () => {
  isLoggingOut.value = true
  
  try {
    // Add a small delay for better UX (showing loading state)
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Sign out from Supabase
    const { error } = await supabase.auth.signOut()
    
    if (error) {
      console.error('Error logging out:', error)
      alert('An error occurred while logging out. Please try again.')
      isLoggingOut.value = false
      return
    }
    
    // Redirect to login page
    router.push({ name: 'login' })
  } catch (error) {
    console.error('Unexpected error during logout:', error)
    alert('An unexpected error occurred. Please try again.')
    isLoggingOut.value = false
  }
}

const viewCommunity = (location) => {
  if (!selectedBarangay.value) {
    return
  }
=======
// Computed totals
const totalBarangays = computed(() => barangayOptions.value.length)
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd

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
    name: 'CommunityView',
    params: { barangayName: barangayValue }
  })
}
</script>

<style scoped>
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

<<<<<<< HEAD
/* Modal Fade Transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Modal Scale Transition */
.modal-scale-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal-scale-leave-active {
  transition: all 0.2s ease-in;
}

.modal-scale-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}

.modal-scale-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(10px);
}
</style>
=======
.dashboard-card {
  position: relative;
  overflow: hidden;
  animation: card-fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

.dashboard-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(1200px circle at -10% -20%, rgba(0, 69, 149, 0.08), transparent 45%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.dashboard-card:hover {
  transform: translateY(-6px) scale(1.01);
  box-shadow: 0 24px 40px -20px rgba(0, 0, 0, 0.35);
}

.dashboard-card:hover::after {
  opacity: 1;
}

.dashboard-card:nth-of-type(1) { animation-delay: 0.05s; }
.dashboard-card:nth-of-type(2) { animation-delay: 0.1s; }
.dashboard-card:nth-of-type(3) { animation-delay: 0.15s; }
.dashboard-card:nth-of-type(4) { animation-delay: 0.2s; }
.dashboard-card:nth-of-type(5) { animation-delay: 0.25s; }
.dashboard-card:nth-of-type(6) { animation-delay: 0.3s; }

@keyframes card-fade-up {
  from {
    opacity: 0;
    transform: translateY(14px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .dashboard-card {
    animation: none;
  }

  .dashboard-card:hover {
    transform: none;
  }
}
</style>
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd
