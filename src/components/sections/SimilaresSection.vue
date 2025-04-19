<script setup lang="ts">
import ProductGrid from '@/components/product/ProductGrid.vue'
import VerTodosProductos from '@/components/VerTodosProductos.vue'
import Title from '@/components/Title.vue'
import ProductSlider from '@/components/product/ProductSlider.vue'
</script>

<template>
  <section class="section bg-light-grey-2">
    <Title title="Productos similares" />
    <ProductSlider/>
  </section>
</template>

<style scoped></style>
