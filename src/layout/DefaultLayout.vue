<script setup lang="ts">
import FooterPage from '@/components/FooterPage.vue'
import Navbar from '@/components/Navbar.vue'
import SubNavbar from '@/components/SubNavbar.vue'
</script>

<template>
  <Navbar/>
  <SubNavbar/>
  <main>
    <slot/>
  </main>
  <FooterPage/>
</template>
