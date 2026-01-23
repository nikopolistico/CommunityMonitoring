<template>
  <div class="relative min-h-screen bg-[#f3f1ee] text-[#002147]">
    <!-- Navigation Header -->
    <nav
      class="fixed top-0 left-0 right-0 flex justify-between items-center px-4 md:px-12 py-4 bg-[#002147] shadow-[0_2px_10px_rgba(0,33,71,0.1)] z-100"
    >
      <div class="flex items-center gap-4">
        <img src="@/assets/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="h-12.5 md:h-12.5 w-auto" />
        <div class="hidden md:flex flex-col">
          <span class="text-[0.95rem] font-bold text-white tracking-[0.5px]"
            >BUTUAN CITY POLICE STATION 1</span
          >
          <span class="text-xs text-[#f3f1ee] opacity-90">Community Monitoring System</span>
        </div>
      </div>
      <router-link
        to="/login"
        class="px-7 py-2.5 font-semibold text-[0.95rem] no-underline bg-[#004595] text-white border-2 border-white rounded-full transition-all duration-300 ease-in-out cursor-pointer shadow-[0_2px_8px_rgba(0,33,71,0.10)] tracking-widest hover:bg-white hover:text-[#004595] hover:border-[#004595] hover:shadow-[0_4px_16px_rgba(0,69,149,0.18)]"
      >
        Sign In
      </router-link>
    </nav>

    <div class="flex flex-col">
      <!-- Hero Section -->
      <section
        class="hero-section relative flex justify-center items-center min-h-screen pt-32 pb-16 px-8 bg-cover bg-center bg-fixed"
      >
        <div class="absolute inset-0 bg-[rgba(100,109,136,0.5)] z-0"></div>

        <div class="relative z-10 text-center max-w-225">
          <div class="flex justify-center items-center gap-2 md:gap-5 mb-12">
            <img src="@/assets/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="h-20 md:h-30 w-auto" />
            <img src="@/assets/bxulogo.png" alt="BXU Logo" class="h-20 md:h-30 w-auto" />
          </div>
          <h1
            class="text-[1.75rem] md:text-[2.75rem] font-extrabold rounded-2xl text-white mb-2 tracking-wide shadow-[2px_2px_8px_rgba(0,0,0,0.5)]"
          >
            COMMUNITY MONITORING SYSTEM
          </h1>
          <p
            class="text-xl md:text-2xl font-semibold text-[#e0e7ff] rounded-md mb-6 shadow-[1px_1px_6px_rgba(0,0,0,0.5)]"
          >
            Butuan City Police Station 1
          </p>
          <p
            class="text-base md:text-lg text-[#f3f1ee] leading-relaxed rounded-b-2xl mb-10 shadow-[1px_1px_6px_rgba(0,0,0,0.5)]"
          >
            Real-time monitoring and coordination for schools, businesses, and community events
            across 28 barangays in Butuan City.
          </p>
          <router-link
            to="/login"
            class="inline-block px-12 py-4 text-lg font-semibold bg-[#004595] text-white border-2 border-white rounded-full no-underline transition-all duration-300 ease-in-out cursor-pointer shadow-[0_2px_8px_rgba(0,33,71,0.10)] tracking-widest hover:bg-white hover:text-[#004595] hover:border-[#004595] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,69,149,0.18)]"
          >
            Access System
          </router-link>
        </div>
      </section>

      <!-- Info Cards -->
      <section class="info-section relative py-16 px-8 bg-cover bg-center bg-fixed">
        <div class="absolute inset-0 bg-[rgba(243,241,238,0.70)] z-0"></div>

        <div
          class="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-300 mx-auto"
        >
          <div
            class="bg-white/70 backdrop-blur-[10px] p-4 text-center border-2 border-[#004595] rounded transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,69,149,0.15)]"
          >
            <div class="text-4xl font-extrabold text-[#004595] mb-2">28</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[0.5px]">
              Barangays Covered
            </div>
          </div>
          <div
            class="bg-white/70 backdrop-blur-[10px] p-4 text-center border-2 border-[#004595] rounded transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,69,149,0.15)]"
          >
            <div class="text-4xl font-extrabold text-[#004595] mb-2">24/7</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[0.5px]">
              Monitoring
            </div>
          </div>
          <div
            class="bg-white/70 backdrop-blur-[10px] p-4 text-center border-2 border-[#004595] rounded transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,69,149,0.15)]"
          >
            <div class="text-4xl font-extrabold text-[#004595] mb-2">100%</div>
            <div class="text-sm font-semibold text-[#002147] uppercase tracking-[0.5px]">
              Coverage
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section relative py-20 px-8 bg-cover bg-center bg-fixed">
        <div class="absolute inset-0 bg-[rgba(0,33,71,0.70)] z-0"></div>

        <h2
          class="relative z-10 text-center text-[1.75rem] md:text-[2.5rem] font-extrabold text-white mb-14 tracking-[1.5px] shadow-[2px_2px_8px_rgba(0,0,0,0.5)]"
        >
          OUR SERVICES
        </h2>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-300 mx-auto">
          <div
            class="bg-[rgba(0,57,122,0.85)] backdrop-blur-[10px] p-10 rounded-lg border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:bg-[rgba(0,69,149,0.95)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)]"
          >
            <h3
              class="text-[1.35rem] font-bold text-white mb-4 tracking-[0.5px] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.3)]"
            >
              Educational Institutions
            </h3>
            <p class="text-base text-[#f3f1ee] leading-relaxed opacity-95">
              Monitoring and support for schools within our jurisdiction
            </p>
          </div>
          <div
            class="bg-[rgba(0,57,122,0.85)] backdrop-blur-[10px] p-10 rounded-lg border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:bg-[rgba(0,69,149,0.95)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)]"
          >
            <h3
              class="text-[1.35rem] font-bold text-white mb-4 tracking-[0.5px] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.3)]"
            >
              Business Establishments
            </h3>
            <p class="text-base text-[#f3f1ee] leading-relaxed opacity-95">
              Security coordination for commercial areas and businesses
            </p>
          </div>
          <div
            class="bg-[rgba(0,57,122,0.85)] backdrop-blur-[10px] p-10 rounded-lg border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:bg-[rgba(0,69,149,0.95)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)]"
          >
            <h3
              class="text-[1.35rem] font-bold text-white mb-4 tracking-[0.5px] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.3)]"
            >
              Community Events
            </h3>
            <p class="text-base text-[#f3f1ee] leading-relaxed opacity-95">
              Support for church activities and public gatherings
            </p>
          </div>
          <div
            class="bg-[rgba(0,57,122,0.85)] backdrop-blur-[10px] p-10 rounded-lg border-2 border-white shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 ease-in-out hover:bg-[rgba(0,69,149,0.95)] hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(0,69,149,0.4)]"
          >
            <h3
              class="text-[1.35rem] font-bold text-white mb-4 tracking-[0.5px] drop-shadow-[1px_1px_4px_rgba(0,0,0,0.3)]"
            >
              Rapid Response
            </h3>
            <p class="text-base text-[#f3f1ee] leading-relaxed opacity-95">
              Quick deployment and emergency coordination
            </p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="py-8 px-8 bg-[#00397a] border-t-[3px] border-[#004595]">
        <div class="max-w-300 mx-auto text-center">
          <div class="flex justify-center items-center gap-6 mb-4">
            <img src="@/assets/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="h-12.5 w-auto" />
            <img src="@/assets/bxulogo.png" alt="BXU Logo" class="h-12.5 w-auto" />
          </div>
          <p class="text-base font-semibold text-white mb-2">
            © {{ new Date().getFullYear() }} Butuan City Police Station 1
          </p>
          <p class="text-[0.9rem] text-[#f3f1ee] opacity-90">
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
.hero-section {
  background-image: url('@/assets/landing.jpg');
}

.info-section {
  background-image: url('@/assets/landing.jpg');
}

.services-section {
  background-image: url('@/assets/landing.jpg');
}
</style>
