import SignIn from '@/components/sign-in'
import React from 'react'
import styles from './page.module.css'

export default function LoginPage() {
   return (
      <div className={styles.container}>
         <div className={styles.signIn}>
            <h2 className='text-center text-3xl font-bold pb-7'>Sign In</h2>
            <div >
               <SignIn />
            </div>
         </div>
      </div>
   )
}
