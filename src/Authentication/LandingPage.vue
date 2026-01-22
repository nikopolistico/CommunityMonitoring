<template>
  <div class="landing">
    
    <!-- Sign In Button Top Right -->
    <router-link to="/login" class="btn primary sign-in-btn">Sign In</router-link>

    <div class="content">

      <!-- Branding Header -->
      <header class="branding">
        <img src="@/img/bcps1logo.png" alt="BCPS 1 Logo" class="logo" />
        <img src="@/img/bxulogo.png" alt="BXU Logo" class="logo" />
      </header>

      <!-- Hero -->
      <section class="hero-container" v-observe>
        <div class="hero">
          <h1>Butuan City Police Station 1 </h1>
          <h1>Community Monitoring System</h1>
          <p class="subtitle">
            Strengthening coordination, visibility, and rapid response across Butuan City.
          </p>
        </div>
      </section>

      <!-- About Section -->
      <section class="about" v-observe>
        <h2>About the System</h2>
        <p>
          This Community Monitoring System is designed to support schools, businesses,
          churches, and public events—especially church-related activities—within the
          jurisdiction of Butuan City Police Station 1.
        </p>
        <p>
          The platform enables real-time monitoring and coordination to ensure faster
          response and situational awareness across all <strong>28 barangays</strong>
          covered by Station 1 in Butuan City.
        </p>
      </section>

      <!-- Features -->
      <section class="features" v-observe>
        <div class="feature">
          <h3>City-wide Visibility</h3>
          <p>Centralized monitoring of activities across all covered barangays.</p>
        </div>
        <div class="feature">
          <h3>Event Awareness</h3>
          <p>Focused support for church and community events requiring police presence.</p>
        </div>
        <div class="feature">
          <h3>Rapid Response</h3>
          <p>Improved coordination to enable timely action by Station 1.</p>
        </div>
      </section>

      <footer class="footer" v-observe>
        <p>© {{ new Date().getFullYear() }} Butuan City Police Station 1</p>
      </footer>

    </div>
  </div>
</template>

<script setup>
// No additional logic needed
</script>

<script>
export default {
  directives: {
    observe: {
      mounted(el) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(el);
      }
    }
  }
};
</script>

<style scoped>
/* =========================
   Landing Base
========================= */
.landing {
  position: relative;
  min-height: 100vh;
  color: #e5e7eb;
  overflow: hidden;
}

/* Background image layer */
.landing::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url('@/img/landing.jpg');
  background-size: cover;
  background-position: center;
  filter: blur(6px);
  transform: scale(1.05);
  z-index: 0;
}

/* Dark overlay for contrast */
.landing::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 23, 0.75);
  z-index: 1;
}

/* Content container */
.content {
   position: relative;
   z-index: 2;
   display: flex;
   flex-direction: column;
   scroll-behavior: smooth;
}

/* =========================
   Branding Header
========================= */
.branding {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem 2rem 1rem;
}

.logo {
  height: 100px;
  max-width: 180px;
  object-fit: contain;
  opacity: 0.95;
}

.logo:hover {
  opacity: 1;
}

/* =========================
   Hero Section
========================= */
.hero-container {
  display: flex;
  justify-content: center; /* horizontal center */
  align-items: center;     /* vertical center */
  min-height: 100vh;       /* full viewport height */
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.hero-container.in-view {
  opacity: 1;
  transform: translateY(0);
}

.hero h1 {
  font-size: 2.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  max-width: 720px;
  margin: 0 auto 2rem;
  font-size: 1.15rem;
  color: #cbd5f5;
}

/* =========================
   Buttons
========================= */
.sign-in-btn {
  position: absolute !important;
  top: 1.5rem;
  right: 2rem;
  z-index: 10;
  padding: 0.5rem 1.25rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  background: transparent !important;
  border: 2px solid #6366f1;
  color: #6366f1;
  transition: all 0.3s ease;
}

.sign-in-btn:hover {
  background-color: #6366f1 !important;
  color: #fff !important;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* =========================
   About Section
========================= */
.about {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.about.in-view {
  opacity: 1;
  transform: translateY(0);
}

.about h2 {
  font-size: 1.75rem;
  margin-bottom: 1.25rem;
  color: #a5b4fc;
}

.about p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #e5e7eb;
}

/* =========================
   Features
========================= */
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem 4rem;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.features.in-view {
  opacity: 1;
  transform: translateY(0);
}

.feature {
  background: rgba(2, 6, 23, 0.85);
  border: 1px solid #1e293b;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
}

.feature h3 {
  margin-bottom: 0.5rem;
  color: #a5b4fc;
}

/* =========================
   Footer
========================= */
.footer {
  margin-top: auto;
  padding: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: #94a3b8;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.footer.in-view {
  opacity: 1;
  transform: translateY(0);
}
</style>
