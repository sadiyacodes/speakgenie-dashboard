import { useState } from "react";

export default function FilterBar({ students }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");

  // Handle case where students is undefined
  const safeStudents = students || [];
  const classes = [
    "All Classes",
    ...new Set(safeStudents.map((student) => student.class)),
  ];

  const filteredStudents = safeStudents.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesClass =
      selectedClass === "All Classes" || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  return (
    <div className="p-4 mb-5 bg-white rounded-lg shadow">
      <div className="flex space-x-4">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            {classes.map((className) => (
              <option key={className} value={className}>
                {className}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <button disabled className="p-2 border border-gray-300 rounded-lg ">
            This Month
          </button>
        </div>
        <div className="relative">
          <button disabled className="p-2 border border-gray-300 rounded-lg  ">
            <span>More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
}
