'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function Page() {
   const session = useSession()
   return (
      <div>
         <h1>데시보드</h1>
         <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
   )
}
