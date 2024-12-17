'use client'
import React, { useEffect, useState } from 'react'
import style from './adminDefaultList.module.css'
import { Dic } from '@/types/dic';
import Link from 'next/link';
import RemoveBtn from './RemoveBtn';

export default function AdminDefaultList() {
   const [dicData, setDicData] = useState<Dic[]>([]);
   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch('/api/admin');
         const data = await response.json();
         setDicData(data);
      };
      fetchData();
   }, []);
   return (
      <>
         {dicData.map((dic) => (
            <div key={dic._id} className={style.form}>

               <div
                  className='mb-6'>
                  <Link href={`./dicPage/${dic._id}`}>
                     <div>
                        <h2 className='font-bold pr-4'>{dic.title}</h2>
                        <div className={style.description}>{dic.description}</div>
                        <div className={style.kategorie}>-카테고리: {dic.kategorie}</div>
                     </div>
                  </Link>
                  <button>
                     <RemoveBtn id={dic._id} />
                  </button>
                  <Link href={`./editDic/${dic._id}`}>수정</Link>
               </div>


            </div>
         ))}
      </>)
}
