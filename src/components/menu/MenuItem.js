import React from 'react'
import Image from 'next/image'

export default function MenuItem() {
  return (
    <div className='bg-gray-300 p-4 rounded-lg text-center hover:bg-gray-100 transition-all  hover:shadow-md hover:shadow-black/25'>

    <div className='text-center'>
    <img src='/pizza.png' className='max-h-auto max-h-24 block mx-auto' alt='pizza'></img>
    </div>

    <h4 className='font-semibold my-3 text-xl'> Pepperoni Pizza</h4>

    <p className='text-gray-500 text-sm'>A crispy, golden crust topped with rich tomato sauce, gooey melted cheese, and spicy, savory pepperoni
       slices—each bite is a perfect balance of crunch, zest, and cheesy goodness </p>

       <button className='bg-red-500 text-white rounded-full px-8 py-2 mt-4'>
        Add to Cart $12
       </button>


  </div>
  )
}