






// import React, { useState } from "react";
// import { FiZap, FiChevronDown } from "react-icons/fi";
// import image from "../assets/img2.svg";

// function Sidebar() {
//   const [showPicksDropdown, setShowPicksDropdown] = useState(false);
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [activeItem, setActiveItem] = useState(null);

//   // Picks dropdown items
//   const picksDropdownItems = [
//     "Dashboard",
//     "Users",
//     "Picks",
//     "Social",
//     "Newsstand",
//     "Admin",
//   ];

//   const menuItems = {
//     "GAME OPERATIONS": [
//       "Props",
//       "Prop History",
//       "Players",
//       "Teams",
//       "Events",
//       "Leagues",
//       "Sports",
//       "Tee Time Groups",
//       "Tournaments",
//     ],
//     "PLAYER OPERATIONS": [
//       "Lineups",
//       "Creator Cash",
//       "Picks Users",
//       "Limits",
//       "KYC Logs",
//       "Geo Logs",
//       "Risk Flags",
//       "Suspended",
//       "Banned",
//       "Self Excluded",
//     ],
//     FINANCE: [
//       "Balances",
//       "Transactions",
//       "Disputes",
//       "Chargebacks",
//       "Clawbacks",
//       "Promo Codes",
//     ],
//   };

//   return (
//     <div className="h-[1008px] w-50 border-r bg-gray-100 border-gray-400 p-4 overflow-y-auto font-sans">

//       {/* Picks Button */}
//       <button
//         onClick={() => setShowPicksDropdown(!showPicksDropdown)}
//         className="w-full flex items-center justify-between bg-white shadow-sm border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 mb-4 hover:bg-gray-50 transition"
//       >
//         <span className="flex items-center gap-2">
//           <img src={image} alt="Materials Icon" className="w-5 h-5" />
//           Picks
//         </span>

//         <FiChevronDown
//           size={16}
//           className={`transition-transform ${showPicksDropdown ? "rotate-180" : "rotate-0"}`}
//         />
//       </button>

//       {/* Picks Dropdown Items */}
//       {showPicksDropdown && (
//         <div className="ml-4 mb-4 flex flex-col gap-2">
//           {picksDropdownItems.map((item) => (
//             <div
//               key={item}
//               className="cursor-pointer text-sm px-3 py-1 rounded text-gray-700 hover:bg-blue-900 hover:text-white transition"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       )}

//       {/* MAIN SECTIONS (Hide when Picks dropdown is open) */}
//       {!showPicksDropdown && (
//         <div className="flex flex-col gap-4">
//           {Object.keys(menuItems).map((section) => (
//             <div key={section} className="pb-2">

//               {/* Section Title */}
//               <div
//                 className="flex justify-between bg-gray-100 items-center cursor-pointer px-2 py-1 text-xs font-bold text-gray-700 uppercase tracking-wide rounded"
//                 onClick={() =>
//                   setActiveMenu(activeMenu === section ? null : section)
//                 }
//               >
//                 {section}
//                 <FiChevronDown
//                   size={14}
//                   className={`transition-transform ${
//                     activeMenu === section ? "rotate-180" : "rotate-0"
//                   }`}
//                 />
//               </div>

//               {/* Sub Items */}
//               {activeMenu === section && (
//                 <div className="mt-2 ml-2 flex flex-col gap-1">
//                   {menuItems[section].map((item) => (
//                     <div
//                       key={item}
//                       onClick={() => setActiveItem(item)}
//                       className={`cursor-pointer text-sm px-3 py-1 rounded ${
//                         activeItem === item
//                           ? "bg-blue-900 text-white"
//                           : "text-gray-700 hover:bg-blue-900 hover:text-white"
//                       } transition`}
//                     >
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Sidebar;





import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import image from "../assets/img2.svg";

function Sidebar() {
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
    <div className="h-screen w-full  sm:w-60 md:w-64 border-r bg-gray-100 border-gray-400 p-4 overflow-y-auto font-sans">

      {/* Picks Button */}
      <button
        onClick={() => setShowPicksDropdown(!showPicksDropdown)}
        className="w-full flex items-center cursor-pointer justify-between bg-white shadow-sm border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 mb-4 hover:bg-gray-50 transition"
      >
        <span className="flex items-center  gap-2">
          <img src={image} alt="Materials Icon" className="w-5  h-5" />
          Picks
        </span>
        <FiChevronDown
          size={16}
          className={`transition-transform ${showPicksDropdown ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Picks Dropdown Items */}
      {showPicksDropdown && (
        <div className="ml-2 mb-4 flex flex-col gap-2">
          {picksDropdownItems.map((item) => (
            <div
              key={item}
              className="cursor-pointer text-sm px-3 py-1 rounded text-gray-700 hover:bg-blue-900 hover:text-white transition"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {/* MAIN SECTIONS */}
      {!showPicksDropdown && (
        <div className="flex flex-col gap-4">
          {Object.keys(menuItems).map((section) => (
            <div key={section} className="pb-2">

              {/* Section Title */}
              <div
                className="flex justify-between bg-gray-100 items-center cursor-pointer px-2 py-1 text-xs font-bold text-gray-700 uppercase tracking-wide rounded"
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

              {/* Sub Items */}
              {activeMenu === section && (
                <div className="mt-2 ml-2 flex flex-col gap-1">
                  {menuItems[section].map((item) => (
                    <div
                      key={item}
                      onClick={() => setActiveItem(item)}
                      className={`cursor-pointer text-sm px-3 py-1 rounded ${
                        activeItem === item
                          ? "bg-blue-900 text-white"
                          : "text-gray-700 hover:bg-blue-900 hover:text-white"
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
  );
}

export default Sidebar;
