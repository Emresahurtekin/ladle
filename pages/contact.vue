<template>
  <div>
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl relative z-10">
          <h1 class="text-6xl font-bold mb-6">{{ contact?.data?.[0]?.title }}</h1>
          <p class="text-xl mb-8 opacity-90">{{ formatDescription(contact?.data?.[0]?.description) }}</p>
          <a :href="`tel:${contact?.data?.[0]?.phone?.replace(/\s/g, '')}`" class="bg-gray-900 text-yellow-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all flex items-center w-fit">
            <i class="fas fa-phone-alt mr-2"></i>
            Hemen Arayın
          </a>
        </div>
      </div>
      <div class="absolute inset-0 opacity-10">
        <i class="fas fa-truck-monster text-9xl absolute right-10 top-1/2 transform -translate-y-1/2"></i>
      </div>
    </div>

    <div class="container mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- İletişim Bilgileri -->
        <div class="bg-white p-8 rounded-lg shadow">
          <h2 class="text-2xl font-bold mb-8">İletişim Bilgileri</h2>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-yellow-100 p-3 rounded-lg">
                <i class="fas fa-map-marker-alt text-yellow-600 text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Adres</h3>
                <p class="text-gray-600">{{ contact?.data?.[0]?.address }}</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-yellow-100 p-3 rounded-lg">
                <i class="fas fa-phone-alt text-yellow-600 text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Telefon</h3>
                <p class="text-gray-600">{{ contact?.data?.[0]?.phone }}</p>
              </div>
            </div>

         

            <div class="flex items-start space-x-4">
              <div class="bg-yellow-100 p-3 rounded-lg">
                <i class="fas fa-clock text-yellow-600 text-xl"></i>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Çalışma Saatleri</h3>
                <p class="text-gray-600">{{ contact?.data?.[0]?.workingHours }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Harita -->
        <div class="bg-white p-8 rounded-lg shadow">
          <h2 class="text-2xl font-bold mb-8">Konum</h2>
          <div class="h-[400px] rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12049.776958080437!2d29.217800!3d40.919700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cad0a709744c83%3A0x404c640dadc66445!2sKaynarca%2C%20Pendik%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1623456789012!5m2!1str!2str"
              width="100%" 
              height="100%" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Contact verilerini çekme
const { data: contact } = await useAsyncData(
  'contact',
  () => $fetch('https://ladle-backend-production.up.railway.app/api/contacts?populate=*')
)

// Rich text formatı için yardımcı fonksiyon
const formatDescription = (desc) => {
  if (!desc) return ''
  return desc.map(p => p.children.map(c => c.text).join('')).join('\n')
}

console.log('Contact data:', contact.value)
</script>