import Image from "next/image";
import Link from "next/link";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";
import RegisterPage from "./register/page";

export default function Home() {
  return (
    <>
    <Hero/>
    <HomeMenu/>

    <section  className='text-center my-16'>
      <SectionHeaders
        subHeader={'Our Story'} 
        mainHeader={'About Us'}
      />

      <div className="max-w-2xl mx-auto mt-4 text-gray-500 text-justify leading-relaxed flex flex-col gap-4">

      <p>    
          At GodDu PizZa, we believe that great pizza brings people together. Our journey started with a passion for 
          crafting the perfect slice—one made with fresh ingredients, authentic flavors, and a touch of love.
          From hand-kneaded dough to rich tomato sauce and premium toppings, every pizza we create is a tribute to tradition and quality. 
          What began as a small kitchen experiment soon turned into a beloved spot where friends and families gather to enjoy delicious, 
          oven-baked perfection.
      </p>

      <p>
          More than just a pizza shop, GodDu PizZa is a place of warmth, connection, and unforgettable flavors.
          Whether you're here for a quick bite, a family dinner, or a celebration, we take pride in serving you with the best.
          Our commitment to freshness, taste, and exceptional service drives us every day. At GodDu PizZa, every slice tells a story—one of passion,
          tradition, and the love of great food. Come and be a part of our journey!
      </p>

      </div>
    </section>

    <section className="text-center my-8">
      <SectionHeaders 
        subHeader={'Don\'t hesitate'}
        mainHeader={'Contact Us'}
      />

      <div className="mt-8">
        <a className="text-4xl underline text-gray-500"
        href="tel:+94 70 667 6699">
          +94 70 667 6699
        </a>
      </div>
    </section>


    </>
  )
}