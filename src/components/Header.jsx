import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Header() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    if (!window.confirm("Are you sure you want to logout?")) return;
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#071426]/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="FrameX AI Studio"
            className="h-11 object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative transition-all duration-300 hover:text-white
                  ${isActive ? "text-white" : ""}`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}

          {user && (
            <button
              onClick={logout}
              className="ml-6 px-4 py-2 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all"
            >
              Logout
            </button>
          )}
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden
        ${menuOpen ? "max-h-[500px]" : "max-h-0"}`}
      >
        <div className="px-6 py-6 space-y-4 bg-[#071426] border-t border-white/10 text-slate-300">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className="block text-lg hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}

          {user && (
            <button
              onClick={logout}
              className="w-full mt-4 px-4 py-3 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition-all"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
