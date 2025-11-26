

import React, { useState } from "react";
import { FiZap, FiChevronDown } from "react-icons/fi";

function Sidebar() {
  const [showPicks, setShowPicks] = useState(true);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = {
    "GAME OPERATIONS": [
      "Props", "Prop History", "Players", "Teams", "Events", "Leagues", "Sports", "Tee Time Groups", "Tournaments",
    ],
    "PLAYER OPERATIONS": [
      "Lineups", "Creator Cash", "Picks Users", "Limits", "KYC Logs", "Geo Logs", "Risk Flags", "Suspended", "Banned", "Self Excluded",
    ],
    FINANCE: [
      "Balances", "Transactions", "Disputes", "Chargebacks", "Clawbacks", "Promo Codes",
    ],
  };

  return (
    <div className="h-[1008px] w-50 border-r  bg-gray-200 border-gray-200 p-4 overflow-y-auto font-sans">
      
      {/* Picks Button */}
      <button
        onClick={() => setShowPicks(!showPicks)}
        className="w-full flex items-center justify-between bg-white shadow-sm border border-gray-300 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 mb-4 hover:bg-gray-50 transition"
      >
        <span className="flex items-center h-[32px] w-[138px] pt-[4px] justify-space-between border-1px border-gray-200 pr-[12px] pb-[4px] pl-[12px]  gap-[10px]">
          <FiZap  className="text-black w-[ 8.11px] h-[15px] top-[3.24px] left-[6.94px]" />
          Picks
        </span>

        <FiChevronDown 
          size={16}
          className={`transition-transform ${showPicks ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Expand Sections */}
      {showPicks && (
        <div className="flex flex-col gap-4">
          {Object.keys(menuItems).map((section) => (
            <div key={section} className="border-b border-gray-200 pb-2">
              
              {/* Section Title */}
              <div
                className="flex justify-between bg-gray-200 items-center cursor-pointer px-2 py-1 text-xs font-bold text-gray-700 uppercase tracking-wide  rounded"
                onClick={() => setActiveMenu(activeMenu === section ? null : section)}
              >
                {section}
                <FiChevronDown
                  size={14}
                  className={`transition-transform ${activeMenu === section ? "rotate-180" : "rotate-0"}`}
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
                          ? " text-white"
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

// import React, { useState } from "react";
// import { FaBolt, FaChevronDown } from "react-icons/fa";

// const sidebarItems = [
//   {
//     title: "GAME OPERATIONS",
//     subItems: ["Props", "Prop History", "Players", "Teams", "Events", "Leagues", "Sports", "Tee Time Groups", "Tournaments"],
//   },
//   {
//     title: "PLAYER OPERATIONS",
//     subItems: ["Lineups", "Creator Cash", "Picks Users", "Limits", "KYC Logs", "Geo Logs", "Risk Flags", "Suspended", "Banned", "Self Excluded"],
//   },
//   { title: "FINANCE", subItems: ["Balances", "Transactions", "Disputes", "Chargebacks", "Clawbacks", "Promo Codes"] },
// ];

// export default function Sidebar() {
//   const [openMenus, setOpenMenus] = useState({});

//   const toggleMenu = (index) => {
//     setOpenMenus((prev) => ({ ...prev, [index]: !prev[index] }));
//   };

//   return (
//     <aside className="w-64 bg-gray-50 min-h-screen p-4 border-r border-gray-200">
//       <div className="flex items-center mb-6">
//         <FaBolt className="text-2xl mr-2 text-yellow-500" />
//         <span className="font-bold text-lg text-gray-800">ARENA</span>
//       </div>
//       {sidebarItems.map((menu, idx) => (
//         <div key={idx} className="mb-4">
//           <div
//             className="flex justify-between items-center cursor-pointer px-2 py-1 hover:bg-blue-100 rounded"
//             onClick={() => toggleMenu(idx)}
//           >
//             <span className="font-semibold text-gray-700">{menu.title}</span>
//             <FaChevronDown
//               className={`transition-transform ${openMenus[idx] ? "rotate-180" : ""}`}
//             />
//           </div>
//           {openMenus[idx] && (
//             <ul className="pl-4 mt-1">
//               {menu.subItems.map((sub, sidx) => (
//                 <li
//                   key={sidx}
//                   className="py-1 px-2 hover:bg-blue-500 hover:text-white rounded cursor-pointer text-sm"
//                 >
//                   {sub}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </aside>
//   );
// }

