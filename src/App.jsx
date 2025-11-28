






// import React from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import FilterBoxes from "./components/FilterBoxes";
// import Table from "./components/Table";
// import Pagination from "./components/Pagination";
// const data = [
//   {
//     post: true,
//     trend: "trending",
//     cal: "09/05 16:00",
//     player: "Patrick Mahomes",
//     propType: "Pass Yds",
//     line: 276.5,
//     actual: 322,
//     matchup: "KC vs DEN",
//     gameStatus: "In-Progress",
//     report: false,
//     metrics: "612 99%",
//     uniqueId: "ltkm-wq8z-dpxr-viyc-nb3e-7cwl",
//   },
//   {
//     post: true,
//     trend: "hot",
//     cal: "09/05 16:00",
//     player: "Josh Allen",
//     propType: "Total TD",
//     line: 1.5,
//     actual: 3,
//     matchup: "BUF vs JAX",
//     gameStatus: "Final",
//     report: false,
//     metrics: "22 44%",
//     uniqueId: "ltkm-wq8z-dpxr-viyc-nb3e-7cwl",
//   },
// ];

// export default function App() {
// //   return (
// //     <div className="flex min-h-screen bg-white">
// //       <Sidebar />
// //       <div className="flex-1 flex flex-col">
// //         <Header />
// //         <main className="p-6 overflow-auto">
// //           <FilterBoxes />
// //           <Table data={data} />
// //           <Pagination />
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }
// return (
//   <div className="min-h-screen bg-white flex flex-col">
//     {/* Header full width */}
//     <Header />

//     {/* Content below header */}
//     <div className="flex flex-1">
//       <Sidebar />
//       <main className="flex-1 p-6 overflow-auto bg-gray-100">

//         <FilterBoxes />
//         <Table data={data} />
//         <Pagination />
//       </main>
//     </div>
//   </div>
// );
// }






// import React, { useState } from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import FilterBoxes from "./components/FilterBoxes";
// import Table from "./components/Table";
// import Pagination from "./components/Pagination";

// const data = [
//   {
//     post: true,
//     trend: "trending",
//     cal: "09/05 16:00",
//     player: "Patrick Mahomes",
//     propType: "Pass Yds",
//     line: 276.5,
//     actual: 322,
//     matchup: "KC vs DEN",
//     gameStatus: "In-Progress",
//     report: false,
//     metrics: "612 99%",
//     uniqueId: "ltkm-wq8z-dpxr-viyc-nb3e-7cwl",
//   },
//   {
//     post: true,
//     trend: "hot",
//     cal: "09/05 16:00",
//     player: "Josh Allen",
//     propType: "Total TD",
//     line: 1.5,
//     actual: 3,
//     matchup: "BUF vs JAX",
//     gameStatus: "Final",
//     report: false,
//     metrics: "22 44%",
//     uniqueId: "ltkm-wq8z-dpxr-viyc-nb3e-7cwl",
//   },
// ];

// export default function App() {

//   // ⭐ Sidebar state added here
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-white flex flex-col">

//       {/* Header (controls opening sidebar on mobile) */}
//       <Header setIsOpen={setIsOpen} />

//       {/* Content below header */}
//       <div className="flex flex-1">

//         {/* Sidebar (gets open/close state) */}
//         <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

//         {/* Main Content */}
//         <main className="flex-1 p-6 overflow-auto bg-gray-100">
//           <FilterBoxes />
//           <Table data={data} />
//           <Pagination />
//         </main>

//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import FilterBoxes from "./components/FilterBoxes";
import Table from "./components/Table";
import Pagination from "./components/Pagination";

const data = [
  {
    post: true,
    trend: "trending",
    cal: "09/05 16:00",
    player: "Patrick Mahomes",
    propType: "Pass Yds",
    line: 276.5,
    actual: 322,
    matchup: "KC vs DEN",
    gameStatus: "In-Progress",
    report: false,
    metrics: "612 99%",
    uniqueId: "ltkm-wq8z-dpxr-viyc-nb3e-7cwl",
  },
  {
    post: true,
    trend: "hot",
    cal: "09/05 16:00",
    player: "Josh Allen",
    propType: "Total TD",
    line: 1.5,
    actual: 3,
    matchup: "BUF vs JAX",
    gameStatus: "Final",
    report: false,
    metrics: "22 44%",
    uniqueId: "ltkm-wq8z-dpxr-viyc-nb3e-7cwl",
  },
];

export default function App() {
  // ⭐ Sidebar state
  const [isOpen, setIsOpen] = useState(false);

  // ⭐ LOCK / UNLOCK SCROLL ON SIDEBAR OPEN
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* Header (controls sidebar toggle) */}
      <Header setIsOpen={setIsOpen} />

      <div className="flex flex-1">

        {/* Sidebar */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto bg-gray-100">
          <FilterBoxes />
          <Table data={data} />
          <Pagination />
        </main>

      </div>
    </div>
  );
}
