import React from 'react';

const Navber = () => {
    return (
<div className='flex justify-between m-1 p-5 shadow-xl '>
    <h1 className='text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text
     text-transparent'>DigiTools</h1>
     <div className='flex gap-2 text-[20px]'>
        <p className='font-semibold'>Products</p>
        <p className='font-semibold'>Features</p>
        <p className='font-semibold'>Pricing</p>
        <p className='font-semibold'>Testimonials</p>
        <p className='font-semibold'>FAQ</p>
     </div>
     <div id='btn'>
        <button className='mr-2  transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'>Login</button>
        <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-1.5 rounded-full  transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'>Get Started</button>
     </div>
     
</div>
  
    );
};

export default Navber;