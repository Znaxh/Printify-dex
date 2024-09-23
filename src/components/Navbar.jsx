import { Link } from "react-router-dom";
import SideBarMenu from "./SideBarMenu";
import { useState } from "react";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      {/* Conditionally Render SideBarMenu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 bg-gray-800 bg-opacity-50 transition-opacity ${
          showSidebar ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggleSidebar}
      >
        <div
          className={`fixed left-0 top-0 w-10/12 md:w-4/12 h-full shadow-lg transform transition-transform ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <SideBarMenu setShowSidebar={setShowSidebar} />
        </div>
      </div>

      <nav className="flex justify-around md:justify-between lg:justify-around items-center p-2 px-8 lg:p-4 lg:px-4 border-b-2 relative bg-white">
        {/* Logo Section */}
        <div className="flex justify-between items-center gap-2">
          <i
            className="fa-solid fa-bars lg:hidden text-[#39b75d] text-2xl"
            onClick={handleToggleSidebar} // Toggle sidebar on bar click
          ></i>
          <img
              src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
              alt="Printify Logo"
              className="h-12"
            />
        </div>

        {/* Navigation Links Section */}
        <div className="hidden lg:block">
          <ul className="flex justify-between items-center gap-5">
            <li>
              <Link
                to="/"
                className="text-[#353a47] hover:text-[#39b75d] font-medium"
              >
                Catalog
              </Link>
            </li>

            {/* How it Works Dropdown */}
            <li className="group relative">
              <Link
                to="/"
                className="duration-1000 text-[#353a47] group-hover:text-[#39b75d] font-medium"
              >
                How it Works
              </Link>
              <i className="fa-solid fa-caret-down transition duration-1000 group-hover:text-[#39b75d] ml-2"></i>

              {/* Nested UL - Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-white border border-gray-200 mt-0 w-[210px] top-full z-10">
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  How Printify Works
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Print On Demand
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Printify Quality Promise
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  What To Sell
                </li>
              </ul>
            </li>

            {/* Other Links */}
            <li>
              <Link
                to="/"
                className="text-[#353a47] hover:text-[#39b75d] font-medium"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="text-[#353a47] hover:text-[#39b75d] font-medium"
              >
                Blog
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="group relative">
              <Link
                to="/"
                className="duration-1000 text-[#353a47] group-hover:text-[#39b75d] font-medium"
              >
                Services
              </Link>
              <i className="fa-solid fa-caret-down duration-1000 group-hover:text-[#39b75d] ml-2"></i>

              {/* Nested UL - Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-white border border-gray-200 mt-0 w-[210px] top-full">
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Printify Studio
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Printify Express Delivery
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Transfer Products
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Order In Bulk
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Experts Program
                </li>
              </ul>
            </li>

            {/* Use-cases Dropdown */}
            <li className="group relative">
              <Link
                to="/"
                className="duration-1000 text-[#353a47] group-hover:text-[#39b75d] font-medium"
              >
                Use-cases
              </Link>
              <i className="fa-solid fa-caret-down duration-1000 group-hover:text-[#39b75d] ml-2"></i>

              {/* Nested UL - Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-white border border-gray-200 mt-0 w-[210px] top-full">
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Merch for Fans
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Merch for eCommerce
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Merch for Enterprises
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Grow Your Store
                </li>
              </ul>
            </li>

            {/* Need Help Dropdown */}
            <li className="group relative">
              <Link
                to="/"
                className="duration-1000 text-[#353a47] group-hover:text-[#39b75d] font-medium"
              >
                Need Help?
              </Link>
              <i className="fa-solid fa-caret-down duration-1000 group-hover:text-[#39b75d] ml-2"></i>

              {/* Nested UL - Dropdown */}
              <ul className="absolute left-0 hidden group-hover:block bg-white border border-gray-200 mt-0 w-[210px] top-full">
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Help Center
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  Contacts
                </li>
                <li className="px-4 py-2 text-[#353a47] hover:text-[#39b75d]">
                  My Requests
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between items-center lg:gap-5 gap-2">
          <button className="text-sm border border-[#c2c2c2] text-[#353a47] rounded-md px-8 py-2 lg:px-8 lg:py-2 font-semibold hover:text-[#39b75d] whitespace-nowrap">
            Login
          </button>
          <button className="text-sm border bg-[#39b75d] text-[#fff] rounded-md px-8 py-2 lg:px-8 lg:py-2 font-semibold hover:bg-[#27793e] whitespace-nowrap">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;