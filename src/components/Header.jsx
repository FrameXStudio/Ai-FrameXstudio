import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#071426]/95 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="FrameX-AI Studio"
            className="h-12 object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-slate-200">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Careers", path: "/careers" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="relative group hover:text-white transition"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {!user && (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded border border-slate-600 hover:border-white transition"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white transition"
              >
                Sign Up
              </Link>
            </>
          )}

          {user && (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded text-white transition"
            >
              Logout
            </button>
          )}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#071426] border-t border-slate-800 px-6 py-6 space-y-4 text-slate-200">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Home
          </Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            About
          </Link>
          <Link to="/careers" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Careers
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-white">
            Contact
          </Link>

          {!user && (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2 border border-slate-600 rounded"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block text-center px-4 py-2 bg-blue-500 text-white rounded"
              >
                Sign Up
              </Link>
            </>
          )}

          {user && (
            <button
              onClick={logout}
              className="w-full px-4 py-2 bg-red-500 rounded text-white"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}
