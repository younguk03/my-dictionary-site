'use client'

import Header from "@/components/Header"
import CreatureList from "@/components/CreatureList"
import style from './page.module.css'

export default function Page() {
   return (
      <div className={style.main}>
         <div>
            <Header />
         </div>
         <div>
            <CreatureList />
         </div>
      </div>
   )
}
