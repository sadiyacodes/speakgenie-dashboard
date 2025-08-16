import { Users, BookOpen, TrendingUp, Trophy } from "lucide-react";

export default function MetricsCards({ metrics }) {
  const cards = [
    {
      title: "TOTAL STUDENTS",
      value: metrics.total_students.count,
      growth: metrics.total_students.growth,
      icon: Users,
      color: "text-indigo-600",
    },
    {
      title: "TOTAL CLASSES",
      value: metrics.total_classes.count,
      growth: metrics.total_classes.growth,
      icon: BookOpen,
      color: "text-emerald-600",
    },
    {
      title: "AVG. PERFORMANCE",
      value: `${metrics.avg_performance.percentage}%`,
      growth: metrics.avg_performance.growth,
      icon: TrendingUp,
      color: "text-red-600",
    },
    {
      title: "TOP PERFORMER",
      value: `${metrics.top_performer.points} pts`,
      growth: `${metrics.top_performer.name} ${metrics.top_performer.class}`,
      icon: Trophy,
      color: "text-yellow-600",
    },
  ];

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-8">
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow flex flex-col"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {card.title}
              </h3>
              <Icon size={24} className={card.color} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-gray-900">
                {card.value}
              </span>
              <span className="text-xs font-semibold text-emerald-600">
                {card.growth}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
