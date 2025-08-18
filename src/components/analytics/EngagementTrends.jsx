import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function EngagementTrendsChart(analytics) {
  const data = analytics.data.engagement_trends;

  return (
    <div className="w-full h-[400px] bg-white shadow-md rounded-2xl p-15">
      <h2 className="text-xl font-semibold mb-2">Student Engagement Trends</h2>
      <p className="text-sm mb-4 text-gray-600">
        Monthly engagement patterns and learning time.
      </p>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={data} barGap={8}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          <Bar dataKey="study" fill="#4F46E5" name="Study Hours" />
          <Bar dataKey="practice" fill="#22C55E" name="Practice Hours" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
