<script setup lang="ts">
import { ref } from 'vue'

const {images}=defineProps<{images:string[]}>()
const currentImage=ref<string>(images[0])
function UpdateImage(image:string){
  currentImage.value=image
}
</script>

<template>
<div class="grid grid-cols-3">
  <div class="flex flex-col gap-2">
    <button class="small-image" v-for="(image,i) in images" :key="i" @click="UpdateImage(image)">
      <img :src="image" alt="small-image">
    </button>
  </div>
  <div class="flex justify-center h-full col-span-2 items-center">
    <img class="max-w-full h-auto" :src="currentImage" alt="big-image"/>
  </div>
</div>
</template>

<style scoped>
.small-image{
  width: 96px;
  height: 88px;
  border-radius: 8px;
  box-shadow: 0px 0px 16px 0px #0000000D;
}
</style>
