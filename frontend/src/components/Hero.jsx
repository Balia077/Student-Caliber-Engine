import React from "react";
import Navbar from "./Navbar";
import Upload from "./Upload";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-24 text-center text-white">
          <h1 className="text-6xl font-bold leading-tight">
            Student Caliber
            <span className="text-green-400"> Engine</span>
          </h1>

          <p className="text-zinc-400 mt-6 text-lg max-w-3xl mx-auto">
            Analyze student resumes at scale using a deterministic
            ATS-based scoring engine built for colleges and
            placement cells.
          </p>
        </div>

        <Upload />
      </div>
    </div>
  );
};

export default Hero;