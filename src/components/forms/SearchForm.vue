<script setup lang="ts">
import ButtonBase from '@/components/ButtonBase.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
</script>

<template>
  <form class="flex items-center w-full gap-1">
    <input
      type="text"
      id="voice-search"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Busca chuleta de cerdo"
      required
    />
    <ButtonBase
      title="Buscar"
      class="rounded-md text-[#624602] bg-light-yellow"
      :icon="IconSearch"
    ></ButtonBase>
  </form>
</template>

<style scoped></style>
