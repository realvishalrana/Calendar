import Header from "./Header";
import YearView from "./YearView";
import MonthView from "./MonthView";
import useCalendar from "@/hooks/useCalendar";
import Head from "next/head";
import { useEffect } from "react";

const Calendar = () => {
  const {
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
  } = useCalendar();

  return (
    <div>
      <Head>
        <title>{`Calendar - ${selectedMonth}/${selectedDate}/${selectedYear}`}</title>
        <meta
          name="description"
          content={`A calendar component for ${selectedMonth}/${selectedDate}/${selectedYear}`}
        />
      </Head>
      <div className="p-4 border rounded-md w-96 m-3">
        <Header
          selectedYear={selectedYear}
          selectedMonth={selectedMonth}
          setYear={setSelectedYear}
          setMonth={setSelectedMonth}
          view={view}
          setView={setView}
          months={months}
        />

        {view === "year" && (
          <YearView
            months={months}
            selectedMonth={selectedMonth}
            onMonthClick={() => handleMonthClick(selectedMonth)}
          />
        )}

        {view === "month" && (
          <MonthView
            days={days}
            prevDates={prevDates}
            currentDates={currentDates}
            nextDates={nextDates}
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />
        )}
      </div>
    </div>
  );
};

export default Calendar;
