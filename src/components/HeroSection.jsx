import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Create and sell <br /> </span>
                <span className="block xl:inline">custom products</span>
              </h1>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                <ul>
                  <li className="flex items-center">
                    <img width="24" height="24" src="https://img.icons8.com/color/48/checkmark--v1.png" alt="checkmark--v1"/> 100% Free to use
                  </li>
                  <li className="flex items-center">
                    <img width="24" height="24" src="https://img.icons8.com/color/48/checkmark--v1.png" alt="checkmark--v1"/> 900+ High-Quality Products
                  </li>
                  <li className="flex items-center">
                    <img width="24" height="24" src="https://img.icons8.com/color/48/checkmark--v1.png" alt="checkmark--v1"/> Largest global print network
                  </li>
                </ul>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                    
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                  >
                    Start for free
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-between px-8 py-3 border border-gray-400 text-base font-medium rounded-md hover:text-green-600 md:py-4 md:text-lg md:px-10"
                  >
                    <img width="20" height="20" src="https://img.icons8.com/ios/50/play-button-circled--v1.png" alt="play-button-circled--v1"/>
                    How it works?
                  </a>
                </div>
              </div>
              <p className="mt-5 font-semibold text-green-600">Trusted by over 8M sellers around the world</p>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://via.placeholder.com/500"
          alt="T-Shirt Design"
        />
      </div>
    </div>
  );
};

export default HeroSection;
