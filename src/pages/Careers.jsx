import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import toast from "react-hot-toast";

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ================= STATIC JOBS (NO ADMIN PANEL) ================= */
const JOBS = [
  {
    _id: "python-automation-dev",
    title: "Python / Automation Developer",
    dept: "Engineering",
    experience: "2+ years (flexible for strong automation-focused profiles)",
    location: ["Remote", "Hybrid", "On-site"],
    type: "Full-time",
    level: "Mid",
    createdAt: "2026-01-15",
    short:
      "Build robust batch pipelines, integrate APIs, and automate media-heavy workflows across video, audio, and AI processing.",
    tags: [
      "Python",
      "Automation",
      "Batch Processing",
      "FFmpeg",
      "OpenCV",
      "AsyncIO",
      "Airflow",
      "Luigi",
      "Audio",
      "APIs",
    ],
    about: [
      "We are looking for a Python / Automation Developer who specializes in building robust batch processing pipelines, integrating multiple APIs, and automating media-heavy workflows.",
      "This role focuses on creating reliable, scalable automation systems for video, audio, and AI-driven processing tasks.",
    ],
    responsibilities: [
      "Design and implement batch processing pipelines for large-scale media workflows",
      "Automate repetitive and time-consuming tasks using Python and shell scripting",
      "Integrate AI Media and Text APIs into processing pipelines",
      "Build and maintain video processing workflows using FFmpeg and OpenCV",
      "Perform audio manipulation and analysis using Librosa, Pydub, and related tools",
      "Orchestrate workflows using tools like Airflow or Luigi",
      "Implement strong error handling, retries, and logging mechanisms",
      "Optimize scripts for performance, scalability, and reliability",
      "Collaborate with AI/ML teams to integrate multiple AI services seamlessly",
    ],
    requirements: [
      {
        title: "Automation & Processing",
        items: [
          "Strong experience with batch processing systems",
          "Hands-on experience with video processing (FFmpeg, OpenCV)",
          "Experience with audio processing (Librosa, Pydub, SoundFile)",
          "Ability to automate complex workflows end-to-end",
        ],
      },
      {
        title: "Programming & Scripting",
        items: [
          "Proficiency in Python",
          "Experience with Bash / Shell scripting",
          "Strong understanding of asynchronous programming (AsyncIO)",
        ],
      },
      {
        title: "Libraries & Tools",
        items: [
          "Video: OpenCV, MoviePy, FFmpeg-python",
          "Audio: Librosa, Pydub, SoundFile",
          "Machine Learning: PyTorch, Transformers",
          "APIs: Requests, AsyncIO",
        ],
      },
      {
        title: "Workflow Orchestration",
        items: [
          "Experience with Airflow, Luigi, or similar orchestration tools",
          "Understanding of task scheduling, retries, and dependency management",
        ],
      },
    ],
    niceToHave: [
      "Experience working with AI-powered media pipelines",
      "Familiarity with Docker and containerized workflows",
      "Experience handling large-scale file processing systems",
      "Knowledge of cloud services (AWS, GCP, or Azure)",
    ],
  },
];

/* ================= SMALL UI HELPERS ================= */
function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-sm font-semibold tracking-wide text-white/90">
      {children}
    </h3>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2 text-sm text-white/75 leading-relaxed">
          <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/35" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/* ================= MODAL ================= */
function JobModal({ open, onClose, job }) {
  return (
    <AnimatePresence>
      {open && job && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeIn}
        >
          {/* Backdrop */}
          <button
            aria-label="Close modal"
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 22, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full sm:max-w-3xl max-h-[88vh] overflow-hidden rounded-t-3xl sm:rounded-3xl border border-white/10 bg-gradient-to-b from-slate-950 to-slate-900 shadow-2xl"
          >
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-white/10">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs text-white/50">
                    {job.dept} • {job.type} • {job.level}
                  </p>
                  <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-white truncate">
                    {job.title}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <Pill>📍 {job.location.join(" / ")}</Pill>
                    <Pill>🕒 {job.experience}</Pill>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 overflow-y-auto max-h-[calc(88vh-88px)]">
              {/* About */}
              <div className="space-y-3">
                <SectionTitle>About the Role</SectionTitle>
                <div className="space-y-2">
                  {job.about.map((p, i) => (
                    <p key={i} className="text-sm text-white/75 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Grid blocks */}
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <SectionTitle>Key Responsibilities</SectionTitle>
                  <div className="mt-3">
                    <BulletList items={job.responsibilities} />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <SectionTitle>Requirements</SectionTitle>
                  <div className="mt-3 space-y-4">
                    {job.requirements.map((group, idx) => (
                      <div key={idx}>
                        <p className="text-sm font-medium text-white/85">
                          {group.title}
                        </p>
                        <div className="mt-2">
                          <BulletList items={group.items} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Nice to have */}
              {job.niceToHave?.length ? (
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <SectionTitle>Nice to Have</SectionTitle>
                  <div className="mt-3">
                    <BulletList items={job.niceToHave} />
                  </div>
                </div>
              ) : null}

              {/* Tags */}
              <div className="mt-6">
                <SectionTitle>Skills & Tools</SectionTitle>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>

              {/* Footer actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <p className="text-xs text-white/45">
                  Tip: Make sure your CV highlights relevant automation projects,
                  media pipelines, and reliability (retries/logging/monitoring).
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(job.title);
                      toast.success("Copied job title");
                    }}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                  >
                    Copy Title
                  </button>
                  <button
                    onClick={() => {
                      toast.success("Open your apply form / route here");
                      // Navigate to your apply page or open your ApplyModal here.
                      // e.g. navigate(`/apply/${job._id}`)
                    }}
                    className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile grab handle */}
            <div className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 sm:hidden h-1.5 w-14 rounded-full bg-white/20" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ================= MAIN PAGE ================= */
export default function Careers() {
  const [queryText, setQueryText] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [locFilter, setLocFilter] = useState("All");

  const [selectedJob, setSelectedJob] = useState(null);
  const [open, setOpen] = useState(false);

  const locations = useMemo(() => {
    const set = new Set();
    JOBS.forEach((j) => j.location.forEach((l) => set.add(l)));
    return ["All", ...Array.from(set)];
  }, []);

  const types = useMemo(() => {
    const set = new Set(JOBS.map((j) => j.type));
    return ["All", ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    const q = queryText.trim().toLowerCase();
    return JOBS.filter((job) => {
      const matchesQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.short.toLowerCase().includes(q) ||
        job.tags.some((t) => t.toLowerCase().includes(q));

      const matchesType = typeFilter === "All" || job.type === typeFilter;
      const matchesLoc =
        locFilter === "All" || job.location.includes(locFilter);

      return matchesQuery && matchesType && matchesLoc;
    });
  }, [queryText, typeFilter, locFilter]);

  const onApplyClick = (job) => {
    // If you still want login gating:
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Please log in to apply");
      return;
    }

    // You can route to your existing ApplyModal here instead of toast:
    toast.success(`Applying for: ${job.title}`);
  };

  const openJob = (job) => {
    setSelectedJob(job);
    setOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 sm:p-10">
        <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(70%_55%_at_50%_30%,black,transparent)]">
          <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:26px_26px]" />
        </div>

        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.p
            variants={fadeUp}
            className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            We’re hiring
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="relative mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white"
          >
            Careers
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="relative mt-3 max-w-2xl text-sm sm:text-base text-white/70 leading-relaxed"
          >
            Join us to build reliable automation systems, media pipelines, and
            AI-powered workflows. We care about quality, scalability, and great
            engineering practices.
          </motion.p>

          {/* Stats row (optional) */}
          <motion.div
            variants={fadeUp}
            className="relative mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3"
          >
            {[
              { k: "Remote-friendly", v: "Work your way" },
              { k: "Automation", v: "Pipelines & APIs" },
              { k: "Media workflows", v: "Video + Audio" },
              { k: "Growth", v: "Learn & ship" },
            ].map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm font-semibold text-white">{s.k}</p>
                <p className="mt-1 text-xs text-white/60">{s.v}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* FILTER BAR */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <label className="text-xs text-white/60">Search</label>
            <div className="mt-1 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2">
              <span className="text-white/40">🔎</span>
              <input
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
                placeholder="Search by title, skills, tools..."
                className="w-full bg-transparent text-sm text-white/80 outline-none placeholder:text-white/30"
              />
            </div>
          </div>

          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <div>
              <label className="text-xs text-white/60">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-white/80 outline-none"
              >
                {types.map((t) => (
                  <option key={t} value={t} className="bg-slate-950">
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs text-white/60">Location</label>
              <select
                value={locFilter}
                onChange={(e) => setLocFilter(e.target.value)}
                className="mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-white/80 outline-none"
              >
                {locations.map((l) => (
                  <option key={l} value={l} className="bg-slate-950">
                    {l}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-white/45">
          <span>
            Showing <span className="text-white/70">{filtered.length}</span>{" "}
            opening(s)
          </span>
          <button
            onClick={() => {
              setQueryText("");
              setTypeFilter("All");
              setLocFilter("All");
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-white/70 hover:bg-white/10"
          >
            Reset
          </button>
        </div>
      </motion.div>

      {/* JOBS GRID */}
      <div className="mt-6">
        {filtered.length === 0 ? (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <p className="text-white/70">No job openings match your search.</p>
            <p className="mt-2 text-sm text-white/45">
              Try different keywords (e.g., “FFmpeg”, “Airflow”, “AsyncIO”).
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid gap-4 sm:gap-6 md:grid-cols-2"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((job) => (
              <motion.div
                key={job._id}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 sm:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs text-white/50">
                      {job.dept} • {job.type} • {job.level}
                    </p>
                    <h2 className="mt-1 text-lg sm:text-xl font-semibold text-white truncate">
                      {job.title}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-2">
                      <Pill>📍 {job.location.join(" / ")}</Pill>
                      <Pill>🕒 {job.experience}</Pill>
                    </div>
                  </div>

                  <button
                    onClick={() => openJob(job)}
                    className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
                  >
                    View
                  </button>
                </div>

                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  {job.short}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.slice(0, 6).map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                  {job.tags.length > 6 ? <Pill>+{job.tags.length - 6}</Pill> : null}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <button
                    onClick={() => openJob(job)}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
                  >
                    See details
                  </button>

                  <button
                    onClick={() => onApplyClick(job)}
                    className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90"
                  >
                    Apply
                  </button>
                </div>

                <div className="mt-4 text-xs text-white/35">
                  Posted: {job.createdAt}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* MODAL */}
      <JobModal
        open={open}
        job={selectedJob}
        onClose={() => setOpen(false)}
      />

      {/* FOOTER CTA */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-white">Don’t see your role?</h3>
        <p className="mt-2 text-sm text-white/70 max-w-2xl leading-relaxed">
          Send your CV and a short note about what you’re great at (automation,
          pipelines, media processing, AI workflows). We’ll reach out when a match opens.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => toast.success("Hook this to your contact email or form")}
            className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-white/90"
          >
            Send CV
          </button>
          <button
            onClick={() => {
              navigator.clipboard?.writeText("careers@yourdomain.com");
              toast.success("Copied email");
            }}
            className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10"
          >
            Copy careers email
          </button>
        </div>
      </div>
    </div>
  );
}

/*
========================================
HOW TO ADD MORE JOBS (NO ADMIN PANEL)
========================================
Just push another object into JOBS:

{
  _id: "unique-id",
  title: "Job Title",
  dept: "Department",
  experience: "1-3 years",
  location: ["Remote"],
  type: "Full-time",
  level: "Junior/Mid/Senior",
  createdAt: "2026-01-29",
  short: "1 line summary",
  tags: ["React", "Node", "..."],
  about: ["Paragraph 1", "Paragraph 2"],
  responsibilities: ["...", "..."],
  requirements: [{ title: "Group title", items: ["...", "..."] }],
  niceToHave: ["...", "..."]
}
*/
