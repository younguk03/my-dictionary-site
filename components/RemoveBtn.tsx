import { deleteDic } from '@/action/actions'
import React from 'react'
import style from './remove.module.css'

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
      <div className={style.remove} onClick={handleRemove}>삭제</div>
   )
}
