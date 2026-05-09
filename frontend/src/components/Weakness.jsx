const Weakness = ({ weaknesses }) => {
  return (
    <div className="mt-6 sm:mt-10 bg-zinc-800 rounded-2xl p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
        Top Weaknesses
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {weaknesses.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-zinc-900 px-4 sm:px-5 py-3 sm:py-4 rounded-xl gap-4"
          >
            <span className="text-zinc-300 text-sm sm:text-base min-w-0">
              {item.weakness}
            </span>
            <span className="text-red-400 font-bold text-sm sm:text-base shrink-0">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weakness;