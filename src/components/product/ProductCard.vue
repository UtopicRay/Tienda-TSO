<script setup lang="ts">
import ProductInfoCard from '@/components/product/ProductInfoCard.vue'
import InfoTag from '@/components/InfoTag.vue'
import IconTag from '@/components/icons/IconTag.vue'
import IconNew from '@/components/icons/IconNew.vue'
import IconFecha from '@/components/icons/IconFecha.vue'
import type { Product } from '@/types/ProductApi.ts'

const {product}=defineProps<{product:Product}>()
</script>

<template>
  <div class="product-card">
    <div class="z-10 absolute flex flex-col gap-1">
      <InfoTag :title="`-${product?.discountPercentage}%`" :icon="IconTag" styles="z-10 w-[70%] bg-light-red " color="text-light-red-2" position="left"/>
      <InfoTag title="NUEVO" :icon="IconNew" styles="z-10 max-w-[81px] bg-light-yellow" color="text-ambar-color" position="left"/>
    </div>
    <div class="z-10 right-0 absolute flex flex-col gap-1">
      <InfoTag :icon="IconFecha" styles=" z-10 bg-light-blue " color="text-light-red-2" position="right"/>
    </div>
    <div class="relative m-4">
      <ProductInfoCard :product="product" />
    </div>
  </div>
</template>

<style scoped></style>
