<script setup lang="ts">
import { useFechtData } from '@/hooks/useFechtData.ts'
import { baseUrl } from '../../env.ts'
import { useRoute } from 'vue-router'
import {ref, watch } from 'vue'
import type { Product } from '@/types/ProductApi.ts'
import Loading from '@/components/Loading.vue'
import ProductDetailInfo from '@/components/product/ProductDetailInfo.vue'
import ProductDetailImages from '@/components/product/ProductDetailImages.vue'
import SimilaresSection from '@/components/sections/SimilaresSection.vue'

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
    <Loading v-if="loading" />
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
