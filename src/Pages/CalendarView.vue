<template>
  <div
    class="min-h-screen bg-linear-to-br from-[#004595]/5 via-[#ffffff] to-[#00397a]/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-['Poppins']"
  >
    <!-- Header Banner -->
    <div
      class="relative overflow-hidden bg-linear-to-r from-[#002147] via-[#004595] to-[#00397a] p-3 xs:p-4 sm:p-6 shadow-2xl"
    >
      <div
        class="absolute top-0 right-0 w-48 h-48 xs:w-64 xs:h-64 sm:w-96 sm:h-96 bg-white/10 rounded-full blur-3xl -mr-24 xs:-mr-32 sm:-mr-48 -mt-24 xs:-mt-32 sm:-mt-48"
      ></div>
      <div
        class="absolute bottom-0 left-0 w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-2xl -ml-20 xs:-ml-24 sm:-ml-32 -mb-20 xs:-mb-24 sm:-mb-32"
      ></div>

      <div class="relative z-10 max-w-7xl mx-auto">
        <div
          class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4"
        >
          <div class="flex items-center gap-2 sm:gap-4">
            <div class="p-2 sm:p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <svg
                class="w-6 sm:w-10 h-6 sm:h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h1 class="text-lg sm:text-3xl font-bold text-white tracking-tight">
                Community Events Calendar
              </h1>
              <p class="text-xs sm:text-sm text-blue-100 mt-1 font-medium">
                Manage and track barangay events efficiently
              </p>
            </div>
          </div>

          <!-- Quick Stats in Header -->
          <div class="flex flex-row items-center gap-2 sm:gap-3 overflow-x-auto pb-2">
            <div
              class="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 border border-white/20 shrink-0"
            >
              <div class="flex items-center gap-2 sm:gap-3">
                <div class="p-1 sm:p-2 bg-amber-500/20 rounded-lg sm:rounded-xl">
                  <svg
                    class="w-4 sm:w-5 h-4 sm:h-5 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-medium text-blue-100 hidden sm:block">Pending</p>
                  <p class="text-lg sm:text-2xl font-bold text-white">{{ pendingEvents.length }}</p>
                </div>
              </div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 border border-white/20 shrink-0"
            >
              <div class="flex items-center gap-2 sm:gap-3">
                <div class="p-1 sm:p-2 bg-green-500/20 rounded-lg sm:rounded-xl">
                  <svg
                    class="w-4 sm:w-5 h-4 sm:h-5 text-green-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-medium text-blue-100 hidden sm:block">Completed</p>
                  <p class="text-lg sm:text-2xl font-bold text-white">{{ doneEvents.length }}</p>
                </div>
              </div>
            </div>

            <div
              class="bg-white/10 backdrop-blur-md rounded-lg sm:rounded-2xl px-3 sm:px-6 py-2 sm:py-3 border border-white/20 shrink-0"
            >
              <div class="flex items-center gap-2 sm:gap-3">
                <div class="p-1 sm:p-2 bg-purple-500/20 rounded-lg sm:rounded-xl">
                  <svg
                    class="w-4 sm:w-5 h-4 sm:h-5 text-purple-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                    />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-medium text-blue-100 hidden sm:block">Fiestas</p>
                  <p class="text-lg sm:text-2xl font-bold text-white">
                    {{ selectedDateFiestas.length }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row min-h-[calc(100vh-140px)]">
      <!-- Left Side: Calendar -->
      <aside
        class="w-full lg:w-1/2 bg-linear-to-b from-white via-[#ffffff] to-white   shadow-2xl lg:border-r border-b lg:border-b-0 border-[#004595]/10 dark:border-gray-700"
      >
        <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col">
          <!-- Calendar Section Title -->
          <div class="mb-4 sm:mb-6">
            <h2 class="text-lg sm:text-2xl font-bold text-[#002147] dark:text-white-100 mb-1 sm:mb-2">
              Select Event Date
            </h2>
            <p class="text-sm sm:text-base text-gray-100 dark:text-gray-400">
              Click on any date to view or add events
            </p>
          </div>

          <!-- Calendar Navigation -->
          <div
            class="bg-white dark:bg-gray-100 rounded-2xl shadow-xl border border-[#004595]/10 dark:border-gray-700 overflow-hidden shrink-0"
          >
            <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-4 sm:px-6 py-3 sm:py-4">
              <div class="flex items-center justify-between gap-2">
                <button
                  @click="prevMonth"
                  class="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-all transform hover:scale-110"
                >
                  <svg
                    class="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <h2 class="text-lg sm:text-2xl font-bold text-white text-center flex-1">
                  {{ monthNames[currentDate.getMonth()] }} {{ currentDate.getFullYear() }}
                </h2>
                <button
                  @click="nextMonth"
                  class="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-all transform hover:scale-110"
                >
                  <svg
                    class="w-5 sm:w-6 h-5 sm:h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Calendar Grid -->
            <div class="p-3 sm:p-6">
              <div class="grid grid-cols-7 gap-1 sm:gap-2">
                <!-- Day Headers -->
                <div
                  v-for="day in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
                  :key="day"
                  class="p-1 sm:p-3 text-center text-xs sm:text-sm font-bold text-[#004595] uppercase"
                >
                  {{ day }}
                </div>

                <!-- Calendar Days -->
                <div
                  v-for="day in calendarDays"
                  :key="day.dateStr"
                  :class="[
                    'min-h-14 sm:min-h-18 p-1.5 sm:p-3 border cursor-pointer transition-all duration-200 relative rounded-lg sm:rounded-xl text-xs sm:text-sm',

                    day.isCurrentMonth
                      ? 'bg-white hover:bg-blue-50'
                      : 'bg-gray-50 text-gray-400 hover:bg-gray-100',
                    day.isToday
                      ? 'bg-blue-50 border-blue-400 shadow-lg ring-2 ring-blue-300'
                      : 'border-gray-200',
                    day.hasEvents ? 'border-l-4 border-l-purple-400' : '',
                    selectedDate?.toDateString() === day.date.toDateString()
                      ? 'ring-2 ring-blue-500 shadow-xl scale-105 bg-blue-100'
                      : '',
                  ]"
                  @click="selectDate(day)"
                >
                  <div
                    :class="[
                      'text-sm font-bold mb-1',
                      day.isToday ? 'text-white' : 'text-gray-800',
                    ]"
                  >
                    <span
                      v-if="day.isToday"
                      class="w-7 h-7 flex items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-600 text-white font-bold shadow-lg mx-auto"
                    >
                      {{ day.date.getDate() }}
                    </span>
                    <span v-else class="block text-center">
                      {{ day.date.getDate() }}
                    </span>
                  </div>

                  <!-- Event indicators -->
                  <div v-if="day.hasEvents" class="flex justify-center gap-1">
                    <div
                      v-for="i in Math.min(day.events.length, 3)"
                      :key="i"
                      class="w-2 h-2 rounded-full shadow-sm"
                      :class="
                        day.events[i - 1]?.type === 'fiesta'
                          ? 'bg-purple-500'
                          : day.events[i - 1]?.status
                            ? 'bg-green-500'
                            : 'bg-amber-500'
                      "
                    ></div>
                  </div>

                  <!-- Event count badge -->
                  <div v-if="day.events.length > 3" class="absolute top-1 right-1">
                    <span
                      class="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full"
                    >
                      {{ day.events.length }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Legend -->
          <div class="mt-6 bg-white rounded-2xl shadow-lg border border-[#004595]/10 p-6">
            <h3 class="text-sm font-bold text-[#002147] mb-4 uppercase tracking-wide">Legend</h3>
            <div class="grid grid-cols-3 gap-4">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span class="text-sm text-gray-700 font-medium">Pending</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                <span class="text-sm text-gray-700 font-medium">Completed</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span class="text-sm text-gray-700 font-medium">Fiesta</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <!-- Right Side: Events List -->
      <main
        class="w-full lg:w-1/2 bg-linear-to-br from-white via-[#ffffff] to-white overflow-auto"
      >
        <div class="p-4 sm:p-6 md:p-8 h-full flex flex-col">
          <!-- Page Header -->
          <div class="mb-4 sm:mb-6 shrink-0">
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mb-3 sm:mb-4"
            >
              <div>
                <h2 class="text-lg sm:text-2xl font-bold text-[#002147] mb-0.5 sm:mb-1">
                  {{
                    selectedDate
                      ? selectedDate.toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })
                      : 'Event Management'
                  }}
                </h2>
                <p class="text-xs sm:text-base text-gray-600 font-medium">
                  {{ selectedDate ? 'Manage events for this day' : 'Select a date to view events' }}
                </p>
              </div>
              <button
                @click="openAddModal"
                :disabled="!selectedDate"
                class="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-linear-to-r from-[#004595] to-[#0056b3] text-white text-sm sm:text-base font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center sm:justify-start gap-2"
              >
                <svg
                  class="w-4 sm:w-5 h-4 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span>Add Event</span>
              </button>
            </div>

            <!-- Barangay Filter -->
            <div
              v-if="selectedDate"
              class="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 bg-white rounded-lg sm:rounded-xl shadow-lg border border-[#004595]/10 p-3 sm:p-4"
            >
              <label
                class="text-xs sm:text-sm font-bold text-[#002147] uppercase tracking-wide whitespace-nowrap"
                >Filter:</label
              >
              <select
                v-model="barangaySearch"
                class="w-full sm:flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg sm:rounded-xl bg-white text-xs sm:text-base focus:outline-none focus:ring-2 focus:ring-[#004595] focus:border-transparent transition-all font-medium"
              >
                <option value="">All Barangays</option>
                <option v-for="brgy in barangayOptions" :key="brgy.id" :value="brgy.label">
                  {{ brgy.label }}
                </option>
              </select>
            </div>
          </div>

          <!-- Status Filter Tabs -->
          <div
            v-if="selectedDate && filteredBaseEvents.length > 0"
            class="mb-4 sm:mb-6 shrink-0"
          >
            <div
              class="flex flex-wrap gap-1 sm:gap-2 bg-white p-1.5 sm:p-2 rounded-lg sm:rounded-xl shadow-lg border border-[#004595]/10"
            >
              <button
                @click="statusFilter = 'all'"
                :class="[
                  'flex-1 min-w-20 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300',

                  statusFilter === 'all'
                    ? 'bg-linear-to-r from-[#004595] to-[#0056b3] text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-[#004595] hover:bg-gray-50',
                ]"
              >
                All ({{ filteredBaseEvents.length }})
              </button>
              <button
                @click="statusFilter = 'pending'"
                :class="[
                  'flex-1 min-w-20 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300',

                  statusFilter === 'pending'
                    ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-amber-600 hover:bg-amber-50',
                ]"
              >
                Pending ({{ pendingEvents.length }})
              </button>
              <button
                @click="statusFilter = 'done'"
                :class="[
                  'flex-1 min-w-20 px-2 sm:px-4 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300',

                  statusFilter === 'done'
                    ? 'bg-linear-to-r from-green-500 to-emerald-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-green-600 hover:bg-green-50',
                ]"
              >
                Done ({{ doneEvents.length }})
              </button>
            </div>
          </div>

          <!-- Events List Container -->
          <div class="max-h-150 overflow-y-auto flex-1 overflow-hidden">
            <div
              class="h-full bg-white rounded-2xl shadow-2xl border border-[#004595]/10 overflow-y-auto"
            >
              <div class="p-4 sm:p-6">
                <!-- Empty State - No Date Selected -->
                <div v-if="!selectedDate" class="text-center py-10 sm:py-20">
                  <div
                    class="w-16 sm:w-24 h-16 sm:h-24 bg-linear-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                  >
                    <svg
                      class="w-8 sm:w-12 h-8 sm:h-12 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-lg sm:text-2xl font-bold text-[#002147] mb-2 sm:mb-3">
                    No Date Selected
                  </h3>
                  <p class="text-xs sm:text-base text-gray-600 max-w-md mx-auto">
                    Choose a date from the calendar on the left to view and manage events
                  </p>
                </div>

                <!-- Empty State - No Events -->
                <div v-else-if="filteredBaseEvents.length === 0" class="text-center py-10 sm:py-20">
                  <div
                    class="w-16 sm:w-24 h-16 sm:h-24 bg-linear-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg"
                  >
                    <svg
                      class="w-8 sm:w-12 h-8 sm:h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-lg sm:text-2xl font-bold text-[#002147] mb-2 sm:mb-3">
                    No Events Scheduled
                  </h3>
                  <p class="text-xs sm:text-base text-gray-600 mb-4 sm:mb-6">
                    There are no events for this date yet
                  </p>
                  <button
                    @click="openAddModal"
                    class="px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-linear-to-r from-[#004595] to-[#0056b3] text-white text-sm sm:text-base font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    Add First Event
                  </button>
                </div>

                <!-- Events List -->
                <div v-else class="space-y-4 sm:space-y-6">
                  <!-- Pending Events Section -->
                  <div v-if="statusFilter === 'all' || statusFilter === 'pending'">
                    <div v-if="pendingEvents.length > 0">
                      <div class="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-5">
                        <div
                          class="w-1 sm:w-1.5 h-6 sm:h-8 bg-linear-to-b from-amber-400 to-amber-600 rounded-full"
                        ></div>
                        <h4 class="text-base sm:text-xl font-bold text-amber-700">
                          Pending Events
                        </h4>
                        <span
                          class="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-amber-100 text-amber-700 rounded-full font-bold text-xs sm:text-sm"
                        >
                          {{ pendingEvents.length }}
                        </span>
                      </div>
                      <div class="space-y-3 sm:space-y-4">
                        <div
                          v-for="event in pendingEvents"
                          :key="event.id"
                          class="event-card group bg-linear-to-br from-amber-50 via-white to-yellow-50 border-2 border-amber-200 hover:border-amber-400 rounded-lg sm:rounded-2xl p-3 sm:p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                        >
                          <div
                            class="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4"
                          >
                            <div class="flex-1 min-w-0 w-full">
                              <div class="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
                                <span
                                  class="inline-block w-2 sm:w-2.5 h-2 sm:h-2.5 bg-amber-500 rounded-full animate-pulse"
                                ></span>
                                <h5 class="font-bold text-[#002147] text-sm sm:text-lg">
                                  {{ event.title }}
                                </h5>
                                <span
                                  class="px-2 sm:px-3 py-0.5 sm:py-1 bg-linear-to-r from-amber-400 to-amber-500 text-white rounded-full font-bold text-xs shadow-sm"
                                >
                                  ⏱ Pending
                                </span>
                                <span
                                  v-if="event.event_time"
                                  class="px-2 sm:px-3 py-0.5 sm:py-1 bg-blue-100 text-blue-700 rounded-full font-semibold text-xs flex items-center gap-1"
                                >
                                  <svg
                                    class="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {{ formatTime(event.event_time) }}
                                </span>
                              </div>
                              <p
                                class="text-xs sm:text-sm text-gray-700 mb-2 sm:mb-3 leading-relaxed"
                              >
                                {{ event.description }}
                              </p>
                              <div class="flex items-center gap-1.5 sm:gap-2">
                                <svg
                                  class="w-3 sm:w-4 h-3 sm:h-4 text-gray-500 shrink-0"
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
                                <span class="text-sm text-gray-600 font-medium">{{
                                  getBarangayLabel(event.brgy_id)
                                }}</span>
                              </div>
                            </div>
                            <div class="flex items-center gap-2 shrink-0">
                              <button
                                @click="markEventDone(event)"
                                class="p-2.5 rounded-xl text-green-600 hover:text-white hover:bg-green-600 transition-all duration-300 hover:shadow-lg group"
                                title="Mark as Done"
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
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                              </button>
                              <button
                                @click="startEdit(event)"
                                class="p-2.5 rounded-xl text-blue-600 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:shadow-lg"
                                title="Edit Event"
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
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                  />
                                </svg>
                              </button>
                              <button
                                @click="deleteEvent(event)"
                                class="p-2.5 rounded-xl text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 hover:shadow-lg"
                                title="Delete Event"
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
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>

                          <div
                            v-if="editingEventId === event.id"
                            class="mt-5 bg-white border-2 border-blue-300 rounded-2xl p-6 shadow-xl"
                          >
                            <h6
                              class="text-sm font-bold text-[#002147] mb-4 uppercase tracking-wide"
                            >
                              Edit Event
                            </h6>
                            <div class="grid grid-cols-1 gap-4">
                              <div>
                                <label class="block text-sm font-bold text-gray-700 mb-2"
                                  >Barangay</label
                                >
                                <select
                                  v-model="editDraft.brgyId"
                                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all font-medium"
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
                                <label class="block text-sm font-bold text-gray-700 mb-2"
                                  >Title</label
                                >
                                <input
                                  v-model="editDraft.title"
                                  type="text"
                                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all font-medium"
                                  placeholder="Event title"
                                />
                              </div>
                              <div>
                                <label class="block text-sm font-bold text-gray-700 mb-2"
                                  >Description</label
                                >
                                <textarea
                                  v-model="editDraft.description"
                                  rows="3"
                                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all font-medium resize-none"
                                  placeholder="Event description..."
                                ></textarea>
                              </div>
                              <div>
                                <label class="block text-sm font-bold text-gray-700 mb-2"
                                  >Time (Optional)</label
                                >
                                <input
                                  v-model="editDraft.time"
                                  type="time"
                                  class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all font-medium"
                                  @change="convertTo12Hour('edit')"
                                />
                                <p class="text-xs text-gray-500 mt-2 font-medium">
                                  {{
                                    editDraft.time
                                      ? convertTimeTo12Hour(editDraft.time)
                                      : 'No time set'
                                  }}
                                </p>
                              </div>
                            </div>

                            <div class="mt-5 flex justify-end gap-3">
                              <button
                                @click="cancelEdit"
                                class="px-5 py-2.5 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 font-bold transition-all"
                              >
                                Cancel
                              </button>
                              <button
                                @click="saveEdit"
                                :disabled="isUpdatingEvent"
                                class="px-5 py-2.5 rounded-xl bg-linear-to-r from-blue-600 to-blue-700 text-white hover:shadow-xl font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {{ isUpdatingEvent ? 'Saving...' : 'Save Changes' }}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Done Events Section -->
                  <div v-if="statusFilter === 'all' || statusFilter === 'done'">
                    <div v-if="doneEvents.length > 0">
                      <div class="flex items-center gap-3 mb-5 mt-8">
                        <div
                          class="w-1.5 h-8 bg-linear-to-b from-green-400 to-green-600 rounded-full"
                        ></div>
                        <h4 class="text-xl font-bold text-green-700">Completed Events</h4>
                        <span
                          class="px-3 py-1 bg-green-100 text-green-700 rounded-full font-bold text-sm"
                        >
                          {{ doneEvents.length }}
                        </span>
                      </div>
                      <div class="space-y-4">
                        <div
                          v-for="event in doneEvents"
                          :key="event.id"
                          class="event-card bg-linear-to-br from-green-50 via-white to-emerald-50 border-2 border-green-200 hover:border-green-400 rounded-2xl p-6 opacity-90 hover:opacity-100 hover:shadow-2xl transition-all duration-300"
                        >
                          <div class="flex items-start justify-between gap-4">
                            <div class="flex-1 min-w-0">
                              <div class="flex items-center gap-2 mb-3 flex-wrap">
                                <svg
                                  class="w-6 h-6 text-green-600 shrink-0"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                  />
                                </svg>
                                <h5
                                  class="font-bold text-[#002147] text-lg line-through decoration-green-600 decoration-2"
                                >
                                  {{ event.title }}
                                </h5>
                                <span
                                  class="px-3 py-1 bg-linear-to-r from-green-400 to-green-500 text-white rounded-full font-bold text-xs shadow-sm"
                                >
                                  ✓ Completed
                                </span>
                                <span
                                  v-if="event.event_time"
                                  class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full font-semibold text-xs flex items-center gap-1.5"
                                >
                                  <svg
                                    class="w-3.5 h-3.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                  {{ formatTime(event.event_time) }}
                                </span>
                              </div>
                              <p class="text-sm text-gray-600 mb-3 line-through leading-relaxed">
                                {{ event.description }}
                              </p>
                              <div class="flex items-center gap-2">
                                <svg
                                  class="w-4 h-4 text-gray-500 shrink-0"
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
                                <span class="text-sm text-gray-600 font-medium">{{
                                  getBarangayLabel(event.brgy_id)
                                }}</span>
                              </div>
                            </div>
                            <div class="flex items-center gap-3 shrink-0">
                              <span class="text-xs text-green-600 italic font-semibold"
                                >✓ Done</span
                              >
                              <button
                                @click="deleteEvent(event)"
                                class="p-2.5 rounded-xl text-red-600 hover:text-white hover:bg-red-600 transition-all duration-300 hover:shadow-lg"
                                title="Delete Event"
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
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Barangay Fiestas Section -->
                  <div v-if="selectedDate && selectedDateFiestas.length > 0" class="mt-8">
                    <div class="flex items-center gap-3 mb-5">
                      <div
                        class="w-1.5 h-8 bg-linear-to-b from-purple-400 to-purple-600 rounded-full"
                      ></div>
                      <h4 class="text-xl font-bold text-purple-700">Barangay Fiestas</h4>
                      <span
                        class="px-3 py-1bg-linear-to-br  dark:to-gray-100 rounded-full border border-black/10 font-bold text-sm"
                      >
                        {{ selectedDateFiestas.length }}
                      </span>
                    </div>
                    <div class="space-y-4">
                      <div
                        v-for="(fiesta, index) in selectedDateFiestas"
                        :key="index"
                        class="event-card bg-linear-to-br dark:to-gray-100 border border-[#004595]/10  rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                      >
                        <div class="flex items-start gap-4">
                          <div class="p-3 bg-purple-100 rounded-xl shrink-0">
                            <svg
                              class="w-6 h-6 text-purple-600"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              />
                            </svg>
                          </div>
                          <div class="flex-1 min-w-0 ">
                            <div class="flex items-center gap-2 mb-3 flex-wrap">
                              <h5 class="font-bold text-white text-lg">{{ fiesta.patron }}</h5>
                              <span
                                class="px-3 py-1 bg-linear-to-r from-purple-400 to-purple-500 text-white rounded-full font-bold text-xs shadow-sm"
                              >
                                🎉 Fiesta
                              </span>
                            </div>
                            <p class="text-sm text-gray-700 mb-3 font-medium">
                              {{ fiesta.brgyname }}
                            </p>
                            <div class="flex items-center gap-2">
                              <svg
                                class="w-4 h-4 text-gray-500 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              <span class="text-sm text-gray-600 font-medium">{{
                                formatFiestaDate(fiesta.date)
                              }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Empty state when filter shows no results -->
                  <div
                    v-if="filteredEvents.length === 0 && statusFilter !== 'all'"
                    class="text-center py-16"
                  >
                    <div
                      class="w-20 h-20 bg-linear-to-br from-gray-100 to-gray-50 rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg"
                    >
                      <svg
                        class="w-10 h-10 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                        />
                      </svg>
                    </div>
                    <p class="text-gray-500 text-xl font-bold mb-2">
                      No
                      {{
                        statusFilter === 'pending'
                          ? 'pending'
                          : statusFilter === 'done'
                            ? 'completed'
                            : ''
                      }}
                      events
                    </p>
                    <p class="text-gray-400">Try selecting a different filter or date</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Add Event Modal -->
    <div
      v-if="showAddModal"
      class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden transform transition-all"
        @click.stop
      >
        <!-- Modal Header -->
        <div
          class="bg-linear-to-r from-[#002147] via-[#004595] to-[#00397a] px-8 py-6 relative overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"
          ></div>
          <div class="relative z-10 flex items-center justify-between">
            <div>
              <h3 class="text-2xl font-bold text-white mb-1">Add New Event</h3>
              <p class="text-blue-100 text-sm">
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
              </p>
            </div>
            <button
              @click="closeModal"
              class="p-2 hover:bg-white/20 rounded-xl transition-all transform hover:scale-110"
            >
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div class="p-8 space-y-5 overflow-y-auto max-h-[calc(85vh-140px)]">
          <div>
            <label class="block text-sm font-bold text-[#002147] mb-2 uppercase tracking-wide"
              >Barangay</label
            >
            <select
              v-model="newEvent.brgyId"
              class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004595] focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all font-medium text-gray-700"
            >
              <option value="">Select barangay</option>
              <option v-for="brgy in barangayOptions" :key="brgy.id" :value="brgy.id">
                {{ brgy.label }}
              </option>
            </select>
          </div>

          <div>
            <label class="block text-sm font-bold text-[#002147] mb-2 uppercase tracking-wide"
              >Event Title</label
            >
            <input
              v-model="newEvent.title"
              type="text"
              class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004595] focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all font-medium text-gray-700"
              placeholder="Enter event title..."
            />
          </div>

          <div>
            <label class="block text-sm font-bold text-[#002147] mb-2 uppercase tracking-wide"
              >Description</label
            >
            <textarea
              v-model="newEvent.description"
              rows="4"
              class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004595] focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all font-medium text-gray-700 resize-none"
              placeholder="Describe the event in detail..."
            ></textarea>
          </div>

          <div>
            <label class="block text-sm font-bold text-[#002147] mb-2 uppercase tracking-wide"
              >Time (Optional)</label
            >
            <input
              v-model="newEvent.time"
              type="time"
              class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-[#004595] focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all font-medium text-gray-700"
              @change="convertTo12Hour('new')"
            />
            <p class="text-sm text-gray-500 mt-2 font-medium">
              {{
                newEvent.time
                  ? `Selected: ${convertTimeTo12Hour(newEvent.time)}`
                  : 'Set event time for notifications'
              }}
            </p>
          </div>

          <div class="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              @click="closeModal"
              class="px-6 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              @click="saveEvent"
              :disabled="isSavingEvent"
              class="px-6 py-3 rounded-xl bg-linear-to-r from-[#004595] to-[#0056b3] text-white font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {{ isSavingEvent ? 'Saving...' : 'Save Event' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import headbk from '@/assets/landing.jpg'

const selectedDate = ref(null)
const showAddModal = ref(false)
const currentDate = ref(new Date())
const eventsData = ref([])
const fiestaData = ref([])
const loading = ref(true)
const error = ref(null)
const barangayOptions = ref([])
const isSavingEvent = ref(false)
const isUpdatingEvent = ref(false)
const isDeletingEvent = ref(false)
const editingEventId = ref(null)
const statusFilter = ref('all') // 'all', 'pending', 'done'
const notifiedEvents = ref(new Set()) // Track which events have been notified
const barangaySearch = ref('')
const newEvent = ref({
  brgyId: '',
  title: '',
  description: '',
  time: '',
})
const editDraft = ref({
  id: null,
  brgyId: '',
  title: '',
  description: '',
  time: '',
})

// Fetch events from Supabase
const fetchEvents = async () => {
  try {
    loading.value = true
    error.value = null
    const { data, error: fetchError } = await supabase
      .from('BrgyEvents')
      .select('id, brgy_id, title, description, event_date, event_time, status')
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

const selectedDateEvents = computed(() => {
  if (!selectedDate.value) return []
  const dateStr = formatLocalDate(selectedDate.value)
  const calendarYear = currentDate.value.getFullYear()

  // Combine regular events and fiestas
  const events = eventsData.value.filter((event) => getEventDateStr(event) === dateStr)
  const fiestas = fiestaData.value
    .filter((fiesta) => {
      const fiestaDate =
        convertTextDateToISO(fiesta.date, calendarYear) || normalizeDateStr(fiesta.date)
      return fiestaDate === dateStr
    })
    .map((fiesta) => ({
      ...fiesta,
      type: 'fiesta',
      title: fiesta.patron,
      description: `${fiesta.brgyname} - Barangay Fiesta`,
      id: `fiesta-${fiesta.patron}`, // Create unique ID for fiestas
    }))

  return [...events, ...fiestas]
})

const selectedDateFiestas = computed(() => {
  if (!selectedDate.value) return []
  return selectedDateEvents.value.filter((item) => item.type === 'fiesta')
})

const filteredBaseEvents = computed(() => {
  const query = barangaySearch.value.trim().toLowerCase()
  console.log('Filter query:', query)
  console.log('All events:', selectedDateEvents.value)

  if (!query) return selectedDateEvents.value

  const filtered = selectedDateEvents.value.filter((event) => {
    // For fiestas, compare with brgyname directly
    if (event.type === 'fiesta') {
      const brgyname = event.brgyname?.toLowerCase() || ''
      console.log('Fiesta check:', { brgyname, query, event })
      // Check if query matches the brgyname or if brgyname is part of query (handles "Barangay Apas" vs "Apas")
      const matches = brgyname.includes(query) || query.includes(brgyname)
      console.log('Fiesta matches:', matches)
      return matches
    }
    // For regular events, use brgy_id
    const label = getBarangayLabel(event.brgy_id).toLowerCase()
    const idText = String(event.brgy_id ?? '').toLowerCase()
    console.log('Event check:', { label, idText, query, brgy_id: event.brgy_id })
    return label.includes(query) || idText.includes(query)
  })

  console.log('Filtered results:', filtered)
  return filtered
})

const pendingEvents = computed(() => {
  return filteredBaseEvents.value.filter((event) => event.type !== 'fiesta' && !event.status)
})

const doneEvents = computed(() => {
  return filteredBaseEvents.value.filter((event) => event.type !== 'fiesta' && event.status)
})

const filteredEvents = computed(() => {
  if (statusFilter.value === 'pending') return pendingEvents.value
  if (statusFilter.value === 'done') return doneEvents.value
  return filteredBaseEvents.value
})

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

const normalizeDateStr = (value) => {
  if (!value) return ''
  if (typeof value === 'string') return value.split('T')[0]
  try {
    return formatLocalDate(new Date(value))
  } catch {
    return ''
  }
}

// Convert text date like "May 18" to YYYY-MM-DD format for specified year (or current year)
const convertTextDateToISO = (textDate, year = null) => {
  if (!textDate) return ''
  try {
    // Parse "May 18" format
    const targetYear = year || new Date().getFullYear()
    const dateStr = `${textDate} ${targetYear}`
    const date = new Date(dateStr)

    if (isNaN(date.getTime())) return ''

    return formatLocalDate(date)
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

const eventsByDate = computed(() => {
  const eventsMap = {}
  const calendarYear = currentDate.value.getFullYear()

  // Add regular events
  eventsData.value.forEach((event) => {
    const dateKey = getEventDateStr(event)
    if (!eventsMap[dateKey]) {
      eventsMap[dateKey] = []
    }
    eventsMap[dateKey].push({
      ...event,
      type: 'event',
    })
  })

  // Add fiestas
  fiestaData.value.forEach((fiesta, index) => {
    // Convert text date like "May 18" to proper format using calendar year
    const dateKey = convertTextDateToISO(fiesta.date, calendarYear) || normalizeDateStr(fiesta.date)
    if (!dateKey) return // Skip if date conversion failed

    if (!eventsMap[dateKey]) {
      eventsMap[dateKey] = []
    }
    eventsMap[dateKey].push({
      ...fiesta,
      type: 'fiesta',
      title: fiesta.patron,
      description: `${fiesta.brgyname} - Barangay Fiesta`,
      id: `fiesta-${dateKey}-${index}`, // Unique ID for each fiesta
    })
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
    const dateStr = formatLocalDate(current)
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
  barangaySearch.value = ''
}

const closeModal = () => {
  showAddModal.value = false
  newEvent.value = { brgyId: '', title: '', description: '', time: '' }
  editDraft.value = { id: null, brgyId: '', title: '', description: '', time: '' }
  editingEventId.value = null
}

const openAddModal = () => {
  if (!selectedDate.value) {
    alert('Please select a date first')
    return
  }
  showAddModal.value = true
}

const startEdit = (event) => {
  editingEventId.value = event.id
  editDraft.value = {
    id: event.id,
    brgyId: event.brgy_id,
    title: event.title,
    description: event.description,
    time: event.event_time || '',
  }
}

const cancelEdit = () => {
  editingEventId.value = null
  editDraft.value = { id: null, brgyId: '', title: '', description: '', time: '' }
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
      event_time: editDraft.value.time || null,
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

const markEventDone = async (event) => {
  if (!event?.id) return
  if (!confirm('Mark this event as done?')) return

  try {
    const { error: updateError } = await supabase
      .from('BrgyEvents')
      .update({ status: true })
      .eq('id', event.id)

    if (updateError) throw updateError

    await fetchEvents()
    console.log('Event marked as done:', event.title)
  } catch (err) {
    console.error('Error marking event as done:', err)
    alert('Failed to mark event as done. Please try again.')
  }
}

const fetchBarangays = async () => {
  try {
    const { data, error: brgyError } = await supabase
      .from('Barangays')
      .select('id, brgyname')
      .order('brgyname', { ascending: true })

    if (brgyError) throw brgyError

    barangayOptions.value = (data || []).map((item) => ({
      id: item.id,
      label: item.brgyname,
    }))
    console.log('Barangays loaded:', barangayOptions.value)
  } catch (err) {
    console.error('Error fetching barangays:', err)
  }
}

const fetchFiestas = async () => {
  try {
    const { data, error: fiestaError } = await supabase.rpc('brgyfiesta') // Call the PostgreSQL function

    if (fiestaError) throw fiestaError

    fiestaData.value = data || []
    console.log('Fiestas loaded:', data)
  } catch (err) {
    console.error('Error fetching fiestas:', err)
  }
}

const saveEvent = async () => {
  if (!selectedDate.value) {
    alert('Please select a date first')
    return
  }
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
      event_time: newEvent.value.time || null,
    }

    // Validate brgy_id is set
    if (!payload.brgy_id) {
      throw new Error('Barangay ID is required')
    }

    console.log('Saving event with payload:', payload)
    const { error: insertError } = await supabase.from('BrgyEvents').insert(payload)

    if (insertError) throw insertError

    await fetchEvents()
    closeModal()
  } catch (err) {
    console.error('Error saving event:', err)
    alert(err.message || 'Failed to save event. Please try again.')
  } finally {
    isSavingEvent.value = false
  }
}

// Request notification permission
const requestNotificationPermission = async () => {
  if ('Notification' in window && Notification.permission === 'default') {
    await Notification.requestPermission()
  }
}

// Check for upcoming events and send notifications
const checkUpcomingEvents = () => {
  const now = new Date()
  const today = formatLocalDate(now)

  eventsData.value.forEach((event) => {
    if (event.status || !event.event_time || !event.event_date) return

    const eventDate = normalizeDateStr(event.event_date)
    if (eventDate !== today) return

    // Parse event time
    const [timeStr, period] = event.event_time.split(' ')
    const [hours, minutes] = timeStr.split(':').map(Number)
    let eventHours = hours

    if (period === 'PM' && hours !== 12) eventHours += 12
    if (period === 'AM' && hours === 12) eventHours = 0

    const eventDateTime = new Date(now)
    eventDateTime.setHours(eventHours, minutes, 0, 0)

    const diff = (eventDateTime - now) / 1000 / 60 // difference in minutes

    const notifyKey20 = `${event.id}-20`
    const notifyKey10 = `${event.id}-10`
    const notifyKey0 = `${event.id}-0`

    // 20 minutes notification
    if (diff <= 20 && diff > 19 && !notifiedEvents.value.has(notifyKey20)) {
      notifiedEvents.value.add(notifyKey20)
      showNotification(event, 20)
    }

    // 10 minutes notification
    if (diff <= 10 && diff > 9 && !notifiedEvents.value.has(notifyKey10)) {
      notifiedEvents.value.add(notifyKey10)
      showNotification(event, 10)
    }

    // Event time notification (exact time)
    if (diff <= 0 && diff > -1 && !notifiedEvents.value.has(notifyKey0)) {
      notifiedEvents.value.add(notifyKey0)
      showNotification(event, 0)
    }
  })
}

// Show notification
const showNotification = (event, minutesBefore) => {
  let title, body

  if (minutesBefore === 0) {
    title = `🔔 Event Starting Now: ${event.title}`
    body = `${event.description}\n\nThe event is starting right now!`
  } else {
    title = `⏰ Upcoming Event: ${event.title}`
    body = `${event.description}\n\n${minutesBefore} minutes until event starts!`
  }

  // Browser notification
  if ('Notification' in window && Notification.permission === 'granted') {
    const notification = new Notification(title, {
      body,
      icon: '/favicon.ico',
      badge: '/favicon.ico',
      tag: `event-${event.id}-${minutesBefore}`,
      requireInteraction: minutesBefore === 0, // Keep notification visible for event start time
    })

    notification.onclick = () => {
      window.focus()
      notification.close()
    }
  }

  // Also show alert
  const audio = new Audio(
    'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGWm98OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+upVhQKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+utVhUKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+utVhUKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+utVhUKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+utVhUKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AK',
  )
  audio.play().catch(() => {})

  alert(`${title}\n\n${body}\n\nTime: ${event.event_time}`)
}

// Format time for display
const formatTime = (time) => {
  if (!time) return ''

  // If already in 12-hour format (contains AM/PM), return as is
  if (time.includes('AM') || time.includes('PM')) {
    return time
  }

  // Otherwise convert from 24-hour to 12-hour format
  const [hours, minutes] = time.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}

// Format fiesta date for display
const formatFiestaDate = (date) => {
  if (!date) return ''

  // If already in "Month Day" format, return as is
  if (typeof date === 'string' && /^[A-Za-z]+ \d+$/.test(date)) {
    return date
  }

  try {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return date
  }
}

// Convert 24-hour time to 12-hour format with AM/PM
const convertTimeTo12Hour = (time24) => {
  if (!time24) return ''
  const [hours, minutes] = time24.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const hour12 = hour % 12 || 12
  return `${hour12}:${minutes} ${ampm}`
}

// Convert time input to 12-hour format and store it
const convertTo12Hour = (type) => {
  if (type === 'new' && newEvent.value.time) {
    const time12 = convertTimeTo12Hour(newEvent.value.time)
    // Store in 12-hour format
    newEvent.value.time = time12
  } else if (type === 'edit' && editDraft.value.time) {
    const time12 = convertTimeTo12Hour(editDraft.value.time)
    editDraft.value.time = time12
  }
}

// Load events on component mount
onMounted(() => {
  fetchEvents()
  fetchBarangays()
  fetchFiestas()
  requestNotificationPermission()

  // Check for upcoming events every minute
  setInterval(checkUpcomingEvents, 60000)

  // Initial check
  setTimeout(checkUpcomingEvents, 2000)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* Ensure dropdown options are visible with proper styling */
select option {
  background-color: white;
  color: #002147;
  padding: 10px;
}

select option:hover {
  background-color: #f3f4f6;
}

select option:checked {
  background-color: #004595;
  color: white;
  font-weight: 600;
}

/* Event card animations and effects */
.event-card {
  animation: event-fade-in 0.5s ease-out both;
  position: relative;
  overflow: hidden;
}

.event-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.6s ease;
}

.event-card:hover::before {
  left: 100%;
}

/* Staggered animation delays */
.event-card:nth-child(1) {
  animation-delay: 0.05s;
}
.event-card:nth-child(2) {
  animation-delay: 0.1s;
}
.event-card:nth-child(3) {
  animation-delay: 0.15s;
}
.event-card:nth-child(4) {
  animation-delay: 0.2s;
}
.event-card:nth-child(5) {
  animation-delay: 0.25s;
}
.event-card:nth-child(6) {
  animation-delay: 0.3s;
}
.event-card:nth-child(7) {
  animation-delay: 0.35s;
}
.event-card:nth-child(8) {
  animation-delay: 0.4s;
}

/* Keyframe animations */
@keyframes event-fade-in {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #004595, #00397a);
  border-radius: 10px;
  border: 2px solid #f1f5f9;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #002147, #004595);
}

/* Reduced motion preferences */
@media (prefers-reduced-motion: reduce) {
  .event-card,
  .animate-pulse {
    animation: none;
  }

  .event-card:hover,
  .event-card::before {
    transform: none;
    transition: none;
  }

  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Focus styles for accessibility */
button:focus-visible,
select:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 3px solid #004595;
  outline-offset: 2px;
}

/* Print styles */
@media print {
  aside,
  button {
    display: none;
  }

  .event-card {
    page-break-inside: avoid;
    border: 1px solid #000;
  }
}
</style>
