'use client'
import { updateDic } from '@/action/actions'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import style from './editDicForm.module.css'

interface EditDicFormProps {
   id: string,
   title: string,
   description: string,
   kategorie: string
}

export default function EditDicForm({ id, title, description, kategorie }: EditDicFormProps) {
   const [newTitle, setNewTitle] = useState(title)
   const [newDescription, setNewDescription] = useState(description)
   const [newKategorie, setNewKategorie] = useState(kategorie)
   const textRef = useRef<HTMLTextAreaElement>(null);

   //출처: https://velog.io/@hanminss/React-%EC%97%90%EC%84%9C-textarea-%EC%9E%90%EB%8F%99-%EB%86%92%EC%9D%B4-%EC%A1%B0%EC%A0%88%ED%95%98%EA%B8%B0
   const handleResizeHeight = useCallback(() => {
      if (textRef.current) {
         textRef.current.style.height = 'auto';
         textRef.current.style.height = textRef.current.scrollHeight + "px";
      }
   }, []);

   useEffect(() => {
      handleResizeHeight();
   }, [newDescription]); // newDescription이 변경될 때마다 높이 조절

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
         await updateDic(id, newTitle, newDescription, newKategorie)
      } catch (error) {
         console.log(error)
      }
   }


   return (
      <div className={style.main}>
         <div className={style.edit}>수정하기</div>
         <div className='m-5 mr-10 ml-10'>
            <form action="/admin" onClick={handleSubmit}>
               <div>
                  <select
                     name="languages"
                     id="kategorie"
                     className={style.kategorie}
                     onChange={(e) => setNewKategorie(e.target.value)}
                     value={newKategorie}
                  >
                     <option value="">카테고리 선택</option>
                     <option value="음식">음식</option>
                     <option value="역사">역사</option>
                     <option value="스포츠">스포츠</option>
                     <option value="생물">생물</option>
                     <option value="물품">물품</option>
                  </select>
               </div>
               <div className={style.one}>
                  <input
                     type="text"
                     value={newTitle}
                     onChange={(e) => setNewTitle(e.target.value)}
                     placeholder='제목'
                     className={style.title}
                  />
               </div>
               <div>
                  <textarea
                     ref={textRef}
                     name="description"
                     value={newDescription}
                     onChange={(e) => {
                        setNewDescription(e.target.value);
                     }}
                     placeholder='본문'
                     className={style.description}
                  />
               </div>
               <div className='flex justify-center'>
                  <button type='submit' className={style.submit}>수정</button>
               </div>
            </form>
         </div>
      </div>
   )
}
