import { getDic } from '@/action/actions'
import EditDicForm from '@/components/EditDicForm'
import React from 'react'

interface Props {
   params: {
      id: string
   }
}

export default async function EditDicPage({ params }: Props) {
   const { dic } = await getDic(params.id)
   return (
      <div>
         <EditDicForm
            id={dic._id}
            title={dic.title}
            description={dic.description}
            kategorie={dic.kategorie}
         />
      </div>
   )
}
