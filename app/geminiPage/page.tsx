'use client'
import { useState } from 'react';
import style from './page.module.css'
import { useRouter } from 'next/navigation';
import { createDic } from '@/action/actions';

export default function Home() {
   const [prompt, setPrompt] = useState('');
   const [response, setResponse] = useState('');
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [title, setTitle] = useState('')
   const [description, setDescription] = useState('')
   const [kategorie, setKategorie] = useState('')
   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         setIsLoading(true)
         const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt }),
         });

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }

         const data = await response.json();//텍스트로 받음
         if (!data || !data.text) {
            throw new Error('Empty response from server');
         }

         // const data = JSON.parse(text);
         setResponse(data.text);
         setError('');


      } catch (error) {
         console.error('Error:', error);
         setResponse('');
      }
      finally {
         setIsLoading(false)
      }
      
      }
      const handleSubmit2 = async (e: React.FormEvent) => {
         e.preventDefault();
         try {
            //글 추가
         await createDic(title, description, kategorie)
         router.push('/')
         } catch (error) {
            console.error('Error:', error);
         }
   };

   return (
      <div>
         <div className='m-9 mt-14'>
            <h1 className='text-center text-2xl font-bold mb-8'>사전 추가하기</h1>
            <div className={style.block}>
               <form onSubmit={handleSubmit}>
                  <p className='text-center'>
                     <input type='text' id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} className={style.input1}
                        placeholder='"원하는 단어"+ 자세히' />
                     <button type="submit" className={style.submit1}>제출</button>
                  </p>

                  {isLoading ? <div className='text-center'>로딩중</div> : ''}

               </form>
               {error && <p style={{ color: 'red' }}>Error: {error}</p>}

               {response && <pre className={style.result}>{response}</pre>}
            </div>



            {/* 글 추가 */}
            <div className={style.border}>
               <form className="flex flex-col gap-4" onSubmit={handleSubmit2}>
                  <div className='border-b pb-2'><span className='mr-3'>제목: </span>
                     <input
                        type="text"
                        className={style.input2}
                        placeholder="추가할 단어"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                     /></div>
                  <textarea
                     className={style.textarea}
                     placeholder="위의 글을 복사 붙여넣기 해주세요"
                     onChange={(e) => setDescription(e.target.value)}
                     value={description} />
                  <div>
                     <label>카테고리:</label>
                     <select name="languages" id="kategorie" className={style.kategorie}
                        onChange={(e) => setKategorie(e.target.value)}
                     >
                        <option value="">카테고리 선택</option>
                        <option value="음식">음식</option>
                        <option value="역사">역사</option>
                        <option value="스포츠">스포츠</option>
                        <option value="생물">생물</option>
                        <option value="물품">물품</option>
                     </select>
                  </div>

                  <button
                     className={style.submit2}
                     type="submit"
                  >
                     사전 추가
                  </button>
               </form>
            </div>
         </div>
      </div>
   );
}
