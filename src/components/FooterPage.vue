<script>
import { defineComponent } from 'vue'
import SimpleForm from '@/components/forms/SimpleForm.vue'
import IconFacebook from '@/components/icons/IconFacebook.vue'
import IconInstagram from '@/components/icons/IconInstagram.vue'
import IconPeoples from '@/components/icons/IconPeoples.vue'
import IconEspañaBrand from '@/components/icons/IconEspañaBrand.vue'

export default defineComponent({
  components: { IconEspañaBrand, IconPeoples, IconInstagram, IconFacebook, SimpleForm }
})
</script>
<template>
  <footer>
    <div class="footer-container">
      <div class="grid grid-cols-4 items-center   w-full">
        <div class="mx-auto">
          <p class="text-grey-color">¿Cómo podemos ayudarte?</p>
          <h4 class="text-white text-2xl">Ponte en contacto con
            nosotros en cualquier
            momento</h4>
        </div>
        <div class="flex flex-col gap-2 mx-auto">
          <p class="text-white">WhatsApp</p>
          <p class="text-grey-color">+(34) 624 60 67 70</p>
          <p class="text-white">Envíanos un mensaje</p>
          <p class="text-grey-color">contacto@tsotienda.com</p>
        </div>
        <div class="mx-auto">
          <label class="text-white">Suscríbase a nuestro boletín</label>
          <SimpleForm class="bg-white border border-red-500" placeholder="Correo" action="Suscribirse" color="bg-red-500" type="email"/>
        </div>
        <div class="mx-auto">
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
      <div class="flex justify-between items-center">
        <div class="flex flex-col gap-4">
          <p class="font-bold">Enlaces de interés</p>
          <ul class="flex flex-col gap-2">
            <li class="text-grey-color">Inicio</li>
            <li class="text-grey-color">Términos de los Servicios</li>
            <li class="text-grey-color">Conviértete en vendedor</li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <p class="font-bold">Legal</p>
          <ul class="flex flex-col gap-2">
            <li class="text-grey-color">Política de envíos</li>
            <li class="text-grey-color">Política de privacidad</li>
            <li class="text-grey-color">Política de garantía y devoluciones</li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <p class="font-bold">Pago Seguro</p>
          <div class="flex justify-between gap-1">
            <img class="image-card object-cover" src="/master-card.png" alt="master-card">
            <img class="image-card object-cover" src="/visa-card.png" alt="visa-card">
            <img class="image-card" src="/american-card.png" alt="american-card">
            <img class="image-card" src="/discover-card.png" alt="discover-card">
            <img class="image-card" src="/tropipay-card.png" alt="tropipay-card">
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p class="text-grey-color">Copyright © TSO 2023 - Madrid</p>
      <p>Español</p>
      <IconEspañaBrand/>
    </div>
  </footer>
</template>

