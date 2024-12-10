import Header from '@/components/Header';
import styles from './Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import document from '../document.png'
import { Metadata } from 'next';
import { Suspense } from 'react';
import UpdateList from '@/components/UpdateList';

export const metadata: Metadata = {
  title: 'WebDev Dics | MongoDB CRUD Example',
  description: 'A simple CRUD application susing Next.js and MongoDB'
}

export default async function Home() {
  // const { dics } = await getAllDics()
  return (
    <div className={styles.main}>
      <div>
        <Header/>
      </div>
      {/* 메인페이지 */}
      <div className='flex mt-10'>
        <div className={styles.top_list}>
          <div className={styles.list1}>
            <div className={styles.smallTitle}>

              <span>최신 업데이트 글</span>
              <span className='p-4'>조회수 순위</span>
            </div>
            <div className='m-5'>
              <Suspense fallback={<div>로딩중</div>}>
                <UpdateList/>
              </Suspense>

            </div>
          </div>
        </div>
        <div className={styles.kategorie}>
          <div className='font-bold text-2xl'>카테고리</div>
          <div className={styles.kategorieList}>
            <ul>
              <li><Link href='/foodPage'>음식</Link></li>
              <li><Link href='/sportsPage'>스포츠</Link></li>
              <li><Link href='/creaturePage'>생물</Link></li>
              <li><Link href='/historyPage'>역사</Link></li>
              <li><Link href='/articlePage'>다양한 물건</Link></li>
            </ul>
          </div>

          <div className={styles.border1}>
            <div className={styles.addWriting}>
              <Link href='./geminiPage'>
                <Image src={document} alt='document' width={30} className='float-left' />
                <p className='mt-1 float-right'>새문서 작성</p>
              </Link>

            </div>
          </div>
          <div className='mt-5'>
            <p><span className='font-bold'>팀원:</span> 김영욱, 박이슬, 김용섭</p>
            <p><span className='font-bold'>팀명:</span> 끝내주조</p>
            <p className='mt-3 text-blue-600 hover:underline'><Link href='./about_project'>더보기</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
