import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Clapperboard,
  Mic2,
  Globe2,
  Settings2,
  Film,
  ArrowRight,
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
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState("");

  return (
    <div className="text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative px-6 pt-24 pb-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0B1220] via-[#09192F] to-[#060C18]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_60%)]" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
              Stories don’t belong to
              <br />
              <span className="text-blue-400">one language.</span>
            </h1>

            <p className="mt-6 text-slate-300 text-lg max-w-xl">
              FrameX Digital Studio helps studios and OTT platforms localize
              cinematic content without losing emotion, performance, or intent.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setSelectedUseCase("");
                  setOpenForm(true);
                }}
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 font-medium"
              >
                Request Early Access
              </button>

              <button
                onClick={() => setOpenVideo(true)}
                className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-white"
              >
                Watch Demo
              </button>
            </div>
          </motion.div>

          <motion.img
            src={heroImg}
            alt="FrameX AI Studio"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto
                       drop-shadow-[0_0_40px_#00aaff55]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
          />
        </div>
      </section>

      {/* ================= MANIFESTO ================= */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-blue-400 mb-6">
            FrameX Digital Studio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Built for Storytellers.
            <br />
            <span className="text-blue-400">Designed for Scale.</span>
          </h2>
          <p className="mt-6 text-slate-300 text-lg">
            Traditional localization slows releases and compromises performance.
            This is a new standard for cinematic localization.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 py-24 bg-[#060C18]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-xs text-blue-400 mb-4">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold">What We Do</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 bg-gradient-to-br from-[#0C1424] to-[#070C16]
                           border border-slate-800"
              >
                <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center
                                bg-blue-500/10 text-blue-400">
                  <s.icon size={22} />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-blue-300 text-sm mt-1">{s.tagline}</p>
                <p className="text-slate-400 text-sm mt-3">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-xs text-blue-400 mb-4">
              Use Cases
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Built for Every Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((group, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-6
                           bg-gradient-to-br from-[#0C1424] to-[#070C16]
                           border border-slate-800
                           hover:border-blue-400/50
                           hover:shadow-[0_0_40px_#00aaff22]
                           transition"
              >
                <h3 className="text-lg font-semibold mb-4">
                  {group.title}
                </h3>

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
            ))}
          </div>
        </div>
      </section>

      {/* ================= EARLY ACCESS MODAL ================= */}
      {openForm && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-[#071426] rounded-2xl p-6 border border-slate-800">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Request Early Access</h3>
              <button onClick={() => setOpenForm(false)}>
                <X />
              </button>
            </div>

            {selectedUseCase && (
              <p className="text-sm text-slate-400 mb-4">
                Use Case:{" "}
                <span className="text-blue-400 font-medium">
                  {selectedUseCase}
                </span>
              </p>
            )}

            <form className="space-y-4">
              <input className="w-full px-4 py-3 bg-[#0C1424] border border-slate-700 rounded-lg" placeholder="Full Name" />
              <input className="w-full px-4 py-3 bg-[#0C1424] border border-slate-700 rounded-lg" placeholder="Work Email" />
              <input className="w-full px-4 py-3 bg-[#0C1424] border border-slate-700 rounded-lg" placeholder="Company / Studio" />
              <button className="w-full py-3 bg-blue-500 rounded-lg font-medium">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ================= VIDEO MODAL ================= */}
      {openVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 z-10 bg-black/60 p-2 rounded-full"
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
