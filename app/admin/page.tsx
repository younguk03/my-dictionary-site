'use client'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React, { Suspense} from 'react'
import style from './page.module.css'
import AdminDefaultList from '@/components/AdminDefaultList'
import AdminSearchForm from '@/components/AdminSearchForm'

export default function Page() {
   const {data:session} = useSession()
   if(session?.user?.email !== process.env.NEXT_PUBLIC_ADMIN_EMAIL){
      redirect('/not-admin')
   }
   return (
      <div className={style.main}>
         <h1 className={style.h1}>관리자 계정</h1>
         <div className={style.search}>
            <AdminSearchForm/>
         </div>
         <Suspense fallback={<div>로딩중</div>}>
            <AdminDefaultList/>   
         </Suspense>
      </div>
   )
}
