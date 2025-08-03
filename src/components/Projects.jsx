import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment gateway integration using Stripe.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "Stripe API",
      ],
      image: "src/assets/Ecommerce.png",
      github: "https://github.com/bhargavvaddepalli/ELITE-WEAR",
      live: "https://project-demo.com"
    },
    {
      id: 2,
      title: "Real-Time Chat Application",
      description:
        "A PHP-based chat application that enables real-time messaging between users. Features include user authentication, chat rooms, and message timestamps.",
      technologies: ["PHP", "MySQL", "AJAX", "JavaScript", "HTML", "CSS"],
      image: "src/assets/chatapp.png", // Replace with your own screenshot URL
      github: "https://github.com/bhargavvaddepalli/PHP", // Replace with your GitHub repo URL
      live: "https://your-chat-app-demo.com", // Replace with your live project link if deployed
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard that connects to various social media APIs to provide insights and statistics in a unified interface.",
      technologies: ["React", "Chart.js", "Node.js", "Express", "OAuth"],
      image: "src/assets/loop.png",
      github: "https://github.com/bhargavvaddepalli/Loop-",
      live: "https://project-demo.com",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 md:px-12 py-20 relative"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-16 text-center tracking-tight"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
          My Projects
        </span>
      </motion.h1>

      {/* Projects Container */}
      <div className="w-full max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-20 last:mb-0"
          >
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <motion.div
                className="w-full lg:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </motion.div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-4">
                <motion.h3
                  className="text-3xl font-bold text-blue-500"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <motion.p
                  className="text-lg text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-900 bg-opacity-50 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </motion.div>

                {/* Links */}
                <motion.div
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                  >
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  {/* <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                  </a> */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
