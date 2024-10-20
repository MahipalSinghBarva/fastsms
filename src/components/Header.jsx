import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md py-4  ">
      <div className="container mx-auto flex flex-wrap justify-evenly max-[800px]:justify-between items-center px-4">
        <h1 className="text-2xl font-bold transition-transform duration-300 hover:scale-105  text-blue-800">FastSMS</h1>
        
        <button
          onClick={toggleMenu}
          className="block md:hidden text-gray-800 hover:text-blue-500 focus:outline-none"
        >
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
        
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 w-full md:w-auto`}
        >
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:text-blue-500 transition-transform duration-300 hover:scale-105"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:text-blue-500 transition-transform duration-300 hover:scale-105"
          >
            Services
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:text-blue-500 transition-transform duration-300 hover:scale-105"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-gray-800 hover:text-blue-500 transition-transform duration-300 hover:scale-105"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
