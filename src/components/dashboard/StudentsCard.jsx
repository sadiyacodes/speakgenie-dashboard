import React from "react";
import { Eye } from "lucide-react"; // eye icon

const StudentCard = ({ student }) => {
  const { avatar, name, class: studentClass, accuracy, points } = student;

  // Dynamic color for accuracy
  const getAccuracyColor = (value) => {
    if (value >= 90) return "bg-green-100 text-green-600";
    if (value >= 85) return "bg-blue-100 text-blue-600";
    return "bg-red-100 text-red-600";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between w-64">
      {/* Top Row */}
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold">
          {avatar}
        </div>

        {/* Name + Class */}
        <div>
          <h3 className="text-gray-800 font-semibold text-sm truncate">
            {name}
          </h3>
          <p className="text-gray-500 text-xs">{studentClass}</p>
        </div>

        {/* Eye Button */}
        <button className="ml-auto w-10 h-7 rounded-xl border flex items-center justify-center shadow-sm">
          <Eye size={16} className="text-gray-500" />
        </button>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between mt-3">
        {/* Accuracy */}
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${getAccuracyColor(
            accuracy
          )}`}
        >
          {accuracy}%
        </span>

        {/* Points */}
        <span className="text-gray-700 text-sm font-medium">{points} XP</span>
      </div>
    </div>
  );
};

export default StudentCard;
