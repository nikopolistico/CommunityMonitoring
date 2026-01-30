const defaultCenter = { lat: 8.9475, lng: 125.5279 }

const barangayOptions = [
  { value: 'agao', label: 'Agao' },
  { value: 'baan-km-3', label: 'Baan KM 3' },
  { value: 'bansa', label: 'Bansa' },
  { value: 'bit-os', label: 'Bit-os' },
  { value: 'buhangin', label: 'Buhangin' },
  { value: 'dagohoy', label: 'Dagohoy' },
  { value: 'silongan', label: 'Silongan' },
  { value: 'diego-silang', label: 'Diego Silang' },
  { value: 'golden-ribbon', label: 'Golden Ribbon' },
  { value: 'imadejas', label: 'Imadejas' },
  { value: 'jp-rizal', label: 'JP Rizal' },
  { value: 'lapu-lapu', label: 'Lapu-Lapu' },
  { value: 'leon-kilat', label: 'Leon Kilat' },
  { value: 'mahay', label: 'Mahay' },
  { value: 'mahogany', label: 'Mahogany' },
  { value: 'maon', label: 'Maon' },
  { value: 'maug', label: 'Maug' },
  { value: 'new-society-village', label: 'New Society Village' },
  { value: 'pangabugan', label: 'Pangabugan' },
  { value: 'raja-humabon', label: 'Raja Humabon' },
  { value: 'raja-soliman', label: 'Raja Soliman' },
  { value: 'river-side', label: 'River Side' },
  { value: 'san-ignacio', label: 'San Ignacio' },
  { value: 'san-vicente', label: 'San Vicente' },
  { value: 'sikatuna', label: 'Sikatuna' },
  { value: 'tandang-sora', label: 'Tandang Sora' },
  { value: 'urduja', label: 'Urduja' },
  { value: 'villa-kanangga', label: 'Villa Kanangga' },
]

const markerIconUrls = {
  barangay: 'https://maps.gstatic.com/mapfiles/ms2/micons/orange-dot.png',
  church: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
  school: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
  business: 'https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png',
  default: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png',
}

const getCommunityData = () => {
  return barangayOptions.reduce((acc, option, index) => {
    const row = Math.floor(index / 7)
    const col = index % 7
    const latOffset = (row - 2) * 0.01
    const lngOffset = (col - 3) * 0.01

    const center = {
      lat: Number((defaultCenter.lat + latOffset).toFixed(6)),
      lng: Number((defaultCenter.lng + lngOffset).toFixed(6)),
    }

    const markers = [
      {
        name: `${option.label} Barangay Center`,
        type: 'barangay',
        coordinates: { ...center },
      },
    ]

    acc[option.value] = {
      name: option.label,
      center,
      markers,
      schools: [
        `${option.label} Elementary School`,
        `${option.label} Integrated School`,
        `${option.label} Senior High School`,
      ],
      churches: [
        `${option.label} Parish Church`,
        `${option.label} Chapel`,
        `${option.label} Christian Fellowship`,
      ],
      businesses: [
        `${option.label} Public Market`,
        `${option.label} Commercial Center`,
        `${option.label} Cooperative Store`,
      ],
    }

    return acc
  }, {})
}

const communityData = getCommunityData()

<<<<<<< HEAD
export { defaultCenter, barangayOptions, communityData, markerIconUrls }
=======
const eventsData = [
  // January 2025 events
  {
    id: '1',
    title: 'Barangay Assembly - Agao',
    start: '2025-01-25',
    barangay: 'agao',
    description: 'Monthly barangay assembly meeting'
  },
  {
    id: '2',
    title: 'Health Check-up - Baan KM 3',
    start: '2025-01-26',
    barangay: 'baan-km-3',
    description: 'Free health check-up for residents'
  },
  {
    id: '3',
    title: 'Clean-up Drive - Bansa',
    start: '2025-01-27',
    barangay: 'bansa',
    description: 'Community clean-up activity'
  },
  {
    id: '4',
    title: 'Youth Program - Bit-os',
    start: '2025-01-28',
    barangay: 'bit-os',
    description: 'Youth development program'
  },
  {
    id: '5',
    title: 'Senior Citizen Meeting - Buhangin',
    start: '2025-01-29',
    barangay: 'buhangin',
    description: 'Monthly senior citizen gathering'
  },
  {
    id: '6',
    title: 'Tree Planting - Dagohoy',
    start: '2025-01-30',
    barangay: 'dagohoy',
    description: 'Environmental activity'
  },
  {
    id: '7',
    title: 'Sports Festival - Silongan',
    start: '2025-01-31',
    barangay: 'silongan',
    description: 'Barangay sports event'
  },
  // February 2025 events
  {
    id: '8',
    title: 'Medical Mission - Diego Silang',
    start: '2025-02-01',
    barangay: 'diego-silang',
    description: 'Free medical services'
  },
  {
    id: '9',
    title: 'Cultural Show - Golden Ribbon',
    start: '2025-02-02',
    barangay: 'golden-ribbon',
    description: 'Cultural presentation'
  },
  {
    id: '10',
    title: 'Livelihood Training - Imadejas',
    start: '2025-02-03',
    barangay: 'imadejas',
    description: 'Skills training program'
  },
  {
    id: '11',
    title: 'Community Prayer - JP Rizal',
    start: '2025-02-04',
    barangay: 'jp-rizal',
    description: 'Religious gathering'
  },
  {
    id: '12',
    title: 'Barangay Fiesta - Lapu-Lapu',
    start: '2025-02-05',
    barangay: 'lapu-lapu',
    description: 'Annual barangay celebration'
  },
  {
    id: '13',
    title: 'Environmental Awareness - Leon Kilat',
    start: '2025-02-06',
    barangay: 'leon-kilat',
    description: 'Environmental education program'
  },
  {
    id: '14',
    title: 'Women\'s Health Seminar - Mahay',
    start: '2025-02-07',
    barangay: 'mahay',
    description: 'Health awareness for women'
  },
  {
    id: '15',
    title: 'Youth Sports League - Mahogany',
    start: '2025-02-08',
    barangay: 'mahogany',
    description: 'Youth sports competition'
  },
  // Multiple events on same day
  {
    id: '16',
    title: 'Community Meeting - Maon',
    start: '2025-02-10',
    barangay: 'maon',
    description: 'General community meeting'
  },
  {
    id: '17',
    title: 'Vaccination Drive - Maon',
    start: '2025-02-10',
    barangay: 'maon',
    description: 'COVID-19 vaccination program'
  },
  {
    id: '18',
    title: 'Senior Citizen Program - Maug',
    start: '2025-02-11',
    barangay: 'maug',
    description: 'Activities for senior citizens'
  },
  {
    id: '19',
    title: 'Business Forum - New Society Village',
    start: '2025-02-12',
    barangay: 'new-society-village',
    description: 'Local business networking'
  },
  {
    id: '20',
    title: 'Agricultural Training - Pangabugan',
    start: '2025-02-13',
    barangay: 'pangabugan',
    description: 'Farming techniques workshop'
  }
]

export { defaultCenter, barangayOptions, communityData, markerIconUrls, eventsData }
>>>>>>> 67db0329c2d7b6e6fc7c4d8cafcafd81e78b2f29
