<template>
  <div
    class="min-h-screen bg-linear-to-br from-[#004595]/5 via-[#ffffff] to-[#00397a]/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-['Poppins']"
  >
    <div class="mx-auto max-w-7xl px-8 py-10">
      <!-- Header Banner -->
      <div
        class="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#002147] via-[#004595] to-[#00397a] p-10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-[1.01] mb-8"
      >
        <div
          class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-40 -mt-40"
        ></div>
        <div
          class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl -ml-32 -mb-32"
        ></div>
        <div
          class="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        ></div>

        <div class="relative z-10">
          <h1 class="text-4xl font-bold text-white mb-2">Barangay Records</h1>
          <p class="text-white/90 text-lg">View and manage all barangay records</p>
        </div>
      </div>
      <!-- Category Search Bar -->
      <div class="p-2 sm:p-4 lg:p-6 pb-0">
        <div
          class="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-[#004595]/10 dark:border-gray-700 overflow-hidden"
        >
          <div
            class="absolute top-0 right-0 w-64 h-64 bg-[#004595]/5 dark:bg-blue-500/10 rounded-full -mr-32 -mt-32"
          ></div>
          <div
            class="absolute bottom-0 left-0 w-48 h-48 bg-[#00397a]/5 dark:bg-blue-400/10 rounded-full -ml-24 -mb-24"
          ></div>

          <div class="relative z-10">
            <div class="flex items-center gap-3 mb-4">
              <div
                class="flex items-center justify-center w-12 h-12 bg-[#004595]/10 dark:bg-blue-500/20 rounded-lg"
              >
                <svg
                  class="w-6 h-6 text-[#004595] dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-[#002147] dark:text-white">Search Categories</h3>
            </div>

            <!-- Search Input -->
            <div class="relative mb-6">
              <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  class="w-5 h-5 text-[#004595] dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                v-model="categorySearchQuery"
                @focus="categorySearchFocused = true"
                @blur="() => setTimeout(() => (categorySearchFocused = false), 200)"
                @keydown.enter="categorySearchFocused = false"
                type="text"
                placeholder="Search for a category name (e.g., 'Elementary School', 'Catholic Church')..."
                class="w-full pl-12 pr-4 py-3 border-2 border-[#004595]/30 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004595] focus:border-[#004595] transition-all bg-white dark:bg-gray-700 text-[#002147] dark:text-white placeholder-[#00397a]/60 dark:placeholder-gray-400 shadow-sm hover:border-[#004595]/50"
              />

              <!-- Category Dropdown Menu -->
              <div
                v-if="
                  categorySearchFocused &&
                  categorySearchQuery.trim() &&
                  filteredCategoriesForMenu.length > 0
                "
                class="absolute z-50 top-full left-0 right-0 mt-2 bg-white dark:bg-gray-700 border-2 border-[#004595]/30 dark:border-gray-600 rounded-lg shadow-lg max-h-64 overflow-y-auto"
              >
                <div class="p-2">
                  <button
                    v-for="(cat, idx) in filteredCategoriesForMenu"
                    :key="idx"
                    @click="selectCategoryFromMenu(cat.name)"
                    class="w-full text-left px-4 py-3 rounded-lg hover:bg-[#004595]/10 dark:hover:bg-blue-500/20 transition-all duration-200 border-b border-[#004595]/10 dark:border-gray-600 last:border-b-0 group"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex-1">
                        <p
                          class="font-semibold text-[#002147] dark:text-white group-hover:text-[#004595] dark:group-hover:text-blue-300 transition-colors"
                        >
                          {{ cat.name }}
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          <span
                            class="inline-block px-1.5 py-0.5 bg-[#004595]/10 dark:bg-blue-500/20 rounded text-[#004595] dark:text-blue-400 font-medium"
                          >
                            {{ cat.type }}
                          </span>
                        </p>
                      </div>
                      <span
                        class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-[#004595]/20 dark:bg-blue-500/30 text-[#004595] dark:text-blue-300"
                      >
                        {{ cat.count }}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Search Results -->
            <div v-if="categorySearchQuery.trim()" class="space-y-4">
              <div class="flex items-center gap-2 mb-2">
                <span
                  v-if="categorySearchResults"
                  class="inline-block px-3 py-1 bg-[#004595]/10 dark:bg-blue-500/20 text-[#004595] dark:text-blue-400 rounded-full text-sm font-semibold"
                >
                  {{ categorySearchResults.matchingCategories.length }} Matching
                  {{
                    categorySearchResults.matchingCategories.length === 1
                      ? 'Category'
                      : 'Categories'
                  }}
                </span>
              </div>

              <div
                v-if="categorySearchResults"
                class="relative bg-linear-to-br from-white to-[#f3f1ee] dark:from-gray-700 dark:to-gray-800 rounded-xl shadow-md hover:shadow-lg border border-[#004595]/20 dark:border-gray-600 hover:border-[#004595] dark:hover:border-blue-500 transition-all duration-300 overflow-hidden group"
              >
                <div
                  class="absolute top-0 right-0 w-20 h-20 bg-[#004595]/5 dark:bg-blue-500/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"
                ></div>

                <div class="relative z-10 p-4 border-b border-[#004595]/10 dark:border-gray-600">
                  <div class="flex items-start justify-between gap-2">
                    <div class="flex-1">
                      <h4 class="text-lg font-bold text-[#002147] dark:text-white leading-tight">
                        Search Results
                      </h4>
                      <p
                        class="text-xs uppercase tracking-wider font-semibold text-gray-500 dark:text-gray-400 mt-1"
                      >
                        {{ categorySearchResults.matchingCategories.join(', ') }}
                      </p>
                    </div>
                    <span
                      class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#004595] text-white whitespace-nowrap"
                    >
                      {{ categorySearchResults.totalItems }} Total
                    </span>
                  </div>

                  <div
                    class="grid grid-cols-2 gap-2 pt-3 mt-3 border-t border-[#004595]/10 dark:border-gray-600"
                  >
                    <div class="flex items-center gap-2">
                      <div
                        class="flex items-center justify-center w-8 h-8 bg-[#004595]/10 dark:bg-blue-500/20 rounded-lg"
                      >
                        <svg
                          class="w-4 h-4 text-[#004595] dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V6.5m-9-5v5m0 0h5"
                          />
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Barangays</p>
                        <p class="text-sm font-bold text-[#002147] dark:text-white">
                          {{ categorySearchResults.totalBarangays }}
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <div
                        class="flex items-center justify-center w-8 h-8 bg-[#004595]/10 dark:bg-blue-500/20 rounded-lg"
                      >
                        <svg
                          class="w-4 h-4 text-[#004595] dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Total Items</p>
                        <p class="text-sm font-bold text-[#002147] dark:text-white">
                          {{ categorySearchResults.totalItems }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="relative z-10 p-4 max-h-96 overflow-y-auto">
                  <div class="grid gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10">
                    <div
                      v-for="(brgy, idx) in categorySearchResults.barangays"
                      :key="idx"
                      @click="goToBarangay(brgy.name)"
                      class="p-3 bg-white dark:bg-gray-700 rounded-lg border border-[#004595]/10 dark:border-gray-600 hover:border-[#004595] dark:hover:border-blue-400 transition-all group cursor-pointer hover:shadow-md flex flex-col items-center justify-center text-center"
                    >
                      <div class="flex flex-col items-center gap-1 w-full">
                        <svg
                          class="w-5 h-5 text-[#004595] dark:text-blue-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <h5 class="font-bold text-[#002147] dark:text-white text-xs leading-tight line-clamp-2">
                          {{ brgy.name }}
                        </h5>
                        <span
                          class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-[#004595]/20 dark:bg-blue-500/30 text-[#004595] dark:text-blue-300 group-hover:bg-[#004595] group-hover:text-white dark:group-hover:bg-blue-500 transition-all"
                        >
                          {{ brgy.count }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else class="text-center py-8">
              <div
                class="inline-flex items-center justify-center w-20 h-20 bg-[#004595]/10 dark:bg-blue-500/20 rounded-full mb-4"
              >
                <svg
                  class="w-10 h-10 text-[#004595] dark:text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h1a1 1 0 001-1v-6a1 1 0 00-1-1h-1z" />
                </svg>
              </div>
              <p class="font-semibold text-[#002147] dark:text-white">
                View All Counts
              </p>
              <p class="text-sm text-[#00397a] dark:text-gray-400 mt-1">
                Browse all category counts across barangays
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- Search and Filter Section -->
      <div
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 dark:shadow-black/20 p-6 mb-6 border border-[#004595]/10 dark:border-gray-700"
      >
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search by barangay name, captain, members, position, patron, or location..."
              class="w-full px-5 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004595] focus:border-transparent transition-all"
              @input="handleSearch"
            />
          </div>
          <button
            @click="clearSearch"
            v-if="searchQuery"
            class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Clear
          </button>
          <button
            @click="exportToExcel"
            class="px-6 py-3 bg-linear-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
            Export to Excel
          </button>
        </div>

        <!-- Search Results Summary -->
        <div v-if="searchQuery" class="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Found
          <span class="font-bold text-[#004595] dark:text-blue-400">{{
            filteredRecords.length
          }}</span>
          {{ filteredRecords.length === 1 ? 'result' : 'results' }}
          for "<span class="font-semibold">{{ searchQuery }}</span
          >"
        </div>
      </div>

      <!-- Records Grid/Cards -->
      <div
        v-if="loading"
        class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 dark:shadow-black/20 p-16 text-center border border-[#004595]/10 dark:border-gray-700"
      >
        <div class="flex flex-col items-center gap-4">
          <div
            class="animate-spin rounded-full h-16 w-16 border-b-4 border-[#004595] dark:border-blue-400"
          ></div>
          <p class="text-xl font-semibold text-gray-700 dark:text-gray-200">Loading records...</p>
          <p class="text-sm text-gray-500 dark:text-gray-400">
            Please wait while we fetch the data
          </p>
        </div>
      </div>

      <div
        v-else-if="filteredRecords.length === 0 && searchQuery"
        class="bg-linear-to-br from-white to-[#f3f1ee]/30 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-20 text-center border border-[#004595]/10 dark:border-gray-700"
      >
        <div class="flex flex-col items-center gap-4">
          <div class="p-6 bg-amber-500/10 dark:bg-amber-500/20 rounded-full">
            <svg
              class="w-20 h-20 text-amber-600 dark:text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white">No Results Found</h3>
          <p class="text-gray-600 dark:text-gray-400">
            No barangay records match your search for "<span class="font-semibold">{{
              searchQuery
            }}</span
            >"
          </p>
          <button
            @click="clearSearch"
            class="mt-4 px-6 py-2.5 bg-linear-to-r from-[#004595] to-[#00397a] text-white rounded-xl hover:from-[#002147] hover:to-[#004595] transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
          >
            Clear Search
          </button>
        </div>
      </div>

      <div
        v-else-if="records.length === 0"
        class="bg-linear-to-br from-white to-[#f3f1ee]/30 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-20 text-center border border-[#004595]/10 dark:border-gray-700"
      >
        <div class="flex flex-col items-center gap-4">
          <div class="p-6 bg-[#004595]/10 dark:bg-blue-500/20 rounded-full">
            <svg
              class="w-20 h-20 text-[#004595] dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-gray-800 dark:text-white">No Records Found</h3>
          <p class="text-gray-600 dark:text-gray-400">
            There are currently no barangay records to display
          </p>
        </div>
      </div>

      <!-- Records Grouped by Barangay -->
      <div v-else class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div
          v-for="(barangayName, index) in groupedBarangayNames"
          :key="barangayName"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg shadow-[#004595]/5 dark:shadow-black/20 overflow-hidden border border-[#004595]/10 dark:border-gray-700"
        >
          <!-- Barangay Header -->
          <div
            class="bg-linear-to-r from-[#002147] via-[#004595] to-[#00397a] px-3 py-3 hover:shadow-lg transition-all"
          >
            <div class="flex items-center justify-between gap-2">
              <div class="flex items-center gap-2 flex-1 min-w-0">
                <div
                  class="flex items-center justify-center w-8 h-8 rounded-lg bg-white/20 text-white font-bold text-xs shrink-0"
                >
                  {{ index + 1 }}
                </div>
                <div class="min-w-0 flex-1">
                  <h3 class="text-sm font-bold text-white truncate">
                    {{ barangayName }}
                  </h3>
                  <p class="text-white/70 text-xs">
                    {{ groupedBarangays[barangayName].length }}
                    {{
                      groupedBarangays[barangayName].length === 1 ? 'Record' : 'Records'
                    }}
                  </p>
                </div>
              </div>
              <button
                @click="openBarangayModal(barangayName)"
                class="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-300 flex items-center gap-1.5 font-medium text-xs whitespace-nowrap"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fill-rule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                View
              </button>
            </div>
          </div>

          <!-- Barangay Content - Hidden by default -->
          <div class="hidden"></div>
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
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl sm:max-w-3xl lg:max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-hidden transform transition-all flex flex-col"
        >
          <!-- Modal Header -->
          <div
            class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-4 sm:px-6 py-4 sm:py-5 relative overflow-hidden shrink-0"
          >
            <div
              class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"
            ></div>
            <div
              class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-24 -mb-24"
            ></div>

            <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div class="flex-1">
                <h2 class="text-lg sm:text-2xl font-bold text-white mb-1">
                  {{ selectedRecord?.brgyname || 'Barangay Details' }}
                </h2>
                <p class="text-white/80 text-xs sm:text-sm">Complete barangay information</p>
              </div>
              <button
                @click="closeDetailsModal"
                class="p-2 hover:bg-white/20 rounded-lg transition-colors"
              >
                <svg
                  class="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div
            class="overflow-y-auto flex-1 p-4 sm:p-6 bg-linear-to-br from-[#f3f1ee]/30 to-white dark:from-gray-800 dark:to-gray-900"
          >
            <div class="space-y-4 sm:space-y-6">
              <!-- Basic Information Section -->
              <div
                class="bg-white dark:bg-gray-700 rounded-xl shadow-md border border-[#004595]/10 dark:border-gray-600 overflow-hidden"
              >
                <div
                  class="bg-linear-to-r from-[#004595]/10 to-transparent dark:from-blue-500/20 dark:to-transparent px-4 sm:px-5 py-3 border-b border-[#004595]/10 dark:border-gray-600"
                >
                  <h3
                    class="text-base sm:text-lg font-bold text-[#002147] dark:text-white flex items-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    Basic Information
                  </h3>
                </div>
                <div class="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div class="space-y-1">
                    <p
                      class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide"
                    >
                      Barangay Name
                    </p>
                    <p class="text-base font-bold text-[#002147] dark:text-white">
                      {{ selectedRecord?.brgyname || 'N/A' }}
                    </p>
                  </div>
                  <div class="space-y-1">
                    <p
                      class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide"
                    >
                      Patron Saint
                    </p>
                    <p class="text-base font-semibold text-gray-800 dark:text-gray-200">
                      {{ selectedRecord?.patron || 'Not specified' }}
                    </p>
                  </div>
                  <div class="space-y-1">
                    <p
                      class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide"
                    >
                      Fiesta Date
                    </p>
                    <p class="text-base font-semibold text-gray-800 dark:text-gray-200">
                      {{ selectedRecord?.date || 'Not specified' }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Leadership Section -->
              <div
                class="bg-white dark:bg-gray-700 rounded-xl shadow-md border border-[#004595]/10 dark:border-gray-600 overflow-hidden"
              >
                <div
                  class="bg-linear-to-r from-[#004595]/10 to-transparent dark:from-blue-500/20 dark:to-transparent px-4 sm:px-5 py-3 border-b border-[#004595]/10 dark:border-gray-600"
                >
                  <h3
                    class="text-base sm:text-lg font-bold text-[#002147] dark:text-white flex items-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
                      />
                    </svg>
                    Leadership & Personnel
                  </h3>
                </div>
                <div class="p-4 sm:p-5 space-y-3 sm:space-y-4">
                  <div
                    class="bg-linear-to-r from-[#004595]/5 to-transparent dark:from-blue-500/10 dark:to-transparent rounded-lg p-3 sm:p-4 border border-[#004595]/10 dark:border-blue-800/30"
                  >
                    <p
                      class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1"
                    >
                      Barangay Captain
                    </p>
                    <p class="text-lg font-bold text-[#002147] dark:text-white">
                      {{ selectedRecord?.cptfullname || 'Not assigned' }}
                    </p>
                  </div>
                  <div
                    class="bg-linear-to-r from-green-50 to-transparent dark:from-green-900/20 dark:to-transparent rounded-lg p-4 border border-green-200 dark:border-green-800/50"
                  >
                    <p
                      class="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3"
                    >
                      Barangay Officials
                    </p>
                    <div v-if="selectedRecord?.bmfullname" class="space-y-2">
                      <div v-if="getMembersList(selectedRecord).length > 0" class="space-y-2">
                        <div
                          v-for="(member, index) in getMembersList(selectedRecord)"
                          :key="index"
                          class="flex items-center justify-between py-2 px-3 bg-white/50 dark:bg-gray-800/50 rounded-lg hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors"
                        >
                          <span class="text-sm font-semibold text-gray-800 dark:text-gray-200">{{
                            member.name
                          }}</span>
                          <span
                            class="text-sm font-medium text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/50 px-3 py-1 rounded-full"
                          >
                            {{ member.position }}
                          </span>
                        </div>
                      </div>
                      <p v-else class="text-sm text-gray-400 dark:text-gray-500 italic">
                        No positions assigned
                      </p>
                    </div>
                    <p v-else class="text-base font-semibold text-gray-500 dark:text-gray-400">
                      No members listed
                    </p>
                  </div>
                </div>
              </div>

              <!-- Facilities Section -->
              <div
                class="bg-white dark:bg-gray-700 rounded-xl shadow-md border border-[#004595]/10 dark:border-gray-600 overflow-hidden"
              >
                <div
                  class="bg-linear-to-r from-[#004595]/10 to-transparent dark:from-blue-500/20 dark:to-transparent px-4 sm:px-5 py-3 border-b border-[#004595]/10 dark:border-gray-600"
                >
                  <h3
                    class="text-base sm:text-lg font-bold text-[#002147] dark:text-white flex items-center gap-2"
                  >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                      />
                    </svg>
                    Community Facilities
                  </h3>
                </div>
                <div class="p-4 sm:p-5 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                  <div
                    class="bg-linear-to-br from-indigo-50 to-transparent dark:from-indigo-900/20 dark:to-transparent rounded-lg p-4 border border-indigo-200 dark:border-indigo-800/50"
                  >
                    <div class="flex items-center gap-2 mb-2">
                      <div class="p-2 bg-indigo-600 dark:bg-indigo-700 rounded-lg">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                          />
                        </svg>
                      </div>
                      <span
                        class="text-xs font-semibold text-indigo-800 dark:text-indigo-300 uppercase"
                        >Schools</span
                      >
                    </div>
                    <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {{ selectedRecord?.schoolname || 'No schools listed' }}
                    </p>
                  </div>

                  <div
                    class="bg-linear-to-br from-rose-50 to-transparent dark:from-rose-900/20 dark:to-transparent rounded-lg p-4 border border-rose-200 dark:border-rose-800/50"
                  >
                    <div class="flex items-center gap-2 mb-2">
                      <div class="p-2 bg-rose-600 dark:bg-rose-700 rounded-lg">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <span class="text-xs font-semibold text-rose-800 dark:text-rose-300 uppercase"
                        >Churches</span
                      >
                    </div>
                    <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {{ selectedRecord?.churchname || 'No churches listed' }}
                    </p>
                  </div>

                  <div
                    class="bg-linear-to-br from-cyan-50 to-transparent dark:from-cyan-900/20 dark:to-transparent rounded-lg p-4 border border-cyan-200 dark:border-cyan-800/50"
                  >
                    <div class="flex items-center gap-2 mb-2">
                      <div class="p-2 bg-cyan-600 dark:bg-cyan-700 rounded-lg">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fill-rule="evenodd"
                            d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1H8a1 1 0 000 2h1v1a1 1 0 002 0v-1h1a1 1 0 000-2h-1V9z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                      <span class="text-xs font-semibold text-cyan-800 dark:text-cyan-300 uppercase"
                        >Establishments</span
                      >
                    </div>
                    <p class="text-sm font-semibold text-gray-800 dark:text-gray-200">
                      {{ selectedRecord?.establishmentname || 'No establishments listed' }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div
            class="bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col-reverse sm:flex-row justify-end gap-3 shrink-0"
          >
            <button
              @click="closeDetailsModal"
              class="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 font-medium"
            >
              Close
            </button>
            <button
              @click="exportFromModal"
              class="px-6 py-2.5 bg-linear-to-r from-green-600 to-green-700 dark:from-green-700 dark:to-green-800 text-white rounded-xl hover:from-green-700 hover:to-green-800 dark:hover:from-green-800 dark:hover:to-green-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 font-medium"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
              Export to Excel
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Barangay Details Modal -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="showBarangayModal"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="closeBarangayModal"
      >
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl xl:max-w-6xl max-h-[85vh] sm:max-h-[90vh] overflow-hidden transform transition-all flex flex-col"
        >
          <!-- Modal Header -->
          <div
            class="bg-linear-to-r from-[#002147] via-[#004595] to-[#00397a] px-4 sm:px-6 py-4 sm:py-5 relative overflow-hidden shrink-0"
          >
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-24 -mb-24"></div>

            <div class="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div class="flex-1">
                <h2 class="text-lg sm:text-2xl font-bold text-white mb-1">
                  {{ selectedBarangayName }}
                </h2>
                <p class="text-white/80 text-xs sm:text-sm">
                  {{ groupedBarangays[selectedBarangayName]?.length || 0 }} Record{{ groupedBarangays[selectedBarangayName]?.length !== 1 ? 's' : '' }}
                </p>
              </div>
              <button
                @click="closeBarangayModal"
                class="p-2 hover:bg-white/20 rounded-lg transition-colors shrink-0"
              >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="overflow-y-auto flex-1 p-4 sm:p-6 bg-linear-to-br from-[#f3f1ee]/30 to-white dark:from-gray-800 dark:to-gray-900">
            <div class="space-y-3 sm:space-y-4">
              <div
                v-for="(record, recordIndex) in groupedBarangays[selectedBarangayName]"
                :key="recordIndex"
                class="bg-white dark:bg-gray-700 rounded-xl shadow-md border border-[#004595]/10 dark:border-gray-600 overflow-hidden hover:shadow-lg transition-all"
              >
                <div class="p-4 sm:p-5">
                  <!-- Record Header -->
                  <div class="pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <div>
                        <p class="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wider mb-1">
                          Patron Saint & Fiesta
                        </p>
                        <div class="flex flex-wrap items-center gap-2">
                          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200">
                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd" />
                            </svg>
                            {{ record.patron || 'Not specified' }}
                          </span>
                          <span v-if="record.date" class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200">
                            <svg class="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                            </svg>
                            {{ record.date }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Record Info Grid - Primary Info -->
                  <div class="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <!-- Captain -->
                    <div class="bg-linear-to-br from-[#002147]/10 to-transparent dark:from-slate-900/30 dark:to-transparent rounded-lg p-3 sm:p-4 border-2 border-[#002147]/20 dark:border-slate-700/50">
                      <div class="flex items-center gap-2 mb-2">
                        <svg class="w-4 h-4 text-[#002147] dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                        </svg>
                        <p class="text-xs font-bold text-[#002147] dark:text-gray-300 uppercase tracking-widest">Barangay Captain</p>
                      </div>
                      <p class="text-sm font-semibold text-[#002147] dark:text-white wrap-break-words">{{ record.cptfullname || 'Not assigned' }}</p>
                    </div>

                    <!-- Schools -->
                    <div class="bg-linear-to-br from-slate-50 to-transparent dark:from-slate-800/30 dark:to-transparent rounded-lg p-3 sm:p-4 border-2 border-slate-300/50 dark:border-slate-700/50">
                      <div class="flex items-center gap-2 mb-3">
                        <svg class="w-4 h-4 text-slate-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                        </svg>
                        <p class="text-xs font-bold text-slate-700 dark:text-gray-300 uppercase tracking-widest">Educational Institutions</p>
                      </div>
                      <div v-if="getSchoolsList(record).length > 0" class="space-y-2">
                        <p 
                          v-for="(school, idx) in getSchoolsList(record)"
                          :key="idx"
                          class="text-sm font-semibold text-slate-800 dark:text-gray-200 wrap-break-words"
                        >
                          {{ idx + 1 }}. {{ school }}
                        </p>
                      </div>
                      <p v-else class="text-sm text-slate-700 dark:text-gray-300 italic">No schools listed</p>
                    </div>

                    <!-- Churches -->
                    <div class="bg-linear-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent rounded-lg p-3 sm:p-4 border-2 border-amber-200/50 dark:border-amber-800/50">
                      <div class="flex items-center gap-2 mb-3">
                        <svg class="w-4 h-4 text-amber-900 dark:text-amber-100" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                        <p class="text-xs font-bold text-amber-900 dark:text-amber-100 uppercase tracking-widest">Religious Institutions</p>
                      </div>
                      <div v-if="getChurchesList(record).length > 0" class="space-y-2">
                        <p 
                          v-for="(church, idx) in getChurchesList(record)"
                          :key="idx"
                          class="text-sm font-semibold text-amber-900 dark:text-amber-100 wrap-break-words"
                        >
                          {{ idx + 1 }}. {{ church }}
                        </p>
                      </div>
                      <p v-else class="text-sm text-amber-800 dark:text-amber-200 italic">No churches listed</p>
                    </div>
                  </div>

                  <!-- Separator -->
                  <div class="my-3 sm:my-4 border-t-2 border-[#004595]/10 dark:border-gray-600"></div>

                  <!-- Record Info Grid - Secondary Info -->
                  <div class="grid gap-3 sm:gap-4 grid-cols-1 lg:grid-cols-2">
                    <!-- Officials -->
                    <div class="bg-linear-to-br from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent rounded-lg p-3 sm:p-4 border-2 border-blue-200/50 dark:border-blue-800/50">
                      <div class="flex items-center gap-2 mb-3">
                        <svg class="w-4 h-4 text-blue-900 dark:text-blue-100" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 11a6 6 0 00-5.86 0A.75.75 0 006 20.75v-1.5a4.5 4.5 0 019 0v1.5a.75.75 0 01-.07 0z" />
                        </svg>
                        <p class="text-xs font-bold text-blue-900 dark:text-blue-100 uppercase tracking-widest">Barangay Officials</p>
                      </div>
                      <div v-if="getMembersList(record).length > 0" class="space-y-2">
                        <div
                          v-for="(member, idx) in getMembersList(record)"
                          :key="idx"
                          class="flex items-start justify-between gap-2"
                        >
                          <p class="text-sm font-semibold text-blue-900 dark:text-blue-100 wrap-break-words flex-1">{{ idx + 1 }}. {{ member.name }}</p>
                          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-200 dark:bg-blue-900/50 text-blue-900 dark:text-blue-200 whitespace-nowrap">
                            {{ member.position }}
                          </span>
                        </div>
                      </div>
                      <p v-else class="text-sm text-blue-700 dark:text-blue-300 italic">No officials listed</p>
                    </div>

                    <!-- Establishments -->
                    <div class="bg-linear-to-br from-gray-100 to-transparent dark:from-gray-700/40 dark:to-transparent rounded-lg p-3 sm:p-4 border-2 border-gray-300/50 dark:border-gray-700/50">
                      <div class="flex items-center gap-2 mb-3">
                        <svg class="w-4 h-4 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1h7.586a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM5 16a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p class="text-xs font-bold text-gray-800 dark:text-gray-200 uppercase tracking-widest">Commercial Establishments</p>
                      </div>
                      <div v-if="getEstablishmentsList(record).length > 0" class="space-y-2">
                        <p 
                          v-for="(establishment, idx) in getEstablishmentsList(record)"
                          :key="idx"
                          class="text-sm font-semibold text-gray-800 dark:text-gray-200 wrap-break-words"
                        >
                          {{ idx + 1 }}. {{ establishment }}
                        </p>
                      </div>
                      <p v-else class="text-sm text-gray-700 dark:text-gray-300 italic">No establishments listed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex flex-col-reverse sm:flex-row justify-end gap-3 shrink-0">
            <button
              @click="closeBarangayModal"
              class="px-6 py-2.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 font-medium"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Toast Notification -->
    <Transition
      enter-active-class="transition-all duration-500 ease-out"
      enter-from-class="opacity-0 translate-y-[-100%]"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[-100%]"
    >
      <div
        v-if="toast.show"
        class="fixed top-6 left-1/2 -translate-x-1/2 z-100000 max-w-md w-full px-4"
      >
        <div
          :class="[
            'rounded-2xl shadow-2xl border-2 p-5 backdrop-blur-sm',
            toast.type === 'success'
              ? 'bg-green-50/95 border-green-200'
              : toast.type === 'error'
                ? 'bg-red-50/95 border-red-200'
                : 'bg-blue-50/95 border-blue-200',
          ]"
        >
          <div class="flex items-start gap-4">
            <!-- Icon -->
            <div
              :class="[
                'shrink-0 w-12 h-12 rounded-full flex items-center justify-center',
                toast.type === 'success'
                  ? 'bg-green-100'
                  : toast.type === 'error'
                    ? 'bg-red-100'
                    : 'bg-blue-100',
              ]"
            >
              <svg
                v-if="toast.type === 'success'"
                class="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <svg
                v-else-if="toast.type === 'error'"
                class="w-6 h-6 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <svg
                v-else
                class="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <!-- Content -->
            <div class="flex-1 pt-0.5">
              <h3
                :class="[
                  'font-bold text-base mb-1',
                  toast.type === 'success'
                    ? 'text-green-800'
                    : toast.type === 'error'
                      ? 'text-red-800'
                      : 'text-blue-800',
                ]"
              >
                {{ toast.message }}
              </h3>
              <p
                v-if="toast.description"
                :class="[
                  'text-sm',
                  toast.type === 'success'
                    ? 'text-green-700'
                    : toast.type === 'error'
                      ? 'text-red-700'
                      : 'text-blue-700',
                ]"
              >
                {{ toast.description }}
              </p>
            </div>

            <!-- Close Button -->
            <button
              @click="hideToast"
              :class="[
                'shrink-0 p-1 rounded-lg transition-colors',
                toast.type === 'success'
                  ? 'hover:bg-green-100 text-green-600'
                  : toast.type === 'error'
                    ? 'hover:bg-red-100 text-red-600'
                    : 'hover:bg-blue-100 text-blue-600',
              ]"
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
          </div>

          <!-- Progress Bar -->
          <div
            :class="[
              'mt-3 h-1 rounded-full overflow-hidden',
              toast.type === 'success'
                ? 'bg-green-200'
                : toast.type === 'error'
                  ? 'bg-red-200'
                  : 'bg-blue-200',
            ]"
          >
            <div
              :class="[
                'h-full transition-all duration-100 ease-linear',
                toast.type === 'success'
                  ? 'bg-green-600'
                  : toast.type === 'error'
                    ? 'bg-red-600'
                    : 'bg-blue-600',
              ]"
              :style="{ width: `${toast.progress}%` }"
            ></div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { supabase } from '@/lib/supabase'
import * as XLSX from 'xlsx-js-style'
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const records = ref([])
const loading = ref(false)
const showDetailsModal = ref(false)
const selectedRecord = ref(null)
const showBarangayModal = ref(false)
const selectedBarangayName = ref('')
const searchQuery = ref('')

// Category search variables
const categorySearchQuery = ref('')
const categorySearchFocused = ref(false)
const allCategories = ref([])
const expandedCategories = ref(new Set())

// Barangay grouping variables
const expandedBarangays = ref(new Set())

// Toast notification state
const toast = ref({
  show: false,
  message: '',
  description: '',
  type: 'success', // 'success', 'error', 'info'
  progress: 100,
})

let toastTimer = null
let progressTimer = null

// Toast helper functions
const showToast = (message, type = 'success', description = '', duration = 2000) => {
  // Clear existing timers
  if (toastTimer) clearTimeout(toastTimer)
  if (progressTimer) clearInterval(progressTimer)

  toast.value = {
    show: true,
    message,
    description,
    type,
    progress: 100,
  }

  // Progress bar animation
  const startTime = Date.now()
  progressTimer = setInterval(() => {
    const elapsed = Date.now() - startTime
    const remaining = Math.max(0, 100 - (elapsed / duration) * 100)
    toast.value.progress = remaining

    if (remaining <= 0) {
      clearInterval(progressTimer)
    }
  }, 50)

  // Auto hide
  toastTimer = setTimeout(() => {
    hideToast()
  }, duration)
}

const hideToast = () => {
  toast.value.show = false
  if (toastTimer) clearTimeout(toastTimer)
  if (progressTimer) clearInterval(progressTimer)
}

// Computed property for filtered records
const filteredRecords = computed(() => {
  if (!searchQuery.value.trim()) {
    return records.value
  }

  const query = searchQuery.value.toLowerCase().trim()

  return records.value.filter((record) => {
    return (
      (record.brgyname && record.brgyname.toLowerCase().includes(query)) ||
      (record.cptfullname && record.cptfullname.toLowerCase().includes(query)) ||
      (record.bmfullname && record.bmfullname.toLowerCase().includes(query)) ||
      (record.bmposition && record.bmposition.toLowerCase().includes(query)) ||
      (record.patron && record.patron.toLowerCase().includes(query)) ||
      (record.date && record.date.toLowerCase().includes(query)) ||
      (record.schoolname && record.schoolname.toLowerCase().includes(query)) ||
      (record.churchname && record.churchname.toLowerCase().includes(query)) ||
      (record.establishmentname && record.establishmentname.toLowerCase().includes(query))
    )
  })
})

// Group records by barangay name
const groupedBarangays = computed(() => {
  const grouped = {}
  filteredRecords.value.forEach((record) => {
    const brgyName = record.brgyname || 'Unknown'
    if (!grouped[brgyName]) {
      grouped[brgyName] = []
    }
    grouped[brgyName].push(record)
  })
  return grouped
})

// Get sorted barangay names
const groupedBarangayNames = computed(() => {
  return Object.keys(groupedBarangays.value).sort()
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
    'Position/Role',
    'Patron',
    'Fiesta Date',
    'Schools',
    'Churches',
    'Establishments',
  ]

  const dataRows = rows.map((record, index) => [
    index + 1,
    record.brgyname || '',
    record.cptfullname || '',
    record.bmfullname || '',
    record.bmposition || '',
    record.patron || '',
    record.date || '',
    record.schoolname || '',
    record.churchname || '',
    record.establishmentname || '',
  ])

  const worksheet = XLSX.utils.aoa_to_sheet([titleRow, brgyRow, [], headerRow, ...dataRows])

  worksheet['!merges'] = [
    { s: { r: 0, c: 0 }, e: { r: 0, c: 9 } },
    { s: { r: 1, c: 0 }, e: { r: 1, c: 9 } },
  ]

  worksheet['A1'].s = {
    font: { bold: true, sz: 18, color: { rgb: '002147' } },
    alignment: { horizontal: 'center', vertical: 'center' },
  }
  worksheet['A2'].s = {
    font: { bold: true, sz: 14, color: { rgb: '002147' } },
    alignment: { horizontal: 'center', vertical: 'center' },
  }

  headerRow.forEach((_, colIndex) => {
    const cellRef = XLSX.utils.encode_cell({ r: 3, c: colIndex })
    if (worksheet[cellRef]) {
      worksheet[cellRef].s = {
        font: { bold: true, color: { rgb: '002147' } },
        alignment: { horizontal: 'left', vertical: 'center' },
      }
    }
  })

  const allRows = [headerRow, ...dataRows]
  worksheet['!cols'] = allRows[0].map((_, colIndex) => {
    const maxLength = Math.max(...allRows.map((row) => String(row[colIndex] ?? '').length))
    return { wch: Math.min(Math.max(maxLength + 2, 10), 40) }
  })

  return worksheet
}

const exportRecordsToExcel = (rows, filename, barangayLabel) => {
  if (!rows || rows.length === 0) {
    showToast('No Records to Export', 'error', 'There are no records available to export')
    return
  }

  try {
    const worksheet = buildWorksheet(rows, barangayLabel)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Records')
    XLSX.writeFile(workbook, filename)

    // Show success toast
    const recordCount = rows.length
    showToast(
      'Export Successful!',
      'success',
      `${recordCount} record${recordCount !== 1 ? 's' : ''} exported to ${filename}`,
      2000,
    )
  } catch (error) {
    console.error('Export error:', error)
    showToast('Export Failed', 'error', 'Failed to export records. Please try again.')
  }
}

const exportToExcel = () => {
  const dataToExport = searchQuery.value ? filteredRecords.value : records.value
  exportRecordsToExcel(
    dataToExport,
    `Barangay_Records_${new Date().toISOString().split('T')[0]}.xlsx`,
    searchQuery.value ? `Search Results: ${searchQuery.value}` : 'All Barangays',
  )
}

const exportSingleBarangay = (record) => {
  const brgyName = (record?.brgyname || 'Barangay').replace(/[^a-zA-Z0-9_-]/g, '_')
  exportRecordsToExcel(
    [record],
    `Barangay_${brgyName}_${new Date().toISOString().split('T')[0]}.xlsx`,
    record?.brgyname || 'Barangay',
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

// Toggle barangay expanded/collapsed state
const toggleBarangayExpanded = (barangayName) => {
  if (expandedBarangays.value.has(barangayName)) {
    expandedBarangays.value.delete(barangayName)
  } else {
    expandedBarangays.value.add(barangayName)
  }
}

// Open barangay details modal
const openBarangayModal = (barangayName) => {
  selectedBarangayName.value = barangayName
  showBarangayModal.value = true
}

// Close barangay details modal
const closeBarangayModal = () => {
  showBarangayModal.value = false
  setTimeout(() => {
    selectedBarangayName.value = ''
  }, 300)
}

// Parse members and positions into an array of objects
// position field in BrgyMembers table contains the actual role (e.g., "Purok Chairman", "Kagawad", etc.)
const getMembersList = (record) => {
  if (!record) return []

  // If we have the members array directly from the database (direct fetch mode)
  if (record.members && Array.isArray(record.members) && record.members.length > 0) {
    return record.members.map((member) => ({
      name: member.BMfullname || 'Unknown',
      position: member.position || 'No position assigned', // This gets the actual role from the position field
    }))
  }

  // Fallback: Parse from comma-separated strings (RPC function mode)
  if (!record.bmfullname) return []

  const names = record.bmfullname
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
  const positions = record.bmposition
    ? record.bmposition
        .split(',')
        .map((pos) => pos.trim())
        .filter(Boolean)
    : []

  // Match names with their positions (roles) from the position field
  return names.map((name, index) => ({
    name: name,
    position: positions[index] || 'No position assigned',
  }))
}

const getEstablishmentsList = (record) => {
  if (!record || !record.establishmentname) return []
  
  const establishments = record.establishmentname
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
  
  return establishments
}

const getSchoolsList = (record) => {
  if (!record || !record.schoolname) return []
  
  const schools = record.schoolname
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
  
  return schools
}

const getChurchesList = (record) => {
  if (!record || !record.churchname) return []
  
  const churches = record.churchname
    .split(',')
    .map((name) => name.trim())
    .filter(Boolean)
  
  return churches
}

// Fetch records with members from BrgyMembers table
const fetchBarangays = async () => {
  loading.value = true
  try {
    // First try using the RPC function
    console.log('Attempting to fetch using RPC function...')
    const { data: rpcData, error: rpcError } = await supabase.rpc('brgyrecords')

    if (rpcError) {
      console.warn('RPC function error:', rpcError.message)
      console.log('Falling back to direct table fetch...')

      // Fallback: Fetch barangays with their captain - using exact schema
      const { data: barangays, error: brgyError } = await supabase
        .from('Barangays')
        .select('*')
        .order('brgyname', { ascending: true })

      if (brgyError) {
        console.error('Barangays fetch error:', brgyError)
        throw new Error(`Failed to fetch barangays: ${brgyError.message}`)
      }

      console.log('Fetched barangays:', barangays)

      // Fetch all captains
      const captainIds = barangays.map((b) => b.cpt_id).filter(Boolean)
      const { data: captains, error: captainsError } = await supabase
        .from('BrgyCaptain')
        .select('id, Cptfullname')
        .in('id', captainIds)

      if (captainsError) {
        console.error('Captains fetch error:', captainsError)
      }

      console.log('Fetched captains:', captains)

      // Create captain lookup map
      const captainMap = {}
      if (captains) {
        captains.forEach((captain) => {
          captainMap[captain.id] = captain.Cptfullname
        })
      }

      // Fetch members for all barangays
      const barangayIds = barangays.map((b) => b.id)
      const { data: members, error: membersError } = await supabase
        .from('BrgyMembers')
        .select('id, BMfullname, position, brgy_id')
        .in('brgy_id', barangayIds)

      if (membersError) {
        console.error('Members fetch error:', membersError)
      }

      console.log('Fetched members:', members)

      // Fetch fiestas (patron saints and dates)
      const { data: fiestas, error: fiestasError } = await supabase
        .from('BrgyFiesta')
        .select('id, patron, date, brgy_id')
        .in('brgy_id', barangayIds)
        .eq('active', true)

      if (fiestasError) {
        console.error('Fiestas fetch error:', fiestasError)
      }

      console.log('Fetched fiestas:', fiestas)

      // Fetch schools
      const { data: schools, error: schoolsError } = await supabase
        .from('Schools')
        .select('id, schoolName, brgy_id')
        .in('brgy_id', barangayIds)

      if (schoolsError) {
        console.error('Schools fetch error:', schoolsError)
      }

      console.log('Fetched schools:', schools)

      // Fetch churches
      const { data: churches, error: churchesError } = await supabase
        .from('Church')
        .select('id, churchName, brgy_id')
        .in('brgy_id', barangayIds)

      if (churchesError) {
        console.error('Churches fetch error:', churchesError)
      }

      console.log('Fetched churches:', churches)

      // Fetch establishments
      const { data: establishments, error: establishmentsError } = await supabase
        .from('Establishments')
        .select('id, establishmentName, brgy_id')
        .in('brgy_id', barangayIds)

      if (establishmentsError) {
        console.error('Establishments fetch error:', establishmentsError)
      }

      console.log('Fetched establishments:', establishments)

      // Group all data by barangay
      const membersByBrgy = {}
      const fiestasByBrgy = {}
      const schoolsByBrgy = {}
      const churchesByBrgy = {}
      const establishmentsByBrgy = {}

      if (members) {
        members.forEach((member) => {
          if (!membersByBrgy[member.brgy_id]) {
            membersByBrgy[member.brgy_id] = []
          }
          membersByBrgy[member.brgy_id].push(member)
        })
      }

      if (fiestas) {
        fiestas.forEach((fiesta) => {
          if (!fiestasByBrgy[fiesta.brgy_id]) {
            fiestasByBrgy[fiesta.brgy_id] = []
          }
          fiestasByBrgy[fiesta.brgy_id].push(fiesta)
        })
      }

      if (schools) {
        schools.forEach((school) => {
          if (!schoolsByBrgy[school.brgy_id]) {
            schoolsByBrgy[school.brgy_id] = []
          }
          schoolsByBrgy[school.brgy_id].push(school.schoolName)
        })
      }

      if (churches) {
        churches.forEach((church) => {
          if (!churchesByBrgy[church.brgy_id]) {
            churchesByBrgy[church.brgy_id] = []
          }
          churchesByBrgy[church.brgy_id].push(church.churchName)
        })
      }

      if (establishments) {
        establishments.forEach((establishment) => {
          if (!establishmentsByBrgy[establishment.brgy_id]) {
            establishmentsByBrgy[establishment.brgy_id] = []
          }
          establishmentsByBrgy[establishment.brgy_id].push(establishment.establishmentName)
        })
      }

      // Transform the data to match the expected format
      records.value = barangays.map((brgy) => {
        const brgyMembers = membersByBrgy[brgy.id] || []
        const brgyFiestas = fiestasByBrgy[brgy.id] || []
        const brgySchools = schoolsByBrgy[brgy.id] || []
        const brgyChurches = churchesByBrgy[brgy.id] || []
        const brgyEstablishments = establishmentsByBrgy[brgy.id] || []

        // Get the first (active) fiesta for patron and date
        const primaryFiesta = brgyFiestas[0] || {}

        return {
          brgyname: brgy.brgyname || '',
          cptfullname: captainMap[brgy.cpt_id] || 'Not assigned',
          bmfullname:
            brgyMembers
              .map((m) => m.BMfullname)
              .filter(Boolean)
              .join(', ') || '',
          bmposition:
            brgyMembers
              .map((m) => m.position)
              .filter(Boolean)
              .join(', ') || '',
          patron: primaryFiesta.patron || 'Not specified',
          date: primaryFiesta.date || '',
          schoolname: brgySchools.join(', ') || 'No schools listed',
          churchname: brgyChurches.join(', ') || 'No churches listed',
          establishmentname: brgyEstablishments.join(', ') || 'No establishments listed',
          members: brgyMembers, // Store raw members array for detailed view
        }
      })

      console.log('Transformed records:', records.value)
      console.log(`Successfully loaded ${records.value.length} barangay records`)
    } else {
      // Use RPC data if available
      console.log('RPC function succeeded, data:', rpcData)
      if (rpcData && rpcData.length > 0) {
        records.value = rpcData
        console.log(`Successfully loaded ${records.value.length} records from RPC`)
      } else {
        console.warn('RPC returned no data')
        records.value = []
      }
    }
  } catch (error) {
    console.error('Error fetching records:', error)
    showToast(
      'Failed to Load Records',
      'error',
      error.message || 'Please check console for details',
    )
  } finally {
    loading.value = false
  }
}

// Fetch all categories from all tables
const fetchAllCategories = async () => {
  try {
    const categories = []

    // Fetch from Schools table
    const { data: schoolsData, error: schoolsError } = await supabase
      .from('Schools')
      .select('category, brgy_id, schoolName, schoolAddress, Barangays(brgyname)')
      .not('category', 'is', null)

    if (schoolsError) {
      console.error('Error fetching schools:', schoolsError)
    } else if (schoolsData && schoolsData.length > 0) {
      const schoolsByCategory = {}
      schoolsData.forEach((school) => {
        const cat = school.category.trim()
        if (!schoolsByCategory[cat]) {
          schoolsByCategory[cat] = {
            items: [],
            barangays: {},
          }
        }
        schoolsByCategory[cat].items.push(school)
        const brgyName = school.Barangays?.brgyname || 'Unknown'
        if (!schoolsByCategory[cat].barangays[brgyName]) {
          schoolsByCategory[cat].barangays[brgyName] = 0
        }
        schoolsByCategory[cat].barangays[brgyName]++
      })

      Object.entries(schoolsByCategory).forEach(([categoryName, data]) => {
        const barangays = Object.entries(data.barangays).map(([name, count]) => ({
          name,
          count,
        }))

        categories.push({
          categoryName,
          type: 'School',
          totalCount: data.items.length,
          barangayCount: Object.keys(data.barangays).length,
          barangays,
          key: `school-${categoryName}`,
        })
      })
    }

    // Fetch from Churches table
    const { data: churchesData, error: churchesError } = await supabase
      .from('Church')
      .select('category, brgy_id, churchName, churchAddress, Barangays(brgyname)')
      .not('category', 'is', null)

    if (churchesError) {
      console.error('Error fetching churches:', churchesError)
    } else if (churchesData && churchesData.length > 0) {
      const churchesByCategory = {}
      churchesData.forEach((church) => {
        const category = church.category.trim()
        if (!churchesByCategory[category]) {
          churchesByCategory[category] = {
            items: [],
            barangays: {},
          }
        }
        churchesByCategory[category].items.push(church)
        const brgyName = church.Barangays?.brgyname || 'Unknown'
        if (!churchesByCategory[category].barangays[brgyName]) {
          churchesByCategory[category].barangays[brgyName] = 0
        }
        churchesByCategory[category].barangays[brgyName]++
      })

      Object.entries(churchesByCategory).forEach(([categoryName, data]) => {
        const barangays = Object.entries(data.barangays).map(([name, count]) => ({
          name,
          count,
        }))

        categories.push({
          categoryName,
          type: 'Church',
          totalCount: data.items.length,
          barangayCount: Object.keys(data.barangays).length,
          barangays,
          key: `church-${categoryName}`,
        })
      })
    }

    // Fetch from Establishments table
    const { data: estabData, error: estabError } = await supabase
      .from('Establishments')
      .select('category, brgy_id, establishmentName, establishmentAddress, Barangays(brgyname)')
      .not('category', 'is', null)

    if (estabError) {
      console.error('Error fetching establishments:', estabError)
    } else if (estabData && estabData.length > 0) {
      const estabByCategory = {}
      estabData.forEach((estab) => {
        const category = estab.category.trim()
        if (!estabByCategory[category]) {
          estabByCategory[category] = {
            items: [],
            barangays: {},
          }
        }
        estabByCategory[category].items.push(estab)
        const brgyName = estab.Barangays?.brgyname || 'Unknown'
        if (!estabByCategory[category].barangays[brgyName]) {
          estabByCategory[category].barangays[brgyName] = 0
        }
        estabByCategory[category].barangays[brgyName]++
      })

      Object.entries(estabByCategory).forEach(([categoryName, data]) => {
        const barangays = Object.entries(data.barangays).map(([name, count]) => ({
          name,
          count,
        }))

        categories.push({
          categoryName,
          type: 'Establishment',
          totalCount: data.items.length,
          barangayCount: Object.keys(data.barangays).length,
          barangays,
          key: `estab-${categoryName}`,
        })
      })
    }

    // Fetch from GovtOffices table
    const { data: govtData, error: govtError } = await supabase
      .from('GovtOffices')
      .select('officeType, brgy_id, officeName, officeAddress, Barangays(brgyname)')
      .not('officeType', 'is', null)

    if (govtError) {
      console.error('Error fetching govt offices:', govtError)
    } else if (govtData && govtData.length > 0) {
      const govtByType = {}
      govtData.forEach((office) => {
        const type = office.officeType.trim()
        if (!govtByType[type]) {
          govtByType[type] = {
            items: [],
            barangays: {},
          }
        }
        govtByType[type].items.push(office)
        const brgyName = office.Barangays?.brgyname || 'Unknown'
        if (!govtByType[type].barangays[brgyName]) {
          govtByType[type].barangays[brgyName] = 0
        }
        govtByType[type].barangays[brgyName]++
      })

      Object.entries(govtByType).forEach(([categoryName, data]) => {
        const barangays = Object.entries(data.barangays).map(([name, count]) => ({
          name,
          count,
        }))

        categories.push({
          categoryName,
          type: 'Government Office',
          totalCount: data.items.length,
          barangayCount: Object.keys(data.barangays).length,
          barangays,
          key: `govt-${categoryName}`,
        })
      })
    }

    allCategories.value = categories
  } catch (error) {
    console.error('Error fetching all categories:', error)
    allCategories.value = []
  }
}

// Category search computed properties
const categorySearchResults = computed(() => {
  if (!categorySearchQuery.value.trim()) {
    return null
  }

  const query = categorySearchQuery.value.toLowerCase().trim()
  const queryWords = query.split(/\s+/).filter((w) => w.length > 0)
  const matchingCategories = []
  const categoryTypes = []
  const barangayTotals = {}
  const seen = new Set()

  allCategories.value.forEach((cat) => {
    const key = `${cat.categoryName}-${cat.type}`.toLowerCase()
    if (seen.has(key)) return

    const categoryLower = cat.categoryName.toLowerCase()
    const matches = queryWords.some((word) => categoryLower.includes(word))

    if (matches) {
      seen.add(key)
      matchingCategories.push(cat.categoryName)
      categoryTypes.push(cat.type)
      cat.barangays.forEach((brgy) => {
        if (!barangayTotals[brgy.name]) {
          barangayTotals[brgy.name] = 0
        }
        barangayTotals[brgy.name] += brgy.count
      })
    }
  })

  if (matchingCategories.length === 0) {
    return null
  }

  const barangaysArray = Object.entries(barangayTotals)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)

  const totalItems = barangaysArray.reduce((sum, b) => sum + b.count, 0)
  const totalBarangays = barangaysArray.length

  return {
    matchingCategories,
    categoryTypes,
    barangays: barangaysArray,
    totalItems,
    totalBarangays,
    searchQuery: query,
  }
})

const uniqueCategories = computed(() => {
  const categories = []
  const seen = new Set()

  allCategories.value.forEach((cat) => {
    if (!seen.has(cat.categoryName)) {
      seen.add(cat.categoryName)
      categories.push({
        name: cat.categoryName,
        type: cat.type,
        count: cat.totalCount,
      })
    }
  })

  return categories.sort((a, b) => a.name.localeCompare(b.name))
})

const filteredCategoriesForMenu = computed(() => {
  const query = categorySearchQuery.value.toLowerCase().trim()

  if (!query) {
    return uniqueCategories.value
  }

  return uniqueCategories.value.filter(
    (cat) => cat.name.toLowerCase().includes(query) || cat.type.toLowerCase().includes(query),
  )
})

// Category search methods
const selectCategoryFromMenu = (categoryName) => {
  categorySearchQuery.value = categoryName
  categorySearchFocused.value = false
}

const toggleCategoryExpanded = (key) => {
  if (expandedCategories.value.has(key)) {
    expandedCategories.value.delete(key)
  } else {
    expandedCategories.value.add(key)
  }
}

const goToBarangay = (barangayName) => {
  const results = categorySearchResults.value
  if (!results || !results.categoryTypes || results.categoryTypes.length === 0) return

  const categoryType = results.categoryTypes[0]
  const categoryName = results.matchingCategories[0]

  // Map category type to route name and component
  const typeMap = {
    School: 'schools',
    Church: 'churches',
    Establishment: 'establishments',
    GovtOffice: 'govtOffices',
  }

  const routeName = typeMap[categoryType]

  router.push({
    name: routeName,
    params: { barangayName: barangayName },
    query: { filterCategory: categoryName },
  })
}

onMounted(() => {
  fetchBarangays()
  fetchAllCategories()
})
</script>
