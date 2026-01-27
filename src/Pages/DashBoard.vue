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
            <router-link
              to="/calendar"
              class="group flex items-center p-3 rounded-xl hover:bg-white/10 transition-all duration-300 transform hover:translate-x-1"
            >
              <div
                class="p-2 bg-transparent rounded-lg mr-3 group-hover:bg-white/10 transition-colors"
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
            ref="mapRef"
            class="w-full h-full"
            :api-key="googleApiKey"
            :center="mapCenter"
            :zoom="mapZoom"
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
            class="absolute top-4 right-4 lg:top-6 lg:right-6 bg-linear-to-br from-white/95 to-white/90 backdrop-blur-lg p-3 lg:p-6 rounded-xl lg:rounded-2xl shadow-2xl border-2 border-white/50 min-w-64 lg:min-w-70"
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
              <!-- Barangay -->
              <div
                class="flex items-center justify-between p-2 rounded-lg hover:bg-[#f3f1ee] transition-colors"
              >
                <span class="text-gray-600 font-medium">📍 Barangay:</span>
                <span class="font-bold text-[#004595]">{{ currentBarangayLabel }}</span>
              </div>

              <!-- Locations -->
              <div
                class="flex items-center justify-between p-2 rounded-lg hover:bg-[#f3f1ee] transition-colors"
              >
                <span class="text-gray-600 font-medium">📊 Locations:</span>
                <span class="font-bold text-[#00397a] text-lg">{{ filteredLocations.length }}</span>
              </div>

              <!-- Weather -->
              <div
                class="flex items-center justify-between p-2 rounded-lg hover:bg-[#f3f1ee] transition-colors"
              >
                <span class="text-gray-600 font-medium">🌤 Weather:</span>
                <span v-if="weather" class="font-bold text-[#004595]">
                  {{ weather.main.temp }}°C, {{ weather.weather[0].description }}
                </span>
                <span v-else class="text-gray-400 italic">Loading...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { GoogleMap, Marker, InfoWindow, Polygon } from 'vue3-google-map'
import headbk from '@/assets/landing.jpg'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const googleApiKey = 'AIzaSyDqcnq11WukBkYCzu13zloxQi_YjUpsA14'
const defaultCenter = { lat: 8.9475, lng: 125.5279 }
const sidebarOpen = ref(false)
const initialZoom = 13

const mapCenter = ref(defaultCenter)
const mapZoom = ref(initialZoom)

const barangayOptions = ref([])
const loading = ref(false)
const selectedBarangay = ref('')
const mapRef = ref(null)

// Weather state
const weather = ref(null)

// Fetch barangays from Supabase (with lat/lon)
const fetchBarangays = async () => {
  loading.value = true
  try {
    const { data, error } = await supabase
      .from('Barangays')
      .select('brgyname, latitude, longitude')
      .order('brgyname', { ascending: true })

    if (error) throw error

    if (data) {
      barangayOptions.value = data.map(item => {
        const value = item.brgyname
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w-]/g, '')

        return {
          value,
          label: item.brgyname,
          lat: item.latitude,
          lng: item.longitude,
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

// Fetch weather by coordinates
async function fetchWeatherByCoords(lat, lon) {
  try {
    const apiKey = '6baa34e0dcf3549d1a5022e74c8cf333'
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    )
    const data = await response.json()
    if (data.cod === 200) {
      weather.value = data
    } else {
      weather.value = null
      console.warn('Weather not found for coords:', lat, lon)
    }
  } catch (error) {
    console.error('Error fetching weather:', error)
  }
}

let zoomTimer = null
let centerTimer = null

function smoothPanAndZoomReactive(position, targetZoom, duration = 700) {
  if (centerTimer) {
    window.cancelAnimationFrame(centerTimer)
    centerTimer = null
  }

  const startCenter = mapCenter.value
  const startTime = performance.now()

  const animateCenter = (now) => {
    const t = Math.min(1, (now - startTime) / duration)
    mapCenter.value = {
      lat: startCenter.lat + (position.lat - startCenter.lat) * t,
      lng: startCenter.lng + (position.lng - startCenter.lng) * t,
    }
    if (t < 1) {
      centerTimer = window.requestAnimationFrame(animateCenter)
    }
  }
  centerTimer = window.requestAnimationFrame(animateCenter)

  const startZoom = mapZoom.value
  if (zoomTimer) {
    window.clearInterval(zoomTimer)
    zoomTimer = null
  }
  if (startZoom === targetZoom) return

  const stepMs = 60
  const steps = Math.max(1, Math.round(duration / stepMs))
  const zoomStep = (targetZoom - startZoom) / steps
  let current = startZoom
  let count = 0

  zoomTimer = window.setInterval(() => {
    count += 1
    current += zoomStep
    mapZoom.value = Math.round(current)
    if (count >= steps) {
      mapZoom.value = targetZoom
      window.clearInterval(zoomTimer)
      zoomTimer = null
    }
  }, stepMs)
}

// Watch barangay selection → update weather + animate map
watch(selectedBarangay, (newBarangay) => {
  const brgy = barangayOptions.value.find(opt => opt.value === newBarangay)
  if (brgy && brgy.lat && brgy.lng) {
    fetchWeatherByCoords(brgy.lat, brgy.lng)
    smoothPanAndZoomReactive({ lat: brgy.lat, lng: brgy.lng }, 16, 800)
  }
})

onMounted(() => {
  fetchBarangays()
  fetchWeatherByCoords(defaultCenter.lat, defaultCenter.lng)
})

const viewCommunity = (location) => {
  if (!selectedBarangay.value) return

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
  return barangayOptions.value.reduce((acc, option) => {
    const center = {
      lat: option.lat ?? defaultCenter.lat,
      lng: option.lng ?? defaultCenter.lng,
    }

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
  if (!selectedBarangay.value) return []
  return barangayData.value[selectedBarangay.value]?.features ?? []
})

const currentBarangayLabel = computed(() => {
  if (!selectedBarangay.value) return 'Select barangay'
  return barangayData.value[selectedBarangay.value]?.name ?? selectedBarangay.value
})
</script>

<style scoped>
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