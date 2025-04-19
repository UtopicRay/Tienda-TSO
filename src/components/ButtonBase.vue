<script setup lang="ts">
const {title,icon,styles}=defineProps<{title?:string,icon?:any,styles?:string}>()
</script>

<template>
<div>
  <button :class="`inline-flex  items-center py-2.5 px-3 ms-2 text-sm font-bold ${styles}`" type="submit">
   <component class="text-ambar-color" :is="icon"/>
  {{title}}</button>
</div>
</template>

<style scoped>

</style>
