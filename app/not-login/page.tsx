import React from 'react'
import style from './page.module.css'

export default function page() {
   return (
      <body className='bg-gray-100'>
         <div className={style.main}>
            <p
               className='text-center 
               pt-5 text-xl'>로그인 후
               이용해주세요</p>
            <div className={style.
               buttonContainer}>
               <form action='./'>
                  <button
                     type='submit'
                     className={style.
                        button}>확인</
                  button>
               </form>
            </div>
         </div>
      </body>
   )
}


