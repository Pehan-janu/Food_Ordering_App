import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
<header className="flex items-center justify-between">

<nav className=" flex items-center gap-8 text-gray-500 font-semibold">
  <Link className=" text-green-600 font-bold text-2xl"  href="/"> GoDdu PiZzA</Link>
  <Link href="/home">Home</Link>
  <Link href="/menu">Menu</Link>
  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
  
  
</nav>
<nav className='flex items-center gap-4 textp-gray-500 font-semibold'>

  <Link href="/login" className="text-gray-500  px-8 py-2">Login</Link>
  <Link href="/register" className="bg-red-700 rounded-full text-white px-8 py-2">
  Register</Link>

</nav>
</header>
    </>
  )
}
