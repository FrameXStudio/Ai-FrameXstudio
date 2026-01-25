import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Globe, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050B14] mt-32 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[400px] 
                        bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* CTA STRIP */}
        <div className="mb-20 rounded-2xl border border-slate-800 
                        bg-gradient-to-br from-[#0B1220] to-[#050B14]
                        p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-white max-w-xl">
            Ready to localize your story with AI precision?
          </h3>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                       bg-blue-500 hover:bg-blue-400 text-black font-medium
                       transition shadow-lg shadow-blue-500/20"
          >
            Get in touch
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          {/* BRAND */}
          <div>
            <h3 className="text-3xl font-semibold text-white tracking-tight">
              FrameX<span className="text-blue-400">.AI</span> Studio
            </h3>

            <p className="text-slate-400 mt-5 max-w-sm leading-relaxed">
              We combine advanced AI with professional post-production workflows
              to help stories travel across languages without losing emotion,
              performance, or creative intent.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Company
            </h4>

            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-blue-400 
                               transition relative after:absolute after:left-0 after:-bottom-1
                               after:h-[1px] after:w-0 after:bg-blue-400
                               hover:after:w-full after:transition-all"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Connect
            </h4>

            <div className="flex gap-4">
              {[
                { icon: Globe, label: "Website", href: "#" },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/framexstudio/",
                },
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="group p-3 rounded-full bg-[#0D1525]
                             border border-slate-700
                             hover:border-blue-400
                             hover:shadow-[0_0_20px_#00aaff66]
                             transition"
                >
                  <Icon
                    size={18}
                    className="text-slate-300 group-hover:text-blue-400 transition"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-20 pt-8 border-t border-slate-800/70">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} FrameX AI Studio. All rights reserved.
            </p>

            <p className="text-slate-600 text-sm">
              Built for storytellers · Designed for scale
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
