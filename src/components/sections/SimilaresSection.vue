<script setup lang="ts">
import Title from '@/components/Title.vue'
import ProductSlider from '@/components/product/ProductSlider.vue'
import { useSectionObserver } from '@/hooks/useSectionObserver'

const { element } = useSectionObserver()
</script>

<template>
  <section ref="element" class="section bg-light-grey-2 section-observer">
    <Title title="Productos similares" />
    <ProductSlider />
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

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}

.animate-slide-in {
  animation: slideIn 0.5s ease-out forwards;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
