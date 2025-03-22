import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <header className="flex items-center">
    <Link className=" text-green-600 font-bold" href=""> GoDdu PiZzA</Link>
    <nav className="flex">
      <Link href="/menu">Menu</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/cart">Cart</Link>
      <Link href="/checkout">Checkout</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
    </nav>
      </header>
   
   </>

  );
}
