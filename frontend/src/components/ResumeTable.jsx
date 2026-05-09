const ResumeTable = ({ resumes }) => {
  return (
    <div className="mt-10 bg-zinc-800 rounded-2xl p-6 overflow-x-auto">
      <h2 className="text-2xl font-bold text-white mb-6">
        Resume Analysis
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-700 text-left">
            <th className="pb-4 text-zinc-400">
              File Name
            </th>

            <th className="pb-4 text-zinc-400">
              Score
            </th>

            <th className="pb-4 text-zinc-400">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {resumes.map((resume, index) => (
            <tr
              key={index}
              className="border-b border-zinc-700"
            >
              <td className="py-5 text-zinc-300">
                {resume.fileName || `Resume_${index + 1}.pdf`}
              </td>

              <td className="py-5 text-green-400 font-bold">
                {resume.totalScore}
              </td>

              <td className="py-5">
                <span className="px-4 py-2 rounded-xl bg-zinc-900 text-white">
                  {resume.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResumeTable;