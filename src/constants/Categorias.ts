import type { Category } from '@/types/types.ts'
import Preelaborados from '../../public/category/preelaborados.webp'
import Carne from '../../public/category/carne.webp'
import Agro from '../../public/category/agro.webp'
import Aseo from '../../public/category/aseo.webp'
import Bebidas from '../../public/category/bebidas.webp'
import BebidaSinH from '../../public/category/bebidas-sin-alcohol.webp'
import Cakes from '../../public/category/cakes.webp'
import Combo from '../../public/category/combos.webp'
import Despensa from '../../public/category/despensa.webp'
import Huevos from '../../public/category/huevos.webp'
import Infantiles from '../../public/category/infantiles.webp'
import Limpieza from '../../public/category/limpieza.webp'
import Congelados from '../../public/category/otros-congelados.webp'
import Mascotas from '../../public/category/mascotas.webp'
import Pescados from '../../public/category/pescados.webp'
import Transporte from '../../public/category/transporte.webp'
import Regalo from '../../public/category/regalo.webp'
import Moda from '../../public/category/moda.webp'

export const Categorias: Category[] = [
  {
    img: Preelaborados,
    name: 'ALIMENTOS PREELABORADOS',
  },
  {
    img: Aseo,
    name: 'aseo y cuidado personal',
  },
  {
    img: Bebidas,
    name: 'BEBIDAS ALCOHÓLICAS',
  },
  {
    img: BebidaSinH,
    name: 'BEBIDAS NO ALCOHÓLICAS',
  },
  {
    img: Cakes,
    name: 'CAKE, HELADOS Y DULCES',
  },
  {
    img: Combo,
    name: 'COMBOS',
  },
  {
    img: Carne,
    name: 'CÁRNICOS',
  },
  {
    img: Agro,
    name: 'DE AGRO',
  },
  {
    img: Despensa,
    name: 'DESPENSA',
  },
  {
    img: Huevos,
    name: 'HUEVOS Y LÁCTEOS',
  },
  {
    img: Infantiles,
    name: 'INFANTILES Y ESCOLARES',
  },
  {
    img: Limpieza,
    name: 'LIMPIEZA Y ÚTILES',
  },
  {
    img: Moda,
    name: 'MODA y ACCESORIOS',
  },
  {
    img: Congelados,
    name: 'OTROS CONGELADOS Y REFREGERADOS',
  },
  {
    img: Mascotas,
    name: 'PARA MASCOTAS',
  },
  {
    img: Pescados,
    name: 'PESCADOS Y MARISCOS',
  },
  {
    img: Transporte,
    name: 'Piezas y accesorios/Transporte',
  },
  {
    img: Regalo,
    name: 'REGALOS',
  },
]
