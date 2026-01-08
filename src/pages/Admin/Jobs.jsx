import React, { useEffect, useState } from "react";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // 🔥 Real-time listener for jobs
    const unsubscribe = onSnapshot(collection(db, "jobs"), (snapshot) => {
      const jobsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobsData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );
    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "jobs", id));
      alert("Job deleted successfully");
    } catch (error) {
      alert("Failed to delete job");
    }
  };

  if (loading) {
    return <p className="text-slate-400">Loading jobs...</p>;
  }

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Manage Jobs</h1>
        <button
          onClick={() => navigate("/admin/jobs/add")}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
        >
          + Add Job
        </button>
      </div>

      {/* Empty State */}
      {jobs.length === 0 && (
        <div className="text-center text-slate-400 mt-20">
          No jobs posted yet.
        </div>
      )}

      {/* Jobs List */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-[#0F172A] border border-slate-700 rounded-xl p-5 flex justify-between items-start"
          >
            <div>
              <h2 className="text-xl font-semibold">{job.title}</h2>
              <p className="text-slate-400 mt-1">{job.location}</p>
              <p className="text-slate-500 text-sm mt-1">
                {job.salary || "Salary not specified"}
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => navigate(`/admin/jobs/edit/${job.id}`)}
                className="px-3 py-1 bg-yellow-500 hover:bg-yellow-600 text-black rounded"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(job.id)}
                className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
