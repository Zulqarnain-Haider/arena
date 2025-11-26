// import React from 'react';
// import Sidebar from '../components/Sidebar';
// import Header from '../components/Header';
// import MainContent from '../components/MainContents';

// const ArenaDashboard = () => {
//   return (
//     <div className="flex flex-col h-screen bg-gray-100">
//       <Header />
//       <div className="flex-1 flex  overflow-hidden">
        
//         <Sidebar />
//         <MainContent />
//       </div>
//     </div>
//   );
// };

// export default ArenaDashboard;

// App.jsx
import React, { useState } from "react";
import { FaBolt, FaCheck, FaFire, FaChevronDown } from "react-icons/fa";

const sidebarItems = [
  { title: "GAME OPERATIONS", subItems: ["Props", "Prop History", "Players", "Teams", "Events", "Leagues", "Sports", "Tee Time Groups", "Tournaments"] },
  { title: "PLAYER OPERATIONS", subItems: ["Lineups", "Creator Cash", "Picks Users", "Limits", "KYC Logs", "Geo Logs", "Risk Flags", "Suspended", "Banned", "Self Excluded"] },
  { title: "FINANCE", subItems: ["Balances", "Transactions", "Disputes", "Chargebacks", "Clawbacks", "Promo Codes"] },
];

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
    gameStatus: "In-Progress",
    report: false,
    metrics: "22 44%",
    uniqueId: "ltkm-wq8z-dpxr-viyc-nb3e-7cwl",
  },
  // Add more rows here
];

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4">
      <div className="flex items-center mb-6">
        <FaBolt className="text-2xl mr-2" />
        <span className="font-bold text-lg">ARENA</span>
      </div>
      {sidebarItems.map((item, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="text-gray-700 font-semibold mb-2">{item.title}</h3>
          <ul>
            {item.subItems.map((sub, subIdx) => (
              <li key={subIdx} className="py-1 px-2 hover:bg-blue-500 hover:text-white rounded cursor-pointer">
                {sub}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}

function TableRow({ row }) {
  return (
    <tr className="border-b">
      <td className="p-2 text-center">
        <input type="checkbox" checked={row.post} readOnly />
      </td>
      <td className="p-2 text-center">
        {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
      </td>
      <td className="p-2 text-center">{row.cal}</td>
      <td className="p-2">{row.player}</td>
      <td className="p-2 text-center">{row.propType}</td>
      <td className="p-2 text-center">{row.line}</td>
      <td className="p-2 text-center">{row.actual}</td>
      <td className="p-2 text-center">{row.matchup}</td>
      <td className="p-2 text-center">{row.gameStatus}</td>
      <td className="p-2 text-center">
        {row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}
      </td>
      <td className="p-2 text-center">{row.metrics}</td>
      <td className="p-2 text-center">{row.uniqueId}</td>
      <td className="p-2 text-center">
        <FaChevronDown className="cursor-pointer" />
      </td>
    </tr>
  );
}

function MainContent() {
  return (
    <main className="flex-1 p-6 overflow-auto">
      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-4">
        <select className="border p-2 rounded">
          <option>NFL</option>
          <option>NBA</option>
        </select>
        <select className="border p-2 rounded">
          <option>All Props</option>
        </select>
        <select className="border p-2 rounded">
          <option>Not started</option>
          <option>In Progress</option>
          <option>Final</option>
        </select>
        <select className="border p-2 rounded">
          <option>Post: All</option>
        </select>
        <select className="border p-2 rounded">
          <option>Trend: All</option>
        </select>
        <input type="text" placeholder="Search Player" className="border p-2 rounded flex-1" />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2">Post</th>
              <th className="p-2">Trend</th>
              <th className="p-2">Cal</th>
              <th className="p-2">Player</th>
              <th className="p-2">Prop Type</th>
              <th className="p-2">Line</th>
              <th className="p-2">Actual</th>
              <th className="p-2">Matchup</th>
              <th className="p-2">Game Status</th>
              <th className="p-2">Report</th>
              <th className="p-2">Metrics</th>
              <th className="p-2">Unique ID</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <TableRow key={idx} row={row} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4 gap-2">
        <button className="border px-3 py-1 rounded">{"<"}</button>
        <button className="border px-3 py-1 rounded bg-blue-500 text-white">2</button>
        <button className="border px-3 py-1 rounded">3</button>
        <button className="border px-3 py-1 rounded">{">"}</button>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <MainContent />
    </div>
  );
}
