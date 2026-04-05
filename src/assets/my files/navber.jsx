import React, { useState } from 'react';

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='flex flex-col md:flex-row md:justify-between items-center p-5 shadow-xl'>
      {/* Logo */}
      <h1 className='text-2xl font-bold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
        DigiTools
      </h1>

      {/* Hamburger Button for Mobile */}
      <div className='md:hidden flex items-center mt-3'>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='text-2xl focus:outline-none'
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-6 mt-3 md:mt-0 transition-all duration-300 ${
          isOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <p className='font-semibold cursor-pointer hover:text-purple-600'>Products</p>
        <p className='font-semibold cursor-pointer hover:text-purple-600'>Features</p>
        <p className='font-semibold cursor-pointer hover:text-purple-600'>Pricing</p>
        <p className='font-semibold cursor-pointer hover:text-purple-600'>Testimonials</p>
        <p className='font-semibold cursor-pointer hover:text-purple-600'>FAQ</p>
      </div>

      {/* Buttons + Cart */}
      <div
        className={`flex flex-col md:flex-row items-center gap-3 mt-3 md:mt-0 ${
          isOpen ? 'block md:flex' : 'hidden md:flex'
        }`}
      >
        <img className='w-6 h-6' src='/assets/products/shopping-cart.png' alt='Cart' />
        <button className='mr-2 transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'>
          Login
        </button>
        <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] px-3 py-1.5 rounded-full text-white transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navber;