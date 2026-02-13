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
						<p class="text-sm uppercase tracking-widest font-semibold opacity-90">Schools</p>
						<h1 class="text-4xl font-extrabold mt-2">{{ communityInfo.name }}</h1>
						<p class="text-lg text-white/90 mt-2">Educational institutions in this barangay.</p>
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
						Add School
					</button>

					<!-- Search Bar -->
					<div class="flex-1 relative">
						<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
						</svg>
						<input
							v-model="searchQuery"
							type="text"
							placeholder="Search schools..."
							class="w-full rounded-xl border-2 border-[#f3f1ee] pl-10 pr-4 py-2.5 focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
						/>
					</div>
				</div>

				<!-- Schools Grid -->
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div v-if="loading" class="col-span-full text-center py-16">
						<div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#004595] border-t-transparent"></div>
						<p class="mt-4 text-gray-600 font-medium">Loading schools...</p>
					</div>

					<div v-else-if="filteredItems.length === 0" class="col-span-full text-center py-16">
						<div class="inline-block p-4 bg-gray-100 rounded-full mb-4">
							<svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
							</svg>
						</div>
						<p class="text-gray-600 font-medium">{{ searchQuery ? 'No schools found matching your search.' : 'No schools yet. Add one to get started!' }}</p>
					</div>
					
					<article
						v-for="(item, index) in filteredItems"
						:key="item.id || index"
						class="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#004595]/10 hover:border-[#004595]/30 transform hover:-translate-y-1"
					>
						<!-- School Image -->
						<div v-if="item.schoolImages" class="w-full h-56 overflow-hidden bg-gray-50">
							<img :src="item.schoolImages" :alt="item.schoolName" class="w-full h-full object-cover" />
						</div>
						<div v-else class="w-full h-56 bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center relative overflow-hidden">
							<div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
							<svg class="w-20 h-20 text-white/50 relative z-10" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
							</svg>
						</div>

						<div class="p-5">
							<!-- Editing Mode -->
							<div v-if="editingId === item.id" class="space-y-3">
								<!-- Photo Upload Section -->
								<div class="flex flex-col items-center mb-3">
									<div class="relative group">
										<div class="w-24 h-24 rounded-xl overflow-hidden border-2 border-[#004595]/20 shadow-md cursor-pointer" @click="$refs['editFileInput' + item.id][0].click()">
											<img v-if="editImagePreview || item.schoolImages" :src="editImagePreview || item.schoolImages" :alt="item.schoolName" class="w-full h-full object-cover" />
											<div v-else class="w-full h-full bg-gradient-to-br from-[#002147] to-[#004595] flex items-center justify-center">
												<svg class="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 20 20">
													<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
												</svg>
											</div>
										</div>
										<input
											:ref="'editFileInput' + item.id"
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
									placeholder="School name"
								/>
								<input
									v-model="editingAddress"
									type="text"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
									placeholder="School address"
								/>
								<div class="space-y-2">
									<input
										v-model="editingPrincipalName"
										type="text"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
										placeholder="Principal name"
									/>
									<input
										v-model="editingPrincipalContact"
										type="text"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
										placeholder="Principal contact"
									/>
								</div>
								<div class="flex gap-2 pt-2">
									<button
										type="button"
										@click="saveEdit"
										:disabled="uploadingPhoto"
										class="flex-1 rounded-lg bg-gradient-to-r from-[#002147] to-[#00397a] px-3 py-2 text-xs font-semibold text-white hover:shadow-lg transition-all disabled:opacity-50"
									>
										{{ uploadingPhoto ? 'Uploading...' : 'Save' }}
									</button>
									<button
										type="button"
										@click="cancelEdit"
										class="rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-xs font-semibold text-[#002147] hover:bg-[#f3f1ee] transition-all"
									>
										Cancel
									</button>
								</div>
							</div>

							<!-- View Mode -->
							<div v-else class="space-y-3">
								<h2 class="text-xl font-bold text-[#002147]">{{ item.schoolName }}</h2>
								<div class="space-y-1.5 text-sm text-gray-600">
									<div class="flex items-start gap-2">
										<svg class="w-4 h-4 text-[#00397a]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
										</svg>
										<p class="text-sm text-gray-600 flex-1">{{ item.schoolAddress || 'No address provided' }}</p>
									</div>
								</div>
								<div class="flex flex-wrap gap-2 pt-2">
									<button
										type="button"
										@click="openDetails(item)"
										class="flex-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-[#002147] to-[#00397a] px-3 py-2 text-xs font-semibold text-white hover:shadow-lg transition-all"
										title="View details"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
										</svg>
										View
									</button>
									<button
										type="button"
										@click="startEdit(item.id)"
										class="rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-[#004595] hover:bg-[#f3f1ee] hover:border-[#004595] transition-all"
										title="Edit school"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
										</svg>
									</button>
									<button
										type="button"
										@click="openDelete(item.id)"
										class="rounded-lg bg-red-50 px-3 py-2 text-red-600 border border-red-200 hover:bg-red-100 transition-all"
										title="Delete school"
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

			<!-- Add School Modal -->
			<div v-if="showAddModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeAddModal">
				<div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all">
					<!-- Modal Header -->
					<div class="bg-gradient-to-r from-[#002147] to-[#00397a] px-6 py-4 sticky top-0 z-10">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="p-2 bg-white/20 rounded-lg">
									<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
									</svg>
								</div>
								<h3 class="text-lg font-bold text-white">Add New School</h3>
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
										<img v-if="imagePreview" :src="imagePreview" alt="Preview" class="w-full h-full object-cover" />
										<div v-else class="w-full h-full bg-gradient-to-br from-[#002147] to-[#004595] flex items-center justify-center">
											<svg class="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 20 20">
												<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
											</svg>
										</div>
									</div>
									
									<!-- Upload Button Overlay -->
									<button
										type="button"
										@click="$refs.fileInput.click()"
										class="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 disabled:opacity-50"
										:disabled="uploadingPhoto"
									>
										<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
										</svg>
									</button>
									<input
										ref="fileInput"
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
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">School Name <span class="text-red-500">*</span></label>
									<input
										v-model="newName"
										type="text"
										placeholder="e.g., Butuan Central Elementary School"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
										:disabled="loading"
									/>
								</div>

								<div>
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Address</label>
									<input
										v-model="newAddress"
										type="text"
										placeholder="e.g., P. Burgos St., Butuan City"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
										:disabled="loading"
									/>
								</div>
							</div>

							<!-- Principal Details -->
							<div class="space-y-3">
								<h4 class="text-sm font-bold text-[#002147] uppercase tracking-wide border-b border-[#004595]/20 pb-2">Principal Details</h4>
								<div>
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Principal Name</label>
									<input
										v-model="newPrincipalName"
										type="text"
										placeholder="e.g., Dr. Juan Dela Cruz"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
										:disabled="loading"
									/>
								</div>
								<div>
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Principal Contact</label>
									<input
										v-model="newPrincipalContact"
										type="text"
										placeholder="e.g., 0912-345-6789"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
										:disabled="loading"
									/>
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
									{{ loading || uploadingPhoto ? 'Adding...' : 'Add School' }}
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
							<h3 class="text-lg font-bold text-[#002147]">Delete school?</h3>
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
									<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
									</svg>
								</div>
								<h3 class="text-lg font-bold text-white">School Details</h3>
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
						<!-- School Image -->
						<div class="rounded-xl overflow-hidden border-2 border-[#004595]/10">
							<div v-if="detailsItem?.schoolImages" class="w-full bg-gray-50">
								<img :src="detailsItem.schoolImages" :alt="detailsItem.schoolName" class="w-full h-auto object-contain" />
							</div>
							<div v-else class="w-full h-80 bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center relative overflow-hidden">
								<div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl -mr-20 -mt-20"></div>
								<svg class="w-24 h-24 text-white/50 relative z-10" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
								</svg>
							</div>
						</div>

						<!-- School Info -->
						<div class="space-y-4">
							<div>
								<h2 class="text-2xl font-bold text-[#002147]">{{ detailsItem?.schoolName }}</h2>
								<p class="text-sm text-gray-500 mt-1">{{ communityInfo?.name || 'Barangay' }}</p>
							</div>

							<div class="grid gap-4 md:grid-cols-2">
								<div class="rounded-lg border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee]/30 to-white px-4 py-3">
									<div class="flex items-center gap-2 mb-1.5">
										<svg class="w-4 h-4 text-[#004595]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
										</svg>
										<p class="text-xs uppercase tracking-wider text-gray-500 font-semibold">Address</p>
									</div>
									<p class="font-bold text-[#002147] text-sm">{{ detailsItem?.schoolAddress || 'Not provided' }}</p>
								</div>

								<div class="rounded-lg border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee]/30 to-white px-4 py-3">
									<div class="flex items-center gap-2 mb-1.5">
										<svg class="w-4 h-4 text-[#004595]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
										</svg>
										<p class="text-xs uppercase tracking-wider text-gray-500 font-semibold">Principal</p>
									</div>
									<p class="font-bold text-[#002147] text-sm">{{ detailsItem?.principalName || 'Not provided' }}</p>
								</div>

								<div class="rounded-lg border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee]/30 to-white px-4 py-3 md:col-span-2">
									<div class="flex items-center gap-2 mb-1.5">
										<svg class="w-4 h-4 text-[#004595]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
										</svg>
										<p class="text-xs uppercase tracking-wider text-gray-500 font-semibold">Contact Number</p>
									</div>
									<p class="font-bold text-[#002147] text-sm">{{ detailsItem?.principalPhone || 'Not provided' }}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</section>

			<!-- Error State -->
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

			<!-- Toast Notification -->
			<Transition
				enter-active-class="transition-all duration-300 ease-out"
				enter-from-class="translate-y-[-100%] opacity-0"
				enter-to-class="translate-y-0 opacity-100"
				leave-active-class="transition-all duration-200 ease-in"
				leave-from-class="translate-y-0 opacity-100"
				leave-to-class="translate-y-[-100%] opacity-0"
			>
				<div
					v-if="toast.show"
					class="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4 z-[100000]"
				>
					<div
						class="rounded-2xl shadow-2xl overflow-hidden"
						:class="{
							'bg-gradient-to-r from-green-500 to-emerald-600': toast.type === 'success',
							'bg-gradient-to-r from-red-500 to-rose-600': toast.type === 'error',
							'bg-gradient-to-r from-yellow-500 to-amber-600': toast.type === 'warning',
							'bg-gradient-to-r from-blue-500 to-indigo-600': toast.type === 'info'
						}"
					>
						<div class="p-4 flex items-start gap-3">
							<!-- Icon -->
							<div class="flex-shrink-0 mt-0.5">
								<!-- Success Icon -->
								<svg
									v-if="toast.type === 'success'"
									class="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
										clip-rule="evenodd"
									/>
								</svg>
								<!-- Error Icon -->
								<svg
									v-else-if="toast.type === 'error'"
									class="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
										clip-rule="evenodd"
									/>
								</svg>
								<!-- Warning Icon -->
								<svg
									v-else-if="toast.type === 'warning'"
									class="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
										clip-rule="evenodd"
									/>
								</svg>
								<!-- Info Icon -->
								<svg
									v-else
									class="w-6 h-6 text-white"
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clip-rule="evenodd"
									/>
								</svg>
							</div>

							<!-- Message Content -->
							<div class="flex-1 pt-0.5">
								<p class="font-bold text-white text-sm leading-tight">
									{{ toast.message }}
								</p>
								<p v-if="toast.description" class="text-white/90 text-xs mt-1 leading-snug">
									{{ toast.description }}
								</p>
							</div>

							<!-- Close Button -->
							<button
								@click="hideToast"
								class="flex-shrink-0 ml-2 p-1 hover:bg-white/20 rounded-lg transition-colors"
							>
								<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						</div>

						<!-- Progress Bar -->
						<div class="h-1 bg-black/20">
							<div
								class="h-full bg-white/50 transition-all duration-100 ease-linear"
								:style="{ width: `${toast.progress}%` }"
							></div>
						</div>
					</div>
				</div>
			</Transition>
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
const newImage = ref(null)
const imagePreview = ref('')
const newPrincipalName = ref('')
const newPrincipalContact = ref('')
const editingId = ref(null)
const editingName = ref('')
const editingAddress = ref('')
const editingPrincipalName = ref('')
const editingPrincipalContact = ref('')
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

// Toast notification state
const toast = ref({
	show: false,
	message: '',
	description: '',
	type: 'success', // 'success', 'error', 'warning', 'info'
	progress: 100
})

let toastTimer = null
let progressTimer = null

const showToast = (message, type = 'success', description = '', duration = 4000) => {
	// Clear existing timers
	if (toastTimer) clearTimeout(toastTimer)
	if (progressTimer) clearInterval(progressTimer)
	
	// Set toast data
	toast.value = {
		show: true,
		message,
		description,
		type,
		progress: 100
	}
	
	// Animate progress bar
	const startTime = Date.now()
	progressTimer = setInterval(() => {
		const elapsed = Date.now() - startTime
		const remaining = Math.max(0, 100 - (elapsed / duration) * 100)
		toast.value.progress = remaining
		
		if (remaining <= 0) {
			clearInterval(progressTimer)
		}
	}, 10)
	
	// Auto hide after duration
	toastTimer = setTimeout(() => {
		hideToast()
	}, duration)
}

const hideToast = () => {
	toast.value.show = false
	if (toastTimer) clearTimeout(toastTimer)
	if (progressTimer) clearInterval(progressTimer)
}

const filteredItems = computed(() => {
	if (!searchQuery.value.trim()) {
		return items.value
	}
	const query = searchQuery.value.toLowerCase()
	return items.value.filter(item => 
		item.schoolName?.toLowerCase().includes(query) ||
		item.schoolAddress?.toLowerCase().includes(query)
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
			await fetchSchools()
		} else {
			console.warn('⚠️ Barangay not found in database:', barangayName.value)
			barangayId.value = null
		}
	} catch (error) {
		console.error('❌ Error fetching barangay ID:', error)
		barangayId.value = null
	}
}

// Fetch schools from Supabase
const fetchSchools = async () => {
	if (!barangayName.value) return
	
	loading.value = true
	try {
		const { data, error } = await supabase
			.from('Schools')
			.select('*')
			.eq('brgy_id', barangayId.value)
		
		if (error) throw error
		
		items.value = data || []
	} catch (error) {
		console.error('Error fetching schools:', error)
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
		editingPrincipalName.value = ''
		editingPrincipalContact.value = ''
		newName.value = ''
		newAddress.value = ''
		newImage.value = null
		imagePreview.value = ''
		newPrincipalName.value = ''
		newPrincipalContact.value = ''
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
		showToast('File Too Large', 'warning', 'Image size should be less than 5MB')
		return
	}
	
	uploadingPhoto.value = true
	
	try {
		const fileExt = file.name.split('.').pop()
		const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
		
		const { error: uploadError } = await supabase.storage
			.from('SchoolImages')
			.upload(fileName, file)
		
		if (uploadError) throw uploadError
		
		const imageUrl = `https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/SchoolImages/${fileName}`
		
		// Update preview
		const reader = new FileReader()
		reader.onload = (e) => {
			editImagePreview.value = e.target.result
		}
		reader.readAsDataURL(file)
		
		// Update the item in database
		const { error: updateError } = await supabase
			.from('Schools')
			.update({ schoolImages: imageUrl })
			.eq('id', itemId)
		
		if (updateError) throw updateError
		
		// Update local item
		const item = items.value.find(i => i.id === itemId)
		if (item) {
			item.schoolImages = imageUrl
		}
		
	} catch (error) {
		console.error('Error uploading image:', error)
		showToast('Upload Failed', 'error', error?.message || 'Failed to upload image. Please try again.')
	} finally {
		uploadingPhoto.value = false
	}
}

const closeAddModal = () => {
	showAddModal.value = false
	newName.value = ''
	newAddress.value = ''
	newImage.value = null
	imagePreview.value = ''
	newPrincipalName.value = ''
	newPrincipalContact.value = ''
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
	if (!name) {
		showToast('School Name Required', 'warning', 'Please enter a school name')
		return
	}
	if (!barangayId.value) {
		showToast('Barangay Not Found', 'error', 'Could not find the barangay. Please try again.')
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
				.from('SchoolImages')
				.upload(filePath, newImage.value)
			
			if (uploadError) throw uploadError
			
			// Construct public URL
			imageUrl = `https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/SchoolImages/${fileName}`
			uploadingPhoto.value = false
		}
		
		const { data, error } = await supabase
			.from('Schools')
			.insert([
				{ 
					schoolName: name, 
					schoolAddress: address,
					schoolImages: imageUrl,
					brgy_id: barangayId.value 
				}
			])
			.select()
		
		if (error) throw error

		const schoolId = data?.[0]?.id
		if (!schoolId) {
			throw new Error('School insert did not return an id.')
		}

		const principalName = newPrincipalName.value.trim()
		const principalPhone = newPrincipalContact.value.trim()
		if (principalName || principalPhone) {
			const principalPayload = {
				sch_id: schoolId,
				fullname: principalName || null,
				phone: principalPhone || null
			}

			const { error: principalError } = await supabase
				.from('SchoolPrincipal')
				.insert([principalPayload])

			if (principalError) throw principalError
		}
		
		if (data && data.length > 0) {
			items.value.push(data[0])
		}
		closeAddModal()
		showToast('Success!', 'success', 'School added successfully')
	} catch (error) {
		console.error('Error adding school:', error)
		showToast('Add Failed', 'error', error?.message || 'Failed to add school. Please try again.')
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
	editingName.value = item.schoolName || ''
	editingAddress.value = item.schoolAddress || ''
	editingPrincipalName.value = ''
	editingPrincipalContact.value = ''
	editImagePreview.value = ''

	try {
		const { data: principalData, error: principalError } = await supabase
			.from('SchoolPrincipal')
			.select('fullname, phone')
			.eq('sch_id', id)
			.maybeSingle()

		if (principalError) throw principalError
		if (principalData) {
			editingPrincipalName.value = principalData.fullname || ''
			editingPrincipalContact.value = principalData.phone || ''
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
	const principalName = editingPrincipalName.value.trim()
	const principalContact = editingPrincipalContact.value.trim()
	if (!name) {
		return
	}
	
	loading.value = true
	try {
		const { error } = await supabase
			.from('Schools')
			.update({
				schoolName: name,
				schoolAddress: address || null,
			})
			.eq('id', editingId.value)
		
		if (error) throw error

		const hasPrincipalFields = principalName || principalContact
		if (hasPrincipalFields) {
			const { data: principalRow, error: principalFetchError } = await supabase
				.from('SchoolPrincipal')
				.select('sch_id')
				.eq('sch_id', editingId.value)
				.maybeSingle()

			if (principalFetchError) throw principalFetchError

			if (principalRow) {
				const { error: principalUpdateError } = await supabase
					.from('SchoolPrincipal')
					.update({
						fullname: principalName || null,
						phone: principalContact || null
					})
					.eq('sch_id', editingId.value)

				if (principalUpdateError) throw principalUpdateError
			} else {
				const { error: principalInsertError } = await supabase
					.from('SchoolPrincipal')
					.insert([
						{
							sch_id: editingId.value,
							fullname: principalName || null,
							phone: principalContact || null
						}
					])

				if (principalInsertError) throw principalInsertError
			}
		}
		
		const item = items.value.find(i => i.id === editingId.value)
		if (item) {
			item.schoolName = name
			item.schoolAddress = address
		}
		editingId.value = null
		editingName.value = ''
		editingAddress.value = ''
		editingPrincipalName.value = ''
		editingPrincipalContact.value = ''
		editImagePreview.value = ''
		showToast('Success!', 'success', 'School updated successfully')
	} catch (error) {
		console.error('Error updating school:', error)
		showToast('Update Failed', 'error', 'Failed to update school. Please try again.')
	} finally {
		loading.value = false
	}
}

const cancelEdit = () => {
	editingId.value = null
	editingName.value = ''
	editingAddress.value = ''
	editingPrincipalName.value = ''
	editingPrincipalContact.value = ''
	editImagePreview.value = ''
}

const deleteItem = async (id) => {
	loading.value = true
	try {
		const { error: deletePrincipalError } = await supabase
			.from('SchoolPrincipal')
			.delete()
			.eq('sch_id', id)

		if (deletePrincipalError) throw deletePrincipalError

		const { error } = await supabase
			.from('Schools')
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
		showToast('Success!', 'success', 'School deleted successfully')
	} catch (error) {
		console.error('Error deleting school:', error)
		showToast('Delete Failed', 'error', 'Failed to delete school. Please try again.')
	} finally {
		loading.value = false
	}
}

const openDelete = (id) => {
	const item = items.value.find(i => i.id === id)
	if (item) {
		deleteId.value = id
		deleteName.value = item.schoolName
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
		const { data: principalData, error: principalError } = await supabase
			.from('SchoolPrincipal')
			.select('fullname, phone')
			.eq('sch_id', item.id)
			.maybeSingle()

		if (principalError) throw principalError

		detailsItem.value = {
			...item,
			principalName: principalData?.fullname || null,
			principalPhone: principalData?.phone || null
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
