import styles from "./adminSearchForm.module.css"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function AdminSearchForm() {
   const router = useRouter();
   const [inputValue, setInputValue] = useState('');

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/admin-search?search=${encodeURIComponent(inputValue)}`);
   }
   return (
      <div>
         <form action="./admin-search" onSubmit={handleSubmit}>
            <input type="search" placeholder='검색어 입력'
               name='search'
               className={styles.search1}
               onChange={(e) => setInputValue(e.target.value)}
               autoComplete='off' />
               <button type='submit' className={styles.button}>검색</button>
         </form>
      </div>
   )
}
