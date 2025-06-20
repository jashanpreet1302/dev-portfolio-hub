import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js and MongoDB",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB"],
      colors: ["violet", "cyan", "emerald"]
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with D3.js and Python backend",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["D3.js", "Python", "Flask"],
      colors: ["violet", "cyan", "emerald"]
    },
    {
      id: 3,
      title: "Mobile App",
      description: "Cross-platform mobile application built with React Native",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React Native", "Firebase", "TypeScript"],
      colors: ["violet", "cyan", "emerald"]
    },
    {
      id: 4,
      title: "AI Chat Assistant",
      description: "Intelligent chatbot using OpenAI API and natural language processing",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "OpenAI", "FastAPI"],
      colors: ["violet", "cyan", "emerald"]
    }
  ];

  const getTechColor = (tech: string, index: number, colors: string[]) => {
    const colorMap = {
      violet: "bg-violet-600/20 text-violet-300",
      cyan: "bg-cyan-600/20 text-cyan-300",
      emerald: "bg-emerald-600/20 text-emerald-300"
    };
    return colorMap[colors[index % colors.length] as keyof typeof colorMap];
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
          >
            Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Showcasing my latest projects and creative endeavors
          </motion.p>
        </div>
        
        {/* Horizontal Scrolling Portfolio */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex-none w-80 glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-violet-400 mb-2">{project.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded-full text-xs ${getTechColor(tech, techIndex, project.colors)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="text-violet-400 hover:text-violet-300 transition-colors text-sm flex items-center">
                    View Project
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
            <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
