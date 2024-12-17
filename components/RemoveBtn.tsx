import { deleteDic } from '@/action/actions'
import React from 'react'

export default function RemoveBtn({id}: {id:string}) {
   async function handleRemove() {
      const config = confirm('정말로 삭제하시겠습니까?')
      if (config){
         try {
            await deleteDic(id)
         } catch (error) {
            console.log(error)
         }
      }
   }
   return (
      <div className='text-red-500' onClick={handleRemove}>삭제</div>
   )
}
