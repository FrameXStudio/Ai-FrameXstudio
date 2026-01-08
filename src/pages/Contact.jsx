import React from "react";
import { motion } from "framer-motion";

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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Contact() {
  return (
    <motion.section
      className="bg-black text-white py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto">

        {/* ================= TOP SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* TEXT */}
          <motion.div variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-sm tracking-widest text-gray-400 mb-2"
            >
              📩 CONTACT
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold mb-4"
            >
              Let’s Talk
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              className="text-xl font-semibold mb-6"
            >
              Ready to Take Your Content Global?
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-300 leading-relaxed"
            >
              Whether you’re planning a regional release or a global rollout,
              <span className="font-semibold text-white">
                {" "}Framex Digital Studio{" "}
              </span>
              can help you localize faster—without losing cinematic quality.
            </motion.p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/src/assets/contact-image.jpg"
              alt="Contact Framex"
              className="rounded-xl shadow-lg object-cover w-full h-[360px]"
            />
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}
        <motion.div
          className="border-t border-gray-700 my-16"
          variants={fadeIn}
        />

        {/* ================= FORM SECTION ================= */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* FORM */}
          <motion.form
            className="space-y-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h3
              variants={fadeUp}
              className="text-2xl font-semibold mb-6"
            >
              Book a Demo
            </motion.h3>

            {[
              "Name",
              "Company",
              "Email",
              "Project Type",
              "Languages Required",
            ].map((placeholder, i) => (
              <motion.input
                key={i}
                variants={fadeUp}
                type={placeholder === "Email" ? "email" : "text"}
                placeholder={placeholder}
                className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-md
                           focus:outline-none focus:border-white"
              />
            ))}

            <motion.textarea
              variants={fadeUp}
              rows="4"
              placeholder="Message"
              className="w-full bg-transparent border border-gray-600 px-4 py-3 rounded-md
                         focus:outline-none focus:border-white"
            />

            <motion.button
              variants={fadeUp}
              type="submit"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-black px-6 py-3 rounded-md font-semibold
                         hover:bg-gray-200 transition"
            >
              Book a Demo
            </motion.button>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <p className="text-gray-400 mb-2">
              Or reach us at:
            </p>
            <p className="text-lg font-semibold">
              contact@framexdigitalstudio.com
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
