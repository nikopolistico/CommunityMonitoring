import { ref, computed } from 'vue'

const currentLanguage = ref('en')

const translations = {
  en: {
    // Common Navigation
    dashboard: 'Dashboard',
    calendar: 'Calendar',
    records: 'Records',
    community: 'Community',
    settings: 'Settings',
    logout: 'Sign Out',
    loggingOut: 'Signing Out...',
    signOut: 'Sign Out',
    confirmLogout: 'Are you sure you want to end your session?',
    logoutSuccess: 'Successfully Signed Out',
    sessionEnded: 'Session Ended',
    sessionEndedMessage: 'Your session has been securely ended',
    redirecting: 'Redirecting to login page...',
    confirm: 'Confirm',
    loading: 'Loading...',
    badgeNo: 'Badge #',
    
    // Dashboard
    totalBarangays: 'Total Barangays',
    totalSchools: 'Total Schools',
    totalChurches: 'Total Churches',
    totalEstablishments: 'Total Establishments',
    recentActivity: 'Recent Activity',
    weatherForecast: 'Weather Forecast',
    todaySchedule: 'Today\'s Schedule',
    weather: 'Weather',
    policeStationTitle: 'Butuan City Police Station 1',
    communityMonitoring: 'Community monitoring across 28 barangays',
    
    // Common Actions
    add: 'Add',
    edit: 'Edit',
    delete: 'Delete',
    save: 'Save',
    cancel: 'Cancel',
    confirm: 'Confirm',
    search: 'Search',
    filter: 'Filter',
    export: 'Export',
    import: 'Import',
    refresh: 'Refresh',
    
    // Common Labels
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    date: 'Date',
    time: 'Time',
    status: 'Status',
    type: 'Type',
    description: 'Description',
    location: 'Location',
    
    // Status
    active: 'Active',
    inactive: 'Inactive',
    pending: 'Pending',
    completed: 'Completed',
    cancelled: 'Cancelled',
    
    // Time
    today: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    thisWeek: 'This Week',
    thisMonth: 'This Month',
    
    // Settings Page
    manageAccount: 'Manage your account and application preferences',
    adminProfile: 'Administrator Profile',
    personalInfo: 'Your personal information',
    emailAddress: 'Email Address',
    badgeNumber: 'Badge Number',
    notSet: 'Not set',
    accountSecurity: 'Account Security',
    updatePassword: 'Update your password',
    newPassword: 'New Password',
    enterNewPassword: 'Enter new password',
    passwordRequirements: 'Password Requirements:',
    atLeast8Chars: 'At least 8 characters',
    oneUppercase: 'One uppercase letter (A-Z)',
    oneLowercase: 'One lowercase letter (a-z)',
    oneNumber: 'One number (0-9)',
    oneSpecial: 'One special character (!@#$%^&*)',
    passwordStrength: 'Password Strength:',
    weak: 'Weak',
    medium: 'Medium',
    strong: 'Strong',
    savePassword: 'Save Password',
    notifications: 'Notifications',
    notificationPreferences: 'Manage your notification preferences',
    pushNotifications: 'Push Notifications',
    receivePushNotifications: 'Receive push notifications',
    appearance: 'Appearance',
    customizeInterface: 'Customize your interface',
    theme: 'Theme',
    light: '☀️ Light',
    dark: '🌙 Dark',
    auto: '🔄 Auto',
    language: 'Language',
    english: '🇺🇸 English',
    filipino: '🇵🇭 Filipino',
    cebuano: '🌴 Cebuano',
    
    // Toast messages
    success: 'Success!',
    updateFailed: 'Update Failed',
    invalidEmail: 'Invalid Email',
    invalidPassword: 'Invalid Password',
    passwordUpdated: 'Password updated successfully! Please use your new password on next login.',
    profilePictureUpdated: 'Profile picture updated successfully!',
    settingsUpdated: 'Settings updated successfully!',
    
    // Edit Modal
    saveChanges: 'Save Changes',
    enterEmail: 'Enter email address',
    enterBadgeNumber: 'Enter badge number',
    
    // Police/Admin
    badgeNo: 'Badge No.',
    administrator: 'Administrator',
    officer: 'Officer',
    
    // Community
    barangay: 'Barangay',
    barangays: 'Barangays',
    school: 'School',
    schools: 'Schools',
    church: 'Church',
    churches: 'Churches',
    establishment: 'Establishment',
    establishments: 'Establishments'
  },
  fil: {
    // Common Navigation - Filipino
    dashboard: 'Dashboard',
    calendar: 'Kalendaryo',
    records: 'Mga Rekord',
    community: 'Komunidad',
    settings: 'Mga Setting',
    logout: 'Mag-logout',
    loggingOut: 'Nag-lo-logout...',
    signOut: 'Mag-logout',
    confirmLogout: 'Sigurado ka bang gusto mong tapusin ang iyong session?',
    logoutSuccess: 'Matagumpay na Nag-logout',
    sessionEnded: 'Natapos na ang Session',
    sessionEndedMessage: 'Ang iyong session ay ligtas na natapos',
    redirecting: 'Ipi-redirect sa login page...',
    loading: 'Naglo-load...',
    badgeNo: 'Badge #',
    
    // Dashboard
    totalBarangays: 'Kabuuang Barangay',
    totalSchools: 'Kabuuang Paaralan',
    totalChurches: 'Kabuuang Simbahan',
    totalEstablishments: 'Kabuuang Establisimiento',
    recentActivity: 'Kamakailang Aktibidad',
    weatherForecast: 'Taya ng Panahon',
    todaySchedule: 'Iskedyul Ngayong Araw',
    weather: 'Panahon',
    policeStationTitle: 'Butuan City Police Station 1',
    communityMonitoring: 'Pagsubaybay ng komunidad sa 28 barangay',
    
    // Common Actions
    add: 'Magdagdag',
    edit: 'I-edit',
    delete: 'Tanggalin',
    save: 'I-save',
    cancel: 'Kanselahin',
    confirm: 'Kumpirmahin',
    search: 'Maghanap',
    filter: 'I-filter',
    export: 'I-export',
    import: 'I-import',
    refresh: 'I-refresh',
    
    // Common Labels
    name: 'Pangalan',
    email: 'Email',
    phone: 'Telepono',
    address: 'Address',
    date: 'Petsa',
    time: 'Oras',
    status: 'Katayuan',
    type: 'Uri',
    description: 'Paglalarawan',
    location: 'Lokasyon',
    
    // Status
    active: 'Aktibo',
    inactive: 'Hindi Aktibo',
    pending: 'Naghihintay',
    completed: 'Tapos Na',
    cancelled: 'Kinansela',
    
    // Time
    today: 'Ngayong Araw',
    yesterday: 'Kahapon',
    tomorrow: 'Bukas',
    thisWeek: 'Linggong Ito',
    thisMonth: 'Buwang Ito',
    
    // Settings Page
    settings: 'Mga Setting',
    manageAccount: 'Pamahalaan ang iyong account at mga kagustuhan sa application',
    adminProfile: 'Profile ng Administrator',
    personalInfo: 'Ang iyong personal na impormasyon',
    emailAddress: 'Email Address',
    badgeNumber: 'Numero ng Badge',
    notSet: 'Hindi nakatakda',
    accountSecurity: 'Seguridad ng Account',
    updatePassword: 'I-update ang iyong password',
    newPassword: 'Bagong Password',
    enterNewPassword: 'Ilagay ang bagong password',
    passwordRequirements: 'Mga Kinakailangan sa Password:',
    atLeast8Chars: 'Hindi bababa sa 8 karakter',
    oneUppercase: 'Isang malaking titik (A-Z)',
    oneLowercase: 'Isang maliit na titik (a-z)',
    oneNumber: 'Isang numero (0-9)',
    oneSpecial: 'Isang espesyal na karakter (!@#$%^&*)',
    passwordStrength: 'Lakas ng Password:',
    weak: 'Mahina',
    medium: 'Katamtaman',
    strong: 'Malakas',
    savePassword: 'I-save ang Password',
    notifications: 'Mga Notipikasyon',
    notificationPreferences: 'Pamahalaan ang iyong mga kagustuhan sa notipikasyon',
    pushNotifications: 'Push Notifications',
    receivePushNotifications: 'Tumanggap ng push notifications',
    appearance: 'Hitsura',
    customizeInterface: 'I-customize ang iyong interface',
    theme: 'Tema',
    light: '☀️ Maliwanag',
    dark: '🌙 Madilim',
    auto: '🔄 Awtomatiko',
    language: 'Wika',
    english: '🇺🇸 Ingles',
    filipino: '🇵🇭 Filipino',
    cebuano: '🌴 Cebuano',
    
    // Toast messages
    success: 'Tagumpay!',
    updateFailed: 'Nabigo ang Pag-update',
    invalidEmail: 'Hindi Valid na Email',
    invalidPassword: 'Hindi Valid na Password',
    passwordUpdated: 'Matagumpay na na-update ang password! Pakigamit ang iyong bagong password sa susunod na pag-login.',
    profilePictureUpdated: 'Matagumpay na na-update ang profile picture!',
    settingsUpdated: 'Matagumpay na na-update ang mga setting!',
    
    // Edit Modal
    saveChanges: 'I-save ang mga Pagbabago',
    enterEmail: 'Ilagay ang email address',
    enterBadgeNumber: 'Ilagay ang numero ng badge',
    
    // Police/Admin
    badgeNo: 'Badge No.',
    administrator: 'Tagapangasiwa',
    officer: 'Opisyal',
    
    // Community
    barangay: 'Barangay',
    barangays: 'Mga Barangay',
    school: 'Paaralan',
    schools: 'Mga Paaralan',
    church: 'Simbahan',
    churches: 'Mga Simbahan',
    establishment: 'Establisimiento',
    establishments: 'Mga Establisimiento'
  },
  ceb: {
    // Common Navigation - Cebuano
    dashboard: 'Dashboard',
    calendar: 'Kalendaryo',
    records: 'Mga Rekord',
    community: 'Komunidad',
    settings: 'Mga Setting',
    logout: 'Mag-logout',
    loggingOut: 'Nag-logout na...',
    signOut: 'Mag-logout',
    confirmLogout: 'Sigurado ka bang gusto mong tapuson ang imong session?',
    logoutSuccess: 'Malampuson nga Nag-logout',
    sessionEnded: 'Nahuman na ang Session',
    sessionEndedMessage: 'Ang imong session luwas nga nahuman',
    redirecting: 'Gi-redirect sa login page...',
    loading: 'Nag-load...',
    badgeNo: 'Badge #',
    
    // Dashboard
    totalBarangays: 'Kinatibuk-ang Barangay',
    totalSchools: 'Kinatibuk-ang Eskwelahan',
    totalChurches: 'Kinatibuk-ang Simbahan',
    totalEstablishments: 'Kinatibuk-ang Establisimiento',
    recentActivity: 'Bag-ong Aktibidad',
    weatherForecast: 'Panagna sa Panahon',
    todaySchedule: 'Iskedyul Karong Adlawa',
    weather: 'Panahon',
    policeStationTitle: 'Butuan City Police Station 1',
    communityMonitoring: 'Pagsubay sa komunidad sa 28 barangay',
    
    // Common Actions
    add: 'Idugang',
    edit: 'I-edit',
    delete: 'Tangtangon',
    save: 'I-save',
    cancel: 'Kanselahon',
    confirm: 'Kompirmahon',
    search: 'Pangitaon',
    filter: 'I-filter',
    export: 'I-export',
    import: 'I-import',
    refresh: 'I-refresh',
    
    // Common Labels
    name: 'Ngalan',
    email: 'Email',
    phone: 'Telepono',
    address: 'Address',
    date: 'Petsa',
    time: 'Oras',
    status: 'Kahimtang',
    type: 'Matang',
    description: 'Paghulagway',
    location: 'Lokasyon',
    
    // Status
    active: 'Aktibo',
    inactive: 'Dili Aktibo',
    pending: 'Naghulat',
    completed: 'Human Na',
    cancelled: 'Gikansela',
    
    // Time
    today: 'Karong Adlawa',
    yesterday: 'Kagahapon',
    tomorrow: 'Ugma',
    thisWeek: 'Karong Semanaha',
    thisMonth: 'Karong Bulana',
    
    // Settings Page
    settings: 'Mga Setting',
    manageAccount: 'Dumala sa imong account ug mga gusto sa application',
    adminProfile: 'Profile sa Administrator',
    personalInfo: 'Ang imong personal nga impormasyon',
    emailAddress: 'Email Address',
    badgeNumber: 'Numero sa Badge',
    notSet: 'Wala pa gi-set',
    accountSecurity: 'Seguridad sa Account',
    updatePassword: 'I-update ang imong password',
    newPassword: 'Bag-ong Password',
    enterNewPassword: 'Isulod ang bag-ong password',
    passwordRequirements: 'Mga Kinahanglan sa Password:',
    atLeast8Chars: 'Dili ubos sa 8 ka karakter',
    oneUppercase: 'Usa ka dako nga letra (A-Z)',
    oneLowercase: 'Usa ka gamay nga letra (a-z)',
    oneNumber: 'Usa ka numero (0-9)',
    oneSpecial: 'Usa ka espesyal nga karakter (!@#$%^&*)',
    passwordStrength: 'Kusog sa Password:',
    weak: 'Huyang',
    medium: 'Kasarangan',
    strong: 'Kusgan',
    savePassword: 'I-save ang Password',
    notifications: 'Mga Notipikasyon',
    notificationPreferences: 'Dumala sa imong mga gusto sa notipikasyon',
    pushNotifications: 'Push Notifications',
    receivePushNotifications: 'Dawaton ang push notifications',
    appearance: 'Dagway',
    customizeInterface: 'I-customize ang imong interface',
    theme: 'Tema',
    light: '☀️ Hayag',
    dark: '🌙 Ngitngit',
    auto: '🔄 Awtomatiko',
    language: 'Pinulongan',
    english: '🇺🇸 English',
    filipino: '🇵🇭 Filipino',
    cebuano: '🌴 Cebuano',
    
    // Toast messages
    success: 'Malampuson!',
    updateFailed: 'Napakyas ang Pag-update',
    invalidEmail: 'Dili Valid nga Email',
    invalidPassword: 'Dili Valid nga Password',
    passwordUpdated: 'Malampuson nga na-update ang password! Gamita ang imong bag-ong password sa sunod nga pag-login.',
    profilePictureUpdated: 'Malampuson nga na-update ang profile picture!',
    settingsUpdated: 'Malampuson nga na-update ang mga setting!',
    
    // Edit Modal
    saveChanges: 'I-save ang mga Kausaban',
    enterEmail: 'Isulod ang email address',
    enterBadgeNumber: 'Isulod ang numero sa badge',
    
    // Police/Admin
    badgeNo: 'Badge No.',
    administrator: 'Tagdumala',
    officer: 'Opisyal',
    
    // Community
    barangay: 'Barangay',
    barangays: 'Mga Barangay',
    school: 'Eskwelahan',
    schools: 'Mga Eskwelahan',
    church: 'Simbahan',
    churches: 'Mga Simbahan',
    establishment: 'Establisimiento',
    establishments: 'Mga Establisimiento'
  }
}

export function useTranslation() {
  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLanguage.value = lang
    }
  }

  const t = (key) => {
    return translations[currentLanguage.value]?.[key] || translations.en[key] || key
  }

  return {
    currentLanguage: computed(() => currentLanguage.value),
    setLanguage,
    t
  }
}
