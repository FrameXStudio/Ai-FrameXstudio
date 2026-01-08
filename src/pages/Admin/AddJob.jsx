import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

export default function AddJob() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "jobs"), {
        title: form.title,
        description: form.description,
        requirements: form.requirements,
        location: form.location,
        salary: form.salary,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      alert("Job added successfully!");
      navigate("/admin/jobs");
    } catch (error) {
      alert("Failed to add job");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold mb-6">Add New Job</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-[#0F172A] border border-slate-700 rounded-xl p-6 space-y-4"
      >
        <div>
          <label className="block text-slate-300 mb-1">Job Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-[#1E293B] text-white border border-slate-600"
            required
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded bg-[#1E293B] text-white border border-slate-600"
            required
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-1">Requirements</label>
          <textarea
            name="requirements"
            value={form.requirements}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 rounded bg-[#1E293B] text-white border border-slate-600"
            required
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-[#1E293B] text-white border border-slate-600"
            required
          />
        </div>

        <div>
          <label className="block text-slate-300 mb-1">Salary (optional)</label>
          <input
            type="text"
            name="salary"
            value={form.salary}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded bg-[#1E293B] text-white border border-slate-600"
          />
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
          >
            {loading ? "Saving..." : "Save Job"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/admin/jobs")}
            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
