import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, 
  faJs, 
  faNodeJs, 
  faHtml5, 
  faCss3Alt, 
  faGit, 
  faPython, 
  faAws,
  faDocker,
  faNpm
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skillsData = [
    { name: "React", icon: faReact, color: "#61DAFB" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "Node.js", icon: faNodeJs, color: "#43853D" },
    { name: "HTML5", icon: faHtml5, color: "#E34F26" },
    { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
    { name: "MongoDB", icon: faDatabase, color: "#47A248" },
    { name: "Git", icon: faGit, color: "#F05032" },
    { name: "Python", icon: faPython, color: "#3776AB" },
    { name: "AWS", icon: faAws, color: "#FF9900" },
    { name: "Docker", icon: faDocker, color: "#2496ED" },
    { name: "NPM", icon: faNpm, color: "#CB3837" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 md:px-12 py-20 relative"
    >
      {/* Animated Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-16 text-center tracking-tight"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
          My Skills
        </span>
      </motion.h1>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-gray-800 bg-opacity-50 p-6 rounded-full mb-4 shadow-lg hover:shadow-xl transition-all">
              <FontAwesomeIcon 
                icon={skill.icon} 
                className="text-4xl md:text-5xl" 
                style={{ color: skill.color }} 
              />
            </div>
            <p className="text-lg font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;