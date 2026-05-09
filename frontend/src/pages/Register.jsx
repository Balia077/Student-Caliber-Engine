import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import API from "../services/api";

import { useAuth } from "../context/AuthContext";

const Register = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] =
    useState({
      collegeName: "",
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post(
        "/auth/register",
        formData
      );

      login(
        res.data.user,
        res.data.token
      );

      navigate("/");
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-zinc-900 border border-zinc-800 p-10 rounded-3xl w-[400px]"
      >
        <h1 className="text-white text-4xl font-bold mb-8">
          Register
        </h1>

        <input
          type="text"
          name="collegeName"
          placeholder="College Name"
          onChange={handleChange}
          className="w-full bg-zinc-800 text-white p-4 rounded-xl mb-4 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full bg-zinc-800 text-white p-4 rounded-xl mb-4 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full bg-zinc-800 text-white p-4 rounded-xl mb-6 outline-none"
        />

        <button className="w-full bg-green-400 text-black font-bold py-4 rounded-xl">
          Register
        </button>

        <p className="text-zinc-400 mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;