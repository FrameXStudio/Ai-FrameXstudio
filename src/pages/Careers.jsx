import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import JobCard from "../components/JobCard";
import ApplyModal from "../components/ApplyModal";
import { db } from "../firebase";

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const q = query(collection(db, "jobs"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const jobsData = snapshot.docs.map((doc) => ({
          _id: doc.id,
          ...doc.data(),
        }));

        setJobs(jobsData);
        setLoading(false);
      },
      (error) => {
        console.error("Failed to fetch jobs:", error);
        toast.error("Failed to load job listings");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const onApplyClick = (job) => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please log in to apply");
      return;
    }

    setSelectedJob(job);
    setOpen(true);
  };

  return (
    <div>

      {/* ================= PAGE TITLE ================= */}
      <motion.h1
        className="text-3xl font-semibold mb-6"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        Careers
      </motion.h1>

      {/* ================= LOADING ================= */}
      {loading && (
        <motion.p
          className="text-slate-400"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Loading job opportunities...
        </motion.p>
      )}

      {/* ================= EMPTY STATE ================= */}
      {!loading && jobs.length === 0 && (
        <motion.p
          className="text-slate-400"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          No job openings available right now.
        </motion.p>
      )}

      {/* ================= JOBS GRID ================= */}
      {!loading && jobs.length > 0 && (
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {jobs.map((job) => (
            <motion.div
              key={job._id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <JobCard
                job={job}
                onApply={() => onApplyClick(job)}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* ================= APPLY MODAL ================= */}
      <ApplyModal open={open} setOpen={setOpen} job={selectedJob} />
    </div>
  );
}
