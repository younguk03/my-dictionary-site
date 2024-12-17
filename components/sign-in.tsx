import { signIn } from "@/auth"
import styles from './sign-in.module.css'
import googleLogo from '@/public/google-logo.png'
import Image from "next/image"
import githubLogo from '@/public/github-logo.png'

export default function SignIn() {
   return (
      <div className="flex flex-col items-center">
         <form
            action={async () => {
               "use server"
               await signIn("google",{redirectTo:'/'})
            }}
         >
            <button type="submit" className={styles.google}>
               <span>
                  <Image src={googleLogo} alt='google-logo' width={30} height={30} priority />
               </span>
               <span className="pl-5 pr-2 font-bold">Google계정으로 로그인</span>
            </button>
         </form>
         <form action={async () => {
            'use server'
            await signIn('github', { redirectTo: '/' })
         }}>
            <button type="submit" className={styles.github}>
               <span>
                  <Image src={githubLogo} alt='github-logo' width={30} height={30} priority className="pr-1" />
               </span>
               <span className="text-white pl-2 font-bold">Github 계정으로 로그인</span>
            </button>
         </form>
      </div>
   )
} 