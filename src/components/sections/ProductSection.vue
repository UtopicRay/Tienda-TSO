<script setup lang="ts">
import Title from '@/components/Title.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'
import VerTodosProductos from '@/components/VerTodosProductos.vue'
import { useSectionObserver } from '@/hooks/useSectionObserver.ts'

const { element } = useSectionObserver()
</script>

<template>
  <section ref="element" class="section section-observer">
    <Title title="Productos más vendidos" />
    <ProductGrid />
    <VerTodosProductos />
  </section>
</template>

<style scoped></style>
