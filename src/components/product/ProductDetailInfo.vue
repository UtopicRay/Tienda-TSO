<script setup lang="ts">
import IconShopCar from '@/components/icons/IconShopCar.vue'
import IconHeart from '@/components/icons/IconHeart.vue'
import QuantityForm from '@/components/forms/QuantityForm.vue'
import VerticalDivider from '@/components/dividers/VerticalDivider.vue'
import IconCamionRed from '@/components/icons/IconCamionRed.vue'
import ButtonBase from '@/components/ButtonBase.vue'
import type { Product } from '@/types/ProductApi.ts'
import { computed } from 'vue'

const { productDetail } = defineProps<{ productDetail: Product }>()
const discountPrice = computed(
  () => productDetail.price - (productDetail.price * productDetail.discountPercentage) / 100,
)
</script>

<template>
  <div class="product-details">
    <div class="flex flex-col gap-4">
      <h2 class="text-5xl font-bold">{{ productDetail?.title }}</h2>
      <div class="flex gap-2 items-center">
        <p class="font-bold text-secundary-blue text-lg" v-if="discountPrice">
          $ {{ discountPrice.toPrecision(4) }}
        </p>
        <p class="line-through text-light-red-2">$ {{ productDetail?.price }}</p>
      </div>
      <p class="text-neutral">
        Marca:
        <span class="rounded-sm px-1.5 py-2 bg-light-grey text-neutral-2">{{
          productDetail?.category
        }}</span>
      </p>
    </div>
    <div class="flex justify-center items-center py-2 px-3 border-[0.5px] border-[#E4E4E4]">
      <div class="flex gap-2 justify-center items-center">
        <IconCamionRed />
        <p class="font-bold">3.4USD</p>
        <p class="text-neutral">/ {{ productDetail?.shippingInformation }}</p>
      </div>
      <VerticalDivider />
      <div class="divider mx-2"></div>
      <p class="text-neutral">
        <span class="text-blue-3 font-bold">¡Gratis</span>para más de
        <span class="text-blue-3 font-bold">24 USD!</span>
      </p>
    </div>
    <div>
      <p class="text-neutral-2">Cantidad</p>
      <QuantityForm class="w-24" />
    </div>
    <div class="flex gap-8 w-full justify-between">
      <ButtonBase
        :icon="IconShopCar"
        styles="gap-2.5 !w-full"
        class="bg-light-yellow text-ambar-color rounded-sm"
        title="Añadir al carrito"
      />
      <ButtonBase
        :icon="IconHeart"
        styles="gap-2.5 !w-full"
        class="bg-light-blue-2 text-white rounded-sm"
        title="Añadir a favoritos"
      />
    </div>
    <div>
      <p>{{ productDetail?.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
