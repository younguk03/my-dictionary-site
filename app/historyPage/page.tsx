'use client'

import Header from "@/components/Header"
import style from './page.module.css'
import HistoryList from "@/components/HistoryList"
import { Suspense } from "react"

export default function Page() {
   return (
      <div className={style.main}>
         <div>
            <Header />
         </div>
         <div>
            <Suspense fallback={<div>Loading...</div>}>
               <HistoryList />
            </Suspense>
         </div>
      </div>
   )
}
