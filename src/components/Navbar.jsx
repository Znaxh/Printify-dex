import React, { useState } from 'react';
import MainButton from './common/Button/mainButton';
import SecondaryButton from './common/Button/secondaryButton';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    howItWorks: false,
    services: false,
    useCases: false,
    needHelp: false,
  });

  const toggleDropdown = (menu) => {
    setDropdownOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <a href="#">
            <img
              src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
              alt="Printify Logo"
              className="h-8"
            />
          </a>
        </div>

        {/* Menu Items */}
        <ul className="hidden md:flex space-x-8 items-center">
          <li>
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300">
              Catalog
            </a>
          </li>

          {/* Dropdown for "How it works" */}
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown('howItWorks')}
            onMouseLeave={() => toggleDropdown('howItWorks')}
          >
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300 flex items-center">
              How it works
              {/* Arrow Icon */}
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                  dropdownOpen.howItWorks ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {dropdownOpen.howItWorks && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">Submenu 1</a>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">Submenu 2</a>
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown for "Services" */}
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown('services')}
            onMouseLeave={() => toggleDropdown('services')}
          >
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300 flex items-center">
              Services
              {/* Arrow Icon */}
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                  dropdownOpen.services ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {dropdownOpen.services && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">Service 1</a>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">Service 2</a>
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown for "Use-cases" */}
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown('useCases')}
            onMouseLeave={() => toggleDropdown('useCases')}
          >
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300 flex items-center">
              Use-cases
              {/* Arrow Icon */}
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                  dropdownOpen.useCases ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {dropdownOpen.useCases && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">Use Case 1</a>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">Use Case 2</a>
                </li>
              </ul>
            )}
          </li>

          {/* Dropdown for "Need help?" */}
          <li
            className="relative"
            onMouseEnter={() => toggleDropdown('needHelp')}
            onMouseLeave={() => toggleDropdown('needHelp')}
          >
            <a href="#" className="text-gray-700 hover:text-green-600 transition duration-300 flex items-center">
              Need help?
              {/* Arrow Icon */}
              <svg
                className={`w-4 h-4 ml-1 transform transition-transform duration-300 ${
                  dropdownOpen.needHelp ? 'rotate-180' : 'rotate-0'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            {dropdownOpen.needHelp && (
              <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">FAQ</a>
                </li>
                <li className="p-2 hover:bg-gray-100">
                  <a href="#">Contact Support</a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <SecondaryButton href="/login">Log in</SecondaryButton>
          <MainButton href="#">Sign Up</MainButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
