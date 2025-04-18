<script setup lang="ts">
import { NavegationLinks } from '@/constants/NavegationLink.ts'
import type { NavLink } from '@/types/types.ts'
import { ref } from 'vue'

const links = ref<NavLink[]>(NavegationLinks)
</script>

<template>
  <div class="bg-[#E5EAF0] py-4 w-full">
    <ul class="flex gap-6 justify-center items-center ">
      <li v-for="(link,i) in links" :key="i">
        <RouterLink :to="link.to" class="text-[#7A7474]">{{link.name}}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
