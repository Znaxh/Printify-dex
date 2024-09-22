import React from 'react';

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-24 ">
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
                  alt="Higher Profits"
                  className="h-20 w-20 mb-4"
                />
              </div>
              <h3 className="text-lg leading-6 font-bold text-gray-900">Higher Profits</h3>
              <p className="sm:text-left mt-2 text-base text-center text-gray-800 text-light">
                We offer some of the lowest prices in the industry because print providers continuously compete to win your business.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  src="	https://printify.com/pfh/assets/legacy/robust-scaling.svg"
                  alt="Robust Scaling"
                  className="h-20 w-20 mb-4"
                />
              </div>
              <h3 className="text-lg leading-6 font-bold text-gray-900">Robust Scaling</h3>
              <p className="sm:text-left mt-2 text-base text-center text-gray-800 text-light">
                Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  src="https://printify.com/pfh/assets/legacy/best-selection.svg"
                  alt="Best Selection"
                  className="h-20 w-20 mb-4"
                />
              </div>
              <h3 className="text-lg leading-6 font-bold text-gray-900">Best Selection</h3>
              <p className="sm:text-left mt-2 text-base text-center text-gray-800 text-light">
                With 900+ products and top-quality brands, you can choose the best products for your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
