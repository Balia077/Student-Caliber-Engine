import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    collegeName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", formData);
      login(res.data.user, res.data.token);
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex justify-center items-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-zinc-800 p-6 sm:p-10 rounded-2xl sm:rounded-3xl w-full max-w-sm sm:max-w-md"
      >
        <div className="mb-6 sm:mb-8">
          <h1 className="text-white text-3xl sm:text-4xl font-bold">Register</h1>
          <p className="text-zinc-500 text-sm mt-1">Create your institution account</p>
        </div>

        <input
          type="text"
          name="collegeName"
          placeholder="College Name"
          onChange={handleChange}
          required
          className="w-full bg-zinc-800 text-white p-3.5 sm:p-4 rounded-xl mb-3 sm:mb-4 outline-none text-sm sm:text-base placeholder:text-zinc-500 focus:ring-2 focus:ring-green-400 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="w-full bg-zinc-800 text-white p-3.5 sm:p-4 rounded-xl mb-3 sm:mb-4 outline-none text-sm sm:text-base placeholder:text-zinc-500 focus:ring-2 focus:ring-green-400 transition"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="w-full bg-zinc-800 text-white p-3.5 sm:p-4 rounded-xl mb-5 sm:mb-6 outline-none text-sm sm:text-base placeholder:text-zinc-500 focus:ring-2 focus:ring-green-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-green-400 text-black font-bold py-3.5 sm:py-4 rounded-xl text-sm sm:text-base hover:bg-green-300 transition"
        >
          Register
        </button>

        <p className="text-zinc-400 mt-4 sm:mt-5 text-sm sm:text-base text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:text-green-300 transition">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;