import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
    <header className="flex items-center justify-between">

<Link className=" text-green-600 font-bold text-2xl"  href=""> GoDdu PiZzA</Link>

<nav className=" flex items-center gap-8 text-gray-500 font-semibold">

  <Link href="/menu">Menu</Link>
  <Link href="/about">About</Link>
  <Link href="/contact">Contact</Link>
  <Link href="/cart">Cart</Link>
  <Link href="/checkout">Checkout</Link>
  <Link href="/login" className="bg-red-700 rounded-full text-white px-8 py-2">Login</Link>
</nav>
</header>
    </>
  )
}
