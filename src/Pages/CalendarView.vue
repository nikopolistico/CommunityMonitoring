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
            <div class="p-6 flex flex-col max-h-150">
              <!-- Events Header -->
              <div class="mb-6 shrink-0">
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
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import headbk from '@/assets/landing.jpg'

const sidebarOpen = ref(false)
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