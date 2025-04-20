<script setup lang="ts">
import ProductFooterCard from '@/components/product/ProductFooterCard.vue'
import type { Product } from '@/types/ProductApi.ts'
import { computed } from 'vue'

const { product } = defineProps<{ product: Product }>()
const discountPrice = computed(
  () => product.price - (product.price * product.discountPercentage) / 100,
)
</script>

<template>
  <div class="grid lg:grid-cols-1 grid-cols-2 items-center gap-4">
    <div class="relative flex justify-center">
      <img
        :src="product?.images[0]"
        alt="product-image"
        class="w-full max-w-[180px] lg:max-w-[222.4px] object-contain lg:h-[200px] h-[144px]"
      />
      <span
        class="bg-white text-neutral text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm mercadito"
      >
        Mercadito TSO</span
      >
    </div>
    <div class="flex flex-col gap-2">
      <p class="text-neutral text-sm lg:text-base line-clamp-2">{{ product?.title }}</p>
      <div class="flex flex-wrap gap-2 items-center">
        <p class="font-bold text-secundary-blue text-sm sm:text-base">
          $ {{ discountPrice.toPrecision(4) }}
        </p>
        <p class="line-through text-light-red-2 text-sm sm:text-base">$ {{ product?.price }}</p>
        <span
          class="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-sm whitespace-nowrap"
          >Envio gratis</span
        >
      </div>
      <ProductFooterCard />
    </div>
  </div>
</template>

<style scoped>
.mercadito {
  position: absolute;
  bottom: 0;
  right: 0;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.06);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
