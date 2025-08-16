import { Users, GraduationCap, TrendingUp, Trophy } from "lucide-react";

export default function MetricsCards({ metrics }) {
  const cards = [
    {
      title: "TOTAL STUDENTS",
      value: metrics.total_students.count,
      growth: metrics.total_students.growth,
      icon: Users,
      color: "text-indigo-600",
      subtext: "from last month",
    },
    {
      title: "TOTAL CLASSES",
      value: metrics.total_classes.count,
      growth: metrics.total_classes.growth,
      icon: GraduationCap,
      color: "text-emerald-600",
      subtext: "from last month",
    },
    {
      title: "AVG. PERFORMANCE",
      value: `${metrics.avg_performance.percentage}%`,
      growth: metrics.avg_performance.growth,
      icon: TrendingUp,
      color: "text-red-600",
      subtext: "from last month",
    },
    {
      title: "TOP PERFORMER",
      value: `${metrics.top_performer.points} pts`,
      growth: `${metrics.top_performer.name}`,
      icon: Trophy,
      color: "text-yellow-600",
      subtext: "Class 8",
    },
  ];
  const colors = ["#1D51DB", "#01825B", "#892ADC", "#BD5D07"];
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-8">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow flex flex-col"
          >
            <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {card.title}
            </h3>
            <div className="flex justify-between items-center mb-1">
              <span className="text-3xl font-bold text-gray-900">
                {card.value}
              </span>
              <Icon
                size={24}
                className="w-10 h-10 p-2 text-white rounded-xl"
                style={{ backgroundColor: colors[idx] }}
              />
            </div>

            <div>
              <span className="text-xs font-semibold text-emerald-600">
                {card.growth}{" "}
              </span>
              <span className="text-xs text-gray-400 ">{card.subtext}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
