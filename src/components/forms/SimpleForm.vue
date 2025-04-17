<script setup lang="ts">
const {placeholder,type,action,color} = defineProps({ placeholder: String, type: String, action: String, color: String })
</script>

<template>
  <form class="relative border rounded-sm border-[#CAD4E2]  flex justify-between">
    <input class="p-3 w-full" :placeholder="placeholder" :type="type" />
    <button :class="`w-25 py-3 text-white px-4 font-bold `+ color" type="submit">{{action}}</button>
  </form>
</template>

<style scoped>
form{
  box-shadow: 0px 0px 4px 0px #38383805;
}
</style>
