import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import design1 from '@/post_design.png'
import design2 from '@/kategoriePage_design.png'
import design3 from "@/searchResult_design.png"
import Link from 'next/link'

export default function page() {
   return (
      <div>
         <div><Header /></div>
         <div className='m-11'>
            <h3 className='font-bold text-3xl mb-3'>프로젝트 소개</h3>
            <div className='border-t border-black p-5'>
               <div>
                  <h4 className='text-xl font-bold mb-2'>1. 주제</h4>
                  <p>백과사전사이트 만드는 프로젝트</p>
               </div>

               
               <div className='mt-7'>
               <h4 className='text-xl font-bold mb-2'>2. 기능&사용기술</h4>
               <p><span className='font-bold'>기능: </span>로그인, 로그아웃, 검색, 카테고리 분류, 글 작성 및 수정</p>
               <p><span className='font-bold'>사용기술: </span>Next.js, Auth.js, Vercel, Github, MongoDB</p>
               </div>

               <div className='mt-7'>
                  <h4 className='text-xl font-bold mb-2'>3. 디자인</h4>
                  <p>글 디자인</p>
                  <Image src={design1} alt='design1' className='border border-black' height={400}/>
                  <p>카테고리 페이지 디자인</p>
                  <Image src={design2} alt='design2' className='border border-black' height={400}/>
                  <p>검색 결과 디자인</p>
                  <Image src={design3} alt='design3' className='border border-black' height={400}/>
               </div>

               <div className='mt-7'>
               <h4 className='text-xl font-bold mb-2'>4. 팀원 주소</h4>
               <div className='ml-8' >
                  <div className=''>
                        <h2 className='font-bold' > 김영욱(92212788) </h2>
                        < p className='pl-4' >● 깃허브: <Link href={`https://github.com/younguk03/nextjstest1.git`} className='hover:underline hover:text-blue-600'>https://github.com/younguk03/nextjstest1.git</Link></p>
                        < p className='pl-4' >● vercel: <Link href={`https://nextjs-test1-ashy.vercel.app/`} className='hover:underline hover:text-blue-600'>https://nextjs-test1-ashy.vercel.app/</Link></p>
                     </div>
                     < div className='' >
                        <h2 className='font-bold' > 박이슬(92450524) </h2>
                        < p className='pl-4' >● 깃허브: <Link href={'https://github.com/kindwitch/introduce.git'} className='hover:underline hover:text-blue-600'>https://github.com/kindwitch/introduce.git</Link> </p>
                        < p className='pl-4' >● vercel:<Link href={'https://introduce-6uug.vercel.app/'} className='hover:underline hover:text-blue-600'>https://introduce-6uug.vercel.app/</Link></p>
                     </div>
                     < div className='p-2' >
                        <h2 className='font-bold' > 김용섭 </h2>
                        < p className='pl-4' >● 깃허브: <Link href={`https://github.com/yongseop712/kim-yong-seop.git`} className='hover:underline hover:text-blue-600'>https://github.com/yongseop712/kim-yong-seop.git</Link></p>
                        < p className='pl-4' >● vercel: <Link href={`https://kim-yong-seop.vercel.app/`} className='hover:underline hover:text-blue-600'>https://kim-yong-seop.vercel.app/</Link></p>
                  </div>
               </div>
               </div>
            </div>
         </div>
      </div>
   )
}
