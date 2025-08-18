import MetricsOverview from "./MetricsOverview";
import SkillPerformance from "./SkillPerformance";
import EngagementTrends from "./EngagementTrends";
import StudentPerformanceChart from "./StudentPerformanceChart";

import AvgPerformanceChart from "./AvgPerformanceChart";
export default function AnalyticsPage({ analytics }) {
  return (
    <div>
      <div className="align-left mb-8">
        <h2 className="font-bold text-3xl mb-2 text-gray-900">
          Analytics &amp; Reports
        </h2>
      </div>
      <div className="mb-6">
        <MetricsOverview metrics={analytics} />
      </div>
      <div className="grid gap-4 justify-between md:grid-cols-2 grid-cols-1  ">
        <StudentPerformanceChart data={analytics.performanceData} />

        <AvgPerformanceChart
          performance_by_skill={analytics.performance_by_skill}
        />
      </div>
      <div className="col-span-full mt-6">
        <EngagementTrends data={analytics} />
      </div>
    </div>
  );
}
