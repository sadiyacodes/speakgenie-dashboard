import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Trophy,
  Users,
  BarChart3,
  Settings,
  GraduationCap,
} from "lucide-react";

const nav = [
  { path: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { path: "/leaderboard", icon: Trophy, label: "Leaderboard" },
  { path: "/students", icon: Users, label: "Students" },
  { path: "/analytics", icon: BarChart3, label: "Analytics" },
  { path: "/settings", icon: Settings, label: "Settings" },
];

export default function SideBarComponent({ isOpen, isMobile, onClose }) {
  const { pathname } = useLocation();
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-indigo-900 text-indigo-100 z-50 w-72
      transition-transform duration-300 ${
        isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : ""
      }`}
    >
      <div className="flex items-center gap-3 py-4 px-6">
        <GraduationCap className="text-yellow-400" size={32} />
        <div>
          <h2 className="text-white font-bold text-lg">SpeakGenie</h2>
          <p className="text-indigo-100 text-xs">Admin Panel</p>
        </div>
      </div>
      <div className="flex items-center gap-4 bg-indigo-800 px-6 py-3 rounded-lg mx-5 mb-8">
        <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
          G
        </div>
        <div>
          <h3 className="text-white font-semibold">School Admin</h3>

          <p className="text-indigo-100 text-xs">Greenwood Elementary</p>
        </div>
      </div>
      <nav className="flex flex-col gap-1 px-4">
        {nav.map(({ path, icon: Icon, label }) => (
          <Link
            key={path}
            to={path}
            className={`flex items-center gap-3 px-6 py-3 rounded-md text-base font-medium transition
              ${
                pathname === path || (path === "/dashboard" && pathname === "/")
                  ? "bg-indigo-600 text-white"
                  : "text-indigo-100 hover:bg-indigo-800 hover:text-white"
              }`}
            onClick={isMobile ? onClose : undefined}
          >
            <Icon size={20} />
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
