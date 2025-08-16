import React from "react";
import MetricsCards from "./MetricsCards";
import ClassEnrollmentChart from "./ClassEnrollment";
import PerformanceDistribution from "./PerformanceDistribution";
import TopLeaderboard from "./TopLeaderboard";
import AchievementsGrid from "./AchievementGrid";
export default function DashboardOverview({ data }) {
  return (
    <div className="grid gap-2 md:grid-cols-2 grid-cols-1 ">
      <div className="col-span-full">
        <MetricsCards metrics={data.dashboard_overview} />
      </div>

      <ClassEnrollmentChart data={data.class_enrollment} />

      <PerformanceDistribution data={data.performance_distribution} />

      <div className="col-span-full">
        <TopLeaderboard students={data.leaderboard} />
      </div>
      <div className="col-span-full">
        <AchievementsGrid achievements={data.achievements} />
      </div>
    </div>
  );
}
