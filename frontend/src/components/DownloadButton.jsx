import API from "../services/api";

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await API.get("/resumes/report", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(
        new Blob([response.data], { type: "application/pdf" })
      );

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "report.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
      alert("Failed to download report");
    }
  };

  return (
    <div className="flex justify-center mt-8 sm:mt-10">
      <button
        onClick={handleDownload}
        className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-black rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:scale-105 hover:bg-zinc-100 transition"
      >
        Download PDF Report
      </button>
    </div>
  );
};

export default DownloadButton;