// import React from "react";

// export default function Pagination() {
//   return (
//     <div className="flex justify-end mt-4 gap-2">
//       <button className="border px-3 py-1 rounded">{"<"}</button>
//       <button className="border px-3 py-1 rounded bg-blue-500 text-white">2</button>
//       <button className="border px-3 py-1 rounded">3</button>
//       <button className="border px-3 py-1 rounded">{">"}</button>
//     </div>
//   );
// }




// import React from "react";

// export default function Pagination() {
//   return (
//     <div className="flex flex-wrap justify-end mt-4 gap-2">
//       <button className="border px-2 sm:px-3 py-1 rounded hover:bg-gray-200 transition">
//         {"<"}
//       </button>
//       <button className="border px-2 sm:px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
//         2
//       </button>
//       <button className="border px-2 sm:px-3 py-1 rounded hover:bg-gray-200 transition">
//         3
//       </button>
//       <button className="border px-2 sm:px-3 py-1 rounded hover:bg-gray-200 transition">
//         {">"}
//       </button>
//     </div>
//   );
// }



// import React from "react";

// export default function Pagination() {
//   return (
//     <div className="flex justify-between items-center mt-4 flex-wrap gap-3">

//       {/* LEFT PAGINATION BUTTONS */}
//       <div className="flex  gap-1">

//         {/* First Page */}
//         <button className=" py-1 text-sm font-bold ">|&lt;</button>

//         {/* Previous */}
//         <button className="px-1 py-1 text-sm font-bold ">&lt;</button>

//         {/* Page Numbers */}
//         <button className="px-1 py-1 text-sm font-bold ">1</button>

//         {/* Active Page */}
//         <button className="px-1 py-1 text-sm font-bold bg-black text-white">2</button>

//         <button className="px-1 py-1 text-sm font-bold">3</button>
//         <button className="px-1 py-1 text-sm font-bold ">4</button>

//         {/* Ellipsis */}
//         <span className="px-1 py-1 text-sm font-bold">...</span>

//         {/* Last Page Number */}
//         <button className="px-1 py-1 text-smfont-bold font-bold ">22</button>

//         {/* Next */}
//         <button className="px-1 py-1 text-smfont-bold ">&gt;</button>

//         {/* Last */}
//         <button className="px-1 py-1 text-sm font-bold">&gt;|</button>
//       </div>

//       {/* PAGE COUNT TEXT */}
//       <div className="text-sm font-bold">
//         Page 2 of 22
//       </div>

//     </div>
//   );
// }






import React from "react";

export default function Pagination() {
  return (
    <div className="w-full">
      {/* MAIN PAGINATION CONTAINER */}
      <div className="flex flex-col sm:flex-row justify-end items-end sm:items-center gap-3 mt-4">
        
        {/* PAGINATION BUTTONS - Always left aligned */}
        <div className="flex flex-wrap gap-1 justify-start">
          
          {/* First Page */}
          <button className="px-1 py-1 text-sm font-bold  transition-colors">
            |&lt;
          </button>

          {/* Previous */}
          <button className="px-1 py-1 text-sm font-bold  transition-colors">
            &lt;
          </button>

          {/* Page Numbers */}
          <button className="px-1.5 py-1 text-sm font-bold  transition-colors">
            1
          </button>

          {/* Active Page */}
          <button className="px-1.5 py-1 text-sm font-bold bg-black text-white border border-black rounded">
            2
          </button>

          <button className="px-1.5 py-1 text-sm font-bold  transition-colors">
            3
          </button>
          <button className="px-1.5 py-1 text-sm font-bold  transition-colors">
            4
          </button>

          {/* Ellipsis */}
          <span className="px-1.5 py-1 text-sm font-bold flex items-center">...</span>

          {/* Last Page Number */}
          <button className="px-1.5 py-1 text-sm font-bold  transition-colors">
            22
          </button>

          {/* Next */}
          <button className="px-1 py-1 text-sm font-bold  transition-colors">
            &gt;
          </button>

          {/* Last */}
          <button className="px-1 py-1 text-sm font-bold  transition-colors">
            &gt;|
          </button>
        </div>

        {/* PAGE COUNT TEXT - Positioned below on mobile, to the right on larger screens */}
        <div className="text-sm font-bold sm:ml-4">
          Page 2 of 22
        </div>
      </div>
    </div>
  );
}