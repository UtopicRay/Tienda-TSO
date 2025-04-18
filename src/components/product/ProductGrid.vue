<script setup lang="ts">
import { useFechtData } from '@/hooks/useFechtData.ts'
import Loading from '@/components/Loading.vue'
import ProductCard from '@/components/product/ProductCard.vue'
import ErrorAlert from '@/components/ErrorAlert.vue'

const {data:products,loading,error}=useFechtData('https://dummyjson.com/products')
</script>
<template>
<Loading v-if="loading"/>
<div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8"  v-else>
  <ProductCard :product="product" v-for="product in products?.products.slice(0,8)" :key="product?.id"/>
</div>
  <ErrorAlert v-if="error" :error="error"/>
</template>
