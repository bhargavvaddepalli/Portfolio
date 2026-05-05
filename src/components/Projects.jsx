import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import EcommerceImg from "../assets/Ecommerce.png";
import ChatAppImg from "../assets/chatapp.png";
import LoopImg from "../assets/loop.png";
import PhotographyImg from "../assets/photography.png";
import PetShopImg from "../assets/petshop.png";
import WeddingImg from "../assets/wedding.png";
import PhotographyTrailer from "../assets/photography-trailer.mp4";
import PetShopTrailer from "../assets/petshop-trailer.mp4";
import WeddingTrailer from "../assets/wedding-trailer.mp4";

const ProjectImage = ({ project, index }) => {
  const [showVideo, setShowVideo] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!project.trailer || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start 2-second timer when visible
          timerRef.current = setTimeout(() => {
            setShowVideo(true);
          }, 2000);
        } else {
          // Clear timer and stop video when scrolled out
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
          setShowVideo(false);
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [project.trailer]);

  // Force play on mobile when video appears
  useEffect(() => {
    if (showVideo && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked — retry muted
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        });
      }
    }
  }, [showVideo]);

  return (
    <motion.div
      ref={containerRef}
      className="w-full lg:w-1/2 relative overflow-hidden rounded-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Static Image */}
      <img
        src={project.image}
        alt={project.title}
        className={`rounded-lg shadow-xl w-full h-auto object-cover transition-opacity duration-700 ${
          showVideo ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video Overlay */}
      {project.trailer && showVideo && (
        <video
          ref={videoRef}
          src={project.trailer}
          autoPlay
          muted
          loop
          playsInline
          webkit-playsinline="true"
          className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl animate-fadeIn"
        />
      )}
    </motion.div>
  );
};


const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Photography Portfolio",
      description:
        "A premium photography portfolio website for Rajesh Kanna Photography, featuring stunning image galleries, smooth animations, auto-sliding albums, and a fully responsive design optimized for showcasing professional photography work.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "Supabase",
      ],
      image: PhotographyImg,
      trailer: PhotographyTrailer,
      github: "",
      live: "https://www.rajeshkannaphotography.com/"
    },
    {
      id: 2,
      title: "Pet Shop E-Commerce",
      description:
        "A full-featured pet shop e-commerce platform with product catalog, category filtering for dogs and cats, shopping cart, user authentication, and a clean modern UI focused on pet nutrition products.",
      technologies: [
        "React",
        "Node.js",
        "Tailwind CSS",
        "Vercel",
      ],
      image: PetShopImg,
      trailer: PetShopTrailer,
      github: "",
      live: "https://pet-shop-ashen.vercel.app/shop"
    },
    {
      id: 3,
      title: "Wedding Website",
      description:
        "A beautiful, traditional Telugu wedding invitation website featuring elegant gold-themed design, animated elements, auto-sliding photo galleries, venue map integration, and WhatsApp RSVP — optimized for sharing on mobile.",
      technologies: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "Framer Motion",
      ],
      image: WeddingImg,
      trailer: WeddingTrailer,
      github: "",
      live: "https://wedding-website-sepia-phi.vercel.app"
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
              {/* Project Image / Video */}
              <ProjectImage project={project} index={index} />

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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                    >
                      <FontAwesomeIcon icon={faGithub} /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                    </a>
                  )}
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
