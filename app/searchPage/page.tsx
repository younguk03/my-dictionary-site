'use client'
import Header from '@/components/Header'
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import style from './page.module.css';
import Link from 'next/link';

function SearchPage() {
   const searchParams = useSearchParams();
   const query = searchParams.get('search') || '';
   const [dicData, setDicData] = useState<[]>([]);

   useEffect(() => {
      // API 라우트를 통해 데이터 가져오기
      const fetchData = async () => {
         const response = await fetch(`/api/dictionary?title=${decodeURIComponent(query)}`);
         const data = await response.json();
         setDicData(data);
      };

      fetchData();
   }, [query]);

   return (
      <div>
         <div className='m-10'>
            <div className={style.searchTitle}>
               <span className='text-1xl'>검색결과: </span>
               <span className='text-3xl font-bold'>{decodeURIComponent(query)}</span>
            </div>
            <div>
               {dicData.map((item: any, index: number) => (
                  
                     <div key={index} className='m-5 mr-10 ml-10'>
                        <Link href={`/dicPage/${item._id}`}>
                           <div className={style.title}>{item.title}</div>
                        <div className={style.description}>{item.description}</div>
                     </Link>
                  </div>
               ))}
            </div>         
         </div>
      </div>
      
   );
}

export default function search() {
   return (
      <div>
         <div>
            <Header/>
         </div>
         <Suspense fallback={<div>Loading...</div>}>
            <SearchPage/>
         </Suspense>
      </div>
   )
}
