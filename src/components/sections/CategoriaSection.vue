<script setup lang="ts">
import CategoryInfo from '@/components/CategoryInfo.vue'
import { Categorias } from '@/constants/Categorias.ts'
import VerTodosProductos from '@/components/VerTodosProductos.vue'
</script>

<template>
<section class="section">
  <div class="grid grid-cols-9 gap-12">
    <CategoryInfo :category="categoria" v-for="categoria in Categorias" :key="categoria.img" />
  </div>
  <VerTodosProductos/>
</section>
</template>

<style scoped>

</style>
