import React from "react";

export default function JobCard({ job, onApply }) {
  return (
    <div className="p-6 rounded-2xl bg-[#061021] border border-slate-700">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold text-white">{job.title}</h3>
          <div className="text-slate-400 text-sm">
            {job.location} • {job.type}
          </div>
        </div>

        {/* ✅ PASS JOB */}
        <button
          onClick={() => onApply(job)}
          className="px-4 py-2 rounded-lg bg-accent text-black font-medium"
        >
          Apply
        </button>
      </div>

      <p className="mt-4 text-slate-300">
        {job.description?.slice(0, 200)}...
      </p>
    </div>
  );
}
