import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [state, setState] = useState("login");
  const {login,signup}=useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (state === "login") {
      await login(formData.email, formData.password);
      setFormData({
    name: "",
    email: "",
    password: "",
  })
    } else {
      await signup(
        formData.name,
        formData.email,
        formData.password
      );
      setState("login");
      setFormData({
    name: "",
    email: "",
    password: "",
  }) // ✅ correct way
    }
  } catch (error) {
    console.error("Auth error:", error);
  }
};


  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm sm:max-w-md bg-white/6 border border-white/10 rounded-2xl px-6 sm:px-8 text-center"
      >
        <h1 className="text-white text-2xl sm:text-3xl mt-8 font-medium">
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-white/70 text-sm mt-2">
          Please sign in to continue
        </p>

        {/* Name */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-gray-500/60 h-12 rounded-full pl-6 gap-2 transition">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full bg-transparent text-white placeholder-white/60 outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="flex items-center w-full mt-4 bg-white/5 ring-2 ring-white/10 focus-within:ring-gray-500/60 h-12 rounded-full pl-6 gap-2 transition">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full bg-transparent text-white placeholder-white/60 outline-none"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full bg-white/5 ring-2 ring-white/10 focus-within:ring-gray-500/60 h-12 rounded-full pl-6 gap-2 transition">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent text-white placeholder-white/60 outline-none"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left">
          <button
            type="button"
            className="text-sm text-white/70 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 w-full h-11 rounded-full text-white bg-gray-800 hover:bg-gray-700 transition"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-white/70 text-sm mt-4 mb-8 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-indigo-400 hover:underline ml-1">
            Click here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
