import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#11B880", "#F49E0B", "#F04444"];

export default function StudentPerformanceChart({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full h-full ">
      <h2 className="text-lg font-bold mb-2">
        Student Performance Distribution
      </h2>
      <p className="text-sm mb-4 text-gray-600">
        Overall accuracy breakdown across all students
      </p>

      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={60}
            fill="#8884d8"
            dataKey="percentage"
            nameKey="category"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="bottom"
            iconType="circle"
            iconSize="8"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
