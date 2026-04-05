import React from 'react';
const Product = ({ data }) => {
 
  return (

    <div className="mx-auto px-8 ml-28 mt-12">
        <span className='flex justify-center items-center mt-4 gap-2 mb-10'>
            <button className='bg-gradient-to-r from-[#4F39F6] to-[#9514FA] p-2 text-white rounded-4xl  transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg'>
            Product</button>
            <button className='shadow-2xl text-xl'>Cart</button>
           </span>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-6 rounded-2xl border shadow-md hover:shadow-xl transition duration-300 bg-white"
          >
            {/* Top */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <img
                  className="w-10 h-10 object-contain"
                  src={item.Image}
                  alt=""
                />

                <span className="text-sm font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 py-1 rounded-full">
                  {item.TagType}
                </span>
              </div>

              <h1 className="text-xl font-bold text-gray-800">
                {item.Name}
              </h1>

              <p className="text-sm text-gray-500 mt-2">
                {item.Description}
              </p>

              <p className="text-2xl font-bold mt-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                {item.Price}
              </p>

              <p className="text-sm text-gray-500 mt-2">
                {item.Features}
              </p>
            </div>

            {/* Button */}
            <button className="mt-6 w-full py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] transform transition duration-300 hover:-translate-y-1 hover:shadow-lg">
             Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;