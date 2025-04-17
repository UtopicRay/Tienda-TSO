<script setup lang="ts">
import Button from '@/components/Button.vue'
import IconShopCar from '@/components/icons/IconShopCar.vue'
import InfoTag from '@/components/tags/InfoTag.vue'
import IconTag from '@/components/icons/IconTag.vue'
import NewTag from '@/components/tags/NewTag.vue'
import IconFecha from '@/components/icons/IconFecha.vue'

</script>

<template>
<div class="min-w-[232px] relative max-w-[264px] py-4 border-[0.5px] rounded-sm">
  <div class="z-10 absolute flex flex-col gap-1">
    <InfoTag title="-10%" :icon="IconTag" styles="z-10 bg-light-red w-3/4" color="text-light-red-2" position="left"/>
    <InfoTag title="NUEVO" :icon="NewTag" styles="z-10 bg-light-yellow" color="text-ambar-color" position="left"/>
  </div>
  <div class="z-10 right-0 absolute flex flex-col gap-1">
    <InfoTag :icon="IconFecha" styles=" z-10 bg-light-blue w-3/4" color="text-light-red-2" position="right"/>
  </div>
  <div class="relative m-4">
    <Button title="Añadir" class="w-24 bg-light-yellow rounded-sm" :icon="IconShopCar"></Button>
  </div>
</div>
</template>

<style scoped>

</style>
