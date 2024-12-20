import React from "react";

const YearView = ({ months, selectedMonth, onMonthClick }) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {months.map((month, index) => (
        <button
          key={index}
          className={`px-4 py-2 rounded ${
            selectedMonth === index
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"
          }`}
          onClick={() => onMonthClick(index)}
        >
          {month}
        </button>
      ))}
    </div>
  );
};

export default YearView;
