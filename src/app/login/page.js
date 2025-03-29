'use client'
import React, { use } from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const [email,setEmail]  =useState('');
    const [password,setPassword] =useState('');
    const [loginInProgress,setLoginInProgress] = useState(false);

    async function handleSubmit(ev){
      ev.preventDefault();
      setLoginInProgress(true);

      await signIn('Credentials', {email,password});

      setLoginInProgress(false);

}
  return (
    <section className='mt-8'>
        <h1 className="text-center text-red-500 text-4xl mb-4 font-semibold ">
          Login
        </h1>

        <form className="max-w-xs mx-auto" onSubmit={handleSubmit}>

          <input type='email' name="email" placeholder='email' value={email} 
          disabled={loginInProgress}  
          onChange={ev=>setEmail(ev.target.value)}>
          </input>

          <input type='password' name="password" placeholder='password' value={password} 
          disabled={loginInProgress} 
          onChange={ev=>setPassword(ev.target.value)}>
          </input>
          <button type='submit' disabled={loginInProgress}> Login</button>
      

         <div className='my-4 text-center text-gray-500'>
          or login with provider
         </div>

               <button 
                 className='flex w-full items-center justify-center gap-8 p-2 border rounded-md hover:bg-gray-100'
               >
                 <Image 
                   src={'/google.png'} 
                   alt="Google logo" 
                   width={24} 
                   height={24} 
                   className='inline-block'
                 />
                 <span> Login With Google</span>
               </button>
        </form>

    </section>
  )
}

