<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'
import { useProductStore } from '@/stores/product.ts'

const globalProduct=useProductStore()
</script>
<template>
<Loading v-if="globalProduct.loading&&!globalProduct.products"/>
<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8"  v-else>
  <ProductCard :product="product" v-for="product in globalProduct.products?.slice(0,8)" :key="product?.id"/>
</div>
  <ErrorAlert v-if="globalProduct.error&&!globalProduct.products" :error="globalProduct.error"/>
</template>
