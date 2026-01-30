<template>
<<<<<<< HEAD
  <div class="flex-1 flex flex-col bg-[#f3f1ee]">
    <!-- Top Header -->
    <header class="relative shadow-2xl overflow-hidden h-32 lg:sticky lg:top-0 lg:z-20">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="{ backgroundImage: `url(${headbk})` }"
      ></div>
      <div class="absolute inset-0 bg-linear-to-r from-[#002147]/60 to-[#004595]/50"></div>

      <div class="relative z-10 p-3 lg:p-6">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center gap-2 lg:gap-3 mb-2 lg:mb-3">
            <div class="p-1.5 lg:p-2 bg-white/20 backdrop-blur-sm rounded-lg shrink-0">
              <svg class="w-5 h-5 lg:w-8 lg:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
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
            Click on any date to add barangay events
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
          <div class="p-6 flex flex-col max-h-150">
            <!-- Calendar Header -->
            <div class="flex items-center justify-between mb-6 shrink-0">
              <button @click="prevMonth" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
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
              <button @click="nextMonth" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
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
              <div class="grid grid-cols-7 gap-1 min-h-100">
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
                    day.isToday
                      ? 'bg-amber-100 border-amber-300 ring-2 ring-amber-200 shadow-lg'
                      : 'border-gray-200',
                    day.hasEvents ? 'hover:bg-blue-50' : 'hover:bg-gray-50',
                  ]"
                  @click="selectDate(day)"
                >
                  <div class="text-sm font-medium mb-1">
                    <span
                      :class="[
                        'inline-flex items-center justify-center rounded-full',
                        day.isToday
                          ? 'w-9 h-9 bg-amber-500 text-white font-extrabold today-pulse ring-4 ring-amber-300'
                          : 'w-7 h-7',
                      ]"
                    >
                      {{ day.date.getDate() }}
                    </span>
                  </div>

                  <div
                    v-if="day.isToday"
                    class="absolute -top-3 right-2 text-sm bg-amber-600 text-white px-3 py-1 rounded-full font-semibold today-pulse shadow-lg"
                  >
                    Today
                  </div>

                  <div class="space-y-1">
                    <div
                      v-for="event in day.events.slice(0, 2)"
                      :key="event.id"
                      :class="[
                        'text-xs px-1 py-0.5 rounded truncate',
                        event.isFiesta ? 'bg-amber-400 text-white' : 'bg-[#004595] text-white',
                      ]"
                      :title="event.title"
                    >
                      {{ event.title }}
                    </div>

                    <div v-if="day.events.length > 2" class="text-xs text-gray-500">
                      +{{ day.events.length - 2 }} more
=======
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
            <a
              href="#"
              class="group flex items-center p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:translate-x-1 border-l-4 border-[#004595]"
            >
              <div
                class="p-2 bg-white/10 rounded-lg mr-3 group-hover:bg-white/20 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
              </div>
              <span class="font-semibold">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:translate-x-1"
            >
              <div
                class="p-2 bg-transparent rounded-lg mr-3 group-hover:bg-white/10 transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <span class="font-semibold">Alerts</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="group flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:translate-x-1"
            >
              <div
                class="p-2 bg-transparent rounded-lg mr-3 group-hover:bg-white/10 transition-colors"
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
            </a>
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
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </div>

        <!-- Right Side: Barangay Events List -->
        <div
          class="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden relative border-2 lg:border-4 border-white/50"
        >
          <div class="p-6 flex flex-col max-h-150">
            <!-- Events Header -->
            <div
              class="mb-6 shrink-0 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
            >
              <div>
=======

          <!-- Right Side: Barangay Events List -->
          <div
            class="bg-white rounded-xl lg:rounded-2xl shadow-2xl overflow-hidden relative border-2 lg:border-4 border-white/50"
          >
            <div class="p-6 flex flex-col max-h-[600px]">
              <!-- Events Header -->
              <div class="mb-6 flex-shrink-0">
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
                <h3 class="text-xl font-bold text-[#002147] mb-2">
                  {{
                    selectedDate
                      ? `Events on ${selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`
                      : 'Select a Date'
                  }}
<<<<<<< HEAD
                  <span
                    v-if="
                      selectedDate && formatLocalDate(selectedDate) === formatLocalDate(new Date())
                    "
                    class="ml-3 inline-block text-sm bg-amber-200 text-amber-900 px-3 py-1 rounded-full font-semibold today-pulse shadow-sm"
                    >Today</span
                  >
=======
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
                </h3>
                <p class="text-sm text-gray-600">
                  {{
                    selectedDate
                      ? 'Events organized by barangay:'
                      : 'Click on a date in the calendar to view events'
                  }}
                </p>
              </div>

<<<<<<< HEAD
              <div class="flex flex-col items-end gap-3">
                <div class="relative w-full sm:w-64">
                  <div class="relative">
                    <input
                      v-model="searchTerm"
                      @focus="searchFocused = true"
                      @blur="() => setTimeout(() => (searchFocused = false), 150)"
                      type="text"
                      placeholder="Search barangay"
                      class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#004595] focus:outline-none text-sm pl-10"
                    />
                    <svg
                      class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l3.817 3.817a1 1 0 01-1.414 1.414l-3.817-3.817A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>

                  <div
                    v-if="searchFocused && filteredBarangayOptions.length"
                    class="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto"
                  >
                    <div
                      v-for="opt in filteredBarangayOptions"
                      :key="opt.id"
                      class="px-3 py-2 cursor-pointer hover:bg-gray-100"
                      @mousedown.prevent="selectBarangay(opt.id)"
                    >
                      {{ opt.label }}
                    </div>
                  </div>
                </div>

                <button
                  v-if="selectedBarangay !== 'all'"
                  @click="openAddModal"
                  :disabled="!selectedDate"
                  class="px-4 py-2 rounded-lg bg-[#004595] text-white font-semibold hover:bg-[#00397a] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Add Event
                </button>
              </div>
            </div>

            <!-- Events List -->
            <div class="flex-1 overflow-y-auto events-scroll max-h-[60vh]">
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
                      {{ getBarangayLabel(barangay) }}
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
                      :class="[
                        'event-card rounded-lg p-3 transition-colors',
                        isTodaySelected
                          ? 'bg-amber-50 border-2 border-amber-300 shadow-md'
                          : 'bg-gray-50 hover:bg-gray-100',
                      ]"
                    >
                      <div class="flex items-start justify-between">
                        <div class="flex-1">
                          <div class="flex items-center gap-2">
                            <h5 class="font-medium text-[#002147] text-sm">{{ event.title }}</h5>
                            <span
                              v-if="event.isFiesta"
                              class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full"
                              >Fiesta</span
                            >
                          </div>
                          <p class="text-xs text-gray-600 mt-1 line-clamp-2">
                            {{ event.description }}
                          </p>
                        </div>
                        <div v-if="selectedBarangay !== 'all'" class="ml-3 flex items-center gap-2">
                          <button
                            @click="startEdit(event)"
                            class="icon-btn text-amber-600"
                            title="Edit"
=======
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
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
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
<<<<<<< HEAD
                                d="M11 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5"
                              />
=======
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              ></path>
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
<<<<<<< HEAD
                                d="M18.5 2.5a2.121 2.121 0 113 3L12 15l-4 1 1-4 9.5-9.5z"
                              />
                            </svg>
                          </button>
                          <button
                            @click="deleteEvent(event)"
                            class="icon-btn text-red-600"
                            title="Delete"
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
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M9 7h6m-8 0h8m-8 0V5a2 2 0 012-2h4a2 2 0 012 2v2"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div v-if="editingEventId === event.id" class="event-edit mt-3">
                        <div class="grid grid-cols-1 gap-3">
                          <div>
                            <label class="block text-xs font-semibold text-gray-600 mb-1"
                              >Barangay</label
                            >
                            <select
                              v-model="editDraft.brgyId"
                              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#004595] focus:outline-none text-sm"
                            >
                              <option value="">Select barangay</option>
                              <option
                                v-for="brgy in barangayOptions"
                                :key="brgy.id"
                                :value="brgy.id"
                              >
                                {{ brgy.label }}
                              </option>
                            </select>
                          </div>
                          <div>
                            <label class="block text-xs font-semibold text-gray-600 mb-1"
                              >Title</label
                            >
                            <input
                              v-model="editDraft.title"
                              type="text"
                              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#004595] focus:outline-none text-sm"
                            />
                          </div>
                          <div>
                            <label class="block text-xs font-semibold text-gray-600 mb-1"
                              >Description</label
                            >
                            <textarea
                              v-model="editDraft.description"
                              rows="3"
                              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#004595] focus:outline-none text-sm"
                            ></textarea>
                          </div>
                        </div>

                        <div class="mt-3 flex justify-end gap-2">
                          <button @click="cancelEdit" class="icon-btn text-gray-500" title="Cancel">
                            <svg
                              class="w-5 h-5"
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
                          <button
                            @click="saveEdit"
                            :disabled="isUpdatingEvent"
                            class="icon-btn text-emerald-600"
                            title="Save"
                          >
                            <svg
                              class="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 13l4 4L19 7"
                              />
=======
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              ></path>
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
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
<<<<<<< HEAD
    </div>

    <!-- Add Event Modal -->
    <div
      v-if="showAddModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-2xl shadow-2xl max-w-xl w-full max-h-[80vh] overflow-y-auto"
        @click.stop
      >
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-[#002147]">
              Add Event
              {{
                selectedDate
                  ? `• ${selectedDate.toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}`
                  : ''
              }}
            </h3>
            <button @click="closeModal" class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
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

        <div class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Barangay</label>
            <select
              v-model="newEvent.brgyId"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
            >
              <option value="">Select barangay</option>
              <option v-for="brgy in barangayOptions" :key="brgy.id" :value="brgy.id">
                {{ brgy.label }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Title</label>
            <input
              v-model="newEvent.title"
              type="text"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
              placeholder="Event title"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-2">Description</label>
            <textarea
              v-model="newEvent.description"
              rows="4"
              class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
              placeholder="Describe the event..."
            ></textarea>
          </div>

          <div class="flex justify-end gap-3 pt-2">
            <button
              @click="closeModal"
              class="px-4 py-2 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all"
            >
              Cancel
            </button>
            <button
              @click="saveEvent"
              :disabled="isSavingEvent"
              class="px-4 py-2 rounded-lg bg-[#004595] text-white font-semibold hover:bg-[#00397a] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {{ isSavingEvent ? 'Saving...' : 'Save Event' }}
            </button>
          </div>
        </div>
      </div>
    </div>
=======

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
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
  </div>
</template>

<script setup>
<<<<<<< HEAD
import { computed, ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import headbk from '@/assets/landing.jpg'

// UI State
const selectedDate = ref(null)
const showAddModal = ref(false)
const currentDate = ref(new Date())
const eventsData = ref([])
const fiestasData = ref([])
const loading = ref(true)
const error = ref(null)
const barangayOptions = ref([])
const selectedBarangay = ref('all')
const searchTerm = ref('All Barangay')
const searchFocused = ref(false)
const isSavingEvent = ref(false)
const isUpdatingEvent = ref(false)
const isDeletingEvent = ref(false)
const editingEventId = ref(null)
const newEvent = ref({ brgyId: '', title: '', description: '' })
const editDraft = ref({ id: null, brgyId: '', title: '', description: '' })

// --- Fetching Data ---
const fetchEvents = async () => {
  try {
    loading.value = true
    error.value = null
    const { data, error: fetchError } = await supabase
      .from('BrgyEvents')
      .select('id, brgy_id, title, description, event_date')
      .order('event_date', { ascending: true })

    if (fetchError) throw fetchError
    eventsData.value = data || []
  } catch (err) {
    console.error('Error fetching events:', err)
    error.value = err.message
  } finally {
    loading.value = false
  }
}

const fetchFiestas = async () => {
  try {
    const { data, error: fiestaError } = await supabase
      .from('BrgyFiesta')
      .select('id, patron, date, brgy_id, recurring, active, month_day_start, month_day_end')
      .eq('active', true)

    if (fiestaError) throw fiestaError
    fiestasData.value = data || []
  } catch (err) {
    console.error('Error fetching fiestas:', err)
  }
}

// --- Helpers for dates & fiestas ---
const normalizeDateStr = (value) => {
  if (!value) return ''
  if (typeof value === 'string') return value.split('T')[0]
  try {
    return formatLocalDate(new Date(value))
  } catch {
    return ''
  }
}

const formatLocalDate = (date) => {
  if (!(date instanceof Date)) return ''
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

const getEventDateStr = (event) => {
  return normalizeDateStr(event.event_date || event.start)
}

const monthDayToNumber = (month, day) => Number(month) * 100 + Number(day)

const monthDayStringToNumber = (str) => {
  if (!str) return null
  const parts = str.split(/[-/]/).map((s) => Number(s))
  if (parts.length < 2) return null
  return monthDayToNumber(parts[0], parts[1])
}

const fiestaMatchesDate = (fiesta, date) => {
  if (!fiesta || !date) return false

  const normalized = normalizeDateStr(fiesta.date)
  const dateStr = formatLocalDate(date)

  // Direct one-off date match (supports full YYYY-MM-DD)
  if (normalized) {
    if (normalized === dateStr) return true
    // allow matching by MM-DD if stored without year
    if (normalized.length === 5) {
      return normalized === dateStr.slice(5)
    }
  }

  // Recurring range match using month_day_start / month_day_end
  const startNum = monthDayStringToNumber(fiesta.month_day_start)
  const endNum = monthDayStringToNumber(fiesta.month_day_end)
  if (startNum == null || endNum == null) return false

  const dMonth = date.getMonth() + 1
  const dDay = date.getDate()
  const curNum = monthDayToNumber(dMonth, dDay)

  if (startNum <= endNum) {
    return curNum >= startNum && curNum <= endNum
  }

  // wrap-around (e.g., Dec -> Jan)
  return curNum >= startNum || curNum <= endNum
}

// --- Derived data ---
const eventsByDate = computed(() => {
  const eventsMap = {}
  eventsData.value.forEach((event) => {
    const dateKey = getEventDateStr(event)
    if (!eventsMap[dateKey]) eventsMap[dateKey] = []
    eventsMap[dateKey].push(event)
  })
  return eventsMap
})

const selectedDateEvents = computed(() => {
  if (!selectedDate.value) return []
  const dateStr = formatLocalDate(selectedDate.value)

  const events = (eventsByDate.value[dateStr] || []).map((e) => ({ ...e }))

  // include matching fiestas as synthetic events
  fiestasData.value.forEach((f) => {
    if (fiestaMatchesDate(f, selectedDate.value)) {
      events.push({
        id: `fiesta-${f.id}`,
        brgy_id: f.brgy_id,
        title: f.patron || `${getBarangayLabel(f.brgy_id)} Fiesta`,
        description: '',
        isFiesta: true,
      })
    }
  })

  // filter by selected barangay if specific
  if (selectedBarangay.value !== 'all') {
    return events.filter((e) => String(e.brgy_id) === String(selectedBarangay.value))
  }

  return events
=======
import { computed, ref } from 'vue'
import { eventsData } from '@/data/communityData'
import headbk from '@/assets/landing.jpg'

const sidebarOpen = ref(false)
const selectedDate = ref(null)
const showEventsModal = ref(false)
const currentDate = ref(new Date())

const selectedDateEvents = computed(() => {
  if (!selectedDate.value) return []
  const dateStr = selectedDate.value.toISOString().split('T')[0]
  return eventsData.filter((event) => event.start === dateStr)
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
  eventsData.forEach((event) => {
    if (!eventsMap[event.start]) {
      eventsMap[event.start] = []
    }
    eventsMap[event.start].push(event)
  })
  return eventsMap
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
})

const calendarDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()

  const firstDay = new Date(year, month, 1)
<<<<<<< HEAD
=======
  const lastDay = new Date(year, month + 1, 0)
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())

  const days = []
  const current = new Date(startDate)

  for (let i = 0; i < 42; i++) {
<<<<<<< HEAD
    const dateStr = formatLocalDate(current)
    const isCurrentMonth = current.getMonth() === month
    const isToday = current.toDateString() === new Date().toDateString()

    // base events for the day
    let dayEvents = (eventsByDate.value[dateStr] || []).map((e) => ({ ...e }))

    // add fiestas that occur on this date
    fiestasData.value.forEach((f) => {
      if (fiestaMatchesDate(f, current)) {
        dayEvents.push({
          id: `fiesta-${f.id}`,
          brgy_id: f.brgy_id,
          title: f.patron || `${getBarangayLabel(f.brgy_id)} Fiesta`,
          description: '',
          isFiesta: true,
        })
      }
    })

    // if a specific barangay is selected, only show its events in calendar marks
    if (selectedBarangay.value !== 'all') {
      dayEvents = dayEvents.filter((e) => String(e.brgy_id) === String(selectedBarangay.value))
    }
=======
    const dateStr = current.toISOString().split('T')[0]
    const isCurrentMonth = current.getMonth() === month
    const isToday = current.toDateString() === new Date().toDateString()
    const dayEvents = eventsByDate.value[dateStr] || []
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29

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
<<<<<<< HEAD
}

const closeModal = () => {
  showAddModal.value = false
  newEvent.value = { brgyId: '', title: '', description: '' }
  editDraft.value = { id: null, brgyId: '', title: '', description: '' }
  editingEventId.value = null
}

const openAddModal = () => {
  if (!selectedDate.value) {
    alert('Please select a date first')
    return
  }

  // prefill barangay when a specific one is selected
  newEvent.value.brgyId = selectedBarangay.value !== 'all' ? selectedBarangay.value : ''
  showAddModal.value = true
}

const startEdit = (event) => {
  editingEventId.value = event.id
  editDraft.value = {
    id: event.id,
    brgyId: event.brgy_id,
    title: event.title,
    description: event.description,
  }
}

const cancelEdit = () => {
  editingEventId.value = null
  editDraft.value = { id: null, brgyId: '', title: '', description: '' }
}

const saveEdit = async () => {
  if (!editDraft.value.id) return
  if (!editDraft.value.description.trim()) {
    alert('Please add a description')
    return
  }

  isUpdatingEvent.value = true
  try {
    const payload = {
      brgy_id: editDraft.value.brgyId,
      title: editDraft.value.title?.trim() || 'Barangay Event',
      description: editDraft.value.description.trim(),
    }

    const { error: updateError } = await supabase
      .from('BrgyEvents')
      .update(payload)
      .eq('id', editDraft.value.id)

    if (updateError) throw updateError

    await fetchEvents()
    cancelEdit()
  } catch (err) {
    console.error('Error updating event:', err)
    alert('Failed to update event. Please try again.')
  } finally {
    isUpdatingEvent.value = false
  }
}

const deleteEvent = async (event) => {
  if (!event?.id) return
  if (!confirm('Are you sure you want to delete this event?')) return

  isDeletingEvent.value = true
  try {
    const { error: deleteError } = await supabase.from('BrgyEvents').delete().eq('id', event.id)

    if (deleteError) throw deleteError

    await fetchEvents()
  } catch (err) {
    console.error('Error deleting event:', err)
    alert('Failed to delete event. Please try again.')
  } finally {
    isDeletingEvent.value = false
  }
}

const fetchBarangays = async () => {
  try {
    const { data, error: brgyError } = await supabase
      .from('Barangays')
      .select('id, brgyname')
      .order('brgyname', { ascending: true })

    if (brgyError) throw brgyError

    barangayOptions.value = (data || []).map((item) => ({ id: item.id, label: item.brgyname }))
  } catch (err) {
    console.error('Error fetching barangays:', err)
  }
}

const saveEvent = async () => {
  if (!selectedDate.value) return
  if (!newEvent.value.brgyId) {
    alert('Please select a barangay')
    return
  }
  if (!newEvent.value.description.trim()) {
    alert('Please add a description')
    return
  }

  isSavingEvent.value = true
  try {
    const payload = {
      brgy_id: newEvent.value.brgyId,
      title: newEvent.value.title?.trim() || 'Barangay Event',
      description: newEvent.value.description.trim(),
      event_date: formatLocalDate(selectedDate.value),
    }

    const { error: insertError } = await supabase.from('BrgyEvents').insert(payload)

    if (insertError) throw insertError

    await fetchEvents()
    closeModal()
  } catch (err) {
    console.error('Error saving event:', err)
    alert('Failed to save event. Please try again.')
  } finally {
    isSavingEvent.value = false
  }
}

// --- Search / selection helpers ---
const filteredBarangayOptions = computed(() => {
  const all = [{ id: 'all', label: 'All Barangay' }, ...barangayOptions.value]
  const q = (searchTerm.value || '').toLowerCase().trim()
  if (!q) return all
  return all.filter((b) => b.label.toLowerCase().includes(q))
})

const selectBarangay = (id) => {
  selectedBarangay.value = id
  const found =
    id === 'all' ? { label: 'All Barangay' } : barangayOptions.value.find((b) => b.id === id)
  searchTerm.value = found ? found.label : ''
  searchFocused.value = false
}

// --- Utility & view helpers ---
const getUniqueBarangays = (events) => {
  const barangays = events.map((event) => event.brgy_id)
  return [...new Set(barangays)]
}

const getBarangayEventCount = (barangay) => {
  return selectedDateEvents.value.filter((event) => event.brgy_id === barangay).length
}

const getEventsByBarangay = (barangay) => {
  return selectedDateEvents.value.filter((event) => event.brgy_id === barangay)
}

const getBarangayLabel = (brgyId) => {
  const match = barangayOptions.value.find((item) => item.id === brgyId)
  return match ? match.label : 'Unknown Barangay'
}

const isTodaySelected = computed(() => {
  return selectedDate.value && formatLocalDate(selectedDate.value) === formatLocalDate(new Date())
})

// Load data on mount
onMounted(() => {
  fetchEvents()
  fetchBarangays()
  fetchFiestas()
})
=======
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
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
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

.event-card {
  animation: event-fade-in 0.5s ease-out both;
}

.event-card:hover {
  transform: translateY(-2px);
}

.event-card:nth-child(1) {
  animation-delay: 0.03s;
}
.event-card:nth-child(2) {
  animation-delay: 0.06s;
}
.event-card:nth-child(3) {
  animation-delay: 0.09s;
}
.event-card:nth-child(4) {
  animation-delay: 0.12s;
}
.event-card:nth-child(5) {
  animation-delay: 0.15s;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 9999px;
  transition:
    transform 0.2s ease,
    color 0.2s ease,
    background-color 0.2s ease;
}

.icon-btn:hover {
  transform: translateY(-1px) scale(1.05);
  background-color: rgba(0, 69, 149, 0.08);
}

.event-edit {
  animation: edit-slide 0.25s ease-out;
}

/* Scroll styling for events list */
.events-scroll {
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.12) transparent;
}
.events-scroll::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.events-scroll::-webkit-scrollbar-track {
  background: transparent;
}
.events-scroll::-webkit-scrollbar-thumb {
  background-color: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
}

/* Today highlight pulse */
.today-pulse {
  animation: today-pulse 1.6s ease-in-out infinite;
}
@keyframes today-pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
  }
  50% {
    transform: scale(1.06);
    box-shadow: 0 0 12px 6px rgba(245, 158, 11, 0.08);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(245, 158, 11, 0);
  }
}

@keyframes event-fade-in {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes edit-slide {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .event-card,
  .event-edit {
    animation: none;
  }

  .event-card:hover,
  .icon-btn:hover {
    transform: none;
  }
}
=======
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
</style>
