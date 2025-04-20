<script setup lang="ts">

import Title from '@/components/Title.vue'
import ProductSlider from '@/components/product/ProductSlider.vue'
import { useSectionObserver } from '@/hooks/useSectionObserver.ts'
const {element}=useSectionObserver()
</script>

<template>
  <section ref="element" class="section bg-light-grey-2 section-observer">
    <Title title="Últimos añadidos" />
    <ProductSlider/>
  </section>
</template>

<style scoped>
.section-observer {
  opacity: 0;
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  transform: translateY(30px);
}

.section-observer.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
