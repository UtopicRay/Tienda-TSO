<script setup lang="ts">
const {title,icon}=defineProps<{title:string,icon:any}>()
</script>

<template>
<div>
  <button class="py-3 text-white mx-auto flex gap-1 font-bold text-ambar-color" type="submit">
   <component class="text-ambar-color" :is="icon"/>
  {{title}}</button>
</div>
</template>

<style scoped>

</style>
