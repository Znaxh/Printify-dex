import React from 'react';

const Service = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-3">

            {/* Feature 1 - CREATE */}
            <div className="text-center px-12">
              <div className="flex justify-center">
                <img
                  src="	https://printify.com/pfh/assets/legacy/custom-products.png"
                  alt="Create Custom Products"
                  className="h-40 w-40 mb-10"
                />
              </div>
              <h3 className="lg:text-left text-center text-xl text-green-600 uppercase font-bold">Create</h3>
              <h3 className="lg:text-left text-center text-xl leading-6 font-bold text-gray-900">custom products</h3>
              <p className="mt-2 text-sm text-gray-500 lg:text-left text-center">
                Easily add your designs to a wide range of products using our free tools.
              </p>
            </div>

            {/* Feature 2 - SELL */}
            <div className="text-center px-12">
              <div className="flex justify-center">
                <img
                  src="	https://printify.com/pfh/assets/legacy/your-products.png"
                  alt="Sell on Your Terms"
                  className="h-40 w-40 mb-10"
                />
              </div>
              <h3 className="lg:text-left text-center text-xl text-green-600 uppercase font-bold">Sell</h3>
              <h3 className="lg:text-left text-center text-xl leading-6 font-bold text-gray-900">on your terms</h3>
              <p className="mt-2 text-sm text-gray-500 lg:text-left text-center">
                You choose the products, sale price, and where to sell.
              </p>
            </div>

            {/* Feature 3 - WE HANDLE */}
            <div className="text-center px-12">
              <div className="flex justify-center">
                <img
                  src="https://printify.com/pfh/assets/legacy/fullfillment.png"
                  alt="We Handle Fulfillment"
                  className="h-40 w-40 mb-10"
                />
              </div>
              <h3 className="lg:text-left text-center text-xl text-green-600 uppercase font-bold">We Handle</h3>
              <h3 className="lg:text-left text-center text-xl leading-6 font-bold text-gray-900">fulfillment</h3>
              <p className="mt-2 text-sm text-gray-500 lg:text-left text-center">
                Once an order is placed, we automatically handle all the printing and delivery logistics.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
