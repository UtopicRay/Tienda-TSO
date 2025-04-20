<script setup lang="ts">
import ProductCard from '@/components/product/ProductCard.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'
import { useProductStore } from '@/stores/product.ts'
import CardSkeleton from '@/components/skeletons/CardSkeleton.vue'

const {products,error,loading}=useProductStore()
</script>

<template>
  <CardSkeleton v-if="loading&&!products" />
  <div class="flex justify-center">
    <div class="relative w-full max-w-screen-xl overflow-hidden">
      <!-- Slider Wrapper -->
      <div class="flex flex-col lg:flex-row overflow-x-auto scroll-smooth gap-4 md:gap-6 lg:gap-8 px-2 py-6 lg:px-4">
        <ProductCard
          :product="product"
          v-for="product in products?.slice(0, 10)"
          :key="product?.id"
          class="flex-shrink-0"
        />
      </div>
    </div>
  </div>
  <ErrorAlert v-if="error" :error="error" />
</template>

<style scoped>
/* Estilos para la barra de desplazamiento */
::-webkit-scrollbar {
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
