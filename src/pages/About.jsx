import React, { useMemo } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
  ArrowRight,
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

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
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
    <div className="relative group">
      <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.26),transparent_60%)] blur-2xl opacity-70 group-hover:opacity-90 transition" />
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02] p-3 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.9)]"
      >
        <img
          src={src}
          alt={alt}
          className={`w-full rounded-[22px] object-cover ${className}`}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
}

function MiniCard({ icon: Icon, title, text }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="group relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02]
                 p-6 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)] hover:border-blue-400/35 transition"
    >
      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                      bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_55%)]" />
      <div className="relative">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10 text-blue-300">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-blue-300 mb-2">{title}</h3>
        <p className="text-slate-300 text-sm sm:text-base">{text}</p>
      </div>
    </motion.div>
  );
}

function JumpLinks() {
  const links = [
    { id: "leadership", label: "Leadership" },
    { id: "story", label: "Story" },
    { id: "vision", label: "Vision" },
    { id: "markets", label: "Markets" },
  ];

  return (
    <div className="sticky top-4 z-40 mt-10 sm:mt-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-xs text-white/70 hover:text-white hover:border-blue-400/30 hover:bg-white/5 transition"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              {l.label}
            </a>
          ))}

          <a
            href="/contact"
            className="ml-auto inline-flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-white/90 transition"
          >
            Contact <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  // Scroll progress bar (interactive but subtle)
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);

  const stats = useMemo(
    () => [
      { label: "AI + Post Workflows", value: "End-to-end" },
      { label: "Localization Focus", value: "Film & OTT" },
      { label: "Operating Regions", value: "USA + India" },
    ],
    []
  );

  return (
    <div className="relative text-white overflow-hidden">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-white/5">
        <motion.div style={{ width: progressWidth }} className="h-full bg-blue-400/70" />
      </div>

      {/* GLOBAL BACKDROP (premium) */}
      <div className="absolute inset-0 -z-50 bg-[#050A14]" />
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.16),transparent_55%)]" />
      <div className="absolute inset-0 -z-50 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.10),transparent_60%)]" />
      <div className="absolute inset-0 -z-50 opacity-25 [mask-image:radial-gradient(70%_55%_at_50%_20%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
        {/* ================= PAGE INTRO ================= */}
        <motion.section
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Pill icon={Sparkles}>About FrameX</Pill>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5"
          >
            Where Technology Meets{" "}
            <span className="text-blue-400">Storytelling</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            FrameX AI Studio is an AI-powered creative technology company built
            for the film and streaming industry.
          </motion.p>

          {/* Quick stats row */}
          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <p className="text-xs text-white/60">{s.label}</p>
                <p className="mt-1 text-sm font-semibold text-white">{s.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Sticky jump links */}
        <JumpLinks />

        <div className="mt-12">
          <Divider />
        </div>

        {/* ================= LEADERSHIP (Co-Founder) ================= */}
        <motion.section
          id="leadership"
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center py-16 sm:py-20 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          {/* IMAGE */}
          <motion.div variants={fadeUp} className="md:col-span-6 order-1">
            <PremiumImage
              src={coFounderImg}
              alt="Co-Founder of FrameX AI Studio"
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
              Driven by{" "}
              <span className="text-blue-400">Engineering Excellence</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              FrameX was founded by someone who has lived inside the realities of
              storytelling — tight deadlines, creative pressure, and compromise.
            </p>

            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)]"
            >
              <div className="absolute top-4 right-4 opacity-40">
                <Quote className="h-5 w-5 text-blue-300" />
              </div>
              <blockquote className="italic text-slate-200 text-sm sm:text-base leading-relaxed">
                “Technology should disappear into the background — so creators can
                stay focused on emotion, performance, and story.”
              </blockquote>
            </motion.div>

            <div className="pt-2">
              <p className="text-white font-semibold">Founder</p>
              <p className="text-slate-400 text-sm">
                Sridhar Enugula, FrameX AI Studio
              </p>
            </div>
          </motion.div>
        </motion.section>

        <Divider />

        {/* ================= FOUNDER (UPDATED CONTENT HERE) ================= */}
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
              alt="Co-Founder of FrameX AI Studio"
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

            {/* ✅ UPDATED LINE */}
            <div className="pt-2">
              <p className="text-white font-semibold">
                Co-Founder · Director of Engineering
              </p>
              <p className="text-slate-400 text-sm">
                Srikanth Enugula, FrameX AI Studio
              </p>
            </div>

            {/* Tiny interactive highlight */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-xs text-white/60">Focus</p>
              <p className="mt-1 text-sm text-slate-300">
                Reliability, scale, and production-ready AI for global content
                localization.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <Divider />

        {/* ================= COMPANY STORY ================= */}
        <motion.section
          id="story"
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center py-16 sm:py-20 scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div
            variants={fadeUp}
            className="md:col-span-6 space-y-4 sm:space-y-6"
          >
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

            {/* Interactive chips */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-2">
              {["Speed", "Cost", "Quality", "Consistency"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 hover:border-blue-400/35 hover:bg-white/10 transition"
                >
                  {t}
                </span>
              ))}
            </motion.div>
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
        <section id="vision" className="py-16 sm:py-20 scroll-mt-24">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={sectionStagger}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-4">
              <Pill icon={HeartHandshake}>Vision</Pill>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-4"
            >
              Technology That Knows When to{" "}
              <span className="text-blue-400">Step Back</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 text-base sm:text-lg"
            >
              We believe AI should support creativity, not replace it.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-120px" }}
            variants={sectionStagger}
          >
            <MiniCard
              icon={Brain}
              title="AI Handles Repetition"
              text="Automation takes care of repetitive, time-consuming tasks."
            />
            <MiniCard
              icon={User}
              title="Humans Make Decisions"
              text="Creative teams stay in control of performance and intent."
            />
            <MiniCard
              icon={Sparkles}
              title="Story Comes First"
              text="Every tool is built to protect narrative and emotion."
            />
          </motion.div>
        </section>

        <Divider />

        {/* ================= MARKETS / INDIA ================= */}
        <motion.section
          id="markets"
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center
                     rounded-[28px] border border-white/10
                     bg-gradient-to-br from-white/6 to-white/[0.02]
                     p-7 sm:p-10 md:p-12 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.95)]
                     my-16 sm:my-20 scroll-mt-24"
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
              Built Where Storytelling Is{" "}
              <span className="text-blue-400">Hardest</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg mb-5">
              India is one of the most demanding content ecosystems in the world.
            </p>

            <ul className="space-y-2 text-slate-300 mb-6 text-sm sm:text-base">
              <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-white/5 transition">
                • Multiple languages
              </li>
              <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-white/5 transition">
                • Massive scale
              </li>
              <li className="rounded-xl border border-white/10 bg-black/20 px-4 py-3 hover:bg-white/5 transition">
                • Unforgiving audiences
              </li>
            </ul>

            <motion.p variants={fadeIn} className="text-slate-300 text-base sm:text-lg">
              If it works here, it works anywhere.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* Bottom mini CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
          className="pb-4"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-[28px] border border-white/10 bg-white/5 p-8 sm:p-10 text-center"
          >
            <p className="text-slate-300">
              Want to see how FrameX AI Studio can help your next release?
            </p>
            <a
              href="/contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-white/90 transition"
            >
              Talk to us <ArrowRight className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}