export const daysInMonth = (year, month) =>
  new Date(year, month + 1, 0).getDate();

export const getCalendarDates = (year, month) => {
  const totalDays = daysInMonth(year, month);
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Previous month's remaining days
  const prevMonthDays = daysInMonth(year, month - 1);
  const prevDates = Array.from(
    { length: firstDayOfMonth },
    (_, i) => prevMonthDays - firstDayOfMonth + i + 1
  );

  // Current month's days
  const currentDates = Array.from({ length: totalDays }, (_, i) => i + 1);

  // Next month's starting days
  const remainingSlots = 42 - (prevDates.length + currentDates.length); // Total slots in a 6-row grid
  const nextDates = Array.from({ length: remainingSlots }, (_, i) => i + 1);

  return { prevDates, currentDates, nextDates };
};

