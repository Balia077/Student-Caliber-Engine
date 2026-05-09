import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-16 sm:h-20 w-full border-b border-zinc-800 bg-zinc-950 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <h2 className="font-bold text-lg sm:text-2xl shrink-0">
          Student Caliber{" "}
          <span className="text-green-400">Engine</span>
        </h2>

        {/* Desktop user info + logout */}
        <div className="hidden sm:flex items-center gap-4 sm:gap-5">
          <div className="text-right">
            <p className="font-semibold text-sm sm:text-base truncate max-w-[160px] sm:max-w-xs">
              {user?.collegeName}
            </p>
            <p className="text-zinc-500 text-xs sm:text-sm truncate max-w-[160px] sm:max-w-xs">
              {user?.email}
            </p>
          </div>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 rounded-xl font-semibold text-sm sm:text-base hover:bg-red-600 transition shrink-0"
          >
            Logout
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="sm:hidden bg-zinc-900 border-t border-zinc-800 px-4 py-4 flex flex-col gap-3">
          <div>
            <p className="font-semibold text-white text-sm">{user?.collegeName}</p>
            <p className="text-zinc-500 text-xs">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="w-full px-4 py-2 bg-red-500 rounded-xl font-semibold text-sm hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;