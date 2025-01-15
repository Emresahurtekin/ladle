<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold mb-8">Hakkımızda</h1>
    <div class="prose max-w-4xl">
      <div v-if="about" v-html="about.content"></div>
    </div>
  </div>
</template>

<script setup>
const { findOne } = useStrapi()
const { data: about } = await findOne('about', 1)
</script> 