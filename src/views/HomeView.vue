<script setup lang="ts">
import SuscribeSection from '@/components/sections/SuscribeSection.vue'
import EnvioSection from '@/components/sections/EnvioSection.vue'
import ProductSection from '@/components/sections/ProductSection.vue'
import UltimosSection from '@/components/sections/UltimosSection.vue'
import VinculadoSection from '@/components/sections/VinculadoSection.vue'
import RecomendadoSection from '@/components/sections/RecomendadoSection.vue'
import Banner2 from '@/components/banners/Banner2.vue'
import CategoriaSection from '@/components/sections/CategoriaSection.vue'
</script>

<template>
  <main>
    <CategoriaSection/>
    <RecomendadoSection/>
    <Banner2/>
    <ProductSection/>
    <VinculadoSection/>
    <EnvioSection/>
    <UltimosSection/>
    <SuscribeSection/>
  </main>
</template>
