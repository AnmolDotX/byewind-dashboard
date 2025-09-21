"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", current: 12, previous: 8 },
  { name: "Feb", current: 9, previous: 15 },
  { name: "Mar", current: 10, previous: 13 },
  { name: "Apr", current: 14, previous: 11 },
  { name: "May", current: 18, previous: 12 },
  { name: "Jun", current: 16, previous: 20 },
];

export default function RevenueChart() {
  return (
    <div className="bg-[#F7F9FB] dark:bg-white/10 p-6 rounded-2xl ">
      {/* Custom Title + Legend */}
      <div className="flex items-center gap-6 mb-4">
        <h2 className="text-sm pr-2 border-r border-gray-300 font-semibold">
          Revenue
        </h2>
        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-white">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-black inline-block" />
            Current Week{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-400">
              $58,211
            </span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-300 inline-block" />
            Previous Week{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-400">
              $68,768
            </span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {/* Gradient for Previous Week */}
          <defs>
            <linearGradient id="colorPrev" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#93C5FD" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#93C5FD" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Previous Week (blue with gradient fill) */}
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#93C5FD"
            strokeWidth={3}
            dot={{ stroke: "#EC4899", strokeWidth: 2, r: 6 }} // Pink highlight dot
            activeDot={{ r: 8 }}
            fill="url(#colorPrev)"
          />

          {/* Current Week (black, partly dashed) */}
          <Line
            type="monotone"
            dataKey="current"
            stroke="#000000"
            strokeWidth={3}
            dot={false}
            strokeDasharray="5 5" // Makes it dashed (can adjust)
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
