import React from "react";
import { FaFire, FaCheck, FaChevronDown } from "react-icons/fa";

export default function Table({ data }) {
  return (
    <div className="overflow-x-auto b rounded">
      <table className="min-w-full">
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
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="text-center p-2">
                <input type="checkbox" checked={row.post} readOnly />
              </td>
              <td className="text-center p-2">
                {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
              </td>
              <td className="text-center p-2">{row.cal}</td>
              <td className="p-2">{row.player}</td>
              <td className="text-center p-2">{row.propType}</td>
              <td className="text-center p-2">{row.line}</td>
              <td className="text-center p-2">{row.actual}</td>
              <td className="text-center p-2">{row.matchup}</td>
              <td className="text-center p-2">{row.gameStatus}</td>
              <td className="text-center p-2">{row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}</td>
              <td className="text-center p-2">{row.metrics}</td>
              <td className="text-center p-2">{row.uniqueId}</td>
              <td className="text-center p-2">
                <FaChevronDown className="cursor-pointer" />
              </td>
            </tr>



          ))}

          {data.map((row, idx) => (
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="text-center p-2">
                <input type="checkbox" checked={row.post} readOnly />
              </td>
              <td className="text-center p-2">
                {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
              </td>
              <td className="text-center p-2">{row.cal}</td>
              <td className="p-2">{row.player}</td>
              <td className="text-center p-2">{row.propType}</td>
              <td className="text-center p-2">{row.line}</td>
              <td className="text-center p-2">{row.actual}</td>
              <td className="text-center p-2">{row.matchup}</td>
              <td className="text-center p-2">{row.gameStatus}</td>
              <td className="text-center p-2">{row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}</td>
              <td className="text-center p-2">{row.metrics}</td>
              <td className="text-center p-2">{row.uniqueId}</td>
              <td className="text-center p-2">
                <FaChevronDown className="cursor-pointer" />
              </td>
            </tr>



          ))}

          {data.map((row, idx) => (
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="text-center p-2">
                <input type="checkbox" checked={row.post} readOnly />
              </td>
              <td className="text-center p-2">
                {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
              </td>
              <td className="text-center p-2">{row.cal}</td>
              <td className="p-2">{row.player}</td>
              <td className="text-center p-2">{row.propType}</td>
              <td className="text-center p-2">{row.line}</td>
              <td className="text-center p-2">{row.actual}</td>
              <td className="text-center p-2">{row.matchup}</td>
              <td className="text-center p-2">{row.gameStatus}</td>
              <td className="text-center p-2">{row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}</td>
              <td className="text-center p-2">{row.metrics}</td>
              <td className="text-center p-2">{row.uniqueId}</td>
              <td className="text-center p-2">
                <FaChevronDown className="cursor-pointer" />
              </td>
            </tr>



          ))}


          {data.map((row, idx) => (
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="text-center p-2">
                <input type="checkbox" checked={row.post} readOnly />
              </td>
              <td className="text-center p-2">
                {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
              </td>
              <td className="text-center p-2">{row.cal}</td>
              <td className="p-2">{row.player}</td>
              <td className="text-center p-2">{row.propType}</td>
              <td className="text-center p-2">{row.line}</td>
              <td className="text-center p-2">{row.actual}</td>
              <td className="text-center p-2">{row.matchup}</td>
              <td className="text-center p-2">{row.gameStatus}</td>
              <td className="text-center p-2">{row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}</td>
              <td className="text-center p-2">{row.metrics}</td>
              <td className="text-center p-2">{row.uniqueId}</td>
              <td className="text-center p-2">
                <FaChevronDown className="cursor-pointer" />
              </td>
            </tr>



          ))}


          {data.map((row, idx) => (
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="text-center p-2">
                <input type="checkbox" checked={row.post} readOnly />
              </td>
              <td className="text-center p-2">
                {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
              </td>
              <td className="text-center p-2">{row.cal}</td>
              <td className="p-2">{row.player}</td>
              <td className="text-center p-2">{row.propType}</td>
              <td className="text-center p-2">{row.line}</td>
              <td className="text-center p-2">{row.actual}</td>
              <td className="text-center p-2">{row.matchup}</td>
              <td className="text-center p-2">{row.gameStatus}</td>
              <td className="text-center p-2">{row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}</td>
              <td className="text-center p-2">{row.metrics}</td>
              <td className="text-center p-2">{row.uniqueId}</td>
              <td className="text-center p-2">
                <FaChevronDown className="cursor-pointer" />
              </td>
            </tr>



          ))}

          {data.map((row, idx) => (
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="text-center p-2">
                <input type="checkbox" checked={row.post} readOnly />
              </td>
              <td className="text-center p-2">
                {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
              </td>
              <td className="text-center p-2">{row.cal}</td>
              <td className="p-2">{row.player}</td>
              <td className="text-center p-2">{row.propType}</td>
              <td className="text-center p-2">{row.line}</td>
              <td className="text-center p-2">{row.actual}</td>
              <td className="text-center p-2">{row.matchup}</td>
              <td className="text-center p-2">{row.gameStatus}</td>
              <td className="text-center p-2">{row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}</td>
              <td className="text-center p-2">{row.metrics}</td>
              <td className="text-center p-2">{row.uniqueId}</td>
              <td className="text-center p-2">
                <FaChevronDown className="cursor-pointer" />
              </td>
            </tr>



          ))}

          {data.map((row, idx) => (
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="text-center p-2">
                <input type="checkbox" checked={row.post} readOnly />
              </td>
              <td className="text-center p-2">
                {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
              </td>
              <td className="text-center p-2">{row.cal}</td>
              <td className="p-2">{row.player}</td>
              <td className="text-center p-2">{row.propType}</td>
              <td className="text-center p-2">{row.line}</td>
              <td className="text-center p-2">{row.actual}</td>
              <td className="text-center p-2">{row.matchup}</td>
              <td className="text-center p-2">{row.gameStatus}</td>
              <td className="text-center p-2">{row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}</td>
              <td className="text-center p-2">{row.metrics}</td>
              <td className="text-center p-2">{row.uniqueId}</td>
              <td className="text-center p-2">
                <FaChevronDown className="cursor-pointer" />
              </td>
            </tr>



          ))}

          {data.map((row, idx) => (
            <tr key={idx} className=" hover:bg-gray-50">
              <td className="text-center p-2">
                <input type="checkbox" checked={row.post} readOnly />
              </td>
              <td className="text-center p-2">
                {row.trend === "trending" ? <FaFire className="text-orange-500 mx-auto" /> : row.trend === "hot" ? <FaFire className="text-red-500 mx-auto" /> : <FaCheck className="text-gray-400 mx-auto" />}
              </td>
              <td className="text-center p-2">{row.cal}</td>
              <td className="p-2">{row.player}</td>
              <td className="text-center p-2">{row.propType}</td>
              <td className="text-center p-2">{row.line}</td>
              <td className="text-center p-2">{row.actual}</td>
              <td className="text-center p-2">{row.matchup}</td>
              <td className="text-center p-2">{row.gameStatus}</td>
              <td className="text-center p-2">{row.report && <span className="bg-blue-500 text-white px-2 py-1 rounded">Rescue</span>}</td>
              <td className="text-center p-2">{row.metrics}</td>
              <td className="text-center p-2">{row.uniqueId}</td>
              <td className="text-center p-2">
                <FaChevronDown className="cursor-pointer" />
              </td>
            </tr>



          ))}

          
        </tbody>
      </table>
    </div>
  );
}
