"use client"

import React, { useState } from 'react'
import Image from 'next/image'

export default function RegisterPage() {

  const [email,setEmail]  =useState('');
  const [password,setPassword] =useState('');
  const[creatingUser,setCreatingUser] = useState(true);
  const[userCreated,setUserCreated] = useState(false);

   async function handleSubmit(ev){

    ev.preventDefault();

    setCreatingUser(true);

    await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {'Content-Type': 'application/json'}
    });
    setCreatingUser(false);

  }

  return (
   <section className='mt-8'>
    <h1 className=' text-center text-red-500 text-4xl mb-4 font-semibold ' >
        Register
    </h1>

    <form className='block max-w-xs mx-auto' onSubmit={handleSubmit}>
     
      <input type='email' placeholder='email' value={email} disabled={creatingUser}  onChange={ev=>setEmail(ev.target.value)}></input>
      <input type='password' placeholder='password' value={password} disabled={creatingUser} onChange={ev=>setPassword(ev.target.value)}></input>
      <button type='submit' disabled={creatingUser}> Register</button>
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
        <span>  With Google</span>
      </button>

      
    </form>
   </section>
  )
}