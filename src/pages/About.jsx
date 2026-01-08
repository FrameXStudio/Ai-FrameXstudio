import React from "react";
import { motion } from "framer-motion";

// 👉 Images
import storyImg from "../assets/about-story.png";
import workflowImg from "../assets/about-workflow.png";
import indiaImg from "../assets/about-india.png";
import founderImg from "../assets/director.jpeg";

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function About() {
  return (
    <div className="text-white px-6 py-20 max-w-7xl mx-auto">

      {/* ================= PAGE INTRO ================= */}
      <motion.section
        className="max-w-3xl mx-auto text-center mb-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-3xl font-bold mb-6">
          Where Technology Meets{" "}
          <span className="text-blue-400">Storytelling</span>
        </h1>

        <p className="text-slate-300 text-lg leading-relaxed">
          Framex Digital Studio is an AI-powered creative technology company
          built for the film and streaming industry.
        </p>
      </motion.section>

      {/* ================= COMPANY STORY ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center mb-32">

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl font-semibold text-blue-300">
            Company Story
          </h2>

          <p className="text-slate-300">
            We saw a gap between the global demand for content
            and outdated localization workflows.
          </p>

          <p className="text-slate-300">
            Studios were forced to choose between
            <span className="text-white font-medium"> speed, cost, and quality.</span>
          </p>

          <p className="text-slate-300">
            We believe they shouldn’t have to.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <img
            src={storyImg}
            alt="Global storytelling"
            className="rounded-2xl shadow-xl object-cover w-full h-[380px]"
          />
        </motion.div>
      </section>

      {/* ================= WORKFLOW IMAGE ================= */}
      <motion.section
        className="mb-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <img
          src={workflowImg}
          alt="AI post-production workflow"
          className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
        />
      </motion.section>

      {/* ================= VISION ================= */}
      <section className="mb-32">

        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technology That Knows When to{" "}
            <span className="text-blue-400">Step Back</span>
          </h2>

          <p className="text-slate-300 text-lg">
            We believe AI should support creativity, not replace it.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              title: "AI Handles Repetition",
              text: "Automation takes care of repetitive, time-consuming tasks.",
            },
            {
              title: "Humans Make Decisions",
              text: "Creative teams stay in control of performance and intent.",
            },
            {
              title: "Story Comes First",
              text: "Every tool is built to protect narrative and emotion.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-[#0D1525] border border-slate-700 rounded-xl p-8
                         hover:border-blue-400 hover:shadow-[0_0_20px_#00aaff33]
                         transition"
            >
              <h3 className="text-xl font-semibold text-blue-300 mb-3">
                {item.title}
              </h3>
              <p className="text-slate-300">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mt-12">
          We build tools that disappear into the workflow —
          so audiences only see the story, not the technology behind it.
        </p>
      </section>

      {/* ================= FOUNDER ================= */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <img
            src={founderImg}
            alt="Founder of Framex Digital Studio"
            className="rounded-2xl shadow-xl object-cover object-top w-full h-[420px]"
          />
        </motion.div>

        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Built by a{" "}
            <span className="text-blue-400">Storyteller</span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed">
            Framex was founded by someone who has lived inside the realities of
            storytelling — tight deadlines, creative pressure, and compromise.
          </p>

          <blockquote className="border-l-4 border-blue-400 pl-6 italic text-slate-200">
            “Technology should disappear into the background —
            so creators can stay focused on emotion, performance, and story.”
          </blockquote>

          <div className="pt-4">
            <p className="text-white font-semibold text-lg">Director Of Engineering</p>
            <p className="text-slate-400">
              Srikanth Enugula, Framex Digital Studio
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= INDIA ================= */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center
                   bg-gradient-to-br from-[#0B1220] via-[#09192F] to-[#08101C]
                   rounded-2xl p-12 md:p-16 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <img
          src={indiaImg}
          alt="India storytelling ecosystem"
          className="rounded-2xl shadow-lg object-cover w-full h-[380px]"
        />

        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Built Where Storytelling Is{" "}
            <span className="text-blue-400">Hardest</span>
          </h2>

          <p className="text-slate-300 text-lg mb-6">
            India is one of the most demanding content ecosystems in the world.
          </p>

          <ul className="space-y-3 text-slate-300 mb-6">
            <li>• Multiple languages</li>
            <li>• Massive scale</li>
            <li>• Unforgiving audiences</li>
          </ul>

          <p className="text-slate-300">
            If it works here, it works anywhere.
          </p>
        </div>
      </motion.section>

    </div>
  );
}
