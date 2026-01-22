<template>
  <div class="landing">
    
    <!-- Navigation Header -->
    <nav class="navbar">
      <div class="nav-brand">
        <img src="@/img/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="nav-logo" />
        <div class="nav-text">
          <span class="nav-title">BUTUAN CITY POLICE STATION 1</span>
          <span class="nav-subtitle">Community Monitoring System</span>
        </div>
      </div>
      <router-link to="/login" class="sign-in-btn">Sign In</router-link>
    </nav>

    <div class="content">

      <!-- Hero Section -->
      <section class="hero-container">
        <div class="hero">
          <div class="hero-logos">
            <img src="@/img/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="hero-logo" />
            <img src="@/img/bxulogo.png" alt="BXU Logo" class="hero-logo" />
          </div>
          <h1 class="hero-title">COMMUNITY MONITORING SYSTEM</h1>
          <p class="hero-subtitle">Butuan City Police Station 1</p>
          <p class="hero-description">
            Real-time monitoring and coordination for schools, businesses, and community events across 28 barangays in Butuan City.
          </p>
          <router-link to="/login" class="btn-primary">Access System</router-link>
        </div>
      </section>

      <!-- Info Cards -->
      <section class="info-section">
        <div class="info-cards">
          <div class="info-card">
            <div class="info-number">28</div>
            <div class="info-label">Barangays Covered</div>
          </div>
          <div class="info-card">
            <div class="info-number">24/7</div>
            <div class="info-label">Monitoring</div>
          </div>
          <div class="info-card">
            <div class="info-number">100%</div>
            <div class="info-label">Coverage</div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services-section">
        <h2 class="section-title">OUR SERVICES</h2>
        <div class="services-grid">
          <div class="service-card">
            <h3>Educational Institutions</h3>
            <p>Monitoring and support for schools within our jurisdiction</p>
          </div>
          <div class="service-card">
            <h3>Business Establishments</h3>
            <p>Security coordination for commercial areas and businesses</p>
          </div>
          <div class="service-card">
            <h3>Community Events</h3>
            <p>Support for church activities and public gatherings</p>
          </div>
          <div class="service-card">
            <h3>Rapid Response</h3>
            <p>Quick deployment and emergency coordination</p>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-logos">
            <img src="@/img/BCPO 1 LOGO.png" alt="BCPS 1 Logo" class="footer-logo" />
            <img src="@/img/bxulogo.png" alt="BXU Logo" class="footer-logo" />
          </div>
          <p class="footer-text">© {{ new Date().getFullYear() }} Butuan City Police Station 1</p>
          <p class="footer-subtext">Serving and Protecting the Community</p>
        </div>
      </footer>

    </div>
  </div>
</template>

<script setup>
// Simple landing page - no complex logic needed
</script>

<script>
export default {
  name: 'LandingPage'
};
</script>

<style scoped>

.landing {
  position: relative;
  min-height: 100vh;
  background-color: #f3f1ee;
  color: #002147;
}

.content {
  display: flex;
  flex-direction: column;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  background-color: #002147;
  box-shadow: 0 2px 10px rgba(0, 33, 71, 0.1);
  z-index: 100;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-logo {
  height: 50px;
  width: auto;
}

.nav-text {
  display: flex;
  flex-direction: column;
}

.nav-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: 0.5px;
}

.nav-subtitle {
  font-size: 0.75rem;
  color: #f3f1ee;
  opacity: 0.9;
}

.sign-in-btn {
  padding: 0.625rem 1.75rem;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  background-color: #004595;
  color: #ffffff;
  border: 2px solid #004595;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.sign-in-btn:hover {
  background-color: #00397a;
  border-color: #00397a;
}

.hero-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 8rem 2rem 4rem;
  background-image: url('@/img/landing.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.hero-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(243, 241, 238, 0.60);
  z-index: 0;
}

.hero {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
}

.hero-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
}

.hero-logo {
  height: 120px;
  width: auto;
}

.hero-title {
  font-size: 2.75rem;
  font-weight: 800;
  color: #002147;
  margin-bottom: 0.5rem;
  letter-spacing: 1px;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 600;
  color: #00397a;
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.125rem;
  color: #002147;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  opacity: 0.8;
}

.btn-primary {
  display: inline-block;
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  background-color: #004595;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #00397a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 69, 149, 0.3);
}

.info-section {
  padding: 4rem 2rem;
  background-color: #f3f1ee;
}

.info-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.info-card {
  background-color: #ffffff;
  padding: 2.5rem 2rem;
  text-align: center;
  border: 2px solid #004595;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 69, 149, 0.15);
}

.info-number {
  font-size: 3rem;
  font-weight: 800;
  color: #004595;
  margin-bottom: 0.5rem;
}

.info-label {
  font-size: 1rem;
  font-weight: 600;
  color: #002147;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.services-section {
  position: relative;
  padding: 5rem 2rem;
  background-image: url('@/img/landing.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.services-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: rgba(0, 33, 71, 0.80);
  z-index: 0;
}

.section-title {
  position: relative;
  z-index: 1;
  text-align: center;
  font-size: 2.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 3rem;
  letter-spacing: 1px;
}

.services-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.service-card {
  background-color: #00397a;
  padding: 2.5rem 2rem;
  border-radius: 4px;
  border: 2px solid #004595;
  transition: all 0.3s ease;
}

.service-card:hover {
  background-color: #004595;
  transform: translateY(-5px);
}

.service-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
}

.service-card p {
  font-size: 1rem;
  color: #f3f1ee;
  line-height: 1.6;
}

/* =========================
   Footer
========================= */
.footer {
  padding: 3rem 2rem;
  background-color: #00397a;
  border-top: 3px solid #004595;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.footer-logos {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-logo {
  height: 70px;
  width: auto;
}

.footer-text {
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.footer-subtext {
  font-size: 0.9rem;
  color: #f3f1ee;
  opacity: 0.9;
}

/* =========================
   Responsive Design
========================= */
@media (max-width: 768px) {
  .navbar {
    padding: 1rem;
  }
  
  .nav-logo {
    height: 40px;
  }
  
  .nav-text {
    display: none;
  }
  
  .hero-title {
    font-size: 1.75rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-logos {
    gap: 1.5rem;
  }
  
  .hero-logo {
    height: 80px;
  }
  
  .section-title {
    font-size: 1.75rem;
  }
  
  .info-cards,
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-logos {
    gap: 1rem;
  }
  
  .footer-logo {
    height: 50px;
  }
}
</style>
