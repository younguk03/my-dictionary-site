'use client'
import { useState } from 'react';
import style from './gemini.module.css'
import { useRouter } from 'next/navigation';
import { createDic } from '@/action/actions';

export default function GemniForm() {
   const [prompt, setPrompt] = useState('');
   const [response, setResponse] = useState('');
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [description, setDescription] = useState('')
   const [kategorie, setKategorie] = useState('')
   const router = useRouter();

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
         setIsLoading(true)
         const apiPrompt = prompt + '자세히'
         const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: apiPrompt }),
         });

         if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }

         const data = await response.json();//텍스트로 받음
         if (!data || !data.text) {
            throw new Error('Empty response from server');
         }
         await createDic(prompt, data.text, kategorie)
         // const data = JSON.parse(text);
         setResponse(description);
         setError('');
         router.push('/')


      } catch (error) {
         console.error('Error:', error);
         setResponse('');
      }
      finally {
         setIsLoading(false)
      }
   };

   return (
      <div>
         <div className='m-9 mt-14'>
            <h1 className='text-center text-2xl font-bold mb-8'>사전 추가하기</h1>
            <div className={style.block}>
               <form onSubmit={handleSubmit}>
                  <div className='text-center'>
                     <input type='text' id="prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} className={style.input1}
                        placeholder='원하는 단어 입력' />
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
                     {response && <textarea className={style.textarea} onChange={(e) => setDescription(e.target.value)} value={response}>{response}</textarea>}
                     {isLoading ? <div className='text-center'>로딩중</div> : ''}
                     {error && <p style={{ color: 'red' }}>Error: {error}</p>}
                     <button type="submit" className={style.submit1}>제출</button>
                  </div>


               </form>
            </div>
         </div>
      </div>
   );
}
