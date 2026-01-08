import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

import { auth, db } from "../firebase";

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [loginType, setLoginType] = useState("user");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Signing you in...");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        throw new Error("User data not found");
      }

      const userData = userSnap.data();

      if (loginType !== userData.role) {
        throw new Error(
          loginType === "admin"
            ? "You are not authorized as an employee"
            : "Please use User Login"
        );
      }

      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
          role: userData.role,
        })
      );

      localStorage.setItem("token", user.accessToken);

      toast.success("Login successful!", { id: toastId });

      navigate(loginType === "admin" ? "/admin" : "/");
    } catch (error) {
      toast.error(error.message || "Login failed", { id: toastId });
    }

    setLoading(false);
  };

  return (
    <motion.div
      className="min-h-screen flex justify-center items-center bg-[#0B1220] px-6"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.div
        className="bg-[#0F172A] p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700"
        variants={fadeUp}
      >
        <h1 className="text-3xl font-semibold text-white mb-6 text-center">
          Login
        </h1>

        {/* LOGIN TYPE TOGGLE */}
        <div className="flex gap-2 mb-6">
          {["user", "admin"].map((type) => (
            <motion.button
              key={type}
              type="button"
              whileTap={{ scale: 0.96 }}
              onClick={() => setLoginType(type)}
              className={`flex-1 py-2 rounded transition ${
                loginType === type
                  ? "bg-blue-600 text-white"
                  : "bg-[#1E293B] text-slate-300"
              }`}
            >
              {type === "user" ? "User Login" : "Employee Login"}
            </motion.button>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <label className="text-slate-300 block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white border border-gray-600"
              required
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="text-slate-300 block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white border border-gray-600"
              required
            />
          </motion.div>

          <motion.button
            variants={fadeUp}
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </motion.button>
        </motion.form>

        {loginType === "user" && (
          <motion.p
            className="text-slate-400 text-center mt-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-blue-400 cursor-pointer hover:underline"
            >
              Register
            </span>
          </motion.p>
        )}
      </motion.div>
    </motion.div>
  );
}
