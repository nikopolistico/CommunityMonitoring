<template>
  <div class="min-h-screen bg-gradient-to-br from-[#004595]/5 via-[#ffffff] to-[#00397a]/5 font-['Poppins']">
    <div class="mx-auto max-w-7xl px-8 py-10">
      <!-- Header Banner -->
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002147] via-[#004595] to-[#00397a] p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01] mb-8">
        <div class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mb-32"></div>
        <div class="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        
        <div class="relative z-10">
          <h1 class="text-4xl font-bold text-white mb-2">Barangay Records</h1>
          <p class="text-white/90 text-lg">View and manage all barangay records</p>
        </div>
      </div>

      <!-- Search and Filter Section -->
      <div class="bg-white rounded-2xl shadow-xl shadow-[#004595]/5 p-6 mb-6 border border-[#004595]/10">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by barangay name, captain, patron, or location..."
              class="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004595] focus:border-transparent transition-all"
              @input="handleSearch"
            />
          </div>
          <button
            @click="clearSearch"
            v-if="searchQuery"
            class="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Clear
          </button>
          <button
            @click="exportToExcel"
            class="px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            Export to Excel
          </button>
        </div>
        
        <!-- Search Results Summary -->
        <div v-if="searchQuery" class="mt-4 text-sm text-gray-600">
          Found <span class="font-bold text-[#004595]">{{ filteredRecords.length }}</span> 
          {{ filteredRecords.length === 1 ? 'result' : 'results' }} 
          for "<span class="font-semibold">{{ searchQuery }}</span>"
        </div>
      </div>

      <!-- Records Grid/Cards -->
      <div v-if="loading" class="bg-white rounded-2xl shadow-xl shadow-[#004595]/5 p-16 text-center border border-[#004595]/10">
        <div class="flex flex-col items-center gap-4">
          <div class="animate-spin rounded-full h-16 w-16 border-b-4 border-[#004595]"></div>
          <p class="text-xl font-semibold text-gray-700">Loading records...</p>
          <p class="text-sm text-gray-500">Please wait while we fetch the data</p>
        </div>
      </div>

      <div v-else-if="filteredRecords.length === 0 && searchQuery" class="bg-gradient-to-br from-white to-[#f3f1ee]/30 rounded-2xl shadow-xl p-20 text-center border border-[#004595]/10">
        <div class="flex flex-col items-center gap-4">
          <div class="p-6 bg-amber-500/10 rounded-full">
            <svg class="w-20 h-20 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800">No Results Found</h3>
          <p class="text-gray-600">No barangay records match your search for "<span class="font-semibold">{{ searchQuery }}</span>"</p>
          <button
            @click="clearSearch"
            class="mt-4 px-6 py-2.5 bg-gradient-to-r from-[#004595] to-[#00397a] text-white rounded-xl hover:from-[#002147] hover:to-[#004595] transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Clear Search
          </button>
        </div>
      </div>

      <div v-else-if="records.length === 0" class="bg-gradient-to-br from-white to-[#f3f1ee]/30 rounded-2xl shadow-xl p-20 text-center border border-[#004595]/10">
        <div class="flex flex-col items-center gap-4">
          <div class="p-6 bg-[#004595]/10 rounded-full">
            <svg class="w-20 h-20 text-[#004595]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800">No Records Found</h3>
          <p class="text-gray-600">There are currently no barangay records to display</p>
        </div>
      </div>

      <!-- Records Cards Grid -->
      <div v-else class="space-y-4">
        <div 
          v-for="(record, index) in filteredRecords" 
          :key="index" 
          class="bg-white rounded-2xl shadow-lg shadow-[#004595]/5 hover:shadow-2xl hover:shadow-[#004595]/10 transition-all duration-300 overflow-hidden border border-[#004595]/10 transform hover:scale-[1.01] cursor-pointer"
          @click="viewRecordDetails(record)"
        >
          <div class="p-6">
            <!-- Header Section -->
            <div class="flex items-start justify-between mb-6 pb-5 border-b border-gray-200">
              <div class="flex items-center gap-4">
                <div class="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#004595] to-[#00397a] text-white font-bold text-lg shadow-lg">
                  {{ index + 1 }}
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-[#002147] mb-1">{{ record.brgyname || 'N/A' }}</h3>
                  <div class="flex items-center gap-2">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                      </svg>
                      Barangay
                    </span>
                    <span v-if="record.date" class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                      Fiesta: {{ record.date }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="flex gap-2">
                <button
                  @click.stop="viewRecordDetails(record)"
                  class="px-5 py-2.5 bg-gradient-to-r from-[#004595] to-[#00397a] text-white rounded-xl hover:from-[#002147] hover:to-[#004595] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium text-sm"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                  </svg>
                  View
                </button>
                <button
                  @click.stop="exportSingleBarangay(record)"
                  class="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium text-sm"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                  Export
                </button>
              </div>
            </div>

            <!-- Content Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Captain Info -->
              <div class="bg-gradient-to-br from-[#004595]/5 to-transparent rounded-xl p-4 border border-[#004595]/10">
                <div class="flex items-center gap-2 mb-2">
                  <div class="p-2 bg-[#004595] rounded-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Captain</span>
                </div>
                <p class="text-base font-bold text-[#002147] truncate">{{ record.cptfullname || 'Not assigned' }}</p>
              </div>

              <!-- Members Info -->
              <div class="bg-gradient-to-br from-green-50 to-transparent rounded-xl p-4 border border-green-200/50">
                <div class="flex items-center gap-2 mb-2">
                  <div class="p-2 bg-green-600 rounded-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Members</span>
                </div>
                <p class="text-base font-bold text-green-800 truncate">{{ record.bmfullname || 'No members listed' }}</p>
              </div>

              <!-- Patron Info -->
              <div class="bg-gradient-to-br from-amber-50 to-transparent rounded-xl p-4 border border-amber-200/50">
                <div class="flex items-center gap-2 mb-2">
                  <div class="p-2 bg-amber-600 rounded-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Patron Saint</span>
                </div>
                <p class="text-base font-bold text-amber-800 truncate">{{ record.patron || 'Not specified' }}</p>
              </div>

              <!-- Schools Info -->
              <div class="bg-gradient-to-br from-indigo-50 to-transparent rounded-xl p-4 border border-indigo-200/50">
                <div class="flex items-center gap-2 mb-2">
                  <div class="p-2 bg-indigo-600 rounded-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Schools</span>
                </div>
                <p class="text-base font-bold text-indigo-800 truncate">{{ record.schoolname || 'No schools listed' }}</p>
              </div>

              <!-- Churches Info -->
              <div class="bg-gradient-to-br from-rose-50 to-transparent rounded-xl p-4 border border-rose-200/50">
                <div class="flex items-center gap-2 mb-2">
                  <div class="p-2 bg-rose-600 rounded-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Churches</span>
                </div>
                <p class="text-base font-bold text-rose-800 truncate">{{ record.churchname || 'No churches listed' }}</p>
              </div>

              <!-- Establishments Info -->
              <div class="bg-gradient-to-br from-cyan-50 to-transparent rounded-xl p-4 border border-cyan-200/50">
                <div class="flex items-center gap-2 mb-2">
                  <div class="p-2 bg-cyan-600 rounded-lg">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Establishments</span>
                </div>
                <p class="text-base font-bold text-cyan-800 truncate">{{ record.establishmentname || 'No establishments listed' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- View Details Modal -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showDetailsModal"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="closeDetailsModal"
      >
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden transform transition-all flex flex-col">
          <!-- Modal Header -->
          <div class="bg-gradient-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-5 relative overflow-hidden flex-shrink-0">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-24 -mb-24"></div>
            
            <div class="relative z-10 flex items-center justify-between">
              <div>
                <h2 class="text-2xl font-bold text-white mb-1">{{ selectedRecord?.brgyname || 'Barangay Details' }}</h2>
                <p class="text-white/80 text-sm">Complete barangay information</p>
              </div>
              <button
                @click="closeDetailsModal"
                class="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Modal Body -->
          <div class="overflow-y-auto flex-1 p-6 bg-gradient-to-br from-[#f3f1ee]/30 to-white">
            <div class="space-y-6">
              <!-- Basic Information Section -->
              <div class="bg-white rounded-xl shadow-md border border-[#004595]/10 overflow-hidden">
                <div class="bg-gradient-to-r from-[#004595]/10 to-transparent px-5 py-3 border-b border-[#004595]/10">
                  <h3 class="text-lg font-bold text-[#002147] flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                    </svg>
                    Basic Information
                  </h3>
                </div>
                <div class="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="space-y-1">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Barangay Name</p>
                    <p class="text-base font-bold text-[#002147]">{{ selectedRecord?.brgyname || 'N/A' }}</p>
                  </div>
                  <div class="space-y-1">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Patron Saint</p>
                    <p class="text-base font-semibold text-gray-800">{{ selectedRecord?.patron || 'Not specified' }}</p>
                  </div>
                  <div class="space-y-1">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Fiesta Date</p>
                    <p class="text-base font-semibold text-gray-800">{{ selectedRecord?.date || 'Not specified' }}</p>
                  </div>
                </div>
              </div>

              <!-- Leadership Section -->
              <div class="bg-white rounded-xl shadow-md border border-[#004595]/10 overflow-hidden">
                <div class="bg-gradient-to-r from-[#004595]/10 to-transparent px-5 py-3 border-b border-[#004595]/10">
                  <h3 class="text-lg font-bold text-[#002147] flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    Leadership & Personnel
                  </h3>
                </div>
                <div class="p-5 space-y-4">
                  <div class="bg-gradient-to-r from-[#004595]/5 to-transparent rounded-lg p-4 border border-[#004595]/10">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Barangay Captain</p>
                    <p class="text-lg font-bold text-[#002147]">{{ selectedRecord?.cptfullname || 'Not assigned' }}</p>
                  </div>
                  <div class="bg-gradient-to-r from-green-50 to-transparent rounded-lg p-4 border border-green-200">
                    <p class="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Barangay Members</p>
                    <p class="text-base font-semibold text-gray-800">{{ selectedRecord?.bmfullname || 'No members listed' }}</p>
                  </div>
                </div>
              </div>

              <!-- Facilities Section -->
              <div class="bg-white rounded-xl shadow-md border border-[#004595]/10 overflow-hidden">
                <div class="bg-gradient-to-r from-[#004595]/10 to-transparent px-5 py-3 border-b border-[#004595]/10">
                  <h3 class="text-lg font-bold text-[#002147] flex items-center gap-2">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Community Facilities
                  </h3>
                </div>
                <div class="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div class="bg-gradient-to-br from-indigo-50 to-transparent rounded-lg p-4 border border-indigo-200">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="p-2 bg-indigo-600 rounded-lg">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <span class="text-xs font-semibold text-indigo-800 uppercase">Schools</span>
                    </div>
                    <p class="text-sm font-semibold text-gray-800">{{ selectedRecord?.schoolname || 'No schools listed' }}</p>
                  </div>

                  <div class="bg-gradient-to-br from-rose-50 to-transparent rounded-lg p-4 border border-rose-200">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="p-2 bg-rose-600 rounded-lg">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-xs font-semibold text-rose-800 uppercase">Churches</span>
                    </div>
                    <p class="text-sm font-semibold text-gray-800">{{ selectedRecord?.churchname || 'No churches listed' }}</p>
                  </div>

                  <div class="bg-gradient-to-br from-cyan-50 to-transparent rounded-lg p-4 border border-cyan-200">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="p-2 bg-cyan-600 rounded-lg">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z" clip-rule="evenodd" />
                        </svg>
                      </div>
                      <span class="text-xs font-semibold text-cyan-800 uppercase">Establishments</span>
                    </div>
                    <p class="text-sm font-semibold text-gray-800">{{ selectedRecord?.establishmentname || 'No establishments listed' }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3 flex-shrink-0">
            <button
              @click="closeDetailsModal"
              class="px-6 py-2.5 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-all duration-300 font-medium"
            >
              Close
            </button>
            <button
              @click="exportFromModal"
              class="px-6 py-2.5 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { supabase } from '@/lib/supabase';
import * as XLSX from 'xlsx-js-style';
import { ref, computed, onMounted } from 'vue'

const records = ref([])
const loading = ref(false)
const showDetailsModal = ref(false)
const selectedRecord = ref(null)
const searchQuery = ref('')

// Computed property for filtered records
const filteredRecords = computed(() => {
  if (!searchQuery.value.trim()) {
    return records.value
  }
  
  const query = searchQuery.value.toLowerCase().trim()
  
  return records.value.filter(record => {
    return (
      (record.brgyname && record.brgyname.toLowerCase().includes(query)) ||
      (record.cptfullname && record.cptfullname.toLowerCase().includes(query)) ||
      (record.bmfullname && record.bmfullname.toLowerCase().includes(query)) ||
      (record.patron && record.patron.toLowerCase().includes(query)) ||
      (record.date && record.date.toLowerCase().includes(query)) ||
      (record.schoolname && record.schoolname.toLowerCase().includes(query)) ||
      (record.churchname && record.churchname.toLowerCase().includes(query)) ||
      (record.establishmentname && record.establishmentname.toLowerCase().includes(query))
    )
  })
})

// Handle search input
const handleSearch = () => {
  // The filtering is automatically handled by the computed property
  // This function can be used for additional logic if needed
}

// Clear search
const clearSearch = () => {
  searchQuery.value = ''
}

const buildWorksheet = (rows, barangayLabel) => {
  const titleRow = ['BCPS - 1']
  const brgyRow = [`Barangay: ${barangayLabel || 'All Barangays'}`]
  const headerRow = [
    'No.',
    'Barangay Name',
    'Captain (Cptfullname)',
    'Members (BMfullname)',
    'Patron',
    'Fiesta Date',
    'Schools',
    'Churches',
    'Establishments'
  ]

  const dataRows = rows.map((record, index) => ([
    index + 1,
    record.brgyname || '',
    record.cptfullname || '',
    record.bmfullname || '',
    record.patron || '',
    record.date || '',
    record.schoolname || '',
    record.churchname || '',
    record.establishmentname || ''
  ]))

  const worksheet = XLSX.utils.aoa_to_sheet([titleRow, brgyRow, [], headerRow, ...dataRows])

  worksheet['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 8 } },
    { s: { r: 1, c: 0 }, e: { r: 1, c: 8 } }
  ]

  worksheet['A1'].s = {
    font: { bold: true, sz: 18, color: { rgb: '002147' } },
    alignment: { horizontal: 'center', vertical: 'center' }
  }
  worksheet['A2'].s = {
    font: { bold: true, sz: 14, color: { rgb: '002147' } },
    alignment: { horizontal: 'center', vertical: 'center' }
  }

  headerRow.forEach((_, colIndex) => {
    const cellRef = XLSX.utils.encode_cell({ r: 3, c: colIndex })
    if (worksheet[cellRef]) {
      worksheet[cellRef].s = {
        font: { bold: true, color: { rgb: '002147' } },
        alignment: { horizontal: 'left', vertical: 'center' }
      }
    }
  })

  const allRows = [headerRow, ...dataRows]
  worksheet['!cols'] = allRows[0].map((_, colIndex) => {
    const maxLength = Math.max(
      ...allRows.map((row) => String(row[colIndex] ?? '').length)
    )
    return { wch: Math.min(Math.max(maxLength + 2, 10), 40) }
  })

  return worksheet
}

const exportRecordsToExcel = (rows, filename, barangayLabel) => {
  if (!rows || rows.length === 0) {
    alert('No records to export')
    return
  }

  const worksheet = buildWorksheet(rows, barangayLabel)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Records')
  XLSX.writeFile(workbook, filename)
}

const exportToExcel = () => {
  const dataToExport = searchQuery.value ? filteredRecords.value : records.value
  exportRecordsToExcel(
    dataToExport,
    `Barangay_Records_${new Date().toISOString().split('T')[0]}.xlsx`,
    searchQuery.value ? `Search Results: ${searchQuery.value}` : 'All Barangays'
  )
}

const exportSingleBarangay = (record) => {
  const brgyName = (record?.brgyname || 'Barangay').replace(/[^a-zA-Z0-9_-]/g, '_')
  exportRecordsToExcel(
    [record],
    `Barangay_${brgyName}_${new Date().toISOString().split('T')[0]}.xlsx`,
    record?.brgyname || 'Barangay'
  )
}

const viewRecordDetails = (record) => {
  selectedRecord.value = record
  showDetailsModal.value = true
}

const closeDetailsModal = () => {
  showDetailsModal.value = false
  setTimeout(() => {
    selectedRecord.value = null
  }, 300)
}

const exportFromModal = () => {
  if (selectedRecord.value) {
    exportSingleBarangay(selectedRecord.value)
  }
}

// Fetch records using the brgyrecords() function
const fetchBarangays = async () => {
  loading.value = true
  try {
    const { data, error } = await supabase.rpc('brgyrecords')
    
    if (error) throw error
    
    if (data) {
      console.log('Fetched records:', data)
      records.value = data
    }
  } catch (error) {
    console.error('Error fetching records:', error)
    alert('Failed to load records. Please refresh the page.')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchBarangays()
})

</script>
