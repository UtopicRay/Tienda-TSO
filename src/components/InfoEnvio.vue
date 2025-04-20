<script setup lang="ts">
import type { InfoEnvio } from '@/types/types.ts'
const {element}=defineProps<{element:InfoEnvio}>()
</script>

<template>
<div class="flex justify-center items-center flex-col text-center gap-6 p-8 info-card animate-fade-in-up">
  <div class="relative w-24 h-24 overflow-hidden bg-[#FEF4DB] rounded-full flex justify-center items-center hover-scale">
   <component :is="element.svg"/>
  </div>
  <h5 class="font-bold text-3xl">{{element.title}}</h5>
  <p class="!text-[#212529]" >{{element.description}}</p>
</div>
</template>

<style scoped>
.info-card {
  transition: all 0.3s ease;
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.hover-scale {
  transition: transform 0.2s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}
</style>

