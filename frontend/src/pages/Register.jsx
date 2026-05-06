import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", formData);

      navigate("/");

    } catch (error) {
      alert("Registration Failed");
    }
  };
return (

  <div className="min-h-screen flex justify-center items-center font-sans">

    <form
      onSubmit={handleSubmit}
      className="bg-white border border-slate-200 p-10 rounded-3xl shadow-2xl shadow-slate-200/50 w-[400px] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent pointer-events-none"></div>

      <div className="relative z-10">

      <h1 className="text-4xl text-slate-800 font-bold text-center mb-2 tracking-tight">
        FinTrack
      </h1>
      <p className="text-center text-slate-500 mb-8 font-medium text-sm">Create an account to get started.</p>

      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all mb-5"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all mb-5"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="w-full p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all mb-6"
      />

      <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white p-3.5 rounded-2xl font-bold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-0.5">
        Register
      </button>

      <p className="text-slate-500 mt-6 text-center font-medium">
        Already have an account?

        <Link
          to="/"
          className="text-emerald-600 hover:text-emerald-500 ml-2 font-bold transition-colors"
        >
          Login
        </Link>

      </p>

      </div>

    </form>

  </div>
);
}

export default Register;