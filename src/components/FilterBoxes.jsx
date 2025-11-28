








import React, { useState } from "react";
import { FaBolt, FaChevronDown, FaSearch } from "react-icons/fa";

export default function FilterBoxes() {
  const [selectedLeague, setSelectedLeague] = useState("NFL");
  const [selectedProps, setSelectedProps] = useState("All Props");
  const [selectedStatus, setSelectedStatus] = useState("Not started");
  const [selectedPost, setSelectedPost] = useState("Post: All");
  const [selectedTrend, setSelectedTrend] = useState("Trend: All");
  const [selectedPlayers, setSelectedPlayers] = useState("Players");
  
  const [openDropdown, setOpenDropdown] = useState(null);

  const leagues = ["NFL", "NBA", "MLB", "NHL", "EPL"];
  const props = ["All Props", "Points", "Rebounds", "Assists", "Goals"];
  const statuses = ["Not started", "In Progress", "Final", "All"];
  const posts = ["Post: All", "Posted", "Not Posted"];
  const trends = ["Trend: All", "Trending", "Hot", "Normal"];
  const players = ["Players", "Active", "Inactive", "All Players"];

  const handleDropdownClick = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleOptionClick = (setter, value, dropdownName) => {
    setter(value);
    setOpenDropdown(null);
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-full">
      {/* Main Filter Row */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 lg:gap-0 mb-4">
        
        {/* Left Side Filters */}
        <div className="flex flex-wrap items-center gap-0 w-full lg:w-auto">
          {/* NFL Dropdown */}
          <div className="relative dropdown-container flex-1 lg:flex-none min-w-[128px] lg:min-w-[110px]">
            <div 
              className="flex items-center gap-2 border border-gray-300 bg-white rounded-l-lg lg:rounded-l-lg px-3 py-2 cursor-pointer w-full"
              onClick={() => handleDropdownClick('league')}
            >
              <span className="text-black font-medium text-sm truncate">{selectedLeague}</span>
              <FaChevronDown className="text-black ml-7 flex-shrink-0" />
            </div>
            {openDropdown === 'league' && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                {leagues.map((league) => (
                  <div
                    key={league}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleOptionClick(setSelectedLeague, league, 'league')}
                  >
                    {league}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* All Props Dropdown */}
          {/* <div className="relative dropdown-container flex-1 lg:flex-none min-w-[120px] lg:min-w-[110px]">
            <div 
              className="flex items-center justify-between bg-white border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer w-full"
              onClick={() => handleDropdownClick('props')}
            >
              <span className="text-black font-medium text-sm truncate">{selectedProps}</span>
              <FaChevronDown className="text-black ml-1 flex-shrink-0" />
            </div>
            {openDropdown === 'props' && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                {props.map((prop) => (
                  <div
                    key={prop}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleOptionClick(setSelectedProps, prop, 'props')}
                  >
                    {prop}
                  </div>
                ))}
              </div>
            )}
          </div> */}
          <div className="relative dropdown-container flex-1 lg:flex-none min-w-[160px] lg:min-w-[240px]">
  <div 
    className="flex items-center justify-between bg-white border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer w-full"
    onClick={() => handleDropdownClick('props')}
  >
    <span className="text-black font-medium text-sm truncate">{selectedProps}</span>
    <FaChevronDown className="text-black ml-1 flex-shrink-0" />
  </div>

  {openDropdown === 'props' && (
    <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
      {props.map((prop) => (
        <div
          key={prop}
          className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
          onClick={() => handleOptionClick(setSelectedProps, prop, 'props')}
        >
          {prop}
        </div>
      ))}
    </div>
  )}
</div>


          {/* Not started Dropdown */}
          <div className="relative dropdown-container flex-1 lg:flex-none min-w-[120px] lg:min-w-[140px]">
            <div 
              className="flex items-center justify-between bg-white border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer w-full"
              onClick={() => handleDropdownClick('status')}
            >
              <span className="text-black font-medium text-sm truncate">{selectedStatus}</span>
              <FaChevronDown className="text-black ml-1 flex-shrink-0" />
            </div>
            {openDropdown === 'status' && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                {statuses.map((status) => (
                  <div
                    key={status}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleOptionClick(setSelectedStatus, status, 'status')}
                  >
                    {status}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Post: All Dropdown */}
          <div className="relative dropdown-container flex-1 lg:flex-none min-w-[120px] lg:min-w-[140px]">
            <div 
              className="flex items-center justify-between bg-white border-t border-b border-r border-gray-300 px-3 py-2 cursor-pointer w-full"
              onClick={() => handleDropdownClick('post')}
            >
              <span className="text-black font-medium text-sm truncate">{selectedPost}</span>
              <FaChevronDown className="text-black ml-1 flex-shrink-0" />
            </div>
            {openDropdown === 'post' && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                {posts.map((post) => (
                  <div
                    key={post}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleOptionClick(setSelectedPost, post, 'post')}
                  >
                    {post}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Trend: All Dropdown */}
          <div className="relative dropdown-container flex-1 lg:flex-none min-w-[120px] lg:min-w-[140px]">
            <div 
              className="flex items-center justify-between bg-white border border-gray-300 rounded-r-lg lg:rounded-r-lg px-3 py-2 cursor-pointer w-full"
              onClick={() => handleDropdownClick('trend')}
            >
              <span className="text-black font-medium text-sm truncate">{selectedTrend}</span>
              <FaChevronDown className="text-black ml-1 flex-shrink-0" />
            </div>
            {openDropdown === 'trend' && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                {trends.map((trend) => (
                  <div
                    key={trend}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleOptionClick(setSelectedTrend, trend, 'trend')}
                  >
                    {trend}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side Filters - Players Dropdown and Search */}
        <div className="flex flex-col sm:flex-row items-start  sm:items-center  w-full lg:w-auto lg:ml-auto mt-3 lg:mt-0">
          {/* Players Dropdown */}
          <div className="relative dropdown-container w-full sm:w-auto min-w-[140px]">
            <div 
              className="flex items-center justify-between bg-white border border-gray-300 rounded-lg px-3 py-2 cursor-pointer w-full"
              onClick={() => handleDropdownClick('players')}
            >
              <span className="text-black font-medium text-sm truncate">{selectedPlayers}</span>
              <FaChevronDown className="text-black ml-1 flex-shrink-0" />
            </div>
            {openDropdown === 'players' && (
              <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                {players.map((player) => (
                  <div
                    key={player}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    onClick={() => handleOptionClick(setSelectedPlayers, player, 'players')}
                  >
                    {player}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Player Input with Icon */}
          
          <div className="relative bg-white w-full sm:w-auto">
  <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-black" />
  <input
    type="text"
    placeholder="Search Player"
    className="border border-gray-300 rounded-lg pl-10 pr-3 py-1.5 shadow-sm outline-none w-full sm:w-[300px]"
  />
</div>

        </div>
      </div>

    </div>
  );
}