'use client'
import Link from 'next/link';
import styles from './page.module.css'
import React, { Suspense, useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation';
import AdminSearchForm from '@/components/AdminSearchForm';

function AdminSearch() {
   const searchParams = useSearchParams();
   const query = searchParams.get('search') || '';
   const [dicData, setDicData] = useState<[]>([]);

   useEffect(() => {
      // API 라우트를 통해 데이터 가져오기
      const fetchData = async () => {
         const response = await fetch(`/api/admin-search?title=${decodeURIComponent(query)}`);
         const data = await response.json();
         setDicData(data);
      };

      fetchData();
   }, [query]);

   return (
      <div>
         <div className='m-10'>
            <div>
               {dicData.map((item: any, index: number) => (
                     <div key={index} className='m-5 mr-10 ml-10'>
                        <Link href={`/dicPage/${item._id}`}>
                           <div className={styles.title}>{item.title}</div>
                        <div className={styles.description}>{item.description}</div>
                     </Link>
                  </div>
               ))}
            </div>         
         </div>
      </div>
      
   );
}

export default function page() {
   return (
      <div>
         <div className={styles.main_text}>
            <Link href={'/admin'}>
               관리자 모드
            </Link>
            
         </div>
         <div className={styles.search}>
            <AdminSearchForm/>
         </div>
         <div>
            <Suspense fallback={<div>Loading...</div>}>
            <AdminSearch/>
            </Suspense>
            
         </div>
      </div>
   )
}

