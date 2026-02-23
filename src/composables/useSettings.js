import { ref, watch, computed } from 'vue'
import { supabase } from '@/lib/supabase'

// Global reactive settings state
const theme = ref('light')
const language = ref('en')
const pushNotifications = ref(true)
const adminId = ref(null)

export function useSettings() {
  // Load settings from Supabase
  const loadSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('Administrator')
        .select('id, theme, language, push_notifications')
        .single()

      if (error) throw error

      if (data) {
        adminId.value = data.id
        theme.value = data.theme || 'light'
        language.value = data.language || 'en'
        pushNotifications.value = data.push_notifications !== false
        
        // Apply theme immediately
        applyTheme(theme.value)
      }
    } catch (error) {
      console.error('Error loading settings:', error)
      // Apply default theme
      applyTheme('light')
    }
  }

  // Save settings to Supabase
  const saveSettings = async (settings) => {
    if (!adminId.value) {
      console.error('No admin ID found')
      return { success: false, error: 'No admin profile loaded' }
    }

    try {
      const updates = {}
      
      if (settings.theme !== undefined) {
        updates.theme = settings.theme
        theme.value = settings.theme
        applyTheme(settings.theme)
      }
      
      if (settings.language !== undefined) {
        updates.language = settings.language
        language.value = settings.language
      }
      
      if (settings.pushNotifications !== undefined) {
        updates.push_notifications = settings.pushNotifications
        pushNotifications.value = settings.pushNotifications
      }

      const { error } = await supabase
        .from('Administrator')
        .update(updates)
        .eq('id', adminId.value)

      if (error) throw error

      return { success: true }
    } catch (error) {
      console.error('Error saving settings:', error)
      return { success: false, error: error.message }
    }
  }

  // Apply theme to document
  const applyTheme = (selectedTheme) => {
    const root = document.documentElement
    
    if (selectedTheme === 'dark') {
      root.classList.add('dark')
    } else if (selectedTheme === 'light') {
      root.classList.remove('dark')
    } else if (selectedTheme === 'auto') {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) {
        root.classList.add('dark')
      } else {
        root.classList.remove('dark')
      }
    }
  }

  // Watch for system theme changes when in auto mode
  if (typeof window !== 'undefined') {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    darkModeMediaQuery.addEventListener('change', (e) => {
      if (theme.value === 'auto') {
        applyTheme('auto')
      }
    })
  }

  return {
    theme: computed(() => theme.value),
    language: computed(() => language.value),
    pushNotifications: computed(() => pushNotifications.value),
    loadSettings,
    saveSettings,
    applyTheme
  }
}
