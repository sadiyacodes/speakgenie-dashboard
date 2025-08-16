import { Menu, Bell } from "lucide-react";

export default function Header({ onMenuClick, isMobile }) {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center gap-6">
        {isMobile && (
          <button
            className="flex items-center justify-center p-2 text-indigo-600 bg-transparent border-none"
            onClick={onMenuClick}
          >
            <Menu size={24} />
          </button>
        )}
        <div>
          <h1 className="font-bold text-2xl text-gray-900">
            Welcome back, School Admin!
          </h1>
          <p className="text-gray-500">Here's your school's overview.</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button className="relative p-2 bg-transparent border-none text-indigo-600">
          <Bell size={20} />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
            3
          </span>
        </button>
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
          SA
        </div>
      </div>
    </header>
  );
}
