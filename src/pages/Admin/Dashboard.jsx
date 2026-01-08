import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

export default function Dashboard() {
  const [jobsCount, setJobsCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "jobs"), (snapshot) => {
      setJobsCount(snapshot.size);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="bg-[#0F172A] border border-slate-700 rounded-xl p-6">
          <h3 className="text-slate-400">Total Jobs</h3>
          <p className="text-3xl font-bold mt-2">{jobsCount}</p>
        </div>

        <div className="bg-[#0F172A] border border-slate-700 rounded-xl p-6">
          <h3 className="text-slate-400">Active Jobs</h3>
          <p className="text-3xl font-bold mt-2">{jobsCount}</p>
        </div>

        <div className="bg-[#0F172A] border border-slate-700 rounded-xl p-6">
          <h3 className="text-slate-400">Quick Action</h3>
          <button
            onClick={() => navigate("/admin/jobs/add")}
            className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-lg"
          >
            + Add New Job
          </button>
        </div>
      </div>

      {/* Welcome */}
      <div className="bg-[#0F172A] border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-2">
          Welcome to Admin Panel
        </h2>
        <p className="text-slate-400">
          Manage job postings and keep the Careers page up to date.
        </p>
      </div>
    </div>
  );
}
