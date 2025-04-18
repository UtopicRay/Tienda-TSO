<script setup lang="ts">
import { ConstInfoEnvio } from '@/constants/ConstInfoEnvio.ts'
import type { InfoEnvio as infoE} from '@/types/types.ts'
import InfoEnvio from '@/components/InfoEnvio.vue'
import { ref } from 'vue'

const envios=ref<infoE[]>(ConstInfoEnvio)
</script>

<template>
<section class="envio-section">
<header class="text-center">
  <h3 class="text-ambar-color text-[40px] font-bold">Más de 1500 productos en almacén</h3>
  <h2 class="font-bold 2xl:text-8xl text-7xl">Envíos hacia toda Cuba</h2>
</header>
  <div class="grid grid-cols-3 relative">
    <div v-for="(envio,i) in envios" :key="i" class="flex gap-12 items-center">
     <InfoEnvio :element="envio"/>
      <div v-if="i==0||i==1" class="vertical-divider"></div>
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
