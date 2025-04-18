<script setup lang="ts">
import Title from '@/components/Title.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import VerTodosProductos from '@/components/VerTodosProductos.vue'
</script>

<template>
  <section class="section">
    <Title title="Productos más vendidos" />
    <ProductGrid />
    <VerTodosProductos />
  </section>
</template>

<style scoped></style>
