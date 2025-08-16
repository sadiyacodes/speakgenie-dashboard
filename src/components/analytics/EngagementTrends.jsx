import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function EngagementTrends({ trends }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow border">
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        Student Engagement Trends
      </h3>
      <p className="text-gray-500 text-base mb-5">
        Monthly engagement patterns and learning time
      </p>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={trends}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="hours"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
