import React from "react";
import { Dialog } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import toast from "react-hot-toast";
import axios from "axios";
import { UploadCloud, FileText, X } from "lucide-react";

import { db } from "../firebase";

/* ================= CLOUDINARY CONFIG ================= */
const CLOUD_NAME = "dxotdwlid";
const UPLOAD_PRESET = "resume_upload";

export default function ApplyModal({ open, setOpen, job }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const resumeFile = watch("resume")?.[0];

  const onSubmit = async (data) => {
    if (!job?._id) {
      toast.error("Job not found. Please refresh.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      toast.error("Please login to apply");
      return;
    }

    const toastId = toast.loading("Submitting application...");

    try {
      let resumeUrl = "";
      let resumePublicId = "";

      /* ================= UPLOAD PDF → CLOUDINARY ================= */
      if (data.resume?.[0]) {
        const file = data.resume[0];

        if (file.type !== "application/pdf") {
          toast.error("Only PDF resumes are allowed", { id: toastId });
          return;
        }

        if (file.size > 2 * 1024 * 1024) {
          toast.error("Resume must be under 2MB", { id: toastId });
          return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", UPLOAD_PRESET);
        formData.append("folder", "resumes");

        // ✅ IMPORTANT: RAW UPLOAD
        const uploadRes = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
          formData
        );

        resumeUrl = uploadRes.data.secure_url;
        resumePublicId = uploadRes.data.public_id;
      }

      /* ================= SAVE → FIRESTORE ================= */
      await addDoc(collection(db, "applications"), {
        jobId: job._id,
        jobTitle: job.title,

        fullName: data.fullName,
        email: data.email,
        phone: data.phone || "",
        coverLetter: data.coverLetter || "",

        // ✅ SAVE BOTH
        resumeUrl,
        resumePublicId,

        userId: storedUser.uid,
        status: "pending",
        createdAt: serverTimestamp(),
      });

      toast.success("Application submitted successfully!", { id: toastId });

      reset();
      setOpen(false);
    } catch (error) {
      console.error("APPLICATION ERROR:", error);
      toast.error(
        error?.response?.data?.error?.message ||
          error.message ||
          "Failed to submit application",
        { id: toastId }
      );
    }
  };

  if (!job) return null;

  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-lg rounded-2xl bg-gradient-to-b from-[#071a28] to-[#071426] border border-slate-700 shadow-2xl p-6">
          <Dialog.Title className="text-xl font-semibold text-white mb-1">
            Apply for {job.title}
          </Dialog.Title>

          <p className="text-sm text-slate-400 mb-4">
            Submit your details and resume (PDF only)
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input
              {...register("fullName", { required: true })}
              placeholder="Full name"
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white"
            />

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white"
            />

            <input
              {...register("phone")}
              placeholder="Phone number"
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white"
            />

            <textarea
              {...register("coverLetter")}
              placeholder="Cover letter (optional)"
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white h-28"
            />

            {/* ===== PDF UPLOAD UI ===== */}
            <div className="border border-dashed border-slate-600 rounded-xl p-4 bg-[#0B1B2E] hover:border-blue-500 transition">
              {!resumeFile ? (
                <label className="flex flex-col items-center cursor-pointer text-center">
                  <UploadCloud className="w-8 h-8 text-blue-400 mb-2" />
                  <p className="text-sm text-slate-300">Upload resume (PDF)</p>
                  <p className="text-xs text-slate-500">Max size 2MB</p>

                  <input
                    type="file"
                    accept="application/pdf"
                    {...register("resume")}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="flex items-center justify-between bg-slate-900 border border-slate-700 rounded-lg p-3">
                  <div className="flex items-center gap-3">
                    <FileText className="text-blue-400" />
                    <span className="text-sm text-slate-200 truncate max-w-[220px]">
                      {resumeFile.name}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setValue("resume", null)}
                    className="text-slate-400 hover:text-red-400"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300"
              >
                Cancel
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
