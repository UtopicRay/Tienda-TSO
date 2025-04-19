<script setup lang="ts">
import IconMenu from '@/components/icons/IconMenu.vue'
import IconShop from '@/components/icons/IconShop.vue'
import IconProduct from '@/components/icons/IconProduct.vue'
import IconShopCar from '@/components/icons/IconShopCar.vue'
import IconProfile from '@/components/icons/IconProfile.vue'

const NavFooterItem=[{
  icon: IconMenu,
  name:"Menu",
},{
  icon: IconShop,
  name:"Tienda",
},{
  icon: IconProduct,
  name:"Productos",
},{
  icon: IconShopCar,
  name:"Carrito",
},{
  icon: IconProfile,
  name:"Perfil",
},]
</script>

<template>
  <div
    class="fixed block lg:hidden bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
  >
    <div class="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
      <button v-for="(item,i) in NavFooterItem" :key="i"
        type="button"
        class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
      >
        <component :is="item.icon"/>
        <span
          class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
          >{{item.name}}</span
        >
      </button>
    </div>
  </div>
</template>

<style scoped></style>
