import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    requirements: "",
    location: "",
    salary: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // 🔹 Fetch existing job
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobRef = doc(db, "jobs", id);
        const jobSnap = await getDoc(jobRef);

        if (!jobSnap.exists()) {
          alert("Job not found");
          navigate("/admin/jobs");
          return;
        }

        setForm(jobSnap.data());
        setLoading(false);
      } catch (error) {
        alert("Failed to load job");
        navigate("/admin/jobs");
      }
    };

    fetchJob();
  }, [id, navigate]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const jobRef = doc(db, "jobs", id);

      await updateDoc(jobRef, {
        ...form,
        updatedAt: serverTimestamp(),
      });

      alert("Job updated successfully!");
      navigate("/admin/jobs");
    } catch (error) {
      alert("Failed to update job");
    }

    setSaving(false);
  };

  if (loading) {
    return <p className="text-slate-400">Loading job details...</p>;
  }

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl font-semibold mb-6">Edit Job</h1>

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
            disabled={saving}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
          >
            {saving ? "Updating..." : "Update Job"}
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
