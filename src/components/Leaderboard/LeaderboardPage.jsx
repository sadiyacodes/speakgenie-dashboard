import ChampionsPodium from "./ChampionsPodium";
import LeaderboardTable from "./LeaderboardTable";
import { useState } from "react";
import FilterBar from "./FilterBar";
import CardsLeaderboard from "./CardsLeaderboard";
export default function LeaderboardPage({
  leaderboard,
  achievements,
  students,
}) {
  const [filteredStudents, setFilteredStudents] = useState(students);

  // // Handler for search & filters (from LeaderboardFilters)
  // const handleFilterChange = (updatedList) => {
  //   setFilteredStudents(updatedList);
  // };
  return (
    <div className=" grid grid-cols-1 gap-8 mx-auto px-4 sm:px-6 lg:px-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          School Leaderboard
        </h1>
        <p className="text-gray-600">
          Celebrating our top performers and encouraging healthy competition
        </p>
      </header>

      {/* <div className="flex flex-col gap-6"> */}
      <ChampionsPodium champions={leaderboard.slice(0, 3)} />

      <FilterBar students={filteredStudents} />

      <LeaderboardTable students={leaderboard} />

      <CardsLeaderboard achievements={achievements} />
    </div>
  );
}
