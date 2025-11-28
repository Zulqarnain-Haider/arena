

import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";    // NEW MENU ICON
import image from "../assets/arena-bk.svg";

export default function Header({ setIsOpen }) {
  return (
    <header className="flex justify-between items-center bg-gray-100 w-full border-b border-gray-400 sticky top-0 z-10 px-3 sm:px-6 h-14 sm:h-16">
      
      {/* LEFT SIDE — Menu Icon (Mobile) + Logo */}
      <div className="flex items-center gap-3">
        
        {/* Menu Icon (Mobile Only) */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 transition"
          onClick={() => setIsOpen(true)}
        >
          <FiMenu size={22} className="text-black" />
        </button>

        {/* Logo */}
        <img
          src={image}
          alt="Logo"
          className="w-20 sm:w-32 h-auto cursor-pointer"
        />
      </div>

      {/* RIGHT SIDE — TR Button + Down Icon */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button className="flex-shrink-0 text-sm sm:text-base bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-blue-800 transition">
          TR
        </button>
        <FaChevronDown className="w-4 h-4 black cursor-pointer" />
      </div>

    </header>
  );
}
