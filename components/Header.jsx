import React from "react";

const Header = ({
  selectedYear,
  selectedMonth,
  setYear,
  setMonth,
  view,
  setView,
  months,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <select
        className="border rounded px-2 py-1"
        value={selectedYear}
        onChange={(e) => setYear(Number(e.target.value))}
      >
        {[...Array(20)].map((_, i) => (
          <option key={i} value={selectedYear - 10 + i}>
            {selectedYear - 10 + i}
          </option>
        ))}
      </select>
      <select
        className="border rounded px-2 py-1"
        value={selectedMonth}
        onChange={(e) => setMonth(Number(e.target.value))}
      >
        {months.map((month, index) => (
          <option key={index} value={index}>
            {month}
          </option>
        ))}
      </select>
      <div className="flex">
        <button
          className={`px-3 py-1 border rounded-l ${
            view === "month" ? "bg-blue-500 text-white" : "border"
          }`}
          onClick={() => setView("month")}
        >
          Month
        </button>
        <button
          className={`px-3 py-1 border rounded-r ${
            view === "year" ? "bg-blue-500 text-white" : "border"
          }`}
          onClick={() => setView("year")}
        >
          Year
        </button>
        
      </div>
    </div>
  );
};

export default Header;
