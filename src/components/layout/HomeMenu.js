import React from 'react';
import Image from 'next/image';
import MenuItem from '../menu/MenuItem';
import SectionHeaders from './SectionHeaders';

export default function HomeMenu() {
  return (
    <section className=''>
      {/* Container for the salad images */}
      <div className='absolute left-0 right-0 w-full justify-start'>
        
        {/* Left Salad Image */}
        <div className='absolute left-0 -top-[100px] text-left -z-10'>
          <Image src={'/sallad1.png'} width={109} height={189} alt='Salad' />
        </div>
        
        {/* Right Salad Image */}
        <div className='absolute -top-[100px] right-0 -z-10'>
          <Image src={'/sallad2.png'} width={107} height={195} alt='Salad' />
        </div>
      </div>

      {/* Menu Heading */}
      <div className='text-center mt-6 mb-10'>
        <SectionHeaders subHeader={'CheckOut'} mainHeader={'Menu'} />
      </div>

      <div className=' grid grid-cols-3 gap-4'>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      <MenuItem/>
      </div>


    </section>
  );
}