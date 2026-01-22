<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Left Sidebar -->
    <aside class="w-64 bg-sky-900 text-white flex flex-col">
      <!-- Officer Profile Section -->
      <div class="p-6 border-b border-black">
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-3">
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <h3 class="font-bold text-lg">Officer Name</h3>
          <p class="text-blue-300 text-sm">Badge #12345</p>
        </div>
      </div>

      <!-- Navigation Menu -->
      <nav class="flex-1 p-4">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-3 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                />
              </svg>
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                  clip-rule="evenodd"
                />
              </svg>
              Reports
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                />
              </svg>
              Barangays
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              Alerts
            </a>
          </li>
          <li>
            <a
              href="#"
              class="flex items-center p-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              Settings
            </a>
          </li>
        </ul>
      </nav>

      <!-- Logout Button -->
      <div class="p-4 border-t border-black">
        <button
          class="w-full flex items-center justify-center p-3 rounded-lg bg-rose-500 hover:bg-rose-700 transition-colors"
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
      <!-- Top Header with Category Filter -->
      <header class="relative bg-white shadow-md overflow-hidden">
        <!-- Background Image -->
        <div
          class="absolute inset-0 bg-cover bg-center opacity-50"
          :style="{ backgroundImage: `url(${headbk})` }"
        ></div>

        <!-- Content -->
        <div class="relative z-10 p-4">
          <div class="max-w-6xl mx-auto">
            <h1 class="text-2xl font-bold text-gray-800 mb-4">Butuan City Monitoring Dashboard</h1>

            <!-- Category Filter -->
            <div class="flex gap-2">
              <button
                @click="selectedCategory = 'churches'"
                :class="[
                  'px-6 py-3 rounded-lg font-medium transition-colors',
                  selectedCategory === 'churches'
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                ]"
              >
                Churches
              </button>
              <button
                @click="selectedCategory = 'businesses'"
                :class="[
                  'px-6 py-3 rounded-lg font-medium transition-colors',
                  selectedCategory === 'businesses'
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                ]"
              >
                Businesses
              </button>
              <button
                @click="selectedCategory = 'schools'"
                :class="[
                  'px-6 py-3 rounded-lg font-medium transition-colors',
                  selectedCategory === 'schools'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
                ]"
              >
                Schools
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Map Container -->
      <div class="flex-1 p-6">
        <div class="bg-white rounded-lg shadow-lg h-full overflow-hidden relative">
          <!-- Map -->
          <div id="my-map" class="w-full h-full"></div>

          <!-- Quick Stats Overlay -->
          <div class="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
            <h3 class="font-bold text-gray-800 mb-2">Quick Stats</h3>
            <div class="space-y-2 text-sm">
              <div class="flex items-center justify-between">
                <span class="text-gray-600">Category:</span>
                <span class="font-bold text-blue-600 capitalize">{{ selectedCategory }}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-gray-600">Total:</span>
                <span class="font-bold text-green-600">{{ filteredLocations.length }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import headbk from '@/assets/headerbk.jpg'

const selectedCategory = ref('churches')
let map = null
let markers = []

// All locations data
const churches = [
  { name: 'San Jose Cathedral (Butuan Cathedral)', coordinates: [125.5424, 8.9479] },
  { name: 'Sto. Niño Diocesan Shrine', coordinates: [125.5053, 8.9438] },
  { name: 'Our Lady of Lourdes Parish', coordinates: [125.532, 8.952] },
  { name: 'San Vicente Ferrer Parish Church', coordinates: [125.515, 8.955] },
  { name: 'Christ the King Cathedral', coordinates: [125.538, 8.945] },
  { name: 'Holy Rosary Parish Church', coordinates: [125.52, 8.94] },
  { name: 'Immaculate Conception Parish', coordinates: [125.51, 8.935] },
  { name: 'St. Joseph the Worker Parish', coordinates: [125.495, 8.938] },
  { name: 'Our Lady of Fatima Church', coordinates: [125.528, 8.93] },
  { name: 'Sacred Heart of Jesus Parish', coordinates: [125.535, 8.955] },
  { name: 'St. Michael the Archangel Church', coordinates: [125.518, 8.942] },
  { name: 'Divine Mercy Shrine', coordinates: [125.525, 8.949] },
  { name: 'Blessed Sacrament Parish', coordinates: [125.532, 8.938] },
  { name: 'Our Lady of Perpetual Help Church', coordinates: [125.508, 8.928] },
  { name: 'San Isidro Labrador Parish', coordinates: [125.54, 8.96] },
]

const businesses = [
  { name: 'Robinsons Place Butuan', coordinates: [125.5355, 8.9485] },
  { name: 'Gaisano Mall Butuan', coordinates: [125.532, 8.945] },
  { name: 'SM City Butuan', coordinates: [125.498, 8.939] },
  { name: 'BDO Butuan Branch', coordinates: [125.54, 8.947] },
  { name: 'Jollibee Butuan', coordinates: [125.538, 8.946] },
  { name: "McDonald's Butuan", coordinates: [125.536, 8.9455] },
  { name: 'Mercury Drug Butuan', coordinates: [125.534, 8.9465] },
  { name: 'Puregold Butuan', coordinates: [125.52, 8.942] },
  { name: 'Landbank Butuan', coordinates: [125.539, 8.9475] },
  { name: 'Butuan Grand Hotel', coordinates: [125.537, 8.948] },
]

const schools = [
  { name: 'Caraga State University', coordinates: [125.532, 8.935] },
  { name: 'Father Saturnino Urios University', coordinates: [125.538, 8.949] },
  { name: 'St. Joseph Institute of Technology', coordinates: [125.515, 8.94] },
  { name: 'Butuan Doctors College', coordinates: [125.528, 8.946] },
  { name: 'Holy Child School of Butuan', coordinates: [125.54, 8.951] },
  { name: 'Agusan National High School', coordinates: [125.53, 8.943] },
  { name: 'Butuan City National High School', coordinates: [125.535, 8.947] },
  { name: 'Bancasi Elementary School', coordinates: [125.497, 8.936] },
  { name: 'Don Francisco Elementary School', coordinates: [125.518, 8.938] },
  { name: 'Lumbocan Elementary School', coordinates: [125.528, 8.931] },
]

// Get filtered locations based on category
const filteredLocations = computed(() => {
  if (selectedCategory.value === 'churches') return churches
  if (selectedCategory.value === 'businesses') return businesses
  if (selectedCategory.value === 'schools') return schools
  return []
})

// Update markers when category changes
watch(selectedCategory, () => {
  updateMarkers()
})

function updateMarkers() {
  if (!map) return

  // Remove existing markers
  markers.forEach((marker) => marker.remove())
  markers = []

  // Get marker color based on category
  const getMarkerColor = () => {
    if (selectedCategory.value === 'churches') return '#dc2626' // red
    if (selectedCategory.value === 'businesses') return '#16a34a' // green
    if (selectedCategory.value === 'schools') return '#2563eb' // blue
    return '#6b7280' // gray
  }

  // Add new markers
  filteredLocations.value.forEach((location) => {
    const marker = new maplibregl.Marker({ color: getMarkerColor() })
      .setLngLat(location.coordinates)
      .setPopup(
        new maplibregl.Popup().setHTML(
          `<strong>${location.name}</strong><br><small>${selectedCategory.value.slice(0, -1)}</small>`,
        ),
      )
      .addTo(map)

    markers.push(marker)
  })
}

onMounted(() => {
  // Initialize MapLibre GL map
  map = new maplibregl.Map({
    container: 'my-map',
    style:
      'https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=e4bf430c87284367b945271070f52692',
    center: [125.5279, 8.9475], // Butuan City coordinates
    zoom: 13,
  })

  // Add navigation controls
  map.addControl(new maplibregl.NavigationControl(), 'top-left')

  // Wait for map to load, then add initial markers
  map.on('load', () => {
    updateMarkers()
  })
})
</script>
