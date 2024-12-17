'use client'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import style from './foodList.module.css';
import { Dic } from "@/types/dic";

export default function SportsList() {
   const searchParams = useSearchParams();
   const kategorie = searchParams.get('kategorie');
   const [dicData, setDicData] = useState<Dic[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(`/api/sports?kategorie=${kategorie}`);
            const data = await response.json();
            setDicData(data);
         } finally {
            setIsLoading(false);
         }
      };
      fetchData();
   }, [kategorie]);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <div className='m-10 ml-14'>
         <div className={style.kategorieName}>스포츠</div>
         <div>
            {dicData.map((item) => (
               <div key={item._id} className='m-5 mr-10 ml-10'>
                  <Link href={`/dicPage/${item._id}`}>
                     <div className={style.title}>{item.title}</div>
                     <div className={style.description}>{item.description}</div>
                     <div className={style.kategorie}>카테고리: {item.kategorie}</div>
                  </Link>
               </div>
            ))}
         </div>
      </div>
   )
}