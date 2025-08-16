export default function TopLeaderboard({ students }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        School Leaderboard - Top 10 Champions
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        Our highest performing students this month
      </p>
      <div className="flex flex-col gap-4">
        {students.map((student, idx) => (
          <div
            key={student.id}
            className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <div className="text-indigo-700 text-lg font-bold mr-2">
                #{idx + 1}
              </div>
              <div className="w-10 h-10 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold">
                {student.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  {student.name}
                </div>
                <div className="text-xs text-gray-500">{student.class}</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-xs">
              <span className="font-bold text-indigo-700">
                {student.points} pts
              </span>
              <span className="font-bold text-emerald-600">
                {student.accuracy}%
              </span>
              <span className="text-gray-400">{student.streak}d</span>
              <button className="px-4 py-1 bg-indigo-600 text-white rounded-md text-xs hover:bg-indigo-500 transition">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
