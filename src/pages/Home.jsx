import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/hero-ai.png";

/* ================= SERVICES DATA ================= */
const services = [
  {
    icon: "🎬",
    title: "AI-Assisted Dubbing",
    tagline: "New Languages. Same Emotion.",
    text: "Natural, performance-aware dialogue generation for films and premium OTT content.",
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

/* ================= MOTION VARIANTS ================= */
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
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Home() {
  return (
    <div className="text-white">

      {/* ================= HERO ================= */}


      <section className="w-full py-24 px-6 bg-gradient-to-br from-[#0B1220] via-[#09192F] to-[#08101C] rounded-xl mt-6 shadow-lg overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* TEXT */}
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

            <motion.h2
              variants={fadeUp}
              className="mt-6 text-xl md:text-2xl font-semibold text-slate-200"
            >
              AI-Powered Digital Studio for Film & OTT
            </motion.h2>

            <motion.p variants={fadeUp} className="text-slate-300 mt-6 text-lg max-w-xl">
              <span className="font-semibold text-white">FrameX Digital Studio</span> helps studios,
              OTT platforms, and creators take stories global — without losing emotion,
              performance, or cinematic quality.
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 mt-4 max-w-xl">
              From AI-assisted dubbing to invisible lip sync, we turn one story into many
              languages — faster, smarter, and story-first.
            </motion.p>

            <motion.ul variants={fadeUp} className="mt-6 space-y-3 text-slate-300">
              <li>🎬 Built for studios</li>
              <li>🌍 Designed for global releases</li>
              <li>🎭 Trusted by post-production teams</li>
            </motion.ul>

            <motion.div variants={fadeUp} className="mt-10 flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium shadow-md"
              >
                Book a Demo
              </Link>

              <button className="px-6 py-3 border border-slate-400 hover:border-white rounded-lg text-slate-300 font-medium">
                Watch a Sample
              </button>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={heroImg}
              alt="AI Powered Studio"
              className="w-auto max-w-full h-auto drop-shadow-[0_0_20px_#00aaff55]"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= SHORT ABOUT ================= */}
      <motion.section
        className="mt-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Built for Storytellers.{" "}
            <span className="text-blue-400">Designed for Scale.</span>
          </h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Traditional localization slows releases, inflates budgets, and compromises performance.
            <span className="text-white font-medium"> FrameX Digital Studio</span> exists to change that.
          </p>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto">
            We combine advanced AI with professional post-production workflows to help content move
            across languages without sounding artificial, looking dubbed, or losing creative intent.
          </p>

          <p className="mt-6 text-slate-300 font-medium">
            This isn’t a shortcut.
            <br />
            <span className="text-white">
              This is a new standard for cinematic localization.
            </span>
          </p>
        </div>
      </motion.section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="mt-24 px-6">
        <motion.h2
          className="text-3xl font-semibold text-white mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          What We Do
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-[#0D1525] border border-slate-700 p-8 rounded-2xl
                         hover:border-blue-400 hover:shadow-[0_0_20px_#00aaff33]
                         transition text-center"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-1">{s.title}</h3>
              <p className="text-blue-300 text-sm mb-4">{s.tagline}</p>
              <p className="text-slate-300 text-sm">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <motion.section
        className="mt-24 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUp}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Why Choose <span className="text-blue-400">FrameX?</span>
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto">
            Built to meet real-world studio demands — where speed, scale,
            and cinematic quality must coexist.
          </p>
        </div>
      </motion.section>

    </div>
  );
}
