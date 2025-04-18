<script setup lang="ts">
const {icon,position,styles,title,color}=defineProps<{icon:any,styles?:string,position:'right'|'left',title?:string,color:string}>()
</script>

<template>
<div :class="`flex p-1.5 items-center gap-1 ${styles} ${position=='right'?'tag-right':'tag-left'}`">
  <component class="w-8" :is="icon"/>
  <p :class="color + ` font-[600] text-[13.33px]` ">{{title}}</p>
</div>
</template>

<style scoped>
.tag-left{
  border-radius: 0 5.33px 5.33px 0;
  }
.tag-right{
  border-radius: 5.33px 0 0 5.33px;
}
</style>
