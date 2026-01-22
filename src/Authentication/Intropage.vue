<template>
  <div class="intro-page">
    <div class="logo-container">
      <img 
        src="@/assets/BCPO 1 LOGO.png" 
        alt="BCPO Logo" 
        class="logo"
        :class="{ 'fade-in': isAnimating }"
      />
      <div class="loading-container">
        <div class="loading-bar">
          <div class="loading-progress" :style="{ width: progress + '%' }"></div>
        </div>
        <p class="loading-text">Loading...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAnimating = ref(false)
const progress = ref(0)

onMounted(() => {
  // Start fade-in animation
  setTimeout(() => {
    isAnimating.value = true
  }, 100)

  // Animate progress bar
  const duration = 3000 // 3 seconds
  const interval = 30
  const steps = duration / interval
  const increment = 100 / steps

  const progressInterval = setInterval(() => {
    progress.value += increment
    if (progress.value >= 100) {
      clearInterval(progressInterval)
      // Redirect to landing page after animation completes
      setTimeout(() => {
        router.push('/landing')
      }, 500)
    }
  }, interval)
})
</script>

<style scoped>
.intro-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #002147 0%, #00397a 50%, #004595 100%);
  overflow: hidden;
  position: relative;
}

.intro-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: pulse 3s ease-in-out infinite;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 1;
}

.logo {
  max-width: 300px;
  width: 80%;
  height: auto;
  opacity: 0;
  transform: scale(0.8);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
}

.logo.fade-in {
  opacity: 1;
  transform: scale(1);
}

.loading-container {
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.5s forwards;
}

.loading-bar {
  width: 100%;
  height: 4px;
  background-color: rgba(243, 241, 238, 0.2);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, #f3f1ee 0%, #ffffff 100%);
  border-radius: 10px;
  transition: width 0.3s ease-out;
  box-shadow: 0 0 10px rgba(243, 241, 238, 0.5);
}

.loading-text {
  color: #f3f1ee;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes blink {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* Responsive design */
@media (max-width: 768px) {
  .logo {
    max-width: 200px;
  }
  
  .loading-container {
    width: 250px;
  }
}

@media (max-width: 480px) {
  .logo {
    max-width: 150px;
  }
  
  .loading-container {
    width: 200px;
  }
  
  .loading-text {
    font-size: 0.8rem;
  }
}
</style>
