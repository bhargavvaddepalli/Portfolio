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
        viewport={{ once: true, amount: 0.5 }}
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
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-lg md:text-xl max-w-3xl text-gray-200 text-center"
      >
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 leading-relaxed"
        >
          Hey there! I'm <span className="font-semibold">Vaddepalli Bhargava Raghava</span>, a passionate web developer who loves crafting seamless and engaging digital experiences.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 leading-relaxed"
        >
          As a <span className="font-semibold">MERN Stack Developer</span>, I thrive on building dynamic, user-friendly web applications that bring ideas to life. From designing intuitive interfaces to optimizing backend performance, I enjoy every step of the development journey.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="leading-relaxed"
        >
          With expertise in <span className="font-semibold">JavaScript, React, Node.js, and MongoDB</span>, I focus on creating scalable and efficient solutions that make a real impact. I'm always eager to explore new technologies and push the boundaries of innovation.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
