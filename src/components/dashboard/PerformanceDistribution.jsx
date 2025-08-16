import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

export default function PerformanceDistribution({ data }) {
  const COLORS = {
    "Excellent (90-100%)": "#10B981",
    "Good (80-89%)": "#3B82F6",
    "Average (70-79%)": "#F59E0B",
    "Needs Improvement": "#EF4444",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8  shadow-md">
      <h3 className="text-xl font-bold text-primary mb-1">
        Performance Distribution
      </h3>
      <p className="text-gray-600 text-sm mb-5">
        Overall accuracy breakdown across all students
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            labelLine={false}
            outerRadius={60}
            fill="#8884d8"
            dataKey="percentage"
            nameKey="category"
            // label={({ category, percent }) =>
            //   `${category}: ${(percent * 100).toFixed(0)}%`
            // }
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.category]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="bottom"
            align="bottom"
            iconType="circle"
            iconSize="8"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
