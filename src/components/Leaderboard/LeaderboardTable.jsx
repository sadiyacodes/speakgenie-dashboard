import { Search } from "lucide-react";
import { useState } from "react";

export default function LeaderboardTable({ students }) {
  const [searchTerm, setSearchTerm] = useState("");
  // Could add class filter, sort, pagination as needed.

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.class.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white rounded-xl shadow border p-6">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-2xl font-bold text-gray-900">Complete Rankings</h3>
        <div className="relative w-full max-w-sm">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-700 font-semibold">
              <th className="p-3 border-b border-gray-300">Rank</th>
              <th className="p-3 border-b border-gray-300">Student</th>
              <th className="p-3 border-b border-gray-300">Points</th>
              <th className="p-3 border-b border-gray-300">Accuracy</th>
              <th className="p-3 border-b border-gray-300">Streak</th>
              <th className="p-3 border-b border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-gray-50 odd:bg-white even:bg-gray-50"
              >
                <td className="p-3 border-b border-gray-300 font-semibold text-indigo-700">
                  #{student.rank}
                </td>
                <td className="p-3 border-b border-gray-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded-full font-bold">
                      {student.avatar}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">
                        {student.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {student.class}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="p-3 border-b border-gray-300 font-semibold">
                  {student.points} points
                </td>
                <td className="p-3 border-b border-gray-300">
                  {student.accuracy}%
                </td>
                <td className="p-3 border-b border-gray-300">
                  {student.streak} days
                </td>
                <td className="p-3 border-b border-gray-300">
                  <button className="px-4 py-1 bg-indigo-600 text-white text-sm rounded-md hover:bg-indigo-500 transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
