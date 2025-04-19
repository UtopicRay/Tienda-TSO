import { onMounted, ref } from 'vue'
import type { Product, ProductAPI } from '@/types/ProductApi.ts'
import axios from 'axios'

export function useFechtData(url:string){
  const data=ref<Product|Product[]>()
  const error=ref<Error>();
  const loading=ref<boolean>();

 async function loadData(){
   loading.value=true;
   await axios.get(url).then(res=>{
      data.value = res.data
    }).catch(E=>{
      error.value = E
    }).finally(()=>{
      loading.value = false
    })
  }
 async function RefreshData(){
   await loadData()
  }
  onMounted(async ()=>{
    await loadData();
  })
  return {data, error, loading,RefreshData}
}
