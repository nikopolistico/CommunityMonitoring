<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-[#002147] via-[#00397a] to-[#004595] text-white relative overflow-hidden font-['Poppins',sans-serif]">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    </div>

    <div class="text-center max-w-2xl px-8 relative z-10">
      <!-- Logo with Glow Effect -->
      <div class="mb-6 flex justify-center items-center">
        <div class="relative">
          <div class="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
          <img 
            src="@/assets/BCPO 1 LOGO.png" 
            alt="BCPO Logo" 
            class="w-48 h-48 object-contain relative z-10 drop-shadow-2xl"
          />
        </div>
      </div>

      <!-- Title Section with Better Spacing -->
      <div class="mb-10">
        <h1 class="text-4xl font-extrabold text-white mb-3 tracking-wide drop-shadow-lg">
          Community Monitoring System
        </h1>
        <div class="flex items-center justify-center gap-3 mb-2">
          <div class="h-px w-12 bg-gradient-to-r from-transparent to-white/50"></div>
          <p class="text-lg text-blue-100 font-semibold tracking-wider">
            Butuan City Police Station 1
          </p>
          <div class="h-px w-12 bg-gradient-to-l from-transparent to-white/50"></div>
        </div>
        <p class="text-sm text-slate-200/80 italic">Serving and Protecting the Community</p>
      </div>

      <!-- Enhanced Progress Bar -->
      <div class="w-full max-w-md mx-auto">
        <div class="relative w-full h-2 bg-white/20 rounded-full overflow-hidden mb-3 shadow-inner backdrop-blur-sm border border-white/30">
          <!-- Shimmer Effect -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          <!-- Progress Fill -->
          <div 
            class="h-full bg-white rounded-full transition-all duration-300 ease-out relative shadow-lg" 
            :style="{ width: progress + '%' }"
          >
            <div class="absolute inset-0 bg-white/40 animate-pulse"></div>
          </div>
        </div>
        <p class="text-sm text-slate-100 font-semibold tracking-wide">
          Loading<span class="animate-pulse">...</span> {{ Math.floor(progress) }}%
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
/* Import Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite;
}
</style>
