


// import React from "react";
// import { FaBell, FaUserCircle } from "react-icons/fa";
// import image from "../assets/arena-bk.svg";

// export default function Header() {
//   return (
//     <header className="flex justify-between items-center bg-gray-100 w-[full] h-[62px] border-b border-gray-400 sticky top-0 z-10">
//       <div className="flex items-center gap-4">
//         {/* <h1 className="font-extrabold text-xl text-gray-800">ARENA</h1> */}
//                 <img
//           src={image}
//           alt="Groups Icon"
//           className="w-[120px] ml-4  h-[25px] cursor-pointer" // adjust size as needed
//         />
//       </div>
//       {/* <div className="flex items-center gap-4">
//         <FaBell className="text-gray-600 text-lg cursor-pointer" />
        

//         <FaUserCircle className="text-gray-600 text-2xl cursor-pointer" />
//       </div> */}
//     </header>
//   );
// }



// import React from "react";
// import { FaBell, FaUserCircle } from "react-icons/fa";
// import image from "../assets/arena-bk.svg";

// export default function Header() {
//   return (
//     <header className="flex justify-between items-center bg-gray-100 w-full h-16 sm:h-16 border-b border-gray-400 sticky top-0 z-10 px-4 sm:px-6">
      
//       {/* Logo */}
//       <div className="flex items-center gap-4">
//         <img
//           src={image}
//           alt="Groups Icon"
//           className="w-24 sm:w-32 h-auto cursor-pointer"
//         />
//       </div>

//     </header>
//   );
// }


// import React from "react";
// import { FaChevronDown } from "react-icons/fa";
// import image from "../assets/arena-bk.svg";

// export default function Header() {
//   return (
//     <header className="flex justify-between items-center bg-gray-100 w-full h-16 sm:h-16 border-b border-gray-400 sticky top-0 z-10 px-4 sm:px-6">
      
//       {/* Logo */}
//       <div className="flex items-center gap-4">
//         <img
//           src={image}
//           alt="Groups Icon"
//           className="w-24 sm:w-32 h-auto cursor-pointer"
//         />
//       </div>

//       {/* Right corner button with icon outside */}
//       <div className="flex items-center gap-2">
//         <button className="bg-blue-700 text-white px-4 py-2 rounded-4xl hover:bg-blue-700 transition">
//           TR
//         </button>
//         <FaChevronDown className="w-4 h-4 text-gray-700 cursor-pointer" />
//       </div>

//     </header>
//   );
// }


import React from "react";
import { FaChevronDown } from "react-icons/fa";
import image from "../assets/arena-bk.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-gray-100 w-full border-b border-gray-400 sticky top-0 z-10 px-3 sm:px-6 h-14 sm:h-16">
      
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-4">
        <img
          src={image}
          alt="Groups Icon"
          className="w-20 sm:w-32 h-auto cursor-pointer"
        />
      </div>

      {/* Right corner button with icon outside */}
      <div className="flex items-center gap-1 sm:gap-2">
        <button className="flex-shrink-0 text-sm sm:text-base bg-blue-700 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-blue-800 transition">
          TR
        </button>
        <FaChevronDown className="w-4 h-4 black cursor-pointer" />
      </div>

    </header>
  );
}
