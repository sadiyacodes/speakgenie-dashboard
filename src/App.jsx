import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/global/Layout";
import DashboardOverview from "./components/dashboard/DashboardOverview";
import LeaderboardPage from "./components/Leaderboard/LeaderboardPage";
import StudentsPage from "./components/students/StudentsPage";
import AnalyticsPage from "./components/analytics/AnalyticsPage";
import SettingsPage from "./components/Settings/SettingsPage";
import "./App.css";
import { dashboardData } from "./api/mockData";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<DashboardOverview data={dashboardData} />} />
        <Route
          path="/dashboard"
          element={<DashboardOverview data={dashboardData} />}
        />
        <Route
          path="/leaderboard"
          element={
            <LeaderboardPage
              leaderboard={dashboardData.leaderboard}
              achievements={dashboardData.achievements}
            />
          }
        />
        <Route
          path="/students"
          element={<StudentsPage all_students={dashboardData.all_students} />}
        />
        <Route
          path="/analytics"
          element={<AnalyticsPage analytics={dashboardData.analytics} />}
        />
        <Route
          path="/settings"
          element={<SettingsPage settings={dashboardData.settings} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
