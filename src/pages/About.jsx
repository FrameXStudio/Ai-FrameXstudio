import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Quote,
  User,
  BadgeCheck,
  Wand2,
  Brain,
  HeartHandshake,
  Globe,
  Clapperboard,
} from "lucide-react";

// Images
import storyImg from "../assets/about-story.jpg";
import indiaImg from "../assets/about-india.jpg";
import founderImg from "../assets/director.jpg";
import coFounderImg from "../assets/coFounder.jpg";

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const sectionStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ================= SMALL UI HELPERS ================= */
function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

function Pill({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
      {Icon ? <Icon className="h-4 w-4 text-blue-300" /> : null}
      {children}
    </span>
  );
}

function PremiumImage({ src, alt, className = "" }) {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.26),transparent_60%)] blur-2xl opacity-80" />
      <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02] p-3 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.9)]">
        <img
          src={src}
          alt={alt}
          className={`w-full rounded-[22px] object-cover ${className}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="relative text-white overflow-hidden">
      {/* GLOBAL BACKDROP (premium) */}
      <div className="absolute inset-0 -z-50 bg-[#050A14]" />
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.16),transparent_55%)]" />
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.10),transparent_60%)]" />
      <div className="absolute inset-0 -z-50 opacity-25 [mask-image:radial-gradient(70%_55%_at_50%_20%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
        {/* ================= PAGE INTRO ================= */}
        <motion.section
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={fadeUp}
        >
          <div className="flex justify-center mb-4">
            <Pill icon={Sparkles}>About FrameX</Pill>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5">
            Where Technology Meets <span className="text-blue-400">Storytelling</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            FrameX Digital Studio is an AI-powered creative technology company
            built for the film and streaming industry.
          </p>
        </motion.section>

        <Divider />

        {/* ================= CO-FOUNDER ================= */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center py-16 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          {/* IMAGE FIRST ON MOBILE */}
          <motion.div variants={fadeUp} className="md:col-span-6 order-1">
            <PremiumImage
              src={coFounderImg}
              alt="Co-Founder of FrameX Digital Studio"
              className="h-[260px] sm:h-[320px] md:h-[440px]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-6 order-2 space-y-5 md:space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              <Pill icon={User}>Team</Pill>
              <Pill icon={BadgeCheck}>Leadership</Pill>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
              Driven by <span className="text-blue-400">Engineering Excellence</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              FrameX was founded by someone who has lived inside the realities of
              storytelling — tight deadlines, creative pressure, and compromise.
            </p>

            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)]">
              <div className="absolute top-4 right-4 opacity-40">
                <Quote className="h-5 w-5 text-blue-300" />
              </div>
              <blockquote className="italic text-slate-200 text-sm sm:text-base leading-relaxed">
                “Technology should disappear into the background — so creators can
                stay focused on emotion, performance, and story.”
              </blockquote>
            </div>

            <div className="pt-2">
              <p className="text-white font-semibold">Founder</p>
              <p className="text-slate-400 text-sm">
                Sridhar Enugula, FrameX Digital Studio
              </p>
            </div>
          </motion.div>
        </motion.section>

        <Divider />

        {/* ================= FOUNDER ================= */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center py-16 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          {/* IMAGE */}
          <motion.div variants={fadeUp} className="md:col-span-6">
            <PremiumImage
              src={founderImg}
              alt="Founder of FrameX Digital Studio"
              className="object-top h-[260px] sm:h-[320px] md:h-[440px]"
            />
          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-6 space-y-5 md:space-y-6"
          >
            <div className="flex flex-wrap gap-2">
              <Pill icon={Clapperboard}>Film & OTT</Pill>
              <Pill icon={Wand2}>AI Systems</Pill>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug tracking-tight">
              Built by a <span className="text-blue-400">Storyteller</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A Director of Engineering with 15+ years of experience leading
              AI-driven platforms and cloud-native architectures.
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              He specializes in scaling AI SaaS systems, ML-ready infrastructure,
              and DevSecOps practices—mentoring global teams and delivering AI
              solutions at scale.
            </p>

            <div className="pt-2">
              <p className="text-white font-semibold">
                Co-Founder · Director of Engineering
              </p>
              <p className="text-slate-400 text-sm">
                Srikanth Enugula, FrameX Digital Studio
              </p>
            </div>
          </motion.div>
        </motion.section>

        <Divider />

        {/* ================= COMPANY STORY ================= */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center py-16 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div variants={fadeUp} className="md:col-span-6 space-y-4 sm:space-y-6">
            <div className="flex flex-wrap gap-2">
              <Pill icon={Sparkles}>Origin</Pill>
              <Pill icon={Globe}>Global Scale</Pill>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-blue-300">
              Company Story
            </h2>

            <p className="text-slate-300 text-base sm:text-lg">
              We saw a gap between global demand for content and outdated
              localization workflows.
            </p>

            <p className="text-slate-300 text-base sm:text-lg">
              Studios were forced to choose between{" "}
              <span className="text-white font-medium">speed, cost, and quality.</span>
            </p>

            <p className="text-slate-300 text-base sm:text-lg">
              We believe they shouldn’t have to.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-6">
            <PremiumImage
              src={storyImg}
              alt="Global storytelling"
              className="h-[240px] sm:h-[300px] md:h-[420px]"
            />
          </motion.div>
        </motion.section>

        <Divider />

        {/* ================= VISION ================= */}
        <section className="py-16 sm:py-20">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={fadeUp}
          >
            <div className="flex justify-center mb-4">
              <Pill icon={HeartHandshake}>Vision</Pill>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4">
              Technology That Knows When to <span className="text-blue-400">Step Back</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg">
              We believe AI should support creativity, not replace it.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={sectionStagger}
          >
            {[
              {
                title: "AI Handles Repetition",
                text: "Automation takes care of repetitive, time-consuming tasks.",
                icon: Brain,
              },
              {
                title: "Humans Make Decisions",
                text: "Creative teams stay in control of performance and intent.",
                icon: User,
              },
              {
                title: "Story Comes First",
                text: "Every tool is built to protect narrative and emotion.",
                icon: Sparkles,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02]
                           p-6 sm:p-7 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)] hover:border-blue-400/40 transition"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                                bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_55%)]" />
                <div className="relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl
                                  bg-blue-500/10 ring-1 ring-white/10 text-blue-300">
                    <item.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-blue-300 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <Divider />

        {/* ================= INDIA ================= */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center
                     rounded-[28px] border border-white/10
                     bg-gradient-to-br from-white/6 to-white/[0.02]
                     p-7 sm:p-10 md:p-12 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.95)]
                     my-16 sm:my-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div variants={fadeUp} className="md:col-span-6">
            <PremiumImage
              src={indiaImg}
              alt="India storytelling ecosystem"
              className="h-[240px] sm:h-[300px] md:h-[420px]"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="md:col-span-6">
            <div className="flex flex-wrap gap-2 mb-5">
              <Pill icon={Globe}>Markets</Pill>
              <Pill icon={Sparkles}>Scale</Pill>
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold mb-5 tracking-tight">
              Built Where Storytelling Is <span className="text-blue-400">Hardest</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-5">
              India is one of the most demanding content ecosystems in the world.
            </p>

            <ul className="space-y-2 text-slate-300 mb-5 text-sm sm:text-base">
              <li>• Multiple languages</li>
              <li>• Massive scale</li>
              <li>• Unforgiving audiences</li>
            </ul>

            <p className="text-slate-300 text-base sm:text-lg">
              If it works here, it works anywhere.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
