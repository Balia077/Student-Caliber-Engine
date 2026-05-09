import { useRef, useState } from "react";
import API from "../services/api";
import Loader from "./Loader";
import Dashboard from "./Dashboard";

const Upload = () => {
  const fileRef = useRef();

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFiles = (selectedFiles) => {
    const pdfFiles = Array.from(selectedFiles).filter(
      (file) => file.type === "application/pdf"
    );
    setFiles((prev) => [...prev, ...pdfFiles]);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (index) => {
    const updated = [...files];
    updated.splice(index, 1);
    setFiles(updated);
  };

  const handleUpload = async () => {
    if (!files.length) {
      alert("Please select PDF files");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("resumes", file);
      });

      const response = await API.post("/resumes/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(response.data);
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 sm:py-16 md:py-20">
      <div className="w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
            Upload Student Resumes
          </h2>
          <p className="text-zinc-400 mt-2 sm:mt-3 text-sm sm:text-base">
            Upload PDF resumes to generate ATS analytics and Calibre Score
          </p>
        </div>

        {/* Drop zone */}
        <div
          onClick={() => fileRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`mt-6 sm:mt-10 border-2 border-dashed rounded-xl sm:rounded-2xl p-8 sm:p-12 md:p-16 text-center cursor-pointer transition select-none
            ${dragActive ? "border-green-400 bg-zinc-800" : "border-zinc-700 hover:border-zinc-500"}`}
        >
          <input
            type="file"
            multiple
            accept=".pdf"
            hidden
            ref={fileRef}
            onChange={handleChange}
          />

          {/* Upload icon */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <svg className="w-10 h-10 sm:w-14 sm:h-14 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>

          <h3 className="text-white text-lg sm:text-2xl font-semibold">
            Drag & Drop PDFs
          </h3>
          <p className="text-zinc-500 mt-2 text-sm sm:text-base">
            or click to browse files
          </p>
        </div>

        {/* File list */}
        {files.length > 0 && (
          <div className="mt-6 sm:mt-8">
            <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              Selected Files ({files.length})
            </h3>

            <div className="space-y-2 sm:space-y-3 max-h-48 sm:max-h-60 overflow-auto pr-1">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 text-zinc-300 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl flex justify-between items-center gap-3"
                >
                  <div className="min-w-0">
                    <p className="text-sm sm:text-base truncate">{file.name}</p>
                    <p className="text-xs sm:text-sm text-zinc-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-400 hover:text-red-300 text-sm shrink-0 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Upload button */}
        <div className="flex justify-center mt-6 sm:mt-10">
          <button
            onClick={handleUpload}
            disabled={loading}
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-green-400 text-black rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:scale-105 hover:bg-green-300 transition disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {loading ? "Processing..." : "Analyze Batch"}
          </button>
        </div>

        {loading && <Loader />}
        {result && <Dashboard data={result} />}
      </div>
    </div>
  );
};

export default Upload;