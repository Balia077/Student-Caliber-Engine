const ResumeTable = ({ resumes }) => {
  return (
    <div className="mt-6 sm:mt-10 bg-zinc-800 rounded-2xl p-4 sm:p-6 overflow-x-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
        Resume Analysis
      </h2>

      {/* Desktop table */}
      <table className="w-full hidden sm:table">
        <thead>
          <tr className="border-b border-zinc-700 text-left">
            <th className="pb-4 text-zinc-400 font-medium text-sm">File Name</th>
            <th className="pb-4 text-zinc-400 font-medium text-sm">Score</th>
            <th className="pb-4 text-zinc-400 font-medium text-sm">Status</th>
          </tr>
        </thead>
        <tbody>
          {resumes.map((resume, index) => (
            <tr key={index} className="border-b border-zinc-700 last:border-0">
              <td className="py-4 text-zinc-300 text-sm">
                {resume.fileName || `Resume_${index + 1}.pdf`}
              </td>
              <td className="py-4 text-green-400 font-bold text-sm">
                {resume.totalScore}
              </td>
              <td className="py-4">
                <span className="px-3 py-1.5 rounded-xl bg-zinc-900 text-white text-sm">
                  {resume.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile card list */}
      <div className="sm:hidden space-y-3">
        {resumes.map((resume, index) => (
          <div key={index} className="bg-zinc-900 rounded-xl p-4 flex flex-col gap-2">
            <p className="text-zinc-300 text-sm font-medium truncate">
              {resume.fileName || `Resume_${index + 1}.pdf`}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-bold text-lg">
                {resume.totalScore}
              </span>
              <span className="px-3 py-1 rounded-xl bg-zinc-800 text-white text-xs">
                {resume.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTable;