import Header from '@/components/Header';
import styles from './Home.module.css'
import Link from 'next/link';
import Image from 'next/image';
import document from '../document.png'
import { Metadata } from 'next';
import { getAllDics } from '@/action/actions';
import { Suspense } from 'react';
import UpdateList from '@/components/UpdateList';

export const metadata: Metadata = {
  title: 'WebDev Dics | MongoDB CRUD Example',
  description: 'A simple CRUD application susing Next.js and MongoDB'
}

export default async function Home() {
  const {dics} = await getAllDics()
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <Header/>
      </div>
      
      <div className='flex mt-28'>
        <div className={styles.top_list}>
        <div className={styles.list1}>
          <div className={styles.smallTitle}>
            
            <span>최신 업데이트 글</span>
            <span className='p-4'>조회수 순위</span>
          </div>
          <div className='m-5'>
            <Suspense fallback={<div>로딩중</div>}>
              <UpdateList dics={dics} />
            </Suspense>
            
          </div>
        </div>
        </div>
        <div className={styles.kategorie}>
          <div className='font-bold text-2xl'>카테고리</div>
          <div className={styles.kategorieList}>
            <ul>
              <li>음식</li>
              <li>스포츠</li>
              <li>생물</li>
              <li>역사</li>
              <li>다양한 물건</li>
            </ul>
          </div>

          <div className={styles.border1}>
            <div className={styles.addWriting}>
              <Link href='./addDic'>
              <Image src={document} alt='document' width={30} className='float-left'/> 
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
