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
<<<<<<< HEAD
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-4 flex items-center justify-between gap-4">
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
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full border-2 border-white/60 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#004595] focus:outline-none focus:ring-2 focus:ring-white/70 disabled:cursor-not-allowed disabled:opacity-50"
              @click="openEditModal"
              :disabled="loadingCaptain || !captainId"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a1 1 0 001 1h11a2 2 0 002-2v-5" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              Edit Details
            </button>
=======
          <div class="bg-linear-to-r from-[#004595] to-[#00397a] px-6 py-4">
            <div class="flex items-center justify-between">
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
              <button
                v-if="!isEditing"
                @click="startEdit"
                class="flex items-center gap-2 px-4 py-2 bg-white text-[#004595] rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-sm"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
                Edit
              </button>
              <div v-else class="flex items-center gap-2">
                <button
                  @click="saveEdit"
                  :disabled="saving"
                  class="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold text-sm disabled:opacity-50"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  {{ saving ? 'Saving...' : 'Save' }}
                </button>
                <button
                  @click="cancelEdit"
                  :disabled="saving"
                  class="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 font-semibold text-sm disabled:opacity-50"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                  Cancel
                </button>
              </div>
            </div>
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd
          </div>

          <div class="p-6">
            <div class="flex flex-col md:flex-row gap-6 items-start">
              <!-- Profile Image -->
              <div class="shrink-0">
                <div class="relative group">
                  <div
                    class="w-32 h-32 bg-linear-to-br from-[#004595] to-[#00397a] rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-[#004595]/20 overflow-hidden"
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
                      placeholder="Captain Name"
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
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
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
                        <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
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

        <!-- Barangay Personnel Section -->
        <div class="bg-white rounded-2xl shadow-xl p-6 border-2 border-white/50">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-[#002147] flex items-center gap-2">
              <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              Barangay Personnel
            </h2>
            <button
              @click="addPersonnel"
              class="flex items-center gap-2 px-4 py-2 bg-[#004595] text-white rounded-lg hover:bg-[#00397a] transition-all duration-300 font-semibold text-sm"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
              </svg>
              Add Personnel
            </button>
          </div>

          <div v-if="allPersonnel.length === 0" class="text-center py-8 text-gray-500">
            <svg class="w-12 h-12 mx-auto mb-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
            <p class="font-medium">No personnel added yet</p>
            <p class="text-sm">Click "Add Personnel" to add barangay officers or purok leaders</p>
          </div>

          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              v-for="person in allPersonnel"
              :key="person.id"
              :class="[
                'p-4 bg-linear-to-br from-[#f3f1ee] to-gray-100 rounded-lg border-2 transition-all duration-200',
                person.type === 'Officer' ? 'border-[#004595]/20 hover:border-[#004595]' : 'border-[#00397a]/20 hover:border-[#00397a]'
              ]"
            >
              <div class="flex items-start gap-3">
                <div 
                  :class="[
                    'w-12 h-12 rounded-lg flex items-center justify-center shrink-0',
                    person.type === 'Officer' ? 'bg-[#004595]' : 'bg-[#00397a]'
                  ]"
                >
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="font-bold text-[#002147]">{{ person.name }}</h4>
                  <p class="text-sm text-gray-600">{{ person.position }}</p>
                  <p class="text-xs text-gray-500 mt-1">{{ person.phone }}</p>
                  <span 
                    :class="[
                      'inline-block mt-2 px-2 py-1 text-xs font-semibold rounded',
                      person.type === 'Officer' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    ]"
                  >
                    {{ person.type }}
                  </span>
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

        <!-- Edit Captain Modal -->
        <div
          v-if="isEditOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
        >
          <div class="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl">
            <button
              type="button"
              class="absolute right-3 top-3 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#004595]/50"
              @click="closeEditModal"
              :disabled="savingCaptain"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 class="text-xl font-bold text-[#002147] mb-1">Edit Barangay Captain</h3>
            <p class="text-sm text-gray-600 mb-4">Changes will be saved to Supabase for this barangay.</p>

            <form class="space-y-4" @submit.prevent="saveCaptain">
              <div class="space-y-1">
                <label class="text-sm font-semibold text-gray-700" for="captain-name">Full Name</label>
                <input
                  id="captain-name"
                  v-model="editForm.name"
                  type="text"
                  class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-inner focus:border-[#004595] focus:ring-2 focus:ring-[#004595]/30"
                  placeholder="Juan Dela Cruz"
                  required
                />
              </div>

              <div class="grid gap-4 md:grid-cols-2">
                <div class="space-y-1">
                  <label class="text-sm font-semibold text-gray-700" for="captain-phone">Phone</label>
                  <input
                    id="captain-phone"
                    v-model="editForm.phone"
                    type="text"
                    class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-inner focus:border-[#004595] focus:ring-2 focus:ring-[#004595]/30"
                    placeholder="+63 912 345 6789"
                  />
                </div>
                <div class="space-y-1">
                  <label class="text-sm font-semibold text-gray-700" for="captain-email">Email</label>
                  <input
                    id="captain-email"
                    v-model="editForm.email"
                    type="email"
                    class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-inner focus:border-[#004595] focus:ring-2 focus:ring-[#004595]/30"
                    placeholder="captain@barangay.gov.ph"
                  />
                </div>
              </div>

              <div class="space-y-1">
                <label class="text-sm font-semibold text-gray-700" for="captain-hours">Office Hours</label>
                <input
                  id="captain-hours"
                  v-model="editForm.officeHours"
                  type="text"
                  class="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm shadow-inner focus:border-[#004595] focus:ring-2 focus:ring-[#004595]/30"
                  placeholder="Mon-Fri, 8AM-5PM"
                />
              </div>

              <p v-if="saveError" class="rounded-lg bg-red-50 px-3 py-2 text-sm font-semibold text-red-600">
                {{ saveError }}
              </p>

              <div class="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  class="rounded-full px-4 py-2 text-sm font-semibold text-gray-600 transition hover:bg-gray-100"
                  @click="closeEditModal"
                  :disabled="savingCaptain"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  class="inline-flex items-center gap-2 rounded-full bg-[#004595] px-5 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#00397a] focus:outline-none focus:ring-2 focus:ring-[#004595]/70 disabled:cursor-not-allowed disabled:opacity-60"
                  :disabled="savingCaptain"
                >
                  <svg
                    v-if="savingCaptain"
                    class="h-4 w-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      class="opacity-25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v4m0 8v4m8-8h-4M8 12H4m12.364-5.364l-2.828 2.828M9.464 14.536l-2.828 2.828m0-11.313l2.828 2.828m8.486 8.486l-2.828-2.828"
                    />
                  </svg>
                  <span>{{ savingCaptain ? 'Saving...' : 'Save Changes' }}</span>
                </button>
              </div>
            </form>
          </div>
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
            <label class="block text-sm font-semibold text-[#002147] mb-2">Full Name</label>
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
  name: '',
  phone: '',
  email: '',
  officeHours: '',
  profileImage: '',
})
const loadingCaptain = ref(false)
<<<<<<< HEAD
const captainId = ref(null)
const isEditOpen = ref(false)
=======
const isEditing = ref(false)
const saving = ref(false)
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd
const editForm = ref({
  name: '',
  phone: '',
  email: '',
<<<<<<< HEAD
  officeHours: '',
})
const savingCaptain = ref(false)
const saveError = ref('')
=======
})
const captainId = ref(null)
const fileInput = ref(null)
const personnel = ref([])
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
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd

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
    captainId.value = barangayData?.cpt_id ?? null
    
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
            name: captainData.fullname || '',
            phone: captainData.phone || '',
            email: captainData.email || '',
            officeHours: captainData.office_hours || '',
            profileImage: captainData.profile_image || ''
          }
        }
      }
      
      // Fetch personnel for this barangay
      await fetchPersonnel()
    }
  } catch (error) {
    console.error('Error fetching captain info:', error)
<<<<<<< HEAD
    captainId.value = null
    // Keep default values on error
=======
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd
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

<<<<<<< HEAD
const openEditModal = () => {
  if (loadingCaptain.value) return
  saveError.value = ''
  editForm.value = { ...captainInfo.value }
  isEditOpen.value = true
}

const closeEditModal = () => {
  if (savingCaptain.value) return
  isEditOpen.value = false
}

const saveCaptain = async () => {
  if (!captainId.value) {
    saveError.value = 'No captain record found for this barangay.'
    return
  }

  savingCaptain.value = true
  saveError.value = ''

  try {
    const updates = {
      fullname: editForm.value.name?.trim(),
      phone: editForm.value.phone?.trim(),
      email: editForm.value.email?.trim(),
      office_hours: editForm.value.officeHours?.trim(),
    }

    const { data, error } = await supabase
      .from('BrgyCaptain')
      .update(updates)
      .eq('id', captainId.value)
      .select('*')
      .single()

    if (error) throw error

    if (data) {
      captainInfo.value = {
        name: data.fullname || captainInfo.value.name,
        phone: data.phone || captainInfo.value.phone,
        email: data.email || captainInfo.value.email,
        officeHours: data.office_hours || captainInfo.value.officeHours,
      }
    }

    isEditOpen.value = false
  } catch (error) {
    console.error('Error updating captain info:', error)
    saveError.value = 'Failed to save changes. Please try again.'
  } finally {
    savingCaptain.value = false
=======
// Fetch personnel from database
const fetchPersonnel = async () => {
  if (!barangay_id.value) return
  
  loadingPersonnel.value = true
  try {
    const { data, error } = await supabase
      .from('BrgyMembers')
      .select('*')
      .eq('brgy_id', barangay_id.value)
      .order('fullname', { ascending: true })

    if (error) throw error
    
    if (data) {
      personnel.value = data.map(member => ({
        id: member.id,
        name: member.fullname,
        position: member.position,
        phone: member.phone_number,
        type: member.position.includes('Purok') ? 'Purok Leader' : 'Officer'
      }))
    }
  } catch (error) {
    console.error('Error fetching personnel:', error)
  } finally {
    loadingPersonnel.value = false
>>>>>>> 584a996666ee7dcc0472164df0f2067255cc96dd
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
        fullname: editForm.value.name,
        phone: editForm.value.phone,
        email: editForm.value.email,
      })
      .eq('id', captainId.value)

    if (error) throw error

    // Update local data
    captainInfo.value.name = editForm.value.name
    captainInfo.value.phone = editForm.value.phone
    captainInfo.value.email = editForm.value.email

    isEditing.value = false
    alert('Captain information updated successfully!')
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
    fullname: person.name,
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
    fullname: '',
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
          fullname: personnelForm.value.fullname,
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
            name: data[0].fullname,
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
            fullname: personnelForm.value.fullname,
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
          name: data[0].fullname,
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
