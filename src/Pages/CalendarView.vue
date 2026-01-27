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
            <router-link
              to="/dashboard"
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
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
              </div>
              <span class="font-semibold">Dashboard</span>
            </router-link>
          </li>
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
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="font-semibold">Calendar</span>
            </button>
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
      <header class="relative shadow-2xl overflow-hidden h-32 lg:sticky lg:top-0 lg:z-20">
        <div
          class="absolute inset-0 bg-cover bg-center"
          :style="{ backgroundImage: `url(${headbk})` }"
        ></div>
        <div class="absolute inset-0 bg-linear-to-r from-[#002147]/60 to-[#004595]/50"></div>

        <div class="relative z-10 p-3 lg:p-5">
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
                Community Events Calendar
              </h1>
            </div>

            <p class="text-xs sm:text-sm text-[#e0e7ff] mb-2 lg:mb-3 lg:ml-14 font-medium">
              Click on any date to view events across all barangays
            </p>
          </div>
        </div>
      </header>

      <!-- Calendar Container -->
      <div class="flex-1 p-2 sm:p-4 lg:p-6 overflow-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
          <!-- Left Side: Calendar -->
          <div
            class="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden relative border-2 lg:border-4 border-white/50"
          >
            <!-- Custom Calendar -->
            <div class="p-6 flex flex-col max-h-[600px]">
              <!-- Calendar Header -->
              <div class="flex items-center justify-between mb-6 flex-shrink-0">
                <button
                  @click="prevMonth"
                  class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                </button>
                <h2 class="text-2xl font-bold text-[#002147]">
                  {{ monthNames[currentDate.getMonth()] }} {{ currentDate.getFullYear() }}
                </h2>
                <button
                  @click="nextMonth"
                  class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </button>
              </div>

              <!-- Calendar Grid -->
              <div class="flex-1 overflow-y-auto">
                <div class="grid grid-cols-7 gap-1 min-h-[400px]">
                  <!-- Day Headers -->
                  <div
                    v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']"
                    :key="day"
                    class="p-3 text-center font-semibold text-gray-600 border-b"
                  >
                    {{ day }}
                  </div>

                  <!-- Calendar Days -->
                  <div
                    v-for="day in calendarDays"
                    :key="day.dateStr"
                    :class="[
                      'min-h-24 p-2 border cursor-pointer transition-colors relative',
                      day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-400',
                      day.isToday ? 'bg-blue-50 border-blue-200' : 'border-gray-200',
                      day.hasEvents ? 'hover:bg-blue-50' : 'hover:bg-gray-50',
                    ]"
                    @click="selectDate(day)"
                  >
                    <div class="text-sm font-medium mb-1">
                      {{ day.date.getDate() }}
                    </div>

                    <div class="space-y-1">
                      <div
                        v-for="event in day.events.slice(0, 2)"
                        :key="event.id"
                        class="text-xs bg-[#004595] text-white px-1 py-0.5 rounded truncate"
                        :title="event.title"
                      >
                        {{ event.title }}
                      </div>

                      <div v-if="day.events.length > 2" class="text-xs text-gray-500">
                        +{{ day.events.length - 2 }} more
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Side: Barangay Events List -->
          <div
            class="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden relative border-2 lg:border-4 border-white/50"
          >
            <div class="p-6 flex flex-col max-h-[600px]">
              <!-- Events Header -->
              <div class="mb-6 flex-shrink-0">
                <h3 class="text-xl font-bold text-[#002147] mb-2">
                  {{
                    selectedDate
                      ? `Events on ${selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
                      : 'Select a Date'
                  }}
                </h3>
                <p class="text-sm text-gray-600">
                  {{
                    selectedDate
                      ? 'Events organized by barangay:'
                      : 'Click on a date in the calendar to view events'
                  }}
                </p>
              </div>

              <!-- Events List -->
              <div class="flex-1 overflow-y-auto">
                <div v-if="!selectedDate" class="text-center py-12">
                  <div
                    class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <p class="text-gray-500 text-lg font-medium">No Date Selected</p>
                  <p class="text-gray-400 text-sm mt-1">
                    Choose a date from the calendar to view events
                  </p>
                </div>

                <div v-else-if="selectedDateEvents.length === 0" class="text-center py-12">
                  <div
                    class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <svg
                      class="w-8 h-8 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      ></path>
                    </svg>
                  </div>
                  <p class="text-gray-500 text-lg font-medium">No Events</p>
                  <p class="text-gray-400 text-sm mt-1">No events scheduled for this date</p>
                </div>

                <div v-else class="space-y-4">
                  <!-- Group events by barangay -->
                  <div
                    v-for="barangay in getUniqueBarangays(selectedDateEvents)"
                    :key="barangay"
                    class="border border-gray-200 rounded-lg p-4"
                  >
                    <div class="flex items-center gap-2 mb-3">
                      <div class="w-3 h-3 bg-[#004595] rounded-full"></div>
                      <h4 class="font-semibold text-[#002147] text-lg">
                        {{ barangay.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase()) }}
                      </h4>
                      <span class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {{ getBarangayEventCount(barangay) }} event{{
                          getBarangayEventCount(barangay) > 1 ? 's' : ''
                        }}
                      </span>
                    </div>

                    <div class="space-y-2">
                      <div
                        v-for="event in getEventsByBarangay(barangay)"
                        :key="event.id"
                        class="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer"
                        @click="showEventDetails(event)"
                      >
                        <div class="flex items-start justify-between">
                          <div class="flex-1">
                            <h5 class="font-medium text-[#002147] text-sm">{{ event.title }}</h5>
                            <p class="text-xs text-gray-600 mt-1 line-clamp-2">
                              {{ event.description }}
                            </p>
                          </div>
                          <button
                            class="ml-2 text-[#004595] hover:text-[#00397a] transition-colors"
                          >
                            <svg
                              class="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Events Modal -->
      <div
        v-if="showEventsModal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        @click="closeModal"
      >
        <div
          class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          @click.stop
        >
          <div class="p-6 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold text-[#002147]">
                Events on
                {{
                  selectedDate
                    ? selectedDate.toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : ''
                }}
              </h3>
              <button
                @click="closeModal"
                class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="p-6">
            <div v-if="selectedDateEvents.length === 0" class="text-center py-8">
              <p class="text-gray-500 text-lg">No events scheduled for this date</p>
            </div>
            <div v-else class="space-y-4">
              <div
                v-for="event in selectedDateEvents"
                :key="event.id"
                class="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h4 class="font-semibold text-[#002147] text-lg">{{ event.title }}</h4>
                    <p class="text-sm text-gray-600 mt-1">{{ event.description }}</p>
                    <div class="flex items-center gap-2 mt-2">
                      <span
                        class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#004595] text-white"
                      >
                        📍
                        {{
                          event.barangay.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())
                        }}
                      </span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <button
                      @click="showEventDetails(event)"
                      class="px-3 py-1 bg-[#004595] text-white text-sm rounded-lg hover:bg-[#00397a] transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Settings Modal -->
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
import { supabase } from '@/lib/supabase'
import headbk from '@/assets/landing.jpg'

const sidebarOpen = ref(false)
const settingsOpen = ref(false)
const activeTab = ref('faqs')
const selectedDate = ref(null)
const showEventsModal = ref(false)
const currentDate = ref(new Date())
const eventsData = ref([])
const loading = ref(true)
const error = ref(null)

// Fetch events from Supabase
const fetchEvents = async () => {
  try {
    loading.value = true
    error.value = null
    const { data, error: fetchError } = await supabase
      .from('events')
      .select('*')
      .order('start', { ascending: true })

    if (fetchError) throw fetchError
    eventsData.value = data || []
  } catch (err) {
    console.error('Error fetching events:', err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const selectedDateEvents = computed(() => {
  if (!selectedDate.value) return []
  const dateStr = selectedDate.value.toISOString().split('T')[0]
  return eventsData.value.filter((event) => event.start === dateStr)
})

const getUniqueBarangays = (events) => {
  const barangays = events.map((event) => event.barangay)
  return [...new Set(barangays)]
}

const getBarangayEventCount = (barangay) => {
  return selectedDateEvents.value.filter((event) => event.barangay === barangay).length
}

const getEventsByBarangay = (barangay) => {
  return selectedDateEvents.value.filter((event) => event.barangay === barangay)
}

const eventsByDate = computed(() => {
  const eventsMap = {}
  eventsData.value.forEach((event) => {
    if (!eventsMap[event.start]) {
      eventsMap[event.start] = []
    }
    eventsMap[event.start].push(event)
  })
  return eventsMap
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()

  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())

  const days = []
  const current = new Date(startDate)

  for (let i = 0; i < 42; i++) {
    const dateStr = current.toISOString().split('T')[0]
    const isCurrentMonth = current.getMonth() === month
    const isToday = current.toDateString() === new Date().toDateString()
    const dayEvents = eventsByDate.value[dateStr] || []

    days.push({
      date: new Date(current),
      dateStr,
      isCurrentMonth,
      isToday,
      events: dayEvents,
      hasEvents: dayEvents.length > 0,
    })

    current.setDate(current.getDate() + 1)
  }

  return days
})

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1)
}

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1)
}

const selectDate = (day) => {
  selectedDate.value = day.date
  // Events are now shown in the right panel instead of modal
}

const closeModal = () => {
  showEventsModal.value = false
  selectedDate.value = null
}

const showEventDetails = (event) => {
  alert(
    `Event: ${event.title}\nBarangay: ${event.barangay.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}\nDescription: ${event.description}`,
  )
}

// Load events on component mount
onMounted(() => {
  fetchEvents()
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