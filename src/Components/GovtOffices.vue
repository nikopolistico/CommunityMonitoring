<template>
	<div class="min-h-screen bg-linear-to-br from-[#004595]/5 via-[#ffffff] to-[#002147]/5 font-['Poppins']">    
		<div class="mx-auto max-w-none px-6 py-10 space-y-8">
			<section class="space-y-6">
				<!-- Enhanced Header Card -->
				<div class="rounded-2xl bg-linear-to-br from-[#002147] via-[#00397a] to-[#004595] p-8 shadow-2xl shadow-[#004595]/30 text-white relative overflow-hidden">
					<!-- Animated Background Elements -->
					<div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20 animate-pulse"></div>
					<div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl -ml-16 -mb-16"></div>
					<div class="relative z-10">
					<p class="text-sm uppercase tracking-widest font-semibold opacity-90">BCPS1 Monitoring System</p>
					<h1 class="text-4xl font-extrabold mt-2">Government Landmarks</h1>
					<p class="text-lg text-white/90 mt-2">All government offices in the municipality.</p>
				</div>
			</div>

			<div class="flex flex-col gap-2 md:gap-3 lg:gap-4 lg:flex-row lg:items-center">
				<!-- Add Button -->
				<button
					type="button"
					class="inline-flex items-center justify-center w-full md:w-auto gap-2 rounded-xl bg-linear-to-r from-[#002147] to-[#004595] px-4 py-3 md:py-2.5 text-xs md:text-sm font-semibold text-white hover:shadow-lg hover:shadow-[#004595]/30 hover:scale-[1.02] transition-all duration-300"
					@click="showAddModal = true"
				>
					<svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
					</svg>
					<span>Add Office</span>
				</button>

				<!-- Category Filter Dropdown -->
				<div class="relative w-full md:w-auto">
					<button
						type="button"
						@click="showCategoryDropdown = !showCategoryDropdown"
						class="w-full inline-flex items-center justify-center md:justify-start gap-2 rounded-xl border-2 border-[#004595] px-3 md:px-5 py-3 md:py-2.5 text-xs md:text-sm font-semibold text-[#004595] hover:bg-[#004595]/10 transition-all duration-300 truncate"
					>
						<svg class="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
							<path d="M3 3h18v2H3V3zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
							<polygon points="12,18 6,10 18,10" fill="currentColor"/>
						</svg>
						<span class="truncate">{{ selectedCategory || 'Filter' }}</span>
						<svg v-if="selectedCategory" class="w-3 h-3 md:w-4 md:h-4 ml-1 shrink-0" fill="currentColor" viewBox="0 0 20 20" @click.stop="selectedCategory = ''">
							<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
						</svg>
					</button>
					
					<!-- Category Dropdown Menu -->
					<div v-if="showCategoryDropdown" class="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-[#004595] rounded-xl shadow-lg z-20 w-full md:min-w-48 max-h-64 overflow-y-auto">
						<button
							v-for="category in [...new Set(items.map(item => item.category).filter(Boolean))]"
							:key="category"
							type="button"
							@click="selectedCategory = category; showCategoryDropdown = false"
							class="w-full text-left px-4 py-3 hover:bg-[#004595]/10 text-gray-700 border-b border-[#004595]/10 last:border-b-0 transition-colors text-sm"
							:class="{ 'bg-[#004595]/20 text-[#004595] font-semibold': selectedCategory === category }"
						>
							{{ category }}
						</button>
					</div>
				</div>

				<!-- Search Bar -->
				<div class="w-full md:flex-1 relative min-w-0">
						<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
						</svg>
						<input
							v-model="searchQuery"
							type="text"
							placeholder="Search..."
							class="w-full rounded-xl border-2 border-[#f3f1ee] pl-9 md:pl-10 pr-4 py-3 md:py-2.5 text-xs md:text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
						/>
					</div>

				<!-- View Toggle Buttons -->
				<div class="flex gap-1 rounded-xl border-2 border-[#004595] p-1 bg-[#004595]/5 w-full md:w-fit">
					<button
						type="button"
						@click="viewMode = 'card'"
						:class="[
							'flex-1 md:flex-initial px-2 md:px-4 py-2.5 rounded-lg font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-1 md:gap-2',
							viewMode === 'card'
								? 'bg-linear-to-r from-[#002147] to-[#004595] text-white shadow-md'
								: 'text-[#004595] hover:bg-[#004595]/10'
						]"
						title="Card view"
					>
						<svg class="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
							<path d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z"/>
						</svg>
						<span class="hidden md:inline">Cards</span>
					</button>
					<button
						type="button"
						@click="viewMode = 'table'"
						:class="[
							'flex-1 md:flex-initial px-2 md:px-4 py-2.5 rounded-lg font-semibold text-xs md:text-sm transition-all flex items-center justify-center gap-1 md:gap-2',
							viewMode === 'table'
								? 'bg-linear-to-r from-[#002147] to-[#004595] text-white shadow-md'
								: 'text-[#004595] hover:bg-[#004595]/10'
						]"
						title="Table view"
					>
						<svg class="w-4 h-4 md:w-5 md:h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM4 15a2 2 0 100 4h12a2 2 0 100-4H4z" clip-rule="evenodd"/>
						</svg>
						<span class="hidden md:inline">Table</span>
					</button>
				</div>
			</div>

			<!-- Card View -->
			<div v-if="viewMode === 'card'">
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div v-if="loading" class="col-span-full text-center py-16">
						<div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#004595] border-t-transparent"></div>
						<p class="mt-4 text-gray-600 font-medium">Loading government offices...</p>
					</div>

					<div v-else-if="filteredItems.length === 0" class="col-span-full text-center py-16">
						<div class="inline-block p-4 bg-gray-100 rounded-full mb-4">
							<svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
							</svg>
						</div>
						<p class="text-gray-600 font-medium">{{ searchQuery ? 'No government offices found matching your search.' : 'No government offices yet. Add one to get started!' }}</p>
					</div>
					
					<article
						v-for="(item, index) in filteredItems"
						:key="item.id || index"
						class="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#004595]/10 hover:border-[#004595]/30 transform hover:-translate-y-1"
					>
						<!-- Office Image -->
						<div v-if="item.officeImage" class="w-full h-56 overflow-hidden bg-gray-50">
							<img :src="item.officeImage" :alt="item.governmentName" class="w-full h-full object-cover" />
						</div>
						<div v-else class="w-full h-56 bg-linear-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center relative overflow-hidden">
							<div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
							<svg class="w-20 h-20 text-white/50 relative z-10" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
							</svg>
						</div>

						<div class="p-5">
							<!-- Editing Mode (Hidden - Using Modal Instead) -->
							<div v-if="false" class="space-y-3">
								<!-- Photo Upload Section -->
								<div class="flex flex-col items-center mb-3">
									<div class="relative group">
										<div class="w-24 h-24 rounded-xl overflow-hidden border-2 border-[#004595]/20 shadow-md">
											<img 
												v-if="editImagePreview || item.officeImage" 
												:src="editImagePreview || item.officeImage" 
												alt="Office Photo"
												class="w-full h-full object-cover"
											/>
							<div v-else class="w-full h-full bg-linear-to-br from-[#002147] to-[#004595] flex items-center justify-center">
												<svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
													<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
												</svg>
											</div>
										</div>
										
										<!-- Upload Button Overlay -->
										<button
											type="button"
											@click="$refs[`editPhotoInput_${item.id}`][0]?.click()"
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
											</div>
										</button>
										<input
											:ref="`editPhotoInput_${item.id}`"
											type="file"
											accept="image/*"
											@change="handleEditImageChange($event, item.id)"
											class="hidden"
										/>
									</div>
									<p class="text-[9px] text-[#004595] mt-1.5 text-center">Click photo to update</p>
								</div>

								<input
									v-model="editingName"
									type="text"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm font-semibold"
									placeholder="Office name"
								/>
								<input
									v-model="editingLocation"
									type="text"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
									placeholder="Location"
								/>
								<div class="flex gap-2 pt-2">
									<button
										type="button"
										@click="saveEdit"
										class="flex-1 rounded-lg bg-linear-to-r from-[#002147] to-[#004595] px-3 py-2 text-xs font-semibold text-white hover:shadow-lg transition-all"
									>
										Save
									</button>
									<button
										type="button"
										@click="cancelEdit"
										class="rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-xs font-semibold text-[#004595] hover:bg-[#f3f1ee] transition-all"
									>
										Cancel
									</button>
								</div>
							</div>
							<!-- View Mode -->
							<div class="space-y-3">
								<h2 class="text-xl font-bold text-[#002147]">{{ item.governmentName }}</h2>							
							<!-- Category Badge -->
							<div v-if="item.category" class="flex items-center gap-2">
								<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#004595]/10 text-[#004595]">
									{{ item.category }}
								</span>
							</div>
															<div class="space-y-1.5 text-sm text-gray-600">
									<div class="flex items-start gap-2">
										<svg class="w-4 h-4 text-[#004595]/60 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
										</svg>
										<p class="text-sm text-gray-600 flex-1">{{ item.location || 'No location provided' }}</p>
									</div>
								</div>
								<div class="flex flex-wrap gap-2 pt-2">								<!-- View Button -->
								<button
									type="button"
									@click="openViewModal(item)"
									class="flex-1 rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-[#004595] hover:bg-[#f3f1ee] hover:border-[#004595] transition-all"
									title="View details"
								>
									<svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
									</svg>
								</button>
								<!-- Edit Button -->									<button
										type="button"
										@click="startEdit(item.id)"
										class="flex-1 rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-[#004595] hover:bg-[#f3f1ee] hover:border-[#004595] transition-all"
										title="Edit office"
									>
										<svg class="w-4 h-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
										</svg>
									</button>
									<button
										type="button"
										@click="openDelete(item.id)"
										class="rounded-lg bg-red-50 px-3 py-2 text-red-600 border border-red-200 hover:bg-red-100 transition-all"
										title="Delete office"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</article>
				</div>
			</div>

			<!-- Table View -->
			<div v-else-if="viewMode === 'table'" class="w-full overflow-x-auto rounded-2xl border border-[#004595]/10 shadow-lg">
				<div v-if="loading" class="col-span-full text-center py-16">
					<div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#004595] border-t-transparent"></div>
					<p class="mt-4 text-gray-600 font-medium">Loading government offices...</p>
				</div>

				<div v-else-if="filteredItems.length === 0" class="col-span-full text-center py-16">
					<div class="inline-block p-4 bg-gray-100 rounded-full mb-4">
						<svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
						</svg>
					</div>
					<p class="text-gray-600 font-medium">{{ searchQuery ? 'No government offices found matching your search.' : 'No government offices yet.' }}</p>
				</div>

				<table v-else class="w-full">
					<thead class="bg-linear-to-r from-[#002147] to-[#004595] text-white sticky top-0">
						<tr>
							<th class="px-4 py-3 text-left text-sm font-semibold">Office Name</th>
							<th class="px-4 py-3 text-left text-sm font-semibold hidden sm:table-cell">Category</th>
							<th class="px-4 py-3 text-left text-sm font-semibold hidden md:table-cell">Location</th>
							<th class="px-4 py-3 text-center text-sm font-semibold">Actions</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-[#004595]/10">
						<tr v-for="(item, index) in filteredItems" :key="item.id || index" class="hover:bg-[#004595]/5 transition-colors">
							<td class="px-4 py-3 text-sm font-semibold text-[#002147]">
								<div class="flex items-center gap-2">
									<div v-if="item.officeImage" class="w-8 h-8 rounded overflow-hidden flex-shrink-0">
										<img :src="item.officeImage" :alt="item.governmentName" class="w-full h-full object-cover" />
									</div>
									<div v-else class="w-8 h-8 rounded bg-linear-to-br from-[#002147] to-[#004595] flex items-center justify-center flex-shrink-0">
										<svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4z" clip-rule="evenodd"/>
										</svg>
									</div>
									<span class="truncate">{{ item.governmentName }}</span>
								</div>
							</td>
							<td class="px-4 py-3 text-sm text-gray-600 hidden sm:table-cell">
								<span v-if="item.category" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#004595]/10 text-[#004595]">
									{{ item.category }}
								</span>
								<span v-else class="text-gray-400">—</span>
							</td>
							<td class="px-4 py-3 text-sm text-gray-600 hidden md:table-cell truncate">
								{{ item.location || '—' }}
							</td>
							<td class="px-4 py-3">
								<div class="flex items-center justify-center gap-2">
									<button
										type="button"
										@click="openViewModal(item)"
										class="p-1.5 rounded-lg text-[#004595] hover:bg-[#004595]/10 transition-colors"
										title="View details"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
									</button>
									<button
										type="button"
										@click="startEdit(item.id)"
										class="p-1.5 rounded-lg text-[#004595] hover:bg-[#004595]/10 transition-colors"
										title="Edit office"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
										</svg>
									</button>
									<button
										type="button"
										@click="openDelete(item.id)"
										class="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
										title="Delete office"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
										</svg>
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>

			</section>

			<!-- Add Office Modal -->
			<div v-if="showAddModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeAddModal">
				<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all">
					<!-- Modal Header -->
					<div class="bg-linear-to-r from-[#002147] to-[#004595] px-6 py-4 sticky top-0 z-10">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="p-2 bg-white/20 rounded-lg">
									<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
									</svg>
								</div>
								<h3 class="text-lg font-bold text-white">Add Government Office</h3>
							</div>
							<button
								type="button"
								@click="closeAddModal"
								class="p-1.5 hover:bg-white/20 rounded-lg transition-all"
							>
								<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
								</svg>
							</button>
						</div>
					</div>
					
					<!-- Modal Body -->
					<form @submit.prevent="addItem" class="p-6">
						<div class="space-y-4">
							<!-- Photo Upload Section -->
							<div class="flex flex-col items-center">
								<div class="relative group">
									<div class="w-32 h-32 rounded-xl overflow-hidden border-2 border-[#004595]/20 shadow-md">
										<img 
											v-if="newImagePreview" 
											:src="newImagePreview" 
											alt="Office Preview"
											class="w-full h-full object-cover"
										/>
										<div v-else class="w-full h-full bg-linear-to-br from-[#002147] to-[#004595] flex items-center justify-center">
											<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
											</svg>
										</div>
									</div>
									
									<!-- Upload Button -->
									<button
										type="button"
										@click="$refs.newPhotoInput?.click()"
										:disabled="uploadingPhoto"
										class="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-50"
									>
										<div class="text-center">
											<svg v-if="!uploadingPhoto" class="w-6 h-6 text-white mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
												<path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.413V13H5.5z"/>
											</svg>
											<div v-else class="w-6 h-6 mx-auto">
												<svg class="animate-spin text-white" fill="none" viewBox="0 0 24 24">
													<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
													<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
												</svg>
											</div>
											<span v-if="!uploadingPhoto" class="text-white text-xs font-bold">Upload Photo</span>
											<span v-else class="text-white text-xs font-bold">Uploading...</span>
										</div>
									</button>
									<input
										ref="newPhotoInput"
										type="file"
										accept="image/*"
										@change="handleNewImageChange"
										class="hidden"
									/>
								</div>
								<p class="text-xs text-[#004595] mt-2 text-center">Click to upload office photo</p>
							</div>

							<div>							<label class="block text-xs font-semibold text-[#004595] mb-1.5">Category <span class="text-red-500">*</span></label>
							<div class="relative">
								<input
									v-model="newCategory"
									type="text"
									placeholder="e.g., City Hall, Healthcare, Education"
									@focus="showCategoryDropdown = true"
									@blur="setTimeout(() => showCategoryDropdown = false, 200)"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
									required
								/>
								<div v-if="showCategoryDropdown && filteredCategories.length > 0" class="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#004595] rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
									<button
										v-for="category in filteredCategories"
										:key="category"
										type="button"
										@click="newCategory = category; showCategoryDropdown = false"
										class="w-full text-left px-3 py-2 hover:bg-[#004595]/10 text-sm text-gray-700 transition-colors"
									>
										{{ category }}
									</button>
								</div>
							</div>
						</div>

						<div>								<label class="block text-xs font-semibold text-[#004595] mb-1.5">Office Name <span class="text-red-500">*</span></label>
								<input
									v-model="newName"
									type="text"
									placeholder="e.g., Barangay Hall"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
									required
								/>
							</div>

							<div>
								<label class="block text-xs font-semibold text-[#004595] mb-1.5">Location</label>
								<input
									v-model="newLocation"
									type="text"
									placeholder="e.g., Main St., Butuan City"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
								/>
							</div>
						</div>

						<div class="flex gap-3 mt-6">
							<button
								type="submit"
								:disabled="loading || !newName"
								class="flex-1 rounded-xl bg-linear-to-r from-[#002147] to-[#004595] px-4 py-2.5 text-sm font-semibold text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{{ loading ? 'Adding...' : 'Add Office' }}
							</button>
							<button
								type="button"
								@click="closeAddModal"
								class="rounded-xl border-2 border-[#f3f1ee] px-4 py-2.5 text-sm font-semibold text-[#004595] hover:bg-[#f3f1ee] transition-all"
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>

			<!-- View Details Modal -->
			<div v-if="showViewModal && viewingItem" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeViewModal">
				<div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto transform transition-all">
					<!-- Modal Header -->
					<div class="bg-linear-to-r from-[#002147] to-[#004595] px-8 py-6 sticky top-0 z-10 flex items-center justify-between">
						<h2 class="text-2xl font-bold text-white">{{ viewingItem.governmentName }}</h2>
						<button
							type="button"
							@click="closeViewModal"
							class="p-2 hover:bg-white/20 rounded-lg transition-all"
						>
							<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
							</svg>
						</button>
					</div>

					<!-- Modal Content -->
					<div class="p-8">
						<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<!-- Image Section -->
							<div>
								<div v-if="viewingItem.officeImage" class="rounded-xl overflow-hidden shadow-lg h-64 lg:h-96">
									<img :src="viewingItem.officeImage" :alt="viewingItem.governmentName" class="w-full h-full object-cover" />
								</div>
								<div v-else class="rounded-xl bg-linear-to-br from-[#002147] to-[#004595] flex items-center justify-center h-64 lg:h-96 shadow-lg">
									<svg class="w-24 h-24 text-white/50" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
									</svg>
								</div>
							</div>

							<!-- Details Section -->
							<div class="space-y-6">
								<div>
									<label class="block text-sm font-semibold text-[#004595] mb-2">Office Name</label>
									<p class="text-2xl font-bold text-[#002147]">{{ viewingItem.governmentName }}</p>
								</div>

								<div>
									<label class="block text-sm font-semibold text-[#004595] mb-2">Location</label>
									<div class="flex items-start gap-3">
										<svg class="w-5 h-5 text-[#004595] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
										</svg>
										<p class="text-lg text-gray-700">{{ viewingItem.location || 'No location provided' }}</p>
									</div>
								</div>

								<div v-if="viewingItem.category">
									<label class="block text-sm font-semibold text-[#004595] mb-2">Category</label>
									<span class="inline-block bg-linear-to-r from-[#002147] to-[#004595] text-white px-4 py-2 rounded-full text-sm font-semibold">{{ viewingItem.category }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Edit Modal -->
			<div v-if="showEditModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeEditModal">
				<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all">
					<!-- Modal Header -->
					<div class="bg-linear-to-r from-[#002147] to-[#004595] px-6 py-4 sticky top-0 z-10">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="p-2 bg-white/20 rounded-lg">
									<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" clip-rule="evenodd"/>
									</svg>
								</div>
								<h3 class="text-lg font-bold text-white">Edit Government Office</h3>
							</div>
							<button
								type="button"
								@click="closeEditModal"
								class="p-1.5 hover:bg-white/20 rounded-lg transition-all"
							>
								<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
								</svg>
							</button>
						</div>
					</div>
					
					<!-- Modal Body -->
					<form @submit.prevent="saveEdit" class="p-6">
						<div class="space-y-4">
							<!-- Photo Upload Section -->
							<div class="flex flex-col items-center">
								<div class="relative group">
									<div class="w-32 h-32 rounded-xl overflow-hidden border-2 border-[#004595]/20 shadow-md">
										<img 
											v-if="editImagePreview" 
											:src="editImagePreview" 
											alt="Office Preview"
											class="w-full h-full object-cover"
										/>
										<div v-else class="w-full h-full bg-linear-to-br from-[#002147] to-[#004595] flex items-center justify-center">
											<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clip-rule="evenodd"/>
											</svg>
										</div>
									</div>
									
									<!-- Upload Button Overlay -->
									<button
										type="button"
										@click="$refs.editPhotoInput?.click()"
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
										</div>
									</button>
									<input
										ref="editPhotoInput"
										type="file"
										accept="image/*"
										@change="handleEditImageChange"
										class="hidden"
									/>
								</div>
								<p class="text-[9px] text-[#004595] mt-2 text-center">Click to update office photo</p>
							</div>

							<div>							<label class="block text-xs font-semibold text-[#004595] mb-1.5">Category</label>
							<div class="relative">
								<input
									v-model="editingCategory"
									type="text"
									placeholder="e.g., City Hall, Healthcare, Education"
									@focus="showEditCategoryDropdown = true"
									@blur="setTimeout(() => showEditCategoryDropdown = false, 200)"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
								/>
								<div v-if="showEditCategoryDropdown && filteredEditCategories.length > 0" class="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#004595] rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
									<button
										v-for="category in filteredEditCategories"
										:key="category"
										type="button"
										@click="editingCategory = category; showEditCategoryDropdown = false"
										class="w-full text-left px-3 py-2 hover:bg-[#004595]/10 text-sm text-gray-700 transition-colors"
									>
										{{ category }}
									</button>
								</div>
							</div>
						</div>

						<div>								<label class="block text-xs font-semibold text-[#004595] mb-1.5">Office Name <span class="text-red-500">*</span></label>
								<input
									v-model="editingName"
									type="text"
									placeholder="e.g., City Hall"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
									required
								/>
							</div>

							<div>
								<label class="block text-xs font-semibold text-[#004595] mb-1.5">Location</label>
								<input
									v-model="editingLocation"
									type="text"
									placeholder="e.g., Main St., Butuan City"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
								/>
							</div>
						</div>

						<div class="flex gap-3 mt-6">
							<button
								type="button"
								@click="closeEditModal"
								class="flex-1 rounded-xl border-2 border-[#f3f1ee] px-4 py-2.5 text-sm font-semibold text-[#004595] hover:bg-[#f3f1ee] transition-all"
							>
								Cancel
							</button>
							<button
								type="submit"
								:disabled="loading"
								class="flex-1 rounded-xl bg-linear-to-r from-[#002147] to-[#004595] px-4 py-2.5 text-sm font-semibold text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{{ loading ? 'Saving...' : 'Save Changes' }}
							</button>
						</div>
					</form>
				</div>
			</div>

			<!-- Delete Confirmation Modal -->
			<div v-if="showDeleteModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="showDeleteModal = false">
				<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 transform transition-all">
					<div class="flex items-center gap-4 mb-4">
						<div class="shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
							<svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-bold text-gray-900">Delete Office</h3>
							<p class="text-sm text-gray-600 mt-1">Are you sure you want to delete this government office?</p>
						</div>
					</div>
					<div class="flex gap-3">
						<button
							type="button"
							@click="confirmDelete"
							:disabled="loading"
							class="flex-1 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition-all disabled:opacity-50"
						>
							{{ loading ? 'Deleting...' : 'Delete' }}
						</button>
						<button
							type="button"
							@click="showDeleteModal = false"
							class="flex-1 rounded-xl border-2 border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all"
						>
							Cancel
						</button>
					</div>
				</div>
			</div>

			<!-- Toast Notification -->
			<Transition
				enter-active-class="transition-all duration-300 ease-out"
				enter-from-class="translate-y-[-100%] opacity-0"
				enter-to-class="translate-y-0 opacity-100"
				leave-active-class="transition-all duration-200 ease-in"
				leave-from-class="translate-y-0 opacity-100"
				leave-to-class="translate-y-[-100%] opacity-0"
			>
				<div v-if="toast.show" class="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 z-100000">
					<div class="rounded-2xl shadow-2xl overflow-hidden" :class="{
						'bg-linear-to-r from-[#004595] to-blue-600': toast.type === 'success',
						'bg-linear-to-r from-red-500 to-rose-600': toast.type === 'error',
						'bg-linear-to-r from-yellow-500 to-amber-600': toast.type === 'warning',
						'bg-linear-to-r from-blue-500 to-indigo-600': toast.type === 'info'
					}">
						<div class="p-4 flex items-start gap-3">
							<div class="shrink-0 mt-0.5">
								<svg v-if="toast.type === 'success'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
								</svg>
								<svg v-else-if="toast.type === 'error'" class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
								</svg>
							</div>
							<div class="flex-1 pt-0.5">
								<p class="font-bold text-white text-sm leading-tight">{{ toast.message }}</p>
								<p v-if="toast.description" class="text-white/90 text-xs mt-1 leading-snug">{{ toast.description }}</p>
							</div>
							<button @click="hideToast" class="shrink-0 ml-2 p-1 hover:bg-white/20 rounded-lg transition-colors">
								<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
								</svg>
							</button>
						</div>
						<div class="h-1 bg-white/30">
							<div class="h-full bg-white transition-all duration-5000 ease-linear" :style="{ width: toast.progress + '%' }"></div>
						</div>
					</div>
				</div>
			</Transition>
		</div>
	</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

const items = ref([])
const loading = ref(false)
const searchQuery = ref('')
const selectedCategory = ref('')
const viewMode = ref('card') // 'card' or 'table'


const showAddModal = ref(false)
const newName = ref('')
const newLocation = ref('')
const newCategory = ref('')
const showCategoryDropdown = ref(false)
const newImagePreview = ref('')
const newImageFile = ref(null)

const editingId = ref(null)
const editingName = ref('')
const editingLocation = ref('')
const editingCategory = ref('')
const showEditCategoryDropdown = ref(false)
const editImagePreview = ref('')
const editImageFile = ref(null)
const showEditModal = ref(false)

const showViewModal = ref(false)
const viewingItem = ref(null)

const uploadingPhoto = ref(false)

const showDeleteModal = ref(false)
const itemToDelete = ref(null)

const toast = ref({
	show: false,
	message: '',
	description: '',
	type: 'success',
	progress: 100
})

let toastTimeout = null
let progressInterval = null

const filteredItems = computed(() => {
	let result = items.value
	
	// Filter by selected category
	if (selectedCategory.value) {
		result = result.filter(item => item.category === selectedCategory.value)
	}
	
	// Filter by search query
	if (searchQuery.value) {
		const query = searchQuery.value.toLowerCase()
		result = result.filter(item =>
			item.governmentName?.toLowerCase().includes(query) ||
			item.location?.toLowerCase().includes(query)
		)
	}
	
	return result
})

const filteredCategories = computed(() => {
	const uniqueCategories = [...new Set(items.value.map(item => item.category).filter(Boolean))]
	if (!newCategory.value.trim()) return uniqueCategories
	const query = newCategory.value.toLowerCase()
	return uniqueCategories.filter(cat => cat.toLowerCase().includes(query))
})

const filteredEditCategories = computed(() => {
	const uniqueCategories = [...new Set(items.value.map(item => item.category).filter(Boolean))]
	if (!editingCategory.value.trim()) return uniqueCategories
	const query = editingCategory.value.toLowerCase()
	return uniqueCategories.filter(cat => cat.toLowerCase().includes(query))
})

const showToast = (message, type = 'success', description = '') => {
	if (toastTimeout) clearTimeout(toastTimeout)
	if (progressInterval) clearInterval(progressInterval)
	
	toast.value = {
		show: true,
		message,
		type,
		description,
		progress: 100
	}
	
	const duration = 5000
	const intervalTime = 50
	const decrement = (intervalTime / duration) * 100
	
	progressInterval = setInterval(() => {
		toast.value.progress -= decrement
		if (toast.value.progress <= 0) {
			clearInterval(progressInterval)
			toast.value.show = false
		}
	}, intervalTime)
	
	toastTimeout = setTimeout(() => {
		toast.value.show = false
		clearInterval(progressInterval)
	}, duration)
}

const hideToast = () => {
	if (toastTimeout) clearTimeout(toastTimeout)
	if (progressInterval) clearInterval(progressInterval)
	toast.value.show = false
}

// Image Upload Handlers
const handleNewImageChange = async (event) => {
	const file = event.target.files?.[0]
	if (!file) return

	// Validate file type
	if (!file.type.startsWith('image/')) {
		showToast('Please select an image file', 'error')
		return
	}

	// Validate file size (max 5MB)
	if (file.size > 5 * 1024 * 1024) {
		showToast('Image size must be less than 5MB', 'error')
		return
	}

	newImageFile.value = file
	
	// Create preview
	const reader = new FileReader()
	reader.onload = (e) => {
		newImagePreview.value = e.target?.result
	}
	reader.readAsDataURL(file)
}

const handleEditImageChange = async (event) => {
	const file = event.target.files?.[0]
	if (!file) return

	// Validate file type
	if (!file.type.startsWith('image/')) {
		showToast('Please select an image file', 'error')
		return
	}

	// Validate file size (max 5MB)
	if (file.size > 5 * 1024 * 1024) {
		showToast('Image size must be less than 5MB', 'error')
		return
	}

	editImageFile.value = file
	
	// Create preview
	const reader = new FileReader()
	reader.onload = (e) => {
		editImagePreview.value = e.target?.result
	}
	reader.readAsDataURL(file)
}

const uploadImage = async (file) => {
	if (!file) return null

	const fileExt = file.name.split('.').pop()
	const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`
	const filePath = `govt-offices/${fileName}`

	const { data, error } = await supabase.storage
		.from('Government')
		.upload(filePath, file)

	if (error) {
		console.error('Error uploading image:', error)
		throw error
	}

	const { data: { publicUrl } } = supabase.storage
		.from('Government')
		.getPublicUrl(filePath)

	return publicUrl
}

const fetchItems = async () => {
	loading.value = true
	
	try {
		const { data, error } = await supabase
			.from('GovtOffices')
			.select('*')
			.order('governmentName', { ascending: true })

		if (error) throw error
		items.value = data || []
	} catch (error) {
		console.error('Error fetching government offices:', error)
		showToast('Failed to load government offices', 'error')
	} finally {
		loading.value = false
	}
}

const addItem = async () => {
	if (!newName.value.trim()) {
		showToast('Please enter office name', 'warning')
		return
	}

	loading.value = true
	uploadingPhoto.value = true
	try {
		let imageUrl = null
		
		// Upload image if selected
		if (newImageFile.value) {
			imageUrl = await uploadImage(newImageFile.value)
		}

		const { data, error } = await supabase
			.from('GovtOffices')
			.insert([{
				governmentName: newName.value,
				location: newLocation.value,
				category: newCategory.value,
				officeImage: imageUrl
			}])
			.select()

		if (error) throw error
		
		items.value.push(data[0])
		showToast('Government office added successfully', 'success')
		closeAddModal()
	} catch (error) {
		console.error('Error adding office:', error)
		showToast('Failed to add government office', 'error')
	} finally {
		loading.value = false
		uploadingPhoto.value = false
	}
}

const closeAddModal = () => {
	showAddModal.value = false
	newName.value = ''
	newLocation.value = ''
	newCategory.value = ''
	newImagePreview.value = ''
	newImageFile.value = null
}

const startEdit = (id) => {
	const item = items.value.find(i => i.id === id)
	if (item) {
		editingId.value = id
		editingName.value = item.governmentName
		editingLocation.value = item.location || ''
		editingCategory.value = item.category || ''
		editImagePreview.value = item.officeImage || ''
		editImageFile.value = null
		showEditModal.value = true
	}
}

const closeEditModal = () => {
	showEditModal.value = false
	editingId.value = null
	editingName.value = ''
	editingLocation.value = ''
	editingCategory.value = ''
	editImagePreview.value = ''
	editImageFile.value = null
}

const saveEdit = async () => {
	if (!editingName.value.trim()) {
		showToast('Please enter office name', 'warning')
		return
	}

	loading.value = true
	uploadingPhoto.value = true
	try {
		let imageUrl = null
		
		// Upload new image if selected
		if (editImageFile.value) {
			imageUrl = await uploadImage(editImageFile.value)
		}

		const updateData = {
			governmentName: editingName.value,
			location: editingLocation.value,
			category: editingCategory.value
		}
		
		// Only update image if new one was uploaded
		if (imageUrl) {
			updateData.officeImage = imageUrl
		}

		const { error } = await supabase
			.from('GovtOffices')
			.update(updateData)
			.eq('id', editingId.value)

		if (error) throw error

		const index = items.value.findIndex(i => i.id === editingId.value)
		if (index !== -1) {
			items.value[index].governmentName = editingName.value
			items.value[index].location = editingLocation.value
			items.value[index].category = editingCategory.value
			if (imageUrl) {
				items.value[index].officeImage = imageUrl
			}
		}

		showToast('Government office updated successfully', 'success')
		cancelEdit()
	} catch (error) {
		console.error('Error updating office:', error)
		showToast('Failed to update government office', 'error')
	} finally {
		loading.value = false
		uploadingPhoto.value = false
	}
}

const cancelEdit = () => {
	closeEditModal()
}

const openViewModal = (item) => {
	viewingItem.value = item
	showViewModal.value = true
}

const closeViewModal = () => {
	showViewModal.value = false
	viewingItem.value = null
}

const openDelete = (id) => {
	itemToDelete.value = id
	showDeleteModal.value = true
}

const confirmDelete = async () => {
	if (!itemToDelete.value) return

	loading.value = true
	try {
		const { error } = await supabase
			.from('GovtOffices')
			.delete()
			.eq('id', itemToDelete.value)

		if (error) throw error

		items.value = items.value.filter(i => i.id !== itemToDelete.value)
		showToast('Government office deleted successfully', 'success')
		showDeleteModal.value = false
		itemToDelete.value = null
	} catch (error) {
		console.error('Error deleting office:', error)
		showToast('Failed to delete government office', 'error')
	} finally {
		loading.value = false
	}
}

onMounted(async () => {
	await fetchItems()
})
</script>
