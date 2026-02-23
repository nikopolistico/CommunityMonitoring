<script setup>
import { ref, watch, onMounted, provide } from 'vue'
import { useRouter } from 'vue-router'
import { useSettings } from '@/composables/useSettings'
import { useTranslation } from '@/composables/useTranslation'

const router = useRouter()
const transitionName = ref('slide-right')
const { loadSettings, theme, language, pushNotifications } = useSettings()
const { setLanguage, t } = useTranslation()

// Provide settings and translation globally to all components
provide('theme', theme)
provide('language', language)
provide('t', t)
provide('setLanguage', setLanguage)

// Load settings on app mount
onMounted(async () => {
  await loadSettings()
  setLanguage(language.value)
})

// Watch for language changes
watch(language, (newLang) => {
  setLanguage(newLang)
})

watch(
  () => router.currentRoute.value,
  (to, from) => {
    // If coming FROM intro page (opening effect), use zoom transition
    if (from.path === '/') {
      transitionName.value = 'zoom-open'
    } else {
      transitionName.value = 'slide-right'
    }
  }
)
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component" :key="route.path" />
    </transition>
  </router-view>
</template>

<style>
/* Elegant Fade-Scale Transition (From Intro Page - Smooth Center Opening) */
.zoom-open-enter-active {
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}

.zoom-open-leave-active {
  transition: opacity 0.35s ease-in, transform 0.35s ease-in;
}

.zoom-open-enter-from {
  opacity: 0;
  transform: scale(0.96);
}

.zoom-open-leave-to {
  opacity: 0;
  transform: scale(1.02);
}

.zoom-open-enter-to,
.zoom-open-leave-from {
  opacity: 1;
  transform: scale(1);
}

/* Slide Right Transition (All Other Pages) */
.slide-right-enter-active {
  transition: all 0.35s ease-out;
}

.slide-right-leave-active {
  transition: all 0.25s ease-in;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.slide-right-enter-to,
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Prevent white flash and horizontal scroll */
body {
  overflow-x: hidden;
  background-color: #f3f1ee;
}

#app {
  background-color: #f3f1ee;
}
</style>
