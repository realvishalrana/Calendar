import React from "react";

const MonthView = ({
  days,
  prevDates,
  currentDates,
  nextDates,
  selectedDate,
  onDateSelect,
}) => {
  return (
    <div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div key={day} className="text-center font-medium">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {prevDates.map((date, i) => (
          <div
            key={`prev-${i}`}
            className="text-center py-1 text-gray-400 hover:cursor-not-allowed"
          >
            {date}
          </div>
        ))}
        {currentDates.map((date, i) => (
          <button
            key={`current-${i}`}
            className={`text-center py-1 rounded ${
              date === selectedDate
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => onDateSelect(date)}
          >
            {date}
          </button>
        ))}
        {nextDates.map((date, i) => (
          <div
            key={`next-${i}`}
            className="text-center py-1 text-gray-400 hover:cursor-not-allowed"
          >
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
