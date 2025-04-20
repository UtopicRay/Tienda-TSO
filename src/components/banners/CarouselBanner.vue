<script setup lang="ts">
import IconFlechaDerecha from '@/components/icons/IconFlechaDerecha.vue'
import IconFlechaIzquierda from '@/components/icons/IconFlechaIzquierda.vue'
import { images } from '@/constants/Images.ts'
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'

const currentSlide = ref(0)

onMounted(() => {
  initFlowbite()
})

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length
}

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length
}
</script>

<template>
  <div id="default-carousel" class="relative w-full animate-fade-in" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
      <!-- Carousel Items -->
      <div
        v-for="(item, i) in images"
        :key="i"
        class="duration-700 ease-in-out carousel-transition"
        :class="{ 'block': i === currentSlide, 'hidden': i !== currentSlide }"
      >
        <img
          :src="item.src"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hover-scale"
          :alt="item.alt"
        />
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
      <button
        v-for="(item, i) in images"
        :key="i"
        type="button"
        class="w-3 h-3 rounded-full button-hover"
        :class="{ 'bg-white': i === currentSlide, 'bg-white/50': i !== currentSlide }"
        @click="currentSlide = i"
        :aria-current="i === currentSlide"
        :aria-label="`Slide ${i + 1}`"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none button-hover"
      @click="prevSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <IconFlechaIzquierda />
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none button-hover"
      @click="nextSlide"
    >
      <span
        class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <IconFlechaDerecha />
        <span class="sr-only">Next</span>
      </span>
    </button>
  </div>
</template>

<style scoped>
.duration-700 {
  transition-duration: 700ms;
}
</style>
