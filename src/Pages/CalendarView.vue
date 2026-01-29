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
                        ? 'Events organized by barangay:'
                        : 'Click on a date in the calendar to view events'
                    }}
                  </p>
                </div>
                <button
                  @click="openAddModal"
                  :disabled="!selectedDate"
                  class="px-4 py-2 rounded-lg bg-[#004595] text-white font-semibold hover:bg-[#00397a] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Add Event
                </button>
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
                        class="event-card bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors"
                      >
                        <div class="flex items-start justify-between">
                          <div class="flex-1">
                            <h5 class="font-medium text-[#002147] text-sm">{{ event.title }}</h5>
                            <p class="text-xs text-gray-600 mt-1 line-clamp-2">
                              {{ event.description }}
                            </p>
                          </div>
                          <div class="ml-3 flex items-center gap-2">
                            <button
                              @click="startEdit(event)"
                              class="icon-btn text-amber-600"
                              title="Edit"
                            >
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          </div>

                          <div class="mt-3 flex justify-end gap-2">
                            <button
                              @click="cancelEdit"
                              class="icon-btn text-gray-500"
                              title="Cancel"
                            >
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 13l4 4L19 7"
                                />
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
const loading = ref(true)
const error = ref(null)
const barangayOptions = ref([])
const isSavingEvent = ref(false)
const isUpdatingEvent = ref(false)
const isDeletingEvent = ref(false)
const editingEventId = ref(null)
const newEvent = ref({
  brgyId: '',
  title: '',
  description: '',
})
const editDraft = ref({
  id: null,
  brgyId: '',
  title: '',
  description: '',
})

// Fetch events from Supabase
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

const selectedDateEvents = computed(() => {
  if (!selectedDate.value) return []
  const dateStr = formatLocalDate(selectedDate.value)
  return eventsData.value.filter((event) => getEventDateStr(event) === dateStr)
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
  eventsData.value.forEach((event) => {
    const dateKey = getEventDateStr(event)
    if (!eventsMap[dateKey]) {
      eventsMap[dateKey] = []
    }
    eventsMap[dateKey].push(event)
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

    const { error: insertError } = await supabase
      .from('BrgyEvents')
      .insert(payload)

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

// Load events on component mount
onMounted(() => {
  fetchEvents()
  fetchBarangays()
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
  animation: event-fade-in 0.5s ease-out both;
}

.event-card:hover {
  transform: translateY(-2px);
}

.event-card:nth-child(1) { animation-delay: 0.03s; }
.event-card:nth-child(2) { animation-delay: 0.06s; }
.event-card:nth-child(3) { animation-delay: 0.09s; }
.event-card:nth-child(4) { animation-delay: 0.12s; }
.event-card:nth-child(5) { animation-delay: 0.15s; }

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 9999px;
  transition: transform 0.2s ease, color 0.2s ease, background-color 0.2s ease;
}

.icon-btn:hover {
  transform: translateY(-1px) scale(1.05);
  background-color: rgba(0, 69, 149, 0.08);
}

.event-edit {
  animation: edit-slide 0.25s ease-out;
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
</style>