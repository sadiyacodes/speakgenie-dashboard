import ChampionsPodium from "./ChampionsPodium";
import LeaderboardTable from "./LeaderboardTable";

export default function LeaderboardPage({ leaderboard, achievements }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          School Leaderboard
        </h1>
        <p className="text-gray-600">
          Celebrating our top performers and encouraging healthy competition
        </p>
      </header>

      <ChampionsPodium champions={leaderboard.slice(0, 3)} />

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-14">
        <div className="bg-white p-6 rounded-xl shadow border text-center">
          <h3 className="font-semibold text-gray-700 mb-1">Current Champion</h3>
          <p className="text-indigo-700 font-bold text-xl">
            {achievements.top_scorer.name}
          </p>
          <span className="text-gray-600">
            {achievements.top_scorer.points} points
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border text-center">
          <h3 className="font-semibold text-gray-700 mb-1">Longest Streak</h3>
          <p className="text-indigo-700 font-bold text-xl">
            {achievements.longest_streak.name}
          </p>
          <span className="text-gray-600">
            {achievements.longest_streak.days} days
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border text-center">
          <h3 className="font-semibold text-gray-700 mb-1">Most Active</h3>
          <p className="text-indigo-700 font-bold text-xl">
            {achievements.most_lessons.name}
          </p>
          <span className="text-gray-600">
            {achievements.most_lessons.count} lessons
          </span>
        </div>
        <div className="bg-white p-6 rounded-xl shadow border text-center">
          <h3 className="font-semibold text-gray-700 mb-1">Highest Accuracy</h3>
          <p className="text-indigo-700 font-bold text-xl">
            {achievements.highest_accuracy.name}
          </p>
          <span className="text-gray-600">
            {achievements.highest_accuracy.percentage}%
          </span>
        </div>
      </section>

      <LeaderboardTable students={leaderboard} />
    </div>
  );
}
