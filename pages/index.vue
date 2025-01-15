<template>
  <div>
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-yellow-500 to-yellow-600 min-h-[80vh] flex items-center">
      <!-- Arka plan görseli -->
      <div 
        class="absolute inset-0 bg-cover bg-center" 
        style="background-image: url('/images/hero-bg.jpg');"
      ></div>
      
      <!-- Koyu overlay - opaklığı artırıldı -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/70 to-black/80"></div>
      
      <!-- İçerik -->
      <div class="container mx-auto px-4 relative z-10">
        <div class="max-w-3xl text-white">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            {{ homepage?.data?.heroTitle }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
            {{ homepage?.data?.heroDescription }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a 
              :href="`tel:${contact?.data?.[0]?.phone?.replace(/\s/g, '')}`" 
              class="bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all flex items-center justify-center"
            >
              <i class="fas fa-phone-alt mr-2"></i>
              Hemen Arayın
            </a>
            <a 
              href="#services" 
              class="bg-white/10 backdrop-blur text-white border-2 border-white/20 px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center"
            >
              <i class="fas fa-arrow-down mr-2"></i>
              Hizmetleri İncele
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Banner Section -->
    <div class="bg-gray-900 py-12 relative overflow-hidden">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div class="flex flex-col items-center">
            <i class="fas fa-truck-monster text-4xl text-yellow-500 mb-4"></i>
            <h3 class="text-xl font-bold text-white mb-2">Profesyonel Ekip</h3>
            <p class="text-gray-400">Deneyimli operatörlerimizle kaliteli hizmet</p>
          </div>
          <div class="flex flex-col items-center">
            <i class="fas fa-clock text-4xl text-yellow-500 mb-4"></i>
            <h3 class="text-xl font-bold text-white mb-2">7/24 Hizmet</h3>
            <p class="text-gray-400">Her zaman yanınızdayız</p>
          </div>
          <div class="flex flex-col items-center">
            <i class="fas fa-map-marked-alt text-4xl text-yellow-500 mb-4"></i>
            <h3 class="text-xl font-bold text-white mb-2">Tüm İstanbul</h3>
            <p class="text-gray-400">İstanbul'un her bölgesinde hizmet</p>
          </div>
          <div class="flex flex-col items-center">
            <i class="fas fa-hand-holding-usd text-4xl text-yellow-500 mb-4"></i>
            <h3 class="text-xl font-bold text-white mb-2">Uygun Fiyat</h3>
            <p class="text-gray-400">Rekabetçi fiyatlarla kaliteli hizmet</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Features -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="feature in homepage?.data?.homepageFeatures" 
          :key="feature.id" 
          class="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          <div class="text-yellow-500 mb-4">
            <i :class="`${feature.icon} text-3xl`"></i>
          </div>
          <h3 class="text-xl font-bold mb-4">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <!-- Services -->
    <div id="services" class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p class="text-xl text-gray-600">{{ homepage?.data?.ctaDescription }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services?.data" :key="service.id" class="bg-white rounded-lg shadow-lg overflow-hidden group">
            <div class="relative">
              <img 
                v-if="service.image" 
                :src="`https://ladle-backend-production.up.railway.app${service.image.url}`" 
                :alt="service.Title" 
                class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              >
              <div class="absolute top-4 right-4">
                <span 
                  :class="service.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                  class="px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {{ service.availability ? 'Müsait' : 'Müsait Değil' }}
                </span>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-3">{{ service.Title }}</h3>
              <p class="text-gray-600 mb-4">{{ formatDescription(service.description) }}</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-yellow-500 py-16">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Profesyonel İş Makinesi Hizmeti İçin Bizi Arayın
        </h2>
        <a 
          :href="`tel:${contact?.data?.[0]?.phone?.replace(/\s/g, '')}`"
          class="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all text-xl"
        >
          <i class="fas fa-phone-alt mr-2"></i>
          {{ contact?.data?.[0]?.phone }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// Anasayfa ve hizmetler verilerini çekme
const { data: homepage } = await useAsyncData(
  'homepage',
  () => $fetch('https://ladle-backend-production.up.railway.app/api/homepage?populate=*')
)

const { data: services } = await useAsyncData(
  'services',
  () => $fetch('https://ladle-backend-production.up.railway.app/api/services?populate=*')
)

// İletişim verisini inject et
const contact = inject('contact')

const formatDescription = (desc) => {
  if (!desc) return ''
  return desc.map(p => p.children.map(c => c.text).join('')).join('\n')
}
</script> 

<style>
.min-h-[80vh] {
  min-height: 80vh;
}
</style>