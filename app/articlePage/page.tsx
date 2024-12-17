'use client'

import Header from "@/components/Header"
import style from './page.module.css'
import ArticleList from "@/components/ArticleList"
import { Suspense } from "react"

export default function Page() {
   return (
      <div className={style.main}>
         <div>
            <Header />
         </div>
         <div>
            <Suspense fallback={<div>Loading...</div>}>
               <ArticleList />
            </Suspense>
         </div>
      </div>
   )
}