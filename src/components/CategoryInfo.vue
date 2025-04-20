<script setup lang="ts">
import type { Category } from '@/types/types.ts'

const {category}=defineProps<{category:Category}>()
</script>

<template>
<div class="flex flex-col justify-center items-center gap-3 category-item animate-fade-in">
  <img :src="category.img" :alt="`category-${category.name}`" class="object-cover max-w-full h-auto hover-scale"/>
  <p class="font-semibold text-[#0B0A0A] text-ellipsis text-center">{{category.name.toUpperCase()}}</p>
</div>
</template>

<style scoped>
.category-item {
  transition: all 0.3s ease;
}

.category-item:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.hover-scale {
  transition: transform 0.2s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}
</style>
