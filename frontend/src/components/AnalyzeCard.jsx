const AnalyzeCard = ({ analytics }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
      <div className="bg-zinc-800 p-5 sm:p-6 rounded-2xl">
        <h3 className="text-zinc-400 text-sm sm:text-base">Calibre Score</h3>
        <p className="text-4xl sm:text-5xl font-bold text-green-400 mt-3 sm:mt-4">
          {analytics.calibreScore}
        </p>
      </div>

      <div className="bg-zinc-800 p-5 sm:p-6 rounded-2xl">
        <h3 className="text-zinc-400 text-sm sm:text-base">Total Resumes</h3>
        <p className="text-4xl sm:text-5xl font-bold text-blue-400 mt-3 sm:mt-4">
          {analytics.totalResumes}
        </p>
      </div>

      <div className="bg-zinc-800 p-5 sm:p-6 rounded-2xl">
        <h3 className="text-zinc-400 text-sm sm:text-base">High Risk</h3>
        <p className="text-4xl sm:text-5xl font-bold text-red-400 mt-3 sm:mt-4">
          {analytics.highRiskCount}
        </p>
      </div>
    </div>
  );
};

export default AnalyzeCard;