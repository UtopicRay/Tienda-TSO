<script setup lang="ts">
import FooterPage from '@/components/FooterPage.vue'
import Navbar from '@/components/navbar/Navbar.vue'
import SubNavbar from '@/components/navbar/SubNavbar.vue'
import SmallNavbar from '@/components/navbar/SmallNavbar.vue'
</script>

<template>
  <Navbar class="hidden lg:grid"/>
  <SmallNavbar class="block lg:hidden"></SmallNavbar>
  <SubNavbar/>
  <main>
    <slot/>
  </main>
  <FooterPage/>
</template>
