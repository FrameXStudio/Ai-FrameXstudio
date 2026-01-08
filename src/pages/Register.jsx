import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
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

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const toastId = toast.loading("Creating your account...");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        email: form.email,
        role: "user",
        createdAt: new Date(),
      });

      toast.success(
        "Account created successfully! Please login.",
        { id: toastId }
      );

      navigate("/login");
    } catch (error) {
      toast.error(error.message || "Registration failed", {
        id: toastId,
      });
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
          Create Account
        </h1>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUp}>
            <label className="text-slate-300 block mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#1E293B] text-white border border-gray-600"
              required
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <label className="text-slate-300 block mb-1">Email</label>
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
            <label className="text-slate-300 block mb-1">Password</label>
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
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition font-medium"
          >
            {loading ? "Creating Account..." : "Register"}
          </motion.button>
        </motion.form>

        <motion.p
          className="text-slate-400 text-center mt-4"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
