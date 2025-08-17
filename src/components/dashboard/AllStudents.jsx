import React from "react";
import StudentsCard from "./StudentsCard";
const AllStudents = ({ students }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-blue-600">All Students</h2>
          <p className="text-gray-500 text-sm">
            Complete student directory with performance details
          </p>
        </div>

        {/* Search + Filter */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Search students..."
            className="border rounded-lg px-3 py-2 text-sm"
          />
          <select className="border rounded-lg px-3 py-2 text-sm">
            <option>All Classes</option>
            <option>Class 8</option>
            <option>Class 7</option>
            <option>Class 6</option>
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {students.map((student) => (
          <StudentsCard key={student.id} student={student} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 border rounded-lg shadow-sm text-sm font-medium text-gray-600">
          Load More Students (233 remaining)
        </button>
      </div>
    </div>
  );
};

export default AllStudents;
