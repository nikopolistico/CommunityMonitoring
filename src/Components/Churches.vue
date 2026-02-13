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
						<p class="text-sm uppercase tracking-widest font-semibold opacity-90">Churches</p>
						<h1 class="text-4xl font-extrabold mt-2">{{ communityInfo.name }}</h1>
						<p class="text-lg text-white/90 mt-2">Places of worship within this barangay.</p>
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
						Add Church
					</button>

					<!-- Search Bar -->
					<div class="flex-1 relative">
						<svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
						</svg>
						<input
							v-model="searchQuery"
							type="text"
							placeholder="Search churches..."
							class="w-full rounded-xl border-2 border-[#f3f1ee] pl-10 pr-4 py-2.5 focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
						/>
					</div>
				</div>

				<!-- Churches Grid -->
				<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					<div v-if="loading" class="col-span-full text-center py-16">
						<div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#004595] border-t-transparent"></div>
						<p class="mt-4 text-gray-600 font-medium">Loading churches...</p>
					</div>

					<div v-else-if="filteredItems.length === 0" class="col-span-full text-center py-16">
						<div class="inline-block p-4 bg-gray-100 rounded-full mb-4">
							<svg class="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 2a1 1 0 00-.832.445l-7 10A1 1 0 003 14h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 00.832-1.555l-7-10A1 1 0 0010 2z" clip-rule="evenodd"/>
							</svg>
						</div>
						<p class="text-gray-600 font-medium">{{ searchQuery ? 'No churches found matching your search.' : 'No churches yet. Add one to get started!' }}</p>
					</div>
					
					<article
						v-for="(item, index) in filteredItems"
						:key="item.id || index"
						class="rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#004595]/10 hover:border-[#004595]/30 transform hover:-translate-y-1"
					>
						<!-- Church Image -->
						<div v-if="item.churchImages" class="w-full h-56 overflow-hidden bg-gray-50">
							<img :src="item.churchImages" :alt="item.churchName" class="w-full h-full object-cover" />
						</div>
						<div v-else class="w-full h-56 bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center relative overflow-hidden">
							<div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
							<svg class="w-20 h-20 text-white/50 relative z-10" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 2a1 1 0 00-.832.445l-7 10A1 1 0 003 14h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 00.832-1.555l-7-10A1 1 0 0010 2z" clip-rule="evenodd"/>
							</svg>
						</div>

						<div class="p-5">
							<!-- Editing Mode -->
							<div v-if="editingId === item.id" class="space-y-3">
								<!-- Photo Upload Section -->
								<div class="flex flex-col items-center mb-3">
									<div class="relative group">
										<div class="w-24 h-24 rounded-xl overflow-hidden border-2 border-[#004595]/20 shadow-md cursor-pointer" @click="$refs['editFileInput' + item.id][0].click()">
											<img v-if="editImagePreview || item.churchImages" :src="editImagePreview || item.churchImages" :alt="item.churchName" class="w-full h-full object-cover" />
											<div v-else class="w-full h-full bg-gradient-to-br from-[#002147] to-[#004595] flex items-center justify-center">
												<svg class="w-8 h-8 text-white/50" fill="currentColor" viewBox="0 0 20 20">
													<path fill-rule="evenodd" d="M10 2a1 1 0 00-.832.445l-7 10A1 1 0 003 14h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 00.832-1.555l-7-10A1 1 0 0010 2z" clip-rule="evenodd"/>
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
									placeholder="Church name"
								/>
								<input
									v-model="editingAddress"
									type="text"
									class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
									placeholder="Church address"
								/>
								<div class="space-y-2">
									<input
										v-model="editingLeaderName"
										type="text"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
										placeholder="Leader name"
									/>
									<select
										v-model="editingLeaderRegistration"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 focus:border-[#004595] focus:outline-none focus:ring-1 focus:ring-[#004595]/20 transition-all text-sm"
									>
										<option value="yes">Registered: Yes</option>
										<option value="no">Registered: No</option>
									</select>
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
								<h2 class="text-xl font-bold text-[#002147]">{{ item.churchName }}</h2>
								<div class="space-y-1.5 text-sm text-gray-600">
									<div class="flex items-start gap-2">
										<svg class="w-4 h-4 text-[#00397a]/60 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
										</svg>
										<p class="text-sm text-gray-600 flex-1">{{ item.churchAddress || 'No address provided' }}</p>
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
										title="Edit church"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
										</svg>
									</button>
									<button
										type="button"
										@click="openDelete(item.id)"
										class="rounded-lg bg-red-50 px-3 py-2 text-red-600 border border-red-200 hover:bg-red-100 transition-all"
										title="Delete church"
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

			<!-- Add Church Modal -->
			<div v-if="showAddModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeAddModal">
				<div class="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto transform transition-all">
					<!-- Modal Header -->
					<div class="bg-gradient-to-r from-[#002147] to-[#00397a] px-6 py-4 sticky top-0 z-10">
						<div class="flex items-center justify-between">
							<div class="flex items-center gap-3">
								<div class="p-2 bg-white/20 rounded-lg">
									<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path fill-rule="evenodd" d="M10 2a1 1 0 00-.832.445l-7 10A1 1 0 003 14h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 00.832-1.555l-7-10A1 1 0 0010 2z" clip-rule="evenodd"/>
									</svg>
								</div>
								<h3 class="text-lg font-bold text-white">Add New Church</h3>
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
												<path fill-rule="evenodd" d="M10 2a1 1 0 00-.832.445l-7 10A1 1 0 003 14h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 00.832-1.555l-7-10A1 1 0 0010 2z" clip-rule="evenodd"/>
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
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Church Name <span class="text-red-500">*</span></label>
									<input
										v-model="newName"
										type="text"
										placeholder="e.g., St. Joseph Cathedral"
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

							<!-- Leader Details -->
							<div class="space-y-3">
								<h4 class="text-sm font-bold text-[#002147] uppercase tracking-wide border-b border-[#004595]/20 pb-2">Church Leader Details</h4>
								<div>
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Leader Name</label>
									<input
										v-model="newLeaderName"
										type="text"
										placeholder="e.g., Pastor John Doe"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
										:disabled="loading"
									/>
								</div>
								<div>
									<label class="block text-xs font-semibold text-[#002147] mb-1.5">Leader Registration</label>
									<select
										v-model="newLeaderRegistration"
										class="w-full rounded-lg border-2 border-[#f3f1ee] px-3 py-2 text-sm focus:border-[#004595] focus:outline-none focus:ring-2 focus:ring-[#004595]/20 transition-all"
										:disabled="loading"
									>
										<option value="yes">Yes</option>
										<option value="no">No</option>
									</select>
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
									{{ loading || uploadingPhoto ? 'Adding...' : 'Add Church' }}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<!-- Delete Confirmation Modal -->
			<div v-if="deleteId !== null" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeDelete">
				<div class="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all">
					<!-- Modal Header -->
					<div class="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 rounded-t-2xl">
						<div class="flex items-center gap-3">
							<div class="p-2 bg-white/20 rounded-lg">
								<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
								</svg>
							</div>
							<h3 class="text-lg font-bold text-white">Confirm Deletion</h3>
						</div>
					</div>
					
					<!-- Modal Body -->
					<div class="p-6">
						<p class="text-gray-700 text-sm leading-relaxed mb-6">
							Are you sure you want to delete this church? This action cannot be undone and will permanently remove all associated data.
						</p>
						
						<!-- Action Buttons -->
						<div class="flex gap-3">
							<button
								type="button"
								@click="closeDelete"
								class="flex-1 px-4 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-semibold text-sm"
							>
								Cancel
							</button>
							<button
								type="button"
								@click="deleteItem"
								:disabled="loading"
								class="flex-1 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
							>
								{{ loading ? 'Deleting...' : 'Delete Church' }}
							</button>
						</div>
					</div>
				</div>
			</div>

			<!-- Details Modal -->
			<div v-if="showDetails" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4" @click.self="closeDetails">
				<div class="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all">
					<!-- Modal Header with Photo -->
					<div class="relative">
						<div v-if="detailsItem?.churchImages" class="w-full h-64 overflow-hidden">
							<img :src="detailsItem.churchImages" :alt="detailsItem.churchName" class="w-full h-full object-cover" />
						</div>
						<div v-else class="w-full h-64 bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center relative overflow-hidden">
							<div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
							<div class="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -ml-20 -mb-20"></div>
							<svg class="w-24 h-24 text-white/50 relative z-10" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M10 2a1 1 0 00-.832.445l-7 10A1 1 0 003 14h3v3a1 1 0 001 1h6a1 1 0 001-1v-3h3a1 1 0 00.832-1.555l-7-10A1 1 0 0010 2z" clip-rule="evenodd"/>
							</svg>
						</div>
						
						<!-- Close Button -->
						<button
							@click="closeDetails"
							class="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-lg transition-all"
						>
							<svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
							</svg>
						</button>
					</div>

					<!-- Modal Body -->
					<div v-if="detailsLoading" class="p-8 text-center">
						<div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#004595] border-t-transparent"></div>
						<p class="mt-4 text-gray-600 font-medium">Loading details...</p>
					</div>

					<div v-else class="p-6 space-y-6">
						<!-- Church Name -->
						<div class="text-center border-b border-[#004595]/10 pb-4">
							<h2 class="text-3xl font-bold text-[#002147]">{{ detailsItem?.churchName || 'N/A' }}</h2>
						</div>

						<!-- Information Grid -->
						<div class="grid gap-6 md:grid-cols-2">
							<!-- Basic Information -->
							<div class="space-y-4">
								<h3 class="text-sm font-bold text-[#002147] uppercase tracking-wide border-b border-[#004595]/20 pb-2">Basic Information</h3>
								
								<div class="space-y-3">
									<div class="flex items-start gap-3 p-3 bg-[#f3f1ee]/50 rounded-lg">
										<svg class="w-5 h-5 text-[#00397a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
										</svg>
										<div class="flex-1">
											<p class="text-xs font-semibold text-[#002147] uppercase tracking-wide mb-1">Address</p>
											<p class="text-sm text-gray-700">{{ detailsItem?.churchAddress || 'No address provided' }}</p>
										</div>
									</div>
									
									<div class="flex items-start gap-3 p-3 bg-[#f3f1ee]/50 rounded-lg">
										<svg class="w-5 h-5 text-[#00397a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
										</svg>
										<div class="flex-1">
											<p class="text-xs font-semibold text-[#002147] uppercase tracking-wide mb-1">Barangay</p>
											<p class="text-sm text-gray-700">{{ communityInfo?.name || 'N/A' }}, Butuan City</p>
										</div>
									</div>
								</div>
							</div>

							<!-- Leader Information -->
							<div class="space-y-4">
								<h3 class="text-sm font-bold text-[#002147] uppercase tracking-wide border-b border-[#004595]/20 pb-2">Church Leader Details</h3>
								
								<div class="space-y-3">
									<div class="flex items-start gap-3 p-3 bg-[#f3f1ee]/50 rounded-lg">
										<svg class="w-5 h-5 text-[#00397a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
										</svg>
										<div class="flex-1">
											<p class="text-xs font-semibold text-[#002147] uppercase tracking-wide mb-1">Leader Name</p>
											<p class="text-sm text-gray-700">{{ detailsItem?.leaderName || 'Not assigned' }}</p>
										</div>
									</div>
									
									<div class="flex items-start gap-3 p-3 bg-[#f3f1ee]/50 rounded-lg">
										<svg class="w-5 h-5 text-[#00397a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
										</svg>
										<div class="flex-1">
											<p class="text-xs font-semibold text-[#002147] uppercase tracking-wide mb-1">Registration Status</p>
											<span v-if="detailsItem?.leaderRegistration === 'yes' || detailsItem?.leaderRegistration === true" class="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
												<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
												</svg>
												Registered
											</span>
											<span v-else class="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
												<svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
													<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
												</svg>
												Not Registered
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<!-- Close Button -->
						<div class="flex justify-end pt-4 border-t border-[#004595]/10">
							<button
								@click="closeDetails"
								class="px-6 py-2.5 bg-gradient-to-r from-[#002147] to-[#00397a] text-white rounded-lg hover:shadow-lg transition-all font-semibold text-sm"
							>
								Close
							</button>
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
const newLeaderName = ref('')
const newLeaderRegistration = ref('yes')
const editingId = ref(null)
const editingName = ref('')
const editingAddress = ref('')
const editingLeaderName = ref('')
const editingLeaderRegistration = ref('yes')
const editImagePreview = ref('')
const deleteId = ref(null)
const showDetails = ref(false)
const detailsItem = ref(null)
const detailsLoading = ref(false)
const loading = ref(false)
const uploadingPhoto = ref(false)
const showAddModal = ref(false)
const searchQuery = ref('')

const filteredItems = computed(() => {
	if (!searchQuery.value.trim()) {
		return items.value
	}
	const query = searchQuery.value.toLowerCase()
	return items.value.filter(item => 
		item.churchName?.toLowerCase().includes(query) ||
		item.churchAddress?.toLowerCase().includes(query)
	)
})

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
			await fetchChurches()
		} else {
			console.warn('⚠️ Barangay not found in database:', barangayName.value)
			barangayId.value = null
		}
	} catch (error) {
		console.error('❌ Error fetching barangay ID:', error)
		barangayId.value = null
	}
}

const fetchChurches = async () => {
	if (!barangayName.value) return
	
	loading.value = true
	try {
		const { data, error } = await supabase
			.from('Church')
			.select('*')
			.eq('brgy_id', barangayId.value)
		
		if (error) throw error
		
		items.value = data || []
	} catch (error) {
		console.error('Error fetching churches:', error)
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
		editingLeaderName.value = ''
		editingLeaderRegistration.value = 'yes'
		editImagePreview.value = ''
		newName.value = ''
		newAddress.value = ''
		newImage.value = null
		imagePreview.value = ''
		newLeaderName.value = ''
		newLeaderRegistration.value = 'yes'
	},
	{ immediate: true }
)

onMounted(() => {
	fetchBarangayId()
})

const handleImageChange = (event) => {
	const file = event.target.files[0]
	if (file) {
		if (file.size > 5 * 1024 * 1024) {
			alert('File size must be less than 5MB')
			return
		}
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
		const filePath = fileName

		const { error: uploadError } = await supabase.storage
			.from('ChurchImages')
			.upload(filePath, file)

		if (uploadError) throw uploadError

		const imageUrl = `https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/ChurchImages/${fileName}`

		const { error: updateError } = await supabase
			.from('Church')
			.update({ churchImages: imageUrl })
			.eq('id', itemId)

		if (updateError) throw updateError

		const item = items.value.find(i => i.id === itemId)
		if (item) {
			item.churchImages = imageUrl
		}

		editImagePreview.value = imageUrl
		alert('Photo updated successfully!')
	} catch (error) {
		console.error('Error uploading photo:', error)
		alert('Failed to upload photo. Please try again.')
	} finally {
		uploadingPhoto.value = false
	}
}

const goBack = () => {
	if (barangayName.value) {
		router.push({ name: 'community', params: { barangayName: barangayName.value } })
		return
	}
	router.push({ name: 'dashboard' })
}

const closeAddModal = () => {
	showAddModal.value = false
	newName.value = ''
	newAddress.value = ''
	newImage.value = null
	imagePreview.value = ''
	newLeaderName.value = ''
	newLeaderRegistration.value = 'yes'
}

const addItem = async () => {
	const name = newName.value.trim()
	const address = newAddress.value.trim()
	
	if (!name) {
		alert('Please enter a church name')
		return
	}
	if (!barangayId.value) {
		alert('Barangay not found')
		return
	}
	
	loading.value = true
	try {
		let imageUrl = null
		
		if (newImage.value) {
			const fileExt = newImage.value.name.split('.').pop()
			const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
			const filePath = fileName
			
			const { error: uploadError } = await supabase.storage
				.from('ChurchImages')
				.upload(filePath, newImage.value)
			
			if (uploadError) throw uploadError
			
			imageUrl = `https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/ChurchImages/${fileName}`
		}
		
		const { data, error } = await supabase
			.from('Church')
			.insert([
				{ 
					churchName: name, 
					churchAddress: address, 
					churchImages: imageUrl,
					brgy_id: barangayId.value 
				}
			])
			.select()
		
		if (error) throw error
		
		if (data && data.length > 0) {
			const leaderName = newLeaderName.value.trim()
			const leaderRegistered = newLeaderRegistration.value === 'yes'
			
			if (leaderName || newLeaderRegistration.value) {
				const { error: leaderError } = await supabase
					.from('ChurchLeader')
					.insert([
						{
							fullname: leaderName || null,
							registration: leaderRegistered,
							ch_id: data[0].id
						}
					])
				if (leaderError) throw leaderError
			}
			
			items.value.push(data[0])
		}
		
		closeAddModal()
		alert('Church added successfully!')
	} catch (error) {
		console.error('Error adding church:', error)
		alert('Failed to add church. Please try again.')
	} finally {
		loading.value = false
	}
}

const startEdit = async (id) => {
	const item = items.value.find(i => i.id === id)
	if (item) {
		editingId.value = id
		editingName.value = item.churchName
		editingAddress.value = item.churchAddress || ''
		editImagePreview.value = item.churchImages || ''
		
		try {
			const { data, error } = await supabase
				.from('ChurchLeader')
				.select('fullname, registration')
				.eq('ch_id', id)
				.maybeSingle()
			
			if (error) throw error
			
			if (data) {
				editingLeaderName.value = data.fullname || ''
				editingLeaderRegistration.value = data.registration ? 'yes' : 'no'
			} else {
				editingLeaderName.value = ''
				editingLeaderRegistration.value = 'yes'
			}
		} catch (error) {
			console.error('Error fetching leader details:', error)
			editingLeaderName.value = ''
			editingLeaderRegistration.value = 'yes'
		}
	}
}

const saveEdit = async () => {
	if (editingId.value === null) return
	
	const name = editingName.value.trim()
	const address = editingAddress.value.trim()
	
	if (!name) {
		alert('Please enter a church name')
		return
	}
	
	loading.value = true
	try {
		const { error } = await supabase
			.from('Church')
			.update({ 
				churchName: name,
				churchAddress: address
			})
			.eq('id', editingId.value)
		
		if (error) throw error
		
		const leaderName = editingLeaderName.value.trim()
		const leaderRegistered = editingLeaderRegistration.value === 'yes'
		
		const { error: leaderError } = await supabase
			.from('ChurchLeader')
			.upsert(
				{
					fullname: leaderName || null,
					registration: leaderRegistered,
					ch_id: editingId.value
				},
				{ onConflict: 'ch_id' }
			)
		
		if (leaderError) throw leaderError
		
		const item = items.value.find(i => i.id === editingId.value)
		if (item) {
			item.churchName = name
			item.churchAddress = address
		}
		
		cancelEdit()
		alert('Church updated successfully!')
	} catch (error) {
		console.error('Error updating church:', error)
		alert('Failed to update church. Please try again.')
	} finally {
		loading.value = false
	}
}

const cancelEdit = () => {
	editingId.value = null
	editingName.value = ''
	editingAddress.value = ''
	editingLeaderName.value = ''
	editingLeaderRegistration.value = 'yes'
	editImagePreview.value = ''
}

const deleteItem = async () => {
	if (deleteId.value === null) return
	
	loading.value = true
	try {
		const { error: leaderError } = await supabase
			.from('ChurchLeader')
			.delete()
			.eq('ch_id', deleteId.value)
		
		if (leaderError) console.warn('No leader records to delete:', leaderError)
		
		const { error } = await supabase
			.from('Church')
			.delete()
			.eq('id', deleteId.value)
		
		if (error) throw error
		
		const index = items.value.findIndex(i => i.id === deleteId.value)
		if (index !== -1) {
			items.value.splice(index, 1)
		}
		
		closeDelete()
		alert('Church deleted successfully!')
	} catch (error) {
		console.error('Error deleting church:', error)
		alert('Failed to delete church. Please try again.')
	} finally {
		loading.value = false
	}
}

const openDelete = (id) => {
	deleteId.value = id
}

const closeDelete = () => {
	deleteId.value = null
}

const openDetails = async (item) => {
	detailsItem.value = { ...item }
	showDetails.value = true
	detailsLoading.value = true
	
	try {
		const { data, error } = await supabase
			.from('ChurchLeader')
			.select('fullname, registration')
			.eq('ch_id', item.id)
			.maybeSingle()
		
		if (error) throw error
		
		if (data) {
			detailsItem.value = {
				...detailsItem.value,
				leaderName: data.fullname,
				leaderRegistration: data.registration
			}
		}
	} catch (error) {
		console.error('Error fetching leader details:', error)
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
