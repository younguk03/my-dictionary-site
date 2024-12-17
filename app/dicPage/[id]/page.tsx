import { getDic } from '@/action/actions'
import React from 'react'
import style from './page.module.css'
import Header from '@/components/Header';
//Next.js 15부터 params가 비동기적으로 처리되어 Promise를 반환하도록 변경되었다.
export default async function page({ params }: { params: Promise<{ id: string }> }) {
   const { id } = await params;
   const { dic } = await getDic(id);
   return (
      <div className={style.main}>
         <div>
            <Header />
         </div>
         <div className='ml-10 mr-10'>
            <div className={style.title}>{dic.title}</div>
            <div className={style.kategorie}>
               카테고리:{dic.kategorie}
               <span className={style.update}>수정</span>
            </div>
            <pre className={style.description}>
               {dic.description}
            </pre>
         </div>
      </div>
   )
}
