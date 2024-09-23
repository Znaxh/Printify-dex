import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SideBarMenu({ setShowSidebar }) {
  // State to manage which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="bg-white min-h-screen p-3 border-r-2">
      <div className="flex justify-center items-center relative">
        <h1 className="text-3xl font-bold">Menu</h1>
        <i
          className="absolute fa-solid fa-xmark text-2xl right-0 cursor-pointer"
          onClick={() => setShowSidebar(false)}
        ></i>
      </div>
      <hr />
      <div className="mt-10">
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              to="/"
              className="text-[#353a47] hover:text-[#39b75d] font-extrabold"
            >
              Catalog
            </Link>
          </li>

          {/* How it Works Dropdown */}
          <li className="group relative">
            <button
              onClick={() => toggleDropdown("howItWorks")}
              className={`duration-1000 text-[#353a47]  flex items-center font-extrabold ${
                openDropdown === "howItWorks"
                  ? "text-[#39b75d]"
                  : "text-[#353a47]"
              }`}
            >
              How it Works
              <i
                className={`fa-solid fa-caret-down ml-2 absolute right-0 text-[#353a47]`}
              ></i>
            </button>
            {/* Nested UL - Dropdown */}
            {openDropdown === "howItWorks" && (
              <ul className="pl-10">
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">How Printify Works</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Print On Demand</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Printify Quality Promise</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">What To Sell</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Pricing */}
          <li>
            <Link
              to="/"
              className="text-[#353a47] hover:text-[#39b75d] font-extrabold"
            >
              Pricing
            </Link>
          </li>
          {/* Blog */}
          <li>
            <Link
              to="/"
              className="text-[#353a47] hover:text-[#39b75d] font-extrabold"
            >
              Blog
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="group relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={`duration-1000 text-[#353a47] font-extrabold flex items-center ${
                openDropdown === "services"
                  ? "text-[#39b75d]"
                  : "text-[#353a47]"
              }`}
            >
              Services
              <i
                className={`fa-solid fa-caret-down ml-2 absolute right-0 text-[#353a47]`}
              ></i>
            </button>
            {/* Nested UL - Dropdown */}
            {openDropdown === "services" && (
              <ul className="pl-10">
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Printify Studio</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Printify Express Delivery</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Transfer Products</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Order In Bulk</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Experts Program</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Use-cases Dropdown */}
          <li className="group relative">
            <button
              onClick={() => toggleDropdown("useCases")}
              className={`duration-1000 text-[#353a47] font-extrabold flex items-center ${
                openDropdown === "useCases"
                  ? "text-[#39b75d]"
                  : "text-[#353a47]"
              }`}
            >
              Use-cases
              <i
                className={`fa-solid fa-caret-down ml-2 absolute right-0 text-[#353a47]`}
              ></i>
            </button>
            {/* Nested UL - Dropdown */}
            {openDropdown === "useCases" && (
              <ul className="pl-10">
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Merch for Fans</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Merch for eCommerce</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Merch for Enterprises</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Grow Your Store</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Need Help Dropdown */}
          <li className="group relative">
            <button
              onClick={() => toggleDropdown("needHelp")}
              className={`duration-1000 text-[#353a47]  flex items-center font-extrabold ${
                openDropdown === "needHelp"
                  ? "text-[#39b75d]"
                  : "text-[#353a47]"
              }`}
            >
              Need Help?
              <i
                className={`fa-solid fa-caret-down ml-2 absolute right-0 text-[#353a47]`}
              ></i>
            </button>
            {/* Nested UL - Dropdown */}
            {openDropdown === "needHelp" && (
              <ul className="pl-10">
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Help Center</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">Contacts</Link>
                </li>
                <li className="px-4 py-2 text-[#353a47] ">
                  <Link to="/">My Requests</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

SideBarMenu.propTypes = {
  setShowSidebar: PropTypes.func.isRequired, // Validating that setShowSidebar is a function
};

export default SideBarMenu;