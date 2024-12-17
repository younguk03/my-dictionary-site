'use client'

import Header from "@/components/Header"
import SportsList from "@/components/SportsList"
import style from './page.module.css'
import { Suspense } from "react"

export default function Page() {
   return (
      <div className={style.main}>
         <div>
            <Header />
         </div>
         <div>
            <Suspense fallback={<div>Loading...</div>}>
               <SportsList />
            </Suspense>
         </div>
      </div>
   )
}
