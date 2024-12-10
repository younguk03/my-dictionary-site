'use client'
import { Dic } from '@/types/dic'
import React, { useEffect, useState } from 'react'
import style from './update.module.css'
import Link from 'next/link'


export default function UpdateList() {
   const [dicData, setDicData] = useState<Dic[]>([]);
   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch('/api/updateList');
         const data = await response.json();
         setDicData(data);
      };
      fetchData();
   }, []);
   return (
      <>
         {dicData.map((dic) => (
            <div key={dic._id} >
               <Link href={`./dicPage/${dic._id}`}>
                  <div
                     className='mb-6'>
                     <div>
                        <h2 className='font-bold pr-4'>{dic.title}</h2>
                        <div className={style.description}>{dic.description}</div>
                        <div className={style.kategorie}>-카테고리: {dic.kategorie}</div>
                     </div>
                  </div>
               </Link>
            </div>
         ))}
      </>)
}
