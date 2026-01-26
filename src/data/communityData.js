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

export { defaultCenter, barangayOptions, communityData, markerIconUrls }