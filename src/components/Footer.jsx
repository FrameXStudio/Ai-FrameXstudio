import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Twitter,
  Globe,
  ArrowRight,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { icon: Globe, label: "Website", href: "#" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/framexstudio/",
    },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* BACKDROP */}
      <div className="absolute inset-0 -z-10 bg-[#050A14]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.16),transparent_55%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.10),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 opacity-25 [mask-image:radial-gradient(70%_55%_at_50%_20%,black,transparent)] bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP CTA CARD */}
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/6 to-white/[0.02] p-8 sm:p-10 shadow-[0_35px_90px_-60px_rgba(0,0,0,0.95)]">
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[900px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-24 right-0 h-72 w-[520px] rounded-full bg-indigo-500/10 blur-[120px]" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                Let’s talk
              </p>

              <h3 className="mt-4 text-2xl md:text-3xl font-semibold text-white max-w-2xl leading-tight">
                Ready to localize your story with AI precision?
              </h3>

              <p className="mt-3 text-slate-400 max-w-2xl">
                We combine advanced AI with professional post-production workflows so
                stories travel across languages without losing emotion or intent.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-3 font-semibold text-slate-950 hover:bg-white/90 transition shadow-[0_18px_50px_-25px_rgba(255,255,255,0.25)]"
            >
              Get in touch
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER GRID */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* BRAND */}
          <div className="md:col-span-5">
            <h3 className="text-3xl font-semibold tracking-tight text-white">
              FrameX<span className="text-blue-400">.AI</span> Studio
            </h3>

            <p className="mt-4 text-slate-400 leading-relaxed max-w-md">
              We combine advanced AI with professional post-production workflows
              to help stories travel across languages without losing emotion,
              performance, or creative intent.
            </p>

            {/* Small info row (optional, looks premium) */}
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <Mail className="h-4 w-4 text-blue-300" />
                contact@framex.ai
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                <MapPin className="h-4 w-4 text-blue-300" />
                India • Global
              </span>
            </div>
          </div>

          {/* LINKS */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-5 tracking-wide">
              Company
            </h4>

            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white/25 group-hover:bg-blue-400 transition" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold mb-5 tracking-wide">
              Connect
            </h4>

            <div className="flex flex-wrap gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href?.startsWith("http") ? "_blank" : undefined}
                  rel={href?.startsWith("http") ? "noreferrer" : undefined}
                  className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:border-blue-400/40 transition"
                >
                  <Icon className="h-4 w-4 text-slate-300 group-hover:text-blue-300 transition" />
                  <span className="text-sm text-slate-300 group-hover:text-white transition">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {year} FrameX AI Studio. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm">
            Built for storytellers · Designed for scale
          </p>
        </div>
      </div>
    </footer>
  );
}
