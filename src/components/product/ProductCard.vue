<script setup lang="ts">
import ProductInfoCard from '@/components/product/ProductInfoCard.vue'
import InfoTag from '@/components/InfoTag.vue'
import IconTag from '@/components/icons/IconTag.vue'
import IconNew from '@/components/icons/IconNew.vue'
import IconFecha from '@/components/icons/IconFecha.vue'
import type { Product } from '@/types/ProductApi.ts'

const { product } = defineProps<{ product: Product }>()
</script>

<template>
  <RouterLink :to="`product/${product.id}`" class="product-card">
    <div class="z-10 absolute flex flex-col gap-1">
      <InfoTag
        :title="`-${product?.discountPercentage.toPrecision(2) }%`"
        :icon="IconTag"
        styles="z-10 w-[70%] bg-light-red "
        color="text-light-red-2"
        position="left"
      />
      <InfoTag
        title="NUEVO"
        :icon="IconNew"
        styles="z-10 max-w-[81px] bg-light-yellow"
        color="text-ambar-color"
        position="left"
      />
      <InfoTag
        :icon="IconFecha"
        styles=" z-10 bg-light-blue block lg:hidden w-1/2 "
        color="text-light-red-2"
        position="left"
      />
    </div>
    <div class="z-10 right-0 absolute md:flex hidden flex-col gap-1">
      <InfoTag
        :icon="IconFecha"
        styles=" z-10 bg-light-blue "
        color="text-light-red-2"
        position="right"
      />
    </div>
    <div class="relative md:m-4 m-0">
      <ProductInfoCard :product="product" />
    </div>
  </RouterLink>
</template>

<style scoped></style>
