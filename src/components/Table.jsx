




// import React from "react";
// import { FaFire, FaEllipsisV } from "react-icons/fa";
//           import { FaChevronDown } from "react-icons/fa"; // import the dropdown icon


// export default function Table({ data = [] }) {
//   // Repeat the data 15 times (or 11 as in your example)
//   const repeatedData = Array.from({ length: 13 }, (_, i) => data[i % data.length]);

//   return (
//     <div className="w-full overflow-x-auto bg-transparent">
//       <div className="min-w-[1100px] bg-white rounded-lg shadow-md p-4">

//         {/* TOOLBAR */}
//         <div className="flex items-center gap-3 mb-4">
//           <label className="inline-flex items-center gap-2 cursor-pointer select-none">
//             <input type="checkbox" readOnly className="w-5 h-5 rounded border border-gray-300 accent-indigo-500" />
//           </label>
//           {/* <button type="button" className="p-2 rounded-md hover:bg-gray-100 transition">
//             <FaEllipsisV className="w-4 h-4 text-black" />
//           </button> */}


// <button type="button" className="p-2 rounded-md hover:bg-gray-100 transition">
//   <FaChevronDown className="w-4 h-4 text-black" />
// </button>

//           <div className="flex items-center gap-2">
//             <button className="px-3 py-1 text-sm rounded-md bg-gray-500 hover:bg-gray-600 text-white transition">
//               Post
//             </button>
//             <button className="px-3 py-1 text-sm rounded-md border bg-gray-500 hover:bg-gray-600 text-white transition">
//               Unpost
//             </button>
//             <button className="px-3 py-1 text-sm rounded-md bg-gray-500 hover:bg-gray-600 text-white transition">
//               Apply Trending
//             </button>
//             <button className="px-3 py-1 text-sm rounded-md border bg-gray-500 hover:bg-gray-600 text-white transition">
//               Remove Trending
//             </button>
//           </div>
//         </div>

//         {/* TABLE */}
//         <table className="min-w-full table-auto">
//           <thead className="sticky top-0 bg-white text-sm text-black">
//             <tr>
//               <th className="text-center text-white w-[0px]">A</th>
//               <th className="p-3 text-center w-[48px]">Post</th>
//               <th className="p-3 text-center w-[64px]">Trend</th>
//               <th className="p-3 text-center w-[80px]">Cal</th>
//               <th className="p-3 text-left w-[120px]">Player</th>
//               <th className="p-3 text-center w-[120px]">Prop Type</th>
//               <th className="p-3 text-center w-[72px]">Line</th>
//               <th className="p-3 text-center w-[72px]">Actual</th>
//               <th className="p-3 text-center w-[72px]">Matchup</th>
//               <th className="p-3 text-center w-[120px]">Game Status</th>
//               <th className="p-3 text-center w-[96px]">Report</th>
//               <th className="p-3 text-center w-[140px]">Metrics</th>
//               <th className="p-3 text-left w-[200px]">Unique ID</th>
//               <th className="p-3 text-center w-[64px]">Actions</th>
//             </tr>
//           </thead>

//           <tbody className="text-sm text-black">
//             {repeatedData.map((row, idx) => {
//               // Determine Trend button style: two active, two inactive, repeat
//               const groupIndex = Math.floor(idx / 2); // Each group of 2 rows
//               const isActive = groupIndex % 2 === 0;  // Alternate every 2 rows

//               return (
//                 <tr key={`${row.uniqueId ?? idx}-${idx}`} className="cursor-pointer transition-colors">

//                   {/* NEW Action Button */}
//                   <td className="text-center">
//                     <input type="checkbox" readOnly className="w-5 h-5 rounded accent-indigo-500" />
//                   </td>

//                   {/* Post */}
//                   <td className="p-2 text-center">
//                     <input type="checkbox" readOnly className="w-5 h-5 rounded accent-indigo-500" />
//                   </td>

//                   {/* Trend */}
//                   <td className="p-2 text-center flex justify-center gap-2">
//                     <button
//                       className={`w-6 h-6 flex items-center justify-center rounded border transition ${
//                         row.trend=="trending"
//                           ? "border-gray-900 bg-black text-red-500"
//                           : "border-gray-200 bg-transparent text-gray-400"
//                       }`}
//                     >
//                       <FaFire className="w-4 h-4" />
//                     </button>
//                   </td>

//                   {/* Cal */}
//                   <td className="p-2 text-center">{row.cal}</td>

//                   {/* Player */}
//                   <td className="p-2">
//                     <div className="flex items-center gap-3">
//                       <div className="flex flex-col">
//                         <span className="text-black font-medium leading-tight">{row.player}</span>
//                         {row.sub && <span className="text-xs text-black">{row.sub}</span>}
//                       </div>
//                     </div>
//                   </td>

//                   {/* Prop Type */}
//                   <td className="p-2 text-center">
//                     <span className="inline-block text-xs px-2 py-1 text-black">{row.propType}</span>
//                   </td>

//                   {/* Line */}
//                   <td className="p-2 text-center">{row.line}</td>

//                   {/* Actual */}
//                   <td className="p-2 text-center">{row.actual}</td>

//                   {/* Matchup */}
//                   <td className="p-2 text-center">{row.matchup}</td>

//                   {/* Game Status */}
//                   <td className="p-2 text-center">
//                     <span className="text-black text-xs px-2 py-1 font-medium">{row.gameStatus}</span>
//                   </td>

//                   {/* Report */}
//                   <td className="p-2 text-center">
//                     <input type="checkbox" readOnly className="w-5 h-5 rounded accent-indigo-500" />
//                   </td>

//                   {/* Metrics */}
//                   <td className="p-2 text-center">
//                     <div className="text-xs text-black">{row.metrics}</div> 
//                   </td>

//                   {/* Unique ID */}
//                   <td className="p-2 text-left text-black">{row.uniqueId}</td>

//                   {/* Row Actions */}
//                   <td className="p-2 text-center">
//                     <button className="p-2 rounded-md hover:bg-gray-700/60 transition">
//                       <FaEllipsisV className="w-4 h-4" />
//                     </button>
//                   </td>

//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }









import React from "react";
import { FaFire, FaEllipsisV, FaChevronDown } from "react-icons/fa";

export default function Table({ data = [] }) {
  const repeatedData = Array.from({ length: 19 }, (_, i) => data[i % data.length]);

  return (
    <div className="w-full bg-transparent">
      {/* Table Container */}
      <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md p-4">

        {/* TOOLBAR */}
        <div className="flex flex-wrap items-center ml-3.5 gap-2 mb-4">
          <label className="inline-flex items-center gap-2 cursor-pointer select-none">
            <input type="checkbox" readOnly className="w-5 h-5 rounded border border-gray-300 accent-indigo-500" />
          </label>

          <button type="button" className="p-2 rounded-md transition">
            <FaChevronDown className="w-5 h-5 text-black" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mt-2 sm:mt-0">
            <button className="px-3 py-1 text-xs sm:text-sm rounded-md bg-gray-500 hover:bg-gray-600 text-white transition">
              Post
            </button>
            <button className="px-3 py-1 text-xs sm:text-sm rounded-md border bg-gray-500 hover:bg-gray-600 text-white transition">
              Unpost
            </button>
            <button className="px-3 py-1 text-xs sm:text-sm rounded-md bg-gray-500 hover:bg-gray-600 text-white transition">
              Apply Trending
            </button>
            <button className="px-3 py-1 text-xs sm:text-sm rounded-md border bg-gray-500 hover:bg-gray-600 text-white transition">
              Remove Trending
            </button>
          </div>
        </div>

        {/* TABLE */}
        <table className="min-w-full table-auto text-xs sm:text-sm">
          <thead className="sticky top-0  text-black">
            <tr>
              <th className="text-center px-2 text-white py-1">A</th>
              <th className="text-center px-2 py-1">Post</th>
              <th className="text-center px-2 py-1">Trend</th>
              <th className="text-center px-2 py-1">Cal</th>
              <th className="text-left px-2 py-1">Player</th>
              <th className="text-center px-2 py-1">Prop Type</th>
              <th className="text-center px-2 py-1">Line</th>
              <th className="text-center px-2 py-1">Actual</th>
              <th className="text-center px-2 py-1">Matchup</th>
              <th className="text-center px-2 py-1">Game Status</th>
              {/* Report, Metrics, Unique ID ko mobile par bhi show karein */}
              <th className="text-center px-2 py-1">Report</th>
              <th className="text-center px-2 py-1">Metrics</th>
              <th className="text-left px-2 py-1">Unique ID</th>
              <th className="text-center px-2 py-1">Actions</th>
            </tr>
          </thead>

          <tbody>
            {repeatedData.map((row, idx) => {
              const groupIndex = Math.floor(idx / 2);
              const isActive = groupIndex % 2 === 0;

              return (
                <tr key={`${row.uniqueId ?? idx}-${idx}`} className="transition-colors">

                  {/* Checkbox */}
                  <td className="text-center px-1 py-1">
                    <input type="checkbox" readOnly className="w-5 sm:w-5 h-5 sm:h-5 rounded accent-indigo-500" />
                  </td>

                  {/* Post */}
                  <td className="text-center px-1 py-1">
                    <input type="checkbox" readOnly className="w-5 sm:w-5 h-5 sm:h-5 rounded accent-indigo-500" />
                  </td>

                  {/* Trend */}
                  <td className="text-center px-1 py-1 flex justify-center">
                    <button
                      className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded border transition ${
                        row.trend === "trending"
                          ? "border-gray-900 bg-black text-red-500"
                          : "border-gray-200 bg-transparent text-gray-400"
                      }`}
                    >
                      <FaFire className="w-3 sm:w-5 h-3 sm:h-5 " />
                    </button>
                  </td>

                  {/* Cal */}
                  <td className="text-center px-1 py-1">{row.cal}</td>

                  {/* Player */}
                  <td className="px-1 py-1 break-words max-w-[120px] sm:max-w-none">
                    <div className="flex flex-col">
                      <span className="text-black font-medium">{row.player}</span>
                      {row.sub && <span className="text-xs text-gray-600">{row.sub}</span>}
                    </div>
                  </td>

                  {/* Prop Type */}
                  <td className="text-center px-1 py-1">{row.propType}</td>

                  {/* Line */}
                  <td className="text-center px-1 py-1">{row.line}</td>

                  {/* Actual */}
                  <td className="text-center px-1 py-1">{row.actual}</td>

                  {/* Matchup */}
                  <td className="text-center px-1 py-1 break-words max-w-[100px] sm:max-w-none">{row.matchup}</td>

                  {/* Game Status */}
                  <td className="text-center px-1 py-1">
                    <div className="flex items-center justify-center gap-1">
                      {idx < 7 ? (
                        <>
                          <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span>
                          <span className="text-[10px] sm:text-sm">In Progress</span>
                        </>
                      ) : (
                        <span className="text-[10px] sm:text-sm">Final</span>
                      )}
                    </div>
                  </td>

                  {/* Report - Mobile par bhi show */}
                  {/* <td className="text-center px-1 py-1">
                    <input type="checkbox" readOnly className="w-5 h-5 rounded accent-indigo-500" />
                  </td> */}
                               <td className="text-center px-1 py-1">
  <div className="relative inline-block group">
    <input 
      type="checkbox" 
      readOnly 
      className="w-5   h-5 rounded accent-indigo-500 cursor-pointer peer" 
    />
    {/* CSS se show/hide - Right side pe */}
    <span className="absolute left-full ml-1 top-1/2 -translate-y-1/2  text-black text-xs px-2 py-1 rounded-md opacity-0 peer-checked:opacity-100 transition-opacity duration-300 pointer-events-none z-10 whitespace-nowrap">
      Rescue
    </span>
  </div>
</td>

                  {/* Metrics - Mobile par bhi show */}
                  <td className="text-center px-1 py-1 text-xs">{row.metrics}</td>

                  {/* Unique ID - Mobile par bhi show */}
                  <td className="px-1 py-1 break-words text-xs max-w-[80px] truncate">{row.uniqueId}</td>

                  {/* Actions */}
                  <td className="text-center px-1 py-1">
                    <button className="p-1 rounded-md hover:bg-gray-200 transition">
                      <FaEllipsisV className="w-4 h-4" />
                    </button>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}






