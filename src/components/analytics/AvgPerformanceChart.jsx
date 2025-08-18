// AveragePerformance.jsx
import React from "react";
import ProgressBar from "./ProgressBar";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ef4444"];

export default function AveragePerformance({ performance_by_skill = [] }) {
  const data = performance_by_skill;
  //   const data = performance_by_skill.map((item) => {
  //     let improvementValue = item.improvement;
  //     if (typeof improvementValue === "string") {
  //       improvementValue = improvementValue
  //         .replace("%", "")
  //         .replace("+", "")
  //         .trim();
  //     }
  //     const improvement = Number(improvementValue) || 0;
  //     return { ...item, improvement };
  //   });

  return (
    <section className="bg-white p-5 rounded-lg shadow-sm">
      <h2 className="text-lg font-bold mb-2">
        Average Performance by Skill Area
      </h2>
      <p className="text-sm mb-4 text-gray-600">
        Individual skill performance metrics and improvements
      </p>

      {/* Progress bars */}
      <div className="space-y-4 mb-6">
        {data.map((item, i) => (
          <div key={item.skill}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-medium text-gray-700">
                {item.skill}
              </span>
              <span className="text-sm font-semibold">{item.percentage}%</span>
            </div>
            <ProgressBar
              value={item.percentage}
              color={COLORS[i % COLORS.length]}
            />
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="h-56 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 8, right: 8, left: 0, bottom: 8 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="skill" tick={{ fontSize: 12 }} />
            <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
            <Tooltip formatter={(v) => `${v}%`} />
            <Bar dataKey="percentage" radius={[6, 6, 0, 0]}>
              {data.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Improvement cards */}
      <div className="bg-gray-200 p-4 rounded-xl">
        <h3 className="text-sm font-semibold mb-2 ">
          Month-over-Month Improvement
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3 text-sm">
          {data.map((item, i) => {
            const positive = item.improvement >= 0;
            return (
              <div
                key={item.skill}
                className="bg-gray-50 border border-gray-300 rounded-md px-3 py-2 flex items-center justify-between"
              >
                <span className="text-sm text-gray-700">{item.skill}</span>
                <div>
                  <span
                    className={positive ? "text-green-600" : "text-red-600"}
                  >
                    {positive
                      ? `+${item.improvement}%`
                      : `${item.improvement}%`}{" "}
                  </span>
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ background: "#10b981" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
