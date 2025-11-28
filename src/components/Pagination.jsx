



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