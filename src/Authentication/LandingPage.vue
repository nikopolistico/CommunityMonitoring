<template>
  <div class="relative min-h-screen bg-[#f3f1ee] text-[#002147]">
    
    <!-- Navigation Header -->
    <nav class="fixed top-0 left-0 right-0 flex justify-between items-center px-12 py-4 bg-[#002147] shadow-[0_2px_10px_rgba(0,33,71,0.1)] z-[100]">
      <div class="flex items-center gap-4">
        <img src="@/assets/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="h-[50px] w-auto" />
        <div class="flex flex-col max-md:hidden">
          <span class="text-[0.95rem] font-bold text-white tracking-[0.5px]">BUTUAN CITY POLICE STATION 1</span>
          <span class="text-xs text-[#f3f1ee] opacity-90">Community Monitoring System</span>
        </div>
      </div>
      <router-link to="/login" class="flex items-center gap-2 px-7 py-2.5 font-semibold text-[0.95rem] no-underline bg-[#004595] text-white border-2 border-white rounded-full transition-all duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,33,71,0.10)] tracking-wider hover:bg-white hover:text-[#004595] hover:border-[#004595] hover:shadow-[0_4px_16px_rgba(0,69,149,0.18)]">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
        Sign In
      </router-link>
    </nav>

    <div class="flex flex-col">

      <!-- Hero Section -->
      <section class="hero-container">
        <div class="relative z-[1] text-center max-w-[900px]">
          <div class="flex justify-center items-center gap-12 mb-12 max-md:gap-6">
            <img src="@/assets/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="h-[120px] w-auto max-md:h-20" />
            <img src="@/assets/bxulogo.png" alt="BXU Logo" class="h-[120px] w-auto max-md:h-20" />
          </div>
          <h1 class="text-[2.75rem] font-extrabold text-white mb-2 tracking-wider [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)] max-md:text-[1.75rem]">COMMUNITY MONITORING SYSTEM</h1>
          <p class="text-2xl font-semibold text-[#e0e7ff] mb-6 [text-shadow:1px_1px_6px_rgba(0,0,0,0.5)] max-md:text-xl">Butuan City Police Station 1</p>
          <p class="text-lg text-[#f3f1ee] leading-[1.7] mb-10 [text-shadow:1px_1px_6px_rgba(0,0,0,0.5)] max-md:text-base">
            Real-time monitoring and coordination for schools, businesses, and community events across 28 barangays in Butuan City.
          </p>
          <router-link to="/login" class="inline-flex items-center gap-2 px-12 py-4 text-lg font-semibold bg-[#004595] text-white border-2 border-white rounded-full no-underline transition-all duration-300 cursor-pointer shadow-[0_2px_8px_rgba(0,33,71,0.10)] tracking-wider hover:bg-white hover:text-[#004595] hover:border-[#004595] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,69,149,0.18)]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Access System
          </router-link>
        </div>
      </section>

      <!-- Info Cards -->
      <section class="info-section">
        <div class="relative z-[1] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 max-w-[1200px] mx-auto max-md:grid-cols-1">
          <div class="bg-white/70 backdrop-blur-[10px] p-4 text-center border-2 border-[#004595] rounded transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,69,149,0.15)] hover:bg-white/70">
            <div class="text-4xl font-extrabold text-[#004595] mb-2">28</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[0.5px]">Barangays Covered</div>
          </div>
          <div class="bg-white/70 backdrop-blur-[10px] p-4 text-center border-2 border-[#004595] rounded transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,69,149,0.15)] hover:bg-white/70">
            <div class="text-4xl font-extrabold text-[#004595] mb-2">24/7</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[0.5px]">Monitoring</div>
          </div>
          <div class="bg-white/70 backdrop-blur-[10px] p-4 text-center border-2 border-[#004595] rounded transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_20px_rgba(0,69,149,0.15)] hover:bg-white/70">
            <div class="text-4xl font-extrabold text-[#004595] mb-2">100%</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[0.5px]">Coverage</div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section">
        <h2 class="relative z-[1] text-center text-[2.5rem] font-extrabold text-white mb-14 tracking-[1.5px] [text-shadow:2px_2px_8px_rgba(0,0,0,0.5)] max-md:text-[1.75rem]">OUR SERVICES</h2>
        <div class="relative z-[1] grid grid-cols-2 gap-8 max-w-[1200px] mx-auto max-md:grid-cols-1">
          <div class="bg-[rgba(0,57,122,0.85)] backdrop-blur-[10px] px-8 py-10 rounded-lg border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(0,69,149,0.95)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)]">
            <div class="flex items-center gap-4 mb-4">
              <svg class="w-8 h-8 text-white [stroke-width:2.5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <h3 class="text-[1.35rem] font-bold text-white mb-4 tracking-[0.5px] [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)]">Educational Institutions</h3>
            </div>
            <p class="text-base text-[#f3f1ee] leading-[1.6] opacity-95">Monitoring and support for schools within our jurisdiction</p>
          </div>
          <div class="bg-[rgba(0,57,122,0.85)] backdrop-blur-[10px] px-8 py-10 rounded-lg border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(0,69,149,0.95)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)]">
            <div class="flex items-center gap-4 mb-4">
              <svg class="w-8 h-8 text-white [stroke-width:2.5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 class="text-[1.35rem] font-bold text-white mb-4 tracking-[0.5px] [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)]">Business Establishments</h3>
            </div>
            <p class="text-base text-[#f3f1ee] leading-[1.6] opacity-95">Security coordination for commercial areas and businesses</p>
          </div>
          <div class="bg-[rgba(0,57,122,0.85)] backdrop-blur-[10px] px-8 py-10 rounded-lg border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(0,69,149,0.95)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)]">
            <div class="flex items-center gap-4 mb-4">
              <svg class="w-8 h-8 text-white [stroke-width:2.5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 class="text-[1.35rem] font-bold text-white mb-4 tracking-[0.5px] [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)]">Community Events</h3>
            </div>
            <p class="text-base text-[#f3f1ee] leading-[1.6] opacity-95">Support for church activities and public gatherings</p>
          </div>
          <div class="bg-[rgba(0,57,122,0.85)] backdrop-blur-[10px] px-8 py-10 rounded-lg border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[rgba(0,69,149,0.95)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)]">
            <div class="flex items-center gap-4 mb-4">
              <svg class="w-8 h-8 text-white [stroke-width:2.5] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <h3 class="text-[1.35rem] font-bold text-white mb-4 tracking-[0.5px] [text-shadow:1px_1px_4px_rgba(0,0,0,0.3)]">Rapid Response</h3>
            </div>
            <p class="text-base text-[#f3f1ee] leading-[1.6] opacity-95">Quick deployment and emergency coordination</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="px-8 py-8 bg-[#00397a] border-t-[3px] border-[#004595]">
        <div class="max-w-[1200px] mx-auto text-center">
          <div class="flex justify-center items-center gap-6 mb-4 max-md:gap-4">
            <img src="@/assets/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="h-[50px] w-auto" />
            <img src="@/assets/bxulogo.png" alt="BXU Logo" class="h-[50px] w-auto" />
          </div>
          <p class="text-base font-semibold text-white mb-2">© {{ new Date().getFullYear() }} Butuan City Police Station 1</p>
          <p class="text-[0.9rem] text-[#f3f1ee] opacity-90">Serving and Protecting the Community</p>
        </div>
      </footer>

    </div>
  </div>
</template>

<script setup>
  
</script>

<script>
export default {
  name: 'LandingPage'
};
</script>

<style scoped>
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
  background-color: rgba(100, 109, 136, 0.5);
  z-index: 0;
}

.info-section {
  position: relative;
  padding: 4rem 2rem;
  background-image: url('@/assets/landing.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.info-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(243, 241, 238, 0.70);
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
  background-color: rgba(0, 33, 71, 0.70);
  z-index: 0;
}
</style>