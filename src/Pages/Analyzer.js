import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { orders } from "../Data/Data";

const COLORS = ["#8884d8", "#82ca9d"];

function getMonthYear(date) {
  return { month: date.getMonth(), year: date.getFullYear() };
}

const OrdersPieChart = () => {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // Calculate previous month and year correctly
  let prevMonth = currentMonth - 1;
  let prevMonthYear = currentYear;
  if (prevMonth < 0) {
    prevMonth = 11;
    prevMonthYear = currentYear - 1;
  }

  // Sum totals by month/year
  let prevMonthTotal = 0;
  let currentMonthTotal = 0;

  orders.forEach((order) => {
    const orderDate = new Date(order.date);
    if (
      orderDate.getMonth() === prevMonth &&
      orderDate.getFullYear() === prevMonthYear
    ) {
      prevMonthTotal += order.total;
    }
    if (
      orderDate.getMonth() === currentMonth &&
      orderDate.getFullYear() === currentYear
    ) {
      currentMonthTotal += order.total;
    }
  });

  const data = [
    { name: "Previous Month", value: prevMonthTotal },
    { name: "Current Month", value: currentMonthTotal },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow w-full md:w-[400px]">
      <h2 className="text-xl font-semibold mb-4 text-center">Order Growth</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            innerRadius={60}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OrdersPieChart;
