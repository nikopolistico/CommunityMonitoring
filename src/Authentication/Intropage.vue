<template>
  <div class="w-screen h-screen flex justify-center items-center bg-gradient-to-br from-[#002147] to-[#00397a] text-white">
    <div class="text-center max-w-lg px-8">
      <div class="mb-8 flex justify-center items-center">
        <img 
          src="@/assets/BCPO 1 LOGO.png" 
          alt="BCPO Logo" 
          class="w-30 h-30 object-contain animate-pulse"
        />
      </div>
      <h1 class="text-3xl font-bold text-white mb-2 tracking-wide">Community Monitoring System</h1>
      <p class="text-base text-blue-100 mb-12 font-medium">Butuan City Police Station 1</p>
      <div class="w-full">
        <div class="w-full h-1.5 bg-white/20 rounded-full overflow-hidden mb-4">
          <div 
            class="h-full bg-gradient-to-r from-[#004595] to-[#00397a] rounded-full transition-all duration-300 ease-out" 
            :style="{ width: progress + '%' }"
          ></div>
        </div>
        <p class="text-sm text-slate-100 font-medium m-0">Loading... {{ Math.floor(progress) }}%</p>
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
</style>
