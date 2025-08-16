import React from "react";

const AchievementsGrid = ({ achievements }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-6">
      {achievements.map((achievement, index) => (
        <div
          key={index}
          className="bg-red-50 shadow rounded-xl p-6 text-center border border-red-300"
        >
          {/* Emoji */}
          <div className="text-4xl mb-2">{achievement.emoji}</div>

          {/* Type */}
          <h3 className="text-lg text-red-950 font-bold">{achievement.type}</h3>

          <div>
            <span className="text-sm text-gray-800">{achievement.name} </span>
            {"- "}
            <span className="text-sm  text-gray-800">
              {achievement.context}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsGrid;
