<template>
      <div class="min-h-screen bg-linear-to-br from-[#004595]/5 via-[#ffffff] to-[#00397a]/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 font-['Poppins']">
        <div class="flex min-h-screen">
          <!-- Enhanced Blue Sidebar - Hidden on mobile, visible on desktop -->
          <aside class="hidden lg:block w-full max-w-sm bg-linear-to-b from-white via-[#f3f1ee]/30 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 shadow-2xl border-r border-[#004595]/10 dark:border-gray-700">
            <div class="p-6 space-y-6">
              <!-- Enhanced Back Button -->
              <button
                type="button"
                class="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-3.5 text-sm font-semibold text-white hover:shadow-xl hover:shadow-[#004595]/20 hover:scale-[1.02] transition-all duration-300"
                @click="goBack"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                <span class="tracking-wide">Back to Dashboard</span>
              </button>

              <!-- Enhanced Barangay Profile Card -->
              <div class="rounded-2xl bg-linear-to-br from-[#002147] via-[#00397a] to-[#004595] p-8 text-white shadow-xl shadow-[#004595]/30 relative overflow-hidden">
                <!-- Animated Background Elements -->
                <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20 animate-pulse"></div>
                <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl -ml-16 -mb-16"></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#004595]/20 rounded-full blur-3xl"></div>
                
                <div class="relative flex flex-col items-center text-center gap-4">
                  <div class="h-28 w-28 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden flex items-center justify-center ring-4 ring-white/40 shadow-2xl">
                    <img v-if="captainInfo.profileImage" :src="captainInfo.profileImage" alt="Captain" class="h-full w-full object-cover" />
                    <svg v-else class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-xl font-bold leading-tight tracking-wide">{{ captainInfo.name || 'No name' }}</p>
                    <p class="text-sm text-white/90 font-medium mt-2 tracking-wide">Barangay Captain</p>
                  </div>
                </div>
              </div>

              <!-- Enhanced Navigation Menu -->
              <div class="space-y-2">
                <button
                  type="button"
                  :class="[
                    'w-full inline-flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 tracking-wide',
                    activeTab === 'dashboard' 
                      ? 'bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] text-white shadow-lg shadow-[#004595]/30 scale-[1.02]' 
                      : 'bg-white dark:bg-gray-700 text-[#002147] dark:text-white hover:bg-linear-to-r hover:from-[#004595]/10 hover:to-[#00397a]/10 dark:hover:from-gray-600 dark:hover:to-gray-600 border border-[#004595]/20 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500 hover:shadow-md'
                  ]"
                  @click="setActiveTab('dashboard')"
                >
                  <div :class="[
                    'p-1.5 rounded-lg transition-all',
                    activeTab === 'dashboard' ? 'bg-white/20' : 'bg-[#004595]/10'
                  ]">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                    </svg>
                  </div>
                  Dashboard
                </button>
                <button
                  type="button"
                  :class="[
                    'w-full inline-flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 tracking-wide',
                    activeTab === 'officers' 
                      ? 'bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] text-white shadow-lg shadow-[#004595]/30 scale-[1.02]' 
                      : 'bg-white dark:bg-gray-700 text-[#002147] dark:text-white hover:bg-linear-to-r hover:from-[#004595]/10 hover:to-[#00397a]/10 dark:hover:from-gray-600 dark:hover:to-gray-600 border border-[#004595]/20 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500 hover:shadow-md'
                  ]"
                  @click="setActiveTab('officers')"
                >
                  <div :class="[
                    'p-1.5 rounded-lg transition-all',
                    activeTab === 'officers' ? 'bg-white/20' : 'bg-[#004595]/10'
                  ]">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                    </svg>
                  </div>
                  List of Officers
                </button>
                <button
                  type="button"
                  :class="[
                    'w-full inline-flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 tracking-wide',
                    activeTab === 'landmarks' 
                      ? 'bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] text-white shadow-lg shadow-[#004595]/30 scale-[1.02]' 
                      : 'bg-white dark:bg-gray-700 text-[#002147] dark:text-white hover:bg-linear-to-r hover:from-[#004595]/10 hover:to-[#00397a]/10 dark:hover:from-gray-600 dark:hover:to-gray-600 border border-[#004595]/20 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500 hover:shadow-md'
                  ]"
                  @click="setActiveTab('landmarks')"
                >
                  <div :class="[
                    'p-1.5 rounded-lg transition-all',
                    activeTab === 'landmarks' ? 'bg-white/20' : 'bg-[#004595]/10'
                  ]">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  Landmarks
                </button>
                <button
                  type="button"
                  :class="[
                    'w-full inline-flex items-center gap-3 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 tracking-wide',
                    activeTab === 'history' 
                      ? 'bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] text-white shadow-lg shadow-[#004595]/30 scale-[1.02]' 
                      : 'bg-white dark:bg-gray-700 text-[#002147] dark:text-white hover:bg-linear-to-r hover:from-[#004595]/10 hover:to-[#00397a]/10 dark:hover:from-gray-600 dark:hover:to-gray-600 border border-[#004595]/20 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500 hover:shadow-md'
                  ]"
                  @click="setActiveTab('history')"
                >
                  <div :class="[
                    'p-1.5 rounded-lg transition-all',
                    activeTab === 'history' ? 'bg-white/20' : 'bg-[#004595]/10'
                  ]">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  History
                </button>
              </div>
            </div>
          </aside>

          <main class="flex-1 bg-linear-to-br from-[#004595]/5 via-transparent to-[#00397a]/5">
            <!-- Mobile Header with Back Button and Profile -->
            <div class="lg:hidden sticky top-0 z-40 bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-4 py-4 shadow-lg">
              <button
                type="button"
                class="inline-flex items-center gap-2 text-white font-semibold hover:text-white/80 transition-colors mb-3"
                @click="goBack"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                <span class="text-sm">Back to Dashboard</span>
              </button>
              
              <!-- Mobile Captain Profile -->
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden flex items-center justify-center ring-2 ring-white/40">
                  <img v-if="captainInfo.profileImage" :src="captainInfo.profileImage" alt="Captain" class="w-full h-full object-cover" />
                  <svg v-else class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="text-white font-bold text-sm">{{ captainInfo.name || 'No name' }}</p>
                  <p class="text-white/80 text-xs">Barangay Captain</p>
                </div>
              </div>
            </div>
            
            <div class="mx-auto max-w-7xl px-4 lg:px-8 py-10 pb-24 lg:pb-10">
              <section v-if="communityInfo" class="space-y-6">
                
                <!-- Dashboard Section -->
                <section v-if="activeTab === 'dashboard'" id="dashboard-section" class="space-y-6">
                  <!-- Page Header with Barangay Name -->
                  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10 dark:border-gray-700">
                    <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-6 relative overflow-hidden">
                      <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                      <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                      
                      <div class="relative flex items-center gap-4">
                        <div class="p-3 bg-white/20 backdrop-blur-sm rounded-2xl ring-4 ring-white/20">
                          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div>
                          <h1 class="text-3xl font-bold text-white tracking-tight">{{ communityInfo.name }} Overview</h1>
                          <p class="text-white/90 text-sm font-medium mt-1">Butuan City, Agusan Del Norte 8600</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Statistics Cards -->
                  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-[#004595]/10 dark:border-gray-700">
                    <div class="bg-linear-to-r from-[#002147] to-[#004595] px-6 py-4 relative overflow-hidden">
                      <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
                      <div class="relative flex items-center justify-between">
                        <div class="flex items-center gap-3">
                          <div class="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                            </svg>
                          </div>
                          <div>
                            <h2 class="text-xl font-bold text-white">Community Statistics</h2>
                            <p class="text-xs text-white/80 font-medium">Quick overview of barangay data</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="p-6 bg-linear-to-br from-[#f3f1ee]/20 to-white dark:from-gray-900/20 dark:to-gray-800">
                      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- Officers Card -->
                        <div class="group cursor-pointer bg-white dark:bg-gray-700 rounded-xl p-6 border-2 border-[#004595]/10 dark:border-gray-600 hover:border-[#002147]/40 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-[#002147]/10 hover:-translate-y-1 relative overflow-hidden">
                          <div class="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#002147]/5 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                          
                          <div class="relative">
                            <div class="flex items-center justify-between mb-4">
                              <div class="p-3 bg-linear-to-br from-[#002147] via-[#00397a] to-[#004595] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                                </svg>
                              </div>
                              <div class="text-right">
                                <span class="text-4xl font-bold bg-linear-to-br from-[#002147] to-[#004595] bg-clip-text text-transparent">{{ totalOfficers }}</span>
                              </div>
                            </div>
                            <h3 class="text-sm font-bold text-[#002147] dark:text-white uppercase tracking-wider mb-1">Barangay Officers</h3>
                            <p class="text-xs text-[#00397a] dark:text-gray-400 font-medium">Community personnel & leaders</p>
                            
                            <div class="mt-4 pt-3 border-t border-[#004595]/10 dark:border-gray-600">
                              <div class="flex items-center justify-between text-xs">
                                <span class="text-[#00397a] dark:text-gray-400 font-semibold">View Details</span>
                                <svg class="w-4 h-4 text-[#004595] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- Landmarks Card -->
                        <div class="group cursor-pointer bg-white dark:bg-gray-700 rounded-xl p-6 border-2 border-[#00397a]/10 dark:border-gray-600 hover:border-[#00397a]/40 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-[#00397a]/10 hover:-translate-y-1 relative overflow-hidden">
                          <div class="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#00397a]/5 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                          
                          <div class="relative">
                            <div class="flex items-center justify-between mb-4">
                              <div class="p-3 bg-linear-to-br from-[#00397a] via-[#004595] to-[#002147] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                              <div class="text-right">
                                <span class="text-4xl font-bold bg-linear-to-br from-[#00397a] to-[#004595] bg-clip-text text-transparent">{{ totalLandmarks }}</span>
                              </div>
                            </div>
                            <h3 class="text-sm font-bold text-[#002147] dark:text-white uppercase tracking-wider mb-1">Community Landmarks</h3>
                            <p class="text-xs text-[#00397a] dark:text-gray-400 font-medium">Notable locations & places</p>
                            
                            <div class="mt-4 pt-3 border-t border-[#00397a]/10 dark:border-gray-600">
                              <div class="flex items-center justify-between text-xs">
                                <span class="text-[#00397a] dark:text-gray-400 font-semibold">Explore Map</span>
                                <svg class="w-4 h-4 text-[#00397a] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>

                        <!-- History Card -->
                        <div class="group cursor-pointer bg-white dark:bg-gray-700 rounded-xl p-6 border-2 border-[#004595]/10 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-[#004595]/10 hover:-translate-y-1 relative overflow-hidden">
                          <div class="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#004595]/5 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                          
                          <div class="relative">
                            <div class="flex items-center justify-between mb-4">
                              <div class="p-3 bg-linear-to-br from-[#004595] via-[#00397a] to-[#002147] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                              <div class="text-right">
                                <span class="text-4xl font-bold bg-linear-to-br from-[#004595] to-[#002147] bg-clip-text text-transparent">{{ totalHistory }}</span>
                              </div>
                            </div>
                            <h3 class="text-sm font-bold text-[#002147] dark:text-white uppercase tracking-wider mb-1">Historical Records</h3>
                            <p class="text-xs text-[#00397a] dark:text-gray-400 font-medium">Heritage & cultural data</p>
                            
                            <div class="mt-4 pt-3 border-t border-[#004595]/10 dark:border-gray-600">
                              <div class="flex items-center justify-between text-xs">
                                <span class="text-[#00397a] dark:text-gray-400 font-semibold">Read More</span>
                                <svg class="w-4 h-4 text-[#004595] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Captain Information Card -->
                  <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10 dark:border-gray-700 hover:shadow-2xl hover:shadow-[#004595]/10 transition-all duration-300">
                    <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-5 relative overflow-hidden">
                      <div class="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
                      <div class="flex items-center justify-between gap-3 relative">
                        <div class="flex items-center gap-3">
                          <div class="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                            </svg>
                          </div>
                          <h2 class="text-xl font-bold text-white tracking-wide">Barangay Captain</h2>
                        </div>
                        
                        <!-- Edit Button -->
                        <button
                          v-if="!isEditing"
                          @click="startEdit"
                          class="group flex items-center gap-2 px-4 py-2 bg-white text-[#002147] rounded-xl hover:bg-[#f3f1ee] transition-all duration-300 font-bold text-sm shadow-lg hover:scale-105"
                        >
                          <svg class="w-4 h-4 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                          </svg>
                          Edit
                        </button>
                        
                        <!-- Save/Cancel Buttons -->
                        <div v-else class="flex items-center gap-2">
                          <button
                            @click="saveEdit"
                            :disabled="saving"
                            class="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-110"
                            title="Save Changes"
                          >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                            </svg>
                          </button>
                          <button
                            @click="cancelEdit"
                            :disabled="saving"
                            class="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:scale-110"
                            title="Cancel"
                          >
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div class="p-6 bg-linear-to-br from-white to-[#f3f1ee]/30">
                      <!-- Profile Picture Section -->
                      <div class="flex justify-center mb-6">
                        <div class="relative group">
                          <div class="w-32 h-32 rounded-2xl overflow-hidden border-4 border-[#004595]/20 shadow-lg relative">
                            <img 
                              v-if="captainInfo.profileImage" 
                              :src="captainInfo.profileImage" 
                              alt="Captain Profile"
                              class="w-full h-full object-cover"
                            />
                            <div v-else class="w-full h-full bg-linear-to-br from-[#002147] to-[#004595] flex items-center justify-center">
                              <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                              </svg>
                            </div>
                          </div>
                          
                          <!-- Upload Button Overlay -->
                          <button
                            v-if="isEditing"
                            @click="$refs.fileInput.click()"
                            class="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                          >
                            <div class="text-center">
                              <svg class="w-8 h-8 text-white mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.413V13H5.5z"/>
                              </svg>
                              <span class="text-white text-xs font-bold">Upload Photo</span>
                            </div>
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

                      <!-- Captain Information Grid -->
                      <div v-if="!isEditing" class="grid md:grid-cols-2 gap-4">
                        <div class="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md hover:shadow-[#004595]/10 transition-all border border-[#004595]/10 dark:border-gray-600">
                          <div class="p-2 bg-linear-to-br from-[#002147] to-[#004595] rounded-lg">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <p class="text-xs text-[#00397a] dark:text-gray-400 font-bold uppercase tracking-wide">Name</p>
                            <p class="font-semibold text-[#002147] dark:text-white">{{ captainInfo.name || 'Not available' }}</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md hover:shadow-[#004595]/10 transition-all border border-[#004595]/10 dark:border-gray-600">
                          <div class="p-2 bg-linear-to-br from-[#00397a] to-[#004595] rounded-lg">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                            </svg>
                          </div>
                          <div>
                            <p class="text-xs text-[#00397a] dark:text-gray-400 font-bold uppercase tracking-wide">Phone</p>
                            <p class="font-semibold text-[#002147] dark:text-white">{{ captainInfo.phone || 'Not available' }}</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md hover:shadow-[#004595]/10 transition-all border border-[#004595]/10 dark:border-gray-600">
                          <div class="p-2 bg-linear-to-br from-[#004595] to-[#00397a] rounded-lg">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                          </div>
                          <div>
                            <p class="text-xs text-[#00397a] dark:text-gray-400 font-bold uppercase tracking-wide">Email</p>
                            <p class="font-semibold text-[#002147] dark:text-white text-sm break-all">{{ captainInfo.email || 'Not available' }}</p>
                          </div>
                        </div>
                        <div class="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-xl shadow-sm hover:shadow-md hover:shadow-[#004595]/10 transition-all border border-[#004595]/10 dark:border-gray-600">
                          <div class="p-2 bg-linear-to-br from-[#002147] to-[#00397a] rounded-lg">
                            <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <p class="text-xs text-[#00397a] dark:text-gray-400 font-bold uppercase tracking-wide">Office Hours</p>
                            <p class="font-semibold text-[#002147] dark:text-white">{{ captainInfo.officeHours || 'Not available' }}</p>
                          </div>
                        </div>
                      </div>

                      <!-- Edit Form -->
                      <div v-else class="space-y-4">
                        <div>
                          <label class="block text-sm font-bold text-[#002147] dark:text-white mb-2">Full Name</label>
                          <input
                            v-model="editForm.name"
                            type="text"
                            class="w-full px-4 py-3 border-2 border-[#004595]/20 rounded-xl focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all text-sm font-semibold text-[#002147]"
                            placeholder="Enter full name"
                          />
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-4">
                          <div>
                            <label class="block text-sm font-bold text-[#002147] mb-2">Phone Number</label>
                            <input
                              v-model="editForm.phone"
                              type="text"
                              class="w-full px-4 py-3 border-2 border-[#004595]/20 rounded-xl focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all text-sm font-semibold text-[#002147]"
                              placeholder="Enter phone number"
                            />
                          </div>
                          
                          <div>
                            <label class="block text-sm font-bold text-[#002147] mb-2">Email Address</label>
                            <input
                              v-model="editForm.email"
                              type="email"
                              class="w-full px-4 py-3 border-2 border-[#004595]/20 rounded-xl focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all text-sm font-semibold text-[#002147]"
                              placeholder="Enter email address"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label class="block text-sm font-bold text-[#002147] mb-2">Office Hours</label>
                          <input
                            v-model="editForm.officeHours"
                            type="text"
                            class="w-full px-4 py-3 border-2 border-[#004595]/20 rounded-xl focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all text-sm font-semibold text-[#002147]"
                            placeholder="e.g., Mon-Fri 8:00 AM - 5:00 PM"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

          <!-- Header Banner -->
          <div
            v-if="activeTab === 'overview'"
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
          <div v-if="activeTab === 'overview'" class="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-3xl transition-all duration-300">
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
                      class="w-50 h-50 bg-linear-to-br from-[#004595] to-[#00397a] rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-[#004595]/20 dark:ring-blue-400/20 overflow-hidden"
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
                      <h3 class="text-2xl font-bold text-[#002147] dark:text-white">
                        {{ loadingCaptain ? 'Loading...' : (captainInfo.name || 'No name available') }}
                      </h3>
                    </div>
                    <div v-else>
                      <input
                        v-model="editForm.name"
                        type="text"
                        placeholder="Captain Full Name"
                        class="text-2xl font-bold text-[#002147] dark:text-white dark:bg-gray-700 border-2 border-[#004595] dark:border-blue-400 rounded-lg px-3 py-1 w-full focus:outline-none focus:ring-2 focus:ring-[#004595] dark:focus:ring-blue-400"
                      />
                    </div>
                    <p class="text-sm text-gray-600 dark:text-gray-300 font-medium mt-1">Barangay Captain</p>
                  </div>

                  <div class="grid md:grid-cols-2 gap-4">
                    <!-- Contact Info -->
                    <div class="space-y-3">
                      <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] dark:bg-gray-700 rounded-lg">
                        <div class="p-2 bg-[#004595] rounded-lg">
                          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                            />
                          </svg>
                        </div>
                        <div class="flex-1">
                          <p class="text-xs text-gray-600 dark:text-gray-300 font-medium">Phone</p>
                          <p v-if="!isEditing" class="text-sm font-bold text-[#002147] dark:text-white">{{ captainInfo.phone || 'No phone available' }}</p>
                          <input
                            v-else
                            v-model="editForm.phone"
                            type="text"
                            placeholder="Phone Number"
                            class="text-sm font-bold text-[#002147] dark:text-white dark:bg-gray-600 border-2 border-[#004595] dark:border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-[#004595] dark:focus:ring-blue-400"
                          />
                        </div>
                      </div>

                      <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] dark:bg-gray-700 rounded-lg">
                        <div class="p-2 bg-[#004595] rounded-lg">
                          <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                            />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <div class="flex-1">
                          <p class="text-xs text-gray-600 dark:text-gray-300 font-medium">Email</p>
                          <p v-if="!isEditing" class="text-sm font-bold text-[#002147] dark:text-white">
                            {{ captainInfo.email || 'No email available' }}
                          </p>
                          <input
                            v-else
                            v-model="editForm.email"
                            type="email"
                            placeholder="Email Address"
                            class="text-sm font-bold text-[#002147] dark:text-white dark:bg-gray-600 border-2 border-[#004595] dark:border-blue-400 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-[#004595] dark:focus:ring-blue-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] dark:bg-gray-700 rounded-lg">
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
                          <p class="text-xs text-gray-600 dark:text-gray-300 font-medium">Office Hours</p>
                          <p class="text-sm font-bold text-[#002147] dark:text-white">{{ captainInfo.officeHours }}</p>
                        </div>
                      </div>

                      <div class="flex items-center gap-3 p-3 bg-[#f3f1ee] dark:bg-gray-700 rounded-lg">
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
                          <p class="text-xs text-gray-600 dark:text-gray-300 font-medium">Barangay Hall</p>
                          <p class="text-sm font-bold text-[#002147] dark:text-white">
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
          <div v-if="activeTab === 'officers'" class="space-y-6">
            <!-- Page Header with Stats -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10 dark:border-gray-700">
              <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                
                <div class="relative flex items-center justify-between flex-wrap gap-4">
                  <div class="flex items-center gap-4">
                    <div class="p-3 bg-white/20 backdrop-blur-sm rounded-2xl ring-4 ring-white/20">
                      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-3xl font-bold text-white tracking-tight">Barangay Personnel</h2>
                      <p class="text-white/90 text-sm font-medium mt-1">Community Officers & Leaders Directory</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center gap-3">
                    <button
                      @click="openPositionModal"
                      class="group flex items-center gap-2 px-5 py-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl hover:bg-white/30 transition-all duration-300 font-bold text-sm shadow-lg hover:scale-105"
                    >
                      <svg class="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                      </svg>
                      Create Position
                    </button>
                    <button
                      @click="addPersonnel"
                      class="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-700 text-[#002147] dark:text-white rounded-xl hover:bg-[#f3f1ee] dark:hover:bg-gray-600 transition-all duration-300 font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <svg class="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                      </svg>
                      Add Officer
                    </button>
                  </div>
                </div>
                
                <!-- Stats Bar -->
                <div class="relative mt-6 grid grid-cols-2 gap-4">
                  <div class="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-white/70 text-xs font-semibold uppercase tracking-wide">Total Officers</p>
                        <p class="text-white text-2xl font-bold mt-1">{{ sortedOfficers.length }}</p>
                      </div>
                      <div class="p-2 bg-white/20 rounded-lg">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="text-white/70 text-xs font-semibold uppercase tracking-wide">Positions</p>
                        <p class="text-white text-2xl font-bold mt-1">{{ uniquePositions.length }}</p>
                      </div>
                      <div class="p-2 bg-white/20 rounded-lg">
                        <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                          <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Empty State -->
            <div v-if="allPersonnel.length === 0" class="bg-linear-to-br from-white to-[#f3f1ee]/30 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-16 text-center border border-[#004595]/10 dark:border-gray-700">
              <div class="inline-block p-8 bg-linear-to-br from-[#004595]/10 to-[#00397a]/5 dark:from-blue-500/10 dark:to-transparent rounded-3xl mb-6 relative">
                <div class="absolute inset-0 bg-linear-to-br from-[#004595]/20 to-transparent rounded-3xl blur-xl"></div>
                <svg class="w-20 h-20 text-[#004595]/40 dark:text-blue-400/40 relative" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-[#002147] dark:text-white mb-3">No Personnel Records Found</h3>
              <p class="text-[#00397a] dark:text-gray-400 font-medium mb-6">Start building your barangay team directory</p>
              <button
                @click="addPersonnel"
                class="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#002147] to-[#004595] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                </svg>
                Add First Personnel
              </button>
            </div>

            <!-- Personnel Grid -->
            <div v-else class="space-y-6">
              <!-- Position Buttons Grid -->
              <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-[#004595]/10 dark:border-gray-700">
                <div class="bg-linear-to-r from-[#002147] to-[#004595] px-6 py-4">
                  <h3 class="text-xl font-bold text-white flex items-center gap-2">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                    </svg>
                    Officer Positions
                  </h3>
                  <p class="text-xs text-white/80 font-medium mt-1">Click on a position to view and manage officers</p>
                </div>
                
                <div class="p-6 bg-linear-to-br from-[#f3f1ee]/20 to-white dark:from-gray-900/20 dark:to-gray-800">
                  <div v-if="uniquePositions.length === 0" class="text-center py-12">
                    <div class="inline-block p-4 bg-[#004595]/5 dark:bg-blue-500/10 rounded-2xl mb-3">
                      <svg class="w-12 h-12 text-[#004595]/30 dark:text-blue-400/40" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-[#00397a] dark:text-gray-400 font-semibold mb-4">No positions created yet</p>
                    <button
                      @click="openPositionModal"
                      class="inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-[#002147] to-[#004595] text-white rounded-xl hover:shadow-lg transition-all duration-300 font-semibold text-sm"
                    >
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                      </svg>
                      Create First Position
                    </button>
                  </div>
                  
                  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div
                      v-for="position in uniquePositions"
                      :key="position"
                      class="group bg-white dark:bg-gray-700 rounded-xl p-6 border-2 border-[#004595]/10 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500 transition-all duration-300 hover:shadow-xl hover:shadow-[#004595]/10 hover:-translate-y-1 relative overflow-hidden"
                    >
                      <div class="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#004595]/5 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                      
                      <!-- 3-dot Menu Button -->
                      <div class="absolute top-3 right-3 z-10 position-menu-container">
                        <div class="relative">
                          <button
                            @click.stop="togglePositionMenu(position)"
                            class="p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                            :class="{ 'bg-gray-100 dark:bg-gray-600': activePositionMenu === position }"
                          >
                            <svg class="w-5 h-5 text-[#00397a] dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                            </svg>
                          </button>
                          
                          <!-- Dropdown Menu -->
                          <div
                            v-if="activePositionMenu === position"
                            class="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 py-1 z-20"
                          >
                            <button
                              @click.stop="confirmDeletePosition(position)"
                              class="w-full px-4 py-2.5 text-left text-sm text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                            >
                              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                              </svg>
                              Delete Position
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div class="relative cursor-pointer" @click="openPositionOfficersModal(position)">
                        <div class="flex items-start justify-between mb-4">
                          <div class="p-3 bg-linear-to-br from-[#002147] to-[#004595] rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                            </svg>
                          </div>
                          <div class="px-3 py-1.5 bg-linear-to-br from-[#004595]/10 to-[#00397a]/5 dark:from-blue-500/20 dark:to-transparent rounded-lg border border-[#004595]/20 dark:border-blue-800/30 mr-8">
                            <span class="text-sm font-bold text-[#002147] dark:text-white">{{ officersByPosition[position]?.length || 0 }}</span>
                          </div>
                        </div>
                        
                        <h4 class="font-bold text-[#002147] dark:text-white text-lg mb-2 group-hover:text-[#004595] dark:group-hover:text-blue-400 transition-colors line-clamp-2">{{ position }}</h4>
                        <p class="text-xs text-[#00397a] dark:text-gray-400 font-medium mb-4">
                          {{ (officersByPosition[position]?.length || 0) }} officer{{ (officersByPosition[position]?.length || 0) !== 1 ? 's' : '' }} assigned
                        </p>
                        
                        <div class="flex items-center gap-2 text-xs font-semibold text-[#004595] dark:text-blue-400 group-hover:text-[#002147] dark:group-hover:text-white transition-colors">
                          <span>View Officers</span>
                          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Barangay Information Section -->
          <div v-if="activeTab === 'history'" id="history-section" class="space-y-6">
            <!-- Page Header -->
            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10 dark:border-gray-700">
              <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                
                <div class="relative flex items-center gap-4">
                  <div class="p-3 bg-white/20 backdrop-blur-sm rounded-2xl ring-4 ring-white/20">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h1 class="text-3xl font-bold text-white tracking-tight">Barangay Information</h1>
                    <p class="text-white/90 text-sm font-medium mt-1">History, Patron Saint & Fiesta Celebration</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div v-if="brgyInfo.length > 0" class="space-y-6">
              <article
                v-for="brgy in brgyInfo"
                :key="brgy.araw"
                class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#004595]/10 transition-all duration-500 border-2 border-[#004595]/10 dark:border-gray-700 hover:border-[#004595]/30 dark:hover:border-gray-600"
              >
                <!-- Large Image at Top OR Add Image Button -->
                <div class="relative overflow-hidden bg-linear-to-br from-[#f3f1ee]/30 to-white dark:from-gray-900/30 dark:to-gray-800">
                  <!-- Image Section (when image exists) -->
                  <div v-if="brgy.brgy_images" class="relative w-full">
                    <img 
                      class="w-full h-auto object-contain max-h-150 group-hover:scale-[1.02] transition-transform duration-700" 
                      :src="brgy.brgy_images" 
                      alt="Barangay Image"
                      @error="(e) => console.error('❌ Image failed to load:', brgy.brgy_images, e)"
                      @load="() => console.log('✅ Image loaded successfully:', brgy.brgy_images)"
                    />
                    <div class="absolute inset-0 bg-linear-to-t from-[#002147]/40 via-transparent to-transparent pointer-events-none"></div>
                    
                    <!-- Floating Badge on Image -->
                    <div class="absolute top-6 left-6 z-10">
                      <div class="px-5 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 dark:border-gray-700">
                        <div class="flex items-center gap-3">
                          <svg class="w-5 h-5 text-[#004595] dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                          </svg>
                          <span class="text-[#002147] dark:text-white font-bold text-sm uppercase tracking-wide">{{ brgy.araw }}</span>
                        </div>
                      </div>
                    </div>

                    <!-- Edit Button on Image -->
                    <button
                      @click="startEditHistory(brgy)"
                      class="absolute top-6 right-6 z-10 px-4 py-2.5 bg-white/95 dark:bg-gray-800/95 hover:bg-white dark:hover:bg-gray-700 backdrop-blur-sm rounded-xl shadow-xl border border-white/50 dark:border-gray-700 transition-all duration-300 hover:scale-105 group/btn"
                    >
                      <div class="flex items-center gap-2">
                        <svg class="w-5 h-5 text-[#004595] dark:text-blue-400 group-hover/btn:text-[#002147] dark:group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                        <span class="text-[#002147] dark:text-white font-bold text-sm">Edit</span>
                      </div>
                    </button>
                  </div>

                  <!-- Add Image Section (when no image) -->
                  <div v-else class="relative w-full py-20 px-8">
                    <div class="flex flex-col items-center justify-center text-center space-y-6">
                      <!-- Icon -->
                      <div class="w-32 h-32 rounded-2xl bg-linear-to-br from-[#004595]/10 to-[#00397a]/5 dark:from-blue-500/10 dark:to-transparent flex items-center justify-center">
                        <svg class="w-16 h-16 text-[#004595]/40 dark:text-blue-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                      </div>

                      <!-- Text -->
                      <div>
                        <h3 class="text-xl font-bold text-[#002147] dark:text-white mb-2">No Image Added</h3>
                        <p class="text-sm text-[#00397a] dark:text-gray-400 font-medium">Add a barangay image to showcase your community</p>
                      </div>

                      <!-- Add Image Button -->
                      <button
                        @click="startEditHistory(brgy)"
                        class="px-6 py-3 bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold flex items-center gap-3"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        <span>Add History Image</span>
                      </button>

                      <!-- Badge if day exists -->
                      <div v-if="brgy.araw" class="absolute top-6 left-6">
                        <div class="px-5 py-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-xl shadow-xl border border-[#004595]/20 dark:border-gray-700">
                          <div class="flex items-center gap-3">
                            <svg class="w-5 h-5 text-[#004595] dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                            </svg>
                            <span class="text-[#002147] dark:text-white font-bold text-sm uppercase tracking-wide">{{ brgy.araw }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                  
                <!-- Details Section Below Image -->
                <div class="p-8 bg-linear-to-br from-white to-[#f3f1ee]/20 dark:from-gray-800 dark:to-gray-900/20">
                  <!-- Section Title -->
                  <div class="mb-6 pb-4 border-b-2 border-[#004595]/10 dark:border-gray-700">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="h-1.5 w-1.5 rounded-full bg-[#004595] dark:bg-blue-400"></div>
                      <div class="h-1.5 w-1.5 rounded-full bg-[#00397a] dark:bg-blue-500"></div>
                      <div class="h-1.5 w-1.5 rounded-full bg-[#002147] dark:bg-blue-600"></div>
                    </div>
                    <h2 class="text-2xl font-bold text-[#002147] dark:text-white tracking-tight">Community Details</h2>
                  </div>

                  <!-- Details Grid -->
                  <div class="space-y-5">
                    <!-- Patron Saint -->
                    <div class="group/item relative overflow-hidden rounded-2xl p-5 bg-linear-to-r from-[#004595]/5 via-[#004595]/10 to-transparent dark:from-blue-500/10 dark:via-blue-500/20 dark:to-transparent border-l-4 border-[#004595] dark:border-blue-400 hover:border-[#00397a] dark:hover:border-blue-300 hover:shadow-lg hover:shadow-[#004595]/5 transition-all duration-300">
                      <div class="flex items-start gap-4">
                        <div class="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#002147] to-[#004595] shadow-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div class="flex-1">
                          <p class="text-xs font-bold text-[#00397a] dark:text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                            Patron Saint
                            <span class="h-px flex-1 bg-[#004595]/20 dark:bg-gray-700"></span>
                          </p>
                          <p class="text-xl font-bold text-[#002147] dark:text-white group-hover/item:text-[#004595] dark:group-hover/item:text-blue-400 transition-colors">{{ brgy.patron }}</p>
                        </div>
                      </div>
                    </div>

                    <!-- Fiesta Date -->
                    <div class="group/item relative overflow-hidden rounded-2xl p-5 bg-linear-to-r from-[#00397a]/5 via-[#00397a]/10 to-transparent dark:from-blue-600/10 dark:via-blue-600/20 dark:to-transparent border-l-4 border-[#00397a] dark:border-blue-500 hover:border-[#004595] dark:hover:border-blue-400 hover:shadow-lg hover:shadow-[#00397a]/5 transition-all duration-300">
                      <div class="flex items-start gap-4">
                        <div class="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#00397a] to-[#004595] shadow-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                          </svg>
                        </div>
                        <div class="flex-1">
                          <p class="text-xs font-bold text-[#00397a] dark:text-gray-400 uppercase tracking-wider mb-1.5 flex items-center gap-2">
                            Fiesta Celebration
                            <span class="h-px flex-1 bg-[#00397a]/20 dark:bg-gray-700"></span>
                          </p>
                          <p class="text-xl font-bold text-[#002147] dark:text-white group-hover/item:text-[#00397a] dark:group-hover/item:text-blue-400 transition-colors">{{ brgy.date }}</p>
                        </div>
                      </div>
                    </div>

                    <!-- History -->
                    <div v-if="brgy.brgy_history" class="relative overflow-hidden rounded-2xl p-8 bg-white dark:bg-gray-700 border-2 border-[#004595]/10 dark:border-gray-600 shadow-sm hover:shadow-xl hover:shadow-[#004595]/5 hover:border-[#004595]/30 dark:hover:border-gray-500 transition-all duration-300">
                      <div class="absolute top-0 right-0 w-40 h-40 bg-linear-to-br from-[#004595]/5 to-transparent dark:from-blue-500/10 dark:to-transparent rounded-full -mr-20 -mt-20"></div>
                      
                      <div class="relative">
                        <div class="flex items-center gap-4 mb-6 pb-4 border-b-2 border-[#004595]/20 dark:border-gray-600">
                          <div class="p-3 bg-[#004595]/10 dark:bg-blue-500/20 rounded-xl">
                            <svg class="w-7 h-7 text-[#004595] dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <p class="text-sm font-bold text-[#00397a] dark:text-gray-400 uppercase tracking-wider">Barangay History</p>
                          </div>
                        </div>
                        <p class="text-lg text-[#002147] dark:text-gray-300 leading-loose font-medium whitespace-pre-line">{{ brgy.brgy_history }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <!-- Empty State -->
            <div v-else class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-16 text-center border-2 border-[#004595]/20 dark:border-gray-700">
              <div class="max-w-2xl mx-auto">
                <!-- Icon -->
                <div class="inline-block p-10 bg-linear-to-br from-[#004595]/10 via-[#00397a]/5 to-transparent dark:from-blue-500/10 dark:via-blue-600/5 dark:to-transparent rounded-3xl mb-8 shadow-inner">
                  <svg class="w-24 h-24 text-[#004595]/40 dark:text-blue-400/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>

                <!-- Text Content -->
                <h3 class="text-3xl font-bold text-[#002147] dark:text-white mb-4">No Barangay History Yet</h3>
                <p class="text-lg text-[#00397a] dark:text-gray-400 font-medium mb-3">
                  Share your barangay's story, patron saint, and fiesta celebration details with the community.
                </p>
                <p class="text-sm text-[#00397a]/80 dark:text-gray-500 mb-8">
                  Click the button below to add historical information, images, and cultural details.
                </p>

                <!-- Add History Button -->
                <button
                  @click="addNewHistory"
                  class="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] text-white rounded-xl hover:shadow-2xl hover:shadow-[#004595]/30 hover:scale-105 transition-all duration-300 font-bold text-base"
                >
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                  <span>Add Barangay History</span>
                </button>

                <!-- Features List -->
                <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div class="p-4 bg-[#f3f1ee]/50 rounded-xl">
                    <div class="w-12 h-12 mx-auto mb-3 bg-linear-to-br from-[#004595] to-[#00397a] rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <p class="text-sm font-bold text-[#002147]">Upload Images</p>
                    <p class="text-xs text-[#00397a] mt-1">Add photos of your barangay</p>
                  </div>

                  <div class="p-4 bg-[#f3f1ee]/50 rounded-xl">
                    <div class="w-12 h-12 mx-auto mb-3 bg-linear-to-br from-[#004595] to-[#00397a] rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-sm font-bold text-[#002147]">Patron Saint</p>
                    <p class="text-xs text-[#00397a] mt-1">Share your patron saint</p>
                  </div>

                  <div class="p-4 bg-[#f3f1ee]/50 rounded-xl">
                    <div class="w-12 h-12 mx-auto mb-3 bg-linear-to-br from-[#004595] to-[#00397a] rounded-lg flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <p class="text-sm font-bold text-[#002147]">Fiesta Details</p>
                    <p class="text-xs text-[#00397a] mt-1">Add celebration dates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Community Establishments -->
          <div v-if="activeTab === 'landmarks'" class="space-y-6">
            <!-- Page Header -->
            <div class="bg-white rounded-2xl shadow-xl shadow-[#004595]/5 overflow-hidden border border-[#004595]/10">
              <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-6 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
                
                <div class="relative flex items-center gap-4">
                  <div class="p-3 bg-white/20 backdrop-blur-sm rounded-2xl ring-4 ring-white/20">
                    <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h1 class="text-3xl font-bold text-white tracking-tight">Community Landmarks</h1>
                    <p class="text-white/90 text-sm font-medium mt-1">Schools, Churches, Business Establishments & Government Offices</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Landmarks Grid -->
            <div class="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              <!-- Schools Card -->
              <article
                class="group relative overflow-hidden rounded-2xl border-2 border-[#004595]/10 hover:border-[#004595]/40 bg-white shadow-md hover:shadow-xl hover:shadow-[#004595]/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                role="button"
                tabindex="0"
                @click="goToSchools"
                @keyup.enter="goToSchools"
                @keyup.space="goToSchools"
              >
                <div class="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#004595]/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div class="p-6 relative">
                  <div class="flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-2xl flex items-center justify-center bg-linear-to-br from-[#002147] to-[#004595] shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                      <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-[#002147] mb-2 group-hover:text-[#004595] transition-colors">Schools</h3>
                    <p class="text-sm text-[#00397a] font-semibold px-4 py-1.5 bg-[#004595]/10 rounded-lg mb-4">{{ landmarksCount.schools }} Institutions</p>
                    
                    <div class="w-full pt-3 border-t border-[#004595]/10 flex items-center justify-between gap-2">
                      <button
                        @click.stop="openLandmarkModal('schools')"
                        class="flex-1 flex items-center justify-center gap-1.5 text-[#00397a] font-bold hover:text-[#004595] transition-colors text-xs"
                      >
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                        </svg>
                        <span>Quick View</span>
                      </button>
                      <div class="w-px h-6 bg-[#004595]/20"></div>
                      <div class="flex-1 flex items-center justify-center gap-1.5 text-[#00397a] font-bold text-xs">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                        </svg>
                        <span>Manage</span>
                        <svg class="w-3.5 h-3.5 text-[#004595] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <!-- Churches Card -->
              <article
                class="group relative overflow-hidden rounded-2xl border-2 border-[#00397a]/10 hover:border-[#00397a]/40 bg-white shadow-md hover:shadow-xl hover:shadow-[#00397a]/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                role="button"
                tabindex="0"
                @click="goToChurches"
                @keyup.enter="goToChurches"
                @keyup.space="goToChurches"
              >
                <div class="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#00397a]/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div class="p-6 relative">
                  <div class="flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-2xl flex items-center justify-center bg-linear-to-br from-[#00397a] to-[#004595] shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                      <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-[#002147] mb-2 group-hover:text-[#00397a] transition-colors">Churches</h3>
                    <p class="text-sm text-[#00397a] font-semibold px-4 py-1.5 bg-[#00397a]/10 rounded-lg mb-4">{{ landmarksCount.churches }} Places of Worship</p>
                    
                    <div class="w-full pt-3 border-t border-[#00397a]/10 flex items-center justify-between gap-2">
                      <button
                        @click.stop="openLandmarkModal('churches')"
                        class="flex-1 flex items-center justify-center gap-1.5 text-[#00397a] font-bold hover:text-[#00397a] transition-colors text-xs"
                      >
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                        </svg>
                        <span>Quick View</span>
                      </button>
                      <div class="w-px h-6 bg-[#00397a]/20"></div>
                      <div class="flex-1 flex items-center justify-center gap-1.5 text-[#00397a] font-bold text-xs">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                        </svg>
                        <span>Manage</span>
                        <svg class="w-3.5 h-3.5 text-[#00397a] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <!-- Businesses Card -->
              <article
                class="group relative overflow-hidden rounded-2xl border-2 border-[#002147]/10 hover:border-[#002147]/40 bg-white shadow-md hover:shadow-xl hover:shadow-[#002147]/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                role="button"
                tabindex="0"
                @click="goToEstablishments"
                @keyup.enter="goToEstablishments"
                @keyup.space="goToEstablishments"
              >
                <div class="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-[#002147]/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div class="p-6 relative">
                  <div class="flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-2xl flex items-center justify-center bg-linear-to-br from-[#002147] to-[#00397a] shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                      <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-[#002147] mb-2 group-hover:text-[#00397a] transition-colors">Businesses</h3>
                    <p class="text-sm text-[#00397a] font-semibold px-4 py-1.5 bg-[#002147]/10 rounded-lg mb-4">{{ landmarksCount.establishments }} Establishments</p>
                    
                    <div class="w-full pt-3 border-t border-[#002147]/10 flex items-center justify-between gap-2">
                      <button
                        @click.stop="openLandmarkModal('businesses')"
                        class="flex-1 flex items-center justify-center gap-1.5 text-[#00397a] font-bold hover:text-[#002147] transition-colors text-xs"
                      >
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                        </svg>
                        <span>Quick View</span>
                      </button>
                      <div class="w-px h-6 bg-[#002147]/20"></div>
                      <div class="flex-1 flex items-center justify-center gap-1.5 text-[#00397a] font-bold text-xs">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                        </svg>
                        <span>Manage</span>
                        <svg class="w-3.5 h-3.5 text-[#002147] group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <!-- Government Offices Card -->
              <article
                class="group relative overflow-hidden rounded-2xl border-2 border-green-600/10 hover:border-green-600/40 bg-white shadow-md hover:shadow-xl hover:shadow-green-600/10 transition-all duration-300 cursor-pointer hover:-translate-y-1"
                role="button"
                tabindex="0"
                @click="goToGovtOffices"
                @keyup.enter="goToGovtOffices"
                @keyup.space="goToGovtOffices"
              >
                <div class="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-green-600/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div class="p-6 relative">
                  <div class="flex flex-col items-center text-center">
                    <div class="w-20 h-20 rounded-2xl flex items-center justify-center bg-linear-to-br from-green-700 to-green-600 shadow-lg group-hover:scale-110 transition-transform duration-300 mb-4">
                      <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <h3 class="text-2xl font-bold text-[#002147] mb-2 group-hover:text-green-700 transition-colors">Government Offices</h3>
                    <p class="text-sm text-[#00397a] font-semibold px-4 py-1.5 bg-green-600/10 rounded-lg mb-4">{{ landmarksCount.govtOffices }} Offices</p>
                    
                    <div class="w-full pt-3 border-t border-green-600/10 flex items-center justify-between gap-2">
                      <button
                        @click.stop="openLandmarkModal('govtOffices')"
                        class="flex-1 flex items-center justify-center gap-1.5 text-[#00397a] font-bold hover:text-green-700 transition-colors text-xs"
                      >
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                        </svg>
                        <span>Quick View</span>
                      </button>
                      <div class="w-px h-6 bg-green-600/20"></div>
                      <div class="flex-1 flex items-center justify-center gap-1.5 text-[#00397a] font-bold text-xs">
                        <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                        </svg>
                        <span>Manage</span>
                        <svg class="w-3.5 h-3.5 text-green-600 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            <!-- Info Card -->
            <div class="bg-linear-to-br from-white dark:from-gray-800 to-[#f3f1ee]/30 dark:to-gray-700/30 rounded-xl p-5 border border-[#004595]/10 dark:border-gray-600 shadow-sm">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-[#004595]/10 dark:bg-blue-500/20 rounded-lg">
                  <svg class="w-6 h-6 text-[#004595] dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p class="text-base font-bold text-[#002147] dark:text-white mb-1">Information Note</p>
                  <p class="text-sm text-[#00397a] dark:text-gray-300 font-medium">Click on any category card to view detailed information and location maps. Sample data is shown for demonstration purposes.</p>
                </div>
              </div>
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
        </main>
      </div>

      <!-- Mobile Bottom Navigation -->
      <nav class="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t-2 border-[#004595]/20 dark:border-gray-700 shadow-2xl z-50">
        <div class="flex justify-around items-center h-16 px-2">
          <!-- Dashboard -->
          <button
            @click="setActiveTab('dashboard')"
            :class="[
              'flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 relative',
              activeTab === 'dashboard' ? 'text-[#004595] dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
            ]"
          >
            <div
              v-if="activeTab === 'dashboard'"
              class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#004595] dark:bg-blue-400 rounded-b-full"
            ></div>
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
            </svg>
            <span class="text-xs font-semibold">Dashboard</span>
          </button>

          <!-- Officers -->
          <button
            @click="setActiveTab('officers')"
            :class="[
              'flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 relative',
              activeTab === 'officers' ? 'text-[#004595] dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
            ]"
          >
            <div
              v-if="activeTab === 'officers'"
              class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#004595] dark:bg-blue-400 rounded-b-full"
            ></div>
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <span class="text-xs font-semibold">Officers</span>
          </button>

          <!-- Landmarks -->
          <button
            @click="setActiveTab('landmarks')"
            :class="[
              'flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 relative',
              activeTab === 'landmarks' ? 'text-[#004595] dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
            ]"
          >
            <div
              v-if="activeTab === 'landmarks'"
              class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#004595] dark:bg-blue-400 rounded-b-full"
            ></div>
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs font-semibold">Landmarks</span>
          </button>

          <!-- History -->
          <button
            @click="setActiveTab('history')"
            :class="[
              'flex flex-col items-center justify-center flex-1 h-full transition-all duration-300 relative',
              activeTab === 'history' ? 'text-[#004595] dark:text-blue-400' : 'text-gray-500 dark:text-gray-400'
            ]"
          >
            <div
              v-if="activeTab === 'history'"
              class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#004595] dark:bg-blue-400 rounded-b-full"
            ></div>
            <svg class="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
            </svg>
            <span class="text-xs font-semibold">History</span>
          </button>
        </div>
      </nav>

      <!-- Add Personnel Modal -->
      <div v-if="showModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" style="z-index: 100000;" @click.self="closeModal">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden transform transition-all">
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-[#002147] to-[#00397a] px-4 py-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <div class="p-1.5 bg-white/20 rounded-lg">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-base font-bold text-white">{{ isEditMode ? 'Edit Officer' : 'Add Officer' }}</h3>
              </div>
              <button
                type="button"
                @click="closeModal"
                class="p-1 hover:bg-white/20 rounded-lg transition-all"
              >
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Modal Body -->
          <div class="overflow-y-auto max-h-[calc(90vh-60px)]">
            <form @submit.prevent="submitPersonnel" class="p-4">
              <div class="space-y-3">
                <!-- Photo Upload Section -->
                <div class="flex justify-center mb-2">
                  <div class="relative group">
                    <div class="w-20 h-20 rounded-xl overflow-hidden border-2 border-[#004595]/20 shadow-md">
                      <img 
                        v-if="personnelForm.photo_url" 
                        :src="personnelForm.photo_url" 
                        alt="Officer Photo"
                        class="w-full h-full object-cover"
                      />
                      <div v-else class="w-full h-full bg-linear-to-br from-[#002147] to-[#004595] flex items-center justify-center">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                    
                    <!-- Upload Button Overlay -->
                    <button
                      type="button"
                      @click="personnelPhotoInput?.click()"
                      :disabled="uploadingPhoto"
                      class="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-50"
                    >
                      <div class="text-center">
                        <svg v-if="!uploadingPhoto" class="w-5 h-5 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.413V13H5.5z"/>
                        </svg>
                        <div v-else class="w-5 h-5 mx-auto">
                          <svg class="animate-spin text-white" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </div>
                        <p class="text-[8px] text-white mt-1">Upload</p>
                      </div>
                    </button>
                    <input
                      ref="personnelPhotoInput"
                      type="file"
                      accept="image/*"
                      @change="handlePersonnelPhotoUpload"
                      class="hidden"
                    />
                  </div>
                </div>
                <p class="text-[9px] text-[#00397a] dark:text-gray-400 text-center -mt-1 mb-2">Click photo to upload (Max 5MB)</p>

                <!-- Form Fields in 2 Columns -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-[#002147] dark:text-white mb-1">Full Name</label>
                    <input
                      v-model="personnelForm.fullname"
                      type="text"
                      required
                      class="w-full px-3 py-2 border-2 border-[#f3f1ee] dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-[#004595] dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all text-sm"
                      placeholder="Enter full name"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-[#002147] dark:text-white mb-1">Phone Number</label>
                    <input
                      v-model="personnelForm.phone_number"
                      type="text"
                      required
                      class="w-full px-3 py-2 border-2 border-[#f3f1ee] dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-[#004595] dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all text-sm"
                      placeholder="Enter phone number"
                    />
                  </div>

                  <div>
                    <label class="block text-xs font-semibold text-[#002147] dark:text-white mb-1">Purok <span class="text-gray-400 text-[10px]">(Optional)</span></label>
                    <input
                      v-model="personnelForm.purok_number"
                      type="text"
                      class="w-full px-3 py-2 border-2 border-[#f3f1ee] dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-[#004595] dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all text-sm"
                      placeholder="e.g., 1, 2, 3A"
                    />
                  </div>

                  <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-[#002147] dark:text-white mb-1">Position / Role</label>
                    <select
                      v-model="personnelForm.position"
                      required
                      class="w-full px-3 py-2 border-2 border-[#f3f1ee] dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-[#004595] dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all text-sm bg-white"
                    >
                      <option value="" disabled>Select a position</option>
                      <option v-if="positions.length === 0" value="" disabled>No positions available - Create one first</option>
                      <option v-for="pos in positions" :key="pos" :value="pos">{{ pos }}</option>
                    </select>
                    <p class="text-[9px] text-[#00397a] dark:text-gray-400 mt-1 flex items-center gap-1">
                      <svg class="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                      </svg>
                      Need a new position? Click "Create Position" button first
                    </p>
                  </div>

                  <!-- Description Field (Optional) -->
                  <div class="md:col-span-2">
                    <label class="block text-xs font-semibold text-[#002147] dark:text-white mb-1">Description <span class="text-gray-400 text-[10px]">(Optional)</span></label>
                    <textarea
                      v-model="personnelForm.description"
                      rows="2"
                      class="w-full px-3 py-2 border-2 border-[#f3f1ee] dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:border-[#004595] dark:focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all text-sm resize-none"
                      placeholder="Brief description or responsibilities..."
                    ></textarea>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-2 pt-2">
                  <button
                    type="button"
                    @click="closeModal"
                    class="flex-1 px-4 py-2 border-2 border-[#f3f1ee] dark:border-gray-600 text-[#002147] dark:text-white rounded-lg hover:bg-[#f3f1ee] dark:hover:bg-gray-700 transition-all font-semibold text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    :disabled="submitting || uploadingPhoto"
                    class="flex-1 px-4 py-2 bg-linear-to-r from-[#002147] to-[#00397a] text-white rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    {{ submitting ? (isEditMode ? 'Updating...' : 'Adding...') : (isEditMode ? 'Update' : 'Add') }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- Create Position Modal -->
      <div v-if="showPositionModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closePositionModal">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-[#002147] to-[#00397a] px-6 py-5">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-white/20 rounded-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Create New Position</h3>
            </div>
          </div>
          
          <!-- Modal Body -->
          <form @submit.prevent="submitPosition" class="p-6 space-y-5">
            <div>
              <label class="block text-sm font-bold text-[#002147] dark:text-white mb-2">Position Name</label>
              <input
                v-model="positionForm.name"
                type="text"
                required
                class="w-full px-4 py-3 border-2 border-[#f3f1ee] dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-[#004595] dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all text-sm"
                placeholder="e.g., SK Chairman, Secretary, Treasurer"
              />
              <p class="text-xs text-[#00397a] dark:text-gray-400 mt-2 flex items-start gap-1">
                <svg class="w-3 h-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                </svg>
                <span>After creating the position, you can add officers to this role</span>
              </p>
            </div>

            <!-- Existing Positions -->
            <div v-if="positions.length > 0">
              <label class="block text-sm font-bold text-[#002147] dark:text-white mb-2">Existing Positions</label>
              <div class="max-h-40 overflow-y-auto space-y-1 p-3 bg-[#f3f1ee]/50 dark:bg-gray-700/50 rounded-xl">
                <div
                  v-for="pos in positions"
                  :key="pos"
                  class="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-700 rounded-lg text-sm"
                >
                  <svg class="w-4 h-4 text-[#004595] dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="font-medium text-[#002147] dark:text-white">{{ pos }}</span>
                </div>
              </div>
            </div>

            <div class="flex gap-3 pt-2">
              <button
                type="button"
                @click="closePositionModal"
                class="flex-1 px-4 py-3 border-2 border-[#f3f1ee] dark:border-gray-600 text-[#002147] dark:text-white rounded-xl hover:bg-[#f3f1ee] dark:hover:bg-gray-700 transition-all font-semibold text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                :disabled="submittingPosition"
                class="flex-1 px-4 py-3 bg-linear-to-r from-[#002147] to-[#00397a] text-white rounded-xl hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {{ submittingPosition ? 'Creating...' : 'Create Position' }}
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Personnel Details Modal -->
      <div v-if="showDetailsModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" style="z-index: 99999;" @click.self="closeDetailsModal">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-5 py-4 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div class="relative flex items-center gap-3">
              <div class="w-14 h-14 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/30 shrink-0">
                <img 
                  v-if="selectedPersonnel?.photo_url" 
                  :src="selectedPersonnel.photo_url" 
                  :alt="selectedPersonnel.name"
                  class="w-full h-full object-cover"
                />
                <div v-else class="w-full h-full flex items-center justify-center bg-white/20 backdrop-blur-sm">
                  <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <h3 class="text-lg font-bold text-white truncate">{{ selectedPersonnel?.name }}</h3>
                <p class="text-white/90 text-xs font-semibold truncate">{{ selectedPersonnel?.position }}</p>
              </div>
              <button
                @click="closeDetailsModal"
                class="p-1.5 hover:bg-white/20 rounded-lg transition-all shrink-0"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Modal Body -->
          <div class="p-4 bg-linear-to-br from-[#f3f1ee]/30 dark:from-gray-900/30 to-white dark:to-gray-800 space-y-3">
            <!-- Personal Information -->
            <div class="bg-white dark:bg-gray-700 rounded-xl p-4 shadow-sm border border-[#004595]/10 dark:border-gray-600">
              <h4 class="text-xs font-bold text-[#002147] dark:text-white uppercase tracking-wide mb-3 flex items-center gap-2">
                <svg class="w-4 h-4 text-[#004595] dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
                Personal Information
              </h4>
              
              <div class="space-y-2.5">
                <!-- Full Name -->
                <div class="p-2.5 bg-[#f3f1ee]/50 dark:bg-gray-600/50 rounded-lg">
                  <p class="text-[9px] text-[#00397a] dark:text-gray-300 font-bold uppercase tracking-wide mb-0.5">Full Name</p>
                  <p class="text-[#002147] dark:text-white font-semibold text-sm">{{ selectedPersonnel?.name }}</p>
                </div>

                <!-- Phone Number -->
                <div class="flex items-center gap-2.5 p-2.5 bg-[#f3f1ee]/50 dark:bg-gray-600/50 rounded-lg">
                  <div class="p-1.5 bg-linear-to-br from-[#002147] to-[#004595] rounded-lg shrink-0">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-[9px] text-[#00397a] dark:text-gray-300 font-bold uppercase tracking-wide">Phone Number</p>
                    <p class="text-[#002147] dark:text-white font-semibold text-sm truncate">{{ selectedPersonnel?.phone }}</p>
                  </div>
                </div>

                <!-- Purok -->
                <div class="p-2.5 bg-[#f3f1ee]/50 dark:bg-gray-600/50 rounded-lg">
                  <p class="text-[9px] text-[#00397a] dark:text-gray-300 font-bold uppercase tracking-wide mb-0.5">Purok <span class="text-gray-400">(Optional)</span></p>
                  <p class="text-[#002147] dark:text-white font-semibold text-sm">{{ selectedPersonnel?.purok_number || 'Not specified' }}</p>
                </div>

                <!-- Position / Role -->
                <div class="flex items-center gap-2.5 p-2.5 bg-[#f3f1ee]/50 dark:bg-gray-600/50 rounded-lg">
                  <div class="p-1.5 bg-linear-to-br from-[#00397a] to-[#004595] rounded-lg shrink-0">
                    <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-[9px] text-[#00397a] dark:text-gray-300 font-bold uppercase tracking-wide">Position / Role</p>
                    <p class="text-[#002147] dark:text-white font-semibold text-sm truncate">{{ selectedPersonnel?.position }}</p>
                  </div>
                </div>

                <!-- Description -->
                <div v-if="selectedPersonnel?.description" class="p-2.5 bg-[#f3f1ee]/50 dark:bg-gray-600/50 rounded-lg">
                  <p class="text-[9px] text-[#00397a] dark:text-gray-300 font-bold uppercase tracking-wide mb-0.5">Description <span class="text-gray-400">(Optional)</span></p>
                  <p class="text-[#002147] dark:text-white font-medium text-xs leading-relaxed">{{ selectedPersonnel?.description }}</p>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex gap-2.5">
              <button
                @click="editFromDetails"
                class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-[#004595] to-[#00397a] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-sm"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                </svg>
                Edit
              </button>
              <button
                @click="deleteFromDetails"
                class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-sm"
              >
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Position Officers Modal -->
      <div v-if="showPositionOfficersModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closePositionOfficersModal">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl overflow-hidden transform transition-all max-h-[90vh] flex flex-col">
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-5 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div class="relative flex items-center justify-between gap-4">
              <div class="flex items-center gap-3 flex-1">
                <div class="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-white">{{ selectedPosition }}</h3>
                  <p class="text-xs text-white/80 font-medium mt-1">{{ officersForSelectedPosition.length }} officer{{ officersForSelectedPosition.length !== 1 ? 's' : '' }} in this position</p>
                </div>
              </div>
              <div class="flex items-center gap-3">
                <button
                  @click="addOfficerToPosition"
                  class="flex items-center gap-2 px-4 py-2.5 bg-white text-[#002147] rounded-xl hover:bg-[#f3f1ee] transition-all duration-300 font-bold text-sm shadow-lg whitespace-nowrap"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                  </svg>
                  Add Officer
                </button>
                <button
                  @click="closePositionOfficersModal"
                  class="p-2 hover:bg-white/20 rounded-lg transition-all"
                >
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          <!-- Modal Body -->
          <div class="flex-1 overflow-y-auto p-6 bg-linear-to-br from-[#f3f1ee]/30 dark:from-gray-900/30 to-white dark:to-gray-800">
            <!-- Search and Sort Controls -->
            <div class="mb-6 space-y-4">
              <!-- Search Bar -->
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg class="w-5 h-5 text-[#00397a] dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
                <input
                  v-model="officerSearchQuery"
                  type="text"
                  placeholder="Search by name, phone, purok, or description..."
                  class="w-full pl-12 pr-4 py-3 border-2 border-[#004595]/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-[#004595] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all outline-none font-medium placeholder:text-[#00397a]/50 dark:placeholder:text-gray-400"
                />
                <!-- Clear Search Button -->
                <button
                  v-if="officerSearchQuery"
                  @click="officerSearchQuery = ''"
                  class="absolute inset-y-0 right-0 pr-4 flex items-center text-[#00397a] dark:text-gray-400 hover:text-[#002147] dark:hover:text-white transition-colors"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>

              <!-- Sort Options -->
              <div class="flex items-center gap-3">
                <label class="text-sm font-bold text-[#002147] dark:text-white flex items-center gap-2">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"/>
                  </svg>
                  Sort by:
                </label>
                <div class="flex gap-2">
                  <button
                    @click="officerSortBy = 'firstname'"
                    :class="[
                      'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300',
                      officerSortBy === 'firstname'
                        ? 'bg-linear-to-r from-[#002147] to-[#004595] text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-[#002147] dark:text-white border-2 border-[#004595]/20 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500'
                    ]"
                  >
                    First Name
                  </button>
                  <button
                    @click="officerSortBy = 'lastname'"
                    :class="[
                      'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300',
                      officerSortBy === 'lastname'
                        ? 'bg-linear-to-r from-[#002147] to-[#004595] text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-[#002147] dark:text-white border-2 border-[#004595]/20 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500'
                    ]"
                  >
                    Last Name
                  </button>
                  <button
                    @click="officerSortBy = 'alphabetical'"
                    :class="[
                      'px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300',
                      officerSortBy === 'alphabetical'
                        ? 'bg-linear-to-r from-[#002147] to-[#004595] text-white shadow-lg'
                        : 'bg-white dark:bg-gray-700 text-[#002147] dark:text-white border-2 border-[#004595]/20 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-gray-500'
                    ]"
                  >
                    A-Z
                  </button>
                </div>
              </div>

              <!-- Results Count -->
              <div v-if="officerSearchQuery" class="text-sm text-[#00397a] dark:text-gray-300 font-semibold">
                Found {{ officersForSelectedPosition.length }} officer{{ officersForSelectedPosition.length !== 1 ? 's' : '' }}
              </div>
            </div>

            <div v-if="officersForSelectedPosition.length === 0" class="text-center py-16">
              <div class="inline-block p-8 bg-linear-to-br from-[#004595]/10 to-[#00397a]/5 dark:from-gray-700/50 dark:to-gray-600/30 rounded-3xl mb-6 relative">
                <div class="absolute inset-0 bg-linear-to-br from-[#004595]/20 to-transparent rounded-3xl blur-xl"></div>
                <svg class="w-16 h-16 text-[#004595]/40 dark:text-gray-500 relative" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#002147] dark:text-white mb-3">
                {{ officerSearchQuery ? 'No Officers Found' : 'No Officers Yet' }}
              </h3>
              <p class="text-[#00397a] dark:text-gray-400 font-medium mb-6">
                {{ officerSearchQuery ? 'Try adjusting your search criteria' : 'Add officers to this position to get started' }}
              </p>
              <button
                v-if="!officerSearchQuery"
                @click="addOfficerToPosition"
                class="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#002147] to-[#004595] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
                </svg>
                Add First Officer
              </button>
              <button
                v-else
                @click="officerSearchQuery = ''"
                class="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-[#002147] to-[#004595] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                Clear Search
              </button>
            </div>
            
            <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div
                v-for="person in officersForSelectedPosition"
                :key="person.id"
                @click="viewPersonnelDetails(person)"
                class="group cursor-pointer bg-white dark:bg-gray-700 rounded-xl p-5 border-2 border-[#004595]/10 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-[#004595]/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1 relative overflow-hidden"
              >
                <div class="absolute top-0 right-0 w-24 h-24 bg-linear-to-br from-[#004595]/5 dark:from-blue-400/5 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-500"></div>
                
                <div class="relative flex flex-col items-center text-center">
                  <!-- Photo or Avatar -->
                  <div class="w-20 h-20 rounded-2xl overflow-hidden mb-4 shadow-lg ring-2 ring-[#004595]/20 dark:ring-gray-600 group-hover:ring-4 group-hover:ring-[#004595]/40 dark:group-hover:ring-blue-400/40 transition-all">
                    <img 
                      v-if="person.photo_url" 
                      :src="person.photo_url" 
                      :alt="person.name"
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div v-else class="w-full h-full flex items-center justify-center bg-linear-to-br from-[#002147] to-[#004595] group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  
                  <h4 class="font-bold text-[#002147] dark:text-white text-base mb-2 group-hover:text-[#004595] dark:group-hover:text-blue-400 transition-colors">{{ person.name }}</h4>
                  
                  <!-- Purok Number Badge (for Purok Chairman) -->
                  <div v-if="person.purok_number" class="mb-3">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-linear-to-r from-[#004595] to-[#0056b3] text-white text-xs font-bold rounded-full shadow-md">
                      <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                      </svg>
                      Purok {{ person.purok_number }}
                    </span>
                  </div>
                  
                  <div v-if="person.description" class="text-sm text-[#00397a] dark:text-gray-300 font-bold mb-3 line-clamp-2 px-2">
                    {{ person.description }}
                  </div>
                  
                  <div class="w-full pt-3 border-t border-[#004595]/10 dark:border-gray-600 space-y-2">
                    <div class="flex items-center justify-center gap-2 text-sm text-[#00397a] dark:text-gray-300">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      <span class="font-bold">{{ person.phone }}</span>
                    </div>
                  </div>
                  
                  <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="p-1.5 bg-[#004595] rounded-lg shadow-lg">
                      <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Delete Position Confirmation Modal -->
      <div v-if="showDeleteConfirmModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-60 p-4" @click.self="cancelDeletePosition">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-red-500 to-red-600 px-6 py-5">
            <div class="flex items-center gap-3">
              <div class="p-2.5 bg-white/20 backdrop-blur-sm rounded-xl">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-white">Confirm Delete Position</h3>
            </div>
          </div>
          
          <!-- Modal Body -->
          <div class="p-6">
            <div class="text-center mb-6">
              <div class="inline-block p-4 bg-red-100 dark:bg-red-900/30 rounded-full mb-4">
                <svg class="w-12 h-12 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Delete "{{ positionToDelete }}"?</h4>
              <p class="text-gray-600 dark:text-gray-300 text-sm">
                Are you sure you want to delete this position? This action cannot be undone.
              </p>
              <div v-if="officersByPosition[positionToDelete]?.length > 0" class="mt-4 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg">
                <p class="text-xs text-amber-800 dark:text-amber-300 font-semibold">
                  ⚠️ Warning: This will also delete {{ officersByPosition[positionToDelete].length }} officer{{ officersByPosition[positionToDelete].length !== 1 ? 's' : '' }} assigned to this position.
                </p>
              </div>
            </div>

            <div class="flex gap-3">
              <button
                @click="cancelDeletePosition"
                class="flex-1 px-4 py-3 border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all font-semibold text-sm"
              >
                Cancel
              </button>
              <button
                @click="deletePosition"
                class="flex-1 px-4 py-3 bg-linear-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg transition-all font-semibold text-sm"
              >
                Delete Position
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Custom Confirmation Modal -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div
          v-if="showConfirmModal"
          class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-100001 p-4"
          @click.self="handleCancelConfirm"
        >
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
            <!-- Modal Header -->
            <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-5 relative overflow-hidden">
              <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20 animate-pulse"></div>
              <div class="relative flex items-center gap-3">
                <div class="p-3 bg-white/20 backdrop-blur-sm rounded-xl ring-2 ring-white/30">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">{{ confirmData.title }}</h3>
              </div>
            </div>
            
            <!-- Modal Body -->
            <div class="p-6 bg-linear-to-br from-[#f3f1ee]/30 dark:from-gray-900/30 to-white dark:to-gray-800">
              <p class="text-[#002147] dark:text-white text-base font-medium mb-6 text-center">{{ confirmData.message }}</p>
              
              <div class="flex gap-3">
                <button
                  @click="handleCancelConfirm"
                  class="flex-1 px-5 py-3 border-2 border-[#004595]/20 dark:border-gray-600 text-[#002147] dark:text-white rounded-xl hover:bg-[#f3f1ee] dark:hover:bg-gray-700 hover:border-[#004595]/40 dark:hover:border-gray-500 transition-all font-bold text-sm"
                >
                  {{ confirmData.cancelText }}
                </button>
                <button
                  @click="handleConfirm"
                  class="flex-1 px-5 py-3 bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-sm"
                >
                  {{ confirmData.confirmText }}
                </button>
              </div>
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
              'rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md border-2 transform hover:scale-[1.02] transition-all duration-300',
              toast.type === 'success' 
                ? 'bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] border-[#004595]/30' 
                : toast.type === 'error'
                ? 'bg-linear-to-r from-red-500 via-red-600 to-red-700 border-red-400/30'
                : 'bg-linear-to-r from-amber-500 via-amber-600 to-amber-700 border-amber-400/30'
            ]"
          >
            <div class="relative p-4">
              <!-- Animated Background -->
              <div class="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 animate-pulse"></div>
              
              <div class="relative flex items-start gap-4">
                <!-- Icon -->
                <div class="shrink-0">
                  <div class="p-2 bg-white/20 backdrop-blur-sm rounded-xl ring-2 ring-white/30 shadow-lg">
                    <!-- Success Icon -->
                    <svg v-if="toast.type === 'success'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <!-- Error Icon -->
                    <svg v-else-if="toast.type === 'error'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                    </svg>
                    <!-- Warning Icon -->
                    <svg v-else class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>

                <!-- Content -->
                <div class="flex-1 pt-0.5">
                  <p class="text-white font-bold text-base tracking-wide leading-snug">{{ toast.message }}</p>
                  <p v-if="toast.description" class="text-white/80 text-sm mt-1 font-medium">{{ toast.description }}</p>
                </div>

                <!-- Close Button -->
                <button
                  @click="hideToast"
                  class="shrink-0 p-1.5 hover:bg-white/20 rounded-lg transition-all duration-200"
                >
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
              </div>

              <!-- Progress Bar -->
              <div class="absolute bottom-0 left-0 right-0 h-1 bg-white/20 overflow-hidden">
                <div
                  class="h-full bg-white/60 transition-all duration-300 ease-linear"
                  :style="{ width: toast.progress + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Edit History Modal -->
      <div v-if="showHistoryModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" style="z-index: 100000;" @click.self="closeHistoryModal">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all">
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-5 overflow-hidden sticky top-0 z-10">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mr-32 -mt-32 animate-pulse"></div>
            <div class="relative flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-white/20 backdrop-blur-sm rounded-xl ring-2 ring-white/30">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-white">Edit Barangay Information</h3>
              </div>
              <button @click="closeHistoryModal" class="p-2 hover:bg-white/20 rounded-lg transition-all">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="p-6 space-y-6">
            <!-- Image Upload Section -->
            <div class="space-y-3">
              <label class="block text-sm font-bold text-[#002147] dark:text-white uppercase tracking-wide">Barangay Image</label>
              <div class="relative">
                <div v-if="historyForm.brgy_images" class="relative w-full aspect-21/9 rounded-xl overflow-hidden border-2 border-[#004595]/20 dark:border-gray-600 mb-3">
                  <img :src="historyForm.brgy_images" alt="Preview" class="w-full h-full object-cover" />
                  <button
                    @click="removeHistoryImage"
                    class="absolute top-3 right-3 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
                <input
                  ref="historyImageInput"
                  type="file"
                  accept="image/*"
                  @change="handleHistoryImageUpload"
                  class="hidden"
                />
                <button
                  @click="triggerHistoryImageUpload"
                  :disabled="uploadingHistoryImage"
                  class="w-full px-4 py-3 border-2 border-dashed border-[#004595]/30 dark:border-gray-600 rounded-xl hover:border-[#004595] dark:hover:border-blue-400 hover:bg-[#004595]/5 dark:hover:bg-gray-700 transition-all text-[#002147] dark:text-white font-semibold flex items-center justify-center gap-2"
                >
                  <svg v-if="!uploadingHistoryImage" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <svg v-else class="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>{{ uploadingHistoryImage ? 'Uploading...' : (historyForm.brgy_images ? 'Change Image' : 'Upload Image') }}</span>
                </button>
              </div>
            </div>

            <!-- Day Field -->
            <div class="space-y-2">
              <label class="block text-sm font-bold text-[#002147] dark:text-white uppercase tracking-wide">Day/Occasion</label>
              <input
                v-model="historyForm.araw"
                type="text"
                placeholder="e.g., Foundation Day"
                class="w-full px-4 py-3 border-2 border-[#004595]/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-[#004595] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all outline-none"
              />
            </div>

            <!-- Patron Saint Field -->
            <div class="space-y-2">
              <label class="block text-sm font-bold text-[#002147] dark:text-white uppercase tracking-wide">Patron Saint</label>
              <input
                v-model="historyForm.patron"
                type="text"
                placeholder="Enter patron saint name"
                class="w-full px-4 py-3 border-2 border-[#004595]/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-[#004595] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all outline-none"
              />
            </div>

            <!-- Fiesta Date Field -->
            <div class="space-y-2">
              <label class="block text-sm font-bold text-[#002147] dark:text-white uppercase tracking-wide">Fiesta Celebration Date</label>
              <input
                v-model="historyForm.date"
                type="text"
                placeholder="e.g., January 15"
                class="w-full px-4 py-3 border-2 border-[#004595]/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-[#004595] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all outline-none"
              />
            </div>

            <!-- History Field -->
            <div class="space-y-2">
              <label class="block text-sm font-bold text-[#002147] dark:text-white uppercase tracking-wide">Barangay History</label>
              <textarea
                v-model="historyForm.brgy_history"
                rows="6"
                placeholder="Enter the barangay's history and background"
                class="w-full px-4 py-3 border-2 border-[#004595]/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-xl focus:border-[#004595] dark:focus:border-blue-400 focus:ring-2 focus:ring-[#004595]/20 dark:focus:ring-blue-400/20 transition-all outline-none resize-none"
              ></textarea>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-6 py-4 bg-[#f3f1ee]/30 dark:bg-gray-900/30 border-t border-[#004595]/10 dark:border-gray-700 flex gap-3 sticky bottom-0">
            <button
              @click="closeHistoryModal"
              class="flex-1 px-5 py-3 border-2 border-[#004595]/20 dark:border-gray-600 text-[#002147] dark:text-white rounded-xl hover:bg-[#f3f1ee] dark:hover:bg-gray-700 hover:border-[#004595]/40 dark:hover:border-gray-500 transition-all font-bold"
            >
              Cancel
            </button>
            <button
              @click="saveHistoryEdit"
              :disabled="savingHistory"
              class="flex-1 px-5 py-3 bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] text-white rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ savingHistory ? 'Saving...' : 'Save Changes' }}
            </button>
          </div>
        </div>
      </div>

      <!-- Landmark Details Modal -->
      <div v-if="showLandmarkModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" style="z-index: 100000;" @click.self="closeLandmarkModal">
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden transform transition-all">
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-5 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -mr-32 -mt-32 animate-pulse"></div>
            <div class="relative flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                  <svg v-if="selectedLandmarkType === 'schools'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                  <svg v-else-if="selectedLandmarkType === 'churches'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
                  </svg>
                  <svg v-else class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white">{{ landmarkModalTitle }}</h3>
                  <p class="text-white/80 text-sm font-medium">{{ selectedLandmarkItems.length }} {{ selectedLandmarkType === 'schools' ? 'Institutions' : selectedLandmarkType === 'churches' ? 'Places of Worship' : 'Establishments' }}</p>
                </div>
              </div>
              <button
                @click="closeLandmarkModal"
                class="p-2 hover:bg-white/20 rounded-lg transition-all"
              >
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Body -->
          <div class="overflow-y-auto max-h-[calc(90vh-140px)] p-6 dark:bg-gray-800">
            <div v-if="selectedLandmarkItems.length === 0" class="text-center py-16">
              <div class="inline-block p-8 bg-linear-to-br from-[#004595]/10 to-[#00397a]/5 dark:from-gray-700/50 dark:to-gray-600/30 rounded-3xl mb-6">
                <svg class="w-16 h-16 text-[#004595] dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-[#002147] dark:text-white mb-3">No {{ landmarkModalTitle }} Found</h3>
              <p class="text-[#00397a] dark:text-gray-400 font-medium">There are currently no {{ selectedLandmarkType }} listed in this barangay.</p>
            </div>

            <div v-else class="space-y-3">
              <div
                v-for="(item, index) in selectedLandmarkItems"
                :key="index"
                class="group bg-linear-to-br from-white dark:from-gray-700 to-[#f3f1ee]/30 dark:to-gray-700/30 rounded-xl p-4 border-2 border-[#004595]/10 dark:border-gray-600 hover:border-[#004595]/40 dark:hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
              >
                <div class="flex items-start gap-4">
                  <div class="shrink-0">
                    <div class="w-12 h-12 rounded-xl bg-linear-to-br from-[#002147] to-[#004595] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span class="text-white font-bold text-lg">{{ index + 1 }}</span>
                    </div>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h4 class="text-base font-bold text-[#002147] dark:text-white mb-1 group-hover:text-[#004595] dark:group-hover:text-blue-400 transition-colors">{{ item.name }}</h4>
                    <div class="flex items-start gap-2 mt-2">
                      <svg class="w-4 h-4 text-[#00397a] dark:text-gray-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                      </svg>
                      <p class="text-sm text-[#00397a] dark:text-gray-300 font-medium">{{ item.address || 'No address provided' }}</p>
                    </div>
                  </div>
                  <div class="shrink-0">
                    <svg class="w-5 h-5 text-[#004595] dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal Footer -->
          <div class="px-6 py-4 bg-[#f3f1ee]/30 dark:bg-gray-900/30 border-t border-[#004595]/10 dark:border-gray-700 flex gap-3">
            <button
              @click="closeLandmarkModal"
              class="flex-1 px-5 py-3 border-2 border-[#004595]/20 dark:border-gray-600 text-[#002147] dark:text-white rounded-xl hover:bg-[#f3f1ee] dark:hover:bg-gray-700 hover:border-[#004595]/40 dark:hover:border-gray-500 transition-all font-bold"
            >
              Close
            </button>
          </div>
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
      console.log('🔍 Looking for barangay from param:', barangayName.value)
      
      // Generate multiple search patterns
      const searchPatterns = [
        // Original kebab-case converted to URL-friendly version (e.g., "bit-os")
        barangayName.value,
        // Title Case with spaces (e.g., "Bit Os")
        barangayName.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
        // Title Case with hyphens (e.g., "Bit-Os")
        barangayName.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('-'),
        // All lowercase with spaces (e.g., "bit os")
        barangayName.value.replace(/-/g, ' '),
        // All lowercase with hyphens (e.g., "bit-os")
        barangayName.value,
        // UPPERCASE with spaces (e.g., "BIT OS")
        barangayName.value.replace(/-/g, ' ').toUpperCase(),
      ]
      
      console.log('🔍 Trying patterns:', searchPatterns)
      
      let data = null
      let error = null
      
      // Try each pattern until we find a match
      for (const pattern of searchPatterns) {
        const result = await supabase
          .from('Barangays')
          .select('*')
          .ilike('brgyname', pattern)
          .maybeSingle()
        
        if (result.data) {
          data = result.data
          console.log('✅ Found match with pattern:', pattern, '→ Database name:', data.brgyname)
          break
        }
        
        if (result.error && result.error.code !== 'PGRST116') {
          error = result.error
          break
        }
      }
      
      // If still not found, try a wildcard search (last resort)
      if (!data && !error) {
        console.log('🔍 Trying wildcard search...')
        const wildcardPattern = `%${barangayName.value.replace(/-/g, '%')}%`
        const result = await supabase
          .from('Barangays')
          .select('*')
          .ilike('brgyname', wildcardPattern)
          .limit(1)
          .maybeSingle()
        
        if (result.data) {
          data = result.data
          console.log('✅ Found via wildcard:', data.brgyname)
        } else {
          // Final attempt: Get all barangays and do client-side fuzzy match
          console.log('🔍 Trying client-side fuzzy match...')
          const { data: allBarangays } = await supabase
            .from('Barangays')
            .select('*')
          
          if (allBarangays && allBarangays.length > 0) {
            // Try to find a match by comparing URL-safe versions
            const urlSafeParam = barangayName.value.toLowerCase().replace(/[^\w-]/g, '')
            const match = allBarangays.find(b => {
              const urlSafeName = b.brgyname
                .toLowerCase()
                .trim()
                .replace(/\s+/g, '-')
                .replace(/[^\w\s-]/g, '')
                .replace(/--+/g, '-')
                .replace(/^-+|-+$/g, '')
              return urlSafeName === urlSafeParam || 
                     urlSafeName.includes(urlSafeParam) ||
                     urlSafeParam.includes(urlSafeName)
            })
            
            if (match) {
              data = match
              console.log('✅ Found via fuzzy match:', data.brgyname)
            } else {
              console.log('❌ Available barangays:', allBarangays.map(b => b.brgyname).join(', '))
            }
          }
        }
      }
      
      if (error && error.code !== 'PGRST116') {
        console.error('Database error:', error)
      }
      
      // Use the actual name from database if found, otherwise use displayName
      const displayName = barangayName.value.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      const actualName = data?.brgyname || displayName
      
      // Create barangay info structure
      communityInfo.value = {
        name: actualName,
        dbData: data,
        center: { lat: 8.9475, lng: 125.5279 },
        markers: [{
          name: `${actualName} Barangay Center`,
          type: 'barangay',
          coordinates: { lat: 8.9475, lng: 125.5279 },
        }],
        schools: [
          `${actualName} Elementary School`,
          `${actualName} Integrated School`,
          `${actualName} Senior High School`,
        ],
        churches: [
          `${actualName} Parish Church`,
          `${actualName} Chapel`,
          `${actualName} Christian Fellowship`,
        ],
        businesses: [
          `${actualName} Public Market`,
          `${actualName} Commercial Center`,
          `${actualName} Cooperative Store`,
        ],
      }
      
      console.log('✅ Barangay info loaded:', actualName, data ? '(from database)' : '(default data)')
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
    officeHours: ''
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
  const activeTab = ref('dashboard')
  const personnelForm = ref({
    fullname: '',
    phone_number: '',
    position: '',
    photo_url: '',
    purok_number: '',
    description: ''
  })

  // History edit modal
  const showHistoryModal = ref(false)
  const savingHistory = ref(false)
  const uploadingHistoryImage = ref(false)
  const historyImageInput = ref(null)
  const historyForm = ref({
    araw: '',
    brgy_images: '',
    supabaseImageUrl: null,  // Stores the actual Supabase URL
    pendingImageFile: null,   // Stores the file object for upload on save
    patron: '',
    date: '',
    brgy_history: ''
  })

  // Landmark Details Modal
  const showLandmarkModal = ref(false)
  const selectedLandmarkType = ref('') // 'schools', 'churches', 'businesses'
  const selectedLandmarkItems = ref([])
  
  const landmarkModalTitle = computed(() => {
    if (selectedLandmarkType.value === 'schools') return 'Schools'
    if (selectedLandmarkType.value === 'churches') return 'Churches'
    if (selectedLandmarkType.value === 'businesses') return 'Business Establishments'
    if (selectedLandmarkType.value === 'govtOffices') return 'Government Offices'
    return ''
  })

  // Position management
  const showPositionModal = ref(false)
  const positionForm = ref({
    name: ''
  })
  const positions = ref([])
  const submittingPosition = ref(false)
  const showPositionOfficersModal = ref(false)
  const selectedPosition = ref(null)
  const showDeleteConfirmModal = ref(false)
  const positionToDelete = ref(null)

  // Personnel details modal
  const showDetailsModal = ref(false)
  const selectedPersonnel = ref(null)
  const personnelPhotoInput = ref(null)
  const uploadingPhoto = ref(false)
  
  // Position menu state
  const activePositionMenu = ref(null)
  
  // Search and sort state for officers in position
  const officerSearchQuery = ref('')
  const officerSortBy = ref('firstname') // 'firstname', 'lastname', 'alphabetical'

  // Custom confirmation modal state
  const showConfirmModal = ref(false)
  const confirmAction = ref(null)
  const confirmData = ref({
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel'
  })

  // Toast notification state
  const toast = ref({
    show: false,
    message: '',
    description: '',
    type: 'success', // 'success', 'error', 'warning'
    progress: 100
  })

  let toastTimer = null
  let progressTimer = null

  // Toast helper functions
  const showToast = (message, type = 'success', description = '', duration = 4000) => {
    // Clear existing timers
    if (toastTimer) clearTimeout(toastTimer)
    if (progressTimer) clearInterval(progressTimer)
    
    toast.value = {
      show: true,
      message,
      description,
      type,
      progress: 100
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

  // Custom confirmation modal helper
  const showConfirm = (title, message, onConfirm, confirmText = 'Confirm', cancelText = 'Cancel') => {
    confirmData.value = {
      title,
      message,
      confirmText,
      cancelText
    }
    confirmAction.value = onConfirm
    showConfirmModal.value = true
  }

  const handleConfirm = () => {
    if (confirmAction.value) {
      confirmAction.value()
    }
    showConfirmModal.value = false
    confirmAction.value = null
  }

  const handleCancelConfirm = () => {
    showConfirmModal.value = false
    confirmAction.value = null
  }

  // Computed property to get all personnel
  const allPersonnel = computed(() => personnel.value)
  const officers = computed(() => personnel.value.filter(p => p.type === 'Officer'))

  // Group officers by position
  const officersByPosition = computed(() => {
    const grouped = {}
    officers.value.forEach(officer => {
      if (!grouped[officer.position]) {
        grouped[officer.position] = []
      }
      grouped[officer.position].push(officer)
    })
    return grouped
  })

  // Get unique positions
  const uniquePositions = computed(() => {
    return [...new Set(officers.value.map(o => o.position))].sort()
  })

  // Sorted personnel alphabetically by name
  const sortedOfficers = computed(() => {
    return [...officers.value].sort((a, b) => a.name.localeCompare(b.name))
  })

  const brgyInfo = computed(() => {
    if (!brgyFiesta.value) return [];
    
    // Check if there's any actual data (not just empty strings)
    const hasData = brgyFiesta.value.araw || 
                    brgyFiesta.value.brgy_images || 
                    brgyFiesta.value.brgy_history || 
                    brgyFiesta.value.patron || 
                    brgyFiesta.value.date;
    
    return hasData ? [brgyFiesta.value] : [];
  });
  
  // Landmarks count - real data from database
  const landmarksCount = ref({
    schools: 0,
    churches: 0,
    establishments: 0,
    govtOffices: 0
  })
  
  const totalOfficers = computed(() => officers.value.length)
  const totalLandmarks = computed(() => {
    return landmarksCount.value.schools + landmarksCount.value.churches + landmarksCount.value.establishments + landmarksCount.value.govtOffices
  })
  const totalHistory = computed(() => brgyInfo.value.filter(item => item?.brgy_history).length)

  // Fetch landmarks count from database
  const fetchLandmarksCount = async () => {
    if (!barangay_id.value) return
    
    try {
      // Fetch schools count
      const { count: schoolsCount, error: schoolsError } = await supabase
        .from('Schools')
        .select('*', { count: 'exact', head: true })
        .eq('brgy_id', barangay_id.value)
      
      if (schoolsError) throw schoolsError
      landmarksCount.value.schools = schoolsCount || 0

      // Fetch churches count
      const { count: churchesCount, error: churchesError } = await supabase
        .from('Church')
        .select('*', { count: 'exact', head: true })
        .eq('brgy_id', barangay_id.value)
      
      if (churchesError) throw churchesError
      landmarksCount.value.churches = churchesCount || 0

      // Fetch establishments count
      const { count: establishmentsCount, error: establishmentsError } = await supabase
        .from('Establishments')
        .select('*', { count: 'exact', head: true })
        .eq('brgy_id', barangay_id.value)
      
      if (establishmentsError) throw establishmentsError
      landmarksCount.value.establishments = establishmentsCount || 0

      // Fetch government offices count
      const { count: govtOfficesCount, error: govtOfficesError } = await supabase
        .from('GovtOffices')
        .select('*', { count: 'exact', head: true })
        .eq('brgy_id', barangay_id.value)
      
      if (govtOfficesError) throw govtOfficesError
      landmarksCount.value.govtOffices = govtOfficesCount || 0

      console.log('Landmarks count:', landmarksCount.value)
    } catch (error) {
      console.error('Error fetching landmarks count:', error)
    }
  }

  // Fetch Barangay Captain information
  const fetchCaptainInfo = async () => {
    if (!communityInfo.value) return
    
    loadingCaptain.value = true
    try {
      // Use the exact barangay name from communityInfo which comes from the database
      const barangayNameToSearch = communityInfo.value.name
      
      // First, get the barangay details including cpt_id and id
      const { data: barangayData, error: barangayError } = await supabase
        .from('Barangays')
        .select('id, cpt_id, brgyname')
        .ilike('brgyname', barangayNameToSearch)
        .maybeSingle()

      if (barangayError && barangayError.code !== 'PGRST116') throw barangayError
      
      if (barangayData) {
        barangay_id.value = barangayData.id
        
        // Update communityInfo with the exact database name to ensure consistency
        if (barangayData.brgyname && communityInfo.value.name !== barangayData.brgyname) {
          communityInfo.value.name = barangayData.brgyname
        }
        
        if (barangayData.cpt_id) {
          // Then fetch the captain details using cpt_id
          const { data: captainData, error: captainError } = await supabase
            .from('BrgyCaptain')
            .select('*')
            .eq('id', barangayData.cpt_id)
            .maybeSingle()

          console.log('Fetched captain data:', captainData)  
          if (captainError && captainError.code !== 'PGRST116') throw captainError
          
          if (captainData) {
            captainId.value = captainData.id
            captainInfo.value = {
              name: captainData.Cptfullname || '',
              phone: captainData.phone || '',
              email: captainData.email || '',
              officeHours: captainData.office_hours || '',
              profileImage: captainData.profile_image || ''
            }
          } else {
            // No captain assigned yet, initialize empty
            captainId.value = null
            captainInfo.value = {
              name: '',
              phone: '',
              email: '',
              officeHours: '',
              profileImage: ''
            }
          }
        } else {
          // No captain assigned yet, initialize empty
          captainId.value = null
          captainInfo.value = {
            name: '',
            phone: '',
            email: '',
            officeHours: '',
            profileImage: ''
          }
        }
        
        // Fetch personnel for this barangay
        await fetchPersonnel()
        await fetchPositions()
        await getBrgyFiestaDetails(barangay_id.value)
        await fetchLandmarksCount()
      } else {
        // Barangay not found in database
        console.warn('⚠️ Barangay not found in database:', communityInfo.value.name)
        barangay_id.value = null
        captainId.value = null
        captainInfo.value = {
          name: '',
          phone: '',
          email: '',
          officeHours: '',
          profileImage: ''
        }
      }
    } catch (error) {
      console.error('Error fetching captain info:', error)
      barangay_id.value = null
      captainId.value = null
      captainInfo.value = {
        name: '',
        phone: '',
        email: '',
        officeHours: '',
        profileImage: ''
      }
    } finally {
      loadingCaptain.value = false
    }
  }

  const getBrgyFiestaDetails = async (barangay_id) => {
    if (!barangay_id) return;
    try {
      console.log('🔍 Fetching brgy fiesta details for barangay_id:', barangay_id);
      
      // Fetch data from Barangays table (araw, brgy_images, brgy_history)
      const { data: barangayData, error: barangayError } = await supabase
        .from('Barangays')
        .select('araw, brgy_images, brgy_history')
        .eq('id', barangay_id)
        .single();

      if (barangayError) {
        console.error('❌ Error fetching Barangays data:', barangayError);
        throw barangayError;
      }

      console.log('✅ Barangays data fetched:', barangayData);
      console.log('   - araw:', barangayData?.araw || '(empty)');
      console.log('   - brgy_images:', barangayData?.brgy_images || '(empty)');
      console.log('   - brgy_history:', barangayData?.brgy_history ? '(has text)' : '(empty)');

      // Fetch data from BrgyFiesta table (patron, date)
      const { data: fiestaData, error: fiestaError } = await supabase
        .from('BrgyFiesta')
        .select('patron, date')
        .eq('brgy_id', barangay_id)
        .maybeSingle();

      if (fiestaError && fiestaError.code !== 'PGRST116') {
        console.error('❌ Error fetching BrgyFiesta data:', fiestaError);
      }

      console.log('✅ BrgyFiesta data fetched:', fiestaData);
      
      // Combine both data sources - only if there's actual data
      const hasData = barangayData?.araw || 
                      barangayData?.brgy_images || 
                      barangayData?.brgy_history || 
                      fiestaData?.patron || 
                      fiestaData?.date;
      
      if (hasData) {
        brgyFiesta.value = {
          araw: barangayData?.araw || '',
          brgy_images: barangayData?.brgy_images || '',
          brgy_history: barangayData?.brgy_history || '',
          patron: fiestaData?.patron || '',
          date: fiestaData?.date || ''
        };
        console.log('✅ Combined Brgy Fiesta Data set:', brgyFiesta.value);
      } else {
        brgyFiesta.value = null;
        console.log('⚠️ No data found, brgyFiesta set to null');
      }

      console.log('📊 Final brgyFiesta.value:', brgyFiesta.value);
    } catch (err) {
      console.error("❌ Error fetching brgy fiesta details:", err);
      brgyFiesta.value = null;
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
          photo_url: member.photo_url || '',
          purok_number: member.purok_number || '',
          description: member.description || '',
          type: 'Officer'
        }))
      }
    } catch (error) {
      console.error('Error fetching personnel:', error)
    } finally {
      loadingPersonnel.value = false
    }
  }

  // Fetch unique positions
  const fetchPositions = async () => {
    if (!barangay_id.value) return
    
    try {
      const { data, error } = await supabase
        .from('BrgyMembers')
        .select('position')
        .eq('brgy_id', barangay_id.value)

      if (error) throw error
      
      if (data) {
        const uniquePos = [...new Set(data.map(d => d.position))].filter(p => p)
        positions.value = uniquePos.sort()
      }
    } catch (error) {
      console.error('Error fetching positions:', error)
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
    
    // Check if returning from a detail page with a specific tab
    const fromTab = route.query.fromTab
    if (fromTab && ['dashboard', 'officers', 'landmarks', 'history'].includes(fromTab)) {
      activeTab.value = fromTab
    }
    
    // Close position menu when clicking outside
    document.addEventListener('click', (e) => {
      if (activePositionMenu.value && !e.target.closest('.position-menu-container')) {
        activePositionMenu.value = null
      }
    })
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
      officeHours: captainInfo.value.officeHours,
    }
  }

  const cancelEdit = () => {
    isEditing.value = false
    editForm.value = {
      name: '',
      phone: '',
      email: '',
      officeHours: ''
    }
  }

  const saveEdit = async () => {
    if (!captainId.value) {
      showToast('Cannot update captain information', 'error', 'Captain ID not found')
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
          office_hours: editForm.value.officeHours,
        })
        .eq('id', captainId.value)

      if (error) throw error

      isEditing.value = false
      showToast('Success!', 'success', 'Captain information updated successfully')
      await fetchCaptainInfo();
    } catch (error) {
      console.error('Error updating captain info:', error)
      showToast('Update Failed', 'error', 'Failed to update captain information. Please try again.')
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
      showToast('Invalid File Type', 'warning', 'Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast('File Too Large', 'warning', 'Image size should be less than 5MB')
      return
    }

    if (!captainId.value) {
      showToast('Upload Failed', 'error', 'Captain ID not found')
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

      showToast('Success!', 'success', 'Profile image uploaded successfully')
    } catch (error) {
      console.error('Error uploading image:', error)
      showToast('Upload Failed', 'error', 'Failed to upload image. Please try again.')
    }
  }

  const addPersonnel = (position = '') => {
    if (!barangay_id.value) {
      showToast('Cannot Add Personnel', 'error', 'Barangay not found')
      return
    }
    isEditMode.value = false
    personnelForm.value = {
      fullname: '',
      phone_number: '',
      position: position,
      photo_url: '',
      purok_number: '',
      description: ''
    }
    showModal.value = true
  }

  const editPersonnel = (person) => {
    isEditMode.value = true
    editingPersonnelId.value = person.id
    personnelForm.value = {
      fullname: person.name,
      phone_number: person.phone,
      position: person.position,
      photo_url: person.photo_url || '',
      purok_number: person.purok_number || '',
      description: person.description || ''
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
      position: '',
      photo_url: '',
      purok_number: '',
      description: ''
    }
  }

  // Position Management
  const openPositionModal = () => {
    positionForm.value.name = ''
    showPositionModal.value = true
  }

  const closePositionModal = () => {
    showPositionModal.value = false
    positionForm.value.name = ''
  }

  const submitPosition = async () => {
    if (!positionForm.value.name.trim()) {
      showToast('Position Required', 'warning', 'Please enter a position name')
      return
    }
    
    // Check if position already exists
    if (positions.value.includes(positionForm.value.name)) {
      showToast('Position Exists', 'warning', 'This position already exists')
      return
    }
    
    positions.value.push(positionForm.value.name)
    positions.value.sort()
    closePositionModal()
    
    // Open the position officers modal for the newly created position
    selectedPosition.value = positionForm.value.name
    showPositionOfficersModal.value = true
  }

  const openPositionOfficersModal = (position) => {
    selectedPosition.value = position
    showPositionOfficersModal.value = true
  }

  const closePositionOfficersModal = () => {
    showPositionOfficersModal.value = false
    selectedPosition.value = null
    // Reset search and sort
    officerSearchQuery.value = ''
    officerSortBy.value = 'firstname'
  }

  const officersForSelectedPosition = computed(() => {
    if (!selectedPosition.value) return []
    let officers = personnel.value.filter(p => p.position === selectedPosition.value)
    
    // Apply search filter
    if (officerSearchQuery.value.trim()) {
      const searchLower = officerSearchQuery.value.toLowerCase().trim()
      officers = officers.filter(officer => 
        officer.name.toLowerCase().includes(searchLower) ||
        (officer.phone && officer.phone.toLowerCase().includes(searchLower)) ||
        (officer.purok_number && officer.purok_number.toString().includes(searchLower)) ||
        (officer.description && officer.description.toLowerCase().includes(searchLower))
      )
    }
    
    // Apply sorting
    if (officerSortBy.value === 'firstname') {
      // Sort by first name (first word of full name)
      officers = officers.sort((a, b) => {
        const firstNameA = a.name.split(' ')[0].toLowerCase()
        const firstNameB = b.name.split(' ')[0].toLowerCase()
        return firstNameA.localeCompare(firstNameB)
      })
    } else if (officerSortBy.value === 'lastname') {
      // Sort by last name (last word of full name)
      officers = officers.sort((a, b) => {
        const wordsA = a.name.split(' ')
        const wordsB = b.name.split(' ')
        const lastNameA = wordsA[wordsA.length - 1].toLowerCase()
        const lastNameB = wordsB[wordsB.length - 1].toLowerCase()
        return lastNameA.localeCompare(lastNameB)
      })
    } else if (officerSortBy.value === 'alphabetical') {
      // Sort by full name alphabetically
      officers = officers.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    }
    
    return officers
  })

  const addOfficerToPosition = () => {
    closePositionOfficersModal()
    addPersonnel(selectedPosition.value)
  }

  // Position menu toggle
  const togglePositionMenu = (position) => {
    if (activePositionMenu.value === position) {
      activePositionMenu.value = null
    } else {
      activePositionMenu.value = position
    }
  }

  // Delete position functionality
  const confirmDeletePosition = (position) => {
    activePositionMenu.value = null // Close the menu
    positionToDelete.value = position
    showDeleteConfirmModal.value = true
  }

  const cancelDeletePosition = () => {
    positionToDelete.value = null
    showDeleteConfirmModal.value = false
  }

  const deletePosition = async () => {
    if (!positionToDelete.value) return
    
    try {
      // Get all officers with this position
      const officersInPosition = personnel.value.filter(p => p.position === positionToDelete.value)
      
      // Delete all officers with this position from database
      if (officersInPosition.length > 0) {
        const officerIds = officersInPosition.map(o => o.id)
        
        const { error: deleteError } = await supabase
          .from('BrgyMembers')
          .delete()
          .in('id', officerIds)
        
        if (deleteError) throw deleteError
        
        // Remove from local personnel array
        personnel.value = personnel.value.filter(p => !officerIds.includes(p.id))
      }
      
      // Remove from positions array
      positions.value = positions.value.filter(p => p !== positionToDelete.value)
      
      const deletedCount = officersInPosition.length
      if (deletedCount > 0) {
        showToast('Success!', 'success', `Position "${positionToDelete.value}" and ${deletedCount} officer${deletedCount !== 1 ? 's' : ''} have been deleted`)
      } else {
        showToast('Success!', 'success', `Position "${positionToDelete.value}" has been deleted`)
      }
      
      cancelDeletePosition()
      
      // Close the position officers modal if it's open for the deleted position
      if (selectedPosition.value === positionToDelete.value) {
        closePositionOfficersModal()
      }
    } catch (error) {
      console.error('Error deleting position:', error)
      showToast('Delete Failed', 'error', 'Failed to delete position. Please try again.')
    }
  }

  // Handle personnel photo upload
  const handlePersonnelPhotoUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      showToast('Invalid File Type', 'warning', 'Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast('File Too Large', 'warning', 'Image size should be less than 5MB')
      return
    }

    uploadingPhoto.value = true
    try {
      // Upload to Supabase storage - using BrgyMember bucket
      const fileExt = file.name.split('.').pop()
      const fileName = `personnel_${Date.now()}.${fileExt}`
      const filePath = fileName

      const { error: uploadError } = await supabase.storage
        .from('BrgyMember')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        throw uploadError
      }

      // Get public URL from BrgyMember bucket
      const { data: urlData } = supabase.storage
        .from('BrgyMember')
        .getPublicUrl(filePath)

      if (urlData?.publicUrl) {
        personnelForm.value.photo_url = urlData.publicUrl
        showToast('Success!', 'success', 'Photo uploaded successfully')
      } else {
        throw new Error('Failed to get public URL')
      }
    } catch (error) {
      console.error('Error uploading photo:', error)
      showToast('Upload Failed', 'error', 'Failed to upload photo. Please try again.')
    } finally {
      uploadingPhoto.value = false
    }
  }

  // Personnel details modal functions
  const viewPersonnelDetails = (person) => {
    selectedPersonnel.value = person
    showDetailsModal.value = true
  }

  const closeDetailsModal = () => {
    showDetailsModal.value = false
    selectedPersonnel.value = null
  }

  const editFromDetails = () => {
    console.log('Edit from details clicked', selectedPersonnel.value)
    if (selectedPersonnel.value) {
      // Store the selected personnel data before closing the modal
      const personnelData = {
        id: selectedPersonnel.value.id,
        name: selectedPersonnel.value.name,
        phone: selectedPersonnel.value.phone,
        position: selectedPersonnel.value.position,
        photo_url: selectedPersonnel.value.photo_url || '',
        purok_number: selectedPersonnel.value.purok_number || '',
        description: selectedPersonnel.value.description || ''
      }
      
      closeDetailsModal()
      
      // Use nextTick or setTimeout to ensure the details modal is fully closed
      setTimeout(() => {
        isEditMode.value = true
        editingPersonnelId.value = personnelData.id
        personnelForm.value = {
          fullname: personnelData.name,
          phone_number: personnelData.phone,
          position: personnelData.position,
          photo_url: personnelData.photo_url,
          purok_number: personnelData.purok_number,
          description: personnelData.description
        }
        console.log('Opening edit modal with form:', personnelForm.value)
        showModal.value = true
      }, 100)
    }
  }

  const deleteFromDetails = async () => {
    if (!selectedPersonnel.value) return
    
    showConfirm(
      'Delete Personnel',
      `Are you sure you want to delete ${selectedPersonnel.value.name}?`,
      async () => {
        try {
          const { error } = await supabase
            .from('BrgyMembers')
            .delete()
            .eq('id', selectedPersonnel.value.id)

          if (error) throw error

          personnel.value = personnel.value.filter(p => p.id !== selectedPersonnel.value.id)
          showToast('Success!', 'success', 'Personnel deleted successfully')
          closeDetailsModal()
        } catch (error) {
          console.error('Error deleting personnel:', error)
          showToast('Delete Failed', 'error', 'Failed to delete personnel. Please try again.')
        }
      },
      'Delete',
      'Cancel'
    )
  }

  const submitPersonnel = async () => {
    if (!barangay_id.value) {
      showToast('Cannot Add Personnel', 'error', 'Barangay not found')
      return
    }

    console.log('Submit Personnel - isEditMode:', isEditMode.value, 'editingPersonnelId:', editingPersonnelId.value)
    
    submitting.value = true
    try {
      if (isEditMode.value && editingPersonnelId.value) {
        console.log('Updating personnel with ID:', editingPersonnelId.value)
        // Update existing personnel
        const { data, error } = await supabase
          .from('BrgyMembers')
          .update({
            BMfullname: personnelForm.value.fullname,
            phone_number: personnelForm.value.phone_number,
            position: personnelForm.value.position,
            photo_url: personnelForm.value.photo_url,
            purok_number: personnelForm.value.purok_number || null,
            description: personnelForm.value.description || null
          })
          .eq('id', editingPersonnelId.value)
          .select()

        if (error) throw error

        if (data && data[0]) {
          const index = personnel.value.findIndex(p => p.id === editingPersonnelId.value)
          if (index !== -1) {
            personnel.value[index] = {
              id: data[0].id,
              name: data[0].BMfullname,
              position: data[0].position,
              phone: data[0].phone_number,
              photo_url: data[0].photo_url || '',
              purok_number: data[0].purok_number || '',
              description: data[0].description || '',
              type: 'Officer',
            }
          }
          showToast('Success!', 'success', 'Personnel updated successfully')
          closeModal()
          await fetchPositions()
        }
      } else {
        // Add new personnel
        const { data, error } = await supabase
          .from('BrgyMembers')
          .insert([
            {
              BMfullname: personnelForm.value.fullname,
              phone_number: personnelForm.value.phone_number,
              position: personnelForm.value.position,
              brgy_id: barangay_id.value,
              photo_url: personnelForm.value.photo_url,
              purok_number: personnelForm.value.purok_number || null,
              description: personnelForm.value.description || null
            }
          ])
          .select()

        if (error) throw error

        if (data && data[0]) {
          personnel.value.push({
            id: data[0].id,
            name: data[0].BMfullname,
            position: data[0].position,
            phone: data[0].phone_number,
            photo_url: data[0].photo_url || '',
            purok_number: data[0].purok_number || '',
            description: data[0].description || '',
            type: 'Officer',
          })
          showToast('Success!', 'success', 'Personnel added successfully')
          closeModal()
          await fetchPositions()
        }
      }
    } catch (error) {
      console.error('Error saving personnel:', error)
      showToast('Operation Failed', 'error', `Failed to ${isEditMode.value ? 'update' : 'add'} personnel. Please try again.`)
    } finally {
      submitting.value = false
    }
  }

  const removePersonnel = async (id) => {
    const personToRemove = personnel.value.find(p => p.id === id)
    if (!personToRemove) return

    showConfirm(
      'Remove Personnel',
      `Are you sure you want to remove ${personToRemove.name}?`,
      async () => {
        try {
          const { error } = await supabase
            .from('BrgyMembers')
            .delete()
            .eq('id', id)

          if (error) throw error

          personnel.value = personnel.value.filter(p => p.id !== id)
          showToast('Success!', 'success', 'Personnel removed successfully')
        } catch (error) {
          console.error('Error removing personnel:', error)
          showToast('Remove Failed', 'error', 'Failed to remove personnel. Please try again.')
        }
      },
      'Remove',
      'Cancel'
    )
  }

  const goBack = () => {
    if (barangayName.value) {
      router.push({ name: 'dashboard', query: { barangay: barangayName.value } })
      return
    }
    router.push({ name: 'dashboard' })
  }

  // History Edit Functions
  const startEditHistory = (brgy) => {
    historyForm.value = {
      araw: brgy.araw || '',
      brgy_images: brgy.brgy_images || '',
      supabaseImageUrl: brgy.brgy_images || null,  // Store existing URL
      pendingImageFile: null,
      patron: brgy.patron || '',
      date: brgy.date || '',
      brgy_history: brgy.brgy_history || ''
    }
    showHistoryModal.value = true
  }

  const addNewHistory = () => {
    historyForm.value = {
      araw: '',
      brgy_images: '',
      supabaseImageUrl: null,
      pendingImageFile: null,
      patron: '',
      date: '',
      brgy_history: ''
    }
    showHistoryModal.value = true
  }

  const closeHistoryModal = () => {
    // Clean up blob URL before closing
    if (historyForm.value.brgy_images?.startsWith('blob:')) {
      URL.revokeObjectURL(historyForm.value.brgy_images)
    }
    
    showHistoryModal.value = false
    historyForm.value = {
      araw: '',
      brgy_images: '',
      supabaseImageUrl: null,
      pendingImageFile: null,
      patron: '',
      date: '',
      brgy_history: ''
    }
  }

  const triggerHistoryImageUpload = () => {
    historyImageInput.value?.click()
  }

  const handleHistoryImageUpload = async (event) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      showToast('Invalid File Type', 'warning', 'Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      showToast('File Too Large', 'warning', 'Image size should be less than 5MB')
      return
    }

    // IMMEDIATELY create and display local preview - NO WAITING!
    const localPreviewUrl = URL.createObjectURL(file)
    historyForm.value.brgy_images = localPreviewUrl
    console.log('Local preview created immediately:', localPreviewUrl)
    
    // Show immediate feedback
    showToast('Preview Ready!', 'success', 'Image loaded. Uploading to cloud...')

    // Upload to Supabase in background (async, non-blocking)
    uploadingHistoryImage.value = true
    
    // Store the file for later upload when saving
    historyForm.value.pendingImageFile = file
    
    try {
      // Delete old image if exists in Supabase
      if (historyForm.value.supabaseImageUrl) {
        const oldPath = historyForm.value.supabaseImageUrl.split('/').pop()?.split('?')[0]
        if (oldPath && !oldPath.startsWith('blob:')) {
          await supabase.storage
            .from('BarangayImages')
            .remove([oldPath])
            .catch(err => console.log('Old image cleanup skipped:', err))
        }
      }

      // Upload to Supabase storage
      const fileExt = file.name.split('.').pop()
      const fileName = `history_${barangay_id.value}_${Date.now()}.${fileExt}`
      const filePath = fileName

      const { error: uploadError } = await supabase.storage
        .from('BarangayImages')
        .upload(filePath, file, {
          cacheControl: '0',
          upsert: true
        })

      if (uploadError) {
        console.error('Upload error:', uploadError)
        throw uploadError
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('BarangayImages')
        .getPublicUrl(filePath)

      if (urlData?.publicUrl) {
        // Store the Supabase URL separately (for database save)
        historyForm.value.supabaseImageUrl = urlData.publicUrl
        console.log('Image uploaded to Supabase:', urlData.publicUrl)
        showToast('Cloud Sync!', 'success', 'Image uploaded to cloud successfully')
      } else {
        throw new Error('Failed to get public URL')
      }
    } catch (error) {
      console.error('Error uploading to Supabase:', error)
      // Don't remove the local preview - user can still see and save it
      showToast('Cloud Upload Warning', 'warning', 'Image preview ready, but cloud upload failed. Will retry on save.')
      historyForm.value.supabaseImageUrl = null
    } finally {
      uploadingHistoryImage.value = false
    }
  }

  const removeHistoryImage = () => {
    // Revoke blob URL if it exists to free memory
    if (historyForm.value.brgy_images?.startsWith('blob:')) {
      URL.revokeObjectURL(historyForm.value.brgy_images)
    }
    historyForm.value.brgy_images = ''
    historyForm.value.supabaseImageUrl = null
    historyForm.value.pendingImageFile = null
  }

  const saveHistoryEdit = async () => {
    if (!barangay_id.value) {
      showToast('Cannot Save', 'error', 'Barangay not found')
      return
    }

    console.log('Saving history with barangay_id:', barangay_id.value);
    console.log('History form data:', historyForm.value);

    savingHistory.value = true
    
    // OPTIMISTIC UPDATE: Immediately update the UI before database save
    // This gives instant feedback to the user without waiting for Supabase
    console.log('🚀 Applying optimistic update to UI...');
    const optimisticData = {
      araw: historyForm.value.araw,
      brgy_images: historyForm.value.supabaseImageUrl || historyForm.value.brgy_images,
      brgy_history: historyForm.value.brgy_history,
      patron: historyForm.value.patron,
      date: historyForm.value.date
    };
    
    // Store the old data in case we need to rollback on error
    const previousData = brgyFiesta.value ? { ...brgyFiesta.value } : null;
    
    // Update UI immediately
    brgyFiesta.value = optimisticData;
    console.log('✅ UI updated optimistically - user sees changes instantly!');
    
    try {
      let finalImageUrl = ''
      
      // Check if we have a pending file that needs to be uploaded or re-uploaded
      if (historyForm.value.pendingImageFile) {
        console.log('Uploading pending image file to Supabase...')
        
        try {
          const file = historyForm.value.pendingImageFile
          const fileExt = file.name.split('.').pop()
          const fileName = `history_${barangay_id.value}_${Date.now()}.${fileExt}`
          
          console.log('Uploading file:', fileName)
          
          const { error: uploadError } = await supabase.storage
            .from('BarangayImages')
            .upload(fileName, file, {
              cacheControl: '0',
              upsert: true
            })

          if (uploadError) {
            console.error('Upload error details:', uploadError)
            throw uploadError
          }

          const { data: urlData } = supabase.storage
            .from('BarangayImages')
            .getPublicUrl(fileName)

          if (urlData?.publicUrl) {
            finalImageUrl = urlData.publicUrl
            console.log('✅ Image uploaded successfully to:', finalImageUrl)
          } else {
            console.error('❌ Failed to get public URL from urlData:', urlData)
          }
        } catch (uploadError) {
          console.error('❌ Failed to upload image:', uploadError)
          showToast('Upload Warning', 'warning', 'Failed to upload image to cloud, but saving other data...')
        }
      } else if (historyForm.value.supabaseImageUrl) {
        // Use the already uploaded Supabase URL
        finalImageUrl = historyForm.value.supabaseImageUrl.split('?')[0]
        console.log('✅ Using existing supabaseImageUrl:', finalImageUrl)
      } else if (historyForm.value.brgy_images && !historyForm.value.brgy_images.startsWith('blob:')) {
        // Use existing URL from database (when editing without changing image)
        finalImageUrl = historyForm.value.brgy_images.split('?')[0]
        console.log('✅ Using existing brgy_images from DB:', finalImageUrl)
      } else {
        console.log('⚠️ No image to save - all conditions failed')
        console.log('  - pendingImageFile:', !!historyForm.value.pendingImageFile)
        console.log('  - supabaseImageUrl:', historyForm.value.supabaseImageUrl)
        console.log('  - brgy_images:', historyForm.value.brgy_images)
      }
      
      console.log('📸 Final image URL for database:', finalImageUrl || '(empty)')
      
      // Update Barangays table (araw, brgy_images, brgy_history)
      const barangayUpdateData = {
        araw: historyForm.value.araw,
        brgy_images: finalImageUrl,
        brgy_history: historyForm.value.brgy_history
      };
      
      console.log('💾 Updating Barangays table with:', barangayUpdateData);
      console.log('🔑 Using barangay_id:', barangay_id.value, 'Type:', typeof barangay_id.value);
      
      // Update with .select() to get the updated row back
      const { data: barangayResult, error: barangayError, status, statusText } = await supabase
        .from('Barangays')
        .update(barangayUpdateData)
        .eq('id', barangay_id.value)
        .select('id, brgyname, brgy_images, araw, brgy_history');

      console.log('📡 Update response status:', status, statusText);
      
      if (barangayError) {
        console.error('❌ Error updating Barangays:', barangayError);
        throw barangayError;
      }

      console.log('✅ Barangays update result:', barangayResult);
      console.log('📊 Rows returned:', barangayResult?.length || 0);
      
      if (!barangayResult || barangayResult.length === 0) {
        console.error('⚠️ WARNING: Update returned 0 rows!');
        
        // Verify with a separate select query
        console.log('🔍 Verifying with separate query...');
        const { data: verifyData, error: verifyError } = await supabase
          .from('Barangays')
          .select('id, brgyname, brgy_images, araw, brgy_history')
          .eq('id', barangay_id.value)
          .single();
        
        if (verifyError) {
          console.error('❌ Verification query failed:', verifyError);
        } else {
          console.log('🔍 Current database state:', verifyData);
          console.log('   Expected brgy_images:', finalImageUrl);
          console.log('   Actual brgy_images:', verifyData?.brgy_images);
          
          if (verifyData?.brgy_images === finalImageUrl) {
            console.log('✅ SUCCESS! Image was actually saved! (Update just didn\'t return data)');
            // Manually set the result since the update worked but didn't return data
            barangayResult.push(verifyData);
          } else {
            console.error('❌ FAILED! Image was NOT saved to database');
            console.error('   This might be a database constraint or trigger issue');
            throw new Error('Update did not persist to database');
          }
        }
      } else {
        console.log('✅ Update successful! Updated row:', barangayResult[0]);
      }

      // Check if BrgyFiesta record exists
      const { data: existingFiesta, error: checkError } = await supabase
        .from('BrgyFiesta')
        .select('*')
        .eq('brgy_id', barangay_id.value)
        .maybeSingle()

      if (checkError && checkError.code !== 'PGRST116') throw checkError

      console.log('Existing BrgyFiesta record:', existingFiesta);

      // Update or Insert BrgyFiesta table (patron, date)
      const fiestaData = {
        patron: historyForm.value.patron,
        date: historyForm.value.date
      }

      console.log('Fiesta data to save:', fiestaData);

      if (existingFiesta) {
        // Update existing fiesta record
        console.log('Updating existing fiesta record');
        const { data: fiestaResult, error: fiestaError } = await supabase
          .from('BrgyFiesta')
          .update(fiestaData)
          .eq('brgy_id', barangay_id.value)
          .select();

        if (fiestaError) {
          console.error('Error updating BrgyFiesta:', fiestaError);
          throw fiestaError;
        }
        
        console.log('BrgyFiesta update result:', fiestaResult);
      } else {
        // Insert new fiesta record
        console.log('Inserting new fiesta record');
        const { data: fiestaResult, error: fiestaError } = await supabase
          .from('BrgyFiesta')
          .insert([{
            ...fiestaData,
            brgy_id: barangay_id.value
          }])
          .select();

        if (fiestaError) {
          console.error('Error inserting BrgyFiesta:', fiestaError);
          throw fiestaError;
        }
        
        console.log('BrgyFiesta insert result:', fiestaResult);
      }

      // Refresh the data - wait a moment for DB to commit changes
      console.log('⏳ Waiting for database commit...');
      await new Promise(resolve => setTimeout(resolve, 500)) // Increased to 500ms
      console.log('🔄 Refreshing brgy fiesta details...');
      await getBrgyFiestaDetails(barangay_id.value)
      console.log('📊 After refresh, brgyFiesta.value:', JSON.stringify(brgyFiesta.value, null, 2));
      console.log('🖼️ Image in brgyFiesta:', brgyFiesta.value?.brgy_images || '(no image)');
      console.log('📝 History in brgyFiesta:', brgyFiesta.value?.brgy_history ? '(has text)' : '(no history)');
      
      // WORKAROUND: If refresh didn't get the data we just saved, manually update the UI
      // This ensures immediate display without relying on Supabase fetch
      const needsWorkaround = 
        (!brgyFiesta.value?.brgy_images && finalImageUrl) ||
        (!brgyFiesta.value?.brgy_history && historyForm.value.brgy_history) ||
        (!brgyFiesta.value?.araw && historyForm.value.araw) ||
        (!brgyFiesta.value?.patron && historyForm.value.patron) ||
        (!brgyFiesta.value?.date && historyForm.value.date);
      
      if (needsWorkaround) {
        console.log('⚠️ Applying workaround: Manually updating brgyFiesta with saved data');
        console.log('   Reason: Some fields are missing after database refresh');
        
        // Merge the form data with any existing data from database
        brgyFiesta.value = {
          araw: historyForm.value.araw || brgyFiesta.value?.araw || '',
          brgy_images: finalImageUrl || brgyFiesta.value?.brgy_images || '',
          brgy_history: historyForm.value.brgy_history || brgyFiesta.value?.brgy_history || '',
          patron: historyForm.value.patron || brgyFiesta.value?.patron || '',
          date: historyForm.value.date || brgyFiesta.value?.date || ''
        };
        
        console.log('✅ Manually updated brgyFiesta.value with all fields');
        console.log('   Updated data:', JSON.stringify(brgyFiesta.value, null, 2));
      } else {
        console.log('✅ All data loaded from database successfully');
      }
      
      // Clean up blob URLs after successful save
      if (historyForm.value.brgy_images?.startsWith('blob:')) {
        URL.revokeObjectURL(historyForm.value.brgy_images)
        console.log('🧹 Cleaned up blob URL')
      }
      
      showToast('Success!', 'success', 'Barangay information saved successfully')
      closeHistoryModal()
    } catch (error) {
      console.error('❌ Error saving history:', error)
      
      // ROLLBACK: Restore previous data if save failed
      if (previousData) {
        console.log('⏪ Rolling back optimistic update due to error');
        brgyFiesta.value = previousData;
      }
      
      showToast('Save Failed', 'error', 'Failed to save information. Please try again.')
    } finally {
      savingHistory.value = false
    }
  }

  const setActiveTab = (tab) => {
    activeTab.value = tab
  }

  const goToSchools = () => {
    if (!barangayName.value) return
    router.push({ name: 'schools', params: { barangayName: barangayName.value }, query: { fromTab: activeTab.value } })
  }

  const goToChurches = () => {
    if (!barangayName.value) return
    router.push({ name: 'churches', params: { barangayName: barangayName.value }, query: { fromTab: activeTab.value } })
  }

  const goToEstablishments = () => {
    if (!barangayName.value) return
    router.push({ name: 'establishments', params: { barangayName: barangayName.value }, query: { fromTab: activeTab.value } })
  }

  const goToGovtOffices = () => {
    if (!barangayName.value) return
    router.push({ name: 'govtOffices', params: { barangayName: barangayName.value }, query: { fromTab: activeTab.value } })
  }

  // Landmark Modal Functions
  const openLandmarkModal = async (type) => {
    selectedLandmarkType.value = type
    selectedLandmarkItems.value = []
    showLandmarkModal.value = true
    
    if (!barangay_id.value) {
      console.error('No barangay ID available')
      return
    }

    try {
      if (type === 'schools') {
        // Fetch schools from the Schools table
        const { data, error } = await supabase
          .from('Schools')
          .select('schoolName, schoolAddress')
          .eq('brgy_id', barangay_id.value)
          .order('schoolName', { ascending: true })

        if (error) throw error
        
        selectedLandmarkItems.value = data.map(school => ({
          name: school.schoolName,
          address: school.schoolAddress
        }))
      } else if (type === 'churches') {
        // Fetch churches from the Church table
        const { data, error } = await supabase
          .from('Church')
          .select('churchName, churchAddress')
          .eq('brgy_id', barangay_id.value)
          .order('churchName', { ascending: true })

        if (error) throw error
        
        selectedLandmarkItems.value = data.map(church => ({
          name: church.churchName,
          address: church.churchAddress
        }))
      } else if (type === 'businesses') {
        // Fetch establishments from the Establishments table
        const { data, error } = await supabase
          .from('Establishments')
          .select('establishmentName, establishmentAddress')
          .eq('brgy_id', barangay_id.value)
          .order('establishmentName', { ascending: true })

        if (error) throw error
        
        selectedLandmarkItems.value = data.map(establishment => ({
          name: establishment.establishmentName,
          address: establishment.establishmentAddress
        }))
      } else if (type === 'govtOffices') {
        // Fetch government offices from the GovtOffices table
        const { data, error } = await supabase
          .from('GovtOffices')
          .select('brgyName, location')
          .eq('brgy_id', barangay_id.value)
          .order('brgyName', { ascending: true })

        if (error) throw error
        
        selectedLandmarkItems.value = data.map(office => ({
          name: office.brgyName,
          address: office.location
        }))
      }
    } catch (error) {
      console.error(`Error fetching ${type}:`, error)
      showToast('Load Failed', 'error', `Failed to load ${type}. Please try again.`)
    }
  }

  const closeLandmarkModal = () => {
    showLandmarkModal.value = false
    selectedLandmarkType.value = ''
    selectedLandmarkItems.value = []
  }
  </script>
