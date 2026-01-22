<template>
  <div class="intro-page">
    <!-- Police System Header -->
    <div class="system-header">
      <div class="system-info">
        <div class="badge-number">STATION 1</div>
        <div class="status-indicator">
          <span class="status-dot"></span>
          <span class="status-text">SYSTEM ONLINE</span>
        </div>
      </div>
      <div class="digital-clock">
        <div class="clock-time">{{ currentTime }}</div>
        <div class="clock-date">{{ currentDate }}</div>
      </div>
    </div>

    <div class="logo-container">
      <div class="logo-wrapper">
        <div class="glow-circle"></div>
        <img 
          src="@/img/BCPO 1 LOGO.png" 
          alt="BCPO Logo" 
          class="logo"
          :class="{ 'fade-in': isAnimating }"
        />
      </div>
      <div class="loading-container">
        <div class="loading-bar">
          <div class="loading-progress" :style="{ width: progress + '%' }"></div>
        </div>
        <p class="loading-text">INITIALIZING SYSTEM... {{ Math.floor(progress) }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isAnimating = ref(false)
const progress = ref(0)
const currentTime = ref('')
const currentDate = ref('')
let clockInterval = null

const updateClock = () => {
  const now = new Date()
  
  // Format time as HH:MM:SS
  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  currentTime.value = `${hours}:${minutes}:${seconds}`
  
  // Format date as DD MMM YYYY
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  const day = String(now.getDate()).padStart(2, '0')
  const month = months[now.getMonth()]
  const year = now.getFullYear()
  currentDate.value = `${day} ${month} ${year}`
}

onMounted(() => {
  // Initialize clock
  updateClock()
  clockInterval = setInterval(updateClock, 1000)
  
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

onUnmounted(() => {
  if (clockInterval) {
    clearInterval(clockInterval)
  }
})
</script>

<style scoped>
.intro-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #001529;
  overflow: hidden;
  position: relative;
}

/* Police System Header */
.system-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  background: rgba(0, 21, 41, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 2px solid rgba(79, 125, 200, 0.3);
  z-index: 100;
  opacity: 0;
  animation: slideDown 1s ease-out 0.5s forwards;
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.system-info {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.badge-number {
  font-size: 0.9rem;
  font-weight: 700;
  color: #f3f1ee;
  letter-spacing: 2px;
  padding: 0.5rem 1rem;
  background: rgba(79, 125, 200, 0.2);
  border: 1px solid rgba(79, 125, 200, 0.5);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(79, 125, 200, 0.3);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  background: #00ff00;
  border-radius: 50%;
  box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.status-text {
  font-size: 0.75rem;
  font-weight: 600;
  color: #00ff00;
  letter-spacing: 1.5px;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
}

.digital-clock {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
}

.clock-time {
  font-size: 1.8rem;
  font-weight: 700;
  font-family: 'Courier New', monospace;
  color: #f3f1ee;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(79, 125, 200, 0.8),
               0 0 20px rgba(79, 125, 200, 0.5);
  animation: clock-glow 2s ease-in-out infinite;
}

.clock-date {
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Courier New', monospace;
  color: #4f7dc8;
  letter-spacing: 2px;
}

@keyframes clock-glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(79, 125, 200, 0.8),
                 0 0 20px rgba(79, 125, 200, 0.5);
  }
  50% {
    text-shadow: 0 0 15px rgba(79, 125, 200, 1),
                 0 0 30px rgba(79, 125, 200, 0.7);
  }
}

.intro-page::before,
.intro-page::after {
  content: none;
  display: none;
}

.particles,
.particle {
  display: none;
}

.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  z-index: 1;
}

.logo-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.glow-circle {
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(79, 125, 200, 0.3), transparent 70%);
  filter: blur(40px);
  animation: pulse-glow 3s ease-in-out infinite;
  z-index: 0;
}

@keyframes pulse-glow {
  0%, 100% {
    transform: scale(0.95);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
}

.logo {
  max-width: 320px;
  width: 80%;
  height: auto;
  opacity: 0;
  transform: scale(0.85) rotateY(10deg);
  transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 30px rgba(79, 125, 200, 0.4));
  position: relative;
  z-index: 1;
}

.logo.fade-in {
  opacity: 1;
  transform: scale(1) rotateY(0deg);
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) scale(1) rotate(0deg);
  }
  25% {
    transform: translateY(-8px) scale(1.02) rotate(1deg);
  }
  50% {
    transform: translateY(-15px) scale(1.03) rotate(0deg);
  }
  75% {
    transform: translateY(-8px) scale(1.02) rotate(-1deg);
  }
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
  height: 8px;
  background: linear-gradient(90deg, rgba(243, 241, 238, 0.1), rgba(79, 125, 200, 0.2), rgba(243, 241, 238, 0.1));
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4),
              inset 0 2px 4px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.15);
  position: relative;
}

.loading-bar::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: slide 2s infinite;
}

@keyframes slide {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.loading-progress {
  height: 100%;
  background: linear-gradient(90deg, 
    #4f7dc8 0%, 
    #6b9ade 20%, 
    #f3f1ee 50%, 
    #ffffff 70%, 
    #f3f1ee 100%);
  background-size: 200% 100%;
  border-radius: 12px;
  transition: width 0.3s ease-out;
  box-shadow: 0 0 20px rgba(243, 241, 238, 0.8),
              0 0 40px rgba(79, 125, 200, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.3);
  position: relative;
  overflow: hidden;
  animation: gradient-shift 2s ease infinite;
}

@keyframes gradient-shift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.loading-progress::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent);
  border-radius: 12px 12px 0 0;
}

.loading-progress::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  animation: shimmer 1.2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.loading-text {
  color: #f3f1ee;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0 0 10px rgba(79, 125, 200, 0.8),
               0 0 20px rgba(79, 125, 200, 0.5),
               0 2px 8px rgba(0, 0, 0, 0.8);
  animation: glow-text 2s ease-in-out infinite;
}

@keyframes glow-text {
  0%, 100% {
    opacity: 1;
    text-shadow: 0 0 10px rgba(79, 125, 200, 0.8),
                 0 0 20px rgba(79, 125, 200, 0.5),
                 0 2px 8px rgba(0, 0, 0, 0.8);
  }
  50% {
    opacity: 0.85;
    text-shadow: 0 0 15px rgba(79, 125, 200, 1),
                 0 0 30px rgba(79, 125, 200, 0.7),
                 0 2px 8px rgba(0, 0, 0, 0.8);
  }
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
