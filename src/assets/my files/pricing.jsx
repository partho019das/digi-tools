import React from 'react';

const Pricing = () => {
  return (
    <div className="px-4 md:px-0 mt-12">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-semibold">Simple, Transparent Pricing</h1>
        <p className="text-[#627382] mt-1.5">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Grid for 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        
        {/* Card 1 */}
        <div className="card w-full max-w-sm bg-base-100 shadow-sm rounded-lg p-6 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Starter</h2>
            <span className="text-xl">$0/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Basic templates
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Community support
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              1 project per month
            </li>
          </ul>
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white mt-6 px-3 py-1.5 rounded-full w-full">
            Get Started
          </button>
        </div>

        {/* Card 2 */}
        <div className="card w-full max-w-sm bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-sm rounded-lg p-6 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Pro</h2>
            <span className="text-xl">$29/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Basic templates
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Community support
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              1 project per month
            </li>
          </ul>
          <button className="bg-white text-[#4f39f6] mt-6 px-3 py-1.5 rounded-full w-full">
            Start Pro Trial
          </button>
        </div>

        {/* Card 3 */}
        <div className="card w-full max-w-sm bg-base-100 shadow-sm rounded-lg p-6 flex flex-col">
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">Enterprise</h2>
            <span className="text-xl">$99/mo</span>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Access to 10 free tools
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Basic templates
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              Community support
            </li>
            <li className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              1 project per month
            </li>
          </ul>
          <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white mt-6 px-3 py-1.5 rounded-full w-full">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
};

export default Pricing;