import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 md:px-12 py-20 relative"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{  amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 text-center tracking-tight"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
          About Me
        </span>
      </motion.h1>

      {/* Animated Content Container */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-lg md:text-xl max-w-3xl text-gray-200 text-center"
      >
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{  amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 leading-relaxed"
        >
          Hi, I'm <span className="font-semibold text-blue-400">Vaddepalli Bhargava Raghava</span> — a passionate Full Stack Developer focused on building modern, high-performing web applications.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 leading-relaxed"
        >
          I specialize in creating seamless digital experiences, from intuitive user interfaces to robust backend systems. My approach combines <span className="font-semibold">clean design</span>, <span className="font-semibold">efficient architecture</span>, and <span className="font-semibold">scalable solutions</span> to deliver real value for users and businesses.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6 leading-relaxed"
        >
          With strong expertise in <span className="font-semibold text-blue-400">JavaScript, Next.js, React, Node.js, Java, and MongoDB</span>, I develop fast, responsive, and reliable applications tailored to real-world needs.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="leading-relaxed"
        >
          I'm driven by continuous learning and enjoy exploring new technologies to build smarter, more impactful products.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
