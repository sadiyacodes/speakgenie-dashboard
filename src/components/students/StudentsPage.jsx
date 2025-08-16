import StudentsGrid from "./StudentsGrid";

export default function StudentsPage({ all_students }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">All Students</h1>
        <p className="text-gray-600">
          Complete student directory with performance details
        </p>
      </div>
      <StudentsGrid students={all_students} />
    </div>
  );
}
