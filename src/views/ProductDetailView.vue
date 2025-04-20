<script setup lang="ts">
import { useFechtData } from '@/hooks/useFechtData.ts'
import { baseUrl } from '../../env.ts'
import { useRoute } from 'vue-router'
import {ref, watch } from 'vue'
import type { Product } from '@/types/ProductApi.ts'
import ProductDetailInfo from '@/components/product/ProductDetailInfo.vue'
import ProductDetailImages from '@/components/product/ProductDetailImages.vue'
import SimilaresSection from '@/components/sections/SimilaresSection.vue'
import DetailSkeleton from '@/components/skeletons/DetailSkeleton.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'

const router = useRoute()
const { data: product, loading, error } = useFechtData(`${baseUrl}/${router.params.id}`)
const productDetail = ref<Product>()
watch(product, () => {
  productDetail.value = product.value as Product
  console.log(productDetail.value)
})
</script>
<template>
  <section class="section lg:!px-24 px-8">
    <nav class="md:flex hidden" aria-label="Breadcrumb">
      <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li class="inline-flex items-center">
          <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
            <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
            </svg>
            Inicio
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <a href="#" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Todos los productos</a>
          </div>
        </li>
        <li aria-current="page">
          <div class="flex items-center">
            <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">{{productDetail?.title}}</span>
          </div>
        </li>
      </ol>
    </nav>
    <DetailSkeleton v-if="loading" />
    <div class="grid lg:grid-cols-2 grid-cols-1" v-else>
     <ProductDetailImages v-if="productDetail" :images="productDetail?.images" />
     <ProductDetailInfo v-if="productDetail" :product-detail="productDetail"/>
    </div>
  </section>
  <SimilaresSection/>
</template>
<style scoped>
.divider{
  height: 50%;
  border-width: 1px;
  border: black;
}
</style>
