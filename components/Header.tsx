import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'
import Image from 'next/image'
// css불러오기 출처:https://engineerinsight.tistory.com/337#google_vignette
import searchLogo from '../public/search.png'

// 로그인버튼 오른쪽으로 이동 방법 해결 출처: https://www.daleseo.com/css-align-right/

export default function Header() {
   return (
      <div className={styles.main}>
      <div className={styles.block}>
         <div className='inline-block'>
            <div className='flex'>
         <span className={styles.logo}><Link href={'/'}>끝판왕 사전</Link></span>

         <div className={styles.search}>
            <form action="">
               <input type="text" placeholder='검색어 입력' className={styles.search1}/>
               <button type='submit'>
                  <Image src={searchLogo} alt='search-logo' width={20} height={20} className={styles.img_logo}/>
                  {/* 제출 */}
               </button>
               
            </form>
            </div>
         </div>
      </div>
      <div className='float-right inline-block'>
         <div className={styles.login}>
            로그인
         </div>
      </div>
      </div >
      
      </div>
   )
}
