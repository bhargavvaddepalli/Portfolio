import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faReact, 
  faJs, 
  faNodeJs, 
  faHtml5, 
  faCss3Alt, 
  faGithub, 
  faPython, 
  faAws,
  faDocker,
  faNpm,
  faJava
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode, faServer, faBolt, faCog } from "@fortawesome/free-solid-svg-icons";

const Skills = () => {
  const skillsData = [
    { name: "HTML5", icon: faHtml5, color: "#E34F26" },
    { name: "CSS3", icon: faCss3Alt, color: "#1572B6" },
    { name: "Java", icon: faJava, color: "#007396" },
    { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
    { name: "ReactJS", icon: faReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: faCss3Alt, color: "#06B6D4" },
    { name: "Framer Motion", icon: faBolt, color: "#0055FF" },
    { name: "Node.js", icon: faNodeJs, color: "#43853D" },
    { name: "MongoDB", icon: faDatabase, color: "#47A248" },
    { name: "Github", icon: faGithub, color: "#F05032" },
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
        viewport={{ amount: 0.5 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut"
        }}
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
        viewport={{ amount: 0.2 }}
        transition={{ 
          duration: 0.8, 
          ease: "easeOut"
        }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1
            }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              className="bg-gray-800 bg-opacity-50 p-6 rounded-full mb-4 shadow-lg hover:shadow-xl transition-all"
              whileHover={{ 
                boxShadow: `0 0 15px ${skill.color}`,
                backgroundColor: "rgba(31, 41, 55, 0.8)" 
              }}
            >
              <FontAwesomeIcon 
                icon={skill.icon} 
                className="text-4xl md:text-5xl" 
                style={{ color: skill.color }} 
              />
            </motion.div>
            <p className="text-lg font-medium text-center">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;