<script setup lang="ts">
const {title,icon}=defineProps<{title?:string,icon?:any}>()
</script>

<template>
<div>
  <button class="inline-flex  items-center py-2.5 px-3 ms-2 text-sm font-bold" type="submit">
   <component class="text-ambar-color" :is="icon"/>
  {{title}}</button>
</div>
</template>

<style scoped>

</style>
