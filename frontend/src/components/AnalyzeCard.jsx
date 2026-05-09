const AnalyzeCard = ({ analytics }) => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-zinc-800 p-6 rounded-2xl">
        <h3 className="text-zinc-400">
          Calibre Score
        </h3>

        <p className="text-5xl font-bold text-green-400 mt-4">
          {analytics.calibreScore}
        </p>
      </div>

      <div className="bg-zinc-800 p-6 rounded-2xl">
        <h3 className="text-zinc-400">
          Total Resumes
        </h3>

        <p className="text-5xl font-bold text-blue-400 mt-4">
          {analytics.totalResumes}
        </p>
      </div>

      <div className="bg-zinc-800 p-6 rounded-2xl">
        <h3 className="text-zinc-400">
          High Risk
        </h3>

        <p className="text-5xl font-bold text-red-400 mt-4">
          {analytics.highRiskCount}
        </p>
      </div>
    </div>
  );
};

export default AnalyzeCard;