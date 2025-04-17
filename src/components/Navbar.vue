<script lang="ts">
import { defineComponent } from 'vue'
import IconLocationYellow from '@/components/icons/IconLocationYellow.vue'
import SearchForm from '@/components/forms/SearchForm.vue'
import SelectForm from '@/components/forms/SelectForm.vue'
import IconPeople from '@/components/icons/IconPeople.vue'
import IconShopCar from '@/components/icons/IconShopCar.vue'

export default defineComponent({
  components: { IconShopCar, IconPeople, SelectForm, SearchForm, IconLocationYellow }
})
</script>
<template>
  <nav class="grid grid-cols-3 py-6 w-full">
    <div class="flex justify-center items-center gap-5">
      <img src="/tso-tienda.png" alt="tienda-img" class="max-w-[180px] h-[40px]"/>
      <div class="flex justify-center items-center gap-3">
        <IconLocationYellow/>
        <div>
          <p class="text-[#7A7474]">Entregar en:</p>
          <p class="font-bold text-[#405774] underline">Arroyo Naranjo</p>
        </div>
      </div>
    </div>
    <SearchForm/>
    <div class="flex justify-center items-center gap-3">
      <SelectForm/>
      <IconPeople/>
      <div class="relative">
        <IconShopCar></IconShopCar>
        <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-3  -end-3 dark:border-gray-900">3</div>
      </div>
    </div>
  </nav>
</template>
<style>
p{
  color: black;
}
</style>
