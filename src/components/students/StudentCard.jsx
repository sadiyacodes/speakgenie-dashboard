export default function StudentCard({ student }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow flex flex-col items-center text-center">
      {/* <div className="w-16 h-16 mb-4 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold text-xl">
        {student.avatar}
      </div> */}
      <div className="w-16 h-16 mb-4 flex items-center justify-center bg-indigo-600 text-white rounded-full font-bold text-xl overflow-hidden shadow">
        {student.avatar ? (
          <img
            src={student.avatar}
            alt={student.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{student.name.charAt(0)}</span>
        )}
      </div>

      <h4 className="text-lg font-bold text-gray-900 mb-1">{student.name}</h4>
      <p className="text-gray-500 mb-2">{student.class}</p>
      <div className="flex w-full justify-between px-2 mt-4">
        <span className="text-emerald-600 font-bold">{student.accuracy}%</span>
        <span className="text-indigo-700 font-bold">{student.points} XP</span>
      </div>
    </div>
  );
}
