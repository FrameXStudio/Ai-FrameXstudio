import React from "react";
import { motion } from "framer-motion";
import Contactimage from "../assets/contact-image.webp";

/* ================= MOTION VARIANTS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Contact() {
  return (
    <motion.section
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn}
    >
      {/* subtle background glow (same theme, simple) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* ================= TOP SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <motion.div variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-sm tracking-widest text-gray-400 mb-2"
            >
              📩 CONTACT
            </motion.p>

            <motion.h2 variants={fadeUp} className="text-4xl font-bold mb-4">
              Let’s Talk
            </motion.h2>

            <motion.h3 variants={fadeUp} className="text-xl font-semibold mb-6">
              Ready to Take Your Content Global?
            </motion.h3>

            <motion.p variants={fadeUp} className="text-gray-300 leading-relaxed">
              Whether you’re planning a regional release or a global rollout,{" "}
              <span className="font-semibold text-white">
                FrameX AI Studio
              </span>{" "}
              can help you localize faster—without losing cinematic quality.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7">
              <a
                href="mailto:hello@framexstudio.ai"
                className="inline-flex items-center gap-2 text-white font-semibold underline underline-offset-4 hover:text-gray-200 transition"
              >
                hello@framexstudio.ai
              </a>
              <p className="text-sm text-gray-400 mt-2">
                We typically respond within 24–48 hours.
              </p>
            </motion.div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="rounded-2xl border border-white/10 bg-white/5 p-3"
          >
            <img
              src={Contactimage}
              alt="Contact Framex"
              className="rounded-xl shadow-lg object-cover w-full h-[360px]"
            />
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <motion.div
          className="border-t border-gray-800 my-16"
          variants={fadeIn}
        />

        {/* ================= FORM + INFO ================= */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.form
            className="space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.h3 variants={fadeUp} className="text-2xl font-semibold">
              Book a Demo
            </motion.h3>

            {["Name", "Company", "Email", "Project Type", "Languages Required"].map(
              (placeholder, i) => (
                <motion.input
                  key={i}
                  variants={fadeUp}
                  type={placeholder === "Email" ? "email" : "text"}
                  placeholder={placeholder}
                  className="w-full bg-transparent border border-white/15 px-4 py-3 rounded-xl
                             placeholder:text-gray-500 focus:outline-none focus:border-white/40"
                />
              )
            )}

            <motion.textarea
              variants={fadeUp}
              rows="5"
              placeholder="Message"
              className="w-full bg-transparent border border-white/15 px-4 py-3 rounded-xl
                         placeholder:text-gray-500 focus:outline-none focus:border-white/40"
            />

            <motion.button
              variants={fadeUp}
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold
                         hover:bg-gray-200 transition"
            >
              Book a Demo
            </motion.button>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Email */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <p className="text-gray-400 mb-2">Or reach us at:</p>
              <p className="text-lg font-semibold">hello@framexstudio.ai</p>
            </motion.div>

            {/* Addresses */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8"
            >
              <p className="text-lg font-semibold mb-4">Company Address</p>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm font-semibold mb-2">USA Address</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    4682 Vasari Street
                    <br />
                    Dublin, CA 94568
                    <br />
                    USA
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                  <p className="text-sm font-semibold mb-2">India Address</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Flat No. 502
                    <br />
                    Maa Gayathri Avenue
                    <br />
                    H.No. 6-3-602/9
                    <br />
                    Hill Top Colony, Erramanzil
                    <br />
                    Hyderabad 500082
                    <br />
                    Telangana, India
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}