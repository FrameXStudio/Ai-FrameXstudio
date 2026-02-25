import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Clapperboard,
  Mic2,
  Globe2,
  Settings2,
  Film,
  X,
  Play,
  ArrowRight,
  Sparkles,
  Layers,
  Wand2,
  AudioLines,
} from "lucide-react";
import heroImg from "../assets/hero-ai.jpg";

/* ================= LOCAL VIDEOS =================
   NOTE: Rename files to avoid spaces in filenames for safer builds.
   Example: "VIDEO-2026-02-06-10-34-49 2.mp4" -> "VIDEO-2026-02-06-10-34-49-2.mp4"
*/
import video1 from "../assets/videos/Sri-FrameX-English.mp4";
import video2 from "../assets/videos/Sri-FrameX-Hindi.mp4";
import video3 from "../assets/videos/VIDEO-2026-01-23-19-32-28.mp4";
import video4 from "../assets/videos/VIDEO-2026-02-06-10-34-49 2.mp4";
import video5 from "../assets/videos/VIDEO-2026-02-06-10-34-49.mp4";

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

/* ================= LOCAL VIDEO GALLERY =================
   No titles/descriptions.
*/
const localVideos = [{ src: video1 }, { src: video2 }, { src: video3 }, { src: video4 }, { src: video5 }];

/* ================= MOTION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const sectionStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

function Divider() {
  return (
    <div className="max-w-7xl mx-auto mt-16">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

/* ================= MOBILE CAROUSEL SNAP ================= */
function useCarouselSnap(ref) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handler = () => {
      const children = Array.from(el.children);
      if (!children.length) return;

      const elRect = el.getBoundingClientRect();
      const center = elRect.left + elRect.width / 2;

      let bestIdx = 0;
      let bestDist = Infinity;

      children.forEach((child, idx) => {
        const r = child.getBoundingClientRect();
        const childCenter = r.left + r.width / 2;
        const dist = Math.abs(center - childCenter);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });

      setActive(bestIdx);
    };

    handler();
    el.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);

    return () => {
      el.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, [ref]);

  const scrollToIndex = (idx) => {
    const el = ref.current;
    if (!el) return;
    const child = el.children[idx];
    if (!child) return;
    child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return { active, scrollToIndex };
}

/* ================= MODERN VIDEO UI ================= */
function VideoSectionHeader({ onPlayFirst }) {
  return (
    <motion.div variants={fadeUp} className="flex items-center justify-between mb-8">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
        <span className="h-2 w-2 rounded-full bg-blue-400/80" />
        Showcase
      </div>

      <button
        type="button"
        onClick={onPlayFirst}
        className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10 transition"
        aria-label="Play first video"
      >
        <span className="inline-flex items-center gap-2">
          <Play className="h-4 w-4 text-blue-200" />
          Play
        </span>
      </button>
    </motion.div>
  );
}

function VideoCard({ src, onOpen }) {
  const vidRef = useRef(null);

  const handleEnter = () => {
    const v = vidRef.current;
    if (!v) return;
    try {
      v.currentTime = 0;
      v.play();
    } catch {}
  };

  const handleLeave = () => {
    const v = vidRef.current;
    if (!v) return;
    try {
      v.pause();
      v.currentTime = 0;
    } catch {}
  };

  return (
    <motion.button
      variants={fadeUp}
      type="button"
      onClick={() => onOpen(src)}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="group relative w-full overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/7 to-white/[0.02]
                 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.95)] hover:border-blue-400/40 transition"
      aria-label="Play video"
    >
      {/* premium glow */}
      <div className="pointer-events-none absolute -inset-10 opacity-0 group-hover:opacity-100 transition duration-500
                      bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.28),transparent_60%)] blur-2xl" />

      <div className="relative aspect-video">
        <video
          ref={vidRef}
          className="h-full w-full object-cover opacity-95 group-hover:opacity-100 transition"
          src={src}
          preload="metadata"
          muted
          playsInline
          loop
        />

        {/* cinematic overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* play control (no text) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* ripple */}
            <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition">
              <span className="absolute inset-0 rounded-full bg-blue-400/15 blur-xl animate-pulse" />
            </div>

            <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur
                            shadow-[0_20px_60px_-35px_rgba(59,130,246,0.8)]
                            group-hover:scale-105 transition">
              <Play className="h-6 w-6 text-blue-200" />
            </div>
          </div>
        </div>
      </div>

      {/* subtle bottom gloss */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 opacity-0 group-hover:opacity-100 transition
                      bg-[linear-gradient(to_top,rgba(255,255,255,0.06),transparent)]" />
    </motion.button>
  );
}

export default function Home() {
  const [openForm, setOpenForm] = useState(false);
  const [selectedUseCase, setSelectedUseCase] = useState("");

  // Video modal
  const [openVideo, setOpenVideo] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);
  const closeBtnRef = useRef(null);

  // Mobile carousel
  const carouselRef = useRef(null);
  const { active: activeSlide, scrollToIndex } = useCarouselSnap(carouselRef);

  const workflowViews = useMemo(
    () => [
      { icon: Layers, title: "Ingest", text: "Upload dialogue, stems, or locked cut with metadata." },
      { icon: Wand2, title: "Generate + Adapt", text: "AI-assisted translation + performance-aware adaptation." },
      { icon: AudioLines, title: "Voice + Mix Ready", text: "Clean, editorial-friendly outputs ready for post tools." },
      { icon: Sparkles, title: "QC + Creative Control", text: "Human-in-the-loop approvals for intent and emotion." },
    ],
    []
  );

  const openVideoModal = (src) => {
    setActiveVideoSrc(src);
    setOpenVideo(true);
  };

  const closeVideoModal = () => {
    setOpenVideo(false);
    setActiveVideoSrc(null);
  };

  // ESC + focus
  useEffect(() => {
    if (!openVideo) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeVideoModal();
    };
    window.addEventListener("keydown", onKeyDown);
    setTimeout(() => closeBtnRef.current?.focus(), 0);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openVideo]);

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
          <motion.div className="lg:col-span-7" initial="hidden" animate="visible" variants={sectionStagger}>
            <motion.h1
              variants={fadeUp}
              className="text-[44px] leading-[1.05] sm:text-6xl lg:text-[74px] font-semibold tracking-tight"
            >
              Stories Don’t Belong to
              <br />
              <span className="text-blue-400">One Language.</span>
            </motion.h1>

            <motion.h2 variants={fadeUp} className="mt-8 text-2xl sm:text-3xl font-semibold text-white/90">
              AI-Powered Digital Studio for Film & OTT
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              <span className="text-white font-semibold">FrameX AI Studio</span> helps studios, OTT platforms, and
              creators take stories global — without losing emotion, performance, or cinematic quality.
            </motion.p>

            <motion.p variants={fadeUp} className="mt-6 text-slate-400 text-lg leading-relaxed max-w-2xl">
              From AI-assisted dubbing to invisible lip sync, we turn one story into many languages — faster, smarter,
              and story-first.
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

            <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row gap-4 sm:items-center">
              <button
                onClick={() => {
                  setSelectedUseCase("");
                  setOpenForm(true);
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 font-semibold text-lg
                           shadow-[0_18px_60px_-22px_rgba(59,130,246,0.75)] transition ring-1 ring-white/10"
              >
                Book a Demo
              </button>

              <button
                onClick={() => openVideoModal(localVideos[0]?.src)}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl border border-white/25 bg-white/5 hover:bg-white/10
                           text-slate-200 font-semibold text-lg transition inline-flex items-center justify-center gap-2"
              >
                <Play className="h-5 w-5" />
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
                <img src={heroImg} alt="FrameX AI Studio" className="w-full h-auto rounded-[22px] object-cover" loading="lazy" />
              </div>
            </div>
          </motion.div>
        </div>

        <Divider />
      </section>

      {/* ================= VIEW GRID (Workflow) ================= */}
      <section className="relative px-6 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_10%,rgba(59,130,246,0.10),transparent_55%)]" />

        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-blue-400 mb-3">Production Workflow</p>
              <h2 className="text-3xl sm:text-4xl font-semibold">A studio-friendly pipeline</h2>
              <p className="mt-3 text-slate-400 max-w-2xl">
                Designed to plug into real post-production—fast iteration, clear handoffs, and consistent outputs.
              </p>
            </div>

            <button
              onClick={() => setOpenForm(true)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3
                         text-sm font-semibold text-slate-200 hover:bg-white/10 transition"
            >
              Get a walkthrough <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowViews.map((v, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-3xl p-7 bg-gradient-to-br from-white/6 to-white/[0.02] border border-white/10
                           shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)] hover:border-blue-400/40 transition"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
                                bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_55%)]" />
                <div className="relative">
                  <div className="mb-5 w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500/10 ring-1 ring-white/10 text-blue-300">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Divider />
      </section>

      {/* ================= VIDEO SECTION (Modern, no titles/descriptions) ================= */}
      <section className="relative px-6 py-16 sm:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.12),transparent_58%)]" />

        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={sectionStagger}
        >
          <VideoSectionHeader onPlayFirst={() => openVideoModal(localVideos[0]?.src)} />

          {/* Desktop Grid */}
          <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {localVideos.map((v, i) => (
              <VideoCard key={i} src={v.src} onOpen={openVideoModal} />
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="sm:hidden">
            <div
              ref={carouselRef}
              className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory scroll-smooth
                         [scrollbar-width:none] [-ms-overflow-style:none] no-scrollbar"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {/* Hide scrollbar for webkit */}
              <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
              `}</style>

              {localVideos.map((v, i) => (
                <div key={i} className="snap-center shrink-0 w-[86%] max-w-[340px]">
                  <VideoCard src={v.src} onOpen={openVideoModal} />
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {localVideos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to video ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === activeSlide ? "bg-blue-400" : "bg-white/20 hover:bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        <Divider />
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
            <p className="uppercase tracking-[0.3em] text-xs text-blue-400 mb-4">Capabilities</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">What We Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-3xl p-8 bg-gradient-to-br from-white/6 to-white/[0.02] border border-white/10
                           shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)] transition-all duration-300
                           hover:-translate-y-1 hover:border-blue-400/40"
              >
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_55%)]" />
                <div className="relative">
                  <div className="mb-6 w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-blue-500/5
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

        <Divider />
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
            <p className="uppercase tracking-[0.25em] text-xs text-blue-400 mb-4">Use Cases</p>
            <h2 className="text-3xl sm:text-4xl font-semibold">Built for Every Industry</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((group, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative rounded-3xl p-7 bg-gradient-to-br from-white/6 to-white/[0.02] border border-white/10
                           shadow-[0_25px_80px_-60px_rgba(0,0,0,0.9)] hover:border-blue-400/40 transition"
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

        <Divider />
      </section>

      {/* ================= EARLY ACCESS MODAL ================= */}
      {openForm && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Request Early Access"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpenForm(false);
          }}
        >
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gradient-to-b from-[#071426] to-[#060F1E] p-6 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)]">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-white">Request Early Access</h3>
              <button
                onClick={() => setOpenForm(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                aria-label="Close"
              >
                <X />
              </button>
            </div>

            {selectedUseCase && (
              <p className="text-sm text-slate-400 mb-4">
                Use Case: <span className="text-blue-400 font-medium">{selectedUseCase}</span>
              </p>
            )}

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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

      {/* ================= VIDEO MODAL (Local Player) ================= */}
      {openVideo && activeVideoSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video Player"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeVideoModal();
          }}
        >
          <div className="relative w-full max-w-5xl">
            <div className="mb-3 flex items-center justify-end">
              <button
                ref={closeBtnRef}
                onClick={closeVideoModal}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 hover:bg-white/10 transition"
                aria-label="Close video"
              >
                <X className="h-4 w-4" />
                <span className="text-xs text-slate-200">Close</span>
              </button>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_90px_-50px_rgba(0,0,0,0.9)] bg-black">
              <video className="w-full h-full" src={activeVideoSrc} controls autoPlay playsInline />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}