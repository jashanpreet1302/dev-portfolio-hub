import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/lib/constants";

export default function PortfolioSection() {

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
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, rotateY: 45, scale: 0.8 }}
                whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: -5,
                  z: 50,
                  transition: { duration: 0.3 }
                }}
                className="flex-none w-80 glass-card overflow-hidden cursor-pointer"
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
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors text-sm flex items-center"
                    >
                      <i className="fab fa-github mr-1"></i>
                      GitHub
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm flex items-center"
                      >
                        Live Demo
                        <ExternalLink className="ml-1 w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Scroll indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {PROJECTS.map((_, index) => (
              <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-violet-500' : 'bg-slate-600'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
