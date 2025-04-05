import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A full-stack MERN e-commerce platform with authentication and payment integration.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing my skills, projects, and resume.",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    title: "Chat Application",
    description: "A real-time chat app using WebSockets and Firebase authentication.",
    image: "https://via.placeholder.com/300",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div 
    id="projects" className="min-h-screen bg-black text-white px-6 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="bg-gray-900 p-4 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} className="rounded-md w-full h-40 object-cover" />
            <CardContent>
              <h3 className="text-xl font-semibold mt-3">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.description}</p>
              <Button className="mt-4 w-full">Explore</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={true} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="bg-gray-900 text-white">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
            </DialogHeader>
            <img src={selectedProject.image} alt={selectedProject.title} className="rounded-md w-full h-60 object-cover mb-4" />
            <p>{selectedProject.description}</p>
            <Button className="mt-4 w-full" onClick={() => setSelectedProject(null)}>
              Close
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
