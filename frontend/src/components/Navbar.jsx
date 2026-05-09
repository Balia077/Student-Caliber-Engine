import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 w-full border-b border-zinc-800 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl">
            Student Caliber{" "}
            <span className="text-green-400">Engine</span>
          </h2>
        </div>

        <div className="hidden md:flex gap-10 text-zinc-300 font-medium">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Documentation</a>
        </div>

        <button className="px-5 py-2 bg-green-400 text-black rounded-xl font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;