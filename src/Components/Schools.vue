<template>
	<div class="min-h-screen bg-gradient-to-br from-[#f3f1ee] via-[#ffffff] to-[#f3f1ee]">
		<div class="mx-auto max-w-7xl px-6 py-8 space-y-8">
			<!-- Back Button -->
			<button
				type="button"
				class="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#002147] to-[#004595] px-6 py-3 text-sm font-bold text-white hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
				@click="goBack" 
			>
				<svg class="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
				</svg>
				Back to Community
			</button>

			<section v-if="communityInfo" class="space-y-8">
				<!-- Hero Header -->
				<div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#002147] via-[#00397a] to-[#004595] p-10 shadow-2xl">
					<div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
					<div class="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
					<div class="relative z-10">
						<div class="flex items-center gap-3 mb-3">
							<div class="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
								<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
								</svg>
							</div>
							<span class="text-sm uppercase tracking-[0.2em] font-bold text-white/70">Educational Institutions</span>
						</div>
						<h1 class="text-5xl font-extrabold text-white mb-2 tracking-tight">{{ communityInfo.name }}</h1>
						<p class="text-lg text-white/80 max-w-2xl">Empowering the community through quality education and academic excellence.</p>
					</div>
				</div>

				<!-- Action Bar -->
				<div class="flex flex-col sm:flex-row gap-4">
					<!-- Add Button -->
					<button
						type="button"
						class="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#004595] to-[#00397a] px-6 py-3.5 text-sm font-bold text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
						@click="showAddForm = !showAddForm"
					>
						<svg class="w-5 h-5 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
						</svg>
						Add New School
					</button>

					<!-- Search Bar -->
					<div class="flex-1 relative">
						<div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
							<svg class="w-5 h-5 text-[#00397a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
							</svg>
						</div>
						<input
							v-model="searchQuery"
							type="text"
							placeholder="Search by school name or address..."
							class="w-full rounded-xl border-2 border-[#004595]/20 bg-white pl-12 pr-4 py-3.5 text-sm focus:border-[#004595] focus:ring-4 focus:ring-[#004595]/10 transition-all duration-300 shadow-sm hover:shadow-md"
						/>
					</div>
				</div>

				<!-- Collapsible Add Form -->
				<div v-if="showAddForm" class="bg-white rounded-2xl border-2 border-[#004595]/20 p-8 shadow-xl space-y-6 animate-slideDown">
					<div class="flex items-center gap-3 pb-4 border-b-2 border-[#f3f1ee]">
						<div class="p-2 bg-gradient-to-br from-[#004595] to-[#00397a] rounded-lg">
							<svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
							</svg>
						</div>
						<h3 class="text-xl font-bold text-[#002147]">Add New School</h3>
					</div>
					
					<div class="grid gap-5 md:grid-cols-2">
						<label class="block space-y-2">
							<span class="text-sm font-bold text-[#002147] uppercase tracking-wide">School Name *</span>
							<input
								v-model="newName"
								type="text"
								placeholder="e.g., Butuan Central Elementary School"
								class="w-full rounded-xl border-2 border-[#004595]/20 px-4 py-3 text-sm focus:border-[#004595] focus:ring-4 focus:ring-[#004595]/10 transition-all duration-300 hover:border-[#004595]/40"
								:disabled="loading"
							/>
						</label>
						<label class="block space-y-2">
							<span class="text-sm font-bold text-[#002147] uppercase tracking-wide">School Address</span>
							<input
								v-model="newAddress"
								type="text"
								placeholder="e.g., P. Burgos St., Butuan City"
								class="w-full rounded-xl border-2 border-[#004595]/20 px-4 py-3 text-sm focus:border-[#004595] focus:ring-4 focus:ring-[#004595]/10 transition-all duration-300 hover:border-[#004595]/40"
								:disabled="loading"
							/>
						</label>
						<label class="block space-y-2">
							<span class="text-sm font-bold text-[#002147] uppercase tracking-wide">Principal Name</span>
							<input
								v-model="newPrincipalName"
								type="text"
								placeholder="e.g., Dr. Juan Dela Cruz"
								class="w-full rounded-xl border-2 border-[#004595]/20 px-4 py-3 text-sm focus:border-[#004595] focus:ring-4 focus:ring-[#004595]/10 transition-all duration-300 hover:border-[#004595]/40"
								:disabled="loading"
							/>
						</label>
						<label class="block space-y-2">
							<span class="text-sm font-bold text-[#002147] uppercase tracking-wide">Principal Contact</span>
							<input
								v-model="newPrincipalContact"
								type="text"
								placeholder="e.g., 0912-345-6789"
								class="w-full rounded-xl border-2 border-[#004595]/20 px-4 py-3 text-sm focus:border-[#004595] focus:ring-4 focus:ring-[#004595]/10 transition-all duration-300 hover:border-[#004595]/40"
								:disabled="loading"
							/>
						</label>
					</div>

					<label class="block space-y-2">
						<span class="text-sm font-bold text-[#002147] uppercase tracking-wide">School Image</span>
						<div class="relative">
							<input
								type="file"
								accept="image/*"
								@change="handleImageChange"
								class="w-full rounded-xl border-2 border-[#004595]/20 px-4 py-3 text-sm focus:border-[#004595] focus:ring-4 focus:ring-[#004595]/10 transition-all duration-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-[#004595] file:to-[#00397a] file:text-white hover:file:opacity-90"
								:disabled="loading"
							/>
						</div>
					</label>
					
					<div v-if="imagePreview" class="rounded-xl border-2 border-[#004595]/20 bg-[#f3f1ee]/30 p-4">
						<img :src="imagePreview" alt="Preview" class="w-full h-80 object-contain rounded-lg shadow-lg" />
					</div>

					<div class="flex gap-3 pt-4">
						<button
							type="button"
							class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#004595] to-[#00397a] px-6 py-3.5 text-sm font-bold text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
							@click="addItem"
							:disabled="loading"
						>
							<svg v-if="!loading" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
							</svg>
							<div v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							{{ loading ? 'Adding...' : 'Add School' }}
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#002147] border-2 border-[#004595]/20 hover:bg-[#f3f1ee] hover:border-[#004595]/40 transition-all duration-300"
							@click="showAddForm = false"
						>
							Cancel
						</button>
					</div>
					<p class="text-xs text-[#00397a]/60 flex items-center gap-2">
						<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
							<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
						</svg>
						All changes are automatically saved to the database.
					</p>
				</div>

				<!-- Schools Grid -->
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<div v-if="loading" class="col-span-full flex flex-col items-center justify-center py-20">
						<div class="relative">
							<div class="w-16 h-16 border-4 border-[#f3f1ee] border-t-[#004595] rounded-full animate-spin"></div>
							<div class="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-[#00397a] rounded-full animate-spin" style="animation-delay: -0.15s"></div>
						</div>
						<p class="mt-6 text-[#002147] font-semibold">Loading schools...</p>
					</div>

					<div v-else-if="filteredItems.length === 0" class="col-span-full flex flex-col items-center justify-center py-20 bg-white rounded-2xl border-2 border-dashed border-[#004595]/30">
						<div class="p-4 bg-[#f3f1ee] rounded-full mb-4">
							<svg class="w-12 h-12 text-[#00397a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
							</svg>
						</div>
						<p class="text-[#002147] font-bold text-lg">{{ searchQuery ? 'No schools found' : 'No schools yet' }}</p>
						<p class="text-[#00397a]/60 text-sm mt-1">{{ searchQuery ? 'Try adjusting your search criteria.' : 'Click "Add New School" to get started!' }}</p>
					</div>

					<!-- School Card -->
					<article
						v-for="(item, index) in filteredItems"
						:key="item.id || index"
						class="group relative bg-white rounded-2xl border-2 border-[#004595]/10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
					>
						<!-- Gradient Overlay on Hover -->
						<div class="absolute inset-0 bg-gradient-to-br from-[#004595]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
						
						<!-- School Image -->
						<div class="relative overflow-hidden h-56">
							<div v-if="item.schoolImages" class="w-full h-full bg-[#f3f1ee]">
								<img :src="item.schoolImages" :alt="item.schoolName" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
							</div>
							<div v-else class="w-full h-full bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center">
								<svg class="w-20 h-20 text-white/40 transition-transform duration-500 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
									<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
								</svg>
							</div>
							<!-- Status Badge -->
							<div class="absolute top-3 right-3">
								<span class="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#004595] text-xs font-bold rounded-full shadow-lg border border-[#004595]/20">Active</span>
							</div>
						</div>

						<!-- Content -->
						<div class="relative z-20 p-6 space-y-4">
							<div v-if="editingId === item.id" class="space-y-3">
								<input
									v-model="editingName"
									type="text"
									class="w-full rounded-xl border-2 border-[#004595]/30 px-4 py-2.5 text-sm focus:border-[#004595] focus:ring-4 focus:ring-[#004595]/10 transition-all"
								/>
								<div class="flex gap-2">
									<button
										type="button"
										class="flex-1 inline-flex items-center justify-center gap-1 rounded-lg bg-gradient-to-r from-[#004595] to-[#00397a] px-3 py-2 text-xs font-bold text-white hover:shadow-lg transition-all"
										@click="saveEdit"
									>
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
										</svg>
										Save
									</button>
									<button
										type="button"
										class="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#002147] border-2 border-[#004595]/20 hover:bg-[#f3f1ee] transition-all"
										@click="cancelEdit"
									>
										Cancel
									</button>
								</div>
							</div>

							<div v-else class="space-y-2">
								<h2 class="text-xl font-bold text-[#002147] line-clamp-2 group-hover:text-[#004595] transition-colors">{{ item.schoolName }}</h2>
								<div class="flex items-start gap-2">
									<svg class="w-4 h-4 text-[#00397a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
									</svg>
									<p class="text-sm text-[#00397a]/70 line-clamp-2">{{ item.schoolAddress || 'Located in ' + communityInfo.name + ', Butuan City.' }}</p>
								</div>
							</div>

							<!-- Action Buttons -->
							<div class="flex gap-2 pt-2 border-t border-[#004595]/10">
								<button
									type="button"
									class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#004595] to-[#00397a] p-2.5 text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105"
									@click="openDetails(item)"
									title="View details"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
									</svg>
									<span class="text-xs font-bold">View</span>
								</button>
								<button
									type="button"
									class="inline-flex items-center justify-center rounded-xl bg-white p-2.5 text-[#004595] border-2 border-[#004595]/20 hover:bg-[#f3f1ee] hover:border-[#004595]/40 transition-all duration-300"
									@click="startEdit(item.id)"
									title="Edit school"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
									</svg>
								</button>
								<button
									type="button"
									class="inline-flex items-center justify-center rounded-xl bg-red-50 p-2.5 text-red-600 border-2 border-red-200 hover:bg-red-100 hover:border-red-300 transition-all duration-300"
									@click="openDelete(item.id)"
									title="Delete school"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
									</svg>
								</button>
							</div>
						</div>
					</article>
				</div>

				<!-- Delete Confirmation Modal -->
				<div
					v-if="showDeleteConfirm"
					class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 animate-fadeIn"
					role="dialog"
					aria-modal="true"
				>
					<div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl space-y-5 animate-scaleIn border-2 border-red-100">
						<div class="flex items-start gap-4">
							<div class="p-3 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl shadow-lg">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
								</svg>
							</div>
							<div class="flex-1">
								<h3 class="text-xl font-bold text-[#002147] mb-1">Delete School?</h3>
								<p class="text-sm text-[#00397a]/70">You're about to permanently remove <span class="font-semibold text-[#002147]">"{{ deleteName }}"</span> from the database. This action cannot be undone.</p>
							</div>
						</div>
						<div class="flex gap-3 pt-2">
							<button
								type="button"
								class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#002147] border-2 border-[#004595]/20 hover:bg-[#f3f1ee] hover:border-[#004595]/40 transition-all duration-300"
								@click="closeDelete"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
								</svg>
								Cancel
							</button>
							<button
								type="button"
								class="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-700 px-5 py-3 text-sm font-bold text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
								@click="confirmDelete"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
								</svg>
								Delete School
							</button>
						</div>
					</div>
				</div>

				<!-- Details Modal -->
				<div
					v-if="showDetails"
					class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 animate-fadeIn"
					role="dialog"
					aria-modal="true"
				>
					<div class="w-full max-w-2xl rounded-3xl bg-white shadow-2xl overflow-hidden animate-scaleIn border-2 border-[#004595]/10">
						<!-- Header -->
						<div class="relative bg-gradient-to-r from-[#002147] via-[#00397a] to-[#004595] p-8">
							<div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
							<div class="relative z-10 flex items-start gap-4">
								<div class="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
									<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
									</svg>
								</div>
								<div class="flex-1">
									<h3 class="text-2xl font-extrabold text-white mb-1">{{ detailsItem?.schoolName }}</h3>
									<div class="flex items-center gap-2 text-white/80">
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
											<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
										</svg>
										<p class="text-sm">{{ detailsItem?.schoolAddress || 'No address provided' }}</p>
									</div>
								</div>
								<span class="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs font-bold text-white border border-white/30">Details</span>
							</div>
						</div>

						<!-- Content -->
						<div class="p-8 space-y-6">
							<!-- Image -->
							<div class="rounded-2xl border-2 border-[#004595]/10 overflow-hidden bg-[#f3f1ee]/30 p-4">
								<div v-if="detailsItem?.schoolImages" class="w-full h-64 overflow-hidden rounded-xl bg-white shadow-inner">
									<img :src="detailsItem.schoolImages" :alt="detailsItem.schoolName" class="w-full h-full object-cover" />
								</div>
								<div v-else class="w-full h-64 rounded-xl bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] flex items-center justify-center shadow-inner">
									<svg class="w-20 h-20 text-white/30" fill="currentColor" viewBox="0 0 20 20">
										<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
									</svg>
								</div>
							</div>

							<!-- Information Grid -->
							<div class="grid gap-4 md:grid-cols-2">
								<div class="rounded-xl border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee] to-white p-4">
									<div class="flex items-center gap-2 mb-2">
										<div class="p-1.5 bg-[#004595] rounded-lg">
											<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
											</svg>
										</div>
										<p class="text-xs uppercase tracking-wider text-[#00397a]/70 font-bold">Barangay</p>
									</div>
									<p class="font-bold text-[#002147] text-base">{{ communityInfo?.name || 'Not provided' }}</p>
								</div>

								<div class="rounded-xl border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee] to-white p-4">
									<div class="flex items-center gap-2 mb-2">
										<div class="p-1.5 bg-[#004595] rounded-lg">
											<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
											</svg>
										</div>
										<p class="text-xs uppercase tracking-wider text-[#00397a]/70 font-bold">Principal</p>
									</div>
									<p class="font-bold text-[#002147] text-base">{{ detailsItem?.principalName || 'Not provided' }}</p>
								</div>

								<div class="rounded-xl border-2 border-[#004595]/10 bg-gradient-to-br from-[#f3f1ee] to-white p-4 md:col-span-2">
									<div class="flex items-center gap-2 mb-2">
										<div class="p-1.5 bg-[#004595] rounded-lg">
											<svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
											</svg>
										</div>
										<p class="text-xs uppercase tracking-wider text-[#00397a]/70 font-bold">Contact Number</p>
									</div>
									<p class="font-bold text-[#002147] text-base">{{ detailsItem?.principalPhone || 'Not provided' }}</p>
								</div>
							</div>
						</div>

						<!-- Footer -->
						<div class="flex justify-end gap-3 px-8 pb-8 border-t-2 border-[#f3f1ee] pt-6">
							<button
								type="button"
								class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#004595] to-[#00397a] px-6 py-3 text-sm font-bold text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
								@click="closeDetails"
							>
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
								</svg>
								Close
							</button>
						</div>
					</div>
				</div>
			</section>

			<!-- Error State -->
			<section
				v-else
				class="mt-8 rounded-3xl bg-white p-16 text-center shadow-2xl border-2 border-red-200"
			>
				<div class="inline-block p-5 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-6 shadow-lg">
					<svg class="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
					</svg>
				</div>
				<h1 class="text-3xl font-extrabold text-[#002147] mb-3">Barangay Not Found</h1>
				<p class="text-[#00397a]/70 text-base max-w-md mx-auto mb-6">The barangay you're looking for doesn't exist. Please return to the dashboard and select a valid barangay.</p>
				<button
					type="button"
					class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#004595] to-[#00397a] px-6 py-3 text-sm font-bold text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105"
					@click="goBack"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
					</svg>
					Back to Dashboard
				</button>
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
const newImage = ref(null)
const imagePreview = ref('')
const newPrincipalName = ref('')
const newPrincipalContact = ref('')
const editingId = ref(null)
const editingName = ref('')
const showDeleteConfirm = ref(false)
const deleteId = ref(null)
const deleteName = ref('')
const showDetails = ref(false)
const detailsItem = ref(null)
const loading = ref(false)
const showAddForm = ref(false)
const searchQuery = ref('')

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
		const { data, error } = await supabase
			.from('Barangays')
			.select('id')
			.ilike('brgyname', barangayName.value.replace(/-/g, ' '))
			.single()
		
		if (error) throw error
		
		if (data) {
			barangayId.value = data.id
			console.log('Barangay ID:', barangayId.value)
			await fetchSchools()
		}
	} catch (error) {
		console.error('Error fetching barangay ID:', error)
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
		alert('Please enter a school name')
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
			const fileExt = newImage.value.name.split('.').pop()
			const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
			const filePath = fileName
			
			const { error: uploadError } = await supabase.storage
				.from('SchoolImages')
				.upload(filePath, newImage.value)
			
			if (uploadError) throw uploadError
			
			// Construct public URL
			imageUrl = `https://czwunysqbslfczktzjld.supabase.co/storage/v1/object/public/SchoolImages/${fileName}`
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
		
		if (data && data.length > 0) {
			items.value.push(data[0])
			const principalName = newPrincipalName.value.trim()
			const principalPhone = newPrincipalContact.value.trim()
			if (principalName || principalPhone) {
				const { error: principalError} = await supabase
					.from('SchoolPrincipal')
					.insert([
						{
							fullname: principalName || null,
							phone: principalPhone || null,
							sch_id: data[0].id
						}
					])
				if (principalError) throw principalError
			}
		}
		newName.value = ''
		newAddress.value = ''
		newImage.value = null
		imagePreview.value = ''
		newPrincipalName.value = ''
		newPrincipalContact.value = ''
		showAddForm.value = false
	} catch (error) {
		console.error('Error adding school:', error)
		alert('Failed to add school. Please try again.')
	} finally {
		loading.value = false
	}
}

const startEdit = (id) => {
	const item = items.value.find(i => i.id === id)
	if (item) {
		editingId.value = id
		editingName.value = item.schoolName
	}
}

const saveEdit = async () => {
	if (editingId.value === null) {
		return
	}
	const name = editingName.value.trim()
	if (!name) {
		return
	}
	
	loading.value = true
	try {
		const { error } = await supabase
			.from('Schools')
			.update({ schoolName: name })
			.eq('id', editingId.value)
		
		if (error) throw error
		
		const item = items.value.find(i => i.id === editingId.value)
		if (item) {
			item.schoolName = name
		}
		editingId.value = null
		editingName.value = ''
	} catch (error) {
		console.error('Error updating school:', error)
		alert('Failed to update school. Please try again.')
	} finally {
		loading.value = false
	}
}

const cancelEdit = () => {
	editingId.value = null
	editingName.value = ''
}

const deleteItem = async (id) => {
	loading.value = true
	try {
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
	} catch (error) {
		console.error('Error deleting school:', error)
		alert('Failed to delete school. Please try again.')
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
	detailsItem.value = { ...item }
	showDetails.value = true
	try {
		const { data, error } = await supabase
			.from('SchoolPrincipal')
			.select('fullname, phone')
			.eq('sch_id', item.id)
			.maybeSingle()
		if (error) throw error
		if (data) {
			detailsItem.value = {
				...detailsItem.value,
				principalName: data.fullname,
				principalPhone: data.phone
			}
		}
	} catch (error) {
		console.error('Error fetching principal details:', error)
	}
}

const closeDetails = () => {
	showDetails.value = false
	detailsItem.value = null
}
</script>
