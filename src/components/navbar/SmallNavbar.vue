<script setup lang="ts">
import SelectForm from '@/components/forms/SelectForm.vue'
import IconLocationYellow from '@/components/icons/IconLocationYellow.vue'
import ButtonBase from '@/components/ButtonBase.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
</script>

<template>
<nav class="flex flex-col px-2 py-3 gap-2">
  <div class="flex justify-between items-center">
    <a href="#">
      <img src="/tso-tienda.png" alt="tienda-img" class="max-w-[180px] h-[40px]" />
    </a>
    <SelectForm class="w-[20%]"/>
  </div>
  <div class="flex justify-between items-center gap-2">
    <IconLocationYellow/>
    <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busca chuleta de cerdo" required />
    <ButtonBase class="text-[#624602] bg-light-yellow rounded-lg"  :icon="IconSearch"/>
  </div>
</nav>
</template>

<style scoped>

</style>
