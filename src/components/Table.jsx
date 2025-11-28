







import React, { useEffect, useState } from "react";
import { FaFire, FaEllipsisV, FaChevronDown } from "react-icons/fa";

export default function Table({ data = [] }) {
  const [props, setProps]=useState([])
  useEffect(() => {
    const userDataPost = async () => {
      const res = await fetch("https://dev-admin-api.arenapicks.com/auth/jwt/create/", {
        method: "POST",
        body: JSON.stringify({
          "username": "admin@join-arena.com",
          "password": "ym|2vYL4n4U>kD>s"
        }),
        headers: {
          "content-type": "application/json"
        }
      })
      if (res.ok) {
        const data = await res.json()
        console.log("jwt response", data);
        const token = data?.access;
        const resProps = await fetch("https://dev-admin-api.arenapicks.com/admin_api/props/", {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'

          }
        })
        if (resProps.ok) {
          const dataProps = await resProps.json()
          console.log("props", dataProps);
          setProps(dataProps?.results)
          // dataProps?.results?.map(async(elem )=> {
          //   console.log(elem?.global_id);
          //   const det = await fetch(`https://dev-admin-api.arenapicks.com/admin_api/props/lineups/${elem.global_id}/`, {
          //     headers: {
          //       'Authorization': `Bearer ${token}`,
          //       'Content-Type': 'application/json'
          //     }
          //   })
          //   if (det.ok) {
          //     const details = await det.json()
          //     console.log(details);

          //   }

          // })

        }
        
      }
      }
      userDataPost()
    }, [])
  const repeatedData = Array.from({ length: 19 }, (_, i) => data[i % data.length]);
console.log("props state", props);

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
            {props?.map((row, idx) => {
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
                      className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded border transition ${row?.is_trending
                          ? "border-gray-900 bg-black text-red-500"
                          : "border-gray-200 bg-transparent text-gray-400"
                        }`}
                    >
                      <FaFire className="w-3 sm:w-5 h-3 sm:h-5 " />
                    </button>
                  </td>

                  {/* Cal */}
                  <td className="text-center px-1 py-1">{row.eventDate?.date}, {row?.eventDate?.time}</td>

                  {/* Player */}
                  <td className="px-1 py-1 break-words max-w-[120px] sm:max-w-none">
                    <div className="flex flex-col">
                      <span className="text-black font-medium">{row?.playerInfo?.playerName}</span>
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
                  <td className="text-center px-1 py-1 break-words max-w-[100px] sm:max-w-none">{row?.playerInfo?.eventName}</td>

                  {/* Game Status */}
                  <td className="text-center px-1 py-1">
                    <div className="flex items-center justify-center gap-1">
                          <span className="text-[10px] sm:text-sm">{row?.eventStatus}</span>
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
                  <td className="text-center px-1 py-1 text-xs">{row?.picks?.overOdds+"  "+ row?.picks?.overPercent+"  " +row?.picks?.underPercent+"  " + row?.picks?.overCount}</td>

                  {/* Unique ID - Mobile par bhi show */}
                  <td className="px-1 py-1 break-words text-xs max-w-[80px] truncate">{row?.global_id}</td>

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






