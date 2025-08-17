import { Trophy, Medal, Award, Eye } from "lucide-react";

export default function LeaderboardTable({ students }) {
  // Handle case where students is undefined
  const safeStudents = students || [];

  const getIcon = (rank) => {
    if (rank === 1) return <Trophy size={20} className="text-white" />;
    if (rank === 2) return <Medal size={20} className="text-white" />;
    if (rank === 3) return <Award size={20} className="text-white" />;
    return null;
  };

  const getRankBadgeColor = (rank) => {
    if (rank === 1) return "bg-yellow-400";
    if (rank === 2) return "bg-gray-400";
    if (rank === 3) return "bg-orange-600";
    return "bg-blue-600";
  };

  return (
    <section className="bg-white rounded-xl shadow-xl shadow-gray-300  p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-2xl font-bold text-blue-700">Complete Rankings</h3>
        <p className="text-gray-500 text-sm">
          All students ranked by points earned this month
        </p>
      </div>

      <div className="space-y-2">
        {safeStudents.map((student) => (
          <div
            key={student.rank}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              student.rank <= 3
                ? "bg-yellow-50 border-yellow-200"
                : "bg-blue-50 border-gray-200"
            } hover:bg-opacity-80 transition`}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div
                  className={`w-10 h-10 ${getRankBadgeColor(
                    student.rank
                  )} text-white flex items-center justify-center rounded-full font-bold`}
                >
                  {student.rank <= 3
                    ? getIcon(student.rank)
                    : `#${student.rank}`}
                </div>
                <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                  {student.avatar}
                </div>
              </div>
              <div>
                <div className="font-medium text-gray-900">{student.name}</div>
                <div className="text-xs text-gray-500">{student.class}</div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-6 text-right">
                <div>
                  <div className="text-2xl font-bold text-yellow-600">
                    {student.points}
                  </div>
                  <div className="text-xs text-gray-500">points</div>
                </div>
                <div className="text-sm text-gray-600 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-6 bg-green-200 rounded-full text-xs">
                    {student.accuracy}%
                  </span>
                  <span className="text-orange-500 ml-2 text-xs">
                    🔥 {student.streak}
                  </span>
                </div>
              </div>
              <button className="px-1 py-1 mx-auto w-18 bg-white text-gray-500 border border-gray-600 rounded-md text-sm hover:bg-gray-50 transition">
                <Eye size={16} className="inline mr-1 text-gray-500" /> View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
