<script setup lang="ts">
import IconShopCar from '@/components/icons/IconShopCar.vue'
import ButtonBase from '@/components/ButtonBase.vue'
import QuantityForm from '@/components/forms/QuantityForm.vue'
</script>

<template>
  <div class="footer-card">
    <QuantityForm />
    <ButtonBase
      title="Añadir"
      class="w-24 bg-light-yellow rounded-sm"
      :icon="IconShopCar"
    ></ButtonBase>
  </div>
</template>

<style scoped></style>
