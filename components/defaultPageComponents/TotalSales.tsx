"use client";
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const TotalSales = () => {
  // Sales data
  const salesData = [
    { name: "Direct", value: 300.56, color: "#4f46e5" },
    { name: "Affiliate", value: 135.18, color: "#ec4899" },
    { name: "Sponsored", value: 154.02, color: "#f59e0b" },
    { name: "E-mail", value: 48.96, color: "#10b981" },
  ];

  return (
    <div className="bg-[#F7F9FB] dark:bg-white/10 rounded-2xl p-6 w-full max-w-md max-h-[344px]">
      <h2 className="text-sm font-semibold text-gray-800 dark:text-white mb-2">
        Total Sales
      </h2>

      <div className="flex flex-col">
        <div className="w-full">
          <ResponsiveContainer width="100%" height={100}>
            <PieChart>
              <Pie
                data={salesData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={40}
                paddingAngle={2}
                dataKey="value"
              >
                {salesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value}`, "Sales"]} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full">
          <div className="space-y-3">
            {salesData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center mb-1">
                  <div
                    className="w-3 h-3 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-100">
                    {item.name}
                  </span>
                </div>
                <div className="text-sm text-gray-900 dark:text-gray-200">
                  ${item.value.toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalSales;
