<script setup lang="ts">
const {title,icon,styles}=defineProps<{title?:string,icon?:any,styles?:string}>()
</script>

<template>
<div>
  <button :class="`inline-flex items-center py-2.5 px-3 ms-2 text-sm font-bold button-hover animate-fade-in-up ${styles}`" type="submit">
   <component class="text-ambar-color" :is="icon"/>
  {{title}}</button>
</div>
</template>

<style scoped>
.button-hover {
  transition: all 0.3s ease;
}

.button-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
</style>
