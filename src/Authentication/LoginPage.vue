<template>
  <div
    class="min-h-screen flex items-center justify-center relative overflow-hidden bg-linear-to-br from-[#002147] to-[#00397a]"
  >
    <!-- Success Modal -->
    <Transition name="modal-fade">
      <div
        v-if="showSuccessModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <div
          class="success-modal bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-modal-slide"
        >
          <!-- Success Icon -->
          <div class="flex justify-center mb-6">
            <div class="success-checkmark">
              <div class="check-icon">
                <span class="icon-line line-tip"></span>
                <span class="icon-line line-long"></span>
                <div class="icon-circle"></div>
                <div class="icon-fix"></div>
              </div>
            </div>
          </div>

          <!-- Success Message -->
          <div class="text-center space-y-4">
            <h3 class="text-3xl font-bold text-[#002147]">Welcome Back!</h3>
            <p class="text-[#00397a]/80 text-lg">
              <span class="font-semibold">Officer</span>
            </p>
            <p class="text-[#00397a]/60 text-sm">
              Email: <span class="font-medium">{{ userEmail }}</span>
            </p>

            <!-- Loading Bar -->
            <div class="pt-4">
              <div class="relative w-full h-2 bg-[#f3f1ee] rounded-full overflow-hidden">
                <div
                  class="loading-bar absolute top-0 left-0 h-full bg-linear-to-r from-[#004595] via-[#00397a] to-[#004595] rounded-full"
                ></div>
              </div>
              <p class="text-[#00397a]/60 text-xs mt-2 font-medium">
                Accessing 28 Barangays Monitoring Dashboard...
              </p>
            </div>
          </div>

          <!-- Police Badge Background -->
          <div class="absolute top-8 right-8 opacity-5 pointer-events-none">
            <svg class="w-24 h-24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Error Modal -->
    <Transition name="modal-fade">
      <div
        v-if="showErrorModal"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      >
        <div
          class="error-modal bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 transform animate-modal-slide"
        >
          <!-- Error Icon -->
          <div class="flex justify-center mb-6">
            <div class="error-icon">
              <svg
                class="w-20 h-20 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <!-- Error Message -->
          <div class="text-center space-y-4">
            <h3 class="text-2xl font-bold text-red-600">Login Failed</h3>
            <p class="text-gray-700">{{ errorMessage }}</p>

            <!-- Close Button -->
            <button
              @click="closeErrorModal"
              class="mt-6 w-full bg-linear-to-r from-red-500 to-red-600 text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Large Static Police Badge Star Background - BOTTOM POSITIONED -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 opacity-[0.08] pointer-events-none"
    >
      <svg class="w-350 h-350" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="0.5">
        <path
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
        />
      </svg>
    </div>

    <!-- Police Siren Light Animation -->
    <div
      class="absolute top-[20%] right-[10%] w-25 h-25 rounded-full blur-2xl opacity-0 animate-siren-red"
    ></div>
    <div
      class="absolute bottom-[25%] left-[12%] w-25 h-25 rounded-full blur-2xl opacity-0 animate-siren-blue"
    ></div>

    <!-- Animated Grid Pattern -->
    <div class="absolute inset-0 opacity-5">
      <div class="grid-pattern"></div>
    </div>

    <!-- Main Content Container -->
    <div
      class="relative z-10 w-full max-w-5xl mx-auto px-4 flex items-center justify-center lg:justify-between gap-8"
    >
      <!-- Left Side - Branding Section -->
      <div class="hidden lg:flex flex-col flex-1 max-w-md animate-fade-in-left">
        <div class="space-y-6">
          <!-- Dual Logo with Animation -->
          <div class="flex items-center justify-start gap-5 mb-4">
            <div class="relative inline-block">
              <div
                class="relative p-4 rounded-full bg-linear-to-br from-white/15 to-white/5 shadow-[0_0_40px_rgba(255,255,255,0.2),0_0_70px_rgba(255,255,255,0.1)] animate-glow-pulse"
              >
                <img
                  :src="bcpoLogo"
                  alt="BCPO Logo"
                  class="w-36 h-36 object-contain animate-float"
                />
              </div>
            </div>

            <!-- Divider with animated pulse -->
            <div class="flex flex-col items-center gap-1.5">
              <div
                class="w-px h-16 bg-linear-to-b from-transparent via-white/50 to-transparent animate-pulse"
              ></div>
              <div class="w-2 h-2 rounded-full bg-white/70 animate-ping"></div>
              <div
                class="w-px h-16 bg-linear-to-b from-transparent via-white/50 to-transparent animate-pulse"
              ></div>
            </div>

            <div class="relative inline-block">
              <div
                class="relative p-4 rounded-full bg-linear-to-br from-white/15 to-white/5 shadow-[0_0_40px_rgba(255,255,255,0.2),0_0_70px_rgba(255,255,255,0.1)] animate-glow-pulse"
              >
                <img
                  :src="bxuLogo"
                  alt="BXU Logo"
                  class="w-36 h-36 object-contain animate-float-delayed"
                />
              </div>
            </div>
          </div>

          <!-- Welcome Text with Enhanced Typography -->
          <div class="space-y-4">
            <div class="space-y-1">
              <p class="text-[#f3f1ee]/90 text-sm font-semibold tracking-wider uppercase">
                Welcome to
              </p>
              <h1 class="text-4xl font-extrabold text-white leading-tight tracking-tight">
                Community
                <span
                  class="block text-transparent bg-clip-text bg-linear-to-r from-[#f3f1ee] via-white to-[#f3f1ee] animate-gradient"
                >
                  Monitoring System
                </span>
              </h1>
            </div>
            <div class="w-16 h-1 bg-linear-to-r from-[#f3f1ee] to-transparent rounded-full"></div>
            <p class="text-base text-[#f3f1ee]/80 leading-relaxed font-light">
              Secure access to the
              <span class="font-semibold text-white">28 Barangays</span> monitoring dashboard.
              Track, manage, and protect your community.
            </p>
          </div>

          <!-- Feature Pills -->
          <div class="flex flex-wrap gap-2 mt-4">
            <div class="feature-pill">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Secure Access</span>
            </div>
            <div class="feature-pill">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                />
              </svg>
              <span>Community Data</span>
            </div>
            <div class="feature-pill">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Real-time Updates</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side - Login Card -->
      <div class="w-full max-w-md animate-fade-in-right">
        <div
          class="login-card bg-white/98 backdrop-blur-sm p-7 rounded-xl shadow-2xl border border-white/30 relative overflow-hidden"
        >
          <!-- Decorative Corner Elements -->
          <div
            class="absolute top-0 left-0 w-24 h-24 bg-linear-to-br from-[#004595]/10 to-transparent rounded-br-full"
          ></div>
          <div
            class="absolute bottom-0 right-0 w-32 h-32 bg-linear-to-tl from-[#00397a]/10 to-transparent rounded-tl-full"
          ></div>

          <!-- Top Accent Line -->
          <div
            class="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-[#004595] to-transparent"
          ></div>

          <!-- Side Accent Lines -->
          <div
            class="absolute top-0 left-0 w-1 h-20 bg-linear-to-b from-[#004595] to-transparent"
          ></div>
          <div
            class="absolute top-0 right-0 w-1 h-20 bg-linear-to-b from-[#004595] to-transparent"
          ></div>

          <!-- Decorative Badge Icon Background -->
          <div class="absolute top-8 right-8 opacity-[0.04] pointer-events-none">
            <svg class="w-32 h-32" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              />
            </svg>
          </div>

          <!-- Mobile Logo -->
          <div class="lg:hidden text-center mb-6 relative z-10">
            <!-- Dual Logo Display -->
            <div class="flex items-center justify-center gap-4 mb-4">
              <div
                class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-[#004595] to-[#00397a] p-1 shadow-xl animate-glow-pulse-subtle"
              >
                <div
                  class="w-full h-full bg-white rounded-full flex items-center justify-center p-1"
                >
                  <img :src="bcpoLogo" alt="BCPO Logo" class="w-full h-full object-contain" />
                </div>
              </div>

              <div class="flex flex-col items-center gap-1">
                <div
                  class="w-px h-6 bg-linear-to-b from-transparent via-[#00397a] to-transparent"
                ></div>
                <div class="w-1.5 h-1.5 rounded-full bg-[#004595] animate-pulse"></div>
                <div
                  class="w-px h-6 bg-linear-to-b from-transparent via-[#00397a] to-transparent"
                ></div>
              </div>

              <div
                class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-br from-[#004595] to-[#00397a] p-1 shadow-xl animate-glow-pulse-subtle"
              >
                <div
                  class="w-full h-full bg-white rounded-full flex items-center justify-center p-1"
                >
                  <img :src="bxuLogo" alt="BXU Logo" class="w-full h-full object-contain" />
                </div>
              </div>
            </div>
            <div class="relative inline-block">
              <h2 class="text-2xl font-bold text-[#002147] mb-1 tracking-tight relative">
                Officer Login
                <div
                  class="absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#004595] to-transparent"
                ></div>
              </h2>
            </div>
            <p class="text-[#00397a]/70 text-sm font-medium">Community Monitoring System</p>
          </div>

          <!-- Desktop Header -->
          <div class="hidden lg:block mb-6 relative z-10">
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-10 h-10 rounded-lg bg-linear-to-br from-[#004595] to-[#00397a] flex items-center justify-center shadow-lg"
              >
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-3xl font-bold text-[#002147] tracking-tight">Officer Login</h2>
                <div class="w-16 h-0.5 bg-linear-to-r from-[#004595] to-transparent mt-1"></div>
              </div>
            </div>
            <p class="text-[#00397a]/70 font-medium pl-13">Enter your credentials to continue</p>
          </div>

          <!-- Login Form -->
          <form @submit.prevent="handleLogin" class="space-y-4 relative z-10">
            <!-- Email Field -->
            <div class="form-group">
              <label
                class="flex items-center gap-2 text-[#002147] font-bold mb-2 text-xs tracking-wide uppercase"
                for="email"
              >
                <div class="w-1 h-4 bg-linear-to-b from-[#004595] to-[#00397a] rounded-full"></div>
                Email Address
              </label>
              <div class="relative input-wrapper group">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10"
                >
                  <div class="relative">
                    <svg
                      class="w-5 h-5 text-[#00397a]/50 group-focus-within:text-[#004595] transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                      />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div
                      class="absolute -top-1 -right-1 w-2 h-2 bg-[#004595] rounded-full opacity-0 group-focus-within:opacity-100 group-focus-within:animate-ping"
                    ></div>
                  </div>
                </div>
                <input
                  v-model="email"
                  id="email"
                  type="email"
                  required
                  placeholder="officer@bcpo.gov.ph"
                  class="input-field w-full pl-11 pr-4 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:outline-none focus:border-[#004595] focus:ring-2 focus:ring-[#004595]/20 bg-white text-[#002147] placeholder-[#00397a]/40 transition-all duration-300 text-sm relative z-10 shadow-sm hover:shadow-md"
                />
                <!-- Decorative corner accent -->
                <div class="input-corner-accent"></div>
                <!-- Animated border on focus -->
                <div
                  class="absolute inset-0 rounded-lg border-2 border-[#004595] opacity-0 group-focus-within:opacity-20 transition-opacity pointer-events-none animate-pulse-border"
                ></div>
              </div>
            </div>

            <!-- Password Field -->
            <div class="form-group">
              <label
                class="flex items-center gap-2 text-[#002147] font-bold mb-2 text-xs tracking-wide uppercase"
                for="password"
              >
                <div class="w-1 h-4 bg-linear-to-b from-[#004595] to-[#00397a] rounded-full"></div>
                Password
              </label>
              <div class="relative input-wrapper group">
                <div
                  class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10"
                >
                  <div class="relative">
                    <svg
                      class="w-5 h-5 text-[#00397a]/50 group-focus-within:text-[#004595] transition-colors"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <div
                      class="absolute -top-1 -right-1 w-2 h-2 bg-[#004595] rounded-full opacity-0 group-focus-within:opacity-100 group-focus-within:animate-ping"
                    ></div>
                  </div>
                </div>
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  required
                  placeholder="••••••••••••"
                  class="input-field w-full pl-11 pr-11 py-2.5 border-2 border-[#f3f1ee] rounded-lg focus:outline-none focus:border-[#004595] focus:ring-2 focus:ring-[#004595]/20 bg-white text-[#002147] placeholder-[#00397a]/40 transition-all duration-300 text-sm relative z-10 shadow-sm hover:shadow-md"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-[#00397a]/50 hover:text-[#004595] transition-all z-10 hover:scale-110"
                >
                  <svg
                    v-if="showPassword"
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </button>
                <!-- Decorative corner accent -->
                <div class="input-corner-accent"></div>
                <!-- Animated border on focus -->
                <div
                  class="absolute inset-0 rounded-lg border-2 border-[#004595] opacity-0 group-focus-within:opacity-20 transition-opacity pointer-events-none animate-pulse-border"
                ></div>
              </div>
            </div>

            <!-- Remember Me -->
            <div class="flex items-center justify-start text-xs pt-1">
              <label class="flex items-center cursor-pointer group">
                <div class="relative">
                  <input
                    type="checkbox"
                    class="w-3.5 h-3.5 rounded border-2 border-[#00397a]/30 text-[#004595] focus:ring-2 focus:ring-[#004595]/20 cursor-pointer"
                  />
                  <div
                    class="absolute inset-0 rounded border-2 border-[#004595] opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"
                  ></div>
                </div>
                <span
                  class="ml-2 text-[#00397a]/80 group-hover:text-[#004595] transition-colors font-medium flex items-center gap-1"
                >
                  Remember me
                  <svg
                    class="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </label>
            </div>

            <!-- Login Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="login-button w-full bg-linear-to-r from-[#004595] via-[#00397a] to-[#004595] text-white py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group tracking-wide text-sm mt-6"
            >
              <!-- Animated background gradient -->
              <div
                class="absolute inset-0 bg-linear-to-r from-[#00397a] via-[#004595] to-[#00397a] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>

              <!-- Glowing border effect -->
              <div
                class="absolute inset-0 rounded-lg border-2 border-white/20 group-hover:border-white/40 transition-all"
              ></div>

              <span class="relative z-10 flex items-center justify-center gap-2">
                <svg v-if="isLoading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <svg v-if="!isLoading" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ isLoading ? 'Logging in...' : 'Login to Dashboard' }}
                <svg
                  v-if="!isLoading"
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div class="button-shine"></div>
            </button>
          </form>

          <!-- Footer -->
          <div class="mt-6 pt-5 border-t border-[#f3f1ee] relative z-10">
            <div
              class="flex items-center justify-center gap-2 text-xs text-[#00397a]/80 font-medium bg-linear-to-r from-transparent via-[#f3f1ee]/30 to-transparent py-2 rounded"
            >
              <div class="w-1.5 h-1.5 rounded-full bg-[#004595] animate-pulse"></div>
              <svg class="w-4 h-4 text-[#004595]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Secure Police Officer Access Only</span>
              <div class="w-1.5 h-1.5 rounded-full bg-[#004595] animate-pulse"></div>
            </div>
            <p class="text-center text-[10px] text-[#00397a]/50 mt-2 font-medium">
              BCPO & BXU Community Monitoring System
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/lib/supabase'
import bcpoLogo from '@/assets/BCPO 1 LOGO.png'
import bxuLogo from '@/assets/butuanlogo.png'

const router = useRouter()
const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const showSuccessModal = ref(false)
const showErrorModal = ref(false)
const errorMessage = ref('')
const userEmail = ref('')

function closeErrorModal() {
  showErrorModal.value = false
  errorMessage.value = ''
}

async function handleLogin() {
  if (!email.value || !password.value) {
    alert('Please fill in all fields.')
    return
  }

  console.log('🔐 Starting login process...')
  console.log('📧 Email:', email.value)
  console.log('🔌 Supabase URL:', import.meta.env.VITE_SUPABASE_URL)
  console.log('🔑 Supabase Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY)

  isLoading.value = true

  try {
    // Attempt to sign in with Supabase
    console.log('📤 Sending login request to Supabase...')
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })

    console.log('📥 Response received:', { data, error })

    // CRITICAL: Check if there was an error during login
    if (error) {
      console.error('❌ Login error:', error)
      console.error('Error message:', error.message)
      console.error('Error status:', error.status)
      isLoading.value = false

      // Show error modal instead of alert
      if (error.message.includes('Invalid login credentials')) {
        errorMessage.value =
          'Invalid email or password. Please check your credentials and try again.'
      } else if (error.message.includes('Email not confirmed')) {
        errorMessage.value = 'Please verify your email address before logging in.'
      } else if (error.message.includes('User not found')) {
        errorMessage.value =
          'No account exists with this email address. Please contact your administrator.'
      } else {
        errorMessage.value = error.message
      }

      showErrorModal.value = true
      return
    }

    // CRITICAL: Verify user data exists
    if (!data || !data.user) {
      console.error('❌ No user data returned')
      errorMessage.value =
        'No account exists with this email address. Please contact your administrator.'
      showErrorModal.value = true
      isLoading.value = false
      return
    }

    console.log('✅ User authenticated successfully!')
    console.log('👤 User:', data.user)

    // All checks passed - Login successful
    console.log('🎉 Login successful!')

    // Show success modal
    userEmail.value = data.user.email
    showSuccessModal.value = true
    isLoading.value = false

    // Navigate to dashboard after 2 seconds
    setTimeout(() => {
      router.push({ name: 'dashboard' })
    }, 2000)
  } catch (err) {
    console.error('💥 Unexpected login error:', err)
    errorMessage.value = `System Error: ${err.message}`
    showErrorModal.value = true
    isLoading.value = false
  }
}
</script>

<style scoped>
/* Tailwind-based Animations */

/* Siren Light Animations using Tailwind */
@keyframes siren-red {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.8);
    background: radial-gradient(circle, rgba(220, 38, 38, 0.4), transparent);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
    background: radial-gradient(circle, rgba(220, 38, 38, 0.6), transparent);
  }
}

@keyframes siren-blue {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.8);
    background: radial-gradient(circle, rgba(59, 130, 246, 0.4), transparent);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
    background: radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent);
  }
}

.animate-siren-red {
  animation: siren-red 2s infinite ease-in-out;
}

.animate-siren-blue {
  animation: siren-blue 2s infinite ease-in-out 1s;
}

/* Float Animation for Logos */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 3s ease-in-out infinite 0.3s;
}

/* Glow Pulse Animation */
@keyframes glow-pulse {
  0%,
  100% {
    box-shadow:
      0 0 40px rgba(255, 255, 255, 0.2),
      0 0 70px rgba(255, 255, 255, 0.1),
      inset 0 0 20px rgba(255, 255, 255, 0.1);
  }
  50% {
    box-shadow:
      0 0 60px rgba(255, 255, 255, 0.3),
      0 0 100px rgba(255, 255, 255, 0.15),
      inset 0 0 25px rgba(255, 255, 255, 0.12);
  }
}

.animate-glow-pulse {
  animation: glow-pulse 3s ease-in-out infinite;
}

/* Subtle Glow Pulse for Mobile Logos */
@keyframes glow-pulse-subtle {
  0%,
  100% {
    box-shadow: 0 4px 15px rgba(0, 69, 149, 0.3);
  }
  50% {
    box-shadow: 0 4px 25px rgba(0, 69, 149, 0.5);
  }
}

.animate-glow-pulse-subtle {
  animation: glow-pulse-subtle 2s ease-in-out infinite;
}

/* Pulse Border Animation */
@keyframes pulse-border {
  0%,
  100% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
}

.animate-pulse-border {
  animation: pulse-border 2s ease-in-out infinite;
}

/* Input Field Decorations */
.input-wrapper {
  position: relative;
}

.input-corner-accent {
  position: absolute;
  pointer-events: none;
}

.input-corner-accent::before,
.input-corner-accent::after {
  content: '';
  position: absolute;
  background: linear-gradient(135deg, #004595 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-corner-accent::before {
  top: 0;
  left: 0;
  width: 15px;
  height: 2px;
  border-top-left-radius: 8px;
}

.input-corner-accent::after {
  top: 0;
  left: 0;
  width: 2px;
  height: 15px;
  border-top-left-radius: 8px;
}

.input-wrapper:focus-within .input-corner-accent::before,
.input-wrapper:focus-within .input-corner-accent::after {
  opacity: 1;
}

/* Additional corner accents */
.input-wrapper::before,
.input-wrapper::after {
  content: '';
  position: absolute;
  background: linear-gradient(135deg, transparent 0%, #004595 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.input-wrapper::before {
  bottom: 0;
  right: 0;
  width: 15px;
  height: 2px;
  border-bottom-right-radius: 8px;
}

.input-wrapper::after {
  bottom: 0;
  right: 0;
  width: 2px;
  height: 15px;
  border-bottom-right-radius: 8px;
}

.input-wrapper:focus-within::before,
.input-wrapper:focus-within::after {
  opacity: 1;
}

/* Floating Shapes Animation - REMOVED, replaced with police badges */
/* Floating Shapes Animation - REMOVED, replaced with police badges */

/* Grid Pattern */
.grid-pattern {
  width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(50px, 50px);
  }
}

/* Animated Gradient Text */
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 4s ease infinite;
}

/* Feature Pills */
.feature-pill {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 9999px;
  color: #f3f1ee;
  font-size: 0.75rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.feature-pill:hover {
  background: rgba(255, 255, 255, 0.12);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

/* Login Card Animation */
.login-card {
  animation: card-appear 0.6s ease-out;
  transition: all 0.3s ease;
}

@keyframes card-appear {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

/* Input Focus Animation */
.input-field {
  transition: all 0.3s ease;
}

.input-field:focus {
  transform: translateY(-2px);
}

/* Form Group Animation */
.form-group {
  animation: slide-up 0.4s ease-out;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Button Shine Effect */
.login-button {
  position: relative;
  overflow: hidden;
}

.button-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.login-button:hover .button-shine {
  left: 100%;
}

/* Fade In Animations */
@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fade-in-right {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out;
}

.animate-fade-in-right {
  animation: fade-in-right 0.8s ease-out;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .floating-shape {
    opacity: 0.5;
  }
}

/* Modal Animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes modal-slide {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.animate-modal-slide {
  animation: modal-slide 0.4s ease-out;
}

/* Success Checkmark Animation */
.success-checkmark {
  width: 80px;
  height: 80px;
  margin: 0 auto;
}

.success-checkmark .check-icon {
  width: 80px;
  height: 80px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  border: 4px solid #4ade80;
}

.success-checkmark .check-icon::before {
  top: 3px;
  left: -2px;
  width: 30px;
  transform-origin: 100% 50%;
  border-radius: 100px 0 0 100px;
}

.success-checkmark .check-icon::after {
  top: 0;
  left: 30px;
  width: 60px;
  transform-origin: 0 50%;
  border-radius: 0 100px 100px 0;
  animation: rotate-circle 4.25s ease-in;
}

.success-checkmark .check-icon::before,
.success-checkmark .check-icon::after {
  content: '';
  height: 100px;
  position: absolute;
  background: #fff;
  transform: rotate(-45deg);
}

.success-checkmark .check-icon .icon-line {
  height: 5px;
  background-color: #4ade80;
  display: block;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
}

.success-checkmark .check-icon .icon-line.line-tip {
  top: 46px;
  left: 14px;
  width: 25px;
  transform: rotate(45deg);
  animation: icon-line-tip 0.75s;
}

.success-checkmark .check-icon .icon-line.line-long {
  top: 38px;
  right: 8px;
  width: 47px;
  transform: rotate(-45deg);
  animation: icon-line-long 0.75s;
}

.success-checkmark .check-icon .icon-circle {
  top: -4px;
  left: -4px;
  z-index: 10;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  box-sizing: content-box;
  border: 4px solid rgba(74, 222, 128, 0.5);
}

.success-checkmark .check-icon .icon-fix {
  top: 8px;
  width: 5px;
  left: 26px;
  z-index: 1;
  height: 85px;
  position: absolute;
  transform: rotate(-45deg);
  background-color: #fff;
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}

/* Loading Bar Animation */
@keyframes loading {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.loading-bar {
  animation: loading 2s ease-in-out;
}

/* Error Icon Animation */
.error-icon {
  animation: error-pulse 0.5s ease-in-out;
}

@keyframes error-pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
