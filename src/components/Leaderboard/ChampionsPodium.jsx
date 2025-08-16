import { Trophy, Medal, Award } from "lucide-react";

const podiumIcons = [Trophy, Medal, Award];
const podiumColors = ["#FFD700", "#C0C0C0", "#CD7F32"]; // Gold, Silver, Bronze

export default function ChampionsPodium({ champions }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow border mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Champions Podium
      </h3>
      <p className="text-gray-500 mb-6">This month’s top 3 achievers</p>
      <div className="flex justify-center gap-10">
        {champions.map((champion, i) => {
          const Icon = podiumIcons[i];
          return (
            <div
              key={champion.id}
              className={`flex flex-col items-center rounded-xl p-6 w-64 
                ${
                  i === 0
                    ? "bg-yellow-100"
                    : i === 1
                    ? "bg-gray-300"
                    : "bg-yellow-700 bg-opacity-50"
                }`}
            >
              <div className="text-4xl font-extrabold mb-4 text-indigo-900">
                #{i + 1}
              </div>
              <Icon size={48} style={{ color: podiumColors[i] }} />
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-900 font-bold text-2xl mt-4 mb-2">
                {champion.avatar}
              </div>
              <h4 className="text-xl font-semibold text-gray-900">
                {champion.name}
              </h4>
              <p className="text-gray-600 mb-2">{champion.class}</p>
              <div className="flex flex-col text-center space-y-1 text-sm text-gray-700">
                <span>
                  <strong>{champion.points}</strong> pts
                </span>
                <span>{champion.accuracy}% accuracy</span>
                <span>{champion.streak} day streak</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
