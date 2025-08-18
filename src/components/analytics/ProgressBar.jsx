import React from "react";

export default function ProgressBar({ value = 0, color = "#4F46E5" }) {
  const width = `${value}%`;
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <div
        className="h-3 rounded-full transition-all duration-300"
        style={{ width, background: color }}
      />
    </div>
  );
}
