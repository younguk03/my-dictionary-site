'use client'
import React, { useState } from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'
import Image from 'next/image'
// css불러오기 출처:https://engineerinsight.tistory.com/337#google_vignette
import searchLogo from '../public/search.png'
import { useRouter } from 'next/navigation'
import {signOut, useSession } from 'next-auth/react'


// 로그인버튼 오른쪽으로 이동 방법 해결 출처: https://www.daleseo.com/css-align-right/


export default function Header() {
   const { status, data: session } = useSession()
   const router = useRouter();
   const [inputValue, setInputValue] = useState('');

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      router.push(`/searchPage?search=${encodeURIComponent(inputValue)}`);
   }

   return (
      <div>
         <div className={styles.main}>
            <div className={styles.block}>
               <div className='inline-block'>
                  <div className='flex'>
                     <span className={styles.logo}><Link href={'/'}>끝판왕 사전</Link></span>
                     <div className={styles.search}>
                        <form action="./searchPage" onSubmit={handleSubmit}>
                           <input type="search" placeholder='검색어 입력'
                              name='search'
                              className={styles.search1}
                              onChange={(e) => setInputValue(e.target.value)}
                              autoComplete='off' />
                           <button type='submit'>
                              <Image src={searchLogo} alt='search-logo' width={20} height={20} className={styles.img_logo} />
                              {/* 제출 */}
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
               {/* 클라이언트 컴퍼넌트에서 작동시킬려면 NEXT_PUBLIC_이 앞에 붙여져야한다. */}
               {status === 'authenticated' ? (
                  <>
                     <div className={styles.account}>
                        {/* 관리자 페이지 이동 */}
                        {session.user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && (
                           <span className='text-white font-bold mt-3'><Link href={'./admin'}>관리자</Link></span>
                        )}
                        <Image className="rounded-full"
                           src={session?.user?.image ?? '/default-avatar.png'}
                           height={45}
                           width={45}
                           alt='user' />
                        <span className='text-white text-sm mt-3'>{session?.user?.name}</span>
                        <button className={styles.login} onClick={() => signOut()}>
                           Logout
                        </button>
                     </div>
                  </>

               )
                  :(
                     <>
                        <Link href={'/login'}>
                           <div className='float-right inline-block'>
                              <div className='text-white border border-white rounded-md px-2 py-1 m-4'>
                                 로그인
                              </div>
                           </div>
                        </Link>
                     </>
                  )}
            </div >
         </div >

      </div >
   )
}
