<template>
  <div class="p-8">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-[#002147] mb-2">Records</h1>
        <p class="text-gray-600">View and manage all barangay records</p>
      </div>

      <!-- Search and Filter Section -->
      <div class="bg-white rounded-xl shadow-lg p-6 mb-6">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <input
              type="text"
              placeholder="Search records..."
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004595]"
            />
          </div>
          <button
            class="px-6 py-2 bg-[#004595] text-white rounded-lg hover:bg-[#002147] transition-colors"
          >
            Search
          </button>
          <button
            @click="exportToExcel"
            class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            Export to Excel
          </button>
        </div>
      </div>

      <!-- Records Table -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="bg-[#002147] text-white">
              <tr>
                <th class="px-4 py-3 text-left font-semibold">#</th>
                <th class="px-4 py-3 text-left font-semibold">Barangay</th>
                <th class="px-4 py-3 text-left font-semibold">Captain</th>
                <th class="px-4 py-3 text-left font-semibold">Members</th>
                <th class="px-4 py-3 text-left font-semibold">Patron</th>
                <th class="px-4 py-3 text-left font-semibold">Fiesta Date</th>
                <th class="px-4 py-3 text-left font-semibold">Schools</th>
                <th class="px-4 py-3 text-left font-semibold">Churches</th>
                <th class="px-4 py-3 text-left font-semibold">Establishments</th>
                <th class="px-4 py-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-if="loading">
                <td colspan="9" class="px-6 py-8 text-center text-gray-500">
                  Loading records...
                </td>
              </tr>
              <tr v-else-if="records.length === 0">
                <td colspan="9" class="px-6 py-8 text-center text-gray-500">
                  No records found
                </td>
              </tr>
              <tr v-else v-for="(record, index) in records" :key="index" class="hover:bg-gray-50">
                <td class="px-4 py-3 text-gray-600">{{ index + 1 }}</td>
                <td class="px-4 py-3 font-medium text-[#002147]">{{ record.brgyname || '-' }}</td>
                <td class="px-4 py-3">{{ record.cptfullname || '-' }}</td>
                <td class="px-4 py-3">{{ record.bmfullname || '-' }}</td>
                <td class="px-4 py-3">{{ record.patron || '-' }}</td>
                <td class="px-4 py-3">{{ record.date || '-' }}</td>
                <td class="px-4 py-3">{{ record.schoolname || '-' }}</td>
                <td class="px-4 py-3">{{ record.churchname || '-' }}</td>
                <td class="px-4 py-3">{{ record.establishmentname || '-' }}</td>
                <td class="px-4 py-3">
                  <button
                    @click="exportSingleBarangay(record)"
                    class="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                  >
                    Download
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '@/lib/supabase';
import * as XLSX from 'xlsx-js-style';
import { ref, onMounted } from 'vue'

const records = ref([])
const loading = ref(false)

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
  exportRecordsToExcel(
    records.value,
    `Barangay_Records_${new Date().toISOString().split('T')[0]}.xlsx`,
    'All Barangays'
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