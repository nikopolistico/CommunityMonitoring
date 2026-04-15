<template>
  <div class="flex-1 flex flex-col bg-[#f3f1ee] dark:bg-gray-900">
    <!-- Top Header -->
    <header class="relative shadow-2xl overflow-hidden h-32 sm:h-40 md:h-44 lg:h-48">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${headbk})` }"
      ></div>
      <div class="absolute inset-0 bg-linear-to-r from-[#002147]/40 to-[#004595]/30"></div>

      <div class="relative z-10 p-3 sm:p-4 md:p-5 lg:p-6">
        <div class="max-w-6xl mx-auto">
          <!-- Top Row: Title and Notification -->
          <div class="flex items-start justify-between gap-2 sm:gap-3 md:gap-4 mb-3">
            <div class="mt-2 sm:mt-4 md:mt-6 lg:mt-8">
              <div class="flex items-center gap-1.5 sm:gap-2 lg:gap-3 mb-1 sm:mb-2 lg:mb-3">
                <h1
                  class="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight drop-shadow-lg"
                >
                  {{ t('policeStationTitle') }}
                </h1>
              </div>

              <div>
                <p
                  class="text-xs sm:text-sm md:text-base lg:text-lg text-[#e0e7ff] mb-1 ms-4 sm:ms-6 md:ms-8 lg:ms-9 font-medium"
                >
                  {{ t('communityMonitoring') }}
                </p>
              </div>
            </div>

            <!-- Notification Bell and Date/Time (Desktop) -->
            <div class="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
              <!-- Notification Bell -->
              <div class="relative">
                <button
                  @click="toggleNotifications"
                  class="relative p-1.5 sm:p-2 md:p-2.5 rounded-full bg-white/20 backdrop-blur-md shadow-lg border border-white/30 hover:bg-white/30 transition-all duration-300 group"
                >
                  <svg
                    class="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                    />
                  </svg>
                  <!-- Notification Badge -->
                  <span
                    v-if="unreadNotifications > 0"
                    class="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-red-500 text-white text-[9px] sm:text-[10px] font-bold border border-white shadow-md animate-pulse"
                  >
                    {{ unreadNotifications }}
                  </span>
                </button>
              </div>

              <!-- Date and Time (Desktop Only) -->
              <div
                class="hidden lg:flex items-center gap-4 lg:gap-6 px-5 py-3 lg:px-7 lg:py-4 rounded-xl bg-white/15 backdrop-blur-md shadow-lg border border-white/25 hover:bg-white/20 transition-all duration-300"
              >
                <div class="flex items-center gap-2.5">
                  <svg class="w-6 h-6 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="text-base font-bold text-white/95 tracking-wide">
                    {{ currentDate }}
                  </p>
                </div>
                <div class="h-8 w-px bg-white/30"></div>
                <div class="flex items-center gap-2.5">
                  <svg class="w-6 h-6 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V5a.75.75 0 10-1.5 0v4.5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06l-2.78-2.72z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <p class="text-lg font-extrabold text-white tracking-wider">
                    {{ currentTime }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Bottom Row: Date and Time (Mobile Only) -->
          <div class="lg:hidden flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
            <div
              class="flex items-center gap-2 sm:gap-3 md:gap-4 px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-lg md:rounded-xl bg-white/15 backdrop-blur-md shadow-lg border border-white/25 hover:bg-white/20 transition-all duration-300"
            >
              <div class="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="text-xs sm:text-sm md:text-base font-bold text-white/95 tracking-wide">
                  {{ currentDate }}
                </p>
              </div>
              <div class="h-6 sm:h-7 md:h-8 w-px bg-white/30"></div>
              <div class="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white/90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V5a.75.75 0 10-1.5 0v4.5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06l-2.78-2.72z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p class="text-sm sm:text-base md:text-lg font-extrabold text-white tracking-wider">
                  {{ currentTime }}
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
        <div class="lg:col-span-2 grid grid-cols-2 gap-2">
          <!-- Total Barangays Card -->
          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 border border-[#004595]/10 dark:border-gray-700 hover:border-[#004595]/30 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 group overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-[#004595]/5 dark:bg-blue-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-24 h-24 bg-[#00397a]/5 dark:bg-blue-400/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-10 flex items-start justify-between">
              <div>
                <h3
                  class="text-2xl font-extrabold text-[#002147] dark:text-white mb-1 group-hover:scale-105 transition-transform"
                >
                  {{ totalBarangays }}
                </h3>
                <p
                  class="text-sm text-[#00397a] dark:text-gray-300 font-semibold uppercase tracking-wide"
                >
                  {{ t('totalBarangays') }}
                </p>
              </div>
              <div
                class="flex items-center justify-center w-10 h-10 bg-linear-to-br from-purple-100 to-purple-50 rounded-lg group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Total Schools Card -->
          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 border border-[#004595]/10 dark:border-gray-700 hover:border-[#004595]/30 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 group overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-[#00397a]/5 dark:bg-emerald-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-24 h-24 bg-[#004595]/5 dark:bg-emerald-400/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-10 flex items-start justify-between">
              <div>
                <h3
                  class="text-2xl font-extrabold text-[#002147] dark:text-white mb-1 group-hover:scale-105 transition-transform"
                >
                  {{ totalSchools }}
                </h3>
                <p
                  class="text-sm text-[#00397a] dark:text-gray-300 font-semibold uppercase tracking-wide"
                >
                  {{ t('totalSchools') }}
                </p>
              </div>
              <div
                class="flex items-center justify-center w-10 h-10 bg-linear-to-br from-emerald-100 to-emerald-50 rounded-lg group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
            </div>
          </div>

          <!-- Total Church Card -->
          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 border border-[#004595]/10 dark:border-gray-700 hover:border-[#004595]/30 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 group overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-[#002147]/5 dark:bg-rose-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-24 h-24 bg-[#004595]/5 dark:bg-rose-400/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-10 flex items-start justify-between">
              <div>
                <h3
                  class="text-2xl font-extrabold text-[#002147] dark:text-white mb-1 group-hover:scale-105 transition-transform"
                >
                  {{ totalChurches }}
                </h3>
                <p
                  class="text-sm text-[#00397a] dark:text-gray-300 font-semibold uppercase tracking-wide"
                >
                  {{ t('totalChurches') }}
                </p>
              </div>
              <div
                class="flex items-center justify-center w-10 h-10 bg-linear-to-br from-rose-100 to-rose-50 rounded-lg group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
              >
                <svg class="w-5 h-5 text-rose-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L10 6H8v3H6v13h12V9h-2V6h-2L12 2z" />
                  <path d="M10 6h4v3h-4V6z" />
                  <path d="M8 11h8v2H8v-2z" />
                  <path d="M8 15h3v7H8v-7z" />
                  <path d="M13 15h3v7h-3v-7z" />
                  <rect x="11" y="0" width="2" height="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Total Establishment Card -->
          <div
            class="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 border border-[#004595]/10 dark:border-gray-700 hover:border-[#004595]/30 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 group overflow-hidden"
          >
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-[#004595]/5 dark:bg-amber-500/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-24 h-24 bg-[#002147]/5 dark:bg-amber-400/10 rounded-full -ml-12 -mb-12 group-hover:scale-150 transition-transform duration-500"
            ></div>
            <div class="relative z-10 flex items-start justify-between">
              <div>
                <h3
                  class="text-2xl font-extrabold text-[#002147] dark:text-white mb-1 group-hover:scale-105 transition-transform"
                >
                  {{ totalEstablishments }}
                </h3>
                <p
                  class="text-sm text-[#00397a] dark:text-gray-300 font-semibold uppercase tracking-wide"
                >
                  {{ t('totalEstablishments') }}
                </p>
              </div>
              <div
                class="flex items-center justify-center w-10 h-10 bg-linear-to-br from-amber-100 to-amber-50 rounded-lg group-hover:shadow-lg group-hover:scale-110 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2v3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side Weather Card -->
        <div
          class="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-3 border border-[#004595]/10 dark:border-gray-700 flex flex-col items-center justify-center hover:border-[#004595]/30 dark:hover:border-gray-600 hover:shadow-lg transition-all duration-300 group overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-40 h-40 bg-[#004595]/5 dark:bg-blue-500/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-500"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-32 h-32 bg-[#00397a]/5 dark:bg-blue-400/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-500"
          ></div>
          <div class="relative z-10 w-full">
            <h2
              class="text-lg font-bold text-[#002147] dark:text-white mb-2 text-center group-hover:scale-105 transition-transform"
            >
              {{ t('weather') }}
            </h2>
            <div class="flex items-center justify-center mb-2">
              <!-- Sunny -->
              <div v-if="weatherIcon === 'sunny'" class="relative">
                <svg
                  class="w-12 h-12 text-yellow-400 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <!-- Cloudy -->
              <svg
                v-else-if="weatherIcon === 'cloudy'"
                class="w-12 h-12 text-gray-400 drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
                />
              </svg>
              <!-- Rainy -->
              <div v-else-if="weatherIcon === 'rainy'" class="relative">
                <svg
                  class="w-12 h-12 text-blue-500 drop-shadow-lg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
                  />
                  <path
                    d="M7 17v2m3-2v2m3-2v2"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
              <!-- Stormy -->
              <svg
                v-else-if="weatherIcon === 'stormy'"
                class="w-12 h-12 text-[#002147] drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
                />
                <path
                  d="M10 17l-2 3h1.5l-2 3"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <!-- Snowy -->
              <svg
                v-else-if="weatherIcon === 'snowy'"
                class="w-12 h-12 text-cyan-300 drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
                />
                <circle cx="7" cy="18" r="0.5" />
                <circle cx="10" cy="18" r="0.5" />
                <circle cx="13" cy="18" r="0.5" />
              </svg>
              <!-- Default Partly Cloudy -->
              <svg
                v-else
                class="w-12 h-12 text-gray-300 drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1z"
                />
                <path
                  d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"
                  opacity="0.7"
                />
              </svg>
            </div>
            <div class="text-center">
              <p
                class="text-2xl font-extrabold text-[#002147] dark:text-white group-hover:scale-105 transition-transform mb-1"
              >
                {{ currentTemperature }}°C
              </p>
              <p class="text-[#00397a] dark:text-gray-300 font-semibold text-xs">
                {{ weatherCondition }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Barangay List -->
      <div
        class="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-[#004595]/10 dark:border-gray-700 overflow-hidden"
      >
        <div
          class="absolute top-0 right-0 w-64 h-64 bg-[#004595]/5 dark:bg-blue-500/10 rounded-full -mr-32 -mt-32"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-48 h-48 bg-[#00397a]/5 dark:bg-blue-400/10 rounded-full -ml-24 -mb-24"
        ></div>

        <div class="relative z-10">
          <div
            class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6"
          >
            <div class="flex items-center gap-3">
              <div
                class="flex items-center justify-center w-12 h-12 bg-[#004595]/10 dark:bg-blue-500/20 rounded-lg"
              >
                <svg
                  class="w-6 h-6 text-[#004595] dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path
                    fill-rule="evenodd"
                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-[#002147] dark:text-white">List of Barangays</h3>
            </div>

            <!-- Search Bar -->
            <div class="relative w-full sm:w-96">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  class="w-5 h-5 text-[#004595] dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search barangay..."
                class="w-full pl-10 pr-4 py-2.5 border-2 border-[#004595]/30 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004595] focus:border-[#004595] transition-all bg-white dark:bg-gray-700 text-[#002147] dark:text-white placeholder-[#00397a]/60 dark:placeholder-gray-400 shadow-sm hover:border-[#004595]/50"
              />
            </div>
          </div>

          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 max-h-80 overflow-y-auto pr-2"
          >
            <div
              v-for="option in filteredBarangays"
              :key="option.value"
              class="relative group"
              @click="navigateToBarangay(option.value)"
            >
              <div
                class="relative p-4 bg-linear-to-br  dark:to-gray-800 rounded-lg border border-[#004595]/10 hover:border-[#004595] dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden h-full flex flex-col items-center justify-center min-h-25"
              >
                <!-- Decorative Circle -->
                <div
                  class="absolute top-0 right-0 w-16 h-16 bg-[#004595]/5 dark:bg-blue-500/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 group-hover:bg-[#004595]/10 dark:group-hover:bg-blue-500/20 transition-all duration-500"
                ></div>

                <!-- Icon -->
                <div class="relative z-10 mb-2">
                  <div
                    class="flex items-center justify-center w-10 h-10 bg-[#004595]/10 dark:bg-blue-500/20 rounded-lg group-hover:bg-[#004595] group-hover:scale-110 transition-all duration-300"
                  >
                    <svg
                      class="w-5 h-5 text-[#004595] dark:text-blue-400 group-hover:text-white transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Text -->
                <div class="relative z-10 text-center">
                  <span
                    class="text-xs font-semibold text-[#002147] dark:text-white group-hover:text-[#004595] dark:group-hover:text-blue-400 transition-colors duration-300 block leading-tight"
                    >{{ option.label }}</span
                  >
                </div>

                <!-- Hover Indicator -->
                <div
                  class="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-[#004595] via-[#00397a] to-[#002147] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-lg"
                ></div>
              </div>
            </div>
          </div>

          <div v-if="filteredBarangays.length === 0" class="text-center py-12">
            <div
              class="inline-flex items-center justify-center w-16 h-16 bg-[#004595]/10 dark:bg-blue-500/20 rounded-full mb-4"
            >
              <svg
                class="w-8 h-8 text-[#00397a] dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p class="font-semibold text-[#002147] dark:text-white">No barangay found</p>
            <p class="text-sm text-[#00397a] dark:text-gray-400 mt-1">
              Try searching with a different keyword
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Full Screen Notification Modal -->
    <transition name="modal-fade">
      <div
        v-if="showNotifications"
        class="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        @click="closeNotificationModal"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden transform transition-all animate-modal-slide"
          @click.stop
        >
          <!-- Modal Header -->
          <div
            class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-5 flex items-center justify-between"
          >
            <div class="flex items-center gap-3">
              <div class="p-2 bg-white/20 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                  />
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
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="overflow-y-auto max-h-[calc(85vh-180px)] p-6">
            <!-- Empty State -->
            <div v-if="notifications.length === 0" class="text-center py-16">
              <div
                class="inline-flex items-center justify-center w-24 h-24 bg-linear-to-br from-[#004595]/10 to-[#002147]/10 rounded-full mb-6"
              >
                <svg
                  class="w-12 h-12 text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
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
                class="notification-card bg-linear-to-br from-white to-[#f3f1ee] rounded-xl p-5 border-2 transition-all duration-300 cursor-pointer hover:shadow-xl"
                :class="[
                  !notification.read
                    ? 'border-[#004595] shadow-lg'
                    : 'border-gray-200 hover:border-[#004595]',
                  getNotificationCardClass(notification.type),
                ]"
                @click="markAsRead(index)"
              >
                <div class="flex items-start gap-4">
                  <!-- Icon -->
                  <div class="shrink-0">
                    <div class="p-3 rounded-xl" :class="getNotificationIconBg(notification.type)">
                      <svg
                        class="w-7 h-7"
                        :class="getNotificationIconColor(notification.type)"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          v-if="notification.type === 'fiesta'"
                          d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
                        />
                        <path
                          v-else-if="notification.type === 'info'"
                          fill-rule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                          clip-rule="evenodd"
                        />
                        <path
                          v-else-if="notification.type === 'success'"
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                        <path
                          v-else-if="notification.type === 'warning'"
                          fill-rule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                        <path
                          v-else
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  <!-- Content -->
                  <div class="flex-1 min-w-0">
                    <div class="flex items-start justify-between gap-3 mb-2">
                      <h3 class="text-lg font-bold text-gray-800">{{ notification.title }}</h3>
                      <span v-if="!notification.read" class="shrink-0">
                        <span
                          class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#004595] text-white animate-pulse"
                        >
                          NEW
                        </span>
                      </span>
                    </div>
                    <p class="text-base text-gray-700 mb-3 leading-relaxed">
                      {{ notification.message }}
                    </p>

                    <!-- Additional Details -->
                    <div
                      v-if="notification.data"
                      class="bg-white/60 rounded-lg p-3 mb-3 border border-gray-200"
                    >
                      <div v-if="notification.type === 'fiesta'" class="space-y-2">
                        <div class="flex items-center gap-2 text-sm">
                          <svg
                            class="w-4 h-4 text-[#004595]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="font-semibold text-gray-700">Barangay:</span>
                          <span class="text-gray-600">{{ notification.data.brgyname }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                          <svg
                            class="w-4 h-4 text-[#004595]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z"
                            />
                          </svg>
                          <span class="font-semibold text-gray-700">Patron Saint:</span>
                          <span class="text-gray-600">{{ notification.data.patron }}</span>
                        </div>
                        <div class="flex items-center gap-2 text-sm">
                          <svg
                            class="w-4 h-4 text-[#004595]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="font-semibold text-gray-700">Date:</span>
                          <span class="text-gray-600">{{ notification.data.date }}</span>
                        </div>
                      </div>
                      <div v-else-if="notification.type === 'success'" class="space-y-2">
                        <div class="flex items-center gap-2 text-sm">
                          <svg
                            class="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="font-semibold text-gray-700">Event:</span>
                          <span class="text-gray-600">{{
                            notification.data.title || notification.data.description
                          }}</span>
                        </div>
                        <div
                          v-if="notification.data.event_time"
                          class="flex items-center gap-2 text-sm"
                        >
                          <svg
                            class="w-4 h-4 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V5a.75.75 0 10-1.5 0v4.5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06l-2.78-2.72z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span class="font-semibold text-gray-700">Time:</span>
                          <span class="text-gray-600">{{ notification.data.event_time }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Time Badge -->
                    <div class="flex items-center gap-2 text-sm text-gray-500">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-8.75V5a.75.75 0 10-1.5 0v4.5c0 .2.08.39.22.53l3 3a.75.75 0 101.06-1.06l-2.78-2.72z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      <span class="font-medium">{{ notification.time }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div
            class="bg-linear-to-r from-[#f3f1ee] to-white px-6 py-4 border-t-2 border-gray-200 flex items-center justify-between"
          >
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
                class="px-5 py-2 bg-linear-to-r from-[#004595] to-[#002147] hover:from-[#00397a] hover:to-[#004595] text-white rounded-lg font-semibold transition-all shadow-lg"
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
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useGlobal } from '@/composables/useGlobal'
import headbk from '@/assets/landing.jpg'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const { t } = useGlobal()

const barangayOptions = ref([])
const loading = ref(false)
const searchQuery = ref('')
const categorySearchQuery = ref('')
const categorySearchFocused = ref(false)
const allCategories = ref([]) // Store all categories from all tables
const expandedCategories = ref(new Set()) // Track which categories are expanded
const currentTemperature = ref('--')
const weatherCondition = ref('Loading...')
const weatherCode = ref(0)
const currentDate = ref('')
const currentTime = ref('')
const stats = ref([])
let timestampInterval = null

// Notification state
const showNotifications = ref(false)
const notifications = ref([])
const eventsData = ref([])
const fiestaData = ref([])

const unreadNotifications = computed(() => {
  return notifications.value.filter((n) => !n.read).length
})

// Computed properties for stats
const totalBarangays = computed(() => {
  return stats.value[0]?.totalbarangay || 0
})

const totalSchools = computed(() => {
  return stats.value[0]?.totalschools || 0
})

const totalChurches = computed(() => {
  return stats.value[0]?.totalchurch || 0
})

const totalEstablishments = computed(() => {
  return stats.value[0]?.totalestablishment || 0
})

// Generate notifications from real events and fiestas
const generateNotifications = () => {
  const newNotifications = []
  const today = new Date()
  const todayStr = formatLocalDate(today)

  // Get today's events
  const todayEvents = eventsData.value.filter((event) => {
    const eventDate = normalizeDateStr(event.event_date)
    return eventDate === todayStr && !event.status
  })

  // Get today's fiestas
  const todayFiestas = fiestaData.value.filter((fiesta) => {
    const fiestaDate = convertTextDateToISO(fiesta.date)
    return fiestaDate === todayStr
  })

  // Get upcoming fiestas (within next 7 days)
  const upcomingFiestas = fiestaData.value.filter((fiesta) => {
    const fiestaDate = convertTextDateToISO(fiesta.date)
    if (!fiestaDate) return false

    const fDate = new Date(fiestaDate)
    const diffDays = Math.ceil((fDate - today) / (1000 * 60 * 60 * 24))
    return diffDays > 0 && diffDays <= 7
  })

  // Add fiesta notifications (today)
  todayFiestas.forEach((fiesta) => {
    newNotifications.push({
      type: 'fiesta',
      title: `🎉 Barangay Fiesta Today!`,
      message: `${fiesta.brgyname} - Celebrating ${fiesta.patron}`,
      time: 'Today',
      read: false,
      data: fiesta,
    })
  })

  // Add upcoming fiesta notifications
  upcomingFiestas.forEach((fiesta) => {
    const fiestaDate = new Date(convertTextDateToISO(fiesta.date))
    const diffDays = Math.ceil((fiestaDate - today) / (1000 * 60 * 60 * 24))

    newNotifications.push({
      type: 'info',
      title: `📅 Upcoming Fiesta`,
      message: `${fiesta.brgyname} - ${fiesta.patron} in ${diffDays} day${diffDays > 1 ? 's' : ''}`,
      time: `${diffDays} day${diffDays > 1 ? 's' : ''} from now`,
      read: false,
      data: fiesta,
    })
  })

  // Add event notifications (today)
  todayEvents.forEach((event) => {
    const brgyName = getBarangayLabel(event.brgy_id)
    const timeStr = event.event_time ? ` at ${event.event_time}` : ''

    newNotifications.push({
      type: 'success',
      title: `📌 Event Today${timeStr}`,
      message: `${brgyName} - ${event.title || event.description}`,
      time: event.event_time || 'Today',
      read: false,
      data: event,
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
    year: 'numeric',
  })
  currentDate.value = dateFormatter.format(now)

  // Format time
  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
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
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`,
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
      barangayOptions.value = data.map((item) => {
        // Convert brgyname to URL-safe kebab-case for value
        // Preserve original structure by encoding the actual database name
        const value = item.brgyname
          .toLowerCase()
          .trim()
          .replace(/\s+/g, '-') // Convert spaces to hyphens
          .replace(/[^\w\s-]/g, '') // Remove special chars except hyphens
          .replace(/--+/g, '-') // Replace multiple hyphens with single
          .replace(/^-+|-+$/g, '') // Trim hyphens from start/end

        return {
          id: item.id,
          value: value,
          label: item.brgyname,
          dbName: item.brgyname, // Store original database name
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
    const { data, error } = await supabase.rpc('brgyfiesta')

    if (error) throw error
    fiestaData.value = data || []
    generateNotifications()
  } catch (error) {
    console.error('Error fetching fiestas:', error)
  }
}

const fetchBarangayStats = async () => {
  console.log('Fetching barangay stats...')

  const { data, error } = await supabase.from('barangay_stats').select('*')

  if (error) {
    console.error('Error fetching barangay stats:', error)
    return
  }

  stats.value = data || []

  console.log('Barangay Stats:', stats.value)
  console.table(stats.value)
}

// Fetch all categories from all tables
const fetchAllCategories = async () => {
  try {
    const categories = []

    // Fetch from Schools table
    const { data: schoolsData, error: schoolsError } = await supabase
      .from('Schools')
      .select('category, brgy_id, schoolName, schoolAddress, Barangays(brgyname)')
      .not('category', 'is', null)

    if (schoolsError) {
      console.error('Error fetching schools:', schoolsError)
    } else if (schoolsData && schoolsData.length > 0) {
      // Group schools by category and barangay
      const schoolsByCategory = {}
      schoolsData.forEach((school) => {
        const cat = school.category.trim()
        if (!schoolsByCategory[cat]) {
          schoolsByCategory[cat] = {
            items: [],
            barangays: {},
          }
        }
        schoolsByCategory[cat].items.push(school)

        const brgyName = school.Barangays?.brgyname || 'Unknown'
        if (!schoolsByCategory[cat].barangays[brgyName]) {
          schoolsByCategory[cat].barangays[brgyName] = 0
        }
        schoolsByCategory[cat].barangays[brgyName]++
      })

      // Convert to results format
      Object.entries(schoolsByCategory).forEach(([categoryName, data]) => {
        const barangays = Object.entries(data.barangays).map(([name, count]) => ({
          name,
          count,
        }))

        categories.push({
          categoryName,
          type: 'School',
          totalCount: data.items.length,
          barangayCount: Object.keys(data.barangays).length,
          barangays,
          items: data.items.map((item) => ({
            name: item.schoolName,
            address: item.schoolAddress,
            barangay: item.Barangays?.brgyname || 'Unknown',
          })),
          key: `school-${categoryName}`,
        })
      })
    }

    // Fetch from Churches table
    const { data: churchesData, error: churchesError } = await supabase
      .from('Church')
      .select('category, brgy_id, churchName, churchAddress, Barangays(brgyname)')
      .not('category', 'is', null)

    if (churchesError) {
      console.error('Error fetching churches:', churchesError)
    } else if (churchesData && churchesData.length > 0) {
      // Group churches by category and barangay
      const churchesByCategory = {}
      churchesData.forEach((church) => {
        const category = church.category.trim()
        if (!churchesByCategory[category]) {
          churchesByCategory[category] = {
            items: [],
            barangays: {},
          }
        }
        churchesByCategory[category].items.push(church)

        const brgyName = church.Barangays?.brgyname || 'Unknown'
        if (!churchesByCategory[category].barangays[brgyName]) {
          churchesByCategory[category].barangays[brgyName] = 0
        }
        churchesByCategory[category].barangays[brgyName]++
      })

      // Convert to results format
      Object.entries(churchesByCategory).forEach(([categoryName, data]) => {
        const barangays = Object.entries(data.barangays).map(([name, count]) => ({
          name,
          count,
        }))

        categories.push({
          categoryName,
          type: 'Church',
          totalCount: data.items.length,
          barangayCount: Object.keys(data.barangays).length,
          barangays,
          items: data.items.map((item) => ({
            name: item.churchName,
            address: item.churchAddress,
            barangay: item.Barangays?.brgyname || 'Unknown',
          })),
          key: `church-${categoryName}`,
        })
      })
    }

    // Fetch from Establishments table
    const { data: estabData, error: estabError } = await supabase
      .from('Establishments')
      .select('category, brgy_id, establishmentName, establishmentAddress, Barangays(brgyname)')
      .not('category', 'is', null)

    if (estabError) {
      console.error('Error fetching establishments:', estabError)
    } else if (estabData && estabData.length > 0) {
      // Group establishments by category and barangay
      const estabByCategory = {}
      estabData.forEach((estab) => {
        const category = estab.category.trim()
        if (!estabByCategory[category]) {
          estabByCategory[category] = {
            items: [],
            barangays: {},
          }
        }
        estabByCategory[category].items.push(estab)

        const brgyName = estab.Barangays?.brgyname || 'Unknown'
        if (!estabByCategory[category].barangays[brgyName]) {
          estabByCategory[category].barangays[brgyName] = 0
        }
        estabByCategory[category].barangays[brgyName]++
      })

      // Convert to results format
      Object.entries(estabByCategory).forEach(([categoryName, data]) => {
        const barangays = Object.entries(data.barangays).map(([name, count]) => ({
          name,
          count,
        }))

        categories.push({
          categoryName,
          type: 'Establishment',
          totalCount: data.items.length,
          barangayCount: Object.keys(data.barangays).length,
          barangays,
          items: data.items.map((item) => ({
            name: item.establishmentName,
            address: item.establishmentAddress,
            barangay: item.Barangays?.brgyname || 'Unknown',
          })),
          key: `estab-${categoryName}`,
        })
      })
    }

    // Fetch from GovtOffices table
    const { data: govtData, error: govtError } = await supabase
      .from('GovtOffices')
      .select('officeType, brgy_id, officeName, officeAddress, Barangays(brgyname)')
      .not('officeType', 'is', null)

    if (govtError) {
      console.error('Error fetching govt offices:', govtError)
    } else if (govtData && govtData.length > 0) {
      // Group govt offices by type and barangay
      const govtByType = {}
      govtData.forEach((office) => {
        const type = office.officeType.trim()
        if (!govtByType[type]) {
          govtByType[type] = {
            items: [],
            barangays: {},
          }
        }
        govtByType[type].items.push(office)

        const brgyName = office.Barangays?.brgyname || 'Unknown'
        if (!govtByType[type].barangays[brgyName]) {
          govtByType[type].barangays[brgyName] = 0
        }
        govtByType[type].barangays[brgyName]++
      })

      // Convert to results format
      Object.entries(govtByType).forEach(([categoryName, data]) => {
        const barangays = Object.entries(data.barangays).map(([name, count]) => ({
          name,
          count,
        }))

        categories.push({
          categoryName,
          type: 'Government Office',
          totalCount: data.items.length,
          barangayCount: Object.keys(data.barangays).length,
          barangays,
          items: data.items.map((item) => ({
            name: item.officeName,
            address: item.officeAddress,
            barangay: item.Barangays?.brgyname || 'Unknown',
          })),
          key: `govt-${categoryName}`,
        })
      })
    }

    allCategories.value = categories
    console.log('All categories loaded:', categories.length)
  } catch (error) {
    console.error('Error fetching all categories:', error)
    allCategories.value = []
  }
}

onMounted(() => {
  fetchBarangayStats() // Test RPC function
  fetchBarangays()
  fetchEvents()
  fetchFiestas()
  fetchAllCategories() // Load all categories for search
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

// Filter barangays based on search query
const filteredBarangays = computed(() => {
  if (!searchQuery.value.trim()) {
    return barangayOptions.value
  }
  const query = searchQuery.value.toLowerCase().trim()
  return barangayOptions.value.filter((option) => option.label.toLowerCase().includes(query))
})

// Search categories across all types
// Aggregate all matching categories into a single consolidated result
const categorySearchResults = computed(() => {
  if (!categorySearchQuery.value.trim()) {
    return null
  }

  const query = categorySearchQuery.value.toLowerCase().trim()
  const queryWords = query.split(/\s+/).filter((w) => w.length > 0)
  const matchingCategories = []
  const barangayTotals = {}
  const seen = new Set()

  // Find all matching categories
  allCategories.value.forEach((cat) => {
    const key = `${cat.categoryName}-${cat.type}`.toLowerCase()

    // Avoid duplicates
    if (seen.has(key)) return

    const categoryLower = cat.categoryName.toLowerCase()

    // Match if any word in query matches any part of category name
    const matches = queryWords.some((word) => categoryLower.includes(word))

    if (matches) {
      seen.add(key)
      matchingCategories.push(cat.categoryName)

      // Aggregate barangay totals across all matching categories
      cat.barangays.forEach((brgy) => {
        if (!barangayTotals[brgy.name]) {
          barangayTotals[brgy.name] = 0
        }
        barangayTotals[brgy.name] += brgy.count
      })
    }
  })

  // If no matches found
  if (matchingCategories.length === 0) {
    return null
  }

  // Convert barangay totals to array and sort by count
  const barangaysArray = Object.entries(barangayTotals)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)

  // Calculate totals
  const totalItems = barangaysArray.reduce((sum, b) => sum + b.count, 0)
  const totalBarangays = barangaysArray.length

  return {
    matchingCategories,
    barangays: barangaysArray,
    totalItems,
    totalBarangays,
    searchQuery: query,
  }
})

// Auto-expand search results when user searches for a category
// Get all unique categories for the dropdown menu
const uniqueCategories = computed(() => {
  const categories = []
  const seen = new Set()

  // Get unique category names and count
  allCategories.value.forEach((cat) => {
    if (!seen.has(cat.categoryName)) {
      seen.add(cat.categoryName)
      categories.push({
        name: cat.categoryName,
        type: cat.type,
        count: cat.totalCount,
      })
    }
  })

  // Sort alphabetically
  return categories.sort((a, b) => a.name.localeCompare(b.name))
})

// Filter categories based on search query
const filteredCategoriesForMenu = computed(() => {
  const query = categorySearchQuery.value.toLowerCase().trim()

  if (!query) {
    return uniqueCategories.value
  }

  return uniqueCategories.value.filter(
    (cat) => cat.name.toLowerCase().includes(query) || cat.type.toLowerCase().includes(query),
  )
})

// Navigate to community view for selected barangay
const navigateToBarangay = (barangayValue) => {
  router.push({
    name: 'community',
    params: { barangayName: barangayValue },
  })
}

// Toggle category expansion
const toggleCategoryExpanded = (key) => {
  if (expandedCategories.value.has(key)) {
    expandedCategories.value.delete(key)
  } else {
    expandedCategories.value.add(key)
  }
}

// Select a category from the dropdown menu
const selectCategoryFromMenu = (categoryName) => {
  categorySearchQuery.value = categoryName
  categorySearchFocused.value = false
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
  background: linear-linear(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
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
