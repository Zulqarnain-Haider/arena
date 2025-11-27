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




import React from "react";

export default function Pagination() {
  return (
    <div className="flex flex-wrap justify-end mt-4 gap-2">
      <button className="border px-2 sm:px-3 py-1 rounded hover:bg-gray-200 transition">
        {"<"}
      </button>
      <button className="border px-2 sm:px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition">
        2
      </button>
      <button className="border px-2 sm:px-3 py-1 rounded hover:bg-gray-200 transition">
        3
      </button>
      <button className="border px-2 sm:px-3 py-1 rounded hover:bg-gray-200 transition">
        {">"}
      </button>
    </div>
  );
}
