<template>
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
      <header class="relative shadow-2xl overflow-hidden h-48">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${headbk})` }"
        ></div>
        <div class="absolute inset-0 bg-linear-to-r from-[#002147]/80 to-[#004595]/70"></div>

        <div class="relative z-10 p-4 lg:pl-4 pl-16">
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
                Butuan City Monitoring Dashboard
              </h1>
            </div>

            <p class="text-xs sm:text-sm text-[#e0e7ff] mb-2 lg:mb-3 lg:ml-14 font-medium">
              Community monitoring across 28 barangays
            </p>

            <div class="flex justify-start lg:justify-end lg:ml-14">
              <div class="flex flex-col gap-2 w-full sm:w-80">
                <label class="text-sm font-bold text-white tracking-wide" for="barangay-select"
                  >📍 Select Barangay</label
                >
                <select
                  id="barangay-select"
                  v-model="selectedBarangay"
                  required
                  :disabled="loading"
                  class="px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 backdrop-blur-sm text-white font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:bg-white/20 transition-all duration-300 cursor-pointer hover:bg-white/15 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <option disabled value="">
                    {{ loading ? 'Loading barangays...' : 'Select a barangay' }}
                  </option>
                  <option
                    v-for="option in barangayOptions"
                    :key="option.value"
                    :value="option.value"
                  >
                    {{ option.label }}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Map Container -->
      <div class="flex-1 p-2 sm:p-4 lg:p-6">
        <div
          class="bg-white rounded-xl lg:rounded-2xl shadow-2xl h-full overflow-hidden relative border-2 lg:border-4 border-white/50"
        >
          <!-- Map -->
          <GoogleMap
            v-if="googleApiKey"
            class="w-full h-full"
            :api-key="googleApiKey"
            :center="currentCenter"
            :zoom="16"
            map-type-id="satellite"
          >
            <Marker
              v-for="location in filteredLocations"
              :key="location.name"
              :options="{
                position: location.coordinates,
                title: location.name,
              }"
            >
              <InfoWindow>
                <div class="p-3 min-w-50">
                  <p class="font-bold text-base text-[#002147] mb-1">{{ location.name }}</p>
                  <p class="text-xs text-gray-600 mb-3 flex items-center gap-1">
                    <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    {{ currentBarangayLabel }}
                  </p>
                  <button
                    type="button"
                    class="w-full rounded-lg bg-[#004595] px-4 py-2 text-sm font-bold text-white hover:bg-[#00397a] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    @click.stop="viewCommunity(location)"
                  >
                    🔍 View Community Info
                  </button>
                </div>
              </InfoWindow>
            </Marker>
          </GoogleMap>
          <div
            v-else
            class="absolute inset-0 flex flex-col items-center justify-center bg-white/90 text-center p-4"
          >
            <p class="font-semibold text-gray-700">Google Maps API key missing</p>
            <p class="text-sm text-gray-500">
              Set VITE_GOOGLE_MAPS_API_KEY in your environment to load the map.
            </p>
          </div>

          <!-- Quick Stats Overlay -->
          <div
            class="absolute top-4 right-4 lg:top-6 lg:right-6 bg-linear-to-br from-white/95 to-white/90 backdrop-blur-lg p-3 lg:p-6 rounded-xl lg:rounded-2xl shadow-2xl border-2 border-white/50 min-w- lg:min-w-70"
          >
            <div class="flex items-center gap-2 mb-4 pb-3 border-b-2 border-[#004595]/20">
              <div class="p-2 bg-linear-to-br from-[#004595] to-[#00397a] rounded-lg">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <h3 class="font-extrabold text-[#002147] text-lg">Quick Stats</h3>
            </div>
            <div class="space-y-3 text-sm">
              <div
                class="flex items-center justify-between p-2 rounded-lg hover:bg-[#f3f1ee] transition-colors"
              >
                <span class="text-gray-600 font-medium">📍 Barangay:</span>
                <span class="font-bold text-[#004595]">{{ currentBarangayLabel }}</span>
              </div>
              <div
                class="flex items-center justify-between p-2 rounded-lg hover:bg-[#f3f1ee] transition-colors"
              >
                <span class="text-gray-600 font-medium">📊 Locations:</span>
                <span class="font-bold text-[#00397a] text-lg">{{ filteredLocations.length }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
import headbk from '@/assets/landing.jpg'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const googleApiKey = 'AIzaSyDqcnq11WukBkYCzu13zloxQi_YjUpsA14'
const defaultCenter = { lat: 8.9475, lng: 125.5279 }
const sidebarOpen = ref(false)
const settingsOpen = ref(false)
const activeTab = ref('faqs')

const barangayOptions = ref([])
const loading = ref(false)
const selectedBarangay = ref('')

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
})

const viewCommunity = (location) => {
  if (!selectedBarangay.value) {
    return
  }

  router.push({
    name: 'CommunityView',
    params: { barangayName: selectedBarangay.value },
    query: {
      location: location.name,
      type: 'barangay',
    },
  })
}

const barangayData = computed(() => {
  return barangayOptions.value.reduce((acc, option, index) => {
    const row = Math.floor(index / 7)
    const col = index % 7
    const latOffset = (row - 2) * 0.01
    const lngOffset = (col - 3) * 0.01
    const center = {
      lat: Number((defaultCenter.lat + latOffset).toFixed(6)),
      lng: Number((defaultCenter.lng + lngOffset).toFixed(6)),
    }

    // Replace generated coordinates with precise barangay locations when available.
    acc[option.value] = {
      name: option.label,
      center,
      features: [
        {
          name: `${option.label} Highlight`,
          coordinates: center,
        },
      ],
    }

    return acc
  }, {})
})

const filteredLocations = computed(() => {
  if (!selectedBarangay.value) {
    return []
  }
  return barangayData.value[selectedBarangay.value]?.features ?? []
})

const currentCenter = computed(() => {
  if (!selectedBarangay.value) {
    return defaultCenter
  }
  return barangayData.value[selectedBarangay.value]?.center ?? defaultCenter
})

const currentBarangayLabel = computed(() => {
  if (!selectedBarangay.value) {
    return 'Select barangay'
  }
  return barangayData.value[selectedBarangay.value]?.name ?? selectedBarangay.value
})
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
</style>
