<template>
  <div
    class="relative min-h-screen bg-[#f3f1ee] text-[#002147] font-['Poppins',sans-serif] overflow-x-hidden"
  >
    <!-- Navigation Header -->
    <nav
      class="fixed top-0 left-0 right-0 flex justify-between items-center px-12 py-4 bg-[#002147] shadow-[0_2px_10px_rgba(0,33,71,0.1)] z-100 animate-slideDown"
    >
      <div class="flex items-center gap-4">
        <img
          src="@/assets/BCPO 1 LOGO.png"
          alt="BCPS 1 Logo"
          class="h-12.5 w-auto animate-fadeIn"
        />
        <span class="text-[0.95rem] font-bold text-white tracking-[0.5px] animate-fadeIn"
          >BUTUAN CITY POLICE STATION 1</span
        >
      </div>
      <router-link
        to="/login"
        class="flex items-center gap-2 px-7 py-2.5 font-semibold text-[0.95rem] no-underline bg-[#004595] text-white border-2 border-white rounded-full transition-all duration-500 ease-in-out cursor-pointer shadow-[0_2px_8px_rgba(0,33,71,0.10)] tracking-wider hover:shadow-[0_6px_20px_rgba(0,69,149,0.35)] hover:scale-105 hover:brightness-110 animate-fadeIn"
      >
        <svg class="w-4 h-4 transition-transform duration-500 ease-in-out group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
          />
        </svg>
        Sign In
      </router-link>
    </nav>

    <div class="flex flex-col">
      <!-- Hero Section -->
      <section class="hero-container">
        <div class="relative z-1 text-center max-w-275 mx-auto px-4 animate-fadeInUp">
          <div
            class="flex justify-center items-center gap-16 mb-12 max-md:gap-6 max-sm:gap-3 animate-scaleIn"
          >
            <div class="flex justify-center items-center gap-10 max-md:gap-6 max-sm:gap-4">

  <!-- BCPO -->
  <div class="flex items-center justify-center w-30 h-30 max-md:w-20 max-md:h-20">
    <img
      src="@/assets/BCPO 1 LOGO.png"
      alt="BCPS 1 Logo"
      class="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
    />
  </div>

  <!-- PNP -->
  <div class="flex items-center justify-center w-30 h-30 max-md:w-20 max-md:h-20">
    <img
      src="@/assets/pnplogo.png"
      alt="PNP Logo"
      class="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
    />
  </div>

  <!-- ✅ PNP BUTUAN (slightly bigger, spacing steady) -->
  <div class="flex items-center justify-center w-30 h-30 max-md:w-20 max-md:h-20 overflow-visible">
    <img
      src="@/assets/pnpbutuan.png"
      alt="PNP Butuan Logo"
      class="w-full h-full object-contain scale-200 hover:scale-220 transition-transform duration-300"
    />
  </div>

</div>

          </div>
          <h1
            class="text-[2.75rem] font-extrabold text-white mb-6 tracking-wider [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)] max-md:text-[1.75rem] animate-fadeInUp animation-delay-200"
          >
            COMMUNITY MONITORING SYSTEM
          </h1>
          <p
            class="text-lg text-[#f3f1ee] leading-[1.7] mb-10 [text-shadow:1px_1px_6px_rgba(0,0,0,0.5)] max-md:text-base max-w-175 mx-auto animate-fadeInUp animation-delay-400"
          >
            Real-time monitoring and coordination for schools, businesses, and community events
            across 28 barangays in Butuan City.
          </p>
          <router-link
            to="/login"
            class="inline-flex items-center gap-2 px-12 py-4 text-lg font-semibold bg-[#004595] text-white border-2 border-white rounded-full no-underline transition-all duration-500 ease-in-out cursor-pointer shadow-[0_2px_8px_rgba(0,33,71,0.10)] tracking-wider hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)] hover:scale-105 hover:brightness-110 animate-fadeInUp animation-delay-600"
          >
            <svg class="w-5 h-5 transition-transform duration-500 ease-in-out hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Access System
          </router-link>
        </div>
      </section>

      <!-- Info Cards -->
      <section class="info-section">
        <div class="relative z-1 grid grid-cols-3 gap-8 max-w-300 mx-auto max-md:grid-cols-1 px-4">
          <div
            class="bg-white/90 backdrop-blur-[10px] p-8 text-center border-2 border-[#004595] rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,69,149,0.25)] hover:bg-white hover:border-[#002147] animate-fadeInUp animation-delay-100"
          >
            <div class="text-5xl font-extrabold text-[#004595] mb-3 animate-countUp">28</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[1px]">
              Barangays Covered
            </div>
          </div>
          <div
            class="bg-white/90 backdrop-blur-[10px] p-8 text-center border-2 border-[#004595] rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,69,149,0.25)] hover:bg-white hover:border-[#002147] animate-fadeInUp animation-delay-300"
          >
            <div class="text-5xl font-extrabold text-[#004595] mb-3">24/7</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[1px]">
              Monitoring
            </div>
          </div>
          <div
            class="bg-white/90 backdrop-blur-[10px] p-8 text-center border-2 border-[#004595] rounded-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,69,149,0.25)] hover:bg-white hover:border-[#002147] animate-fadeInUp animation-delay-500"
          >
            <div class="text-5xl font-extrabold text-[#004595] mb-3 animate-countUp">100%</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[1px]">
              Coverage
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section">
        <h2
          class="relative z-1 text-center text-[2.5rem] font-extrabold text-white mb-14 tracking-[1.5px] [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)] max-md:text-[1.75rem] animate-fadeInUp"
        >
          OUR SERVICES
        </h2>
        <div class="relative z-1 grid grid-cols-2 gap-8 max-w-300 mx-auto max-md:grid-cols-1 px-4">
          <div class="service-card animate-fadeInUp animation-delay-100">
            <div class="flex items-start gap-4 mb-4">
              <div class="p-3 bg-white/20 rounded-lg">
                <svg
                  class="w-8 h-8 text-white stroke-[2.5] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <div>
                <h3
                  class="text-[1.35rem] font-bold text-white mb-3 tracking-[0.5px] [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)]"
                >
                  Educational Institutions
                </h3>
                <p class="text-base text-[#f3f1ee] leading-[1.6] opacity-95">
                  Monitoring and support for schools within our jurisdiction
                </p>
              </div>
            </div>
          </div>
          <div class="service-card animate-fadeInUp animation-delay-200">
            <div class="flex items-start gap-4 mb-4">
              <div class="p-3 bg-white/20 rounded-lg">
                <svg
                  class="w-8 h-8 text-white stroke-[2.5] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div>
                <h3
                  class="text-[1.35rem] font-bold text-white mb-3 tracking-[0.5px] [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)]"
                >
                  Business Establishments
                </h3>
                <p class="text-base text-[#f3f1ee] leading-[1.6] opacity-95">
                  Security coordination for commercial areas and businesses
                </p>
              </div>
            </div>
          </div>
          <div class="service-card animate-fadeInUp animation-delay-300">
            <div class="flex items-start gap-4 mb-4">
              <div class="p-3 bg-white/20 rounded-lg">
                <svg
                  class="w-8 h-8 text-white stroke-[2.5] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  class="text-[1.35rem] font-bold text-white mb-3 tracking-[0.5px] [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)]"
                >
                  Community Events
                </h3>
                <p class="text-base text-[#f3f1ee] leading-[1.6] opacity-95">
                  Support for church activities and public gatherings
                </p>
              </div>
            </div>
          </div>
          <div class="service-card animate-fadeInUp animation-delay-400">
            <div class="flex items-start gap-4 mb-4">
              <div class="p-3 bg-white/20 rounded-lg">
                <svg
                  class="w-8 h-8 text-white stroke-[2.5] shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h3
                  class="text-[1.35rem] font-bold text-white mb-3 tracking-[0.5px] [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)]"
                >
                  Rapid Response
                </h3>
                <p class="text-base text-[#f3f1ee] leading-[1.6] opacity-95">
                  Quick deployment and emergency coordination
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
     <footer class="px-8 py-8 bg-[#00397a] border-t-[3px] border-[#004595] animate-fadeIn">
  <div class="max-w-7xl mx-auto text-center">

    <!-- Logos -->
    <div class="flex justify-center items-center gap-10 max-md:gap-6 max-sm:gap-4 mb-4">

      <!-- BCPO -->
      <div class="flex items-center justify-center w-16 h-16 max-md:w-12 max-md:h-12 relative -right-2">
        <img
          src="@/assets/BCPO 1 LOGO.png"
          alt="BCPO Logo"
          class="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      <!-- PNP -->
      <div class="flex items-center justify-center w-16 h-16 max-md:w-12 max-md:h-12 relative -right-3">
        <img
          src="@/assets/pnplogo.png"
          alt="PNP Logo"
          class="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      <!-- PNP BUTUAN (larger but spacing fixed) -->
      <div class="flex items-center justify-center w-22 h-22 max-md:w-18 max-md:h-18 relative -right-1">
        <img
          src="@/assets/pnpbutuan.png"
          alt="PNP Butuan Logo"
          class="w-full h-full object-contain scale-152 hover:scale-162 transition-transform duration-300"
        />
      </div>

    </div>

    <!-- Text -->
    <p class="text-base font-semibold text-white mb-1">
      © {{ new Date().getFullYear() }} Butuan City Police Station 1
    </p>
    <p class="text-sm text-[#f3f1ee] opacity-90">
      Serving and Protecting the Community
    </p>

  </div>
</footer>

    </div>
  </div>
</template>

<script setup></script>

<script>
export default {
  name: 'LandingPage',
}
</script>

<style scoped>
/* Import Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

/* Keyframe Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes countUp {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Animation Classes */
.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fadeInDown {
  animation: fadeInDown 0.8s ease-out forwards;
}

.animate-slideDown {
  animation: slideDown 0.6s ease-out forwards;
}

.animate-scaleIn {
  animation: scaleIn 0.8s ease-out forwards;
}

.animate-countUp {
  animation: countUp 0.6s ease-out forwards;
}

/* Animation Delays */
.animation-delay-100 {
  animation-delay: 0.1s;
}

.animation-delay-200 {
  animation-delay: 0.2s;
}

.animation-delay-300 {
  animation-delay: 0.3s;
}

.animation-delay-400 {
  animation-delay: 0.4s;
}

.animation-delay-500 {
  animation-delay: 0.5s;
}

.animation-delay-600 {
  animation-delay: 0.6s;
}

/* Background images with overlays */
.hero-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background-image: url('@/assets/landing.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 33, 71, 0.7) 0%, rgba(0, 69, 149, 0.6) 100%);
  z-index: 0;
}

.info-section {
  position: relative;
  padding: 5rem 2rem;
  background-image: url('@/assets/landing.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.info-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(243, 241, 238, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%);
  z-index: 0;
}

.services-section {
  position: relative;
  padding: 5rem 2rem;
  background-image: url('@/assets/landing.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.services-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 33, 71, 0.8) 0%, rgba(0, 57, 122, 0.75) 100%);
  z-index: 0;
}

/* Service Card Styles */
.service-card {
  background: rgba(0, 57, 122, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
}

.service-card:hover {
  background: rgba(0, 69, 149, 0.95);
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 35px rgba(0, 69, 149, 0.5);
  border-color: rgba(255, 255, 255, 0.9);
}

/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-container {
    padding: 6rem 1rem 3rem;
  }

  .info-section,
  .services-section {
    padding: 3rem 1rem;
  }
}
</style>
