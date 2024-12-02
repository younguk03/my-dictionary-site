'use client'
import { Dic } from '@/types/dic'
import React from 'react'

interface DicListProps {
   dics:Dic[]
}

export default function UpdateList({dics}:DicListProps) {
   return (
      <>
         {dics.map((dic) => (
            <div
               key={dic._id} className='mb-6'>
               <div>
                  <h2 className="font-bold">{dic.title}</h2>
                  <div className='ml-1'>{dic.description}</div>
               </div>
            </div>
         ))}
      </>)
}
