<template>
  <div class="min-h-screen bg-[#f3f1ee]">
    <div class="mx-auto max-w-7xl px-4 py-10">
      <button
        type="button"
        class="inline-flex items-center gap-2 rounded-full bg-[#004595] px-5 py-2.5 text-sm font-bold text-white hover:bg-white hover:text-[#004595] border-2 border-[#004595] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        @click="goBack"
      >
        <span aria-hidden="true">←</span>
        Back to Dashboard
      </button>

      <section v-if="communityInfo" class="mt-8 space-y-6">
        <!-- Header Banner -->
        <div
          class="relative overflow-hidden rounded-2xl bg-linear-to-r from-[#002147] to-[#004595] p-8 shadow-2xl"
        >
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div
            class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"
          ></div>

          <div class="relative z-10">
            <div class="flex items-center gap-2 mb-3">
              <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 class="text-4xl font-extrabold text-white">{{ communityInfo.name }}</h1>
            </div>
            <p v-if="focusSummary" class="text-lg text-[#e0e7ff] font-medium">
              📍 {{ focusSummary }}
            </p>
            <p v-else class="text-lg text-[#e0e7ff] font-medium">Barangay Community Profile</p>
          </div>
        </div>

        <!-- Barangay Captain Profile Card -->
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-white/50">
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-4">
            <h2 class="text-2xl font-bold text-white flex items-center gap-2">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                />
              </svg>
              Barangay Captain
            </h2>
          </div>

          <div class="p-6">
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <!-- Profile Image -->
              <div class="shrink-0">
                <div
                  class="w-32 h-32 bg-linear-to-br from-[#004595] to-[#00397a] rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-[#004595]/20"
                >
                  <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <!-- Captain Info -->
              <div class="flex-1 space-y-4">
                <div>
                  <h3 class="text-2xl font-bold text-[#002147]">
                    {{ loadingCaptain ? 'Loading...' : captainInfo.name }}
                  </h3>
                  <p class="text-sm text-gray-600 font-medium">Barangay Captain</p>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <!-- Contact Info -->
                  <div class="space-y-3">
                    <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] rounded-lg">
                      <div class="p-2 bg-[#004595] rounded-lg">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-600 font-medium">Phone</p>
                        <p class="text-sm font-bold text-[#002147]">{{ captainInfo.phone }}</p>
                      </div>
                    </div>

                    <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] rounded-lg">
                      <div class="p-2 bg-[#004595] rounded-lg">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                          />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-600 font-medium">Email</p>
                        <p class="text-sm font-bold text-[#002147]">
                          {{ captainInfo.email }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] rounded-lg">
                      <div class="p-2 bg-[#004595] rounded-lg">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-600 font-medium">Office Hours</p>
                        <p class="text-sm font-bold text-[#002147]">{{ captainInfo.officeHours }}</p>
                      </div>
                    </div>

                    <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] rounded-lg">
                      <div class="p-2 bg-[#004595] rounded-lg">
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-600 font-medium">Barangay Hall</p>
                        <p class="text-sm font-bold text-[#002147]">
                          {{ communityInfo.name }}, Butuan City
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Community Establishments -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border-2 border-white/50">
          <h2 class="text-2xl font-bold text-[#002147] mb-6 flex items-center gap-2">
            <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            Communities
          </h2>

          <div class="grid gap-6 md:grid-cols-3">
            <article
              class="group relative overflow-hidden rounded-xl border-2 border-[#004595]/20 p-5 hover:border-[#004595] transition-all duration-300 hover:shadow-lg bg-linear-to-br from-white to-[#f3f1ee] cursor-pointer"
              role="button"
              tabindex="0"
              @click="goToSchools"
              @keyup.enter="goToSchools"
              @keyup.space="goToSchools"
            >
              <!-- View More Overlay -->
              <div class="absolute inset-0 bg-[#004595]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div class="text-center">
                  <svg class="w-6 h-6 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p class="text-white font-semibold text-sm">View More</p>
                </div>
              </div>
              <div
                class="absolute top-0 right-0 w-20 h-20 bg-[#004595]/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div class="relative">
                <div class="flex items-center gap-2 mb-4">
                  <div
                    class="p-2 bg-[#004595] rounded-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-[#004595]">Schools</h3>
                </div>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li
                    v-for="school in communityInfo.schools"
                    :key="school"
                    class="flex items-start gap-2"
                  >
                    <span class="text-[#004595] mt-1">•</span>
                    <span class="font-medium">{{ school }}</span>
                  </li>
                </ul>
              </div>
            </article>

            <article
              class="group relative overflow-hidden rounded-xl border-2 border-[#00397a]/20 p-5 hover:border-[#00397a] transition-all duration-300 hover:shadow-lg bg-linear-to-br from-white to-[#f3f1ee] cursor-pointer"
              role="button"
              tabindex="0"
              @click="goToChurches"
              @keyup.enter="goToChurches"
              @keyup.space="goToChurches"
            >
              <!-- View More Overlay -->
              <div class="absolute inset-0 bg-[#00397a]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div class="text-center">
                  <svg class="w-6 h-6 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p class="text-white font-semibold text-sm">View More</p>
                </div>
              </div>
              <div
                class="absolute top-0 right-0 w-20 h-20 bg-[#00397a]/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div class="relative">
                <div class="flex items-center gap-2 mb-4">
                  <div
                    class="p-2 bg-[#00397a] rounded-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-[#00397a]">Churches</h3>
                </div>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li
                    v-for="church in communityInfo.churches"
                    :key="church"
                    class="flex items-start gap-2"
                  >
                    <span class="text-[#00397a] mt-1">•</span>
                    <span class="font-medium">{{ church }}</span>
                  </li>
                </ul>
              </div>
            </article>

            <article
              class="group relative overflow-hidden rounded-xl border-2 border-[#002147]/20 p-5 hover:border-[#002147] transition-all duration-300 hover:shadow-lg bg-linear-to-br from-white to-[#f3f1ee] cursor-pointer"
              role="button"
              tabindex="0"
              @click="goToEstablishments"
              @keyup.enter="goToEstablishments"
              @keyup.space="goToEstablishments"
            >
              <!-- View More Overlay -->
              <div class="absolute inset-0 bg-[#002147]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <div class="text-center">
                  <svg class="w-6 h-6 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <p class="text-white font-semibold text-sm">View More</p>
                </div>
              </div>
              <div
                class="absolute top-0 right-0 w-20 h-20 bg-[#002147]/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"
              ></div>
              <div class="relative">
                <div class="flex items-center gap-2 mb-4">
                  <div
                    class="p-2 bg-[#002147] rounded-lg group-hover:scale-110 transition-transform duration-300"
                  >
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-[#002147]">Businesses</h3>
                </div>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li
                    v-for="business in communityInfo.businesses"
                    :key="business"
                    class="flex items-start gap-2"
                  >
                    <span class="text-[#002147] mt-1">•</span>
                    <span class="font-medium">{{ business }}</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>

        <!-- Footer Note -->
        <div class="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/50">
          <p class="text-xs text-gray-600 text-center flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
            Sample data for demonstration purposes. Replace with official barangay records when
            available.
          </p>
        </div>
      </section>

      <section
        v-else
        class="mt-8 rounded-2xl bg-white p-12 text-center shadow-xl border-2 border-red-200"
      >
        <div class="inline-block p-4 bg-red-100 rounded-full mb-4">
          <svg class="w-12 h-12 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-gray-800 mb-2">Barangay Not Found</h1>
        <p class="text-gray-600">Return to the dashboard and select a valid barangay.</p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { communityData } from '@/data/communityData'
import { supabase } from '@/lib/supabase'

const route = useRoute()
const router = useRouter()

const featureLabels = {
  barangay: 'Barangay Center',
  church: 'Church',
  school: 'School',
  business: 'Business',
}

const barangayName = computed(() => (route.params.barangayName || '').toString())

const communityInfo = computed(() => {
  if (!barangayName.value) {
    return null
  }
  return communityData[barangayName.value] ?? null
})

const captainInfo = ref({
  name: 'Loading...',
  phone: '+63 912 345 6789',
  email: 'captain@barangay.gov.ph',
  officeHours: 'Loading...',
})
const loadingCaptain = ref(false)

// Fetch Barangay Captain information
const fetchCaptainInfo = async () => {
  if (!communityInfo.value) return
  
  loadingCaptain.value = true
  try {
    // First, get the barangay details including cpt_id
    const { data: barangayData, error: barangayError } = await supabase
      .from('Barangays')
      .select('cpt_id, brgyname')
      .ilike('brgyname', communityInfo.value.name)
      .single()

    if (barangayError) throw barangayError
    
    if (barangayData && barangayData.cpt_id) {
      // Then fetch the captain details using cpt_id
      const { data: captainData, error: captainError } = await supabase
        .from('BrgyCaptain')
        .select('*')
        .eq('id', barangayData.cpt_id)
        .single()

      console.log('Fetched captain data:', captainData)  
      if (captainError) throw captainError
      
      if (captainData) {
        captainInfo.value = {
          name: captainData.fullname || 'Hon. Juan Dela Cruz',
          phone: captainData.phone || '+63 912 345 6789',
          email: captainData.email || `captain@${barangayName.value}.gov.ph`,
          officeHours: captainData.office_hours || 'Mon-Fri, 8AM-5PM'
        }
      }
    }
  } catch (error) {
    console.error('Error fetching captain info:', error)
    // Keep default values on error
    captainInfo.value = {
      name: 'Hon. Juan Dela Cruz',
      phone: '+63 912 345 6789',
      email: `captain@${barangayName.value}.gov.ph`,
      officeHours: 'Mon-Fri, 8AM-5PM'
    }
  } finally {
    loadingCaptain.value = false
  }
}

// Watch for changes in barangay and fetch captain info
watch(
  () => communityInfo.value,
  (newVal) => {
    if (newVal) {
      fetchCaptainInfo()
    }
  },
  { immediate: true }
)

onMounted(() => {
  if (communityInfo.value) {
    fetchCaptainInfo()
  }
})

const locationName = computed(() => (route.query.location || '').toString())
const locationType = computed(() => (route.query.type || '').toString())

const focusSummary = computed(() => {
  if (!locationName.value) {
    return ''
  }
  const label = featureLabels[locationType.value] || 'Community Site'
  return `${label}: ${locationName.value}`
})

const goBack = () => {
  if (barangayName.value) {
    router.push({ name: 'dashboard', query: { barangay: barangayName.value } })
    return
  }
  router.push({ name: 'dashboard' })
}

const goToSchools = () => {
  if (!barangayName.value) return
  router.push({ name: 'schools', params: { barangayName: barangayName.value } })
}

const goToChurches = () => {
  if (!barangayName.value) return
  router.push({ name: 'churches', params: { barangayName: barangayName.value } })
}

const goToEstablishments = () => {
  if (!barangayName.value) return
  router.push({ name: 'establishments', params: { barangayName: barangayName.value } })
}
</script>
