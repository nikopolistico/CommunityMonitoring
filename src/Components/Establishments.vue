<template>
	<div class="min-h-screen bg-gradient-to-br from-[#004595]/5 via-[#ffffff] to-[#00397a]/5 font-['Poppins']">
		<div class="mx-auto max-w-none px-6 py-10 space-y-8">
			<button
				type="button"
				class="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#002147] via-[#00397a] to-[#004595] px-6 py-3.5 text-sm font-semibold text-white hover:shadow-xl hover:shadow-[#004595]/20 hover:scale-[1.02] transition-all duration-300"
				@click="goBack"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
				</svg>
				<span class="tracking-wide">Back to Community</span>
			</button>

			<section v-if="communityInfo" class="space-y-6">
				<!-- Enhanced Header Card -->
				<div class="rounded-2xl bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] p-8 shadow-2xl shadow-[#004595]/30 text-white relative overflow-hidden">
					<!-- Animated Background Elements -->
					<div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20 animate-pulse"></div>
					<div class="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl -ml-16 -mb-16"></div>
					<div class="relative z-10">
						<p class="text-sm uppercase tracking-widest font-semibold opacity-90">Establishments</p>
						<h1 class="text-4xl font-extrabold mt-2">{{ communityInfo.name }}</h1>
						<p class="text-lg text-white/90 mt-2">Businesses and key establishments in this barangay.</p>
					</div>
				</div>

				<div class="flex gap-3">
					<!-- Add Button -->
					<button
						type="button"
						class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#002147] to-[#00397a] px-5 py-2.5 text-sm font-semibold text-white hover:shadow-lg hover:shadow-[#004595]/30 hover:scale-[1.02] transition-all duration-300"
						@click="showAddModal = true"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd"/>
						</svg>
						Add Establishment
					</button>

					<!-- Search Bar -->
					<div class="flex-1 relative">
						<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
						</svg>
						<input
							v-model="searchQuery"
							type="text"
							placeholder="Search establishments..."
							class="w-full rounded-xl border-2 border-[#f3f1ee] pl-10 pr-4 py-2.5 focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
						/>
					</div>
				</div>

				<!-- Establishments Grid -->
				<!-- Establishments Grid -->
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div v-if="loading" class="col-span-full text-center py-16">
						<div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#004595] border-t-transparent"></div>
						<p class="mt-4 text-gray-600 font-medium">Loading establishments...</p>
					</div>

					<div v-else-if="filteredItems.length === 0" class="col-span-full text-center py-16">
						<div class="inline-block p-4 bg-gray-100 rounded-full mb-4">
							<svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
							</svg>
						</div>
						<p class="text-gray-600 font-medium">{{ searchQuery ? 'No establishments found matching your search.' : 'No establishments yet. Add one to get started!' }}</p>
					</div>
					
					<article
						v-for="(item, index) in filteredItems"
						:key="item.id || index"
						class="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#004595]/10 hover:border-[#004595]/30 transform hover:-translate-y-1"
					>
						<!-- Establishment Image -->
						<div v-if="item.establishmentImages" class="w-full h-56 overflow-hidden bg-gray-50">
							<img :src="item.establishmentImages" :alt="item.establishmentName" class="w-full h-full object-cover" />
						</div>
						<div v-else class="w-full h-56 bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center relative overflow-hidden">
							<div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
							<svg class="w-20 h-20 text-white/50 relative z-10" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
							</svg>
						</div>

						<div class="p-5">
							<!-- Editing Mode -->
							<div v-if="editingId === item.id" class="space-y-3">
								<!-- Photo Upload Section -->
								<div class="flex flex-col items-center mb-3">
									<div class="relative group">
										<div class="w-24 h-24 rounded-xl overflow-hidden border-2 border-[#004595]/20 shadow-md">
											<img 
												v-if="editImagePreview || item.establishmentImages" 
												:src="editImagePreview || item.establishmentImages" 
												alt="Establishment Photo"
												class="w-full h-full object-cover"
											/>
											<div v-else class="w-full h-full bg-gradient-to-br from-[#002147] to-[#004595] flex items-center justify-center">
												<svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
													<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
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
									<p class="text-[9px] text-[#00397a] mt-1.5 text-center">Click photo to update</p>
								</div>

								<input
									v-model="editingName"
									type="text"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm font-semibold"
									placeholder="Establishment name"
								/>
								<input
									v-model="editingAddress"
									type="text"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
									placeholder="Establishment address"
								/>
								<input
									v-model="editingContactNumber"
									type="text"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
									placeholder="Contact number"
								/>
								<div class="grid gap-3 md:grid-cols-2">
									<div class="space-y-2">
										<p class="text-xs font-semibold text-gray-500 uppercase">Owner Details</p>
										<input
											v-model="editingOwnerName"
											type="text"
											class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-xs"
											placeholder="Owner full name"
										/>
										<input
											v-model="editingOwnerContact"
											type="text"
											class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-xs"
											placeholder="Owner contact"
										/>
										<input
											v-model="editingOwnerEmail"
											type="text"
											class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-xs"
											placeholder="Owner email"
										/>
									</div>
									<div class="space-y-2">
										<p class="text-xs font-semibold text-gray-500 uppercase">Manager Details</p>
										<input
											v-model="editingManagerName"
											type="text"
											class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-xs"
											placeholder="Manager full name"
										/>
										<input
											v-model="editingManagerContact"
											type="text"
											class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-xs"
											placeholder="Manager contact"
										/>
										<input
											v-model="editingManagerEmail"
											type="text"
											class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-xs"
											placeholder="Manager email"
										/>
									</div>
								</div>
								<div class="flex gap-2 pt-2">
									<button
										type="button"
										class="flex-1 px-4 py-2 bg-gradient-to-r from-[#002147] to-[#00397a] text-white rounded-lg hover:shadow-lg transition-all font-semibold text-sm disabled:opacity-50"
										@click="saveEdit"
										:disabled="uploadingPhoto"
									>
										{{ uploadingPhoto ? 'Uploading...' : 'Save' }}
									</button>
									<button
										type="button"
										class="px-4 py-2 border-2 border-[#f3f1ee] text-[#002147] rounded-lg hover:bg-[#f3f1ee] transition-all font-semibold text-sm"
										@click="cancelEdit"
									>
										Cancel
									</button>
								</div>
							</div>

							<!-- View Mode -->
							<div v-else class="space-y-3">
								<h2 class="text-xl font-bold text-[#002147]">{{ item.establishmentName }}</h2>
								<div class="space-y-1.5 text-sm text-gray-600">
									<div class="flex items-start gap-2">
										<svg class="w-4 h-4 text-[#004595] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
										</svg>
										<p>{{ item.establishmentAddress || 'No address provided' }}</p>
									</div>
									<div v-if="item.contactNumber" class="flex items-center gap-2">
										<svg class="w-4 h-4 text-[#004595] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
										</svg>
										<p>{{ item.contactNumber }}</p>
									</div>
								</div>
								<div class="flex flex-wrap gap-2 pt-2">
									<button
										type="button"
										class="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#002147] to-[#00397a] px-4 py-2 text-white hover:shadow-lg transition-all font-semibold text-sm"
										@click="openDetails(item)"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
										View
									</button>
									<button
										type="button"
										class="inline-flex items-center justify-center rounded-lg bg-white p-2 text-[#004595] border-2 border-[#004595]/20 hover:bg-[#004595]/10 hover:border-[#004595]/40 transition-all"
										@click="startEdit(item.id)"
										title="Edit establishment"
									>
										<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
										</svg>
									</button>
									<button
										type="button"
										class="inline-flex items-center justify-center rounded-lg bg-red-50 p-2 text-red-600 border-2 border-red-200 hover:bg-red-100 hover:border-red-300 transition-all"
										@click="openDelete(item.id)"
										title="Delete establishment"
									>
										<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
										</svg>
									</button>
								</div>
							</div>
						</div>
					</article>
				</div>

			<!-- Add Establishment Modal -->
			<div v-if="showAddModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeAddModal">
				<div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all">
					<!-- Modal Header -->
					<div class="bg-gradient-to-r from-[#002147] to-[#00397a] px-6 py-4 sticky top-0 z-10">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="p-2 bg-white/20 rounded-lg">
									<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
									</svg>
								</div>
								<h3 class="text-lg font-bold text-white">Add New Establishment</h3>
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
											v-if="imagePreview" 
											:src="imagePreview" 
											alt="Establishment Photo"
											class="w-full h-full object-cover"
										/>
										<div v-else class="w-full h-full bg-gradient-to-br from-[#002147] to-[#004595] flex items-center justify-center">
											<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
												<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
											</svg>
										</div>
									</div>
									
									<!-- Upload Button Overlay -->
									<button
										type="button"
										@click="$refs.addPhotoInput?.click()"
										:disabled="uploadingPhoto"
										class="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-50"
									>
										<div class="text-center">
											<svg v-if="!uploadingPhoto" class="w-6 h-6 text-white mx-auto" fill="currentColor" viewBox="0 0 20 20">
												<path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.413V13H5.5z"/>
											</svg>
											<div v-else class="w-6 h-6 mx-auto">
												<svg class="animate-spin text-white" fill="none" viewBox="0 0 24 24">
													<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
													<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
												</svg>
											</div>
										</div>
									</button>
									<input
										ref="addPhotoInput"
										type="file"
										accept="image/*"
										@change="handleImageChange"
										class="hidden"
									/>
								</div>
								<p class="text-xs text-[#00397a] mt-2 text-center">Click photo to upload (Max 5MB)</p>
							</div>

							<!-- Basic Information -->
							<div class="space-y-3">
								<h4 class="text-sm font-bold text-[#002147] uppercase tracking-wide border-b border-[#004595]/20 pb-2">Basic Information</h4>
								
								<div>
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Establishment Name <span class="text-red-500">*</span></label>
									<input
										v-model="newName"
										type="text"
										required
										class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
										placeholder="Enter establishment name"
										:disabled="loading"
									/>
								</div>

								<div>
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Address</label>
									<input
										v-model="newAddress"
										type="text"
										class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
										placeholder="Enter establishment address"
										:disabled="loading"
									/>
								</div>

								<div>
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Contact Number</label>
									<input
										v-model="newContactNumber"
										type="text"
										class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
										placeholder="Enter contact number"
										:disabled="loading"
									/>
								</div>
							</div>

							<!-- Owner & Manager Details -->
							<div class="grid gap-4 md:grid-cols-2">
								<div class="space-y-3">
									<h4 class="text-sm font-bold text-[#002147] uppercase tracking-wide border-b border-[#004595]/20 pb-2">Owner Details</h4>
									<div>
										<label class="block text-xs font-semibold text-[#002147] mb-1.5">Full Name</label>
										<input
											v-model="newOwnerName"
											type="text"
											class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
											placeholder="Owner full name"
											:disabled="loading"
										/>
									</div>
									<div>
										<label class="block text-xs font-semibold text-[#002147] mb-1.5">Contact Number</label>
										<input
											v-model="newOwnerContact"
											type="text"
											class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
											placeholder="Owner contact"
											:disabled="loading"
										/>
									</div>
									<div>
										<label class="block text-xs font-semibold text-[#002147] mb-1.5">Email</label>
										<input
											v-model="newOwnerEmail"
											type="text"
											class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
											placeholder="Owner email"
											:disabled="loading"
										/>
									</div>
								</div>
								<div class="space-y-3">
									<h4 class="text-sm font-bold text-[#002147] uppercase tracking-wide border-b border-[#004595]/20 pb-2">Manager Details</h4>
									<div>
										<label class="block text-xs font-semibold text-[#002147] mb-1.5">Full Name</label>
										<input
											v-model="newManagerName"
											type="text"
											class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
											placeholder="Manager full name"
											:disabled="loading"
										/>
									</div>
									<div>
										<label class="block text-xs font-semibold text-[#002147] mb-1.5">Contact Number</label>
										<input
											v-model="newManagerContact"
											type="text"
											class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
											placeholder="Manager contact"
											:disabled="loading"
										/>
									</div>
									<div>
										<label class="block text-xs font-semibold text-[#002147] mb-1.5">Email</label>
										<input
											v-model="newManagerEmail"
											type="text"
											class="w-full px-3 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
											placeholder="Manager email"
											:disabled="loading"
										/>
									</div>
								</div>
							</div>

							<!-- Action Buttons -->
							<div class="flex gap-3 pt-4 border-t border-[#004595]/10">
								<button
									type="button"
									@click="closeAddModal"
									class="flex-1 px-4 py-2.5 border-2 border-[#f3f1ee] text-[#002147] rounded-lg hover:bg-[#f3f1ee] transition-all font-semibold text-sm"
								>
									Cancel
								</button>
								<button
									type="submit"
									:disabled="loading || uploadingPhoto"
									class="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#002147] to-[#00397a] text-white rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
								>
									{{ loading || uploadingPhoto ? 'Adding...' : 'Add Establishment' }}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<!-- Delete Confirmation Modal -->
			<div
				v-if="showDeleteConfirm"
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
				role="dialog"
				aria-modal="true"
			>
				<div class="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl space-y-4">
					<div class="flex items-center gap-3">
						<div class="p-2 bg-red-100 text-red-700 rounded-lg">
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fill-rule="evenodd"
									d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div>
							<h3 class="text-lg font-bold text-[#002147]">Delete establishment?</h3>
							<p class="text-sm text-gray-600">This removes "{{ deleteName }}" from the list.</p>
						</div>
					</div>
					<div class="flex flex-wrap justify-end gap-2">
						<button
							type="button"
							class="inline-flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-sm font-bold text-[#002147] border-2 border-[#002147] hover:bg-[#002147]/10 transition"
							@click="closeDelete"
						>
							Cancel
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-1 rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700 border-2 border-red-700 transition"
							@click="confirmDelete"
						>
							Delete
						</button>
					</div>
				</div>
			</div>

			<!-- Details Modal -->
			<div
				v-if="showDetails"
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
				role="dialog"
				aria-modal="true"
			>
				<div class="relative w-full max-w-3xl rounded-2xl bg-white shadow-2xl overflow-hidden transform transition-all max-h-[90vh] overflow-y-auto">
					<!-- Modal Header -->
					<div class="bg-gradient-to-r from-[#002147] to-[#00397a] px-6 py-4 sticky top-0 z-10">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="p-2 bg-white/20 rounded-lg">
									<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
									</svg>
								</div>
								<h3 class="text-lg font-bold text-white">Establishment Details</h3>
							</div>
							<button
								type="button"
								@click="closeDetails"
								class="p-1.5 hover:bg-white/20 rounded-lg transition-all"
							>
								<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
								</svg>
							</button>
						</div>
					</div>

					<div v-if="detailsLoading" class="py-16 text-center">
						<div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#004595] border-t-transparent"></div>
						<p class="mt-4 text-sm text-gray-600">Loading details...</p>
					</div>

					<div v-else class="p-6 space-y-6">
						<!-- Establishment Image -->
						<div class="rounded-xl overflow-hidden border-2 border-[#004595]/10">
							<div v-if="detailsItem?.establishmentImages" class="w-full bg-gray-50">
								<img :src="detailsItem.establishmentImages" :alt="detailsItem.establishmentName" class="w-full h-auto object-contain" />
							</div>
							<div v-else class="w-full h-80 bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center relative overflow-hidden">
								<div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
								<svg class="w-24 h-24 text-white/50 relative z-10" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
								</svg>
							</div>
						</div>

						<!-- Establishment Info -->
						<div class="space-y-4">
							<div>
								<h2 class="text-2xl font-bold text-[#002147]">{{ detailsItem?.establishmentName }}</h2>
								<p class="text-sm text-gray-500 mt-1">{{ communityInfo?.name || 'Barangay' }}</p>
							</div>

							<div class="grid gap-4 md:grid-cols-3">
								<div class="rounded-lg border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee]/30 to-white px-4 py-3">
									<div class="flex items-start gap-2">
										<svg class="w-5 h-5 text-[#004595] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
										</svg>
										<div class="flex-1 min-w-0">
											<p class="text-xs uppercase tracking-wide text-[#004595]/70 font-semibold">Address</p>
											<p class="text-sm font-medium text-[#002147] mt-0.5 break-words">{{ detailsItem?.establishmentAddress || 'Not provided' }}</p>
										</div>
									</div>
								</div>

								<div class="rounded-lg border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee]/30 to-white px-4 py-3">
									<div class="flex items-start gap-2">
										<svg class="w-5 h-5 text-[#004595] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
										</svg>
										<div class="flex-1 min-w-0">
											<p class="text-xs uppercase tracking-wide text-[#004595]/70 font-semibold">Contact</p>
											<p class="text-sm font-medium text-[#002147] mt-0.5 break-words">{{ detailsItem?.contactNumber || 'Not provided' }}</p>
										</div>
									</div>
								</div>

								<div class="rounded-lg border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee]/30 to-white px-4 py-3">
									<div class="flex items-start gap-2">
										<svg class="w-5 h-5 text-[#004595] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
											<path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z" clip-rule="evenodd"/>
										</svg>
										<div class="flex-1 min-w-0">
											<p class="text-xs uppercase tracking-wide text-[#004595]/70 font-semibold">Type</p>
											<p class="text-sm font-medium text-[#002147] mt-0.5">Establishment</p>
										</div>
									</div>
								</div>
							</div>

							<!-- Owner & Manager Details -->
							<div class="grid gap-4 md:grid-cols-2">
								<div class="rounded-xl border-2 border-[#004595]/10 bg-white p-4">
									<h4 class="text-sm font-bold text-[#002147] uppercase tracking-wide mb-3 pb-2 border-b border-[#004595]/10">Owner Details</h4>
									<div class="space-y-2 text-sm">
										<div>
											<p class="text-xs text-gray-500 uppercase tracking-wide">Full Name</p>
											<p class="font-semibold text-[#002147]">{{ detailsItem?.ownerName || 'Not provided' }}</p>
										</div>
										<div>
											<p class="text-xs text-gray-500 uppercase tracking-wide">Contact Number</p>
											<p class="font-medium text-gray-700">{{ detailsItem?.ownerContact || 'Not provided' }}</p>
										</div>
										<div>
											<p class="text-xs text-gray-500 uppercase tracking-wide">Email</p>
											<p class="font-medium text-gray-700 break-words">{{ detailsItem?.ownerEmail || 'Not provided' }}</p>
										</div>
									</div>
								</div>

								<div class="rounded-xl border-2 border-[#004595]/10 bg-white p-4">
									<h4 class="text-sm font-bold text-[#002147] uppercase tracking-wide mb-3 pb-2 border-b border-[#004595]/10">Manager Details</h4>
									<div class="space-y-2 text-sm">
										<div>
											<p class="text-xs text-gray-500 uppercase tracking-wide">Full Name</p>
											<p class="font-semibold text-[#002147]">{{ detailsItem?.managerName || 'Not provided' }}</p>
										</div>
										<div>
											<p class="text-xs text-gray-500 uppercase tracking-wide">Contact Number</p>
											<p class="font-medium text-gray-700">{{ detailsItem?.managerContact || 'Not provided' }}</p>
										</div>
										<div>
											<p class="text-xs text-gray-500 uppercase tracking-wide">Email</p>
											<p class="font-medium text-gray-700 break-words">{{ detailsItem?.managerEmail || 'Not provided' }}</p>
										</div>
									</div>
								</div>
							</div>
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
</div>
</template>

<script setup>
import { computed, ref, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'

const route = useRoute()
const router = useRouter()

const barangayName = computed(() => (route.params.barangayName || '').toString())
const barangayId = ref(null)

const communityInfo = computed(() => {
	if (!barangayName.value) {
		return null
	}
	// Convert kebab-case to Title Case for display
	const displayName = barangayName.value
		.split('-')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
	
	return { name: displayName }
})

const items = ref([])
const newName = ref('')
const newAddress = ref('')
const newContactNumber = ref('')
const newManagerName = ref('')
const newOwnerContact = ref('')
const newManagerContact = ref('')
const newOwnerEmail = ref('')
const newManagerEmail = ref('')
const newOwnerName = ref('')
const newImage = ref(null)
const imagePreview = ref('')
const editingId = ref(null)
const editingName = ref('')
const editingAddress = ref('')
const editingContactNumber = ref('')
const editingManagerName = ref('')
const editingManagerContact = ref('')
const editingManagerEmail = ref('')
const editingOwnerName = ref('')
const editingOwnerContact = ref('')
const editingOwnerEmail = ref('')
const editImage = ref(null)
const editImagePreview = ref('')
const showDeleteConfirm = ref(false)
const deleteId = ref(null)
const deleteName = ref('')
const showDetails = ref(false)
const detailsItem = ref(null)
const detailsLoading = ref(false)
const loading = ref(false)
const showAddModal = ref(false)
const searchQuery = ref('')
const uploadingPhoto = ref(false)

const filteredItems = computed(() => {
	if (!searchQuery.value.trim()) {
		return items.value
	}
	const query = searchQuery.value.toLowerCase()
	return items.value.filter(item => 
		item.establishmentName?.toLowerCase().includes(query) ||
		item.establishmentAddress?.toLowerCase().includes(query)
	)
})

// Fetch barangay ID from database
const fetchBarangayId = async () => {
	if (!barangayName.value) return
	
	try {
		// Convert kebab-case to Title Case for primary search
		const displayName = barangayName.value
			.split('-')
			.map(word => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
		
		console.log('🔍 Looking for barangay:', displayName, '(from param:', barangayName.value + ')')
		
		// Try primary search with Title Case
		let { data, error } = await supabase
			.from('Barangays')
			.select('id, brgyname')
			.ilike('brgyname', displayName)
			.maybeSingle()
		
		// If not found, try alternative patterns
		if (!data && !error) {
			// Try with simple space replacement
			const altPattern1 = barangayName.value.replace(/-/g, ' ')
			const { data: altData1 } = await supabase
				.from('Barangays')
				.select('id, brgyname')
				.ilike('brgyname', altPattern1)
				.maybeSingle()
			
			if (altData1) {
				data = altData1
			}
		}
		
		// If still not found, try partial matching
		if (!data && !error) {
			// Get all barangays and find the best match
			const { data: allBarangays } = await supabase
				.from('Barangays')
				.select('id, brgyname')
			
			if (allBarangays && allBarangays.length > 0) {
				// Create normalized version for comparison
				const normalizedParam = barangayName.value.toLowerCase().replace(/[^a-z0-9]/g, '')
				
				const match = allBarangays.find(brgy => {
					const normalizedBrgy = brgy.brgyname.toLowerCase().replace(/[^a-z0-9]/g, '')
					return normalizedBrgy === normalizedParam
				})
				
				if (match) {
					data = match
				}
			}
		}
		
		if (error && error.code !== 'PGRST116') {
			throw error
		}
		
		if (data) {
			barangayId.value = data.id
			console.log('✅ Barangay found:', data.brgyname, '(ID:', data.id + ')')
			await fetchEstablishments()
		} else {
			console.warn('⚠️ Barangay not found in database:', barangayName.value)
			barangayId.value = null
		}
	} catch (error) {
		console.error('❌ Error fetching barangay ID:', error)
		barangayId.value = null
	}
}

// Fetch establishments from Supabase
const fetchEstablishments = async () => {
	if (!barangayName.value) return
	
	loading.value = true
	try {
		const { data, error } = await supabase
			.from('Establishments')
			.select('*')
			.eq('brgy_id', barangayId.value)
		
		if (error) throw error
		
		items.value = data || []
	} catch (error) {
		console.error('Error fetching establishments:', error)
		items.value = []
	} finally {
		loading.value = false
	}
}

watch(
	() => barangayName.value,
	() => {
		fetchBarangayId()
		editingId.value = null
		editingName.value = ''
		editingAddress.value = ''
		editingManagerName.value = ''
		editingManagerContact.value = ''
		editingManagerEmail.value = ''
		editingOwnerName.value = ''
		editingOwnerContact.value = ''
		editingOwnerEmail.value = ''
		newName.value = ''
		newAddress.value = ''
		newManagerName.value = ''
		newOwnerContact.value = ''
		newManagerContact.value = ''
		newOwnerEmail.value = ''
		newManagerEmail.value = ''
		newOwnerName.value = ''
		newImage.value = null
		imagePreview.value = ''
	},
	{ immediate: true }
)

onMounted(() => {
	fetchBarangayId()
})

const handleImageChange = (event) => {
	const file = event.target.files[0]
	if (file) {
		newImage.value = file
		const reader = new FileReader()
		reader.onload = (e) => {
			imagePreview.value = e.target.result
		}
		reader.readAsDataURL(file)
	}
}

const handleEditImageChange = async (event, itemId) => {
	const file = event.target.files[0]
	if (!file) return
	
	if (file.size > 5 * 1024 * 1024) {
		alert('File size must be less than 5MB')
		return
	}
	
	uploadingPhoto.value = true
	
	try {
		const fileExt = file.name.split('.').pop()
		const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
		
		const { error: uploadError } = await supabase.storage
			.from('EstablishmentsImages')
			.upload(fileName, file)
		
		if (uploadError) throw uploadError
		
		const imageUrl = `https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/EstablishmentsImages/${fileName}`
		
		// Update preview
		const reader = new FileReader()
		reader.onload = (e) => {
			editImagePreview.value = e.target.result
		}
		reader.readAsDataURL(file)
		
		// Update the item in database
		const { error: updateError } = await supabase
			.from('Establishments')
			.update({ establishmentImages: imageUrl })
			.eq('id', itemId)
		
		if (updateError) throw updateError
		
		// Update local item
		const item = items.value.find(i => i.id === itemId)
		if (item) {
			item.establishmentImages = imageUrl
		}
		
	} catch (error) {
		console.error('Error uploading image:', error)
		alert(`Failed to upload image: ${error?.message || 'Please try again.'}`)
	} finally {
		uploadingPhoto.value = false
	}
}

const closeAddModal = () => {
	showAddModal.value = false
	newName.value = ''
	newAddress.value = ''
	newContactNumber.value = ''
	newManagerName.value = ''
	newOwnerContact.value = ''
	newManagerContact.value = ''
	newOwnerEmail.value = ''
	newManagerEmail.value = ''
	newOwnerName.value = ''
	newImage.value = null
	imagePreview.value = ''
}

const goBack = () => {
	if (barangayName.value) {
		router.push({ name: 'community', params: { barangayName: barangayName.value } })
		return
	}
	router.push({ name: 'dashboard' })
}

const addItem = async () => {
	const name = newName.value.trim()
	const address = newAddress.value.trim()
	const contactNumber = newContactNumber.value.trim()
	if (!name) {
		alert('Please enter an establishment name')
		return
	}
	if (!barangayId.value) {
		alert('Barangay not found')
		return
	}
	
	loading.value = true
	try {
		let imageUrl = null
		
		// Upload image if provided
		if (newImage.value) {
			uploadingPhoto.value = true
			const fileExt = newImage.value.name.split('.').pop()
			const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
			const filePath = fileName
			
			const { error: uploadError } = await supabase.storage
				.from('EstablishmentsImages')
				.upload(filePath, newImage.value)
			
			if (uploadError) throw uploadError
			
			// Construct public URL
			imageUrl = `https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/EstablishmentsImages/${fileName}`
			uploadingPhoto.value = false
		}
		
		const { data, error } = await supabase
			.from('Establishments')
			.insert([
				{ 
					establishmentName: name, 
					establishmentAddress: address,
					contactNumber: contactNumber || null,
					establishmentImages: imageUrl,
					brgy_id: barangayId.value 
				}
			])
			.select()
		
		if (error) throw error

		const estId = data?.[0]?.id
		if (!estId) {
			throw new Error('Establishment insert did not return an id.')
		}
		
		// Only insert manager if at least the name is provided (required field)
		const managerName = newManagerName.value.trim()
		if (managerName) {
			const managerPayload = {
				est_id: estId,
				manager_fullname: managerName,
				managerContact: newManagerContact.value.trim() || null,
				manager_email: newManagerEmail.value.trim() || null
			}

			const { error: managerError } = await supabase
				.from('EstablishmentManager')
				.insert([managerPayload])

			if (managerError) throw managerError
		}

		// Only insert owner if at least the name is provided
		const ownerName = newOwnerName.value.trim()
		if (ownerName) {
			const ownerPayload = {
				est_id: estId,
				Ownerfullname: ownerName,
				OwnerNumber: newOwnerContact.value.trim() || null,
				profile_image: imageUrl,
				OwnerEmail: newOwnerEmail.value.trim() || null
			}

			const { error: ownerError } = await supabase
				.from('EstablishmentOwner')
				.insert([ownerPayload])

			if (ownerError) throw ownerError
		}
		
		if (data && data.length > 0) {
			items.value.push(data[0])
		}
		closeAddModal()
	} catch (error) {
		console.error('Error adding establishment:', error)
		alert(`Failed to add establishment: ${error?.message || 'Please try again.'}`)
	} finally {
		loading.value = false
		uploadingPhoto.value = false
	}
}

const startEdit = async (id) => {
	const item = items.value.find(i => i.id === id)
	if (!item) {
		return
	}
	editingId.value = id
	editingName.value = item.establishmentName || ''
	editingAddress.value = item.establishmentAddress || ''
	editingContactNumber.value = item.contactNumber || ''
	editingManagerName.value = ''
	editingManagerContact.value = ''
	editingManagerEmail.value = ''
	editingOwnerName.value = ''
	editingOwnerContact.value = ''
	editingOwnerEmail.value = ''
	editImagePreview.value = ''

	try {
		const { data: managerData, error: managerError } = await supabase
			.from('EstablishmentManager')
			.select('manager_fullname, managerContact, manager_email')
			.eq('est_id', id)
			.maybeSingle()

		if (managerError) throw managerError
		if (managerData) {
			editingManagerName.value = managerData.manager_fullname || ''
			editingManagerContact.value = managerData.managerContact || ''
			editingManagerEmail.value = managerData.manager_email || ''
		}

		const { data: ownerData, error: ownerError } = await supabase
			.from('EstablishmentOwner')
			.select('Ownerfullname, OwnerNumber, OwnerEmail')
			.eq('est_id', id)
			.maybeSingle()

		if (ownerError) throw ownerError
		if (ownerData) {
			editingOwnerName.value = ownerData.Ownerfullname || ''
			editingOwnerContact.value = ownerData.OwnerNumber || ''
			editingOwnerEmail.value = ownerData.OwnerEmail || ''
		}
	} catch (error) {
		console.error('Error loading edit info:', error)
	}
}

const saveEdit = async () => {
	if (editingId.value === null) {
		return
	}
	const name = editingName.value.trim()
	const address = editingAddress.value.trim()
	const contactNumber = editingContactNumber.value.trim()
	const managerName = editingManagerName.value.trim()
	const managerContact = editingManagerContact.value.trim()
	const managerEmail = editingManagerEmail.value.trim()
	const ownerName = editingOwnerName.value.trim()
	const ownerContact = editingOwnerContact.value.trim()
	const ownerEmail = editingOwnerEmail.value.trim()
	if (!name) {
		return
	}
	
	loading.value = true
	try {
		const { error } = await supabase
			.from('Establishments')
			.update({
				establishmentName: name,
				establishmentAddress: address || null,
				contactNumber: contactNumber || null,
			})
			.eq('id', editingId.value)
		
		if (error) throw error

		const hasManagerFields = managerName || managerContact || managerEmail
		if (hasManagerFields) {
			const { data: managerRow, error: managerFetchError } = await supabase
				.from('EstablishmentManager')
				.select('est_id')
				.eq('est_id', editingId.value)
				.maybeSingle()

			if (managerFetchError) throw managerFetchError

			if (managerRow) {
				const { error: managerUpdateError } = await supabase
					.from('EstablishmentManager')
					.update({
						manager_fullname: managerName || null,
						managerContact: managerContact || null,
						manager_email: managerEmail || null
					})
					.eq('est_id', editingId.value)

				if (managerUpdateError) throw managerUpdateError
			} else {
				const { error: managerInsertError } = await supabase
					.from('EstablishmentManager')
					.insert([
						{
							est_id: editingId.value,
							manager_fullname: managerName || null,
							managerContact: managerContact || null,
							manager_email: managerEmail || null
						}
					])

				if (managerInsertError) throw managerInsertError
			}
		}

		const hasOwnerFields = ownerName || ownerContact || ownerEmail
		if (hasOwnerFields) {
			const { data: ownerRow, error: ownerFetchError } = await supabase
				.from('EstablishmentOwner')
				.select('est_id')
				.eq('est_id', editingId.value)
				.maybeSingle()

			if (ownerFetchError) throw ownerFetchError

			if (ownerRow) {
				const { error: ownerUpdateError } = await supabase
					.from('EstablishmentOwner')
					.update({
						Ownerfullname: ownerName || null,
						OwnerNumber: ownerContact || null,
						OwnerEmail: ownerEmail || null
					})
					.eq('est_id', editingId.value)

				if (ownerUpdateError) throw ownerUpdateError
			} else {
				const { error: ownerInsertError } = await supabase
					.from('EstablishmentOwner')
					.insert([
						{
							est_id: editingId.value,
							Ownerfullname: ownerName || null,
							OwnerNumber: ownerContact || null,
							OwnerEmail: ownerEmail || null
						}
					])

				if (ownerInsertError) throw ownerInsertError
			}
		}
		
		const item = items.value.find(i => i.id === editingId.value)
		if (item) {
			item.establishmentName = name
			item.establishmentAddress = address
			item.contactNumber = contactNumber
		}
		editingId.value = null
		editingName.value = ''
		editingAddress.value = ''
		editingContactNumber.value = ''
		editingManagerName.value = ''
		editingManagerContact.value = ''
		editingManagerEmail.value = ''
		editingOwnerName.value = ''
		editingOwnerContact.value = ''
		editingOwnerEmail.value = ''
		editImagePreview.value = ''
	} catch (error) {
		console.error('Error updating establishment:', error)
		alert('Failed to update establishment. Please try again.')
	} finally {
		loading.value = false
	}
}

const cancelEdit = () => {
	editingId.value = null
	editingName.value = ''
	editingAddress.value = ''
	editingContactNumber.value = ''
	editingManagerName.value = ''
	editingManagerContact.value = ''
	editingManagerEmail.value = ''
	editingOwnerName.value = ''
	editingOwnerContact.value = ''
	editingOwnerEmail.value = ''
	editImagePreview.value = ''
}

const deleteItem = async (id) => {
	loading.value = true
	try {
		const { error: deleteManagerError } = await supabase
			.from('EstablishmentManager')
			.delete()
			.eq('est_id', id)

		if (deleteManagerError) throw deleteManagerError

		const { error: deleteOwnerError } = await supabase
			.from('EstablishmentOwner')
			.delete()
			.eq('est_id', id)

		if (deleteOwnerError) throw deleteOwnerError

		const { error } = await supabase
			.from('Establishments')
			.delete()
			.eq('id', id)
		
		if (error) throw error
		
		const index = items.value.findIndex(i => i.id === id)
		if (index !== -1) {
			items.value.splice(index, 1)
		}
		if (editingId.value !== null) {
			editingId.value = null
			editingName.value = ''
		}
	} catch (error) {
		console.error('Error deleting establishment:', error)
		alert('Failed to delete establishment. Please try again.')
	} finally {
		loading.value = false
	}
}

const openDelete = (id) => {
	const item = items.value.find(i => i.id === id)
	if (item) {
		deleteId.value = id
		deleteName.value = item.establishmentName
		showDeleteConfirm.value = true
	}
}

const closeDelete = () => {
	showDeleteConfirm.value = false
	deleteId.value = null
	deleteName.value = ''
}

const confirmDelete = () => {
	if (deleteId.value === null) {
		return
	}
	deleteItem(deleteId.value)
	closeDelete()
}

const openDetails = async (item) => {
	detailsItem.value = item
	showDetails.value = true
	detailsLoading.value = true
	try {
		const { data: managerData, error: managerError } = await supabase
			.from('EstablishmentManager')
			.select('manager_fullname, managerContact, manager_email')
			.eq('est_id', item.id)
			.maybeSingle()

		if (managerError) throw managerError

		const { data: ownerData, error: ownerError } = await supabase
			.from('EstablishmentOwner')
			.select('Ownerfullname, OwnerNumber, OwnerEmail')
			.eq('est_id', item.id)
			.maybeSingle()

		if (ownerError) throw ownerError

		detailsItem.value = {
			...item,
			managerName: managerData?.manager_fullname || null,
			managerContact: managerData?.managerContact || null,
			managerEmail: managerData?.manager_email || null,
			ownerName: ownerData?.Ownerfullname || null,
			ownerContact: ownerData?.OwnerNumber || null,
			ownerEmail: ownerData?.OwnerEmail || null,
			contactNumber: item.contactNumber || null
		}
	} catch (error) {
		console.error('Error loading details:', error)
	} finally {
		detailsLoading.value = false
	}
}

const closeDetails = () => {
	showDetails.value = false
	detailsItem.value = null
	detailsLoading.value = false
}
</script>
