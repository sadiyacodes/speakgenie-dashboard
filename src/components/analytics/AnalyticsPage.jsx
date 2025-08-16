import MetricsOverview from "./MetricsOverview";
import SkillPerformance from "./SkillPerformance";
import EngagementTrends from "./EngagementTrends";

export default function AnalyticsPage({ analytics }) {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="font-bold text-3xl mb-2 text-gray-900">
          Analytics &amp; Reports
        </h2>
        <p className="text-gray-500">
          Comprehensive insights into learning patterns and performance
        </p>
      </div>
      <div className="mb-8">
        <MetricsOverview metrics={analytics} />
      </div>
      <div className="mb-8">
        <SkillPerformance skills={analytics.performance_by_skill} />
      </div>
      <EngagementTrends trends={analytics.engagement_trends} />
    </div>
  );
}
