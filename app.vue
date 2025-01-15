<template>
  <div class="min-h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="bg-gray-900 shadow">
      <div class="container mx-auto px-4 py-4">
        <!-- Mobile Menu Button -->
        <div class="flex items-center justify-between lg:hidden">
          <div class="flex items-center">
            <img 
              src="/images/1.png"
              alt="İkizler Hafriyat Logo"
              class="h-10 w-auto mr-2"
            />
            <span class="text-white font-bold mt-1">İkizler Hafriyat</span>
          </div>
          <button 
            @click="isMenuOpen = !isMenuOpen" 
            class="text-white hover:text-yellow-400"
          >
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center justify-between">
          <!-- Sol taraftaki logo -->
          <div class="flex items-center">
            <img 
              src="/images/1.png"
              alt="İkizler Hafriyat Logo"
              class="h-16 w-auto mr-3"
            />
            <span class="text-white font-bold text-xl mt-1">İkizler Hafriyat</span>
          </div>

          <!-- Sağ taraftaki menü -->
          <div class="flex items-center space-x-8">
            <NuxtLink 
              to="/" 
              class="text-white hover:text-yellow-400 font-semibold transition-colors text-lg px-3"
            >
              Ana Sayfa
            </NuxtLink>
            <NuxtLink 
              to="/services" 
              class="text-white hover:text-yellow-400 font-semibold transition-colors text-lg px-3"
            >
              Hizmetlerimiz
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-white hover:text-yellow-400 font-semibold transition-colors text-lg px-3"
            >
              İletişim
            </NuxtLink>
            <NuxtLink 
              to="/gallery" 
              class="text-white hover:text-yellow-400 font-semibold transition-colors text-lg px-3"
            >
              Galeri
            </NuxtLink>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div 
          v-show="isMenuOpen" 
          class="lg:hidden mt-4 py-4 border-t border-gray-700"
        >
          <div class="flex flex-col space-y-4">
            <NuxtLink 
              to="/" 
              class="text-white hover:text-yellow-400 font-semibold transition-colors"
              @click="isMenuOpen = false"
            >
              Ana Sayfa
            </NuxtLink>
            <NuxtLink 
              to="/services" 
              class="text-white hover:text-yellow-400 font-semibold transition-colors"
              @click="isMenuOpen = false"
            >
              Hizmetlerimiz
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-white hover:text-yellow-400 font-semibold transition-colors"
              @click="isMenuOpen = false"
            >
              İletişim
            </NuxtLink>
            <NuxtLink 
              to="/gallery" 
              class="text-white hover:text-yellow-400 font-semibold transition-colors"
              @click="isMenuOpen = false"
            >
              Galeri
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Sayfa içeriği -->
    <main class="flex-grow">
    <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-gray-400 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <!-- Şirket Bilgileri -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-6">İkizler Hafriyat</h3>
            <p class="text-gray-400 mb-6 leading-relaxed">İstanbul'un her bölgesinde profesyonel kepçe ve hafriyat hizmetleri</p>
            <div class="flex items-center">
              <a 
                :href="`https://wa.me/${contact?.data?.[0]?.phone?.replace(/\s/g, '')}`" 
                target="_blank"
                class="text-gray-400 hover:text-green-500 transition-colors"
              >
                <i class="fab fa-whatsapp text-2xl"></i>
              </a>
            </div>
          </div>

          <!-- Hızlı Linkler -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-6">Hızlı Linkler</h3>
            <ul class="space-y-3">
              <li>
                <NuxtLink to="/" class="text-gray-400 hover:text-white transition-colors">Ana Sayfa</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-gray-400 hover:text-white transition-colors">Hizmetlerimiz</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/gallery" class="text-gray-400 hover:text-white transition-colors">Galeri</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-gray-400 hover:text-white transition-colors">İletişim</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- İletişim Bilgileri -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-6">İletişim</h3>
            <ul class="space-y-4">
              <li class="flex items-start space-x-3">
                <i class="fas fa-map-marker-alt mt-1 text-gray-500"></i>
                <span class="text-gray-400">{{ contact?.data?.[0]?.address }}</span>
              </li>
              <li class="flex items-start space-x-3">
                <i class="fas fa-phone-alt mt-1 text-gray-500"></i>
                <a :href="`tel:${contact?.data?.[0]?.phone?.replace(/\s/g, '')}`" class="text-gray-400 hover:text-white transition-colors">
                  {{ contact?.data?.[0]?.phone }}
                </a>
              </li>
              <li class="flex items-start space-x-3">
                <i class="fas fa-clock mt-1 text-gray-500"></i>
                <span class="text-gray-400">{{ contact?.data?.[0]?.workingHours }}</span>
              </li>
            </ul>
          </div>

          <!-- Çalışma Saatleri -->
          <div>
            <h3 class="text-white text-lg font-semibold mb-6">Çalışma Saatleri</h3>
            <div class="bg-gray-800 rounded-lg p-6">
              <p class="text-gray-400 mb-3 flex items-center">
                <i class="fas fa-check text-green-500 mr-2"></i>
                7/24 Hizmet
              </p>
              <p class="text-gray-400 flex items-center">
                <i class="fas fa-check text-green-500 mr-2"></i>
                İstanbul'un tüm bölgelerinde
              </p>
            </div>
          </div>
        </div>

        <!-- Alt Footer -->
        <div class="border-t border-gray-800 mt-8 pt-6 text-center pb-2">
          <p class="text-gray-500">© {{ new Date().getFullYear() }} İkizler Hafriyat. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'

const isMenuOpen = ref(false)

// İletişim verilerini çekme ve provide etme
const { data: contact } = await useAsyncData(
  'contact-global',
  () => $fetch('https://ladle-backend-production.up.railway.app/api/contacts?populate=*')
)

// İletişim verisini global olarak sağla
provide('contact', contact)
</script>

<style>
.router-link-active {
  color: #FCD34D !important;
  font-weight: 600;
}

.min-h-screen {
  min-height: 100vh;
}
</style>
