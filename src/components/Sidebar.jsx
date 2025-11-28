

import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import image from "../assets/img2.svg";

function Sidebar({ isOpen, setIsOpen }) {
  const [showPicksDropdown, setShowPicksDropdown] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const picksDropdownItems = [
    "Dashboard",
    "Users",
    "Picks",
    "Social",
    "Newsstand",
    "Admin",
  ];

  const menuItems = {
    "GAME OPERATIONS": [
      "Props",
      "Prop History",
      "Players",
      "Teams",
      "Events",
      "Leagues",
      "Sports",
      "Tee Time Groups",
      "Tournaments",
    ],
    "PLAYER OPERATIONS": [
      "Lineups",
      "Creator Cash",
      "Picks Users",
      "Limits",
      "KYC Logs",
      "Geo Logs",
      "Risk Flags",
      "Suspended",
      "Banned",
      "Self Excluded",
    ],
    FINANCE: [
      "Balances",
      "Transactions",
      "Disputes",
      "Chargebacks",
      "Clawbacks",
      "Promo Codes",
    ],
  };

  return (
    <>
      {/* BACKDROP FOR MOBILE */}
      <div
        className={`fixed inset-0 bg-black/40 z-30 md:hidden transition-opacity ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* SIDEBAR */}
      {/* <div
        className={`
          fixed top-0 left-0 h-screen z-40
          bg-gray-100 border-r border-gray-400 p-4 overflow-y-auto font-sans
          w-64
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      > */}
      <div
  className={`
    fixed top-0 left-0 
    h-screen 
    z-40 
    bg-gray-100 border-r border-gray-400 
    p-4 
    overflow-y-auto 
    font-sans

    w-64

    transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}

    md:translate-x-0 md:static md:h-auto md:max-h-screen
  `}
>

        {/* Picks Button */}
        <button
          onClick={() => setShowPicksDropdown(!showPicksDropdown)}
          className="w-full flex items-center cursor-pointer justify-between bg-white shadow-sm border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-black mb-4 hover:bg-gray-50 transition"
        >
          <span className="flex items-center gap-2">
            <img src={image} alt="Materials Icon" className="w-5 h-5" />
            Picks
          </span>
          <FiChevronDown
            size={16}
            className={`transition-transform ${
              showPicksDropdown ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Picks Dropdown */}
        {showPicksDropdown && (
          <div className="ml-2 mb-4 flex flex-col gap-2">
            {picksDropdownItems.map((item) => (
              <div
                key={item}
                className="cursor-pointer text-sm px-3 py-1 rounded text-black hover:bg-blue-700 hover:text-white transition"
              >
                {item}
              </div>
            ))}
          </div>
        )}

        {/* MAIN MENU */}
        {!showPicksDropdown && (
          <div className="flex flex-col gap-4">
            {Object.keys(menuItems).map((section) => (
              <div key={section} className="pb-2">
                <div
                  className="flex justify-between bg-gray-100 items-center cursor-pointer px-2 py-1 text-xs font-bold text-black uppercase tracking-wide rounded"
                  onClick={() =>
                    setActiveMenu(activeMenu === section ? null : section)
                  }
                >
                  {section}
                  <FiChevronDown
                    size={14}
                    className={`transition-transform ${
                      activeMenu === section ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {activeMenu === section && (
                  <div className="mt-2 ml-2 flex flex-col gap-1">
                    {menuItems[section].map((item) => (
                      <div
                        key={item}
                        onClick={() => setActiveItem(item)}
                        className={`cursor-pointer text-sm px-3 py-1 rounded ${
                          activeItem === item
                            ? "bg-blue-700 text-white"
                            : "text-black hover:bg-blue-700 hover:text-white"
                        } transition`}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Sidebar;
