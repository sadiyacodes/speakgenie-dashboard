import { Clock, BookOpen, Users, TrendingUp } from "lucide-react";

export default function MetricsOverview({ metrics }) {
  const metricCards = [
    {
      title: "Total Learning Hours",
      value: metrics.total_learning_hours.value,
      growth: metrics.total_learning_hours.growth,
      icon: Clock,
      color: "text-indigo-600",
    },
    {
      title: "Lessons Completed",
      value: metrics.lessons_completed.value,
      growth: metrics.lessons_completed.growth,
      icon: BookOpen,
      color: "text-emerald-600",
    },
    {
      title: "Average Session Time",
      value: metrics.average_session_time.value,
      growth: metrics.average_session_time.growth,
      icon: TrendingUp,
      color: "text-red-600",
    },
    {
      title: "Active Students",
      value: metrics.active_students.value,
      growth: metrics.active_students.growth,
      icon: Users,
      color: "text-yellow-600",
    },
  ];
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mb-8">
      {metricCards.map((metric, idx) => {
        const Icon = metric.icon;
        return (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-xl p-8 shadow flex flex-col"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                {metric.title}
              </h3>
              <Icon size={24} className={metric.color} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-gray-900">
                {metric.value}
              </span>
              <span className="text-xs font-semibold text-emerald-600">
                {metric.growth}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
