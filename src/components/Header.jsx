import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHome, 
  faBriefcase, 
  faInfoCircle, 
  faEnvelope, 
  faFileAlt, 
  faBars, 
  faTimes, 
  faSearchPlus, 
  faSearchMinus, 
  faGear 
} from "@fortawesome/free-solid-svg-icons";
import ResumeImage from "../assets/Resume_Bhargav.png";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"; // Adjust the import path based on your file structure

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scale, setScale] = useState(0.9);
  const [isOpen, setIsOpen] = useState(false);

  const handleZoomIn = () => {
    if (scale < 3) setScale(scale + 0.2);
  };

  const handleZoomOut = () => {
    if (scale > 0.5) setScale(scale - 0.2);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-opacity-90 bg-black-900 text-white shadow-lg py-4 px-6 md:px-12 flex justify-between items-center z-40">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Portfolio</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">  
          <a href="#" className="flex items-center gap-2 hover:text-blue-500 transition duration-300">  
            <FontAwesomeIcon icon={faHome} className="mr-2" /> Home  
          </a>  
          <a href="#about" className="flex items-center gap-2 hover:text-blue-500 transition duration-300">  
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About  
          </a>  
          <a href="#skills" className="flex items-center gap-2 hover:text-blue-500 transition duration-300">  
            <FontAwesomeIcon icon={faGear} className="mr-2" /> Skills  
          </a>   
          <a href="#projects" className="flex items-center gap-2 hover:text-blue-500 transition duration-300">  
            <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Projects  
          </a>  
          
          <a href="#contact" className="flex items-center gap-2 hover:text-blue-500 transition duration-300">  
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact  
          </a>  
          <button  
            onClick={() => setIsModalOpen(true)}  
            className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition duration-300 cursor-pointer"  
          >  
            <FontAwesomeIcon icon={faFileAlt} /> Resume  
          </button>  
        </nav>

       {/* Mobile Navigation with Sheet */}
<Sheet open={isOpen} onOpenChange={setIsOpen}>
  <SheetTrigger asChild>
    <button
      className="md:hidden text-white p-2 rounded hover:bg-gray-700 transition duration-300 cursor-pointer"
    >
      <FontAwesomeIcon icon={faBars} size="lg" />
    </button>
  </SheetTrigger>
  <SheetContent side="right" className="bg-gray-900 text-white border-r-gray-800 w-70">
    <SheetHeader>
      <SheetTitle className="text-white text-xl">Hi</SheetTitle>
    </SheetHeader>
    <div className="p-2">
      <nav className="flex flex-col gap-2">
        <a 
          href="#" 
          className="flex items-center gap-2 hover:text-blue-500 transition duration-300 px-2 py-2"
          onClick={() => setIsOpen(false)}
        >  
          <FontAwesomeIcon icon={faHome} className="mr-2" /> Home  
        </a>  
        <a 
          href="#about" 
          className="flex items-center gap-2 hover:text-blue-500 transition duration-300 px-2 py-2"
          onClick={() => setIsOpen(false)}
        >  
          <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> About  
        </a>  
        <a 
          href="#skills" 
          className="flex items-center gap-2 hover:text-blue-500 transition duration-300 px-2 py-2"
          onClick={() => setIsOpen(false)}
        >  
          <FontAwesomeIcon icon={faGear} className="mr-2" /> Skills  
        </a>  
        <a 
          href="#projects" 
          className="flex items-center gap-2 hover:text-blue-500 transition duration-300 px-2 py-2"
          onClick={() => setIsOpen(false)}
        >  
          <FontAwesomeIcon icon={faBriefcase} className="mr-2" /> Projects  
        </a>  
       
        <a 
          href="#contact" 
          className="flex items-center gap-2 hover:text-blue-500 transition duration-300 px-2 py-2"
          onClick={() => setIsOpen(false)}
        >  
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Contact  
        </a>  
        <button  
          onClick={() => {
            setIsModalOpen(true);
            setIsOpen(false);
          }}  
          className="flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition duration-300 cursor-pointer mt-2"  
        >  
          <FontAwesomeIcon icon={faFileAlt} /> Resume  
        </button>
      </nav>
    </div>
  </SheetContent>
</Sheet>
      </header>

      {/* Resume Modal - completely rebuilt for better scrolling */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center">
          {/* Modal container with fixed dimensions */}
          <div className="bg-white rounded-lg shadow-2xl w-11/12 md:w-10/12 lg:w-4/5 h-5/6 flex flex-col">
            {/* Header bar */}
            <div className="bg-gray-800 p-3 rounded-t-lg flex justify-between items-center">
              <h2 className="text-white font-medium text-lg">Bhargava Raghava Vaddepalli - Resume</h2>
              <div className="flex gap-2">
                
                <button onClick={handleZoomIn} className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded">
                  <FontAwesomeIcon icon={faSearchPlus} />
                </button>
                <button onClick={handleZoomOut} className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded">
                  <FontAwesomeIcon icon={faSearchMinus} />
                </button>
                <button onClick={() => setIsModalOpen(false)} className="text-white bg-red-600 hover:bg-red-500 p-2 rounded">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
            </div>
            
            {/* Scrollable content area */}
            <div className="flex-1 overflow-y-auto bg-gray-100">
              {/* Centering container with padding */}
              <div className="flex justify-center p-4">
                {/* Image with appropriate styling for scaling */}
                <div 
                  style={{ 
                    maxWidth: "100%", 
                    height: "auto",
                    transformOrigin: "top center"
                  }}
                >
                  <img
                    src={ResumeImage}
                    alt="Bhargav's Resume"
                    style={{
                      transform: `scale(${scale})`,
                      transition: "transform 0.3s ease",
                      maxWidth: "100%",
                      height: "auto",
                      transformOrigin: "top center"
                    }}
                    className="shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;