import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="home-header flex w-full items-center justify-between">

      <header className="flex justify-between items-center py-4 w-full max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            alt="logo"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="h-10"
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <span className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer">Home</span>
          <span className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer">SSU</span>
          <span className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer">Help</span>
        </nav>

        {/* Buttons Section */}
        <div className="hidden md:flex space-x-4">
          <button className="border-red-700 hover:bg-red-800 text-grey-100 font-bold py-2 px-8 rounded-full border">Logout</button>
        </div>

        {/* Mobile Menu (Hamburger Icon) */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu (Dropdown) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <span className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer">Home</span>
            <span className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer">SSU</span>
            <span className="text-lg text-gray-700 hover:text-gray-900 cursor-pointer">Help</span>
            <button className="text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition duration-200">Logout</button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default NavBar;
