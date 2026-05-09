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

      const response = await API.post(
        "/resumes/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setResult(response.data);
    } catch (error) {
      console.log(error);

      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-3xl p-10 shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Upload Student Resumes
          </h2>

          <p className="text-zinc-400 mt-3">
            Upload PDF resumes to generate ATS analytics
            and Calibre Score
          </p>
        </div>

        <div
          onClick={() => fileRef.current.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`mt-10 border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer transition
          
          ${
            dragActive
              ? "border-green-400 bg-zinc-800"
              : "border-zinc-700"
          }
          `}
        >
          <input
            type="file"
            multiple
            accept=".pdf"
            hidden
            ref={fileRef}
            onChange={handleChange}
          />

          <h3 className="text-white text-2xl font-semibold">
            Drag & Drop PDFs
          </h3>

          <p className="text-zinc-500 mt-3">
            or click to browse files
          </p>
        </div>

        {files.length > 0 && (
          <div className="mt-8">
            <h3 className="text-white font-semibold mb-4">
              Selected Files ({files.length})
            </h3>

            <div className="space-y-3 max-h-60 overflow-auto">
              {files.map((file, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 text-zinc-300 px-4 py-3 rounded-xl flex justify-between items-center"
                >
                  <div>
                    <p>{file.name}</p>

                    <p className="text-sm text-zinc-500">
                      {(file.size / 1024).toFixed(1)} KB
                    </p>
                  </div>

                  <button
                    onClick={() => removeFile(index)}
                    className="text-red-400"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-center mt-10">
          <button
            onClick={handleUpload}
            disabled={loading}
            className="px-10 py-4 bg-green-400 text-black rounded-2xl font-bold text-lg hover:scale-105 transition"
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