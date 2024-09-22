import React from 'react';

const ProfitCard = () => {
  return (
    <div className="bg-[#203741] p-10 rounded-lg flex items-center justify-between max-w-4xl mx-auto">
      {/* Left Section with Text */}
      <div className="text-white">
        <h2 className="text-3xl font-bold mb-4">Make Money, Risk-Free</h2>
        <p className="text-lg mb-6">You pay for fulfillment only when you make a sale</p>

        {/* Profit Calculation Box */}
        <div className="bg-[#17262B] font-bold p-10 rounded-lg mb-6">
          <div className="flex  justify-between mb-8">
            <p>You sell a t-shirt</p>
            <p>$30</p>
          </div>
          <div className="flex justify-between mb-8">
            <p>You pay for its production</p>
            <p>$12</p>
          </div>
          <hr className="border-gray-600 mb-6" />
          <div className="flex justify-between text-green-400 text-xl font-bold">
            <p>Your profit</p>
            <p>$18</p>
          </div>
        </div>

        {/* Start Selling Button */}
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 transition">
          Start selling
        </button>

        {/* Footer Text */}
        <p className="text-gray-400 mt-4">100% Free to use · 900+ Products · Largest print network</p>
      </div>

      {/* Right Section with Image */}
      <div>
        <img src="/path/to/your/image.png" alt="Profit illustration" className="w-80" />
      </div>
    </div>
  );
};

export default ProfitCard;
