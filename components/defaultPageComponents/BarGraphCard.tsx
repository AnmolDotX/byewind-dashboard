"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", actual: 18, projection: 20 },
  { name: "Feb", actual: 22, projection: 25 },
  { name: "Mar", actual: 19, projection: 21 },
  { name: "Apr", actual: 24, projection: 27 },
  { name: "May", actual: 15, projection: 17 },
  { name: "Jun", actual: 20, projection: 23 },
];

export default function BarGraphCard() {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl max-h-[252px] z-10">
      <h2 className="text-sm font-semibold mb-4">Projections vs Actuals</h2>
      <ResponsiveContainer width="100%" height={180}>
        <BarChart data={data} barGap={8} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor={{ fill: "transparent" }} />

          {/* Projection (light background bar) */}
          <Bar
            dataKey="projection"
            fill="#A8C5DA"
            opacity={0.5}
            stackId="a"
            activeBar={false}
          />

          {/* Actual (foreground filled bar) */}
          <Bar
            dataKey="actual"
            fill="#A8C5DA"
            stackId="a"
            radius={[4, 4, 0, 0]}
            activeBar={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
