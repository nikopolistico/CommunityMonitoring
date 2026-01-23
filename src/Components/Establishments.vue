<template>
	<div class="min-h-screen bg-[#f3f1ee]">
		<div class="mx-auto max-w-5xl px-4 py-10 space-y-8">
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

				<div class="bg-white rounded-2xl border-2 border-[#002147]/15 p-5 shadow-md space-y-4">
					<div class="flex flex-col md:flex-row md:items-end gap-3">
						<label class="flex-1 space-y-2">
							<span class="text-sm font-semibold text-[#002147]">Add an establishment</span>
							<input
								v-model="newName"
								type="text"
								placeholder="Enter establishment name"
								class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-[#002147] focus:ring-2 focus:ring-[#002147]/30 transition"
							/>
						</label>
						<button
							type="button"
							class="self-start md:self-auto inline-flex items-center gap-2 rounded-lg bg-[#002147] px-4 py-2 text-sm font-bold text-white hover:bg-white hover:text-[#002147] border-2 border-[#002147] transition"
							@click="addItem"
						>
							<span aria-hidden="true">＋</span>
							Add
						</button>
					</div>
					<p class="text-xs text-gray-500">Changes are local only for this session.</p>
				</div>

				<div class="grid gap-5 md:grid-cols-2">
					<article
						v-for="(item, index) in items"
						:key="item + index"
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
							<div v-if="editingIndex === index" class="space-y-2">
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
								<h2 class="text-xl font-bold text-[#002147]">{{ item }}</h2>
								<p class="text-sm text-gray-600">Part of {{ communityInfo.name }}'s economy.</p>
							</div>
						</div>
					</div>
					<div class="mt-4 flex flex-wrap justify-center gap-2">
						<button
							type="button"
							class="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#002147] border-2 border-[#002147] hover:bg-[#002147]/10 transition"
							@click="startEdit(index)"
						>
							Edit
						</button>
						<button
							type="button"
							class="inline-flex items-center gap-1 rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-600 border-2 border-red-200 hover:bg-red-100 transition"
							@click="openDelete(index)"
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
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { communityData } from '@/data/communityData'

const route = useRoute()
const router = useRouter()

const barangayId = computed(() => (route.params.barangayId || '').toString())

const communityInfo = computed(() => {
	if (!barangayId.value) {
		return null
	}
	return communityData[barangayId.value] ?? null
})

const items = ref([])
const newName = ref('')
const editingIndex = ref(null)
const editingName = ref('')
const showDeleteConfirm = ref(false)
const deleteIndex = ref(null)
const deleteName = ref('')

watch(
	() => communityInfo.value,
	(info) => {
		items.value = info?.businesses ? [...info.businesses] : []
		editingIndex.value = null
		editingName.value = ''
		newName.value = ''
	},
	{ immediate: true }
)

const goBack = () => {
	if (barangayId.value) {
		router.push({ name: 'CommunityView', params: { barangayId: barangayId.value } })
		return
	}
	router.push({ name: 'dashboard' })
}

const addItem = () => {
	const name = newName.value.trim()
	if (!name) {
		return
	}
	items.value.push(name)
	newName.value = ''
}

const startEdit = (index) => {
	editingIndex.value = index
	editingName.value = items.value[index]
}

const saveEdit = () => {
	if (editingIndex.value === null) {
		return
	}
	const name = editingName.value.trim()
	if (!name) {
		return
	}
	items.value.splice(editingIndex.value, 1, name)
	editingIndex.value = null
	editingName.value = ''
}

const cancelEdit = () => {
	editingIndex.value = null
	editingName.value = ''
}

const deleteItem = (index) => {
	items.value.splice(index, 1)
	if (editingIndex.value !== null) {
		editingIndex.value = null
		editingName.value = ''
	}
}

const openDelete = (index) => {
	deleteIndex.value = index
	deleteName.value = items.value[index]
	showDeleteConfirm.value = true
}

const closeDelete = () => {
	showDeleteConfirm.value = false
	deleteIndex.value = null
	deleteName.value = ''
}

const confirmDelete = () => {
	if (deleteIndex.value === null) {
		return
	}
	deleteItem(deleteIndex.value)
	closeDelete()
}
</script>
