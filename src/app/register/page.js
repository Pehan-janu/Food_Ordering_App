"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function RegisterPage() {

  const [email,setEmail]  =useState('');
  const [password,setPassword] =useState('');
  const[creatingUser,setCreatingUser] = useState(false);
  const[userCreated,setUserCreated] = useState(false);
  const[error,setError] = useState(false)

   async function handleSubmit(ev){

    ev.preventDefault();

    setCreatingUser(true);
    setError(false);
    setUserCreated(false);

    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {'Content-Type': 'application/json'}
    });
    
    if (response.ok){
      setUserCreated(true);
    }

    else{
      setError(true);
    }

    setCreatingUser(false);
        
  }


  return (
   <section className='mt-8'>
    <h1 className=' text-center text-red-500 text-4xl mb-4 font-semibold ' >
        Register
    </h1>
    {userCreated && (
      <div className="my-4 text-center">
        User Created. <br/> Now you can <Link className='underline' href={'/login'}> Login &raquo;</Link>

      </div>
    )}

    {error && (
      <div className='my-4 text-center'>
        Error!!. <br/> Please try again later.

      </div>


    )}
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
        <span> Login With Google</span>
      </button>

      <div className='text-center my-4 text-gray-500 border-t pt-4'>
        existing account?{''}
        <Link className='underline' href={'/login'}>Login Here &raquo;</Link>

      </div>
      
    </form>
   </section>
  )
}