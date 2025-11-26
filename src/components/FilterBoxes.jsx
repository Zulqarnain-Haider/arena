



// import React from "react";
// import { FaBolt, FaChevronDown } from "react-icons/fa";

// export default function FilterBoxes() {
//   return (
//     <div className="flex items-center mb-4">
//       {/* NFL */}
//       <div className="flex items-center gap-2 border border-gray-300 rounded-l-lg px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
//         <FaBolt className="text-yellow-500" />
//         <span className="text-gray-700 font-medium text-sm">NFL</span>
//         <FaChevronDown className="text-gray-400 ml-1" />
//       </div>

//       {/* All Props */}
//       <div className="flex items-center justify-between border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
//         <span className="text-gray-700 font-medium text-sm">All Props</span>
//         <FaChevronDown className="text-gray-400 ml-1" />
//       </div>

//       {/* Not started */}
//       <div className="flex items-center justify-between border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
//         <span className="text-gray-700 font-medium text-sm">Not started</span>
//         <FaChevronDown className="text-gray-400 ml-1" />
//       </div>

//       {/* Post: All */}
//       <div className="flex items-center justify-between border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
//         <span className="text-gray-700 font-medium text-sm">Post: All</span>
//         <FaChevronDown className="text-gray-400 ml-1" />
//       </div>

//       {/* Trend: All */}
//       <div className="flex items-center justify-between border border-gray-300 rounded-r-lg px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
//         <span className="text-gray-700 font-medium text-sm">Trend: All</span>
//         <FaChevronDown className="text-gray-400 ml-1" />
//       </div>

//       {/* Players Dropdown */}
//       <div className="flex items-center ml-120 justify-between border border-gray-300 rounded-lg px-3 py-2 ml-3 cursor-pointer hover:bg-blue-50 min-w-[120px]">
//         <span className="text-gray-700 font-medium text-sm">Players</span>
//         <FaChevronDown className="text-gray-400 ml-1" />
//       </div>

//       {/* Search Player Input */}
//       {/* <input
//         type="text"
//         placeholder="Search Player"
//         className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm outline-none focus:ring-1 focus:ring-blue-400 w-[180px]"
//       /> */}
//       <div className="relative ml-2">
//         <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search Player"
//           className="border border-gray-300 rounded-lg pl-10 pr-3 py-2 shadow-sm outline-none focus:ring-1 focus:ring-blue-400 w-[180px]"
//         />
//       </div>
//     </div>
//   );
// }









import React from "react";
import { FaBolt, FaChevronDown, FaSearch } from "react-icons/fa";

export default function FilterBoxes() {
  return (
    <div className="flex items-center mb-4">
      {/* NFL */}
      <div className="flex items-center gap-2 border border-gray-300 rounded-l-lg px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
        {/* <FaBolt className="text-yellow-500" /> */}
        <span className="text-gray-700 font-medium text-sm">NFL</span>
        <FaChevronDown className="text-gray-400 ml-1" />
      </div>

      {/* All Props */}
      <div className="flex items-center justify-between border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
        <span className="text-gray-700 font-medium text-sm">All Props</span>
        <FaChevronDown className="text-gray-400 ml-1" />
      </div>

      {/* Not started */}
      <div className="flex items-center justify-between border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
        <span className="text-gray-700 font-medium text-sm">Not started</span>
        <FaChevronDown className="text-gray-400 ml-1" />
      </div>

      {/* Post: All */}
      <div className="flex items-center justify-between border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
        <span className="text-gray-700 font-medium text-sm">Post: All</span>
        <FaChevronDown className="text-gray-400 ml-1" />
      </div>

      {/* Trend: All */}
      <div className="flex items-center justify-between border border-gray-300 rounded-r-lg px-3 py-2 cursor-pointer hover:bg-blue-50 min-w-[110px]">
        <span className="text-gray-700 font-medium text-sm">Trend: All</span>
        <FaChevronDown className="text-gray-400 ml-1" />
      </div>

      {/* Players Dropdown */}
      <div className="flex items-center justify-between border ml-[650px] border-gray-300 rounded-lg px-3 py-2 ml-3 cursor-pointer hover:bg-blue-50 min-w-[120px]">
        <span className="text-gray-700 font-medium text-sm">Players</span>
        <FaChevronDown className="text-gray-400 ml-1" />
      </div>

      {/* Search Player Input with Icon */}
      <div className="relative ">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search Player"
          className="border border-gray-300 rounded-lg pl-10 pr-3 py-1.5 shadow-sm outline-none focus:ring-1 focus:ring-blue-400 w-[220px]"
        />
      </div>
    </div>
  );
}
