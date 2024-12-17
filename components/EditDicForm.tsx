'use client'
import { updateDic } from '@/action/actions'
import React, {useState } from 'react'
import style from './editDicForm.module.css'
import { useRouter } from 'next/navigation'

interface EditDicFormProps {
   id: string,
   title: string,
   description: string,
   kategorie: string
}

export default function EditDicForm({ 
   id, 
   title, 
   description, 
   kategorie }: EditDicFormProps) {
      const [newTitle] = useState(title); //useState는 컴포넌트의 상태를 간편하게 생성하고 업데이트 해주는 도구를 제공해준다.
      const [newDescription, setNewDescription] = useState(description);
      const [newKategorie, setNewKategorie] = useState(kategorie);
      const router = useRouter();
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault()
   
         try {
            await updateDic(id, newTitle, newDescription, newKategorie)
            router.push('/');
            router.refresh();
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
                     onChange={(e) => setNewDescription(e.target.value)}
                     placeholder='제목'
                     className={style.title}
                  />
               </div>
               <div>
                  <textarea
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
