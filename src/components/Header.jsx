// import React from 'react';
// import { FiChevronDown } from 'react-icons/fi';

// function Header() {
//   return (
//     <header className="bg-gray-200 shadow-sm border-b border-gray-200 p-2">
//       <div className="flex justify-between items-center">
//         {/* <h1 className="text-xl ml-2 font-bold w-119.94px h-24.95px text-black ">ARENA</h1> */}
//         <h1 className="text-xl  font-bold text-black w-[120px] h-[25px]">
//   ARENA
// </h1>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-md transition">
//               <span>User</span>
//               <FiChevronDown size={14} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;

// import React from "react";
// import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

// export default function Header() {
//   return (
//     <header className="flex justify-between items-center bg-white px-6 py-3 shadow-md sticky top-0 z-10">
//       <div className="flex items-center gap-4">
//         <h1 className="font-extrabold text-xl text-gray-800">ARENA</h1>
        
//       </div>
//       <div className="flex items-center gap-4">
//         <FaBell className="text-gray-600 text-lg cursor-pointer" />
//         <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
//       </div>
//     </header>
//   );
// }



import React from "react";
import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white px-6 py-3 shadow-md sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <h1 className="font-extrabold text-xl text-gray-800">ARENA</h1>
      </div>
      <div className="flex items-center gap-4">
        <FaBell className="text-gray-600 text-lg cursor-pointer" />
        
        {/* Custom image icon */}
        <img
          src="https://i.postimg.cc/tC17JpcD/arena-bk.jpg"
          alt="Groups Icon"
          className="w-6 h-6 cursor-pointer" // adjust size as needed
        />

        <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
      </div>
    </header>
  );
}
