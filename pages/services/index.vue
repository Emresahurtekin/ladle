<template>
  <div class="bg-gray-50">
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl relative z-10">
          <h1 class="text-6xl font-bold mb-6">Kepçe Hizmetlerimiz</h1>
          <p class="text-xl mb-8 opacity-90">Profesyonel iş makineleri ve deneyimli operatörlerimizle hizmetinizdeyiz</p>
          <a href="tel:+905555555555" class="bg-gray-900 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center w-fit">
            <i class="fas fa-phone-alt mr-2"></i>
            Hemen Teklif Alın
          </a>
        </div>
      </div>
      <div class="absolute inset-0 opacity-10">
        <i class="fas fa-truck-monster text-9xl absolute right-10 top-1/2 transform -translate-y-1/2"></i>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="service in services?.data" 
          :key="service.id" 
          class="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
        >
          <div class="relative">
            <img 
              v-if="service.image" 
              :src="`https://ladle-backend-production.up.railway.app${service.image.url}`" 
              :alt="service.Title" 
              class="w-full h-72 object-cover"
            >
            <div class="absolute top-4 right-4">
              <span 
                :class="service.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                class="px-4 py-2 rounded-full text-sm font-bold shadow-lg"
              >
                {{ service.availability ? 'Müsait' : 'Müsait Değil' }}
              </span>
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">{{ service.Title }}</h3>
            <p class="text-gray-600 mb-6">{{ formatDescription(service.description) }}</p>
            <div class="flex justify-between items-center pt-6 border-t">
              
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gray-900 text-white py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold mb-6">İhtiyacınıza Uygun Kepçe Hizmeti</h2>
        <p class="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
          Size en uygun iş makinesini belirleyelim ve hemen fiyat teklifi sunalım
        </p>
        <div class="flex justify-center gap-6">
          <a href="tel:+905555555555" class="bg-yellow-500 text-gray-900 px-10 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-all flex items-center text-lg">
            <i class="fas fa-phone-alt mr-3"></i>
            Hemen Arayın
          </a>
          <NuxtLink to="/contact" class="bg-white text-gray-900 px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all text-lg">
            İletişime Geçin
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { find } = useStrapi()

// Services verilerini çekme
const { data: services } = await useAsyncData(
  'services-list',
  () => $fetch('https://ladle-backend-production.up.railway.app/api/services?populate=*')
)

const formatDescription = (desc) => {
  if (!desc) return ''
  return desc.map(p => p.children.map(c => c.text).join('')).join('\n')
}
</script>