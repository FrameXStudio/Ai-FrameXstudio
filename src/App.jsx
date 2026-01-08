import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedAdminRoute from "./components/ProtectedAdminRoute";

// ✅ ADMIN (CASE-SAFE IMPORTS)
import AdminLayout from "./pages/Admin/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Jobs from "./pages/Admin/Jobs";
import AddJob from "./pages/Admin/AddJob";
import EditJob from "./pages/Admin/EditJob";
import Applications from "./pages/Admin/Applications";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#040912] text-white">
      <Header />

      <main className="flex-1 w-full px-6 py-8">
        <Routes>
          {/* ===== PUBLIC ROUTES ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ===== ADMIN ROUTES (PROTECTED ONCE) ===== */}
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminLayout />
              </ProtectedAdminRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="jobs/add" element={<AddJob />} />
            <Route path="jobs/edit/:id" element={<EditJob />} />
            <Route path="applications" element={<Applications />} />
          </Route>

          {/* ===== FALLBACK ===== */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
