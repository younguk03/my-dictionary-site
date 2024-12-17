import { auth } from '@/auth';
import GemniForm from '@/components/GemniForm'
import { redirect } from 'next/navigation';

export default async function GeminiPage() {
   const session = await auth();

   if (!session) {
      redirect('/not-login');
   }

   return (
      <div>
         <GemniForm />
      </div>
   );
}

