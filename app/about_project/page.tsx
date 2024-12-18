import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import one from './one.png'
import two from './two.png'
import three from './three.png'
import four from './four.png'
import five from './five.png'

export default function page() {
   return (
      <div>
         <div><Header /></div>
         <div className='m-11'>
            <h3 className='font-bold text-3xl mb-3'>프로젝트 소개</h3>
            <div className='border-t border-black p-5'>
               <div>
                  <h4 className='text-2xl font-bold mb-2'>1. 주제</h4>
                  <p>백과사전사이트 만드는 프로젝트</p>
               </div>


               <div className='mt-9'>
                  <h4 className='text-2xl font-bold mb-2'>2. 기능&사용기술</h4>
                  <p><span className='font-bold'>기능: </span>로그인(일반 Client와 Admin 구별), 로그아웃, 검색, 카테고리 분류, AI를 이용한 자동 글 작성, 글 수정,삭제, 수정문의</p>
                  <p><span className='font-bold'>사용기술: </span>Next.js, Auth.js, Vercel, Github, MongoDB, Google Gemini API</p>
               </div>

               <div className='mt-9'>
                  <h4 className='text-2xl font-bold mb-2'>3. Admin, User 구별 방법, 쓸 수 있는 기능들</h4>
                  <p>
                     먼저 Admin과 일반 user를 구별하기 위해서는 auth에서 role이라는 것을 추가했다.
                     <Image src={one} height={60} alt='one' />
                     role를 정하는 기준은 위의 이미지에서 보는 바와 같이 이메일을 기준으로 한다. 보안에 신경을 써서 곧바로 여기에 이메일을 넣는 것이 아니라 .env.local에 저장해두었다. 그래서 process.env.NEXT_PUBLIC_ADMIN_EMAIL과 동일하면 Admin, 다르면 User로 구별한다.
                  </p>
                  <p>참고로 이메일은 이렇다.</p>
                  <Image src={two} height={60} alt='two' />
                  <p>몽고디비에도 똑같이 적용해주면 이렇게 DB에 저장되는 모습을 볼 수 있다.</p>
                  <Image src={three} height={180} alt='three' className='border' />
                  <p>
                     일반 유저들은 사용할 수 있는 기능이 제한되어 있다. 사용할 수 있는 기능은 글 추가, 수정문의 정도다. 반면 관리자는 일반 유저들이 사용할 수 있는 기능은 당연히 사용가능하며 또한 수정, 삭제 기능도 사용가능하다.
                  </p>
               </div>

               <div className='mt-9'>
                  <h4 className='text-2xl font-bold mb-2'>4. 자동 글추가</h4>
                  <p>
                     이 프로젝트에서는 글 추가를 일반적으로 하는 것이 아니라 제목이랑 카테고리만 입력하면 자동적으로 추가하는 기능을 만들었다.
                  </p>
                  <p>
                     자동추가하는 기능을 만들려면 AI기능을 집어넣어야 한다. 그래서 구글에서 제공하는 Gemini API를 사용했다. 성능이 좋을 뿐만 아니라 OpenAI보다 비용이 저렴하다.(물론 무료버전을 사용했다.)
                  </p>
                  <p className='mt-2'>
                     <span className='font-bold'>Gemini API를 사용하기 위한 과정</span> <br />
                     1. 구글 클라우드 포털에 접속해서 프로젝트 생성 <br />
                     2. API 키 생성 <br />
                     3. env.local에 저장 <br />
                     4. api/gemini 라우트 생성해서 사용 <br />
                     5. 폼에서 입력받은 제목과 카테고리를 바탕으로 자동 글 추가 <br />
                  </p>
                  <Image src={four} height={400} alt='four' className='border' />
                  <p className='mt-1 mb-1 text-center text-sm text-gray-500'>api/gemini/route.ts</p>
                  <Image src={five} height={400} alt='five' className='border' />
                  <p className=' mb-1 text-center text-sm text-gray-500'>components/GemniForm.tsx</p>
               </div>

               <div className='mt-9'>
                  <h1 className='text-2xl font-bold mb-2'>5. 수정문의</h1>
                  <p>
                     수정문의 형태는 수정문의를 하고 싶을 경우 사용자가 관리자(Admin)의 메일에 보내는 기능이다. 
                  </p>
                  <p>emailjs를 이용해서 수정문의 기능을 만들었다.</p>
                  <p>이것은 프론트엔드에서 바로 구현할 수 있는 기능이기 때문에 api에 따로 추가하지 않고 바로 page.tsx에 구현했다.</p>
                  <p>
                     방법은 간단하다. 먼저 emailjs모듈을 설치한 뒤 emailjs.sendFrom에다가 emailjs에서 발급받은 Service ID, Template ID, Public Key, form.current를 넣어주면 된다.
                  </p>
                  <p>
                     마지막으로 label에는 htmlFor와 input이나 textarea에는 name를 틀리지 않게 잘 써주면 된다.
                  </p>

               </div>

               <div className='mt-7'>
                  <h4 className='text-2xl font-bold mb-2'>6. 팀원 프로젝트 주소</h4>
                  <div className='ml-8'>
                     <div className=''>
                        <h2 className='font-bold' > 김영욱(92212788) </h2>
                        < p className='pl-4' >● 깃허브: <Link href={`https://github.com/younguk03/nextjstest1.git`} className='hover:underline hover:text-blue-600'>https://github.com/younguk03/nextjstest1.git</Link></p>
                        < p className='pl-4' >● vercel: <Link href={`https://nextjs-test1-ashy.vercel.app/`} className='hover:underline hover:text-blue-600'>https://nextjs-test1-ashy.vercel.app/</Link></p>
                     </div>
                     < div className='' >
                        <h2 className='font-bold' > 박이슬(92450524) </h2>
                        < p className='pl-4' >● 깃허브: <Link href={'https://github.com/kindwitch/project.git'} className='hover:underline hover:text-blue-600'>https://github.com/kindwitch/project.git</Link> </p>
                        < p className='pl-4' >● vercel:<Link href={'https://project-seven-tan-59.vercel.app/'} className='hover:underline hover:text-blue-600'>https://project-seven-tan-59.vercel.app/</Link></p>
                     </div>
                     < div className='pt-2' >
                        <h2 className='font-bold' >김용섭 </h2>
                        < p className='pl-4' >● 깃허브: <Link href={`https://github.com/yongseop712/kim-yong-seop.git`} className='hover:underline hover:text-blue-600'>https://github.com/yongseop712/kim-yong-seop.git</Link></p>
                        < p className='pl-4' >● vercel: <Link href={`https://kim-yong-seop.vercel.app/`} className='hover:underline hover:text-blue-600'>https://kim-yong-seop.vercel.app/</Link></p>
                     </div>
                  </div>
               </div>
               <div className='mt-9'>
                  <h4 className='text-2xl font-bold mb-2'>7. 프로젝트 소개 동영상</h4>
                  <p>링크: <Link href={'https://www.youtube.com/watch?v=cUuSuMXFYJc'} className='hover:underline hover:text-blue-600'>https://www.youtube.com/watch?v=cUuSuMXFYJc</Link></p>
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/cUuSuMXFYJc?si=R4yXP5SdZWFV5rr3"></iframe>
               </div>
            </div>
         </div>
      </div>
   )
}
