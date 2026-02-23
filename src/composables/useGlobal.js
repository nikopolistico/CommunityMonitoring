import { inject } from 'vue'
import { useTranslation as useTranslationComposable } from './useTranslation'
import { useSettings as useSettingsComposable } from './useSettings'

/**
 * Global composable that can be used in any component
 * Provides access to theme, language, and translation functions
 * 
 * Usage in any component:
 * import { useGlobal } from '@/composables/useGlobal'
 * const { theme, language, t } = useGlobal()
 */
export function useGlobal() {
  // Try to get from inject first (provided by App.vue)
  const injectedTheme = inject('theme', null)
  const injectedLanguage = inject('language', null)
  const injectedT = inject('t', null)
  const injectedSetLanguage = inject('setLanguage', null)

  // Fallback to direct composable usage if not injected
  const { theme: settingsTheme, language: settingsLanguage } = useSettingsComposable()
  const { t: translationT, setLanguage: translationSetLanguage } = useTranslationComposable()

  return {
    theme: injectedTheme || settingsTheme,
    language: injectedLanguage || settingsLanguage,
    t: injectedT || translationT,
    setLanguage: injectedSetLanguage || translationSetLanguage
  }
}
