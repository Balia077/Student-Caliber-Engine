const DownloadButton = () => {
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() =>
          window.open(
            "http://localhost:5000/api/resumes/report"
          )
        }
        className="px-8 py-4 bg-white text-black rounded-2xl font-bold hover:scale-105 transition"
      >
        Download PDF Report
      </button>
    </div>
  );
};

export default DownloadButton;