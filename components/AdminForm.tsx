import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function AdminForm() {
   const searchParams = useSearchParams();
   const query = searchParams.get('search') || '';
   const [dicData, setDicata] = useState<[]>([]);
   useEffect(() => {
      const fetchData = async () => {
         const response = await fetch(`api/admin-search?title=${decodeURIComponent(query)}`)
         const data = await response.json();
         setDicata(data)
      };
      fetchData()
   }, [query])
   return (
      <div>
         <h1 className='text-3xl font-bold text-center mt-10'><Link href={'./admin'}>관리자</Link> 페이지</h1>
         <AdminForm />
         <div>
            <h1>검색 결과: {decodeURIComponent(query)}</h1>
            <div>
               {dicData.map((item: any, index: number) => (
                  <div key={index}>
                     <div>{item.title}</div>
                     <div>{item.description}</div>
                     <div>{item.kategorie}</div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}
