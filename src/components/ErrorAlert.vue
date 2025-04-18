<script setup lang="ts">
const {error}=defineProps({error:String})
</script>

<template>
  <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <span class="font-medium">Error!</span> {{error}}
  </div>
</template>

<style scoped>

</style>
