<script setup lang="ts">
import ProductGrid from '@/components/product/ProductGrid.vue'
import VerTodosProductos from '@/components/VerTodosProductos.vue'
import { useSectionObserver } from '@/hooks/useSectionObserver'

const { element } = useSectionObserver()
</script>

<template>
  <section ref="element" class="section bg-light-grey-2 section-observer">
    <Title title="Productos recomendados" />
    <ProductGrid />
    <VerTodosProductos />
  </section>
</template>

<style scoped>

</style>
