import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `block px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-300 hover:bg-[#1E293B]"
    }`;

  return (
    <aside className="w-64 bg-[#071426] border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-xl font-semibold text-white">Admin Panel</h1>
        <p className="text-sm text-slate-400">Employee Access</p>
      </div>

      <nav className="p-4 space-y-2">
        <NavLink to="/admin" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/admin/jobs" className={linkClass}>
          Manage Jobs
        </NavLink>

        <NavLink to="/admin/jobs/add" className={linkClass}>
          Add Job
        </NavLink>

        <NavLink to="/admin/applications" className={linkClass}>
          Applications
        </NavLink>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <button
          onClick={logout}
          className="w-full py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white"
        >
          Logout
        </button>
      </div>
    </aside>
  );
}
