  <template>
  <div class="min-h-screen bg-linear-to-br from-[#11315b] via-white to-[#262421]">
    <div class="mx-auto max-w-7xl px-4 py-10">
      <button
        type="button"
        class="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-3 text-sm font-bold text-white hover:shadow-2xl border-2 border-transparent hover:border-white transition-all duration-300 shadow-lg hover:-translate-y-1"
        @click="goBack"
      >
        <span aria-hidden="true" class="transition-transform group-hover:-translate-x-1">←</span>
        Back to Dashboard
      </button>

      <section v-if="communityInfo" class="mt-8 space-y-8">
        <!-- Header Banner -->
        <div
          class="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#002147] via-[#004595] to-[#00397a] p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01]"
        >
          <div class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mb-32"></div>
          <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-4">
              <div class="p-3 bg-white/20 backdrop-blur-sm rounded-2xl ring-4 ring-white/30">
                <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h1 class="text-5xl font-black text-white tracking-tight">{{ communityInfo.name }} Butuan City, Agusan Del Norte 8600</h1>
                <div class="flex items-center gap-2 mt-2">
                  <div class="h-1 w-12 bg-white/60 rounded-full"></div>
                  <p class="text-xl text-white/90 font-semibold">Community Profile</p>
                </div>
              </div>
            </div>
            <p v-if="focusSummary" class="text-lg text-blue-100 font-medium pl-1">
              📍 {{ focusSummary }}
            </p>
            <p v-else class="text-lg text-blue-100 font-medium pl-1">Discover our vibrant barangay community</p>
          </div>
        </div>

        <!-- Barangay Captain Profile Card -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-8 py-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-white">Barangay Captain</h2>
                  <p class="text-blue-100 text-sm">Community Leader</p>
                </div>
              </div>
              <button
                v-if="!isEditing"
                @click="startEdit"
                class="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white hover:text-[#004595] transition-all duration-300 font-semibold text-sm border border-white/30"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
                Edit
              </button>
              <div v-else class="flex items-center gap-2">
                <button
                  @click="saveEdit"
                  :disabled="saving"
                  title="Save Changes"
                  class="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </button>
                <button
                  @click="cancelEdit"
                  :disabled="saving"
                  title="Cancel"
                  class="p-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <!-- Profile Image -->
              <div class="shrink-0">
                <div class="relative group">
                  <div
                    class="w-50 h-50 bg-linear-to-br from-[#004595] to-[#00397a] rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-[#004595]/20 overflow-hidden"
                  >
                    <img
                      v-if="captainInfo.profileImage"
                      :src="captainInfo.profileImage"
                      alt="Captain Profile"
                      class="w-full h-full object-cover"
                    />
                    <svg v-else class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <!-- Upload Button Overlay -->
                  <button
                    @click="triggerFileUpload"
                    class="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  >
                    <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <input
                    ref="fileInput"
                    type="file"
                    accept="image/*"
                    @change="handleImageUpload"
                    class="hidden"
                  />
                </div>
              </div>

              <!-- Captain Info -->
              <div class="flex-1 space-y-4">
                <div>
                  <div v-if="!isEditing">
                    <h3 class="text-2xl font-bold text-[#002147]">
                      {{ loadingCaptain ? 'Loading...' : (captainInfo.name || 'No name available') }}
                    </h3>
                  </div>
                  <div v-else>
                    <input
                      v-model="editForm.name"
                      type="text"
                      placeholder="Captain Full Name"
                      class="text-2xl font-bold text-[#002147] border-2 border-[#004595] rounded-lg px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-[#004595]"
                    />
                  </div>
                  <p class="text-sm text-gray-600 font-medium mt-1">Barangay Captain</p>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <!-- Contact Info -->
                  <div class="space-y-3">
                    <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] rounded-lg">
                      <div class="p-2 bg-[#004595] rounded-lg">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                          />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-xs text-gray-600 font-medium">Phone</p>
                        <p v-if="!isEditing" class="text-sm font-bold text-[#002147]">{{ captainInfo.phone || 'No phone available' }}</p>
                        <input
                          v-else
                          v-model="editForm.phone"
                          type="text"
                          placeholder="Phone Number"
                          class="text-sm font-bold text-[#002147] border-2 border-[#004595] rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-[#004595]"
                        />
                      </div>
                    </div>

                    <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] rounded-lg">
                      <div class="p-2 bg-[#004595] rounded-lg">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                          />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div class="flex-1">
                        <p class="text-xs text-gray-600 font-medium">Email</p>
                        <p v-if="!isEditing" class="text-sm font-bold text-[#002147]">
                          {{ captainInfo.email || 'No email available' }}
                        </p>
                        <input
                          v-else
                          v-model="editForm.email"
                          type="email"
                          placeholder="Email Address"
                          class="text-sm font-bold text-[#002147] border-2 border-[#004595] rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-[#004595]"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] rounded-lg">
                      <div class="p-2 bg-[#004595] rounded-lg">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
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
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
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

        <!-- Barangay Personnel Section -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-8 py-6">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                </div>
                <div>
                  <h2 class="text-3xl font-bold text-white">Barangay Personnel</h2>
                  <p class="text-blue-100 text-sm">Officers & Community Leaders</p>
                </div>
              </div>
              <button
                @click="addPersonnel"
                class="flex items-center gap-2 px-5 py-2.5 bg-white/20 backdrop-blur-sm text-white rounded-xl hover:bg-white hover:text-[#004595] transition-all duration-300 font-semibold text-sm border border-white/30"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                </svg>
                Add Personnel
              </button>
            </div>
          </div>

          <div class="p-8">
            <div v-if="allPersonnel.length === 0" class="text-center py-16">
              <div class="inline-block p-6 bg-linear-to-br from-gray-100 to-gray-50 rounded-3xl mb-4 shadow-inner">
                <svg class="w-16 h-16 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-700 mb-2">No Personnel Added</h3>
              <p class="text-gray-500">Click "Add Personnel" to add barangay officers or purok leaders</p>
            </div>

            <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Officers Column -->
              <div>
                <div class="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#004595]/20">
                  <div class="p-2 bg-[#004595] rounded-lg">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                <div>
                  <h3 class="text-xl font-bold text-[#004595]">Barangay Officers</h3>
                  <p class="text-xs text-gray-500 mt-1">(BMfullname field from database)</p>
                </div>
                </div>
                
                <div v-if="officers.length === 0" class="text-center py-8 text-gray-400">
                  <p class="text-sm">No officers added yet</p>
                </div>
                
                <div v-else class="space-y-3">
                  <div
                    v-for="person in officers"
                    :key="person.id"
                    class="p-4 bg-linear-to-br from-blue-50 to-white rounded-xl border-2 border-[#004595]/20 hover:border-[#004595] transition-all duration-200 hover:shadow-md"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-[#004595]">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-bold text-[#002147]">{{ person.name }}</h4>
                        <p class="text-sm text-gray-600">{{ person.position }}</p>
                        <p class="text-xs text-gray-500 mt-1">{{ person.phone }}</p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <button
                          @click="editPersonnel(person)"
                          class="text-[#004595] hover:text-[#00397a] transition-colors"
                          title="Edit"
                        >
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                          </svg>
                        </button>
                        <button
                          @click="removePersonnel(person.id)"
                          class="text-red-500 hover:text-red-700 transition-colors"
                          title="Delete"
                        >
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Purok Leaders Column -->
              <div>
                <div class="flex items-center gap-3 mb-4 pb-3 border-b-2 border-[#00397a]/20">
                  <div class="p-2 bg-[#00397a] rounded-lg">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-[#00397a]">Purok Leaders</h3>
                </div>
                
                <div v-if="purokLeaders.length === 0" class="text-center py-8 text-gray-400">
                  <p class="text-sm">No purok leaders added yet</p>
                </div>
                
                <div v-else class="space-y-3">
                  <div
                    v-for="person in purokLeaders"
                    :key="person.id"
                    class="p-4 bg-linear-to-br from-green-50 to-white rounded-xl border-2 border-[#00397a]/20 hover:border-[#00397a] transition-all duration-200 hover:shadow-md"
                  >
                    <div class="flex items-start gap-3">
                      <div class="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 bg-[#00397a]">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="font-bold text-[#002147]">{{ person.name }}</h4>
                        <p class="text-sm text-gray-600">{{ person.position }}</p>
                        <p class="text-xs text-gray-500 mt-1">{{ person.phone }}</p>
                      </div>
                      <div class="flex flex-col gap-2">
                        <button
                          @click="editPersonnel(person)"
                          class="text-[#00397a] hover:text-[#002147] transition-colors"
                          title="Edit"
                        >
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                          </svg>
                        </button>
                        <button
                          @click="removePersonnel(person.id)"
                          class="text-red-500 hover:text-red-700 transition-colors"
                          title="Delete"
                        >
                          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
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

         <!-- Barangay Information Section -->
        <div class="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 hover:shadow-3xl transition-all duration-300">
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-8 py-6">
            <div class="flex items-center gap-3">
              <div class="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <h2 class="text-3xl font-bold text-white">Barangay Information</h2>
                <p class="text-blue-100 text-sm">Patron Saint & Fiesta Celebration</p>
              </div>
            </div>
          </div>

          <div class="p-8">
            <div v-if="brgyInfo.length > 0" class="space-y-6">
              <div
                v-for="brgy in brgyInfo"
                :key="brgy.araw"
                class="bg-linear-to-br from-[#f3f1ee] to-gray-50 rounded-2xl overflow-hidden border-2 border-[#004595]/10 hover:border-[#004595]/30 transition-all duration-300 hover:shadow-lg"
              >
                <!-- Mobile/Tablet Layout -->
                <div class="flex flex-col lg:flex-row">
                  <!-- Image Section -->
                  <div class="lg:w-2/5 relative overflow-hidden bg-gray-100">
                    <div class="h-64 sm:h-80 lg:h-full min-h-100">
                      <img 
                        class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                        :src="brgy.brgy_images" 
                        alt="Barangay Image" 
                      />
                      <div class="absolute inset-0 bg-linear-to-t from-black/20 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                  
                  <!-- Info Section -->
                  <div class="lg:w-3/5 p-8 flex flex-col justify-center space-y-6">
                    <!-- Header with Icon -->
                    <div class="flex items-start gap-4">
                      <div class="shrink-0 w-14 h-14 rounded-xl flex items-center justify-center bg-linear-to-br from-[#004595] to-[#00397a] shadow-lg">
                        <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h3 class="text-3xl font-bold text-[#002147] mb-1">{{ brgy.araw }}</h3>
                        <div class="h-1 w-16 bg-linear-to-r from-[#004595] to-transparent rounded-full"></div>
                      </div>
                    </div>

                    <!-- Details Grid -->
                    <div class="grid gap-4">
                      <!-- Patron Saint -->
                      <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div class="shrink-0 w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                          <svg class="w-5 h-5 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div class="flex-1">
                          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Patron Saint</p>
                          <p class="text-lg font-bold text-[#002147]">{{ brgy.patron }}</p>
                        </div>
                      </div>

                      <!-- Fiesta Date -->
                      <div class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div class="shrink-0 w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center">
                          <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div class="flex-1">
                          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Fiesta Celebration</p>
                          <p class="text-lg font-bold text-[#002147]">{{ brgy.date }}</p>
                        </div>
                      </div>

                      <!-- History -->
                      <div v-if="brgy.brgy_history" class="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div class="shrink-0 w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center">
                          <svg class="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div class="flex-1">
                          <p class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Barangay History</p>
                          <p class="text-sm text-gray-700 leading-relaxed line-clamp-3">{{ brgy.brgy_history }}</p>
                        </div>
                      </div>
                    </div>

                    <!-- Decorative Element -->
                    <div class="flex items-center gap-3 pt-4">
                      <div class="h-0.5 flex-1 bg-linear-to-r from-[#004595]/20 to-transparent"></div>
                      <svg class="w-4 h-4 text-[#004595]/40" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                      </svg>
                      <div class="h-0.5 flex-1 bg-linear-to-l from-[#004595]/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-16">
              <div class="inline-block p-6 bg-linear-to-br from-gray-100 to-gray-50 rounded-3xl mb-4 shadow-inner">
                <svg class="w-16 h-16 mx-auto text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-700 mb-2">No Information Available</h3>
              <p class="text-gray-500">Barangay information has not been added yet.</p>
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

    <!-- Add Personnel Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50" @click.self="closeModal">
      <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
        <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-4">
          <h3 class="text-xl font-bold text-white">{{ isEditMode ? 'Edit Personnel' : 'Add Personnel' }}</h3>
        </div>
        
        <form @submit.prevent="submitPersonnel" class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-[#002147] mb-2">Full Name (BMfullname)</label>
            <input
              v-model="personnelForm.fullname"
              type="text"
              required
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-[#002147] mb-2">Phone Number</label>
            <input
              v-model="personnelForm.phone_number"
              type="text"
              required
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <label class="block text-sm font-semibold text-[#002147] mb-2">Position</label>
            <input
              v-model="personnelForm.position"
              type="text"
              required
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
              placeholder="e.g., Secretary, Treasurer, Purok Leader"
            />
          </div>

          <div class="flex gap-3 pt-4">
            <button
              type="button"
              @click="closeModal"
              class="flex-1 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              :disabled="submitting"
              class="flex-1 px-4 py-2 bg-[#004595] text-white rounded-lg hover:bg-[#00397a] transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ submitting ? (isEditMode ? 'Updating...' : 'Adding...') : (isEditMode ? 'Update Personnel' : 'Add Personnel') }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
const communityInfo = ref(null)
const loadingBarangay = ref(false)

// Fetch barangay info from database
const fetchBarangayInfo = async () => {
  if (!barangayName.value) {
    console.error('❌ No barangay name in route params')
    return
  }
  
  loadingBarangay.value = true
  
  try {
    // Convert kebab-case to Title Case for display
    const displayName = barangayName.value
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    
    console.log('🔍 Looking for barangay:', displayName, '(from param:', barangayName.value + ')')
    
    // Try to fetch from database
    const { data, error } = await supabase
      .from('Barangays')
      .select('*')
      .ilike('brgyname', displayName)
      .single()
    
    if (error && error.code !== 'PGRST116') {
      console.error('Database error:', error)
    }
    
    // Create barangay info structure
    communityInfo.value = {
      name: displayName,
      dbData: data,
      center: { lat: 8.9475, lng: 125.5279 },
      markers: [{
        name: `${displayName} Barangay Center`,
        type: 'barangay',
        coordinates: { lat: 8.9475, lng: 125.5279 },
      }],
      schools: [
        `${displayName} Elementary School`,
        `${displayName} Integrated School`,
        `${displayName} Senior High School`,
      ],
      churches: [
        `${displayName} Parish Church`,
        `${displayName} Chapel`,
        `${displayName} Christian Fellowship`,
      ],
      businesses: [
        `${displayName} Public Market`,
        `${displayName} Commercial Center`,
        `${displayName} Cooperative Store`,
      ],
    }
    
    console.log('✅ Barangay info loaded:', displayName)
  } catch (err) {
    console.error('Error fetching barangay:', err)
  } finally {
    loadingBarangay.value = false
  }
}

// Watch for route changes and fetch barangay info
watch(barangayName, () => {
  if (barangayName.value) {
    fetchBarangayInfo()
  }
}, { immediate: true })

const captainInfo = ref({
  name: '',
  phone: '',
  email: '',
  officeHours: '',
  profileImage: '',
})
const loadingCaptain = ref(false)
const isEditing = ref(false)
const saving = ref(false)
const editForm = ref({
  name: '',
  phone: '',
  email: '',
})
const captainId = ref(null)
const fileInput = ref(null)
const personnel = ref([])
const brgyFiesta = ref(null);
const barangay_id = ref(null)
const loadingPersonnel = ref(false)
const showModal = ref(false)
const submitting = ref(false)
const isEditMode = ref(false)
const editingPersonnelId = ref(null)
const personnelForm = ref({
  fullname: '',
  phone_number: '',
  position: ''
})

// Computed property to get all personnel
const allPersonnel = computed(() => personnel.value)
const officers = computed(() => personnel.value.filter(p => p.type === 'Officer'))
const purokLeaders = computed(() => personnel.value.filter(p => p.type === 'Purok Leader'))
const brgyInfo = computed(() => brgyFiesta.value ? [brgyFiesta.value] : []);

// Fetch Barangay Captain information
const fetchCaptainInfo = async () => {
  if (!communityInfo.value) return
  
  loadingCaptain.value = true
  try {
    // First, get the barangay details including cpt_id and id
    const { data: barangayData, error: barangayError } = await supabase
      .from('Barangays')
      .select('id, cpt_id, brgyname')
      .ilike('brgyname', communityInfo.value.name)
      .single()

    if (barangayError) throw barangayError
    
    if (barangayData) {
      barangay_id.value = barangayData.id
      
      if (barangayData.cpt_id) {
        // Then fetch the captain details using cpt_id
        const { data: captainData, error: captainError } = await supabase
          .from('BrgyCaptain')
          .select('*')
          .eq('id', barangayData.cpt_id)
          .single()

        console.log('Fetched captain data:', captainData)  
        if (captainError) throw captainError
        
        if (captainData) {
          captainId.value = captainData.id
          captainInfo.value = {
            name: captainData.Cptfullname || '',
            phone: captainData.phone || '',
            email: captainData.email || '',
            officeHours: captainData.office_hours || '',
            profileImage: captainData.profile_image || ''
          }
        }
      }
      
      // Fetch personnel for this barangay
      await fetchPersonnel()
      await getBrgyFiestaDetails(barangay_id.value);
    }
  } catch (error) {
    console.error('Error fetching captain info:', error)
    captainInfo.value = {
      name: '',
      phone: '',
      email: '',
      officeHours: ''
    }
  } finally {
    loadingCaptain.value = false
  }
}

const getBrgyFiestaDetails = async (barangay_id) => {
  if (!barangay_id) return;
  try {

    const { data, error } = await supabase.rpc("brgyinformation", { p_brgy_id: barangay_id });
    if (error) throw error;
    console.log("Brgy Fiesta Data:", data); // [{ araw, brgy_images, patron, date }]
    // e.g., map to state if needed:
    brgyFiesta.value = data?.[0] ?? null;
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

// Fetch personnel from database
const fetchPersonnel = async () => {
  if (!barangay_id.value) return
  
  loadingPersonnel.value = true
  try {
    const { data, error } = await supabase
      .from('BrgyMembers')
      .select('*')
      .eq('brgy_id', barangay_id.value)
      .order('BMfullname', { ascending: true })

    if (error) throw error
    
    if (data) {
      personnel.value = data.map(member => ({
        id: member.id,
        name: member.BMfullname,
        position: member.position,
        phone: member.phone_number,
        type: member.position.includes('Purok') ? 'Purok Leader' : 'Officer'
      }))
    }
  } catch (error) {
    console.error('Error fetching personnel:', error)
  } finally {
    loadingPersonnel.value = false
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

const startEdit = () => {
  isEditing.value = true
  editForm.value = {
    name: captainInfo.value.name,
    phone: captainInfo.value.phone,
    email: captainInfo.value.email,
  }
}

const cancelEdit = () => {
  isEditing.value = false
  editForm.value = {
    name: '',
    phone: '',
    email: '',
  }
}

const saveEdit = async () => {
  if (!captainId.value) {
    alert('Cannot update: Captain ID not found')
    return
  }

  saving.value = true
  try {
    const { error } = await supabase
      .from('BrgyCaptain')
      .update({
        Cptfullname: editForm.value.name,
        phone: editForm.value.phone,
        email: editForm.value.email,
      })
      .eq('id', captainId.value)

    if (error) throw error

    isEditing.value = false
    alert('Captain information updated successfully!')
    await fetchCaptainInfo();
  } catch (error) {
    console.error('Error updating captain info:', error)
    alert('Failed to update captain information. Please try again.')
  } finally {
    saving.value = false
  }
}

const triggerFileUpload = () => {
  fileInput.value?.click()
}

const handleImageUpload = async (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  // Validate file type
  if (!file.type.startsWith('image/')) {
    alert('Please select an image file')
    return
  }

  // Validate file size (max 5MB)
  if (file.size > 5 * 1024 * 1024) {
    alert('Image size should be less than 5MB')
    return
  }

  if (!captainId.value) {
    alert('Cannot upload: Captain ID not found')
    return
  }

  try {
    // Upload to Supabase storage
    const fileExt = file.name.split('.').pop()
    const fileName = `captain_${captainId.value}_${Date.now()}.${fileExt}`
    const filePath = fileName

    const { error: uploadError } = await supabase.storage
      .from('BarangayImages')
      .upload(filePath, file)

    if (uploadError) throw uploadError

    // Construct public URL
    const imageUrl = `https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/BarangayImages/${fileName}`

    // Update database with image URL
    const { error: updateError } = await supabase
      .from('BrgyCaptain')
      .update({ profile_image: imageUrl })
      .eq('id', captainId.value)

    if (updateError) throw updateError

    // Update local data
    captainInfo.value.profileImage = imageUrl

    alert('Profile image uploaded successfully!')
  } catch (error) {
    console.error('Error uploading image:', error)
    alert('Failed to upload image. Please try again.')
  }
}

const addPersonnel = () => {
  if (!barangay_id.value) {
    alert('Cannot add personnel: Barangay not found')
    return
  }
  isEditMode.value = false
  showModal.value = true
}

const editPersonnel = (person) => {
  isEditMode.value = true
  editingPersonnelId.value = person.id
  personnelForm.value = {
    BMfullname: person.name,
    phone_number: person.phone,
    position: person.position
  }
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  isEditMode.value = false
  editingPersonnelId.value = null
  personnelForm.value = {
    BMfullname: '',
    phone_number: '',
    position: ''
  }
}

const submitPersonnel = async () => {
  if (!barangay_id.value) {
    alert('Cannot add personnel: Barangay not found')
    return
  }

  submitting.value = true
  try {
    if (isEditMode.value && editingPersonnelId.value) {
      // Update existing personnel
      const { data, error } = await supabase
        .from('BrgyMembers')
        .update({
          BMfullname: personnelForm.value.fullname,
          phone_number: personnelForm.value.phone_number,
          position: personnelForm.value.position
        })
        .eq('id', editingPersonnelId.value)
        .select()

      if (error) throw error

      if (data && data[0]) {
        const type = data[0].position.includes('Purok') ? 'Purok Leader' : 'Officer'
        const index = personnel.value.findIndex(p => p.id === editingPersonnelId.value)
        if (index !== -1) {
          personnel.value[index] = {
            id: data[0].id,
            name: data[0].BMfullname,
            position: data[0].position,
            phone: data[0].phone_number,
            type,
          }
        }
        alert('Personnel updated successfully!')
        closeModal()
      }
    } else {
      // Add new personnel
      const { data, error } = await supabase
        .from('BrgyMembers')
        .insert([
          {
            BMfullname: personnelForm.value.BMfullname,
            phone_number: personnelForm.value.phone_number,
            position: personnelForm.value.position,
            brgy_id: barangay_id.value
          }
        ])
        .select()

      if (error) throw error

      if (data && data[0]) {
        const type = data[0].position.includes('Purok') ? 'Purok Leader' : 'Officer'
        personnel.value.push({
          id: data[0].id,
          name: data[0].BMfullname,
          position: data[0].position,
          phone: data[0].phone_number,
          type,
        })
        alert('Personnel added successfully!')
        closeModal()
      }
    }
  } catch (error) {
    console.error('Error saving personnel:', error)
    alert(`Failed to ${isEditMode.value ? 'update' : 'add'} personnel. Please try again.`)
  } finally {
    submitting.value = false
  }
}

const removePersonnel = async (id) => {
  if (!confirm('Are you sure you want to remove this personnel?')) {
    return
  }

  try {
    const { error } = await supabase
      .from('BrgyMembers')
      .delete()
      .eq('id', id)

    if (error) throw error

    personnel.value = personnel.value.filter(p => p.id !== id)
    alert('Personnel removed successfully!')
  } catch (error) {
    console.error('Error removing personnel:', error)
    alert('Failed to remove personnel. Please try again.')
  }
}

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
