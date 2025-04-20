import type { Category } from '@/types/types.ts'
import Preelaborados from '../../public/category/preelaborados.png'
import Carne from '../../public/category/carne.png'
import Agro from '../../public/category/agro.png'
import Aseo from '../../public/category/aseo.png'
import Bebidas from '../../public/category/bebidas.png'
import BebidaSinH from '../../public/category/bebidas-sin-alcohol.png'
import Cakes from '../../public/category/cakes.png'
import Combo from '../../public/category/combos.png'
import Despensa from '../../public/category/despensa.png'
import Huevos from '../../public/category/huevos.png'
import Infantiles from '../../public/category/infantiles.png'
import Limpieza from '../../public/category/limpieza.png'
import Congelados from '../../public/category/otros-congelados.png'
import Mascotas from '../../public/category/mascotas.png'
import Pescados from '../../public/category/pescados.png'
import Transporte from '../../public/category/transporte.png'
import Regalo from '../../public/category/regalo.png'
import Moda from '../../public/category/moda.png'

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
  }, {
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
