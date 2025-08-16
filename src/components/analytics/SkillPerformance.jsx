import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function SkillPerformance({ skills }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow border mb-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-gray-900">
          Average Performance by Skill Area
        </h3>
        <p className="text-gray-500 text-base">
          Individual skill performance metrics and improvements
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={skills}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="skill" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="percentage" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-800">
            Month-over-Month Improvement
          </h4>
          <div className="space-y-3">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="flex justify-between p-3 bg-gray-50 rounded-md"
              >
                <span className="font-medium text-gray-700">{skill.skill}</span>
                <span className="font-bold text-emerald-600">
                  {skill.improvement}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
