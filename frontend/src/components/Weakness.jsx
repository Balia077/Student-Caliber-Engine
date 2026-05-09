const Weakness = ({ weaknesses }) => {
  return (
    <div className="mt-10 bg-zinc-800 rounded-2xl p-6">
      <h2 className="text-2xl font-bold text-white mb-6">
        Top Weaknesses
      </h2>

      <div className="space-y-4">
        {weaknesses.map((item, index) => (
          <div
            key={index}
            className="flex justify-between bg-zinc-900 px-5 py-4 rounded-xl"
          >
            <span className="text-zinc-300">
              {item.weakness}
            </span>

            <span className="text-red-400 font-bold">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weakness;