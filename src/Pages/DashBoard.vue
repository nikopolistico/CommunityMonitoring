<template>
  <div class="flex-1 flex flex-col bg-[#f3f1ee]">
    <!-- Top Header -->
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
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#002147]">List of Barangays</h3>
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
          
          <div v-if="filteredBarangays.length === 0" class="text-center py-8 text-gray-500">
            <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="font-medium">No barangay found</p>
            <p class="text-sm">Try searching with a different keyword</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { computed, ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
import headbk from '@/assets/landing.jpg'
import { supabase } from '@/lib/supabase'

const router = useRouter()
const googleApiKey = 'AIzaSyDqcnq11WukBkYCzu13zloxQi_YjUpsA14'
const defaultCenter = { lat: 8.9475, lng: 125.5279 }
const sidebarOpen = ref(false)

const barangayOptions = ref([])
const loading = ref(false)
const selectedBarangay = ref('')

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
})

const viewCommunity = (location) => {
  if (!selectedBarangay.value) {
    return
  }

  router.push({
    name: 'CommunityView',
    params: { barangayName: barangayValue }
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