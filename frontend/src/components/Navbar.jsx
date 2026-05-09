import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="h-20 w-full border-b border-zinc-800 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl">
            Student Caliber{" "}
            <span className="text-green-400">
              Engine
            </span>
          </h2>
        </div>

        <div className="flex items-center gap-5">
          <div className="text-right">
            <p className="font-semibold">
              {user?.collegeName}
            </p>

            <p className="text-zinc-500 text-sm">
              {user?.email}
            </p>
          </div>

          <button
            onClick={logout}
            className="px-5 py-2 bg-red-500 rounded-xl font-semibold"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;