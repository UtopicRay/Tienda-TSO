import type { InfoEnvio } from '@/types/types.ts'
import IconBag from '@/components/icons/IconBag.vue'
import IconLocation from '@/components/icons/IconLocation.vue'
import IconCamion from '@/components/icons/IconCamion.vue'

export const ConstInfoEnvio:InfoEnvio[] = [{
  svg: IconCamion,
  title:"Entrega rápida",
  description:"Contamos con una amplia y completa variedad de productos para satisfacer todos sus gustos e intereses."
},{
  svg: IconBag,
  title:"Variedad de productos",
  description:"Contamos con una amplia y completa variedad de productos para satisfacer todos sus gustos e intereses."
},{
  svg: IconLocation,
  title: "Envíos a toda Cuba",
  description: "Contamos con servicios de entrega a lo largo y ancho de la isla. Nuestro interés es que tu gente reciba las compras."
}]

export const ListIcons = [IconBag,IconLocation]
console.log(IconBag)
