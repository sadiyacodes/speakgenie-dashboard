import { Search } from "lucide-react";
import { useState } from "react";
import StudentCard from "./StudentCard";

export default function StudentsGrid({ students }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("All Classes");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredStudents = students.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesClass =
      selectedClass === "All Classes" || student.class === selectedClass;
    return matchesSearch && matchesClass;
  });

  const visibleStudents = filteredStudents.slice(0, visibleCount);
  const remainingCount = filteredStudents.length - visibleCount;

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-indigo-400"
          />
        </div>

        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option>All Classes</option>
          <option>Class 1</option>
          <option>Class 2</option>
          <option>Class 3</option>
          <option>Class 4</option>
          <option>Class 5</option>
          <option>Class 6</option>
          <option>Class 7</option>
          <option>Class 8</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>

      {remainingCount > 0 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount(visibleCount + 12)}
            className="px-8 py-3 bg-indigo-600 text-white rounded-md font-medium text-base transition hover:bg-indigo-500"
          >
            Load More Students ({remainingCount} remaining)
          </button>
        </div>
      )}
    </>
  );
}
