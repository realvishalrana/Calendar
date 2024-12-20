import { getCalendarDates } from "@/utils/calendarUtils";
import { useEffect, useState } from "react";

const useCalendar = () => {
  const currentDate = new Date();
  const [view, setView] = useState("month");
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());
  const [selectedDate, setSelectedDate] = useState(currentDate.getDate());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const { prevDates, currentDates, nextDates } = getCalendarDates(
    selectedYear,
    selectedMonth
  );

  const handleMonthClick = (month) => {
    setView("month");
    setSelectedMonth(month);
  };

  useEffect(() => {
    document.title = `Calendar - ${selectedMonth}/${selectedDate}/${selectedYear}`;
  }, [selectedMonth, selectedDate, selectedYear]);

  return {
    view,
    setView,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    selectedDate,
    setSelectedDate,
    months,
    days,
    prevDates,
    currentDates,
    nextDates,
    handleMonthClick,
  };
};

export default useCalendar;
