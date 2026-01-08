import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Eye, Download, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { db } from "../../firebase";

export default function Applications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "applications"),
      orderBy("createdAt", "desc")
    );

    const unsub = onSnapshot(q, (snap) => {
      setApplications(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return () => unsub();
  }, []);

  /* ================= HELPERS ================= */
  const isValidCloudinaryUrl = (url) =>
    url?.startsWith("https://res.cloudinary.com/");

  const getDownloadUrl = (url) =>
    url.replace("/raw/upload/", "/raw/upload/fl_attachment/");

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    toast((t) => (
      <div className="space-y-3">
        <p className="font-semibold">Delete this application?</p>
        <div className="flex gap-3">
          <button
            onClick={async () => {
              toast.dismiss(t.id);
              try {
                await deleteDoc(doc(db, "applications", id));
                toast.success("Application deleted");
              } catch {
                toast.error("Failed to delete application");
              }
            }}
            className="px-3 py-1 bg-red-500 rounded text-white"
          >
            Delete
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="px-3 py-1 border rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-white">Applications</h1>

      {applications.length === 0 && (
        <p className="text-slate-400">No applications found.</p>
      )}

      {applications.map((app) => {
        const validResume = isValidCloudinaryUrl(app.resumeUrl);

        return (
          <div
            key={app.id}
            className="p-4 rounded-xl border border-slate-700 bg-[#0B1220]"
          >
            <p className="text-white font-semibold">{app.fullName}</p>
            <p className="text-slate-400 text-sm">{app.email}</p>
            <p className="text-slate-500 text-xs">Job: {app.jobTitle}</p>
            <p className="text-slate-500 text-xs">
              Phone: {app.phone || "—"}
            </p>

            {validResume && (
              <div className="flex gap-4 mt-3 text-xs">
                {/* VIEW */}
                <a
                  href={app.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-400 hover:underline"
                >
                  <Eye size={14} />
                  View
                </a>

                {/* DOWNLOAD */}
                <a
                  href={getDownloadUrl(app.resumeUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-green-400 hover:underline"
                >
                  <Download size={14} />
                  Download
                </a>

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(app.id)}
                  className="flex items-center gap-1 text-red-400 hover:underline"
                >
                  <Trash2 size={14} />
                  Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
