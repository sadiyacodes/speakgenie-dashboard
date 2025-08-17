import LeaderboardCard from "./LeaderboardCard";

export default function TopLeaderboard({ students }) {
  return (
    <div className="bg-white border mt-4 border-gray-200 rounded-xl p-8 shadow">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        School Leaderboard - Top 10 Champions
      </h3>
      <p className="text-gray-500 text-sm mb-8">
        Our highest performing students this month
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {students.map((student, index) => (
          <LeaderboardCard
            key={index}
            label={student.category}
            percentage={student.percentage}
            color={student.color}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}
