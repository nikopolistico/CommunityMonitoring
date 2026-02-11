<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-[#001a35] via-[#002147] to-[#00397a] text-white overflow-hidden relative"
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
    </div>

    <div class="text-center max-w-2xl px-8 relative z-10">
      <!-- Logo Section -->
      <div class="mb-10 flex justify-center items-center">
        <div class="relative">
          <div class="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse"></div>
          <img
            src="@/assets/BCPO 1 LOGO.png"
            alt="BCPO Logo"
            class="w-36 h-36 object-contain relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>

      <!-- Title Section -->
      <div class="mb-14 space-y-3">
        <h1 class="text-5xl font-bold text-white mb-3 tracking-tight leading-tight drop-shadow-lg">
          Community Monitoring System
        </h1>
        <div class="flex items-center justify-center gap-3">
          <div class="h-px w-12 bg-gradient-to-r from-transparent to-white/60"></div>
          <p class="text-lg text-blue-100/90 font-medium tracking-wide">
            Butuan City Police Station 1
          </p>
          <div class="h-px w-12 bg-gradient-to-l from-transparent to-white/60"></div>
        </div>
      </div>

      <!-- Progress Bar Section -->
      <div class="w-full max-w-md mx-auto">
        <div class="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4 shadow-lg backdrop-blur-sm">
          <div
            class="h-full bg-white rounded-full transition-all duration-300 ease-out shadow-lg"
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        <p class="text-sm text-white/80 font-medium tracking-wider">
          Loading... {{ Math.floor(progress) }}%
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const progress = ref(0)

onMounted(() => {
  // Animate progress bar
  const duration = 2000 // 2 seconds
  const interval = 20
  const steps = duration / interval
  const increment = 100 / steps

  const progressInterval = setInterval(() => {
    progress.value += increment
    if (progress.value >= 100) {
      clearInterval(progressInterval)
      // Redirect to landing page after animation completes
      setTimeout(() => {
        router.push('/landing')
      }, 300)
    }
  }, interval)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  font-family: 'Poppins', sans-serif;
}
</style>
