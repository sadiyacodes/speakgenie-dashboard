import React from "react";

const CardsLeaderboard = ({ achievements }) => {
  const cards = [
    {
      title: "Current Champion",
      emoji: "🏆",
      name: achievements.top_scorer.name,
      value: achievements.top_scorer.points,
      valueLabel: "points",
      valueColor: "text-yellow-500",
    },
    {
      title: "Longest Streak",
      emoji: "🔥",
      name: achievements.longest_streak.name,
      value: achievements.longest_streak.days,
      valueLabel: "days",
      valueColor: "text-orange-500",
    },
    {
      title: "Most Active",
      emoji: "⚡",
      name: achievements.most_lessons.name,
      value: achievements.most_lessons.count,
      valueLabel: "lessons",
      valueColor: "text-primary",
    },
    {
      title: "Highest Accuracy",
      emoji: "🎯",
      name: achievements.highest_accuracy.name,
      value: achievements.highest_accuracy.percentage,
      valueLabel: "%",
      valueColor: "text-green-500",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-14">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-xl shadow-xl shadow-gray-200 border-gray-400  flex flex-col items-center text-center"
        >
          <span className="text-3xl mb-2">{card.emoji}</span>
          <span className="text-black text-lg font-semibold mb-1">
            {card.title}
          </span>
          <span className="text-gray-500 text-sm mb-2">{card.name}</span>
          <span className={`font-bold text-2xl ${card.valueColor}`}>
            {card.value} {card.valueLabel}
          </span>
        </div>
      ))}
    </section>
  );
};

export default CardsLeaderboard;
