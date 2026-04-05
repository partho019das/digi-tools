import React, { useState } from "react";

const Product = ({ data }) => {
  const [selectedTab, setSelectedTab] = useState("product");
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Remove product from cart
  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => {
    // Assuming item.Price is a string like "$100", remove "$" and convert to number
    const price = Number(item.Price.replace(/[^0-9.-]+/g, ""));
    return acc + price;
  }, 0);

  return (
    <div className="mx-auto px-8 mt-12 max-w-5xl">
      {/* Top Toggle Buttons */}
      <div className="flex justify-center items-center gap-3 mb-10">
        <button
          onClick={() => setSelectedTab("product")}
          className={`px-4 py-2 rounded-full transition ${
            selectedTab === "product"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Product
        </button>

        <button
          onClick={() => setSelectedTab("cart")}
          className={`px-4 py-2 rounded-full relative transition ${
            selectedTab === "cart"
              ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Cart
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>

      {/* Product Grid */}
      {selectedTab === "product" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between p-6 rounded-2xl border shadow-md hover:shadow-xl transition bg-white"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <img className="w-10 h-10 object-contain" src={item.Image} alt="" />
                  <span className="text-sm font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white px-3 py-1 rounded-full">
                    {item.TagType}
                  </span>
                </div>

                <h1 className="text-xl font-bold text-gray-800">{item.Name}</h1>
                <p className="text-sm text-gray-500 mt-2">{item.Description}</p>
                <p className="text-2xl font-bold mt-4 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                  {item.Price}
                </p>
                <p className="text-sm text-gray-500 mt-2">{item.Features}</p>
              </div>

              <button
                onClick={() => addToCart(item)}
                className="mt-6 w-full py-2 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] transition hover:scale-105"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Cart Section */}
      {selectedTab === "cart" && (
        <div className="flex flex-col gap-4">
          {cartItems.length === 0 ? (
            <div className="text-center text-xl font-semibold text-gray-600">
              Cart is empty 🛒
            </div>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row justify-between p-6 rounded-2xl border shadow-md bg-white w-full"
                >
                  <div className="flex items-center gap-4">
                    <img className="w-16 h-16 object-contain" src={item.Image} alt="" />
                    <div>
                      <h1 className="text-xl font-bold text-gray-800">{item.Name}</h1>
                      <p className="text-2xl font-bold mt-2 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        {item.Price}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(index)}
                    className="mt-4 sm:mt-0 sm:self-center py-2 px-4 rounded-full text-white font-semibold bg-red-500 hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              ))}

              {/* Total Price and Checkout Button */}
              <div className="mt-6 p-6 bg-white rounded-2xl shadow-md flex flex-col sm:flex-row justify-between items-center">
                <div className="text-xl font-bold text-gray-800">
                  Total: ${totalPrice.toFixed(2)}
                </div>
                <button className="mt-4 sm:mt-0 py-2 px-6 rounded-full text-white font-semibold bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:scale-105 transition">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;