<script setup lang="ts">
import ProductGrid from '@/components/product/ProductGrid.vue'
import VerTodosProductos from '@/components/VerTodosProductos.vue'
</script>

<template>
  <section class="section bg-light-grey-2">
    <Title title="Productos recomendados" />
    <ProductGrid />
    <VerTodosProductos/>
  </section>
</template>

<style scoped></style>
