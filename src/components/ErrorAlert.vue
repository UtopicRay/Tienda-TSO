<script setup lang="ts">
import ButtonBase from '@/components/ButtonBase.vue'
import { useRouter } from 'vue-router'

const { error } = defineProps({ error: String })
const router=useRouter()
console.log(error)
</script>

<template>
  <div
    class="max-w-sm flex flex-col justify-center items-center gap-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <img src="/Error.webp" alt="error-image" />
    <h4 class="text-lg font-semibold">Error de conexión</h4>
    <p class="text-neutral text-center">Ha ocurrido algún problema con tu conexión a internet. Comprueba y vuelve a intentarlo.</p>
    <ButtonBase class="p-2.5 bg-[#4F6A8E] text-white rounded-sm" title="Reintentar" @click="router.go('/')"/>
  </div>
</template>

<style scoped></style>
