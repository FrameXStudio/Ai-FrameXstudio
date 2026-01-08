import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, Twitter, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050B14] border-t border-slate-800 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-semibold text-white">
              FrameX<span className="text-blue-400">.AI</span> Studio
            </h3>

            <p className="text-slate-400 mt-4 max-w-sm leading-relaxed">
              We combine advanced AI with professional post-production workflows
              to help stories travel across languages without losing emotion,
              performance, or creative intent.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-slate-400">
              <li>
                <Link to="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-400 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">
              Connect
            </h4>

            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Website"
                className="p-3 rounded-full bg-[#0D1525] border border-slate-700
                           hover:border-blue-400 hover:text-blue-400
                           hover:shadow-[0_0_12px_#00aaff55] transition"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="p-3 rounded-full bg-[#0D1525] border border-slate-700
                           hover:border-blue-400 hover:text-blue-400
                           hover:shadow-[0_0_12px_#00aaff55] transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="p-3 rounded-full bg-[#0D1525] border border-slate-700
                           hover:border-blue-400 hover:text-blue-400
                           hover:shadow-[0_0_12px_#00aaff55] transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter / X"
                className="p-3 rounded-full bg-[#0D1525] border border-slate-700
                           hover:border-blue-400 hover:text-blue-400
                           hover:shadow-[0_0_12px_#00aaff55] transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-slate-800 mt-14 pt-8">

          {/* BOTTOM */}
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
