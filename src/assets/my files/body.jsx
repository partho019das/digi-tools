import React from 'react';

const Body = () => {
  return (
    <div className="flex justify-center items-center p-10">
      {/* Container for left and right */}
      <div className="flex flex-col lg:flex-row gap-20 items-center max-w-6xl w-full">
        
        {/* Left Content */}
        <div className="flex flex-col gap-5">
         <div className='bg-slate-400 w-[394px] rounded-full text-center'>
             <h1 className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl font-semibold m-auto p-2">
            New: AI-Powered Tools Available
          </h1>
         </div>

          <h2 className="text-6xl font-bold leading-tight">
            Supercharge Your <br /><span className='text-6xl bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl font-semibold'> Digital Workflow</span>
          </h2>

          <p className="text-lg text-gray-700">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>

          <span className="flex gap-4 mt-5">
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold p-3 rounded-full  transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              Explore Products
            </button>

            <button className="flex items-center border-2 border-[#9514FA] text-[#9514FA] p-3 rounded-full  transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
              <img src="/assets/Play.png" alt="Play" className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </span>
        </div>

        {/* Right Image */}
        <div>
          <img src="/assets/banner.png" alt="Banner" className="max-w-sm w-full" />
        </div>
      </div>
    
    </div>
    
  );
};

export default Body;