<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="pending">Yükleniyor...</div>
    <div v-else-if="service" class="max-w-4xl mx-auto">
      <img v-if="service.image" :src="service.image.url" :alt="service.title" class="w-full h-96 object-cover rounded-lg">
      <h1 class="text-4xl font-bold mt-8">{{ service.title }}</h1>
      <div class="mt-4 prose" v-html="service.description"></div>
      <div class="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 class="text-2xl font-semibold">Hizmet Detayları</h2>
        <div class="mt-4 space-y-2">
          <p class="text-xl">Saatlik Ücret: {{ service.price }}₺</p>
          <p>Hizmet Bölgesi: {{ service.location }}</p>
          <p class="text-lg">
            Durum: 
            <span :class="service.availability ? 'text-green-600' : 'text-red-600'">
              {{ service.availability ? 'Müsait' : 'Müsait Değil' }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { findOne } = useStrapi()
const { data: service, pending } = await useAsyncData(`service-${route.params.id}`, () =>
  findOne('services', route.params.id, { populate: ['image'] })
)
</script>