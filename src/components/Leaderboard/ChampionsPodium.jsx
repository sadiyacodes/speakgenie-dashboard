import { Trophy, Medal, Award } from "lucide-react";

const podiumIcons = [Medal, Trophy, Award];
const podiumColors = ["#C0C0C0", "#FFD700", "#CD7F32"]; // Silver, Gold, Bronze

export default function ChampionsPodium({ champions }) {
  return (
    <div className="rounded-xl shadow-xl shadow-gray-300 mb-8">
      <div className="rounded-xl w-full p-2 bg-red-50 border-b-red-500 ">
        <h3 className="text-2xl text-center font-bold text-blue-700 mt-2">
          🏆 Champions Podium 🏆
        </h3>
        <p className="text-gray-600 text-center mb-6">
          This month’s top 3 achievers
        </p>
      </div>
      <div className="flex justify-center items-end gap-10 mt-15 p-8 ">
        {[champions[1], champions[0], champions[2]].map((champion, i) => {
          const Icon = podiumIcons[i];
          return (
            <div
              key={champion.rank}
              className={`flex flex-col items-center rounded-xl p-6 w-26 md:w-64 ${
                i === 0
                  ? "bg-gray-300 h-72"
                  : i === 1
                  ? "bg-yellow-100 h-80"
                  : "bg-orange-200 h-64"
              }`}
              style={{ marginBottom: "0" }}
            >
              <div
                className="-mt-16 transform -translate-y-1/2"
                style={{ left: `calc(50% + ${i * 120 - 120}px)` }}
              >
                {/* <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-indigo-900 font-bold text-2xl">
                  {champion.avatar}
                </div> */}
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center overflow-hidden shadow">
                  {champion.avatar ? (
                    <img
                      src={champion.avatar}
                      alt={champion.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-indigo-900 font-bold text-2xl">
                      {champion.name.charAt(0)}
                    </span>
                  )}
                </div>
              </div>
              <div className="text-4xl font-extrabold mb-4 text-indigo-900">
                #{champion.rank}
              </div>
              <Icon size={48} style={{ color: podiumColors[i] }} />
              <h4 className="text-xl font-semibold text-gray-900">
                {champion.name}
              </h4>
              <p className="text-gray-600 mb-2">{champion.class}</p>
              <div className="flex flex-col text-center space-y-1 text-sm text-gray-700">
                <span>
                  <strong>{champion.points}</strong> pts
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
