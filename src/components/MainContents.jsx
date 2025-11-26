// import React from 'react';
// import { FiTable, FiUsers, FiTrendingUp } from 'react-icons/fi';

// function MainContent() {
//   return (
//     <main className="flex-1 p-6 overflow-auto">
//       {/* Picks Section */}
//       <div className="mb-6">
//         <div className="flex text-black flex-wrap gap-2 mb-4">
//           <Dropdown options={["NFL", "NBA", "MLB", "NHL"]} />
//           <Dropdown options={["All Props", "Player Props", "Game Props"]} />
//           <Dropdown options={["Not started", "In Progress", "Completed"]} />
//           <Dropdown options={["Post-All", "Pre-Game"]} />
//           <Dropdown options={["Trend-All", "Trending Up", "Trending Down"]} />
//           <Dropdown options={["Player", "Team"]} />
//           <SearchInput />
//         </div>
//       </div>


//     </main>
//   );
// }

// // Dropdown Component
// const Dropdown = ({ options }) => {
//   return (
//     <div className="relative">
//       <select className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
//         {options.map((option, index) => (
//           <option key={index}>{option}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// // Search Input Component
// const SearchInput = () => {
//   return (
//     <div className="relative">
//       <input 
//         type="text" 
//         placeholder="Search"
//         className="bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//       />
//     </div>
//   );
// };

// // Empty State Component
// const EmptyState = ({ icon, message }) => {
//   return (
//     <div className="p-8 text-center text-gray-500">
//       <div className="opacity-30 mb-2 flex justify-center">
//         {icon}
//       </div>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default MainContent;