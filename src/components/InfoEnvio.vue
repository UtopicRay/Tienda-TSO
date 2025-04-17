<script setup lang="ts">
import type { InfoEnvio } from '@/types.ts'
const {element}=defineProps<{element:InfoEnvio}>()
</script>

<template>
<div class="flex justify-center items-center flex-col text-center gap-6 p-8">
  <div class="relative w-24 h-24 overflow-hidden bg-[#FEF4DB] rounded-full flex justify-center items-center">
   <component :is="element.svg"></component>
  </div>
  <h5 class="font-bold text-3xl">{{element.title}}</h5>
  <p class="!text-[#212529]" >{{element.description}}</p>
</div>
</template>

