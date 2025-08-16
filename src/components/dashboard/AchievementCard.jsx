import React from "react";

const AchievementCard = ({ title, value, student, color }) => {
  return (
    <div className="bg-white shadow rounded-2xl p-4 flex flex-col items-center text-center gap-2">
      <h3 className="text-gray-600 text-sm font-medium">{title}</h3>
      <p className="text-lg font-semibold">{student}</p>
      <span className={`text-sm font-bold px-3 py-1 rounded-full ${color}`}>
        {value}
      </span>
    </div>
  );
};

export default AchievementCard;
