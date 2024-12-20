import useDataPicker from "@/hooks/useDataPicker";
import React from "react";

const DatePicker = () => {
  const { days, handleClick } = useDataPicker();

  return (
    <div className="grid grid-cols-7 cursor-pointer items-center gap-3">
      {days.map((d) => {
        return <div className="hover:bg-blue-600" onClick={() => handleClick(d)}>{d}</div>;
      })}
    </div>
  );
};

export default DatePicker;
