import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Clapperboard,
  Mic2,
  Globe2,
  Settings2,
  Film,
  X,
} from "lucide-react";
import heroImg from "../assets/hero-ai.jpg";

/* ================= SERVICES ================= */
const services = [
  {
    icon: Clapperboard,
    title: "AI-Assisted Dubbing",
    tagline: "New Languages. Same Emotion.",
    text: "Performance-aware dialogue generation for films and premium OTT content.",
  },
  {
    icon: Mic2,
    title: "Cinematic Lip Sync",
    tagline: "If You Notice It, It’s Not Good Enough.",
    text: "Film-grade lip sync aligned to on-screen performance.",
  },
  {
    icon: Globe2,
    title: "Scalable Localization",
    tagline: "Go Global Without Starting Over.",
    text: "Expand into multiple languages without multiplying timelines or cost.",
  },
  {
    icon: Settings2,
    title: "Post-Production Ready",
    tagline: "Fits Your Workflow.",
    text: "Editorial- and mix-ready outputs compatible with professional tools.",
  },
  {
    icon: Film,
    title: "Creative Control",
    tagline: "You Decide. AI Accelerates.",
    text: "Human-in-the-loop control for directors and post teams.",
  },
];

/* ================= USE CASES ================= */
const useCases = [
  {
    title: "Entertainment & OTT",
    items: [
      "Movie & Web Series Localization",
      "Anime & Animation Dubbing",
      "Re-dubbing Old Classics",
      "Dialogue Replacement & Censorship",
    ],
  },
  {
    title: "Creators & Influencers",
    items: [
      "YouTube Multi-language Channels",
      "Podcasts & Interviews",
      "Music Localization",
      "Virtual Influencers",
    ],
  },
  {
    title: "Enterprise & Corporate",
    items: [
      "Corporate Training Videos",
      "CEO Announcements",
      "Product Demos",
      "Internal Communications",
    ],
  },
  {
    title: "Marketing & Government",
    items: [
      "Multi-language Ad Campaigns",
      "Political Campaigns",
      "Public Awareness Programs",
      "Tourism Promotion",
    ],
  },
  {
    title: "Education & EdTech",
    items: [
      "Online Universities",
      "EdTech Platforms",
      "Course Localization",
      "Instructor Voice Preservation",
    ],
  },
  {
    title: "Gaming & Future Tech",
    items: [
      "Game Character Dubbing",
      "Cutscene Localization",
      "Live Streaming Dubbing",
      "Metaverse & Digital Humans",
    ],
  },
];

/* ================= MOTION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sectionStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState("");

  return (
    <div className="text-white overflow-hidden relative">
      {/* GLOBAL BACKDROP */}
      <div className="fixed inset-0 -z-50 bg-[#050A14]" />
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_55%)]" />
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="fixed inset-0 -z-50 opacity-25 [mask-image:radial-gradient(70%_55%_at_50%_20%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-20 sm:pt-24 pb-20 sm:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* LEFT */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={sectionStagger}
          >
            <motion.h1
              variants={fadeUp}
              className="text-[44px] leading-[1.05] sm:text-6xl lg:text-[74px] font-semibold tracking-tight"
            >
              Stories Don’t Belong to
              <br />
              <span className="text-blue-400">One Language.</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="mt-8 text-2xl sm:text-3xl font-semibold text-white/90"
            >
              AI-Powered Digital Studio for Film & OTT
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl"
            >
              <span className="text-white font-semibold">FrameX AI Studio</span>{" "}
              helps studios, OTT platforms, and creators take stories global — without
              losing emotion, performance, or cinematic quality.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl"
            >
              From AI-assisted dubbing to invisible lip sync, we turn one story into
              many languages — faster, smarter, and story-first.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <span className="text-xl">🎬</span>
                <span className="text-base sm:text-lg">Built for studios</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🌍</span>
                <span className="text-base sm:text-lg">Designed for global releases</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">🎭</span>
                <span className="text-base sm:text-lg">Trusted by post-production teams</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <button
                onClick={() => {
                  setSelectedUseCase("");
                  setOpenForm(true);
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 font-semibold text-lg
                           shadow-[0_18px_60px_-22px_rgba(59,130,246,0.75)] transition
                           ring-1 ring-white/10"
              >
                Book a Demo
              </button>

              <button
                onClick={() => setOpenVideo(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-white/25 bg-white/5 hover:bg-white/10
                           text-slate-200 font-semibold text-lg transition"
              >
                Watch a Sample
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            className="lg:col-span-5 lg:pt-6"
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_60%)] blur-2xl opacity-80" />
              <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02] p-3 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.9)]">
                <img
                  src={heroImg}
                  alt="FrameX AI Studio"
                  className="w-full h-auto rounded-[22px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* PREMIUM DIVIDER */}
        <div className="max-w-7xl mx-auto mt-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className="relative px-6 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.10),transparent_55%)]" />

        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight">
              Built for Storytellers.
              <br />
              <span className="text-blue-400">Designed for Scale.</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-7 relative pl-0 lg:pl-10">
            <div className="hidden lg:block absolute left-0 top-1 w-px h-full bg-gradient-to-b from-blue-400/60 via-white/10 to-transparent" />

            <div className="space-y-8 max-w-2xl">
              <p className="text-slate-300 text-lg leading-relaxed">
                Traditional localization slows releases, inflates budgets, and compromises
                performance.{" "}
                <span className="text-white font-medium">FrameX AI Studio</span> exists
                to change that.
              </p>

              <p className="text-slate-400 text-base leading-relaxed">
                We combine advanced AI with professional post-production workflows to help
                content move across languages without sounding artificial, looking dubbed,
                or losing creative intent.
              </p>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.6)]">
                <p className="text-slate-300 text-lg font-medium leading-relaxed">
                  This isn’t a shortcut.
                  <br />
                  <span className="text-white">This is a new standard for cinematic localization.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="max-w-7xl mx-auto mt-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative px-6 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent_55%)]" />

        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14 sm:mb-20">
            <p className="uppercase tracking-[0.3em] text-xs text-blue-400 mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold">What We Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-3xl p-8
                           bg-gradient-to-br from-white/6 to-white/[0.02]
                           border border-white/10
                           shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)]
                           transition-all duration-300
                           hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_55%)]" />

                <div className="relative">
                  <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center
                                  bg-gradient-to-br from-blue-500/20 to-blue-500/5
                                  text-blue-400 ring-1 ring-white/10">
                    <s.icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold mb-1">{s.title}</h3>
                  <p className="text-blue-300 text-sm mb-3">{s.tagline}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto mt-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="px-6 py-16 sm:py-20">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div variants={fadeUp} className="text-center mb-14 sm:mb-16">
            <p className="uppercase tracking-[0.25em] text-xs text-blue-400 mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Built for Every Industry
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-3xl p-7
                           bg-gradient-to-br from-white/6 to-white/[0.02]
                           border border-white/10
                           shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)]
                           hover:border-blue-400/40 transition"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.16),transparent_60%)]" />
                <div className="relative">
                  <h3 className="text-lg font-semibold mb-4">{group.title}</h3>

                  <ul className="space-y-2 text-slate-400 text-sm mb-6">
                    {group.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="text-blue-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedUseCase(group.title);
                      setOpenForm(true);
                    }}
                    className="text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Request Early Access →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto mt-16">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </section>

      {/* ================= WHY CHOOSE FRAMEX ================= */}
      <section className="px-6 py-20 sm:py-24">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div variants={fadeUp}>
            <p className="uppercase tracking-widest text-xs text-blue-400 mb-4">
              Why FrameX
            </p>

            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-semibold leading-tight">
              Built to meet real-world
              <br />
              <span className="text-blue-400">studio demands</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 sm:p-8 shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)]">
              <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                Built to meet real-world studio demands where speed, scale, and cinematic
                quality must coexist.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= EARLY ACCESS MODAL ================= */}
      {openForm && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-[#071426] to-[#060F1E] p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white">Request Early Access</h3>
              <button
                onClick={() => setOpenForm(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
              >
                <X />
              </button>
            </div>

            {selectedUseCase && (
              <p className="text-sm text-slate-400 mb-4">
                Use Case:{" "}
                <span className="text-blue-400 font-medium">{selectedUseCase}</span>
              </p>
            )}

           <form className="space-y-4">
  <input
    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20"
    placeholder="Full Name"
  />

  <input
    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20"
    placeholder="Work Email"
    type="email"
  />

  <input
    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20"
    placeholder="Phone Number"
    type="tel"
    inputMode="tel"
  />

  <input
    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20"
    placeholder="Company / Studio"
  />

  <textarea
    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl outline-none focus:border-blue-400/50 focus:ring-2 focus:ring-blue-500/20 min-h-[120px] resize-none"
    placeholder="Message"
  />

  <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded-2xl font-semibold shadow-[0_18px_50px_-25px_rgba(59,130,246,0.75)] transition">
    Submit Request
  </button>
</form>

          </div>
        </div>
      )}

      {/* ================= VIDEO MODAL ================= */}
      {openVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] bg-black">
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 z-10 bg-black/60 border border-white/10 p-2 rounded-full hover:bg-black/80 transition"
            >
              <X />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="FrameX Demo"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}
