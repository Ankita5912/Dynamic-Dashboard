import React, { useState } from "react";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [deadlines, setDeadlines] = useState({}); // { 'YYYY-MM-DD': ['Project X', 'Task Y'] }

  const getMonthDays = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    let dayCount = 1;

    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    for (let i = 0; i < daysInMonth; i++) {
      days.push(new Date(year, month, dayCount++));
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const handleAddDeadline = (day) => {
    const dateKey = day.toISOString().split("T")[0];
    const task = prompt("Enter deadline/project title:");
    if (!task) return;

    setDeadlines((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), task],
    }));
  };

  const days = getMonthDays(currentDate);
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const today = new Date();
  const isToday = (day) =>
    day &&
    day.getDate() === today.getDate() &&
    day.getMonth() === today.getMonth() &&
    day.getFullYear() === today.getFullYear();

  return (
    <div className="bg-white rounded-xl shadow w-full">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={goToPreviousMonth}
          className="text-lg font-bold px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          ←
        </button>
        <h2 className="text-xl font-semibold">
          {monthName} {year}
        </h2>
        <button
          onClick={goToNextMonth}
          className="text-lg font-bold px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 text-center font-semibold mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-gray-600">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {days.map((day, idx) => {
          const dateKey = day?.toISOString().split("T")[0];
          return (
            <div
              key={idx}
              onClick={() => day && handleAddDeadline(day)}
              className={`p-1 h-24 rounded-lg cursor-pointer flex flex-col items-center justify-start border text-left text-xs overflow-hidden ${
                day
                  ? isToday(day)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                  : ""
              }`}
            >
              <div className="font-medium">{day?.getDate() ?? ""}</div>
              <div className="mt-1 space-y-1">
                {deadlines[dateKey]?.map((d, i) => (
                  <div
                    key={i}
                    className="bg-red-200 text-red-800 rounded px-1 text-[10px] truncate max-w-[80px]"
                  >
                    {d}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
