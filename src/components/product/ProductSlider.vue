<script setup lang="ts">
import ProductCard from '@/components/product/ProductCard.vue'
import { useFechtData } from '@/hooks/useFechtData.ts'
import { baseUrl } from '../../../env.ts'
import Loading from '@/components/Loading.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'
const {data:products,loading,error}=useFechtData(baseUrl)
</script>

<template>
  <Loading v-if="loading"/>
  <div class="flex justify-center">
    <div class="relative w-full max-w-screen-lg overflow-hidden">
      <!-- Slider Wrapper -->
      <div class="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar">
        <ProductCard :product="product" v-for="product in products.products.slice(0,10)" :key="product?.id"/>
      </div>
    </div>
  </div>
  <ErrorAlert v-if="error" :error="error"/>
</template>

<style scoped>

</style>
