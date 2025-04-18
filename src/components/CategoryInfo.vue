<script setup lang="ts">
import type { Category } from '@/types/types.ts'

const {category}=defineProps<{category:Category}>()
</script>

<template>
<div class="flex flex-col justify-center items-center gap-3 overflow-hidden">
  <img :src="category.img" :alt="`category-${category.name}`" class="object-cover max-w-full h-auto"/>
  <p class="font-semibold text-[#0B0A0A] text-ellipsis text-center">{{category.name.toUpperCase()}}</p>
</div>
</template>

<style scoped>

</style>
