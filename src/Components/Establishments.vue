<template>
	<div class="min-h-screen bg-[#f3f1ee]">
		<div class="mx-auto max-w-7xl px-4 py-10 space-y-8">
			<button
				type="button"
				class="inline-flex items-center gap-2 rounded-full bg-[#002147] px-5 py-2.5 text-sm font-bold text-white hover:bg-white hover:text-[#002147] border-2 border-[#002147] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
				@click="goBack"
			>
				<span aria-hidden="true">←</span>
				Back to Community
			</button>

			<section v-if="communityInfo" class="space-y-6">
				<div class="rounded-2xl bg-linear-to-r from-[#00162f] to-[#002147] p-8 shadow-2xl text-white">
					<p class="text-sm uppercase tracking-widest font-semibold opacity-80">Establishments</p>
					<h1 class="text-4xl font-extrabold mt-2">{{ communityInfo.name }}</h1>
					<p class="text-lg text-[#e0e7ff] mt-2">Businesses and key establishments in this barangay.</p>
				</div>

				<div class="flex gap-3">
					<!-- Add Button -->
					<button
						type="button"
						class="inline-flex items-center gap-2 rounded-lg bg-[#002147] px-4 py-2 text-sm font-bold text-white hover:bg-white hover:text-[#002147] border-2 border-[#002147] transition"
						@click="showAddForm = !showAddForm"
					>
						<span aria-hidden="true">＋</span>
						Add Establishment
					</button>

					<!-- Search Bar -->
					<div class="flex-1">
						<input
							v-model="searchQuery"
							type="text"
							placeholder="Search establishments..."
							class="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/30 transition"
						/>
					</div>
				</div>

					<!-- Collapsible Add Form -->
					<div v-if="showAddForm" class="bg-white rounded-2xl border-2 border-[#002147]/15 p-5 shadow-md space-y-4">
						<div class="space-y-3">
							<label class="block space-y-2">
								<span class="text-sm font-semibold text-[#002147]">Establishment Name</span>
								<input
									v-model="newName"
									type="text"
									placeholder="Enter establishment name"
									class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/30 transition"
									:disabled="loading"
								/>
							</label>
							<label class="block space-y-2">
								<span class="text-sm font-semibold text-[#002147]">Establishment Address</span>
								<input
									v-model="newAddress"
									type="text"
									placeholder="Enter establishment address"
									class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/30 transition"
									:disabled="loading"
								/>
							</label>
							<div class="flex gap-2">
								<button
									type="button"
									class="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#002147] px-4 py-2 text-sm font-bold text-white hover:bg-white hover:text-[#002147] border-2 border-[#002147] transition disabled:opacity-50 disabled:cursor-not-allowed"
									@click="addItem"
									:disabled="loading"
								>
									<span aria-hidden="true">＋</span>
									Add
								</button>
								<button
									type="button"
									class="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-200 border-2 border-gray-300 transition"
									@click="showAddForm = false"
								>
									Cancel
								</button>
							</div>
						</div>
						<p class="text-xs text-gray-500">Changes are saved to Supabase database.</p>
					</div>

				<div class="grid gap-5 md:grid-cols-2">
					<div v-if="loading" class="col-span-2 text-center py-12">
						<div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#002147] border-t-transparent"></div>
						<p class="mt-4 text-gray-600">Loading establishments...</p>
					</div>

					<div v-else-if="filteredItems.length === 0" class="col-span-2 text-center py-12">
						<p class="text-gray-600">{{ searchQuery ? 'No establishments found matching your search.' : 'No establishments yet. Add one to get started!' }}</p>
					</div>
					
					<article
						v-for="(item, index) in filteredItems"
						:key="item.id || index"
						class="rounded-xl bg-white border-2 border-[#002147]/15 p-5 shadow-md hover:shadow-lg transition-all duration-300"
					>
						<div class="flex items-start gap-3">
							<div class="p-3 bg-[#002147] text-white rounded-xl shadow">
								<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
									<path
										fill-rule="evenodd"
										d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 10-2 0v1H8a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V9z"
										clip-rule="evenodd"
									/>
								</svg>
						</div>
						<div class="flex-1 space-y-2">
							<div v-if="editingId === item.id" class="space-y-2">
								<input
									v-model="editingName"
									type="text"
									class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/30 transition"
								/>
								<div class="flex gap-2">
									<button
										type="button"
										class="inline-flex items-center gap-1 rounded-lg bg-[#002147] px-3 py-2 text-xs font-bold text-white hover:bg-white hover:text-[#002147] border-2 border-[#002147] transition"
										@click="saveEdit"
									>
										Save
									</button>
									<button
										type="button"
										class="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#002147] border-2 border-[#002147] hover:bg-[#002147]/10 transition"
										@click="cancelEdit"
									>
										Cancel
									</button>
								</div>
							</div>

							<div v-else class="space-y-1">
							<h2 class="text-xl font-bold text-[#002147]">{{ item.establishmentName }}</h2>
								<p class="text-sm text-gray-600">Part of {{ communityInfo.name }}'s economy.</p>
							</div>
						</div>
					</div>
					<div class="mt-4 flex flex-wrap justify-center gap-2">
						<button
							type="button"
							class="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#002147] border-2 border-[#002147] hover:bg-[#002147]/10 transition"
							@click="startEdit(item.id)"
						>
							Edit
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-1 rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-600 border-2 border-red-200 hover:bg-red-100 transition"
							@click="openDelete(item.id)"
						>
							Delete
						</button>
					</div>
				</article>
			</div>

			<div
				v-if="showDeleteConfirm"
				class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
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
import { communityData } from '@/data/communityData'
import { supabase } from '@/lib/supabase'

const route = useRoute()
const router = useRouter()

const barangayName = computed(() => (route.params.barangayName || '').toString())
const barangayId = ref(null)

const communityInfo = computed(() => {
	if (!barangayName.value) {
		return null
	}
	return communityData[barangayName.value] ?? null
})

const items = ref([])
const newName = ref('')
const newAddress = ref('')
const editingId = ref(null)
const editingName = ref('')
const showDeleteConfirm = ref(false)
const deleteId = ref(null)
const deleteName = ref('')
const loading = ref(false)
const showAddForm = ref(false)
const searchQuery = ref('')

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
		const { data, error } = await supabase
			.from('Barangays')
			.select('id')
			.ilike('brgyname', barangayName.value.replace(/-/g, ' '))
			.single()
		
		if (error) throw error
		
		if (data) {
			barangayId.value = data.id
			console.log('Barangay ID:', barangayId.value)
			await fetchEstablishments()
		}
	} catch (error) {
		console.error('Error fetching barangay ID:', error)
	}
}

// Fetch establishments from Supabase
const fetchEstablishments = async () => {
	if (!barangayName.value) return
	
	loading.value = true
	try {
		const { data, error } = await supabase
			.from('Establishment')
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
		newName.value = ''
		newAddress.value = ''
	},
	{ immediate: true }
)

onMounted(() => {
	fetchBarangayId()
})

const goBack = () => {
	if (barangayName.value) {
		router.push({ name: 'CommunityView', params: { barangayName: barangayName.value } })
		return
	}
	router.push({ name: 'dashboard' })
}

const addItem = async () => {
	const name = newName.value.trim()
	const address = newAddress.value.trim()
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
		const { data, error } = await supabase
			.from('Establishment')
			.insert([
				{ establishmentName: name, establishmentAddress: address, brgy_id: barangayId.value }
			])
			.select()
		
		if (error) throw error
		
		if (data && data.length > 0) {
			items.value.push(data[0])
		}
		newName.value = ''
		newAddress.value = ''
		showAddForm.value = false
	} catch (error) {
		console.error('Error adding establishment:', error)
		alert('Failed to add establishment. Please try again.')
	} finally {
		loading.value = false
	}
}

const startEdit = (id) => {
	const item = items.value.find(i => i.id === id)
	if (item) {
		editingId.value = id
		editingName.value = item.establishmentName
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
			.from('Establishment')
			.update({ establishmentName: name })
			.eq('id', editingId.value)
		
		if (error) throw error
		
		const item = items.value.find(i => i.id === editingId.value)
		if (item) {
			item.establishmentName = name
		}
		editingId.value = null
		editingName.value = ''
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
}

const deleteItem = async (id) => {
	loading.value = true
	try {
		const { error } = await supabase
			.from('Establishment')
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
</script>
