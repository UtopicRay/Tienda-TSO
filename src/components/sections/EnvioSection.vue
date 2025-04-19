<script setup lang="ts">
import { ConstInfoEnvio } from '@/constants/ConstInfoEnvio.ts'
import type { InfoEnvio as infoE} from '@/types/types.ts'
import InfoEnvio from '@/components/InfoEnvio.vue'
import { ref } from 'vue'
import VerticalDivider from '@/components/dividers/VerticalDivider.vue'

const envios=ref<infoE[]>(ConstInfoEnvio)
</script>

<template>
<section class="section">
<header class="text-center">
  <h3 class="text-ambar-color lg:text-[40px] text-xl font-bold">Más de 1500 productos en almacén</h3>
  <h2 class="font-bold 2xl:text-8xl lg:text-7xl text-[40px]">Envíos hacia toda Cuba</h2>
</header>
  <div class="grid lg:grid-cols-3 grid-cols-1 relative">
    <div v-for="(envio,i) in envios" :key="i" class="flex gap-12 items-center justify-center">
     <InfoEnvio :element="envio"/>
      <VerticalDivider v-if="i==0||i==1" class="hidden lg:block"/>
    </div>

  </div>
</section>
</template>

<style scoped>
.vertical-divider {
  width: 2px; /* Ajusta el grosor */
  height: 50%;
  background-color: #CFCECE ; /* Color del divisor */
  margin: 0 16px; /* Espaciado alrededor */
}
</style>
