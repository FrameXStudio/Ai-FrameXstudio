import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-ai.jpg";

/* ================= SERVICES DATA ================= */
const services = [
  {
    icon: "🎬",
    title: "AI-Assisted Dubbing",
    tagline: "New Languages. Same Emotion.",
    text: "Performance-aware dialogue generation for films and premium OTT content.",
  },
  {
    icon: "👄",
    title: "Cinematic Lip Sync",
    tagline: "If You Notice It, It’s Not Good Enough.",
    text: "Film-grade lip sync aligned to on-screen performance for immersive viewing.",
  },
  {
    icon: "🌍",
    title: "Scalable Localization",
    tagline: "Go Global Without Starting Over.",
    text: "Expand into multiple languages without multiplying timelines or cost.",
  },
  {
    icon: "⚙️",
    title: "Post-Production Ready",
    tagline: "Fits Your Workflow.",
    text: "Editorial- and mix-ready outputs compatible with professional tools.",
  },
  {
    icon: "🎥",
    title: "Creative Control",
    tagline: "You Decide. AI Accelerates.",
    text: "Human-in-the-loop control for directors, producers, and post teams.",
  },
];

/* ================= MOTION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Home() {
  return (
    <div className="text-white">

      {/* ================= HERO ================= */}
      <section className="w-full py-24 px-6 bg-gradient-to-br from-[#0B1220] via-[#09192F] to-[#08101C] rounded-xl mt-6 shadow-lg overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          <motion.div
            className="flex-1"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold leading-tight">
              Stories Don’t Belong to <br />
              <span className="text-blue-400">One Language.</span>
            </motion.h1>

            <motion.h2 variants={fadeUp} className="mt-6 text-xl md:text-2xl font-semibold text-slate-200">
              AI-Powered Digital Studio for Film & OTT
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-300 mt-6 text-lg max-w-xl">
              <span className="font-semibold text-white">FrameX Digital Studio</span> helps studios
              take stories global without losing emotion, performance, or cinematic quality.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex gap-4 flex-wrap">
              <Link to="/contact" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium">
                Early Access
              </Link>
              <button className="px-6 py-3 border border-slate-400 hover:border-white rounded-lg text-slate-300">
                Watch a Sample
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={heroImg}
              alt="AI Studio"
              className="drop-shadow-[0_0_24px_#00aaff55]"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <motion.section
        className="relative mt-36 px-4 sm:px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        {/* Glow */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[700px] h-[420px] bg-blue-500/10 blur-[160px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-xs mb-6">
            FrameX Digital Studio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Built for Storytellers.
            <br />
            <span className="text-blue-400">Designed for Scale.</span>
          </h2>

          <p className="mt-8 text-slate-300 text-base sm:text-lg">
            Traditional localization slows releases, inflates budgets, and compromises performance.
            <span className="text-white font-medium"> FrameX</span> exists to change that.
          </p>

          <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto my-10" />

          <p className="text-slate-400 text-base sm:text-lg">
            We combine advanced AI with professional post-production workflows to move content
            across languages without sounding artificial or losing creative intent.
          </p>

          <div className="mt-10">
            <p className="text-slate-400 text-sm">This isn’t a shortcut.</p>
            <p className="text-white text-lg font-medium mt-1">
              This is a new standard for cinematic localization.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="mt-40 px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs mb-4">
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            What We Do
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-[#0C1424] to-[#070C16]
                         border border-slate-800 hover:border-blue-400/60
                         hover:shadow-[0_0_30px_#00aaff22] transition"
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="text-blue-300 text-sm mt-1">{s.tagline}</p>
              <p className="text-slate-400 text-sm mt-4">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

    </div>
  );
}
