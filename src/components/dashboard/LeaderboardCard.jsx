import React from "react";
import { Star, Flame } from "lucide-react"; // icons

const LeaderboardCard = ({ student }) => {
  // pick badge color by rank
  const getRankColor = (rank) => {
    if (rank === 1) return "bg-yellow-400 text-white";
    if (rank === 2) return "bg-gray-400 text-white";
    if (rank === 3) return "bg-orange-400 text-white";
    return "bg-blue-500 text-white";
  };
  // pick color by points
  const getPointsColor = (points) => {
    if (points >= 800) return "bg-yellow-400 text-white"; // legendary
    if (points >= 290) return "bg-gray-400 text-white"; // elite
    if (points >= 180) return "bg-orange-400 text-white"; // pro
    return "bg-blue-500 text-white"; // beginner
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-xl border-1 border-gray-300 p-4 flex flex-col items-center text-center w-full">
      {/* Rank Badge */}
      <div
        className={`absolute -top-3 -left-3 rounded-full w-8 h-8 flex items-center justify-center font-bold ${getRankColor(
          student.rank
        )}`}
      >
        #{student.rank}
      </div>

      {/* Avatar */}
      {/* <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-300 to-yellow-300 flex items-center justify-center text-xl font-semibold text-white shadow-md">
        {student.avatar}
      </div> */}
      <div className="w-16 h-16 rounded-full overflow-hidden shadow-md">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Class */}
      <h3 className="mt-3 font-semibold text-gray-800">{student.name}</h3>
      <p className="text-sm text-gray-500">{student.class}</p>

      {/* Points */}
      <div
        className={`mt-2 w-18 rounded-xl text-md font-bold ${getPointsColor(
          student.points
        )}`}
      >
        {student.points} pts
      </div>

      {/* Accuracy */}
      <div
        className={`mt-1 px-3 py-1 rounded-full text-sm font-medium ${
          student.accuracy >= 90
            ? "bg-green-100 text-green-600"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        {student.accuracy}% Accuracy
      </div>

      {/* Stats: lessons + streak */}
      <div className="flex justify-center items-center gap-4 mt-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500" />
          <span>{student.lessons}</span>
        </div>
        <div className="flex items-center gap-1">
          <Flame className="w-4 h-4 text-orange-500" />
          <span>{student.streak} day streak</span>
        </div>
      </div>

      {/* Button */}
      <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-900 border-1 shadow-xs text-sm font-medium py-2 px-4 rounded-xl">
        View Profile
      </button>
    </div>
  );
};

export default LeaderboardCard;
