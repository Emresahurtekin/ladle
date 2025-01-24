<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gray-900 py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl font-bold text-white text-center mb-4">Galeri</h1>
        <p class="text-xl text-gray-500 text-center">
          İş makinelerimiz ve projelerimizden görüntüler
        </p>
      </div>
    </div>

    <!-- Filtreler -->
    <div class="container mx-auto px-4 py-8">
      <div class="flex justify-center space-x-4 mb-6">
        <button
          @click="selectedCategory = 'all'"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedCategory === 'all'
              ? 'bg-yellow-400 text-gray-800'
              : 'bg-gray-200 text-gray-500 hover:bg-gray-300',
          ]"
        >
          Tümü
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedCategory === category
              ? 'bg-yellow-400 text-gray-500'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
        >
          {{ categoryNames[category] }}
        </button>
      </div>

      <!-- Galeri Grid -->
      <div v-if="isLoading" class="text-center py-12">
        <p class="text-gray-500">Yükleniyor...</p>
      </div>

      <div
        v-else-if="filteredGallery && filteredGallery.length > 0"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <div
          v-for="item in filteredGallery"
          :key="item.id"
          class="group relative overflow-hidden rounded-lg shadow-lg"
        >
          <img
            v-if="item?.image?.url"
            :src="`http://localhost:1337${item.image.url}`"
            :alt="item?.title || 'Galeri resmi'"
            class="w-full h-64 object-cover transform transition-transform group-hover:scale-110"
          />
          <div
            class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          >
            <div class="text-center p-4">
              <h3 class="text-white text-xl font-bold mb-2">
                {{ item?.title || "Başlık yok" }}
              </h3>
              <p class="text-gray-600">
                {{ item?.category || "Kategori yok" }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-12">
        <p class="text-gray-500">Görüntülenecek resim bulunmuyor...</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const isLoading = ref(true);
const selectedCategory = ref("all");

const categories = ["kepce", "hafriyat", "nakliye"];
const categoryNames = {
  kepce: "Kepçe",
  hafriyat: "Hafriyat",
  nakliye: "Nakliye",
};

// Gallery verilerini çekme
const { data: gallery } = await useAsyncData("gallery", async () => {
  try {
    const response = await $fetch(
      "http://localhost:1337/api/galleries?populate=*"
    );
    console.log("API Yanıtı:", JSON.stringify(response, null, 2));
    isLoading.value = false;
    return response;
  } catch (error) {
    console.error("Galeri verileri yüklenirken hata:", error);
    isLoading.value = false;
    return { data: [] };
  }
});

const filteredGallery = computed(() => {
  if (!gallery.value?.data) {
    return [];
  }

  const items = gallery.value.data.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category?.trim(),
    image: item.image,
  }));

  if (selectedCategory.value === "all") {
    return items;
  }

  return items.filter((item) => item.category === selectedCategory.value);
});
</script>
