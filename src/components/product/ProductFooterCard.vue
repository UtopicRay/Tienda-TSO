<script setup lang="ts">
import IconShopCar from '@/components/icons/IconShopCar.vue'
import ButtonBase from '@/components/ButtonBase.vue'
import { initFlowbite } from 'flowbite'

initFlowbite()
</script>

<template>
  <div class="footer-card ">
    <form class="max-w-xs rounded-sm  bg-light-grey">
      <div class="relative flex items-center max-w-[105px]">
        <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" class="button-number">
          <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
          </svg>
        </button>
        <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" class="bg-light-grey border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" required />
        <button type="button" id="increment-button" data-input-counter-increment="quantity-input" class="button-number">
          <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
          </svg>
        </button>
      </div>
    </form>
    <ButtonBase title="Añadir" class="w-24 bg-light-yellow rounded-sm" :icon="IconShopCar"></ButtonBase>
  </div>
</template>

<style scoped>

</style>
