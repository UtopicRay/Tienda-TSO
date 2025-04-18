<script setup lang="ts">
import { useFechtData } from '@/hooks/useFechtData.ts'
import ProductFooterCard from '@/components/product/ProductFooterCard.vue'
import type { Product } from '@/types/ProductApi.ts'

const {product} =defineProps<{product:Product}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="relative">
      <img :src="product?.images[0]" alt="product-image" class="max-w-[222.4px] h-[200px] mx-auto" />
      <span class="bg-white text-neutral text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm mercadito"> Mercadito TSO</span>
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-neutral">{{ product?.title }}</p>
      <div class="flex gap-2">
        <p class="font-bold text-secundary-blue">$ {{ product?.price }}</p>
        <p class="line-through text-light-red-2">$ {{ product?.discountPercentage }}</p>
        <span class="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm"
          >Envio gratis</span
        >
      </div>
      <ProductFooterCard/>
    </div>
  </div>
</template>

<style scoped>
.mercadito{
  position: absolute;
  bottom: 0;

  right: 0;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
}
</style>
