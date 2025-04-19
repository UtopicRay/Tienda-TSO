import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useFechtData } from '@/hooks/useFechtData.ts'
import { baseUrl } from '../../env.ts'

export const useProductStore = defineStore('product', () => {
  const products = ref(localStorage.getItem('products'))
  const { data, loading, error } = useFechtData(baseUrl)
  watch(data, () => {
    if (!localStorage.getItem('products')) {
      products.value = data.value?.products
      localStorage.setItem('products', JSON.stringify(products))
    }
  })

  return { products, loading, error }
})
