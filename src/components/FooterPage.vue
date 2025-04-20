<script setup lang="ts">
import SimpleForm from '@/components/forms/SimpleForm.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconPeoples from '@/components/icons/IconPeoples.vue'
import IconEspañaBrand from '@/components/icons/IconEspañaBrand.vue'

</script>
<template>
  <footer>
    <!--Footer Arriba-->
    <div class="footer-container">
      <div class="grid lg:grid-cols-4 grid-cols-1 items-center w-full gap-6">
        <div class="mx-auto">
          <p class="text-grey-color">¿Cómo podemos ayudarte?</p>
          <h4 class="text-white text-2xl">Ponte en contacto con
            nosotros en cualquier
            momento</h4>
        </div>
        <div class="flex flex-col gap-2 lg:mx-auto mx-0">
          <p class="text-[#B2B2B2] lg:text-white lg:text-md text-sm">WhatsApp</p>
          <p class="lg:text-[#B2B2B2] text-white text-xl">+(34) 624 60 67 70</p>
          <p class="text-[#B2B2B2] lg:text-white lg:text-md text-sm">Envíanos un mensaje</p>
          <p class="lg:text-[#B2B2B2] text-white text-xl">contacto@tsotienda.com</p>
        </div>
        <div class="lg:mx-auto mx-0">
          <label class="text-white">Suscríbase a nuestro boletín</label>
          <SimpleForm class="bg-white border border-red-500" placeholder="Correo" action="Suscribirse" color="bg-red-500" type="email"/>
        </div>
        <div class="lg:mx-auto mx-0">
          <p class="text-grey-color">Siguenos</p>
          <ul class="flex gap-3">
            <li class="text-white"><IconFacebook/></li>
            <li class="text-white"><IconPeoples/></li>
            <li class="text-white"><IconInstagram/></li>
          </ul>
        </div>
      </div>
      <!--Divider-->
      <div class="border border-[#1A232F]"></div>
      <!--Footer Abajo-->
      <div class="grid grid-cols-1 lg:grid-cols-3 items-start gap-6">
        <div class="flex flex-col gap-4">
          <p class="font-bold text-white">Enlaces de interés</p>
          <ul class="flex flex-col gap-2">
            <li class="text-grey-color">Inicio</li>
            <li class="text-grey-color">Términos de los Servicios</li>
            <li class="text-grey-color">Conviértete en vendedor</li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <p class="font-bold text-white">Legal</p>
          <ul class="flex flex-col gap-2">
            <li class="text-grey-color">Política de envíos</li>
            <li class="text-grey-color">Política de privacidad</li>
            <li class="text-grey-color">Política de garantía y devoluciones</li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <p class="font-bold text-white">Pago Seguro</p>
          <div class="flex gap-1">
            <img class="image-card object-cover" src="/master-card.webp" alt="master-card">
            <img class="image-card object-cover" src="/visa-card.webp" alt="visa-card">
            <img class="image-card" src="/american-card.webp" alt="american-card">
            <img class="image-card" src="/discover-card.webp" alt="discover-card">
            <img class="image-card" src="/tropipay-card.webp" alt="tropipay-card">
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p class="text-grey-color">Copyright © TSO 2023 - Madrid</p>
      <p class="text-white">Español</p>
      <IconEspañaBrand/>
    </div>
  </footer>
</template>

