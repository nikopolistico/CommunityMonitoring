<template>
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
                        :key="event.id || event.patron"
                        :class="[
                          'text-xs px-1 py-0.5 rounded truncate font-medium',
                          event.type === 'fiesta'
                            ? 'bg-linear-to-r from-purple-500 to-pink-500 text-white'
                            : event.status 
                            ? 'bg-linear-to-r from-green-500 to-emerald-500 text-white' 
                            : 'bg-linear-to-r from-amber-500 to-yellow-500 text-white'
                        ]"
                        :title="event.type === 'fiesta' ? event.patron + ' (Fiesta)' : event.title + (event.status ? ' (Done)' : ' (Pending)')"
                      >
                        {{ event.type === 'fiesta' ? '🎉 ' + event.patron : (event.status ? '✓ ' : '⏱ ') + event.title }}
                      </div>

                      <div v-if="day.events.length > 2" class="text-xs text-gray-500 font-semibold">
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
            <div class="p-6 flex flex-col max-h-150">
              <!-- Events Header -->
              <div class="mb-6 shrink-0 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
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
                        ? 'Events organized by Policer Officer:'
                        : 'Click on a date in the calendar to view events'
                    }}
                  </p>
                </div>
                <div class="flex flex-col gap-2">
                  <button
                    @click="openAddModal"
                    :disabled="!selectedDate"
                    class="px-4 py-2 rounded-lg bg-linear-to-r from-[#004595] to-[#0056b3] text-white font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    <span class="flex items-center gap-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Add Event
                    </span>
                  </button>

                  <div class="flex items-center gap-2">
                    <select
                      v-model="barangaySearch"
                      :disabled="!selectedDate"
                      class="w-full sm:w-60 px-3 py-2 border-2 border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#004595] focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    >
                      <option value="">All barangays</option>
                      <option v-for="brgy in barangayOptions" :key="brgy.id" :value="brgy.label">
                        {{ brgy.label }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <!-- Status Filter Tabs -->
              <div v-if="selectedDate && filteredBaseEvents.length > 0" class="mb-4 shrink-0">
                <div class="flex gap-2 bg-gray-100 p-1 rounded-lg">
                  <button
                    @click="statusFilter = 'all'"
                    :class="[
                      'flex-1 px-4 py-2 rounded-md font-semibold text-sm transition-all',
                      statusFilter === 'all'
                        ? 'bg-white text-[#004595] shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    ]"
                  >
                    All Events ({{ filteredBaseEvents.length }})
                  </button>
                  <button
                    @click="statusFilter = 'pending'"
                    :class="[
                      'flex-1 px-4 py-2 rounded-md font-semibold text-sm transition-all',
                      statusFilter === 'pending'
                        ? 'bg-white text-amber-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    ]"
                  >
                    Pending ({{ pendingEvents.length }})
                  </button>
                  <button
                    @click="statusFilter = 'done'"
                    :class="[
                      'flex-1 px-4 py-2 rounded-md font-semibold text-sm transition-all',
                      statusFilter === 'done'
                        ? 'bg-white text-green-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    ]"
                  >
                    Done ({{ doneEvents.length }})
                  </button>
                </div>
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

                <div v-else-if="filteredBaseEvents.length === 0" class="text-center py-12">
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

<<<<<<< HEAD
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
                        <div
                          v-if="selectedBarangay !== 'all' && !event.isFiesta"
                          class="ml-3 flex items-center gap-2"
                        >
                          <button
                            @click="startEdit(event)"
                            class="icon-btn text-amber-600"
                            title="Edit"
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
                                d="M11 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-5"
                              />
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
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
=======
                <div v-else class="space-y-6">
                  <!-- Pending Events Section -->
                  <div v-if="statusFilter === 'all' || statusFilter === 'pending'">
                    <div v-if="pendingEvents.length > 0">
                      <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white py-2 z-10">
                        <div class="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full"></div>
                        <h4 class="text-lg font-bold text-amber-700">Pending Events</h4>
                        <span class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-semibold">
                          {{ pendingEvents.length }}
                        </span>
>>>>>>> main
                      </div>
                      <div class="space-y-3">
                        <div
                          v-for="event in pendingEvents"
                          :key="event.id"
                          class="event-card bg-gradient-to-br from-amber-50 to-yellow-50 border-l-4 border-amber-400 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                        >
                          <div class="flex items-start justify-between">
                            <div class="flex-1">
                              <div class="flex items-center gap-2 mb-2">
                                <span class="inline-block w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                                <h5 class="font-bold text-[#002147] text-base">{{ event.title }}</h5>
                                <span class="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded-full font-bold">
                                  Pending
                                </span>
                                <span v-if="event.event_time" class="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {{ formatTime(event.event_time) }}
                                </span>
                              </div>
                              <p class="text-sm text-gray-700 mb-2 ml-4">
                                {{ event.description }}
                              </p>
                              <div class="flex items-center gap-2 ml-4">
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span class="text-xs text-gray-600 font-medium">{{ getBarangayLabel(event.brgy_id) }}</span>
                              </div>
                            </div>
                            <div class="ml-3 flex items-center gap-1">
                              <button
                                @click="markEventDone(event)"
                                class="icon-btn text-green-600 hover:text-green-700 hover:bg-green-50"
                                title="Mark as Done"
                              >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                class="icon-btn text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                                title="Edit"
                              >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                class="icon-btn text-red-600 hover:text-red-700 hover:bg-red-50"
                                title="Delete"
                              >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                          <div v-if="editingEventId === event.id" class="event-edit mt-3 bg-white p-4 rounded-lg border-2 border-blue-200">
                            <div class="grid grid-cols-1 gap-3">
                              <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1">Barangay</label>
                                <select
                                  v-model="editDraft.brgyId"
                                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#004595] focus:outline-none text-sm"
                                >
                                  <option value="">Select barangay</option>
                                  <option v-for="brgy in barangayOptions" :key="brgy.id" :value="brgy.id">
                                    {{ brgy.label }}
                                  </option>
                                </select>
                              </div>
                              <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1">Title</label>
                                <input
                                  v-model="editDraft.title"
                                  type="text"
                                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#004595] focus:outline-none text-sm"
                                />
                              </div>
                              <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1">Description</label>
                                <textarea
                                  v-model="editDraft.description"
                                  rows="3"
                                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#004595] focus:outline-none text-sm"
                                ></textarea>
                              </div>
                              <div>
                                <label class="block text-xs font-semibold text-gray-600 mb-1">Time (Optional)</label>
                                <input
                                  v-model="editDraft.time"
                                  type="time"
                                  class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-[#004595] focus:outline-none text-sm"
                                  @change="convertTo12Hour('edit')"
                                />
                                <p class="text-xs text-gray-500 mt-1">
                                  {{ editDraft.time ? convertTimeTo12Hour(editDraft.time) : 'No time set' }}
                                </p>
                              </div>
                            </div>

                            <div class="mt-3 flex justify-end gap-2">
                              <button
                                @click="cancelEdit"
                                class="px-4 py-2 text-sm rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-colors"
                              >
                                Cancel
                              </button>
                              <button
                                @click="saveEdit"
                                :disabled="isUpdatingEvent"
                                class="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium transition-colors disabled:opacity-50"
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
                      <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white py-2 z-10">
                        <div class="w-1 h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
                        <h4 class="text-lg font-bold text-green-700">Completed Events</h4>
                        <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
                          {{ doneEvents.length }}
                        </span>
                      </div>
                      <div class="space-y-3">
                        <div
                          v-for="event in doneEvents"
                          :key="event.id"
                          class="event-card bg-gradient-to-br from-green-50 to-emerald-50 border-l-4 border-green-400 rounded-lg p-4 opacity-90 hover:opacity-100 transition-all duration-300"
                        >
                          <div class="flex items-start justify-between">
                            <div class="flex-1">
                              <div class="flex items-center gap-2 mb-2">
                                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                                <h5 class="font-bold text-[#002147] text-base line-through decoration-green-600">{{ event.title }}</h5>
                                <span class="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full font-bold">
                                  ✓ Done
                                </span>
                                <span v-if="event.event_time" class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                  {{ formatTime(event.event_time) }}
                                </span>
                              </div>
                              <p class="text-sm text-gray-600 mb-2 ml-7 line-through">
                                {{ event.description }}
                              </p>
                              <div class="flex items-center gap-2 ml-7">
                                <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span class="text-xs text-gray-600 font-medium">{{ getBarangayLabel(event.brgy_id) }}</span>
                              </div>
                            </div>
                            <div class="ml-3 flex items-center gap-2">
                              <span class="text-xs text-gray-400 italic">Completed</span>
                              <button
                                @click="deleteEvent(event)"
                                class="icon-btn text-red-600 hover:text-red-700 hover:bg-red-50"
                                title="Delete"
                              >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div v-if="selectedDate && selectedDateFiestas.length > 0" class="mt-6">
                    <div class="flex items-center gap-2 mb-4 sticky top-0 bg-white py-2 z-10">
                      <div class="w-1 h-6 bg-linear-to-b from-purple-400 to-purple-600 rounded-full"></div>
                      <h4 class="text-lg font-bold text-purple-700">Barangay Fiestas</h4>
                      <span class="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-semibold">
                        {{ selectedDateFiestas.length }}
                      </span>
                    </div>
                    <div class="space-y-3">
                      <div
                        v-for="(fiesta, index) in selectedDateFiestas"
                        :key="index"
                        class="event-card bg-linear-to-br from-purple-50 to-pink-50 border-l-4 border-purple-400 rounded-lg p-4 hover:shadow-md transition-all duration-300"
                      >
                        <div class="flex items-start">
                          <div class="flex-1">
                            <div class="flex items-center gap-2 mb-2">
                              <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                              </svg>
                              <h5 class="font-bold text-[#002147] text-base">{{ fiesta.patron }}</h5>
                              <span class="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full font-bold">
                                Fiesta
                              </span>
                            </div>
                            <p class="text-sm text-gray-700 mb-2 ml-7">
                              {{ fiesta.brgyname }}
                            </p>
                            <div class="flex items-center gap-2 ml-7">
                              <svg class="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span class="text-sm text-gray-600 font-medium">{{ formatFiestaDate(fiesta.date) }}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Empty state when filter shows no results -->
                  <div v-if="filteredEvents.length === 0" class="text-center py-12">
                    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                      </svg>
                    </div>
                    <p class="text-gray-500 text-lg font-medium">
                      No {{ statusFilter === 'pending' ? 'pending' : statusFilter === 'done' ? 'completed' : '' }} events
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Time (Optional)</label>
              <input
                v-model="newEvent.time"
                type="time"
                class="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#004595] focus:outline-none transition-colors"
                @change="convertTo12Hour('new')"
              />
              <p class="text-xs text-gray-500 mt-1">
                {{ newEvent.time ? `Selected: ${convertTimeTo12Hour(newEvent.time)}` : 'Set event time for reminders' }}
              </p>
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
  
  // Combine regular events and fiestas
  const events = eventsData.value.filter((event) => getEventDateStr(event) === dateStr)
  const fiestas = fiestaData.value
    .filter((fiesta) => {
      const fiestaDate = convertTextDateToISO(fiesta.date) || normalizeDateStr(fiesta.date)
      return fiestaDate === dateStr
    })
    .map((fiesta) => ({
      ...fiesta,
      type: 'fiesta',
      title: fiesta.patron,
      description: `${fiesta.brgyname} - Barangay Fiesta`,
      id: `fiesta-${fiesta.patron}` // Create unique ID for fiestas
    }))
  
  return [...events, ...fiestas]
})

const selectedDateFiestas = computed(() => {
  if (!selectedDate.value) return []
  return selectedDateEvents.value.filter(item => item.type === 'fiesta')
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
  return filteredBaseEvents.value.filter(event => event.type !== 'fiesta' && !event.status)
})

const doneEvents = computed(() => {
  return filteredBaseEvents.value.filter(event => event.type !== 'fiesta' && event.status)
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

// Convert text date like "May 18" to YYYY-MM-DD format for current year
const convertTextDateToISO = (textDate) => {
  if (!textDate) return ''
  try {
    // Parse "May 18" format
    const currentYear = new Date().getFullYear()
    const dateStr = `${textDate} ${currentYear}`
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
  
  // Add regular events
  eventsData.value.forEach((event) => {
    const dateKey = getEventDateStr(event)
    if (!eventsMap[dateKey]) {
      eventsMap[dateKey] = []
    }
    eventsMap[dateKey].push({
      ...event,
      type: 'event'
    })
  })
  
  // Add fiestas
  fiestaData.value.forEach((fiesta, index) => {
    // Convert text date like "May 18" to proper format
    const dateKey = convertTextDateToISO(fiesta.date) || normalizeDateStr(fiesta.date)
    if (!dateKey) return // Skip if date conversion failed
    
    if (!eventsMap[dateKey]) {
      eventsMap[dateKey] = []
    }
    eventsMap[dateKey].push({
      ...fiesta,
      type: 'fiesta',
      title: fiesta.patron,
      description: `${fiesta.brgyname} - Barangay Fiesta`,
      id: `fiesta-${dateKey}-${index}` // Unique ID for each fiesta
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
    const { error: deleteError } = await supabase
      .from('BrgyEvents')
      .delete()
      .eq('id', event.id)

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
    const { data, error: fiestaError } = await supabase
      .rpc('brgyfiesta') // Call the PostgreSQL function

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
    const { error: insertError } = await supabase
      .from('BrgyEvents')
      .insert(payload)

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
  
  eventsData.value.forEach(event => {
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
  const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIGWm98OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+upVhQKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+utVhUKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+utVhUKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+utVhUKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AKFl+06+utVhUKRp/h8L5sIAUsgs/y2Ik2CBlpvPDknE4MDlCo4/C3YxwFO5PZ9Mt5KgUndsTw3o9AChZftOvrrVYVCkaf4fC+bCAFLILP8tiJNggZabzw5JxODA5QqOPwt2McBTuT2fTLeSoFJ3bE8N6PQAoWX7Tr661WFQpGn+HwvmwgBSyCz/LYiTYIGWm88OScTgwOUKjj8LdjHAU7k9n0y3kqBSd2xPDej0AK')
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
  
  // If already in "Month Day" format, just add current year
  if (typeof date === 'string' && /^[A-Za-z]+ \d+$/.test(date)) {
    return `${date}, ${new Date().getFullYear()}`
  }
  
  try {
    const d = new Date(date)
    return d.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
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

.event-card {
  animation: event-fade-in 0.4s ease-out both;
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
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.event-card:hover::before {
  left: 100%;
}

.event-card:hover {
  transform: translateX(4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.event-card:nth-child(1) { animation-delay: 0.05s; }
.event-card:nth-child(2) { animation-delay: 0.1s; }
.event-card:nth-child(3) { animation-delay: 0.15s; }
.event-card:nth-child(4) { animation-delay: 0.2s; }
.event-card:nth-child(5) { animation-delay: 0.25s; }
.event-card:nth-child(6) { animation-delay: 0.3s; }
.event-card:nth-child(7) { animation-delay: 0.35s; }
.event-card:nth-child(8) { animation-delay: 0.4s; }

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 8px;
  transition: all 0.2s ease;
  position: relative;
}

.icon-btn:hover:not(:disabled) {
  transform: translateY(-2px) scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.icon-btn:active:not(:disabled) {
  transform: translateY(0) scale(1);
}

.event-edit {
  animation: edit-slide 0.3s ease-out;
}

@keyframes event-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes edit-slide {
  from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Scrollbar styling */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #004595;
  border-radius: 10px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #002147;
}

@media (prefers-reduced-motion: reduce) {
  .event-card,
  .event-edit,
  .icon-btn,
  .animate-pulse {
    animation: none;
  }

  .event-card:hover,
  .icon-btn:hover,
  .event-card::before {
    transform: none;
  }
}
</style>
