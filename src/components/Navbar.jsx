import React from 'react';
import MainButton from './common/Button/mainButton';
import SecondaryButton from './common/Button/secondaryButton';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-green-600">
            Printify
          </a>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">
              Catalog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">
              How it works
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">
              Use-cases
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">
              Need help?
            </a>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex space-x-4">
            <SecondaryButton href="/login">
Log in
            </SecondaryButton>
        <MainButton href="#">
        Sign Up
      </MainButton>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
