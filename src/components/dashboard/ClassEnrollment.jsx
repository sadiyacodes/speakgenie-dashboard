import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ClassEnrollmentChart({ data }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl   p-8 shadow-md">
      <h3 className="text-xl font-bold text-gray-900 mb-1">
        Class-wise Student Enrollment
      </h3>
      <p className="text-gray-600 text-sm mb-5">
        Student distribution across different grades
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="class" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="students" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
