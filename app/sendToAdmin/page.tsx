//emailjs를 통해 관리자에게 이메일 보내기
//출처: https://velog.io/@bcl0206/%EA%B0%84%ED%8E%B8-%EB%A9%94%EC%9D%BC-%EC%A0%84%EC%86%A1-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0-EmailJS
'use client'
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react'
import { toast } from 'react-hot-toast';
import styles from './page.module.css';

export default function Page() {
   const form = useRef<HTMLFormElement>(null);
   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!form.current) return;

      emailjs.sendForm(
         'service_i1pfh3g',
         'template_sunk89h',
         form.current,
         'bG-Ot9FgxMzBONXSL'
      ).then(
         (result) => {
            console.log(result.text);
            // e.target.reset();
            toast.success("성공적으로 전송되었습니다!", {
               style: {
                  maxWidth: "1000px",
                  width: "300px",
                  fontSize: "20px",
               },
            });
         }
      ).catch((error) => {
         console.error(error);
         toast.error("전송에 실패했습니다.");
      });
   }

   return (
      <div className={styles.container}><h1 className='text-2xl font-bold mt-7 text-center'>수정문의</h1>
         <div className={styles.form_container}>
            <form action={`./`} ref={form} onSubmit={handleSubmit}>
               <div className='border-b border-gray-400 mb-1'>

                  <label htmlFor="to_name">제목:</label>
                  <input type="text"
                     required
                     id='to_name'
                     name='to_name'
                     placeholder='제목'
                     className={styles.input_name} />
               </div>
               <div className='border-b border-gray-400 mb-2'>
                  <label htmlFor="email">이메일:</label>
                  <input type="email"
                     required
                     id='email'
                     name='fromemail'
                     placeholder='이메일'
                     className={styles.input_email}
                  />
               </div>

               <div>
                  <label htmlFor="message">문의내용</label> <br />
                  <textarea
                     required
                     id='message'
                     name='message'
                     placeholder='문의내용'
                     className={styles.textarea} />
               </div>
               <button type='submit' className={styles.submit_button}>전송</button>
            </form>
         </div>
      </div>
   )
}
