import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Greeting = () => {
  return (
    <div className="p-6 sm:p-12  mt-50 text-xl lg:ml-50 mb-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-left text-4xl sm:text-5xl lg:text-5xl font-bold"
      >
        Hey Buddy..!
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-left text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold mt-2"
      >
        I'M{" "}
        <span className="text-blue-500">
          <TypeAnimation
            sequence={["Bhargav", 1000, "Full Stack Developer", 1000]}
            speed={50}
            repeat={Infinity}
            style={{ display: "inline-block" }}
          />
        </span>
      </motion.h2>

      <a 
        href="#projects" 
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 text-lg sm:text-xl rounded-lg hover:bg-blue-700 transition-all"
      >
        View Projects
      </a>
    </div>
  );
};

export default Greeting;
